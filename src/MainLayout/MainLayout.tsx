import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { media } from "../styles/helper/media";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

//TODO API 取得課程分類  後台可修改客成分類
//TODO search 跳轉頁面

export function MainLayout() {
  const isMobile = useMediaQuery(`${media.sm}`);

  return (
    <>
      {/*     TOP NAV   */}
      <Nav isMobile={isMobile} />
      {/* Outlet */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: isMobile ? "0" : "80px",
          padding: "0",
        }}
      >
        <Outlet />
      </Box>
      {/*  Footer  */}
      <Footer />
    </>
  );
}
