import React from "react";
import { useSelector } from "react-redux";

function ShowImages() {
  const imageList = useSelector((state) => state);
  console.log(imageList);
  return <div>ShowImages</div>;
}

export default ShowImages;
