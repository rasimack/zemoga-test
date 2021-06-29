import { Card } from "./Card";
import { data } from "../../assets/data.json";
import styled from "styled-components";

export const Cards = ({ gridLayout }) => (
  <Container gridLayout={gridLayout}>
    {data.map((item, index) => (
      <Card item={item} key={index} gridLayout={gridLayout} />
    ))}
  </Container>
);

const Container = styled.div`
  display: grid;

  @media only screen and (max-width: 500px) {
    height: 100%;
    overflow-x: scroll;
    grid-template-columns: repeat(6, 1fr);
  }

  grid-template-columns: ${(props) =>
    props.gridLayout === "grid" ? "repeat(3, 1fr)" : "auto"};
  grid-gap: 2rem;
`;
