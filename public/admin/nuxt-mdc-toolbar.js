CMS.registerEditorComponent({
  id: "nuxt-img-mdc",
  label: "Nuxt Content Image (MDC)",
  fields: [
    { name: "src", label: "Image Source", widget: "image" },
    { name: "width", label: "Width", widget: "number" },
    { name: "height", label: "Height", widget: "number" },
    { name: "alt", label: "Alt Text", widget: "string" },
    { name: "slot", label: "Caption (optional)", widget: "text" },
  ],
  pattern: /^::sd-image{src="(.*?)" width="(.*?)" height="(.*?)" alt="(.*?)"}\n?(.*?)\n?::$/,
  fromBlock: (match) => ({
    src: match[1],
    width: match[2],
    height: match[3],
    alt: match[4],
    slot: match[5] || "",
  }),
  toBlock: ({ src, width, height, alt, slot }) =>
    `::sd-image{src="${src}" width="${width}" height="${height}" alt="${alt}"}\n${slot || ""}\n::`,
  toPreview: ({ src, width, height, alt, slot }) =>
    `<img src="${src}" width="${width}" height="${height}" alt="${alt}">\n${slot || ""}\n`,
});
