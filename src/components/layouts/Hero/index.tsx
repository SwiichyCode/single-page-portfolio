import React from "react";
import { Button } from "@/components/common/Button";
import * as S from "./styles";

export const Hero = () => {
  return (
    <S.Container>
      <h1>
        Nice to meet you! I’m <span>Dylan Jansana.</span>
      </h1>
      <div className="wrapper">
        <p>
          Based in the France, I’m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <Button
          as="a"
          text="contact me"
          onClick={(): void =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
    </S.Container>
  );
};
