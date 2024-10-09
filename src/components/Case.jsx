import React from "react";
import styled from "styled-components";
import { Tittle } from "../UI/textTittle";
import { Regular } from "../UI/textRegular";
import { Medium } from "../UI/textMedium";
import { Stack } from "../UI/Stack";
import { Card } from "../UI/Card";
export const Case = () => {
  return (
    <>
      <Card>
        <Medium color="white"> Full-stack Engineer</Medium>
        <Regular color="white" opacity={"70%"} paragraph={true}>
          Я увлечен созданием целостного цифрового опыта и преобразованием
          сложных задач в элегантные решения.
        </Regular>
        <div style={{ display: "flex" }}>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              Vite
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              Vite
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              Vite
            </Regular>
          </Stack>
          <Stack margin={"10px"}>
            <Regular color="black" opacity={"70%"}>
              Vite
            </Regular>
          </Stack>
        </div>
      </Card>
      <Card fill={true}>
        <Regular color="white" opacity={"70%"}>
          Тут мог быть ваш кейс...|
        </Regular>
      </Card>
    </>
  );
};
