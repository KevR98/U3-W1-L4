import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

const CommentsList = (props) => {
  return (
    <ListGroup>
      {props.content.slice(0, 1).map((comment) => {
        return (
          <ListGroup.Item key={comment._id}>
            <SingleComment comment={comment} />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CommentsList;
