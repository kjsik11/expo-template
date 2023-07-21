/** Logs */
export interface LogMessage {
  owner: string;
  description: string | undefined;
  data: any | undefined;
}

/** Spacing */
export type SpacingInNumber = number | undefined | "view" | "card";
export type Spacing = SpacingInNumber | string;
