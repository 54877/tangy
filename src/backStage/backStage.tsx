import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Flex } from "../components/Input/Input.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import image from "../assets/back.png";
import imageMac from "../assets/backBanner.png";
import { Tags, ClipboardCheck, Users } from "lucide-react";
import {
  FlexRelative,
  ProfileImg,
  FlexAbs,
  ItemContainer,
  ItemSpan,
  Container,
  MacContainer,
} from "../profile/profile.styled";
import { FlexType } from "../styles/components/flex";
import { SpanType } from "../styles/components/span";
import { media } from "../styles/helper/media";
import { useMediaQuery } from "@mui/material";
import { BackCard } from "../components/backCard/backCard";
import { useCallback, useEffect, useState } from "react";
import {
  getAllCourseCategories,
  getAllTags,
  getAllUsers,
  getCourseAdmin,
} from "../api/backStage.api";
import { DialogApiError } from "../utils/apiError";
import { useDialog } from "../context/dialog/useDialog";
import type {
  AdminCourseType,
  CourseCategoryType,
  TagsListType,
} from "../types/backStageType";
import type { UseUserProps } from "../types/userType";

export const BackStage = () => {
  const location = useLocation();
  const item = ["標籤管理", "使用者", "課程管理", "課程分類"];
  const url = ["tags", "userList", "backStageCourse", "category"];
  const icons = [Tags, Users, ClipboardCheck, ClipboardCheck];
  const initialSlide = url.findIndex((item) =>
    location.pathname.endsWith(`/${item}`),
  );
  const { openDialog } = useDialog();
  const isBannerMac = useMediaQuery(`${media.xsLg}`);
  const isMac = useMediaQuery(`${media.sm}`);
  const navigate = useNavigate();
  const [courseList, setCourseList] = useState<AdminCourseType[]>();
  const [userList, setUserList] = useState<UseUserProps[]>();
  const [tagList, setTagList] = useState<TagsListType[]>();
  const [categoryList, setCategoryList] = useState<CourseCategoryType[]>();

  //userList api
  const loadUserList = useCallback(async () => {
    try {
      const res = await getAllUsers();
      return res.data.dataSet;
    } catch (err) {
      DialogApiError(err, openDialog, 1);
      return undefined;
    }
  }, [openDialog]);

  //更新userList State
  const refreshUserList = useCallback(async () => {
    const data = await loadUserList();
    if (data) {
      setUserList(data);
    }
  }, [loadUserList, setUserList]);

  //tagList api
  const loadTagList = useCallback(async () => {
    try {
      const res = await getAllTags();
      return res.data.dataSet;
    } catch (err) {
      DialogApiError(err, openDialog, 1);
      return [];
    }
  }, [openDialog]);

  //更新tagList State
  const refreshTagList = useCallback(async () => {
    const data = await loadTagList();
    setTagList(data ?? []);
  }, [loadTagList]);

  //Category api
  const loadCategoryList = useCallback(async () => {
    try {
      const res = await getAllCourseCategories();
      return res.data.dataSet;
    } catch (err) {
      DialogApiError(err, openDialog, 1);
      return [];
    }
  }, [openDialog]);

  //更新Category State
  const refreshCategoryList = useCallback(async () => {
    const data = await loadCategoryList();
    setCategoryList(data ?? []);
  }, [loadCategoryList]);

  //course api
  const loadCourseList = useCallback(async () => {
    try {
      const res = await getCourseAdmin();
      const data = res.data.dataSet;
      return data;
    } catch (err) {
      DialogApiError(err, openDialog, 1);
      return [];
    }
  }, [openDialog]);

  //更新Course State
  const refreshCourseList = useCallback(async () => {
    const data = await loadCourseList();
    setCourseList(data ?? []);
  }, [loadCourseList]);

  // 初次載入各項列表
  useEffect(() => {
    void (async () => {
      const users = await loadUserList();
      setUserList(users ?? []);

      const tags = await loadTagList();
      setTagList(tags ?? []);

      const categories = await loadCategoryList();
      setCategoryList(categories ?? []);

      const courses = await loadCourseList();
      setCourseList(courses ?? []);
    })();
  }, [loadUserList, loadTagList, loadCategoryList, loadCourseList]);

  return (
    <MacContainer $direction={"column"}>
      <Flex style={{ padding: "0 16px" }} as="section">
        {/* userBanner */}
        <FlexRelative $direction={"column"} $gap={"none"}>
          <ProfileImg
            style={{
              height: "40vh",
            }}
            src={isBannerMac ? imageMac : image}
          />
          <FlexAbs $align={"flex-start"} $gap={"none"} $direction={"column"}>
            <Container
              style={{ flex: 1 }}
              $direction={"column"}
              $align={"flex-start"}
              $justify={"flex-start"}
            >
              <FlexType
                $direction={"column"}
                $gap={"none"}
                $align={"flex-start"}
                style={{ marginTop: "48px" }}
              >
                <SpanType style={{ fontSize: "24px" }} $type={"label"}>
                  歡迎回來，管理員!
                </SpanType>
              </FlexType>
            </Container>
            {/* 電腦版 item */}
            {isMac && (
              <Flex
                $justify={"flex-start"}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  boxSizing: "border-box",
                  gap: "16px",
                  margin: "16px 0",
                  padding: "0 16px",
                }}
              >
                {item.map((item, index) => {
                  const Icon = icons[index];
                  return (
                    <BackCard
                      key={item}
                      isActive={location.pathname.endsWith(`/${url[index]}`)}
                      onClick={() => {
                        void navigate(url[index]);
                      }}
                      img={<Icon size={30} />}
                      title={item}
                      num={"100"}
                    />
                  );
                })}
              </Flex>
            )}
            {/* 手機板 item */}
            {!isMac && (
              <Swiper
                initialSlide={Math.max(initialSlide, 0)}
                slidesPerView={4}
                style={{
                  width: "100%",
                  minWidth: 0,
                  backgroundColor: "white",
                  borderRadius: "16px",
                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
                  borderBottom: "1px solid #ccd1d5",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 3,
                  },
                  600: {
                    slidesPerView: 4,
                  },
                }}
              >
                {item.map((item, index) => {
                  const isActive = location.pathname.endsWith(`/${url[index]}`);

                  return (
                    <SwiperSlide key={`${item}-${index}`}>
                      <ItemContainer
                        $activeIndex={isActive}
                        $justify="center"
                        onClick={() => {
                          void navigate(url[index]);
                        }}
                      >
                        <ItemSpan
                          style={{ padding: "8px 0" }}
                          $shade={isActive ? 950 : 500}
                        >
                          {item}
                        </ItemSpan>
                      </ItemContainer>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </FlexAbs>
        </FlexRelative>
      </Flex>
      <Outlet
        context={{
          courseList,
          refreshCourseList,
          userList,
          setUserList,
          refreshUserList,
          tagList,
          refreshTagList,
          categoryList,
          refreshCategoryList,
        }}
      />
    </MacContainer>
  );
};
