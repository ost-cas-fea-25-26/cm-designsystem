import { expect, test } from "@playwright/test";
import { goToStorybook } from "./test.utils";

test.describe("Avatar: small", () => {
  const componentName = "components-avatar";
  const componentStory = "small";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("avatar should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("avatar hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("img");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });
});

test.describe("Avatar: medium", () => {
  const componentName = "components-avatar";
  const componentStory = "medium";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("avatar should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("avatar hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("img");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });
});

test.describe("Avatar: large", () => {
  const componentName = "components-avatar";
  const componentStory = "large";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("avatar should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("avatar hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("img");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });
});

test.describe("Avatar: extra-large", () => {
  const componentName = "components-avatar";
  const componentStory = "extra-large";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("avatar should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("avatar hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("img");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });
});

test.describe("Avatar: extra-large-with-action", () => {
  const componentName = "components-avatar";
  const componentStory = "extra-large-with-action";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("avatar should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("avatar action should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-action.png`);
  });

  test("avatar hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("img");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });

  test("avatar action hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await expect(page).toHaveScreenshot(
      `${screenshotNamePrefix}-action-hover.png`
    );
  });
});

test.describe("Avatar: fallback", () => {
  const componentName = "components-avatar";
  const componentStory = "fallback";
  const screenshotNamePrefix = `${componentName}--${componentStory}`;

  test("avatar should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}.png`);
  });

  test("avatar hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const fallback = page.getByTestId("fallback");
    await fallback.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`);
  });
});
