import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("FileUpload: default", () => {
  const componentName = "components-fileupload";
  const componentStory = "default";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("fileupload should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });
});
