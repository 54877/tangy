import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ReusableDataTable } from "../../components/DataTable/dataTable";
import { Flex } from "../../components/Input/Input.styled";
import { Heading } from "../../styles/components/span";
import type { CourseReviewStatus } from "../../types/backStageType";
import { reviewStatusOptions } from "../../constants/courseReviewStatus";

export const MyCourse = () => {
  const [selectedStatus, setSelectedStatus] =
    useState<CourseReviewStatus>("PENDING");

  return (
    <section style={{ width: "100%", padding: 16 }}>
      <Flex
        style={{ marginBottom: 16, gap: 12, flexWrap: "wrap" }}
        $justify="space-between"
      >
        <Heading>我的課程</Heading>
        <ToggleButtonGroup
          exclusive
          size="small"
          color="primary"
          value={selectedStatus}
          aria-label="切換我的課程審核狀態"
          onChange={(_, value: CourseReviewStatus | null) => {
            if (value) setSelectedStatus(value);
          }}
        >
          {reviewStatusOptions.map((option) => (
            <ToggleButton key={option.value} value={option.value}>
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Flex>
      <ReusableDataTable columns={[]} data={[]} />
    </section>
  );
};
