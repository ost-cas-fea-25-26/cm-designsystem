import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("NaviButton: secondary", () => {
  const componentName = "components-navibutton";
  const componentStory = "secondary";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("navi-button secondary should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("navi-button hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });
});
