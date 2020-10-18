import styled from "styled-components";

const Badge = styled.div<{color: string}>`
  color: white;
  text-shadow: -1px 0 black, 1px 0 black, 0px -1px black, 0px 1px black;
  background-color: ${props => props.color};
  border: black solid 1px;
  border-radius: 0.5em;
  padding: 0.25em 0.5em;
  height: 1.2em;
  width: 45px;
  text-align: center;
`;

export default Badge;
