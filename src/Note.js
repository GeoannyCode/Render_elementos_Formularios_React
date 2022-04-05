export const Note = ({ title, body, id }) => {
  return (
    <>
      <h2>{id}</h2>
      <h3>{title}</h3>
      <h3>Card {id}</h3>
      <p>{body}</p>
      <a href="#">Read more</a>
    </>
  );
};
