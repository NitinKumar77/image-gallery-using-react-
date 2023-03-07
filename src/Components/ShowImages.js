import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Category from "./Category";

function ShowImages() {
  const imageList = useSelector((state) => state.imageList);
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const imagesRow = useSelector((state) => state.imagesPerPage);
  const filterlist = query.trim().length
    ? imageList.filter((e) => e.title.toLowerCase().includes(query))
    : imageList;

  React.useEffect(() => {
    dispatch({
      type: "Fetch_data",
      payload: { category: "animals", pages: imagesRow },
    });
  }, [dispatch, imagesRow]);
  return (
    <>
      <Category />
      <ImageList rows={Number(imagesRow)} cols={5} rowHeight={200}>
        {filterlist.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
              alt={item.title}
              height='122px'
              width='122px'
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default ShowImages;
