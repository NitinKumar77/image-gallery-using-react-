import { useSelector } from "react-redux";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
function ShowImages() {
  const imageList = useSelector((state) => state.imageList);
  //   url={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
  //   title={item.title}
  return (
    <>
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
