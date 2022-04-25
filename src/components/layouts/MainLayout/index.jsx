import React from "react";
import { Card } from "../../molecules/Card";
import { NavBar } from "../../organims/NavBar";
import { TransactionsTable } from "../../molecules/TransactionsTable";
import { Container } from "./styles";

export const MainLayout = ({ children }) => {
  return (
    <Container>
      <header>
        <NavBar />
      </header>
      <main>
        <Card title="un titulo">
          <TransactionsTable />
        </Card>
        {/* {children} */}
      </main>
    </Container>
  );
};
