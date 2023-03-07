import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Button } from "@mui/material";
function ShowImages() {
  const imageList = useSelector((state) => state.imageList);
  const dispatch = useDispatch();
  const imagesRow = useSelector((state) => state.imagesPerPage);

  React.useEffect(() => {
    dispatch({
      type: "Fetch_data",
      payload: { category: "animals", pages: "100" },
    });
  }, [dispatch]);
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() =>
            dispatch({
              type: "Fetch_data",
              payload: { category: "mountains", pages: "40" },
            })
          }
          variant='contained'
          sx={{ margin: "0 10px", bgcolor: "darkBlue" }}
        >
          Mountains
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: "Fetch_data",
              payload: { category: "beaches", pages: "40" },
            })
          }
          variant='contained'
          sx={{ margin: "0 10px", bgcolor: "darkBlue" }}
        >
          Beaches
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: "Fetch_data",
              payload: { category: "birds", pages: "40" },
            })
          }
          variant='contained'
          sx={{ margin: "0 10px", bgcolor: "darkBlue" }}
        >
          Birds
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: "Fetch_data",
              payload: { category: "foods", pages: "40" },
            })
          }
          variant='contained'
          sx={{ margin: "0 10px", bgcolor: "darkBlue" }}
        >
          Foods
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: "Fetch_data",
              payload: { category: "cat", pages: "40" },
            })
          }
          variant='contained'
          sx={{ margin: "0 10px", bgcolor: "darkBlue" }}
        >
          Cat
        </Button>
      </Box>

      <ImageList rows={Number(imagesRow)} cols={5} rowHeight={200}>
        {imageList.map((item) => (
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
