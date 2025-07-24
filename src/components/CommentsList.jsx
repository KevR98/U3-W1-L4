import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

const CommentsList = (props) => {
  return (
    <ListGroup>
      {/* content perchè l'ho passato a content che sta nel CommentArea */}
      {props.content.map((comment) => {
        return (
          <ListGroup.Item key={comment._id}>
            {/* Ho chiamato comment che lo uso in SingleComment = a comment (che si trova nell'array dell API) */}
            <SingleComment comment={comment} />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CommentsList;
