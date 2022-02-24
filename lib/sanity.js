import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "dlw7wsd5",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skdJvBfYwvKKZfHaASPsiLpr1dQ5Zbm4hJpSwavYngiCOGz2HETducFXPYQzHnTp010qUzW0uNJioK2Uu9eCZN4IEniRLWuuOrPfWeY7GHAVkSDgkx8TfKAlxdRNmKwUYBXtzPdMJq82HSPxEvfxIGoIFHyeJLDzOfADwrJ1coYozHGCzxAn",
  useCdn: false,
});
