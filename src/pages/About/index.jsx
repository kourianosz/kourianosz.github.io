import { Container, Divider, Grid, Image, Stack, Text } from "@mantine/core";
import classes from "./index.module.css";
import { ContactForm } from "../../components";
import { zoeyImage } from "../../assets";

const About = () => {
  return (
    <Container
      size={"lg"}
      p={0}
      pt={{
        base: 25,
        md: 75,
      }}
    >
      <Grid
        mt={20}
        gutter={{
          base: 20,
          md: 50,
          lg: 100,
        }}
        align="flex-start"
      >
        <Grid.Col span={{ base: 12, xs: 5 }}>
          <Image
            radius="md"
            w={"100%"}
            h={"auto"}
            mt={{
              base: 0,
              xs: 25,
            }}
            src={zoeyImage}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 7 }}>
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
              Zoey Kourianos
            </Text>
            <Stack gap={20}>
              <Text size="lg" fw={600}>
                I'm a product designer, shaping brand and visual systems for
                generative AI and early-stage innovation &mdash; currently
                looking for new opportunities.
              </Text>
              <Stack gap={10}>
                <Text size="md" c={"dimmed"} fw={600}>
                  I specialize in bridging the tenets of brand identity with
                  UX/UI to craft innovative and impactful design solutions for
                  the modern age.
                </Text>
                <Text size="md" c={"dimmed"} fw={600}>
                  Currently, I lead brand expression for Google Search AI,
                  shaping future-forward design systems and driving visual
                  cohesion across 0→1 innovation efforts.
                </Text>
                <Text size="md" c={"dimmed"} fw={600}>
                  Aside from design, I play the piano, run marathons, and enjoy
                  all things outdoorsy or creative.
                </Text>
              </Stack>
              <Text size="md" c={"dimmed"} fs={"italic"} fw={500}>
                &mdash; Based in the San Francisco Bay Area.
              </Text>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
      <Divider size={"lg"} mt={20} />
    </Container>
  );
};

export default About;
