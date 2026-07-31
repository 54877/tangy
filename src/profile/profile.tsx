import { FlexType } from "../styles/components/flex";
import { useEffect, useState } from "react";
import { Heading, SpanType } from "../styles/components/span";
import { Flex } from "../components/Input/Input.styled";
import {
  Container,
  ContainerPrimary,
  FlexAbs,
  FlexGray,
  FlexRelative,
  ItemContainer,
  ItemFlex,
  ItemSpan,
  MacContainer,
  MacItemFlex,
  ProfileImg,
  SideBarContainer,
} from "./profile.styled";
import image from "../assets/profile_image.png";
import image2 from "../assets/profile_image2.png";
import image3 from "../assets/icon_tangy/tangy_Icon.png";
import { UserImg } from "../components/UserImg/userImg";
import { useMe } from "../api/common/profile.API";
import { useAuth } from "../context/auth/useAuth";
import { media } from "../styles/helper/media";
import { useMediaQuery } from "@mui/material";
import { Button } from "../components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Outlet, useNavigate } from "react-router-dom";

export const Profile = () => {
  const { user } = useAuth();
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const item = ["個人檔案", "我的學習", "我的收藏", "訂單紀錄"];
  const { getMe } = useMe();

  const isTablet = useMediaQuery(`${media.xsLg}`);
  const isMac = useMediaQuery(`${media.sm}`);
  const isLgMac = useMediaQuery(`${media.md}`);
  useEffect(() => {
    getMe();
  }, []);

  return (
    <>
      <MacContainer $align={"stretch"}>
        {/* mac sideBar */}
        {isMac && (
          <SideBarContainer $align={"stretch"}>
            <Flex $direction="column">
              {/* item */}
              <MacItemFlex $direction="column">
                {item.map((item, index) => (
                  <ItemContainer
                    $activeIndex={activeIndex === index}
                    $justify={"flex-start"}
                    key={`${item}-${index}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <ItemSpan
                      $shade={activeIndex === index ? 950 : 500}
                      $type="label"
                      $size="md"
                    >
                      {item}
                    </ItemSpan>
                  </ItemContainer>
                ))}
              </MacItemFlex>
              {/* 探索課程 */}
              <Flex style={{ padding: "16px" }}>
                <FlexGray $direction={isLgMac ? "row" : "column"}>
                  <img style={{ width: "60px" }} src={image3} alt="" />

                  <Flex
                    $direction={"column"}
                    $align={isLgMac ? "flex-start" : "center"}
                  >
                    <Heading $size={"xs"}>不知道學什麼?</Heading>
                    <Flex
                      $align={isLgMac ? "flex-start" : "center"}
                      $direction={"column"}
                      $gap={"none"}
                    >
                      <SpanType $size={"xs"} $shade={500}>
                        探索學習路徑
                      </SpanType>
                      <SpanType $size={"xs"} $shade={500}>
                        你的課程組合!
                      </SpanType>
                    </Flex>
                    <Button
                      style={{
                        fontSize: "12px",
                        whiteSpace: "nowrap",
                        padding: "12px 12px",
                      }}
                      onClick={() => {
                        navigate("/course");
                      }}
                      icon_right={<ArrowForwardIcon />}
                      text={"探索學習"}
                    />
                  </Flex>
                </FlexGray>
              </Flex>
            </Flex>
          </SideBarContainer>
        )}

        <Flex $direction={"column"} $gap={"none"} $justify={"flex-start"}>
          <Container>
            {/* userBanner */}
            <FlexRelative $direction={"column"} $gap={"none"}>
              <ProfileImg
                style={{
                  height: isTablet ? "30vh" : "40vh",
                }}
                src={image}
              />
              <FlexAbs $gap={"none"} $direction={"column"}>
                <Container
                  style={{ flex: 1 }}
                  $direction={"column"}
                  $align={"flex-start"}
                >
                  <UserImg width="60px" height="60px" />
                  <SpanType $type={"label"}>Hi, {user.userName}</SpanType>
                  <FlexType
                    $direction={"column"}
                    $gap={"none"}
                    $align={"flex-start"}
                  >
                    <SpanType $type={"label"}>學習讓自己更強大，</SpanType>
                    <SpanType $type={"label"}>碳吉與你一起成長!</SpanType>
                  </FlexType>
                </Container>
                {/* item */}
                {!isMac && (
                  <ItemFlex>
                    {item.map((item, index) => (
                      <Flex
                        key={`${item}-${index}`}
                        $direction="column"
                        onClick={() => setActiveIndex(index)}
                      >
                        <SpanType
                          style={{
                            paddingBottom:
                              activeIndex === index ? "8px" : "0px",
                          }}
                          $shade={activeIndex === index ? 950 : 500}
                          $type="label"
                          $size="md"
                        >
                          {item}
                        </SpanType>
                      </Flex>
                    ))}
                  </ItemFlex>
                )}
              </FlexAbs>
            </FlexRelative>
          </Container>

          <ContainerPrimary>
            <Outlet />
          </ContainerPrimary>
        </Flex>
      </MacContainer>

      {!isMac && (
        <>
          {/* 邀請好友一起學習 */}
          <Container>
            <FlexRelative $direction={"column"} $gap={"none"}>
              <ProfileImg
                style={{ height: isTablet ? "25vh" : "20vh" }}
                src={image2}
              />
              <FlexAbs
                style={{ padding: "0 16px" }}
                $align={"flex-start"}
                $direction={"column"}
              >
                <Heading style={{ color: "white" }}>邀請好友一起學習</Heading>
                <SpanType style={{ color: "white" }}>
                  一起成長,獲得獎勵!
                </SpanType>
              </FlexAbs>
            </FlexRelative>
          </Container>
          {/* 不知道學甚麼 */}
          <Flex style={{ padding: "16px" }}>
            <FlexGray>
              <img style={{ width: "80px" }} src={image3} alt="" />

              <Flex $direction={"column"} $align={"flex-start"}>
                <Heading $size={"sm"}>不知道學什麼?</Heading>
                <Flex $align={"flex-start"} $direction={"column"} $gap={"none"}>
                  <SpanType $shade={500}>探索學習路徑，找到最適合</SpanType>
                  <SpanType $shade={500}>你的課程組合!</SpanType>
                </Flex>
                <Button
                  onClick={() => {
                    navigate("/course");
                  }}
                  icon_right={<ArrowForwardIcon />}
                  text={"探索學習路徑"}
                />
              </Flex>
            </FlexGray>
          </Flex>
        </>
      )}
    </>
  );
};
