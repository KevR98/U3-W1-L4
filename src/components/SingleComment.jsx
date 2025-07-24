const SingleComment = (props) => {
  return (
    <>
      {/* il codice vuol dire che passo il props di comment(dichiarato in CommentsList).author */}
      <strong>{props.comment.author}: </strong>
      {props.comment.comment}
    </>
  );
};

export default SingleComment;
