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
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`, {
      threshold: 0,
    });
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
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`, {
      threshold: 0,
    });
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
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`, {
      threshold: 0,
    });
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
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`, {
      threshold: 0,
    });
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
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-action.png`, {
      threshold: 0,
    });
  });

  test("avatar hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("img");
    await button.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`, {
      threshold: 0,
    });
  });

  test("avatar action hover should look the same", async ({ page }) => {
    //Arrange
    await goToStorybook(page, componentName, componentStory);

    // Assert
    const button = page.getByRole("button");
    await button.hover();
    await expect(page).toHaveScreenshot(
      `${screenshotNamePrefix}-action-hover.png`,
      {
        threshold: 0,
      }
    );
  });
});

test.describe("Avatar: default fallback", () => {
  const componentName = "components-avatar";
  const componentStory = "default-fallback";
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
<<<<<<< HEAD
    const fallback = page.getByTestId("fallback");
=======
    const fallback = page.getByAltText("Lorem ipsum");
    await fallback.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`, {
      threshold: 0,
    });
  });
});

test.describe("Avatar: custom fallback", () => {
  const componentName = "components-avatar";
  const componentStory = "custom-fallback";
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
    const fallback = page.getByText("PA");
>>>>>>> f44da84 (fix: intorduce test for fallback)
    await fallback.hover();
    await expect(page).toHaveScreenshot(`${screenshotNamePrefix}-hover.png`, {
      threshold: 0,
    });
  });
});
