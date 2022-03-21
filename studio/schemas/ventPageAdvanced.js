export default {
  name: "ventPageAdvanced",
  title: "Ventilation page (advanced)",
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
          name: "post",
          title: "Post",
          type: "object",
          fields: [
            {
              name: "header",
              title: "Header",
              type: "string",
            },
            {
              name: "text",
              title: "Text",
              type: "text",
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
        },
      ],
    },
  ],
};
