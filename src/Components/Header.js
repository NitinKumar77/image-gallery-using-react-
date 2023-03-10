import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

const MyStyle = styled(Box)({
  margin: "auto",
  display: "flex",
  justifyContent: "center",

  textAlign: "center",
});
const Header = () => (
  <Box sx={{ bgcolor: "white", borderRadius: "10px" }}>
    <MyStyle>
      <Typography variant='h1' fontFamily={"cursive"} fontSize='50px'>
        PHOTO GALLERY
      </Typography>
    </MyStyle>
  </Box>
);
export default Header;
