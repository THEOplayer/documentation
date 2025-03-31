import type {
  ApiPageMetadata,
  InfoPageMetadata,
  MarkdownGenerator,
  SchemaPageMetadata,
  TagPageMetadata,
} from 'docusaurus-plugin-openapi-docs/lib/types';
import { createApiPageMD, createInfoPageMD, createSchemaPageMD, createTagPageMD } from 'docusaurus-plugin-openapi-docs/lib/markdown';
import kebabCase from 'lodash/kebabCase';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';
import type { Node } from 'unist';

export default function openApiLinkRewrite(): MarkdownGenerator {
  const processor = new MarkdownProcessor();
  return {
    createApiPageMD(pageData: ApiPageMetadata) {
      return createApiPageMD({
        ...pageData,
        description: processor.rewrite(pageData.description),
        api: {
          ...pageData.api,
          description: processor.rewrite(pageData.api.description),
        },
      });
    },
    createInfoPageMD(pageData: InfoPageMetadata) {
      return createInfoPageMD({
        ...pageData,
        description: processor.rewrite(pageData.description),
        info: {
          ...pageData.info,
          description: processor.rewrite(pageData.info.description),
        },
      });
    },
    createTagPageMD(pageData: TagPageMetadata) {
      return createTagPageMD({
        ...pageData,
        description: processor.rewrite(pageData.description),
        tag: {
          ...pageData.tag,
          description: processor.rewrite(pageData.tag.description),
        },
      });
    },
    createSchemaPageMD(pageData: SchemaPageMetadata) {
      return createSchemaPageMD({
        ...pageData,
        description: processor.rewrite(pageData.description),
        schema: {
          ...pageData.schema,
          description: processor.rewrite(pageData.schema.description),
        },
      });
    },
  };
}

class MarkdownProcessor {
  #remark = remark().use(this.#rewriteMarkdownApiLinks.bind(this));

  rewrite(input: string | undefined): string | undefined {
    if (!input) {
      return input;
    }
    const output = this.#remark.processSync(input);
    return output.toString();
  }

  #rewriteMarkdownApiLinks() {
    return (tree: Node) => {
      visit(tree, (node: any) => {
        // Link: [text](url)
        // Definition: [label]: url
        // https://github.com/syntax-tree/mdast/blob/main/readme.md#nodes
        if (node.type === 'link' || node.type === 'definition') {
          // Examples:
          //   #operation/PublishTokenV1_ReadToken
          //   #tag/MediaAssets/operation/MediaAssets_GetMediaAssets
          const operationMatch = (node.url as string).match(/^#(?:tag\/\w+\/)?operation\/(.+)$/);
          if (operationMatch) {
            let operationId = operationMatch[1];
            // TODO Fix broken links in Millicast REST API
            if (operationId === 'Account_MediaAssetUsage') {
              operationId = 'Analytics_MediaAssetUsage';
            } else if (operationId === 'Account_RecordFileUsageBillable') {
              operationId = 'Analytics_MediaAssetUsageBillable';
            } else if (operationId === 'MediaAssets_GetMediaAssets') {
              operationId = 'MediaAssets_ReadMediaAsset';
            }
            // https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/blob/v4.3.3/packages/docusaurus-plugin-openapi-docs/src/openapi/openapi.ts#L145-L147
            const operationPageId = kebabCase(operationId);
            node.url = `${operationPageId}.api.mdx`;
          }
        }
      });
    };
  }
}
