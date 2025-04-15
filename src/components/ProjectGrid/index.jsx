import { SimpleGrid } from "@mantine/core";
import ProjectItem from "../ProjectItem";
import { acornImage } from "../../assets";

const ProjectGrid = () => {
  return (
    <SimpleGrid
      cols={{
        base: 1,
        xs: 2,
        md: 3,
      }}
      spacing={0}
      verticalSpacing={0}
    >
      <ProjectItem title={"Acorn"} subtitle={"UI / UX"} imageUrl={acornImage} />
      <ProjectItem title={"Acorn"} subtitle={"UI / UX"} imageUrl={acornImage} />
      <ProjectItem title={"Acorn"} subtitle={"UI / UX"} imageUrl={acornImage} />
    </SimpleGrid>
  );
};

export default ProjectGrid;
