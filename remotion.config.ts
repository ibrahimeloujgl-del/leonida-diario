// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import { Config } from "@remotion/cli/config";

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Cloud container only: use the pre-installed Chromium (remotion.media download is blocked there).
// On any other machine this file doesn't exist and Remotion downloads its own browser.
import { existsSync } from "node:fs";
if (existsSync("/opt/pw-browsers/chromium")) {
  Config.setBrowserExecutable("/opt/pw-browsers/chromium");
  Config.setChromeMode("chrome-for-testing");
}
