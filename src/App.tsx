import "./App.css";
import useGetCat from "./useGetCat";

function App() {
  const { url, isLoading, getCat } = useGetCat();

  return (
    <div className="container">
      {isLoading ? <p>Loading...</p> : <img src={url} alt="cat" />}
      <button onClick={getCat}>Get Cat</button>
    </div>
  );
}

export default App;
