import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("RoundButton: primary", () => {
  const componentName = "components-roundbutton";
  const componentStory = "primary";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("roundbutton primary should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("roundbutton hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`, {
      threshold: 0,
    });
  });

  test("roundbutton active should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await page.mouse.down(); // triggers :active
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-active.png`, {
      threshold: 0,
    });
    await page.mouse.up();
  });
});
