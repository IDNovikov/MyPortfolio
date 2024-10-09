import React from "react";
import styled from "styled-components";
import { Tittle } from "../UI/textTittle";
import { Regular } from "../UI/textRegular";
import { Medium } from "../UI/textMedium";
import { LinkButton } from "../UI/linkButton";
import telegram from "../assets/Telegram.svg";
import mail from "../assets/Mail.svg";
import git from "../assets/Git.svg";
import { Button } from "../UI/Button";

const Style = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  margin: 20px 0;
  display: flex;
  height: auto;
  & > a {
    margin: 0 15px 0 0;
  }
`;
export const Main = () => {
  return (
    <Style>
      <Tittle color="white" size="32px">
        Илья Новиков
      </Tittle>
      <Medium color="white" size="20px" margin="15px 0">
        Frontend Engineer
      </Medium>
      <Regular
        color="white"
        opacity={"70%"}
        paragraph={true}
        size="16px"
        margin="15px 0"
      >
        Я увлечен созданием целостного цифрового опыта и преобразованием сложных
        задач в элегантные решения.
      </Regular>
      <Button margin="15px 0">
        <Regular color="black" margin={"10px 20px"}>
          Смотреть резюме
        </Regular>
      </Button>
      <Row>
        <LinkButton href="https://t.me/NOILDM">
          <img src={telegram} />
        </LinkButton>
        <LinkButton href="https://github.com/IDNovikov">
          <img src={git} />
        </LinkButton>
        <LinkButton href="mailTo:crew665@yandex.ru">
          <img src={mail} />
        </LinkButton>
      </Row>
    </Style>
  );
};
