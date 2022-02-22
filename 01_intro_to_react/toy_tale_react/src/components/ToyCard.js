function ToyCard(props) {
  return (
    <div className="card">
      <h2>{props.toyName}</h2>
      <img
        src={props.imageUrl}
        className="toy-avatar"
        alt={props.toyName}
      />
      <p>{props.likes} likes</p>
      <button className="like-btn" id="1">like</button>
    </div>
  )
}

export default ToyCard;