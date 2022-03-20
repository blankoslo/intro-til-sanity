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
  ],
};
