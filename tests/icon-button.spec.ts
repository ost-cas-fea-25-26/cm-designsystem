import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("IconButton: primary", () => {
  const componentName = "components-iconbutton";
  const componentStory = "primary";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("icon-button primary should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("icon-button hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });
});

test.describe("IconButton: secondary", () => {
  const componentName = "components-iconbutton";
  const componentStory = "secondary";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("icon-button primary should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("icon-button hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });
});
