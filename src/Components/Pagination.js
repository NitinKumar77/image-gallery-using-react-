import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { useDispatch, useSelector } from "react-redux";
import { setImagesPerPage } from "../Redux/Imageslice";

export default function TablePaginationGallery() {
  const dipatch = useDispatch();
  const [page, setPage] = React.useState(2);
  const imageRows = useSelector((state) => state.imagesPerPage);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  console.log("imageRows:", imageRows);
  const dispatch = useDispatch();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    dispatch();
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    dispatch(setImagesPerPage(parseInt(event.target.value, 10)));
    setPage(0);
  };

  return (
    <TablePagination
      component='div'
      count={2000}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
