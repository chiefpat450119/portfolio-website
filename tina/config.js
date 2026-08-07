import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "",
  // Local-only mode — no TinaCloud credentials needed
  clientId: null,
  token: null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ── Projects ───────────────────────────────────────────────────────────
      {
        name: "projects",
        label: "Projects",
        path: "content/data",
        format: "json",
        match: { include: "projects" },
        fields: [
          {
            type: "object",
            name: "projects",
            label: "Projects",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title ?? "Untitled" }),
            },
            fields: [
              {
                type: "number",
                name: "id",
                label: "ID",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: { component: "textarea" },
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "tag",
                label: "Tags",
                list: true,
              },
              {
                type: "string",
                name: "gitUrl",
                label: "GitHub URL",
              },
              {
                type: "string",
                name: "previewUrl",
                label: "Preview URL",
              },
              {
                type: "string",
                name: "technologies",
                label: "Technologies",
                list: true,
              },
            ],
          },
        ],
      },

      // ── Experience ─────────────────────────────────────────────────────────
      {
        name: "experience",
        label: "Experience",
        path: "content/data",
        format: "json",
        match: { include: "experience" },
        fields: [
          {
            type: "object",
            name: "experience",
            label: "Experience",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.company
                  ? `${item.role} @ ${item.company}`
                  : item?.role ?? "Untitled",
              }),
            },
            fields: [
              {
                type: "number",
                name: "id",
                label: "ID",
              },
              {
                type: "string",
                name: "role",
                label: "Role",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "company",
                label: "Company",
              },
              {
                type: "string",
                name: "location",
                label: "Location",
              },
              {
                type: "string",
                name: "period",
                label: "Period (e.g. May 2025 – Aug 2025)",
              },
              {
                type: "string",
                name: "bullets",
                label: "Bullet Points",
                list: true,
              },
              {
                type: "string",
                name: "technologies",
                label: "Technologies",
                list: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
