import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), url: z.string() });
const links = z.array(link).default([]);
const order = z.number().int().positive();
const loader = (folder: string) => glob({ pattern: '**/*.md', base: `./src/content/${folder}` });

const projects = defineCollection({
  loader: loader('projects'),
  schema: z.object({
    title: z.string(),
    url: z.string().optional(),
    catalogOrder: order.optional(),
    categories: z.array(z.enum(['languages', 'ai', 'tools', 'web'])).default([]),
    technologies: z.array(z.string()).default([]),
    links,
    featuredOrder: order.optional(),
    featuredSummary: z.string().optional(),
    researchOrder: order.optional(),
    period: z.string().optional(),
    current: z.boolean().default(false),
    meta: z.string().optional(),
    researchSummary: z.string().optional(),
    researchLinks: links,
    summary: z.string().optional(),
    detail: z.boolean().default(false),
    eyebrow: z.string().optional(),
    lead: z.string().optional(),
    detailMeta: z.string().optional(),
    description: z.string().optional(),
    resources: links,
  }),
});

const writing = defineCollection({
  loader: loader('writing'),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    section: z.enum(['exposition', 'reports', 'slides']),
    date: z.string().regex(/^\d{4}(-(\d{2}|spring|fall))?$/).optional(),
    order,
    period: z.string(),
    format: z.string().optional(),
    meta: z.string().optional(),
    links,
    homeOrder: order.optional(),
    homeLabel: z.string().optional(),
    homePeriod: z.string().optional(),
    homeTitle: z.string().optional(),
    homeSummary: z.string().optional(),
  }),
});

const experience = defineCollection({
  loader: loader('experience'),
  schema: z.object({ title: z.string(), meta: z.string(), order }),
});

const teaching = defineCollection({
  loader: loader('teaching'),
  schema: z.object({ title: z.string(), meta: z.string(), order }),
});

const profile = defineCollection({
  loader: loader('profile'),
  schema: z.object({
    name: z.string(),
    heading: z.string(),
    email: z.email(),
    github: z.url(),
    cv: z.string(),
    portrait: z.string(),
    portraitAlt: z.string(),
    updated: z.string(),
    description: z.string(),
  }),
});

const pages = defineCollection({
  loader: loader('pages'),
  schema: z.object({ title: z.string(), eyebrow: z.string(), description: z.string() }),
});

export const collections = { projects, writing, experience, teaching, profile, pages };
