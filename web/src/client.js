import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "PROJECTID", // denne finner du i studio/sanity.json
  dataset: "production", // eller navnet du (muligens) ga datasettet under oppsettet
  useCdn: false, // ikke tenk så mye på dette
});
