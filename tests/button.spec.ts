import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("Button: primary", () => {
  const componentName = "components-buttons-button";
  const componentStory = "primary";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("button primary should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("button hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });

  test("button active should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await page.mouse.down(); // triggers :active
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-active.png`);
    await page.mouse.up();
  });
});

test.describe("Button: secondary", () => {
  const componentName = "components-buttons-button";
  const componentStory = "secondary";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("button primary should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("button hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });

  test("button active should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await page.mouse.down(); // triggers :active
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-active.png`);
    await page.mouse.up();
  });
});

test.describe("Button: tertiary", () => {
  const componentName = "components-buttons-button";
  const componentStory = "tertiary";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("button primary should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("button hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });

  test("button active should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await page.mouse.down(); // triggers :active
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-active.png`);
    await page.mouse.up();
  });
});

test.describe("Button: large", () => {
  const componentName = "components-buttons-button";
  const componentStory = "large";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("button primary should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });
});

test.describe("Button: no-icon", () => {
  const componentName = "components-buttons-button";
  const componentStory = "no-icon";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("button primary should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });
});
