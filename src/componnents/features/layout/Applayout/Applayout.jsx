import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "./styles";

export default function AppLayout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}
