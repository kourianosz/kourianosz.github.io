import { Burger, Container, Group, Stack } from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import classes from "./index.module.css";
import logo from "../../assets/logo.png";
import logoOpen from "../../assets/logo_open.png";
import { NavLink } from "react-router";
import { headerLinks } from "../../util/config";

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
      {link.label}
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
      {opened && (
        <Container hiddenFrom="xs">
          <Stack gap={5}>{items}</Stack>
        </Container>
      )}
    </header>
  );
};

export default Header;
