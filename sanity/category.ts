import { defineType, defineField } from "sanity";

export const category = defineType({
  name: "category",
  type: "document",
  title: "Category Name",
  fields:[
defineField ({
name: "name",
title: "Category Name",
type: "string",
  })
]
});
