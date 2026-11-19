import { FlexType } from "../styles/components/flex";
import type { CourseCategoryType } from "../types/backStageType";
import { Checkbox, FormControlLabel } from "@mui/material";
import { LoadingUi } from "../components/loading/loading";
import { useLoadingState } from "../utils/loading/loading.state";

export const CourseList = ({
  categoryList,
  selectedCategoryKeys = [],
  onCategoryChange,
}: {
  categoryList: CourseCategoryType[];
  selectedCategoryKeys?: string[];
  onCategoryChange?: (categoryKey: string) => void;
}) => {
  const categoryLoading = useLoadingState(0);
  const categories = categoryList;

  if (categoryLoading) {
    return <LoadingUi style={{ padding: "36px" }} type="spinner" />;
  }

  return (
    <FlexType
      $direction={"column"}
      $gap={"sm"}
      style={{ alignItems: "flex-start", width: "100%" }}
    >
      {categories.map(({ categoryKey, CategoryName }) => {
        const checked = selectedCategoryKeys.includes(categoryKey);
        const disabled = !checked && selectedCategoryKeys.length >= 5;

        return (
          <FormControlLabel
            key={categoryKey}
            sx={{ marginLeft: 0, width: "100%", cursor: disabled ? "default" : "pointer" }}
            onClick={(event) => {
              event.preventDefault();
              if (!disabled) onCategoryChange?.(categoryKey);
            }}
            control={
              <Checkbox
                checked={checked}
                disabled={disabled}
                readOnly
              />
            }
            label={CategoryName}
          />
        );
      })}
    </FlexType>
  );
};
