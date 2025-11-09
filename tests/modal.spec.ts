import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("Modal: default", () => {
  const componentName = "components-modal";
  const componentStory = "default";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("modal should look the same", async ({ page, userAgent }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Act
    await page.getByRole("button").click();

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });
});
