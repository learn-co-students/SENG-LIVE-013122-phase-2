## Passing Props
```jsx
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

<ToyCard
  key={toy.id}
  toyName={toy.name}
  imageUrl={toy.image}
  likes={toy.likes}
/>
```

## Alternatively we can spread out an object to send props

```jsx
function ToyCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img
        src={props.image}
        className="toy-avatar"
        alt={props.name}
      />
      <p>{props.likes} likes</p>
      <button className="like-btn" id="1">like</button>
    </div>
  )
}
{/* Below the {...toy} gives us props matching the key names in toy with corresponding values */}
<ToyCard
  key={toy.id}
  {...toy}
/>
```

## Destructuring props in parameters list to make I/O clear

```jsx
function ToyCard({name, image, likes}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        className="toy-avatar"
        alt={name}
      />
      <p>{likes} likes</p>
      <button className="like-btn" id="1">like</button>
    </div>
  )
}

<ToyCard
  key={toy.id}
  {...toy}
/>
```