import { Divider, Grid, Stack, Text, Title } from "@mantine/core";

const AboutDetails = () => {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
        <EducationDetails />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
        <DesignDetails />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
        <TechnicalDetails />
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 6, lg: 3 }}>
        <ExperienceDetails />
      </Grid.Col>
    </Grid>
  );
};

const EducationDetails = () => {
  return (
    <Stack>
      <Title order={4}>Education</Title>
      <Divider w={"20px"} size={"lg"} color="pink.4" />
      <Stack gap={"0px"}>
        <Text c={"dimmed"} fw={700}>
          Coursera (Google)
        </Text>
        <Text c={"dimmed"} size={"sm"}>
          UX Design Certificate
        </Text>
        <Text c={"dimmed"} size={"sm"}>
          January 2025
        </Text>
      </Stack>
      <Stack gap={"0px"}>
        <Text c={"dimmed"} fw={700}>
          Westminster University
        </Text>
        <Text c={"dimmed"} size={"sm"}>
          Bachelor of Arts
        </Text>
        <Text c={"dimmed"} size={"sm"}>
          May 2022
        </Text>
      </Stack>
    </Stack>
  );
};

const ExperienceDetails = () => {
  return (
    <Stack>
      <Title order={4}>Experience</Title>
      <Divider w={"20px"} size={"lg"} color="pink.4" />
      <Stack gap={"0px"}>
        <Text c={"dimmed"} fw={700}>
          Utah Third District Juvenile Court
        </Text>
        <Text c={"dimmed"} size={"sm"}>
          Juvenile Probation Officer
        </Text>
        <Text c={"dimmed"} size={"sm"}>
          Octtober 2023 - February 2024
        </Text>
      </Stack>
      <Stack gap={"0px"}>
        <Text c={"dimmed"} fw={700}>
          American Research Center in Egypt (ARCE)
        </Text>
        <Text c={"dimmed"} size={"sm"}>
          Environmental Policy Specialist
        </Text>
        <Text c={"dimmed"} size={"sm"}>
          August 2022 - December 2022
        </Text>
      </Stack>
      <Stack gap={"0px"}>
        <Text c={"dimmed"} fw={700}>
          Westminster University
        </Text>
        <Text c={"dimmed"} size={"sm"}>
          Environmental Justice Assistant
        </Text>
        <Text c={"dimmed"} size={"sm"}>
          September 2020 - May 2021
        </Text>
      </Stack>
    </Stack>
  );
};

const DesignDetails = () => {
  return (
    <Stack>
      <Title order={4}>Design Skills</Title>
      <Divider w={"20px"} size={"lg"} color="pink.4" />
      <Stack gap={"5px"}>
        <Text c={"dimmed"} size={"sm"} fw={600}>
          UI / UX
        </Text>
        <Text c={"dimmed"} size={"sm"} fw={600}>
          Design Thinking
        </Text>
        <Text c={"dimmed"} size={"sm"} fw={600}>
          Design Research
        </Text>
        <Text c={"dimmed"} size={"sm"} fw={600}>
          Typography
        </Text>
        <Text c={"dimmed"} size={"sm"} fw={600}>
          Moodboarding
        </Text>
        <Text c={"dimmed"} size={"sm"} fw={600}>
          Prototyping
        </Text>
      </Stack>
    </Stack>
  );
};

const TechnicalDetails = () => {
  return (
    <Stack>
      <Title order={4}>Technical Skills</Title>
      <Divider w={"20px"} size={"lg"} color="pink.4" />
      <Stack gap={"5px"}>
        <Text c={"dimmed"} size={"sm"} fw={600}>
          Figma (Design + Prototyping)
        </Text>
        <Text c={"dimmed"} size={"sm"} fw={600}>
          Photoshop
        </Text>
        <Text c={"dimmed"} size={"sm"} fw={600}>
          Canva
        </Text>
      </Stack>
    </Stack>
  );
};

export default AboutDetails;
