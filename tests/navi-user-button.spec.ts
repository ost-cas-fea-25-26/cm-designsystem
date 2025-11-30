import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("NaviUserButton: secondary", () => {
  const componentName = "components-naviuserbutton";
  const componentStory = "secondary";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("navi-user-button secondary should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("navi-user-button hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });
});
