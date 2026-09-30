import type { MetadataRoute } from "next";
import { agents } from "@/data/agents";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/* No lastModified: the build has to stay byte-reproducible so a deployed
   bundle can be checked against a local build of the same commit. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/agentes`, changeFrequency: "monthly", priority: 0.8 },
    ...agents.map((agent) => ({
      url: `${SITE_URL}/agentes/${agent.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
