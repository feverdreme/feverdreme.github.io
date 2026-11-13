import type { CollectionEntry } from 'astro:content';

export function newestWritingFirst(a: CollectionEntry<'writing'>, b: CollectionEntry<'writing'>) {
  const key = (entry: CollectionEntry<'writing'>) =>
    (entry.data.date ?? '').replace('-spring', '-03').replace('-fall', '-09');
  return key(b).localeCompare(key(a)) || a.data.order - b.data.order;
}
