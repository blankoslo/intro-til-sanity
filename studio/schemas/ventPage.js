export default {
  name: "ventPage",
  title: "Ventilation page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "posts",
      title: "Posts",
      type: "array",
      of: [
        {
          name: "text",
          title: "Text",
          type: "text",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          title: "Caption",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
};
