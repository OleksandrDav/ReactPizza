import React from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";
import { setPageCount } from "../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => {
          console.log(e); // Add this line to check the event
          dispatch(setPageCount(e.selected + 1));
        }}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
