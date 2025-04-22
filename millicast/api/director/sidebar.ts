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
      label: "DrmLicence",
      items: [
        {
          type: "doc",
          id: "api/director/drm-licence-get-drm-licence",
          label: "DrmLicence_GetDrmLicence",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/director/drm-licence-get-fairplay-certificate",
          label: "DrmLicence_GetFairplayCertificate",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "MultiTrackVideo",
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
      label: "Whep",
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
      label: "Whip",
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