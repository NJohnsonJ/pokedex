import React from "react";
import styled from "styled-components";
import { VersionGroupFlavorText } from "../api/types/Utility/CommonModel";

interface Props {
    entries: VersionGroupFlavorText[];
    language?: string;
}

const FlavorTextBox: React.FC<Props> = ({entries, language, ...props}) => {
    if (language)
        entries = entries.filter(entry => entry.language.name == language)
    return (
        <TextBox>
            {entries[0].text}
        </TextBox>
    )
}

const TextBox = styled.p`
    max-width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    padding: 1em;
    margin-left: 5px;
    margin-right: 5px;
`;

export default FlavorTextBox;