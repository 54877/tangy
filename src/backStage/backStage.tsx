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

export const BackStage = () => {
  const item = ["標籤管理", "課程審核", "使用者"];
  const url = ["tags", "backStageCourse", "userList"];
  const initialSlide = url.findIndex((item) =>
    location.pathname.endsWith(`/${item}`),
  );
  const isBannerMac = useMediaQuery(`${media.xsLg}`);
  const isMac = useMediaQuery(`${media.sm}`);
  const navigate = useNavigate();

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
            {isMac && (
              <Flex
                $justify={"flex-start"}
                style={{
                  maxWidth: "65%",
                  margin: "16px",
                }}
              >
                <BackCard
                  onClick={() => {
                    void navigate("tags");
                  }}
                  img={<Tags size={30} />}
                  title="標籤管理"
                  num={"100"}
                />
                <BackCard
                  onClick={() => {
                    void navigate("backStageCourse");
                  }}
                  img={<ClipboardCheck size={30} />}
                  title="課程審核"
                  num={"100"}
                />
                <BackCard
                  onClick={() => {
                    void navigate("userList");
                  }}
                  img={<Users size={30} />}
                  title="使用者"
                  num={"155"}
                />
              </Flex>
            )}
            {/* item */}
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
      <Outlet />
    </MacContainer>
  );
};
