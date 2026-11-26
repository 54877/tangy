import { IndexBox } from "../index/index.styled";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Card } from "../components/card/Card";
import { CourseGrid } from "./course.styled";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { SpanType } from "../styles/components/span";
import { FlexType } from "../styles/components/flex";
import { useMediaQuery } from "@mui/material";
import { media } from "../styles/helper/media";
import { useLoading } from "../context/loading/useLoading";
import { searchCourse } from "../api/course.api";
import { useLoadingState } from "../utils/loading/loading.state";
import { LoadingUi } from "../components/loading/loading";
import type { CourseType } from "../types/courseType";
import { useLocation } from "react-router-dom";
import courseNotFoundImage from "../assets/searchError.png";
import { EMPTY_SEARCH } from "../constants/course";

export const Course = () => {
  const [sortIndex, setSortIndex] = useState(0);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const { loading } = useLoading();
  const isTablet = useMediaQuery(`${media.md}`);
  const [cardData, setCardData] = useState<CourseType[] | null>(null);
  const location = useLocation();
  const search = location.state?.search ?? EMPTY_SEARCH;
  const isLoading = useLoadingState(1) || cardData === null;
  const sortArray = ["依人數", "依評分", "依價格"];

  //所有線上課程api
  useEffect(() => {
    let active = true;

    const loadCourses = async () => {
      setCardData(null);
      loading(1).start();
      try {
        console.log(search);
        if (search) {
          const res = await searchCourse(search);
          if (active) setCardData(res.data.dataSet ?? []);
        }
      } catch (err) {
        console.error(err);
        if (active) setCardData([]);
      } finally {
        void loading(1).stop();
      }
    };

    void loadCourses();

    return () => {
      active = false;
    };
  }, [search]);

  const sortedCardData = useMemo(() => {
    if (cardData === null) {
      return [];
    }

    const courses = [...cardData];

    if (sortIndex === 0) {
      return courses.sort((a, b) => {
        const result = +a.studentCount - +b.studentCount;
        return sortDirection === "asc" ? result : -result;
      });
    }

    if (sortIndex === 1) {
      return courses.sort((a, b) => {
        const result = +a.rating - +b.rating;
        return sortDirection === "asc" ? result : -result;
      });
    }

    return courses.sort((a, b) => {
      const result = +a.price - +b.price;
      return sortDirection === "asc" ? result : -result;
    });
  }, [cardData, sortDirection, sortIndex]);

  let courseContent: ReactNode = sortedCardData.map((item, index) => (
    <Card
      key={`${item.title}-${index}`}
      tag={item.tags ?? []}
      {...item}
      alignRows
    />
  ));

  if (sortedCardData.length === 0) {
    courseContent = (
      <FlexType
        $direction="column"
        $gap="sm"
        style={{
          gridColumn: "1 / -1",
          padding: "24px 16px 64px",
          textAlign: "center",
        }}
      >
        <img
          src={courseNotFoundImage}
          alt="找不到符合條件的課程"
          style={{
            display: "block",
            width: "min(100%, 520px)",
            height: "auto",
          }}
        />
        <SpanType $size={{ xsLg: "lg", lg: "lg" }}>
          找不到符合條件的課程
        </SpanType>
      </FlexType>
    );
  }

  if (isLoading) {
    courseContent = (
      <FlexType
        style={{ gridColumn: "1 / -1", padding: "64px 0" }}
        $justify="center"
      >
        <LoadingUi type="spinner" />
      </FlexType>
    );
  }

  return (
    <IndexBox>
      {/* 排序 */}
      {sortedCardData.length > 0 && (
        <FlexType style={{ margin: "24px 0" }} $justify={"flex-start"}>
          {sortArray.map((e, index) => (
            <SpanType
              onClick={() => {
                setSortIndex(index);
                setSortDirection(index === 2 ? "asc" : "desc");
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                color: sortIndex === index ? "white" : "#232529",
                backgroundColor: sortIndex === index ? "#0F778F" : "#E9ECEF",
                padding: "8px 12px",
                borderRadius: "100px",
              }}
              $size={{
                xsLg: "sm",
                lg: "lg",
              }}
              key={e}
            >
              {e}
              {sortIndex === index && (
                <button
                  type="button"
                  aria-label={
                    sortDirection === "asc" ? "切換為降冪" : "切換為升冪"
                  }
                  onClick={(event) => {
                    event.stopPropagation();
                    setSortDirection((direction) =>
                      direction === "asc" ? "desc" : "asc",
                    );
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: 0,
                    border: 0,
                    background: "transparent",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  {sortDirection === "asc" ? (
                    <ArrowUpwardIcon fontSize="small" />
                  ) : (
                    <ArrowDownwardIcon fontSize="small" />
                  )}
                </button>
              )}
            </SpanType>
          ))}
        </FlexType>
      )}

      {/* course內容 */}
      <CourseGrid style={{ marginBottom: isTablet ? "96px" : "48px" }}>
        {courseContent}
      </CourseGrid>
    </IndexBox>
  );
};
