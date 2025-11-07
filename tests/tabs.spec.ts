import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("Tabs: default", () => {
  test("tabs default should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, "components-tabs", "default");

    // Assert
    await expect(page).toHaveScreenshot("components-tabs--default.png");

    await expect(
      page.getByRole("tab", { name: /Lorem ipsum 1/i })
    ).toHaveScreenshot("components-tabs--default-inactive.png", {
      threshold: 0,
    });
    await expect(
      page.getByRole("tab", { name: /Lorem ipsum 2/i })
    ).toHaveScreenshot("components-tabs--default-active.png", { threshold: 0 });
  });

  test("tabs hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, "components-tabs", "default");

    // Assert
    await expect(page).toHaveScreenshot("components-tabs--default.png");

    const tab1 = page.getByRole("tab", { name: /Lorem ipsum 1/i });
    tab1.hover();
    await expect(tab1).toHaveScreenshot(
      "components-tabs--default-inactive-hover.png",
      {
        threshold: 0,
      }
    );

    const tab2 = page.getByRole("tab", { name: /Lorem ipsum 1/i });
    tab2.hover();
    await expect(tab2).toHaveScreenshot(
      "components-tabs--default-active-hover.png",
      {
        threshold: 0,
      }
    );
  });
});
