import React from "react";
import { connect } from "react-redux";

import { updateCurrentPage } from "../../../state/actions/pagesActions";

import "./Pagination.css";

const Pagination = ({ currentPage, changePage, pages }) => {
  const createPageCount = () => {
    let pageCount = [];
    let limit = currentPage < 3 ? 5 : currentPage + 2;
    let i = currentPage > 3 ? currentPage - 2 : 1;
    for (i; i <= limit && i <= pages; i++) {
      pageCount.push(i);
    }
    return pageCount;
  };

  const pageCount = createPageCount();
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination mt-3 justify-content-center">
        <li
          className="page-item"
          onClick={() => changePage(currentPage - 1 <= 1 ? 1 : currentPage - 1)}
        >
          <span
            className="page-link border border-dark bg-dark text-white"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </span>
        </li>
        {pageCount.map(page => (
          <li key={page} className="page-item" onClick={() => changePage(page)}>
            <span
              className={`page-link border ${
                currentPage === page
                  ? "bg-success text-white border-success"
                  : "text-dark border-light"
              }`}
            >
              {page}
            </span>
          </li>
        ))}
        <li
          className="page-item"
          onClick={() =>
            changePage(currentPage + 1 > pages ? pages : currentPage + 1)
          }
        >
          <span
            className="page-link border border-dark bg-dark text-white"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </span>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ pagesReducer }) => {
  return {
    pages: pagesReducer.pages,
    currentPage: pagesReducer.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: newPage => {
      dispatch(updateCurrentPage(newPage));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
