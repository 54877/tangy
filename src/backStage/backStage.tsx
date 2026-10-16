import { Outlet, useNavigate } from "react-router-dom";
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
import { useEffect, useState } from "react";
import { useLoading } from "../context/loading/useLoading";
import { getAllTags, getAllUsers } from "../api/backStage";
import { DialogApiError } from "../utils/apiError";
import { useDialog } from "../context/dialog/useDialog";
import type { UseUserProps } from "../types/userType";
import type { TagsListType } from "../types/backStageType";

export const BackStage = () => {
  const item = ["標籤管理", "課程審核", "使用者"];
  const url = ["tags", "backStageCourse", "userList"];
  const icons = [Tags, ClipboardCheck, Users];
  const initialSlide = url.findIndex((item) =>
    location.pathname.endsWith(`/${item}`),
  );
  const { openDialog } = useDialog();
  const isBannerMac = useMediaQuery(`${media.xsLg}`);
  const isMac = useMediaQuery(`${media.sm}`);
  const navigate = useNavigate();
  const [tagList, setTagList] = useState<TagsListType[]>();
  const [userList, setUserList] = useState<UseUserProps[]>();
  const { loading } = useLoading();

  //取得tagsList
  useEffect(() => {
    let cancelled = false;

    const fetchTags = async () => {
      loading(1).start();

      try {
        const res = await getAllTags();
        const data = res.data.dataSet;
        console.log(data);
        if (!cancelled) {
          setTagList(data);
        }
      } catch (err) {
        if (!cancelled) {
          DialogApiError(err, openDialog, 1);
        }
      } finally {
        await loading(1).stop();
      }
    };

    void fetchTags();

    return () => {
      cancelled = true;
    };
  }, []);

  //取得userList
  useEffect(() => {
    let cancelled = false;

    const fetchUserList = async () => {
      loading(1).start();

      try {
        const result = await getAllUsers();
        const userData = result.data.dataSet;
        console.log(userData);
        if (!cancelled) {
          setUserList(userData);
        }
      } catch (err) {
        if (!cancelled) {
          DialogApiError(err, openDialog, 1);
        }
      } finally {
        await loading(1).stop();
      }
    };

    void fetchUserList();

    return () => {
      cancelled = true;
    };
  }, []);

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
                  maxWidth: "65%",
                  margin: "16px",
                }}
              >
                {item.map((item, index) => {
                  const Icon = icons[index];
                  return (
                    <BackCard
                      key={item}
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
                slidesPerView={3}
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
      <Outlet context={{ tagList, setTagList, userList, setUserList }} />
    </MacContainer>
  );
};
