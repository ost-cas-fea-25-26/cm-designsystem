import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("Input: default", () => {
  const componentName = "components-input";
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
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });

  test("input active should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const input = page.getByPlaceholder(/placeholder/i);
    await input.click();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-active.png`);
  });
});

test.describe("Input: type validation", () => {
  const componentName = "components-input";
  const componentStory = "type-validation";
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
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });

  test("input active should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const input = page.getByPlaceholder(/placeholder/i);
    await input.click();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-active.png`);
  });
});

test.describe("Input: required validation", () => {
  const componentName = "components-input";
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
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });

  test("input active should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const input = page.getByPlaceholder(/placeholder/i);
    await input.click();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-active.png`);
  });
});

test.describe("Input: no icon", () => {
  const componentName = "components-input";
  const componentStory = "no-icon";
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
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });

  test("input active should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const input = page.getByPlaceholder(/placeholder/i);
    await input.click();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-active.png`);
  });
});
