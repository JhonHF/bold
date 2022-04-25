import React from "react";
import { Typography } from "../../atoms/typography";
import { CardContainer } from "./styles";

export const Card = ({ title, children }) => {
  return (
    <CardContainer className="card">
      <div className="card-header">
        <Typography>{title}</Typography>
      </div>
      <div className="card_content">{children}</div>
    </CardContainer>
  );
};
