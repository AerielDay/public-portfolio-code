/**
 * loadMarkdown.ts - Markdown File Loader Utility
 * 
 * Fetches markdown content from URL and returns as string.
 * Used by blog posts to load .md files dynamically.
 * 
 * Usage:
 * ```typescript
 * const content = await loadMarkdown('/posts/my-post.md');
 * ```
 * 
 * Error handling: Throws error if fetch fails
 * Used in BlogPost component for dynamic content loading.
 */

export async function loadMarkdown(url: string): Promise<string> {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load markdown");
    return await res.text();
}
