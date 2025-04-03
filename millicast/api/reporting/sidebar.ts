import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/reporting/advanced-analytics-api",
    },
    {
      type: "category",
      label: "Analytics",
      items: [
        {
          type: "doc",
          id: "api/reporting/records-get-viewer-records",
          label: "Viewer Records",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
