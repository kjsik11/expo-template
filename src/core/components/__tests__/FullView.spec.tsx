import React from "react";
import { Text } from "react-native";
import { render, screen } from "@testing-library/react-native";
import { ReactTestInstance } from "react-test-renderer";

import FullView from "core/components/FullView";

const TEST_ID = "FULL_VIEW";
const TEXT = "FullView Children";
const CHILDREN = <Text>{TEXT}</Text>;

describe("🫀 Core | 🧩 Components | 🗄️ <FullView>", function () {
  let container: ReactTestInstance | null = null;

  beforeEach(function () {
    render(<FullView children={CHILDREN} testID={TEST_ID} />);

    container = screen.getByTestId(TEST_ID);
  });

  it("should render successfully", () => {
    expect(container).toBeDefined();
  });

  it("should render correctly", () => {
    const containerAsJson = screen.toJSON();
    expect(containerAsJson).toMatchSnapshot();
  });

  it("should render with title", () => {
    expect(screen.getByText(TEXT)).toBeTruthy();
  });
});
