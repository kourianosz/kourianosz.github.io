import { Burger, Collapse, Container, Group, Stack, Text } from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import classes from "./index.module.css";
import { NavLink } from "react-router";
import { headerLinks } from "../../util/config";
import { logo, logoOpen } from "../../assets";

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { hovered, ref } = useHover();

  const items = headerLinks.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes.active : ""}`
      }
      onClick={() => {
        if (opened) {
          toggle();
        }
      }}
    >
      <Text>{link.label}</Text>
    </NavLink>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <NavLink ref={ref} to="/" onClick={opened ? toggle : null}>
          <img
            src={opened || hovered ? logoOpen : logo}
            alt="Zoey Kourianos"
            className={classes.logo}
            aria-label="Zoey Kourianos"
          />
        </NavLink>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
      <Collapse in={opened}>
        <Container hiddenFrom="xs" pb={10}>
          <Stack gap={5}>{items}</Stack>
        </Container>
      </Collapse>
    </header>
  );
};

export default Header;
