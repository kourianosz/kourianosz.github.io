import {
  Anchor,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { ContactForm } from "../../components";
import classes from "./index.module.css";

const Contact = () => {
  return (
    <Container
      size={"lg"}
      p={0}
      pt={{
        base: 25,
        md: 75,
      }}
    >
      <Stack
        gap={{
          base: 0,
          xs: 30,
        }}
      >
        <Text
          component="h1"
          fw={600}
          c={"var(--mantine-color-pink-5)"}
          className={classes.contactHeader}
        >
          Get In Touch
        </Text>
        <Stack gap={5}>
          <Text size="lg">
            Available for questions, collaborations, projects, & pastries.
          </Text>
          <Text size="md" c={"dimmed"} fs={"italic"} fw={500}>
            &mdash; Based in the San Francisco Bay Area.
          </Text>
        </Stack>
      </Stack>
      <Grid mt={20} mb={50} gutter={20} align="flex-start">
        <Grid.Col span={{ base: 12, xs: 5 }}>
          <Image
            radius="md"
            w={"100%"}
            h={"auto"}
            mt={{
              base: 0,
              xs: 25,
            }}
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 7 }}>
          <ContactForm />
        </Grid.Col>
      </Grid>
      <Divider size={"lg"} />
      <Group mt={20}>
        <Anchor
          href="https://www.linkedin.com/in/zoey-k"
          target="_blank"
          c={"dimmed"}
          fw={600}
          style={{
            textDecorationColor: "var(--mantine-color-pink-5)",
            textUnderlineOffset: 3,
          }}
        >
          LinkedIn
        </Anchor>
        <Anchor
          href="mailto:kourianosz@gmail.com"
          target="_blank"
          c={"dimmed"}
          fw={600}
          style={{
            textDecorationColor: "var(--mantine-color-pink-5)",
            textUnderlineOffset: 3,
          }}
        >
          kourianosz@gmail.com
        </Anchor>
      </Group>
    </Container>
  );
};

export default Contact;
