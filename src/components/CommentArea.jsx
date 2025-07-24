import { Component } from 'react';
import CommentsList from './CommentsList';

const API = 'https://striveschool-api.herokuapp.com/api/comments/';
const AUT =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYmFjMjc4Y2RkZjAwMTU1ZDY3OWMiLCJpYXQiOjE3NTMzNjI3MTcsImV4cCI6MTc1NDU3MjMxN30.TWFIhNeSwuWFGHVNi7AsXWkQO99rgl7F8ezLc8He8W8';

class CommentArea extends Component {
  state = {
    comment: [],
  };

  getReviews = () => {
    fetch(API + this.props.id, {
      headers: {
        Authorization: AUT,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('ERRORE NELLA CHIAMATA');
        }
      })

      .then((reviews) => {
        // console.log(reviews); visualizzo l'array
        this.setState({ comment: reviews });
      })

      .catch((err) => {
        console.log('ERRORE NELLA CHIAMATA', err);
      });
  };

  componentDidMount() {
    this.getReviews();
  }

  render() {
    return <CommentsList content={this.state.comment} />;
  }
}

export default CommentArea;
