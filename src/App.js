import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>What's the weather?</h1>
			<form>
				<input type="search" placeholder="Type a city"></input>
				<input type="submit" value="search"></input>
			</form>
		</div>
	);
}

export default App;
