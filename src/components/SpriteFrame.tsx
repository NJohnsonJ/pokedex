import React from "react";
import styled from "styled-components";

interface Props {
    sprite: string;
    size: Size;
    alt?: string;
    name?: string;
}

type Size = "sm"|"md"|"lg"|"xl";

export const SpriteFrame: React.FC<Props> = ({name, sprite, size="sm", alt}) => {
    return (
        <Frame size={sizeMap[size]}>
            <img src={sprite} alt={alt}/>
            <i>{name}</i>
        </Frame>
    )
}

const Frame = styled.div<{size: string}>`
    margin-top: 1em;
    margin-bottom: 1em;
    height: ${props => props.size};
    width: ${props => props.size};
    border-radius: 10px;
    border: 2px solid black;
    background: #eaeaea;
    img {
        width: 100%;
        height: auto;
    }
`;

const sizeMap = {
    sm: "50px",
    md: "100px",
    lg: "200px",
    xl: "400px" 
}