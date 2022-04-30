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

export type Profile = zod.infer<typeof ProfileSchema>;