import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IBook } from "../../models/IBook";
import React from 'react';
import Typography from '@mui/material/Typography';

interface PostItemProps {
  book: IBook;
}

class BookItem extends React.Component<PostItemProps> {
  render() {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {this.props.book.book_title}
          </Typography>
          <Typography variant="h5" component="div">
            {this.props.book.book_author}
          </Typography>
        </CardContent>
      </Card>
    );
  }
};

export default BookItem;