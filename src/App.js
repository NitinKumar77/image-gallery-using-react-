import SearchFilter from "./Components/SearchFilter";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import ShowImages from "./Components/ShowImages";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <SearchFilter />
      <ShowImages />
      <Pagination />
    </>
  );
}

export default App;
