import { render, screen, within } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { TabItem } from "./TabItem";
import { Tabs } from "./Tabs";
import userEvent from "@testing-library/user-event";

describe("Tabs", () => {
  test("should render three tabs", async () => {
    // Arrange
    var value = "1";
    render(
      <Tabs value={value} onChange={(change) => (value = change)}>
        <TabItem label="tab1" value="1">
          tabItem1
        </TabItem>
        <TabItem label="tab2" value="2">
          tabItem2
        </TabItem>
        <TabItem label="tab3" value="3">
          tabItem3
        </TabItem>
      </Tabs>
    );

    // Assert
    expect(screen.getByRole("tab", { name: /tab1/i })).toBeVisible();
    expect(screen.getByRole("tab", { name: /tab2/i })).toBeVisible();
    expect(screen.getByRole("tab", { name: /tab3/i })).toBeVisible();

    const tabItem1 = screen.getByRole("tabpanel", {
      name: /tab1/i,
    });
    expect(tabItem1).toBeVisible();
    expect(tabItem1).toHaveTextContent(/tabItem1/i);

    const tabItems = screen
      .getAllByRole("tabpanel", { hidden: true })
      .filter((el) => el.hasAttribute("hidden"));
    expect(tabItems.length).toBe(2);
  });

  test("should render first tab as selected when value = 1 is set", async () => {
    // Arrange
    var value = "1";
    render(
      <Tabs value={value} onChange={(change) => (value = change)}>
        <TabItem label="tab1" value="1">
          tabItem1
        </TabItem>
        <TabItem label="tab2" value="2">
          tabItem2
        </TabItem>
        <TabItem label="tab3" value="3">
          tabItem3
        </TabItem>
      </Tabs>
    );

    // Assert
    const tabItem1 = screen.getByRole("tabpanel", {
      name: /tab1/i,
    });
    expect(tabItem1).toBeVisible();
    expect(tabItem1).toHaveTextContent(/tabItem1/i);
    expect(tabItem1).not.toHaveAttribute("hidden");

    const tabItems = screen
      .getAllByRole("tabpanel", { hidden: true })
      .filter((el) => el.hasAttribute("hidden"));
    expect(tabItems.length).toBe(2);
  });

  test("should render second tab as selected when value = 2 is set", async () => {
    // Arrange
    var value = "2";
    render(
      <Tabs value={value} onChange={(change) => (value = change)}>
        <TabItem label="tab1" value="1">
          tabItem1
        </TabItem>
        <TabItem label="tab2" value="2">
          tabItem2
        </TabItem>
        <TabItem label="tab3" value="3">
          tabItem3
        </TabItem>
      </Tabs>
    );

    // Assert
    const tabItem2 = screen.getByRole("tabpanel", {
      name: /tab2/i,
    });
    expect(tabItem2).toBeVisible();
    expect(tabItem2).toHaveTextContent(/tabItem2/i);
    expect(tabItem2).not.toHaveAttribute("hidden");

    const tabItems = screen
      .getAllByRole("tabpanel", { hidden: true })
      .filter((el) => el.hasAttribute("hidden"));
    expect(tabItems.length).toBe(2);
  });

  test("should call onChange when second tab clicked", async () => {
    // Arrange
    const onValueChange = vi.fn();
    render(
      <Tabs value="1" onChange={onValueChange}>
        <TabItem label="tab1" value="1">
          tabItem1
        </TabItem>
        <TabItem label="tab2" value="2">
          tabItem2
        </TabItem>
        <TabItem label="tab3" value="3">
          tabItem3
        </TabItem>
      </Tabs>
    );

    // fireEvent.click(screen.getByRole("tab", { name: /tab2/i }));
    const tabList = screen.getByRole("tablist");
    const tabs = within(tabList).getAllByRole("tab");

    await userEvent.click(tabs[1]);
    expect(onValueChange).toHaveBeenCalledWith("2");
  });
});
