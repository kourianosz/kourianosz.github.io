import {
  IconBrandBehance,
  IconBrandLinkedinFilled,
  IconMail,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text } from "@mantine/core";
import classes from "./index.module.css";

export const Footer = () => {
  return (
    <div>
      <Container size={"xl"} className={classes.inner}>
        <Text size={"xs"} c={"gray"}>
          Zoey Kourianos | Designer | kourianosz@gmail.com
        </Text>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            component="a"
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="Behance"
            href="https://www.behance.net/zoeykourianos"
            target="_blank"
          >
            <IconBrandBehance size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/zoey-k/"
            target="_blank"
          >
            <IconBrandLinkedinFilled size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            size="lg"
            color="gray"
            variant="subtle"
            aria-label="Email"
            href="mailto:kourianosz@gmail.com"
          >
            <IconMail size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};
