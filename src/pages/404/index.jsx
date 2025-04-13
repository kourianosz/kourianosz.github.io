import { Button, Container, Group, Text, Title } from "@mantine/core";
import { NavLink } from "react-router";
import { InvalidRouteIllustration } from "../../components";
import classes from "./index.module.css";

const InvalidRoute = () => {
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <InvalidRouteIllustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Nothing to see here</Title>
          <Text
            c="dimmed"
            size="lg"
            ta="center"
            className={classes.description}
          >
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL.
          </Text>
          <Group justify="center">
            <NavLink to="/">
              <Button size="md" color={"var(--mantine-color-pink-5)"}>
                Take me back to home page
              </Button>
            </NavLink>
          </Group>
        </div>
      </div>
    </Container>
  );
};

export default InvalidRoute;
