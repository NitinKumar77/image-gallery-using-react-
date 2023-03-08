import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Category from "./Category";
import { Skeleton } from "@mui/material";

function ShowImages() {
  const imageList = useSelector((state) => state.imageList);
  const query = useSelector((state) => state.query);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const imagesRow = useSelector((state) => state.imagesPerPage);
  const filterlist =
    query.trim().length &&
    imageList.filter((e) => e.title.toLowerCase().includes(query));
  const showImages = query.trim().length ? filterlist : imageList;
  React.useEffect(() => {
    dispatch({
      type: "Fetch_data",
      payload: { category: "animals", pages: imagesRow },
    });
  }, [dispatch, imagesRow]);
  return (
    <>
      <Category />

      <ImageList
        rows={Number(imagesRow)}
        cols={5}
        rowHeight={200}
        margin={"10px 5px"}
      >
        {showImages.map((item, index) =>
          !isLoading ? (
            <ImageListItem key={item.id}>
              <img
                src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                alt={item.title}
                height='122px'
                width='122px'
                loading='lazy'
              />
            </ImageListItem>
          ) : (
            <Skeleton
              key={index}
              sx={{ bgcolor: "grey" }}
              variant='rectangular'
              width={210}
              height={130}
              animation='wave'
            />
          )
        )}
      </ImageList>
    </>
  );
}

export default ShowImages;
