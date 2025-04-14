import { Header, Footer } from "./components";
import { AppShell, Container, MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router";
import { Home, Contact, About, InvalidRoute } from "./pages";
import * as Assets from "./assets";

function App() {
  Object.values(Assets).forEach((assetSrc) => {
    const img = new Image();
    img.src = assetSrc;
  });

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
              <Route path="*" element={<InvalidRoute />} />
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
