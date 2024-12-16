import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/signaling/theoads-api",
    },
    {
      type: "category",
      label: "Monetized-Stream",
      items: [
        {
          type: "doc",
          id: "api/signaling/get-monetized-streams",
          label: "GetMonetizedStreams",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/signaling/create-monetized-stream",
          label: "CreateMonetizedStream",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/signaling/get-monetized-stream",
          label: "GetMonetizedStream",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/signaling/update-monetized-stream",
          label: "UpdateMonetizedStream",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/signaling/delete-monetized-stream",
          label: "DeleteMonetizedStream",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/signaling/create-monetized-stream-break",
          label: "CreateMonetizedStreamBreak",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/signaling/create-monetized-stream-overlay",
          label: "CreateMonetizedStreamOverlay",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/signaling/update-monetized-stream-layout",
          label: "UpdateMonetizedStreamLayout",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Status",
      items: [
        {
          type: "doc",
          id: "api/signaling/status",
          label: "Status",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
