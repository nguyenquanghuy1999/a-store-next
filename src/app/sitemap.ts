import { MetadataRoute } from "next";
import { getCategories } from "@/src/services/categoryService";
import { getProducts } from "@/src/services/productService";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/${category.slug}`,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/${product.slug}`,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
