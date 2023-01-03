import { makeSource } from "contentlayer/source-files";
import * as documentTypes from "./lib/contentlayer/documents";
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

export default makeSource({
  contentDirPath: `data`,
  documentTypes,
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext"
      return options
    },
    remarkPlugins: [
      [remarkGfm]
    ],
    rehypePlugins: [
      [rehypeSlug],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
    ],
  },
});
