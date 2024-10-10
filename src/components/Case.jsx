import React from "react";
import styled from "styled-components";
import { Regular } from "../UI/textRegular";
import { Medium } from "../UI/textMedium";
import { Stack } from "../UI/Stack";
import { Card } from "../UI/Card";
import { Arrow } from "../UI/Arrow";

const Style = styled.div`
  position: relative;
  height: max-content;
  overflow-y: auto;
  padding: 120px 24px;
  display: flex;
  flex-direction: column;
  border-left: 2px solid rgba(255, 255, 255, 4%);
  scroll-snap-align: start;
  @media screen and (min-width: 960px) {
    height: 100vh;
    padding: 120px 24px;
  }
`;
export const Case = () => {
  console.log(window.innerWidth);
  return (
    <Style>
      {window.innerWidth < 959 && (
        <Arrow transform="rotate(180deg)" top={"50px"} />
      )}

      <Regular color="white" paragraph={true} margin="0px 0 10px 0">
        Имею общий опыт frontend разработки с ноября 2022 года, включая опыт ~1
        года работы в команде проекта интерактивного детского образовательного
        сервиса chevostik.ru. В процессе работы над сервисом основным
        направлением являлся рефакторинг кода, выявление и устранение багов, и
        модернизация сервиса.
      </Regular>

      <Regular color="white" paragraph={true} margin="10px 0">
        Самостоятельно реализовал проект интернет-магазина, включающий создание
        серверной части на основе Node.js и PostgreSQL. Разработал функционал
        администрирования контента, внедрил JWT авторизацию для обеспечения
        безопасности. Проект включает полный цикл разработки от серверной
        архитектуры до финального деплоя.
      </Regular>

      <Regular color="white" paragraph={true} margin="10px 0">
        Опыт разработки адаптивных лендингов по макетам Figma с последующим
        деплоем на хостинг. Работа включала полную реализацию фронтенд-части и
        настройку инфраструктуры для развертывания проектов.
      </Regular>

      <Card margin="10px 0">
        <Medium color="white" size="20px">
          Frontend Engineer
        </Medium>
        <Regular color="white" opacity={"70%"} margin="9px 0">
          коммерческий опыт chevostik.ru
        </Regular>
        <Regular color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • поддержка жизнеспособности проекта
        </Regular>
        <Regular color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • исправление багов
        </Regular>
        <Regular color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • модернизация
        </Regular>

        <div style={{ display: "flex" }}>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              React
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              Redux
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              Media content
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              JS
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              CSS
            </Regular>
          </Stack>
        </div>
      </Card>
      <Card margin="20px 0">
        <Medium color="white" size="20px">
          Web Engineer
        </Medium>
        <Regular color="white" opacity={"70%"} margin="9px 0">
          интернет-магазин Spear Fishing (Cyprus, Limassol)
        </Regular>
        <Regular color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • разработка клиентской и серверной части
        </Regular>
        <Regular color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • взаимодействие с реляционной БД
        </Regular>
        <div style={{ display: "flex" }}>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              React
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              MobX
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              Node.js
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              PostgreSQL
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              Sequelize
            </Regular>
          </Stack>{" "}
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              JWT
            </Regular>
          </Stack>
        </div>
      </Card>
      <Card margin="20px 0">
        <Medium color="white" size="20px">
          Frontend Engineer
        </Medium>
        <Regular color="white" opacity={"70%"} margin="9px 0">
          фриланс опыт
        </Regular>
        <Regular color="white" opacity={"70%"} margin="3px 0 3px 8px">
          Web-Ilya.ru
        </Regular>
        <Regular color="white" opacity={"70%"} margin="3px 0 3px 8px">
          novikovapsy.ru
        </Regular>
        <Regular color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • разработка по макетам Figma
        </Regular>{" "}
        <Regular color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • деплой
        </Regular>
        <div style={{ display: "flex" }}>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              React
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              Vite
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              Figma
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              Styled-Components
            </Regular>
          </Stack>
        </div>
      </Card>
      <Card fill={true} margin="20px 0">
        <Regular color="white" opacity={"70%"}>
          Тут мог быть ваш кейс...|
        </Regular>
      </Card>
    </Style>
  );
};
