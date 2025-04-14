import {
  IconBrandBehance,
  IconBrandLinkedinFilled,
  IconMail,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text } from "@mantine/core";
import classes from "./index.module.css";
import { useMediaQuery } from "@mantine/hooks";

const Footer = () => {
  const mobileMatchMedia = useMediaQuery("(max-width: 36em)");

  const groupGap = mobileMatchMedia ? "lg" : "0";
  const actionIconSize = mobileMatchMedia ? "xl" : "lg";
  const iconSize = mobileMatchMedia ? 24 : 18;

  return (
    <Container size={"xl"} className={classes.inner}>
      <Text size={"xs"} c={"gray"}>
        Zoey Kourianos | Designer | kourianosz@gmail.com
      </Text>
      <Group
        gap={groupGap}
        className={classes.links}
        justify="flex-end"
        wrap="nowrap"
      >
        <ActionIcon
          component="a"
          size={actionIconSize}
          color="gray"
          variant="subtle"
          aria-label="Behance"
          href="https://www.behance.net/zoeykourianos"
          target="_blank"
        >
          <IconBrandBehance size={iconSize} stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          component="a"
          size={actionIconSize}
          color="gray"
          variant="subtle"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/zoey-k/"
          target="_blank"
        >
          <IconBrandLinkedinFilled size={iconSize} stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          component="a"
          size={actionIconSize}
          color="gray"
          variant="subtle"
          aria-label="Email"
          href="mailto:kourianosz@gmail.com"
        >
          <IconMail size={iconSize} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Container>
  );
};

export default Footer;
