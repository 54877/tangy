import { useCallback, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import type { TagsListType } from "../../types/backStageType";
import { getAllTags } from "../../api/backStage.api";
import { useDialog } from "../dialog/useDialog";
import { TagsContext } from "./TagsContext";
import { DialogApiError } from "../../utils/apiError";

export const TagsProvider = ({ children }: PropsWithChildren) => {
  const [tagList, setTagList] = useState<TagsListType[]>();
  const { openDialog } = useDialog();

  const tagsApi = useCallback(async () => {
    try {
      const res = await getAllTags();
      setTagList(res.data.dataSet);
    } catch (err) {
      DialogApiError(err, openDialog, 1);
    }
  }, [openDialog]);

  const value = useMemo(
    () => ({ tagList, tagsApi }),
    [tagList, tagsApi],
  );

  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
};
