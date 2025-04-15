import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/director/director-api",
    },
    {
      type: "category",
      label: "Director",
      items: [
        {
          type: "doc",
          id: "api/director/director-publish",
          label: "Publish",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/director/director-subscribe",
          label: "Subscribe",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "DRM Licence",
      items: [
        {
          type: "doc",
          id: "api/director/drm-licence-get-drm-licence",
          label: "Get DRM Licence",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/director/drm-licence-get-fairplay-certificate",
          label: "Get Fairplay Certificate",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Multi Track Video",
      items: [
        {
          type: "doc",
          id: "api/director/multi-track-video-configuration",
          label: "Configuration",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "WHEP",
      items: [
        {
          type: "doc",
          id: "api/director/whep-whep-subscribe",
          label: "WHEP",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "WHIP",
      items: [
        {
          type: "doc",
          id: "api/director/whip-whip-publish",
          label: "WHIP",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
