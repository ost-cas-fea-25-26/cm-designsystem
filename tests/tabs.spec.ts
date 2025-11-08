import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("Tabs: default", () => {
  const componentName = "components-tabs";
  const componentStory = "default";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("tabs default should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);

    await expect(
      page.getByRole("tab", { name: /Lorem ipsum 1/i })
    ).toHaveScreenshot(`${screenshotNamePrefix}-inactive.png`, {
      threshold: 0,
    });
    await expect(
      page.getByRole("tab", { name: /Lorem ipsum 2/i })
    ).toHaveScreenshot(`${screenshotNamePrefix}-active.png`, { threshold: 0 });
  });

  test("tabs hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const tab1 = page.getByRole("tab", { name: /Lorem ipsum 1/i });
    await tab1.hover();
    await expect(tab1).toHaveScreenshot(
      `${screenshotNamePrefix}-inactive-hover.png`,
      {
        threshold: 0,
      }
    );

    const tab2 = page.getByRole("tab", { name: /Lorem ipsum 1/i });
    await tab2.hover();
    await expect(tab2).toHaveScreenshot(
      `${screenshotNamePrefix}-active-hover.png`,
      {
        threshold: 0,
      }
    );
  });
});
