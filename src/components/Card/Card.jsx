function Card({ children, border, pos }) {
  return (
    <section
      className={
        `border-t-4 shadow-xl p-6 rounded-md grid grid-cols-2 ` +
        border +
        " " +
        pos
      }
    >
      {children}
    </section>
  );
}

export default Card;
