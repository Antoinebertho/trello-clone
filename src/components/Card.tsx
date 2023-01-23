import React from "react";
import { CardContainer } from "../styles";

interface CardsProps {
    text: string;
}

export const Card = ({text}: CardsProps) => {
    return <CardContainer>{text}</CardContainer>
}