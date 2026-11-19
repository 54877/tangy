import { useState, type SubmitEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { Button } from "../components/Button/Button";
import { DialogBase } from "../components/dialog/dialogBase";
import { FlexType } from "../styles/components/flex";
import { useDialog } from "../context/dialog/useDialog";
import { useActiveDialog } from "../utils/dialogLayer";
import { useInformation } from "../utils/information";
import type { SearchCourseRequest } from "../types/courseType";
import { CourseList } from "./courseList";

export function SearchCourseDialog() {
  const { closeDialog } = useDialog();
  const { activeDialog, activeLayer } = useActiveDialog("SearchCourseDialog");
  const { type, searchInformation, courseCategories, onSearchSubmit } =
    activeDialog;
  const { information, handleOnChange } = useInformation<SearchCourseRequest>(
    searchInformation ?? { context: "", categoryKey: [] },
  );
  const [categoryKeys, setCategoryKeys] = useState(information.categoryKey);
  const close = () => closeDialog(activeLayer);

  const toggleCategory = (key: string) => {
    setCategoryKeys((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : current.length < 5
          ? [...current, key]
          : current,
    );
  };

  const submit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit?.({
      context: information.context.trim(),
      categoryKey: categoryKeys,
    });
    close();
  };

  return (
    <DialogBase
      type={type}
      title="搜尋課程"
      onClose={close}
      width="min(92vw, 480px)"
      context={
        <form onSubmit={submit}>
          <FlexType $direction="column" $align="stretch" $gap="md">
            <TextField
              autoFocus
              fullWidth
              label="搜尋課程"
              value={information.context}
              onChange={(event) =>
                handleOnChange(event.target.value, "context")
              }
            />
            <CourseList
              categoryList={courseCategories ?? []}
              selectedCategoryKeys={categoryKeys}
              onCategoryChange={toggleCategory}
            />
            <FlexType
              $justify="flex-end"
              style={{
                position: "sticky",
                bottom: 0,
                background: "white",
                paddingTop: 12,
              }}
            >
              <Button text="搜尋" icon_left={<SearchIcon />} />
            </FlexType>
          </FlexType>
        </form>
      }
    />
  );
}
