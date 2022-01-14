import "./Page.scss";
import { useState } from "react";
import { Theme } from "@consta/uikit/Theme";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { SprfPresetDefault } from "../Theme/SprfPresetDefault";
import { SprfPresetDark } from "../Theme/SprfPresetDark";
import { IconMeatball } from "@consta/uikit/IconMeatball";
import { IconEye } from "@consta/uikit/IconEye";
import { IconSearch } from "@consta/uikit/IconSearch";
import { IconArrowLeft } from "@consta/uikit/IconArrowLeft";
import { IconArrowRight } from "@consta/uikit/IconArrowRight";
import { TextField } from "@consta/uikit/TextField";
import { Card } from "@consta/uikit/Card";
import { ReactComponent as Logo } from "./logo.svg";

function Page() {
  const [searchInputValue, setsearchInputValue] = useState(null);
  const handleSearchInputChange = ({ value }) => setsearchInputValue(value);

  return (
    <div className="page">
      <Theme preset={SprfPresetDark}>
        <div className="page_logo-bg">
          <div className="page_wrapper">
            <header className="header">
              <div className="header_left">
                <div className="header_logo">
                  <Logo />
                </div>
                <div className="header_nav-links">
                  {[
                    "О счетной палате",
                    "Деятельность",
                    "Противодействие коррупции",
                    "Контакты",
                  ].map((item) => {
                    return (
                      <Text size="m" as="a" view="link">
                        {item}
                      </Text>
                    );
                  })}
                  <Button
                    view="clear"
                    iconRight={IconMeatball}
                    onlyIcon
                    size="m"
                  />
                </div>
              </div>
              <div className="header_right">
                <Button view="clear" iconRight={IconEye} onlyIcon size="m" />
                <Button view="clear" iconRight={IconSearch} onlyIcon size="m" />
                <div className="header_divider"></div>
                <Text size="m" as="a" view="link">
                  Eng
                </Text>
              </div>
            </header>

            <div className="page_big">
              <Text size="4xl" lineHeight="m" weight="light">
                Счетная палата
              </Text>
              <Text
                size="4xl"
                lineHeight="m"
                style={{
                  fontStyle: "italic",
                }}
                weight="light"
              >
                Российской Федерации
              </Text>
            </div>

            <div className="page_search">
              <TextField
                type="text"
                size="l"
                view="clear"
                leftSide="Искать: "
                rightSide={IconSearch}
                form="brick"
                width="full"
                placeholder="Исполнение федерального бюджета"
                className="search_border"
                onChange={handleSearchInputChange}
                value={searchInputValue}
              />
              <div className="search_under">
                {[
                  "Кудрин",
                  "выступление",
                  "правчас",
                  "интервью",
                  "Изотова",
                  "бюджет",
                  "СФ",
                  "коронавирус",
                  "Орлова",
                  "дайджест",
                ].map((item) => {
                  return <Button label={item} view="primary" size="s" />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Theme>

      <Theme preset={SprfPresetDefault}>
        <div className="page_wrapper">
          <div className="page_2-grid page_1-card-block">
            <Card className="page_card-1">
              <div className="card-header">
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",

                      marginBottom: "20px",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "var(--font-secondary)",
                      }}
                      size="2xl"
                      spacing="2xs"
                      weight="regular"
                      view="primary"
                    >
                      Госуправление
                    </Text>
                    <Text size="m" view="secondary">
                      12 января 2022
                    </Text>
                  </div>
                  <Text
                    size="xl"
                    style={{
                      fontFamily: "var(--font-secondary)",
                    }}
                  >
                    Счетная палата оценила эффективность реализации
                    государственной молодежной политики
                  </Text>
                </div>
              </div>
              <div
                className="card-footer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text view="link">Все проверки</Text>
                <div>
                  <Button
                    iconRight={IconArrowLeft}
                    onlyIcon
                    view="clear"
                    style={{ marginRight: "4px" }}
                  />
                  <Button iconRight={IconArrowRight} onlyIcon view="clear" />
                </div>
              </div>
            </Card>

            <Card className="page_card-1">
              <div className="card-header">
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",

                      marginBottom: "20px",
                    }}
                  >
                    {/* <Text
                      style={{
                        fontFamily: "var(--font-secondary)",
                      }}
                      size="2xl"
                      spacing="2xs"
                      weight="regular"
                      view="primary"
                    >
                      Госуправление
                    </Text> */}
                    <Text size="m" view="secondary">
                      12 января 2022
                    </Text>
                  </div>
                  <Text
                    size="xl"
                    style={{
                      fontFamily: "var(--font-secondary)",
                    }}
                  >
                    СП представляет работы победителей конкурса по доказательной
                    политике
                  </Text>
                </div>
              </div>
              <div
                className="card-footer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text view="link">Все конкурсы</Text>
                <div>
                  {/* <Button
                    iconRight={IconArrowLeft}
                    onlyIcon
                    view="clear"
                    style={{ marginRight: "4px" }}
                  />
                  <Button iconRight={IconArrowRight} onlyIcon view="clear" /> */}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Theme>
    </div>
  );
}

export default Page;
