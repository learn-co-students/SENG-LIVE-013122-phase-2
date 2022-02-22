/* 
- Activity #1: Convert HTML to JSX
    - What needs to change? What's the same?
    - Using comments, begin to map out JSX elements into into separate components
- Activity #2: Implement a ToyCard Component
    - Start by hard-coding the JSX in your App component return statement
    - Use props to make your component reusable
    - Copy/paste data from the "toys.js" file as props and iterate over Toy objects
      to create a ToyCard component for each one
    - BONUS: 
      - Import and store data from the "toys.js" file
      - Create a "components" subdirectory + "ToyCard.js" file
*/
import ToyCard from './components/ToyCard';
import toys from './toys';


function App() {
  return (
    <div>
      {/* Header could be a component */}
      <header className="App-header">
        <div id="toy-header">
          <img
            src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
            alt="toy-header"
          />
        </div>

        {/* Form could be a component */}
        <div className="container">
          <form className="add-toy-form">
            <h3>Create a toy!</h3>

            {/* Could be a component */}
            <input
              type="text"
              name="name"
              defaultValue=""
              placeholder="Enter a toy's name..."
              className="input-text"
            />
            <br />
            <input
              type="text"
              name="image"
              defaultValue=""
              placeholder="Enter a toy's image URL..."
              className="input-text"
            />
            <br />
            <input
              type="submit"
              name="submit"
              value="Create Toy"
              className="submit"
            />
          </form>
        </div>
        <p style={{"textAlign":"center"}}>
          Andy needs your help! <button id="new-toy-btn">Add a new toy!</button>
        </p>
      </header>
      {/* ToyList could be component */}
      
      <div id="toy-collection">
        {
          toys.map(toy => {
            return (
              <ToyCard
                key={toy.id}
                toyName={toy.name}
                imageUrl={toy.image}
                likes={toy.likes}
              />
            )
          })
        }
      
        {/* ToyCards */}
      </div>
    </div>
  );
}

export default App;