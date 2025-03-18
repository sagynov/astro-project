import { glob, file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

// 3. Define your collection(s)
const projects = defineCollection({
    loader: file("src/data/projects.json",  { parser: (text) => JSON.parse(text).projects }),
    schema: z.object({
        image: z.string(),
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        gallery: z.any()
    }),
});

const gallery = defineCollection({
    loader: file("src/data/gallery.json",  { parser: (text) => JSON.parse(text).gallery }),
    schema: z.object({
        image: z.string(),
        title: z.string(),
        slug: z.string(),
    }),
});

const services = defineCollection({
    loader: file("src/data/services.json",  { parser: (text) => JSON.parse(text).services }),
    schema: z.object({
        image: z.string(),
        title: z.string(),
        slug: z.string(),
        description: z.string(),
    }),
});

const faqs = defineCollection({
    loader: file("src/data/faqs.json",  { parser: (text) => JSON.parse(text).faqs }),
    schema: z.object({
        question: z.string(),
        answer: z.string(),
        slug: z.string(),
    }),
});

const menu = defineCollection({
    loader: file("src/data/menu.json",  { parser: (text) => JSON.parse(text).menu }),
    schema: z.object({
        name: z.string(),
        slug: z.string(),
        link: z.string(),
    }),
});

export const collections = { blog, projects, gallery, services, faqs, menu };
