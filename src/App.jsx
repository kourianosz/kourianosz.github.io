import { Header, Footer } from "./components";
import { AppShell, Container, MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router";
import { Home, Contact, About } from "./pages";

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
