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
import img1 from "./1ce76dd3d027ca653cea086e76fb620b.jpg";
import img2 from "./c85c9f73718c6926aba552ef2c624e61.jpg";
import img3 from "./ava-xs.svg";
import img4 from "./xcd4lhig968lvo2fq1v6ikm5bji6g3y0.png";
import logoSmall from "./logo-small.png";

function Page() {
  const [searchInputValue, setsearchInputValue] = useState(null);
  const handleSearchInputChange = ({ value }) => setsearchInputValue(value);
  const [MailInputValue, setMailInputValue] = useState("");
  const handleMailInputChange = ({ MailInputValue }) =>
    setMailInputValue(MailInputValue);

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
                    <div>
                      <img className="img__big-boys" alt="img" src={img1} />
                      <img className="img__big-boys" alt="img" src={img2} />
                      <img className="img__big-boys" alt="img" src={img3} />
                    </div>
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
                    У регионов должно быть больше полномочий в распределении
                    ресурсов – Алексей Кудрин
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
                <Text view="link">Все новости</Text>
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
                      size="3xl"
                      spacing="2xs"
                      weight="light"
                      view="primary"
                    >
                      Госуправление
                    </Text>
                    <img
                      className="img__big-boys-infogra"
                      alt="img"
                      src={img4}
                    />
                  </div>
                  {/* <Text
                    size="xl"
                    style={{
                      fontFamily: "var(--font-secondary)",
                    }}
                  >
                    СП представляет работы победителей конкурса по доказательной
                    политике
                  </Text> */}
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
                <Text view="link">Инфографика</Text>
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

          <div
            style={{ marginBottom: "80px" }}
            className="page_2-grid page_3-grid page_2-card-block"
          >
            {[1, 2, 3, 4, 5, 6].map((item, i) => {
              return (
                <Card key={i}>
                  <div
                    style={{
                      padding: "28px 16px 20px 28px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          heigth: "40px",
                          color: "var(--color-typo-primary)",
                        }}
                      >
                        <svg
                          version="1.1"
                          id="Слой_2"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="41.723px"
                          height="41.723px"
                          viewBox="0 0 41.723 41.723"
                          enable-background="new 0 0 41.723 41.723"
                        >
                          <g>
                            <rect y="34.351" width="34.601" height="2.508" />
                            <rect y="25.763" width="34.601" height="2.509" />
                            <rect y="17.175" width="34.601" height="2.508" />
                            <rect
                              x="7.122"
                              y="8.588"
                              width="34.601"
                              height="2.508"
                            />
                            <rect width="34.601" height="2.508" />
                          </g>
                        </svg>
                      </div>
                      <div>
                        <div className="card-hidden-button">
                          <Button
                            view="clear"
                            size="m"
                            onlyIcon
                            iconRight={IconArrowRight}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Text view="link">Рекомендации Счетной палаты</Text>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div
            className="page_2-grid page_3-grid"
            style={{
              fontFamily: "var(--font-secondary)",
              marginBottom: "60px",
            }}
          >
            <img
              className="3-col-block_img"
              style={{
                height: "51px",
                width: "384px",
              }}
              alt="123"
              src={logoSmall}
            />
            <Text size="m" style={{ width: "324px" }}>
              При использовании материалов, размещенных на Web-сайте Счетной
              палаты Российской Федерации, ссылка на источник обязательна.
            </Text>
            <div>
              <div style={{ marginBottom: "24px" }}>
                <Text size="m">Справочная:</Text>
                <Text size="m" view="link">
                  +7(495)986-05-09
                </Text>
              </div>
              <div>
                <Text size="m">Адрес:</Text>
                <Text size="m">119121, г. Москва, ул. Зубовская, д. 2</Text>
              </div>
            </div>
          </div>

          <div className="page_2-grid page_3-grid">
            <div>
              {[
                "Контактная информация",
                "Отзывы и замечания о работе сайта",
                "Противодействие коррупции",
                "Версия для слабовидящих",
                "Карта сайта",
              ].map((item, idx) => {
                return (
                  <Text
                    size="l"
                    key={idx}
                    style={{ marginBottom: "20px", cursor: "pointer" }}
                    view="link"
                  >
                    {item}
                  </Text>
                );
              })}
            </div>
            <div>
              {[
                "Президент РФ",
                "Правительство РФ",
                "Государственная Дума РФ",
                "Совет Федерации РФ",
              ].map((item, idx) => {
                return (
                  <Text
                    size="l"
                    key={idx}
                    style={{ marginBottom: "20px", cursor: "pointer" }}
                    view="link"
                  >
                    {item}
                  </Text>
                );
              })}
            </div>

            <div>
              {[
                ["Вконтакте", "Instagram"],
                ["Твиттер", "Одноклассники"],
                ["Facebook", "Youtube"],
              ].map((item, idx) => {
                return (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  >
                    <Text
                      size="l"
                      key={idx}
                      style={{ marginBottom: "20px", cursor: "pointer" }}
                      view="link"
                    >
                      {item[0]}
                    </Text>
                    <Text
                      size="l"
                      key={idx}
                      style={{ marginBottom: "20px", cursor: "pointer" }}
                      view="link"
                    >
                      {item[1]}
                    </Text>
                  </div>
                );
              })}
            </div>
          </div>

          <Text
            size="m"
            view="secondary"
            style={{
              fontFamily: "var(--font-secondary)",
              width: "60%",
              margin: "70px 0 100px 0",
            }}
          >
            Зарегистрирован в Министерстве Российской Федерации по делам печати,
            телерадиовещания и средств массовых коммуникаций в качестве
            электронного средства массовой информации (свидетельство от 23
            апреля 2001 года Эл № 77-4479). Зарегистрирован в Министерстве
            информационных технологий и связи Российской Федерации
            (свидетельство от 27 сентября 2007 года № 11238).
          </Text>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "100px",
            }}
          >
            <TextField
              placeholder="Электронная почта"
              label="Подписка на новости Счетной палаты"
              labelPosition="top"
              form="brick"
              style={{ marginRight: "8px" }}
              onChange={handleMailInputChange}
              value={MailInputValue}
              type="text"
            />
            <Button label="Отправить" form="brick" view="secondary" />
          </div>
        </div>
      </Theme>
    </div>
  );
}

export default Page;
