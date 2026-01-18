import type { Page } from "@playwright/test";

/**
 * Generates a Storybook iframe URL for a specific component story.
 *
 * This helper constructs the `iframe.html` URL used by Storybook to render
 * a particular story, based on the component name and story name provided.
 * The resulting URL includes the correct query parameters for `id` and `viewMode`.
 *
 * @function generateStorybookLink
 * @param {string} componentName - The name of the component as registered in Storybook (e.g. `"Button"`).
 * @param {string} componentStory - The name of the specific story (e.g. `"Primary"` or `"WithIcon"`).
 * @returns {string} A formatted Storybook URL pointing to the requested story (e.g. `"/iframe.html?id=button--primary&viewMode=story"`).
 *
 * @example
 * ```ts
 * const url = generateStorybookLink('Button', 'Primary');
 * // "/iframe.html?id=button--primary&viewMode=story"
 * ```
 */
export const generateStorybookLink = (
  componentName: string,
  componentStory: string
): string => {
  const params = new URLSearchParams({
    id: `${componentName}--${componentStory}`,
    viewMode: "story",
  });
  return `/iframe.html?${params.toString()}`;
};

/**
 * Navigates to a specific Storybook story using Playwright.
 *
 * This helper constructs a Storybook URL for a given component and story,
 * navigates to it using the provided Playwright `page` instance,
 * waits for the Storybook root element to load, and ensures the network is idle
 * before returning the response.
 *
 * @async
 * @function goToStorybook
 * @param {import('@playwright/test').Page} page - The Playwright `Page` instance used for navigation.
 * @param {string} componentName - The name of the component as it appears in Storybook.
 * @param {string} componentStory - The specific story name (e.g., "Default", "Primary", etc.).
 * @param {import('@playwright/test').PageGotoOptions} [options={}] - Optional navigation settings (e.g., `timeout`, `waitUntil`).
 * @returns {Promise<import('@playwright/test').Response>} The Playwright `Response` object from the navigation.
 *
 * @throws {Error} If no response is received from the navigation request.
 *
 * @example
 * ```ts
 * import { test } from '@playwright/test';
 * import { goToStorybook } from './helpers/navigation';
 *
 * test('should navigate to Button > Primary story', async ({ page }) => {
 *   const response = await goToStorybook(page, 'Button', 'Primary');
 *   expect(response.ok()).toBeTruthy();
 *   await page.screenshot({ path: 'button-primary.png' });
 * });
 * ```
 */
export async function goToStorybook(
  page: Page,
  componentName: string,
  componentStory: string,
  options = {}
) {
  const url = generateStorybookLink(componentName, componentStory);
  console.log(`🌍 Navigating to: ${url}`);

  const response = await page.goto(url, {
    ...options,
  });

  if (!response) {
    throw new Error(`Failed to navigate to ${url} — no response received`);
  }

  await page.waitForSelector("#storybook-root");
  await page.waitForLoadState("networkidle");

  console.log(`✅ Navigation complete with status: ${response.status()}`);
  return response;
}
