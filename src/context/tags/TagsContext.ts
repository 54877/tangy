import { createContext } from "react";
import type { TagsListType } from "../../types/backStageType";

export interface TagsContextValue {
  tagList: TagsListType[] | undefined;
  tagsApi: () => Promise<void>;
}

export const TagsContext = createContext<TagsContextValue | null>(null);
