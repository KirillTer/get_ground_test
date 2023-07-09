import { Grid, Input, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useNavigate, useParams } from "react-router-dom";

import BookItem from "./BookItem";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { fetchBooks } from '../../store/reducers/ActionCreators';

const BooksList = () => {
  let { pageNum } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(Number(pageNum));
  const [searchQuery, setSearchQuery] = useState('');
  const { count } = useAppSelector(state => state.bookReducer);
  const { books, isLoading, error } = useAppSelector(state => state.bookReducer);

  useEffect(() => {
    dispatch(fetchBooks({page: page, filter: searchQuery}));
  }, [dispatch, page, searchQuery]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    navigate(`/books/${value}`)
  };

  const handleSearchChange = (value: string) => {
    setPage(1);
    setSearchQuery(value);
    navigate('/books/1');
  };

  return (
    <div data-testid="books-page">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Stack spacing={1}>
            <Typography>Page: {page}</Typography>
            <Pagination count={Math.ceil(count/20)} page={page} onChange={handlePageChange} />
            <Input style={{ width: 350 }} value={searchQuery} onChange={e => handleSearchChange(e.target.value)} placeholder='Search'/>
          </Stack>
        </Grid>
      </Grid>

      {error && <h1>{error}</h1>}
      {isLoading ? <Skeleton animation="wave" /> :
      books &&
        books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
          />
        ))
      }
    </div>
  );
};

export default BooksList;