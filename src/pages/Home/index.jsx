import { Container, Text, Title } from "@mantine/core";
import { ProjectGrid } from "../../components";
import classes from "./index.module.css";

const Home = () => {
  return (
    <div>
      <Container className={classes.wrapper} size={"xl"}>
        <div>
          <Title className={classes.title}>
            Hi, I'm{" "}
            <Text component="span" className={classes.highlight} inherit>
              Zoey Kourianos
            </Text>
          </Title>
          <Container p={0} size={600}>
            <Text size="lg" c="dimmed" className={classes.description}>
              Product Designer crafting clean, intuitive designs based in the
              Bay Area.
            </Text>
          </Container>
        </div>
      </Container>
      <ProjectGrid />
    </div>
  );
};

export default Home;
