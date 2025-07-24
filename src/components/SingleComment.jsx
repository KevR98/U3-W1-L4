const SingleComment = ({ comment }) => {
  return (
    <>
      <strong>{comment.author}: </strong>
      {comment.comment}
    </>
  );
};

export default SingleComment;
