import { SimpleGrid } from "@mantine/core";

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
      <div style={{ backgroundColor: "lightblue", height: "100px" }}>
        Project 1
      </div>
      <div style={{ backgroundColor: "lightgreen", height: "100px" }}>
        Project 2
      </div>
      <div style={{ backgroundColor: "lightcoral", height: "100px" }}>
        Project 3
      </div>
    </SimpleGrid>
  );
};

export default ProjectGrid;
