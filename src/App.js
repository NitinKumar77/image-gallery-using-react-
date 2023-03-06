import SearchFilter from "./Components/SearchFilter";
import Header from "./Components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ShowImages from "./Components/ShowImages";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "Fetch_data",
      payload: { category: "mountains", pages: "40" },
    });
  }, [dispatch]);

  return (
    <>
      <Header />
      <SearchFilter />
      <ShowImages />
    </>
  );
}

export default App;
