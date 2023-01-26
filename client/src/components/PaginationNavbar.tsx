import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import { setParams } from '../features/productsSlice';
import { AppDispatch } from '../store';
import ProductsState from '../interfaces/ProductsState';

export default function PaginationNavbar() {
  const dispatch = useDispatch<AppDispatch>();

  const { totalCount, limit, page } = useSelector(
    (state: { productsReducer: ProductsState }) => state.productsReducer
  );
  const numOfPages = Math.ceil(totalCount / limit);

  const pageNumbers = [...Array(Math.ceil(totalCount / limit))].map(
    (val, index) => index + 1
  );

  const getCurrentItems = (): number => {
    if (totalCount) {
      return page == numOfPages ? totalCount : page * limit;
    }
    return 0;
  };

  // If we want the page number to appear we return it, otherwise it returns undefined.
  const getPageNumberIfShouldAppear = (pageNumber: number) => {
    if (pageNumber <= 3) {
      return pageNumber;
    } else if (pageNumber >= page - 1 && pageNumber <= page + 1) {
      return pageNumber;
    }
    if (pageNumber == numOfPages) {
      return numOfPages;
    } else if (pageNumber > numOfPages - 3 && pageNumber <= numOfPages) {
      return pageNumber;
    }
  };

  const paginationItems = () => {
    let minusExists = false;
    const pages = pageNumbers
      .map(pageNumber => getPageNumberIfShouldAppear(pageNumber))
      .map((pageNumber, index, arr) => {
        if (pageNumber == null) {
          if (arr[index + 1] != null) {
            if (minusExists) {
              return -2;
            } else {
              minusExists = true;
              return -1;
            }
          } else return null;
        } else {
          return pageNumber;
        }
      });

    return pages.map((pageNumber, index) => {
      return pageNumber ? (
        <PaginationItem
          key={pageNumber}
          className={pageNumber == page ? 'active' : ''}
        >
          {pageNumber == -1 || pageNumber == -2 ? (
            <PaginationLink
              onClick={_e => {
                if (page > index) {
                  dispatch(setParams({ key: 'page', value: page - 1 }));
                } else {
                  dispatch(setParams({ key: 'page', value: page + 1 }));
                }
              }}
            >
              ...
            </PaginationLink>
          ) : (
            <PaginationLink
              onClick={_e => {
                dispatch(setParams({ key: 'page', value: pageNumber || 1 }));
              }}
            >
              {pageNumber}
            </PaginationLink>
          )}
        </PaginationItem>
      ) : null;
    });
  };

  return (
    <Container>
      <div className="pagination-section d-flex justify-content-between align-items-center">
        <div>
          <p className=" text-dark">
            Showing
            {` ${getCurrentItems()} of ${totalCount} entities`}
          </p>
        </div>
        <Pagination
          aria-label="Page navigation example"
          className="d-flex justify-content-end"
        >
          <PaginationItem>
            <PaginationLink
              first
              onClick={_e => {
                dispatch(setParams({ key: 'page', value: 1 }));
              }}
            />
          </PaginationItem>
          {paginationItems()}
          <PaginationItem>
            <PaginationLink
              last
              onClick={_e => {
                dispatch(setParams({ key: 'page', value: numOfPages }));
              }}
            />
          </PaginationItem>
        </Pagination>
      </div>
    </Container>
  );
}
