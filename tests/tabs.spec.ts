import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("Tabs: default", () => {});

test("tabs default should look the same", async ({ page }) => {
  // const params = new URLSearchParams({
  //   id: "components-tabs--default",
  //   viewMode: "story",
  // });
  // const storybookLink = generateStorybookLink("components-tabs", "default");
  // await page.goto(storybookLink);
  // await page.waitForSelector("#storybook-root");
  // await page.waitForLoadState("networkidle");
  await goToStorybook(page, "components-tabs", "default");

  await expect(page).toHaveScreenshot("components-tabs--default.png");

  await expect(
    page.getByRole("tab", { name: /Lorem ipsum 1/i })
  ).toHaveScreenshot("components-tabs--default-2.png");
});
