import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "pages/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Title of the page",
      required: true,
    },
    navOrder: {
      type: "number",
      description: "Order if appears in navigation",
      required: false,
    },
  },
}));

export const State = defineDocumentType(() => ({
  name: "State",
  filePathPattern: "states/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "Name of the state",
      required: true,
    },
  },
}));

export const City = defineDocumentType(() => ({
  name: "City",
  filePathPattern: "cities/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "Name of the city",
      required: true,
    },
    state: {
      type: "string",
      description: "State this city belongs to",
      required: true,
    },
    duration: {
      type: "string",
      description: "Duration of the eclipse",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      // eslint-disable-next-line no-underscore-dangle
      resolve: (doc) => doc._raw.sourceFileName.replace(/(\.[^.]+){1}$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Page, State, City],
});
