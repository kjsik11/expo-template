import PREFIX_LOG_MESSAGE from "core/constants/PrefixLogMessage";
import { LogMessage } from "core/types";

function formatLogMessage(logMessage: LogMessage, icon: string) {
  const { owner, description, data } = logMessage;

  const title = `${icon} [${PREFIX_LOG_MESSAGE}] -> [${owner}]: ${description}`;
  const content = data !== undefined ? `\n${JSON.stringify(data)}` : "";

  return `${title} ${content}`;
}

export function info(logMessage: LogMessage) {
  const message = formatLogMessage(logMessage, "💬");
  console.info(message);
}

export function warn(logMessage: LogMessage) {
  const message = formatLogMessage(logMessage, "⚠️");
  console.warn(message);
}

export function error(logMessage: LogMessage) {
  const message = formatLogMessage(logMessage, "💥");
  console.error(message);
}
