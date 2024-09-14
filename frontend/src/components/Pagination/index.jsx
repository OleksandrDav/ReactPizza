import React from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({setCurrentPage}) => {
  //   const handlePageClick = (event) => {
  //     const newOffset = (event.selected * itemsPerPage) % items.length;
  //     console.log(
  //       `User requested page number ${event.selected}, which is offset ${newOffset}`
  //     );
  //     setItemOffset(newOffset);
  //   };

  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => setCurrentPage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
