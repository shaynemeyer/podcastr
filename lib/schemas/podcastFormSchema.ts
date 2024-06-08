import { z } from "zod";

export const podcastFormSchema = z.object({
  podcastTitle: z.string().min(2),
  podcastDescription: z.string().min(2),
});

export type PodcastFormSchema = z.infer<typeof podcastFormSchema>;
