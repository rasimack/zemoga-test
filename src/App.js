import { useState } from "react";
import { Layout } from "./components/layout/Layout";
import { Cards } from "./components/Cards/Cards";
import { Button } from "./components/Cards/Button";
import styled from "styled-components";

export const App = () => {
  const [gridLayout, setGridLayout] = useState("list");
  return (
    <Layout>
      <Container>
        <div className="header">
          <label className="title">Previous Rulings</label>
          <Button setGridLayout={setGridLayout} />
        </div>
        <Cards gridLayout={gridLayout} />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 45px;
      line-height: 54px;
      color: #464646;
      font-style: normal;
      font-weight: 300;
    }
  }
`;
