import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("Textarea: default", () => {
  const componentName = "components-textarea";
  const componentStory = "default";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("input should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("input hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const input = page.getByPlaceholder(/placeholder/i);
    await input.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`, {
      threshold: 0,
    });
  });

  test("input active should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const input = page.getByPlaceholder(/placeholder/i);
    await input.click();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-active.png`, {
      threshold: 0,
    });
  });
});

test.describe("Textarea: required validation", () => {
  const componentName = "components-textarea";
  const componentStory = "required-validation";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("input should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("input hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const input = page.getByPlaceholder(/placeholder/i);
    await input.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`, {
      threshold: 0,
    });
  });

  test("input active should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const input = page.getByPlaceholder(/placeholder/i);
    await input.click();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-active.png`, {
      threshold: 0,
    });
  });
});

test.describe("Textarea: no label", () => {
  const componentName = "components-textarea";
  const componentStory = "no-label";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("input should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("input hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const input = page.getByPlaceholder(/placeholder/i);
    await input.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`, {
      threshold: 0,
    });
  });

  test("input active should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const input = page.getByPlaceholder(/placeholder/i);
    await input.click();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-active.png`, {
      threshold: 0,
    });
  });
});
