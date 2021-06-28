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
  grid-template-columns: ${(props) =>
    props.gridLayout === "grid" ? "repeat(3, 1fr)" : "auto"};
  grid-gap: 2rem;
`;
