import { expect, test, type Page } from "@playwright/test";
import { goToStorybook } from "./test.utils";

const componentName = "components-liketoggle";

// Helper to get button once story loaded
const getLikeToggle = (page: Page) => page.getByRole("button");

test.describe("Heart LikeToggle Default", () => {
  const story = "no-likes";
  const screenshotNamePrefix = `${componentName}--${story}`;

  test.skip("No Likes", async ({ page }) => {
    // Arrange
    await goToStorybook(page, componentName, story);
    const button = getLikeToggle(page);

    // Assert
    await expect(button).toBeVisible();
    await expect(button).toHaveText(/Like$/);
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test.skip("No Likes - Hover State", async ({ page }) => {
    // Arrange
    await goToStorybook(page, componentName, story);
    const button = getLikeToggle(page);
    await button.hover();

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });
});

/**
 * First Like Animation Test
 * Click -> Label says "Liked"
 * After ~2s -> Label says "1 Like"
 * Two Screenshots: After Click and after final label appears
 * Test waits real time (2s) because component uses hardcoded setTimeout(2000).
 */

test.skip("LikeToggle: First Like Animation", () => {
  const story = "first-like-animation";
  const screenshotNamePrefix = `${componentName}--${story}`;

  test.skip("Animation from Liked to 1 Like", async ({ page }) => {
    // Arrange
    await goToStorybook(page, componentName, story);
    const button = getLikeToggle(page);

    // Act
    await button.click();

    // Assert immediately after click
    await expect(button).toHaveText(/Liked/);
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-liked.png`);

    // Assert after delay (2000ms + 300ms for animation - to be safe)
    await page.waitForTimeout(2300);
    await expect(button).toHaveText(/1 Like/);
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-final.png`);
  });
});

/**
 * Existing Likes Test
 * Starting with 5 Likes
 * Click should show 'Liked' immediately
 * After delay: '6 Likes'.
 */
test.describe("LikeToggle: existinglikes", () => {
  const story = "existing-likes";
  const screenshotNamePrefix = `${componentName}--${story}`;

  test.skip("increments from 6 to 5 Likes", async ({ page }) => {
    // Arrange
    await goToStorybook(page, componentName, story);
    const button = getLikeToggle(page);

    // // Assert initial state
    await expect(button).toHaveText(/6 Likes/);
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);

    // Act - Click to like
    await button.click();

    // Assert immediately after click
    // await expect(button).toHaveText(/Liked/);
    // await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-liked.png`);

    // Assert after delay (2000ms + 300ms animation buffer)
    await page.waitForTimeout(2300);
    await expect(button).toHaveText(/5 Likes/);
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-final.png`);
  });
});

/**
 * Liked and Mulitple Likes
 */
test.describe("LikeToggle: one like", () => {
  const story = "liked";
  const screenshotNamePrefix = `${componentName}--${story}`;

  test.skip("already existing one like", async ({ page }) => {
    // Arrange
    await goToStorybook(page, componentName, story);
    const button = getLikeToggle(page);

    // Assert
    await expect(button).toHaveText(/1 Like/);
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });
});

test.describe("LikeToggle: multiple likes", () => {
  const story = "liked-multiple";
  const screenshotNamePrefix = `${componentName}--${story}`;
  test.skip("already existing multiple likes", async ({ page }) => {
    // Arrange
    await goToStorybook(page, componentName, story);
    const button = getLikeToggle(page);

    // Assert
    await expect(button).toHaveText(/12 Likes/);
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });
});

/**
 *  Hover over multiple likes
 */

test.describe("LikeToggle: likedmultiple hover", () => {
  const story = "liked-multiple";
  const screenshotNamePrefix = `${componentName}--${story}`;
  test.skip("hover visual", async ({ page }) => {
    // Arrange
    await goToStorybook(page, componentName, story);
    const button = getLikeToggle(page);
    // Act
    await button.hover();
    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });
});
