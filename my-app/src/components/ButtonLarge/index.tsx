import React, { ButtonHTMLAttributes } from "react";
import * as S from "./style";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLargeProps = {
  value: string;
} & ButtonType;

function ButtonLarge({ value, ...props }: ButtonLargeProps) {
  return <S.ButtonLarge {...props}>{value}</S.ButtonLarge>;
}

export default ButtonLarge;
