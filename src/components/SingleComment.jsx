const SingleComment = (props) => {
  return (
    <>
      <strong>{props.comment.author}: </strong>
      {props.comment.comment}
    </>
  );
};

export default SingleComment;
