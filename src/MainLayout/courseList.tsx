import { ListButtonDefault } from "../components/NavUserList/List";
import { FlexType } from "../styles/components/flex";
import type { CourseCategoryType } from "../types/backStageType";

export const CourseList = ({
  categoryList,
}: {
  categoryList: CourseCategoryType[];
}) => {
  const categories = [
    { categoryKey: "all", CategoryName: "所有領域" },
    ...categoryList,
  ];

  return (
    <FlexType $direction={"column"} $gap={"sm"}>
      {categories.map(({ categoryKey, CategoryName }) => (
        <ListButtonDefault key={categoryKey} text={CategoryName} />
      ))}
    </FlexType>
  );
};
