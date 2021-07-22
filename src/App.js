import React from "react";
import SearchBar from "./SearchBar";
// import Spinner from "./Spinner";
import Weather from "./Weather";
class App extends React.Component {
	state = {
		weather: {},
		error: "",
		location: {},
		status: 0,
	};

	onSubmitFrom = async (term) => {
		const access_key = "ddf92ff7db01fcfef12ad9790a3b6d08";
		const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${term}`;
		try {
			const weather = await fetch(url);
			const data = await weather.json();
			this.setState({ weather: data.current, location: data.location ,status:weather.status});
		} catch (e) {
			this.setState({ error: e });
		}
	};
	renderContent = () => {
		const { error, weather, location, status } = this.state;
		if (!error && weather) {
			if (status === 200) {
				return <Weather weather={this.state.weather} location={location} />;
			}
		}
		if (error && !weather) {
			return <h3>{error}</h3>;
		}
		if (location === {} && weather === {}) {
			// return <h3>{error}</h3>;
			console.log(this.state);
		}

		// return "enter the country";
	};
	render() {
		console.log(this.state);
		return (
			<div>
				<SearchBar onsubmit={this.onSubmitFrom} />

				{this.renderContent()}
			</div>
		);
	}
}
export default App;
