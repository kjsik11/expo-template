import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import { ThemeProvider } from "@rneui/themed";
import { ReactTestInstance } from "react-test-renderer";

import THEME from "core/constants/Theme";
import Button, {
  OUTLINE_BUTTON_BACKGROUND_COLOR_DEFAULT,
} from "core/components/Button";

const TITLE_OF_BUTTON_WITH_PRIMARY_TYPE = "Button Primary";
const TEST_ID_OF_BUTTON_WITH_PRIMARY_TYPE = "BUTTON_PRIMARY";

const TITLE_OF_BUTTON_WITH_OUTLINE_TYPE = "Button Outline";
const TEST_ID_OF_BUTTON_WITH_OUTLINE_TYPE = "BUTTON_OUTLINE";

const BUTTON_CALLBACK_FUNCTION = jest.fn(() => null);

describe("🫀 Core | 🧩 Components | 🖲️ <Button>", function () {
  let buttonPrimary: ReactTestInstance | null = null;
  let buttonOutline: ReactTestInstance | null = null;

  describe("| Solid Button", function () {
    beforeEach(function () {
      render(
        <ThemeProvider theme={THEME}>
          <Button
            title={TITLE_OF_BUTTON_WITH_PRIMARY_TYPE}
            onPress={BUTTON_CALLBACK_FUNCTION}
            testID={TEST_ID_OF_BUTTON_WITH_PRIMARY_TYPE}
          />
        </ThemeProvider>
      );

      buttonPrimary = screen.getByTestId(TEST_ID_OF_BUTTON_WITH_PRIMARY_TYPE);
    });

    it("should render successfully", () => {
      expect(buttonPrimary).toBeDefined();
    });

    it("should render correctly", () => {
      const buttonAsJson = screen.toJSON();
      expect(buttonAsJson).toMatchSnapshot();
    });

    it("should render with title", () => {
      expect(buttonPrimary).toBeTruthy();
    });

    it("should fires the assigned event on press", async () => {
      fireEvent.press(buttonPrimary as ReactTestInstance);
      fireEvent.press(buttonPrimary as ReactTestInstance);
      await waitFor(() =>
        expect(BUTTON_CALLBACK_FUNCTION.mock.calls.length).toBe(2)
      );
    });
  });

  describe("| Outline Button", function () {
    beforeEach(function () {
      render(
        <ThemeProvider theme={THEME}>
          <Button
            title={TITLE_OF_BUTTON_WITH_OUTLINE_TYPE}
            onPress={BUTTON_CALLBACK_FUNCTION}
            testID={TEST_ID_OF_BUTTON_WITH_OUTLINE_TYPE}
            type="outline"
          />
        </ThemeProvider>
      );

      buttonOutline = screen.getByTestId(TEST_ID_OF_BUTTON_WITH_OUTLINE_TYPE);
    });

    it("should render successfully", () => {
      expect(buttonOutline).toBeDefined();
    });

    it("should render correctly", () => {
      const buttonAsJson = screen.toJSON();
      expect(buttonAsJson).toMatchSnapshot();
    });

    it("should render the background with outline button styles", () => {
      const buttonContainer = (buttonOutline as ReactTestInstance).children[0];
      const backgroundColor =
        buttonContainer &&
        typeof buttonContainer !== "string" &&
        buttonContainer.props.style.backgroundColor;

      expect(backgroundColor).toBe(OUTLINE_BUTTON_BACKGROUND_COLOR_DEFAULT);
    });
  });
});
