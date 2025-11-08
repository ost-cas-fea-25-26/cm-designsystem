import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("Text Link: default", () => {
  const componentName = "components-textlink";
  const componentStory = "default";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("textlink default should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const link = page.getByRole("link");
    await expect(link).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("textlink hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const link = page.getByRole("link");
    await link.hover();
    await expect(link).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`, {
      threshold: 0,
    });
  });
});
