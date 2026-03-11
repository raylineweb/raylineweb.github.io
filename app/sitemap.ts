export const dynamic = "force-static"

import { MetadataRoute } from "next"
import { cities } from "@/data/cities"

const BASE_URL = "https://raylinestudio.com"

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
    ]

    const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
        url: `${BASE_URL}/web-design/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }))

    return [...staticRoutes, ...cityRoutes]
}
