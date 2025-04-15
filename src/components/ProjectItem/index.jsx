import { Card, Divider, Stack, Text } from "@mantine/core";
import classes from "./index.module.css";

const ProjectItem = ({ title, subtitle, toLink, imageUrl }) => {
  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius={0}
      component="a"
      href="https://mantine.dev/"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className={classes.overlay} />

      <Stack
        gap={"md"}
        className={classes.content}
        h={"100%"}
        justify="flex-end"
        mb={"lg"}
      >
        <Text size="50px" className={classes.title} c={"white"} fw={600}>
          {title}
        </Text>
        <Divider w={"20px"} size={"lg"} color="pink.5" />
        <Text size="md" c={"dark.0"} fw={500} lh={1}>
          {subtitle}
        </Text>
      </Stack>
    </Card>
  );
};

export default ProjectItem;
