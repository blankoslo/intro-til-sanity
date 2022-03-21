import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "cpnkjd52", // denne finner du i studio/sanity.json
  dataset: "production", // eller navnet du (muligens) ga datasettet under oppsettet
  useCdn: false, // ikke tenk så mye på dette
});
