import { useSelector } from "react-redux";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Button } from "@mui/material";
function ShowImages() {
  const imageList = useSelector((state) => state.imageList);
  //   url={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
  //   title={item.title}
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant='contained'
          sx={{ margin: "0 10px", bgcolor: "darkBlue" }}
        >
          Mountains
        </Button>
        <Button
          variant='contained'
          sx={{ margin: "0 10px", bgcolor: "darkBlue" }}
        >
          Beaches
        </Button>
        <Button
          variant='contained'
          sx={{ margin: "0 10px", bgcolor: "darkBlue" }}
        >
          Birds
        </Button>
        <Button
          variant='contained'
          sx={{ margin: "0 10px", bgcolor: "darkBlue" }}
        >
          Foods
        </Button>
      </Box>

      <ImageList cols={5} rowHeight={164}>
        {imageList.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default ShowImages;
