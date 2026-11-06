import type { CourseReviewStatus } from "../types/backStageType";

export const reviewStatusOptions: {
  value: CourseReviewStatus;
  label: string;
}[] = [
  { value: "PENDING", label: "待審核" },
  { value: "APPROVED", label: "已核准" },
  { value: "REJECTED", label: "已拒絕" },
];
