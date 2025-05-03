function Card({ onLike }) {
  return (
    <div className="card card-dark m-auto">
      <div className="card-header fs-xl">
        <small>Like this Dog</small>
      </div>
      <img
        src="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-99573-1490908.jpg&fm=jpg"
        alt="Dog Image"
        style={{ height: "fit-content", width: "100%" }}
        onDoubleClick={onLike}
      />
      <div
        className="card-footer fs-xl d-flex"
        style={{ justifyContent: "space-between" }}
      >
        <span className="pointer">Details</span>
        <span className="pointer" onClick={onLike}>
          ❤️
        </span>
      </div>
    </div>
  );
}

export default Card;
