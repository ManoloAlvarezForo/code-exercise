import React, { useState, useEffect, useCallback } from "react";
import { Pagination } from "react-bootstrap";
import { ParamsTypes } from "../../hooks/useNewsSearch";
import styles from './NewsPagination.module.css';

export interface NewsPaginationProps {
  totalCount: number;
  pageSize: number;
  updateParams: (params: ParamsTypes) => void;
  pageNumber: number;
}

const NewsPagination: React.FC<NewsPaginationProps> = ({
  totalCount,
  pageSize,
  updateParams,
  pageNumber
}) => {
  const defaultCountOfPages = 10;
  const [active, setActive] = useState(pageNumber);
  const [lastPage, setLastPage] = useState(defaultCountOfPages);
  const [firstPage, setFirstPage] = useState(1);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (totalCount) {
      setSize(Math.trunc(totalCount / 16));
    }
    if (pageNumber) {
      setActive(pageNumber);
    }
  }, [pageNumber, pageSize, totalCount]);

  const handlingClickPagination = useCallback(
    (page: number, index: number) => {
      if (page > defaultCountOfPages / 2) {
        if (lastPage !== size) {
          setLastPage(page + defaultCountOfPages / 2 - 1);
          setFirstPage(page - defaultCountOfPages / 2);
        } else {
          setLastPage(size);
          setFirstPage(size - defaultCountOfPages);
        }
        
      } else {
        setFirstPage(1);
        setLastPage(defaultCountOfPages);
      }

      updateParams({ pageNumber: page });
      setActive(page);
    },
    [lastPage, size, updateParams]
  );

  const pagesRender = useCallback(() => {
    let pagesTemp: any = [];
    const START = firstPage;
    const END = lastPage + 1;
    pagesTemp = Array.from({ length: END - START }, (_, index) => {
      return (
        <Pagination.Item
          key={START + index}
          active={START + index === active}
          onClick={() => handlingClickPagination(START + index, index)}
        >
          {START + index}
        </Pagination.Item>
      );
    });

    return pagesTemp;
  }, [active, firstPage, handlingClickPagination, lastPage]);

  const onClickFirstHandled = () => {
    setFirstPage(1);
    setLastPage(defaultCountOfPages);
    updateParams({ pageNumber: 1 });
    setActive(1);
  };

  const onClickLastHandled = () => {
    setFirstPage(size - (defaultCountOfPages - 1));
    setLastPage(size);
    updateParams({ pageNumber: size });
    setActive(size);
  };

  return (
    <div
      className={styles.mainContainer}
    >
      <Pagination data-testid="news-pagination">
        {lastPage > defaultCountOfPages && (
          <Pagination.First onClick={onClickFirstHandled} />
        )}
        {pagesRender()}
        {
          lastPage !== size && <Pagination.Last onClick={onClickLastHandled} />
        }
      </Pagination>
    </div>
  );
};

export default NewsPagination;
