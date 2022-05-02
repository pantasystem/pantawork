import { createClient } from "microcms-js-sdk";
import zod from "zod";

export const client = createClient({
  serviceDomain: process.env.MICRO_CMS_SERVICE_DOMAIN ?? '',
  apiKey: process.env.MICRO_CMS_API_KEY ?? '',
});

export const ProfileSchema = zod.object({
  name: zod.string(),
  description: zod.string(),
  location: zod.string().optional(),
  whereabouts: zod.string().optional(),
  github: zod.string().optional(),
  misskey: zod.string().optional(),
});

export const NewSchema = zod.object({
  id: zod.string(),
  title: zod.string(),
  content: zod.string(),
  image: zod.string().optional(),
});

export const NewsResSchema = zod.object({
  contents: zod.array(NewSchema),
  totalCount: zod.number(),
  offset: zod.number(),
  limit: zod.number(),
});
export const NewsSchema = zod.array(NewSchema);
export type New = zod.infer<typeof NewSchema>;
export type Profile = zod.infer<typeof ProfileSchema>;