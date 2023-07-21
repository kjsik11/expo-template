import { Spacing, SpacingInNumber } from "core/types";
import { CARD_DEFAULT, VIEW_DEFAULT } from "core/constants/Spacing";

export function calculateSpacingInNumber(spacing: SpacingInNumber) {
  if (spacing === "view") {
    return VIEW_DEFAULT;
  }
  if (spacing === "card") {
    return CARD_DEFAULT;
  }
  if (typeof spacing === "number") {
    return spacing;
  }

  return undefined;
}

export function calculateSpacing(spacing: Spacing) {
  if (typeof spacing === "string" && spacing !== "view" && spacing !== "card") {
    const isPercentage = spacing[spacing.length - 1] === "%";
    if (!isPercentage) {
      throw new Error(`Spacing invalid: ${spacing}`);
    }
    return spacing;
  }

  return calculateSpacingInNumber(spacing);
}
