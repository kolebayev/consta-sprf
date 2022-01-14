import "./App.scss";
import { useState } from "react";
import { ThemeToggler } from "@consta/uikit/ThemeToggler";
import { IconSun } from "@consta/uikit/IconSun";
import { IconMoon } from "@consta/uikit/IconMoon";

import { Theme } from "@consta/uikit/Theme";
import { SprfPresetDefault } from "./Components/Theme/SprfPresetDefault";
import { SprfPresetDark } from "./Components/Theme/SprfPresetDark";

import { ChoiceGroup } from "@consta/uikit/ChoiceGroup";

import { IconScreen } from "@consta/uikit/IconScreen";
import { IconLayers } from "@consta/uikit/IconLayers";

import { Text } from "@consta/uikit/Text";

import Preview from "./Components/Preview/Preview";
import Page from "./Components/Page/Page";

const themes = ["Default", "Dark"];

const uiItems = [
  {
    name: "components",
    icon: IconLayers,
  },
  {
    name: "page",
    icon: IconScreen,
  },
];

function App() {
  const [theme, setTheme] = useState(themes[0]);
  const [ui, setUI] = useState(uiItems[1]);

  return (
    <Theme preset={theme === "Default" ? SprfPresetDefault : SprfPresetDark}>
      <div className="bg-color-wrapper">
        <div className="app__layout-wrapper">
          <div className="app__toolbar">
            <div className="app__toolbar-left">
              <Text size="s" view="primary" weight="bold">
                Демо стенд СП РФ + Consta
              </Text>

              <div className="app__toolbar-divider"></div>

              <div className="app__toolbar-controls">
                <ThemeToggler
                  size="s"
                  items={themes}
                  value={theme}
                  onChange={({ value }) => setTheme(value)}
                  getItemIcon={(theme) =>
                    theme === "Default" ? IconSun : IconMoon
                  }
                  getItemLabel={(theme) => theme}
                />
                <div className="app__toolbar-divider"></div>
                <ChoiceGroup
                  value={ui}
                  onChange={({ value }) => setUI(value)}
                  items={uiItems}
                  getLabel={(item) => item.name}
                  getIcon={(item) => item.icon}
                  onlyIcon
                  name="ChoiceGroupExampleIcon"
                  multiple={false}
                />
              </div>
            </div>
            <div className="app__toolbar-right">
              <Text size="s" view="ghost" font="mono">
                Этот тулбар всегда на экране и не скрывается
              </Text>
            </div>
          </div>
        </div>
        {ui.name === "components" ? <Preview /> : <Page />}
      </div>
    </Theme>
  );
}

export default App;
