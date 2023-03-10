import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Category() {
  const imagesRow = useSelector((state) => state.imagesPerPage);
  const dispatch = useDispatch();
  const pageNo = useSelector((state) => state.page);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={() =>
          dispatch({
            type: "Fetch_data",
            payload: {
              category: "mountains",
              pages: imagesRow,
              pageNo: pageNo,
            },
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
            payload: { category: "beaches", pages: imagesRow, pageNo: pageNo },
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
            payload: { category: "birds", pages: imagesRow, pageNo: pageNo },
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
            payload: { category: "foods", pages: imagesRow, pageNo: pageNo },
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
            payload: { category: "cat", pages: imagesRow, pageNo: pageNo },
          })
        }
        variant='contained'
        sx={{ margin: "0 10px", bgcolor: "darkBlue" }}
      >
        Cat
      </Button>
    </Box>
  );
}

export default Category;
