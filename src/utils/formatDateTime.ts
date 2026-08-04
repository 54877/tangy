import { Dayjs } from "dayjs";

export const formatDateTime = (
  date: Dayjs | null,
  format = "YYYY-MM-DD",
): string => {
  if (!date) return "";
  return date.format(format);
};
