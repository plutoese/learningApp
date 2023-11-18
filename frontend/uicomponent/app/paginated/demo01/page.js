"use client";

import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import "./styles.css";

const data = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function App() {
  const [page, setPage] = useState(0);
  const [pageOffset, setPageOffset] = useState(0);
  const [filterData, setFilterData] = useState();
  const [remountComponent, setRemountComponent] = useState(0);
  const n = 3;

  const handleSubmit = () => {
    setPage(0);
    setRemountComponent(Math.random());
  };

  useEffect(() => {
    setFilterData(
      data.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [page]);

  return (
    <div className="App" key={remountComponent}>
      <ul>
        {filterData && filterData.map((item, index) => <li>Item #{item}</li>)}
      </ul>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        onPageChange={(event) => setPage(event.selected)}
        breakLabel="..."
        pageCount={Math.ceil(data.length / n)}
        previousLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillLeftCircle />
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillRightCircle />
          </IconContext.Provider>
        }
        forcePage={pageOffset}
      />
      <button
        className="bg-lime-600 text-white py-2 px-3"
        onClick={handleSubmit}
      >
        Click
      </button>
    </div>
  );
}
