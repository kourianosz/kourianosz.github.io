import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppShell, Container, MantineProvider } from "@mantine/core";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Route, Routes } from "react-router";
import { About } from "./pages/About";

function App() {
  return (
    <MantineProvider forceColorScheme="light">
      <AppShell
        withBorder={false}
        header={{
          height: 64,
        }}
      >
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          <Container size={"xl"}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />=
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </AppShell.Main>
        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
