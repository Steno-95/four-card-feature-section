function CardIcon({ svg }) {
  return (
    <img
      src={`/images/icon-${svg}.svg`}
      className="row-start-2 col-start-2 place-self-end size-15 md:mb-3"
      alt={`${svg} icon`}
    />
  );
}

export default CardIcon;
