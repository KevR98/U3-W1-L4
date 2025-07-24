import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

const API = 'https://striveschool-api.herokuapp.com/api/comments/';
const AUT =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYmFjMjc4Y2RkZjAwMTU1ZDY3OWMiLCJpYXQiOjE3NTMzNjI3MTcsImV4cCI6MTc1NDU3MjMxN30.TWFIhNeSwuWFGHVNi7AsXWkQO99rgl7F8ezLc8He8W8';

class CommentArea extends Component {
  state = {
    comment: [],
  };

  getReviews = () => {
    fetch(API, {
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
        console.log(reviews);
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
    return (
      <ListGroup>
        {this.state.comment.slice(0, 1).map((comments) => {
          return (
            <ListGroup.Item key={comments._id}>
              {comments.comment}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentArea;
