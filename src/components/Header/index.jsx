import { useState } from "react";
import { Burger, Container, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./index.module.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";

const links = [
  { link: "/", label: "Work" },
  { link: "/about", label: "About" },
  { link: "/contact", label: "Contact" },
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes.active : ""}`
      }
    >
      {link.label}
    </NavLink>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <img
          src={logo}
          alt="Zoey Kourianos"
          className={classes.logo}
          aria-label="Zoey Kourianos"
        />
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
