import { Header, Footer } from "./components";
import { AppShell, Container, MantineProvider, Space } from "@mantine/core";
import { Route, Routes } from "react-router";
import { Home, Contact, About, InvalidRoute } from "./pages";
import * as Assets from "./assets";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Object.values(Assets).forEach((assetSrc) => {
      const img = new Image();
      img.src = assetSrc;
    });
  }, []);

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
          <Container size={"xl"} mb={{ base: 0, sm: "100px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />=
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<InvalidRoute />} />
            </Routes>
            <Container hiddenFrom="sm">
              <Footer />
            </Container>
          </Container>
        </AppShell.Main>
        <AppShell.Footer visibleFrom="sm">
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
