import React from "react";
import * as S from "./style";

export type OverlayProps = {
  children: React.ReactNode;
};

function Overlay({ children }: OverlayProps) {
  return <S.Overlay>{children}</S.Overlay>;
}

export default Overlay;
