import "./App.css";

function App() {
	return (
		<div className="App">
			<div class="container">
				<div class="weather-app">
					<div class="row">
						<div class="col-sm-12 col-md-6">
							<form class="search-form" id="search-form">
								<div class="input-group">
									<input
										type="search"
										placeholder="Type a city..."
										class="form-control shadow-sm"
										id="city-input"
										autocomplete="off"
									/>
									<input
										type="submit"
										value="Search"
										class="btn shadow-sm search-button"
									/>
									<input
										type="button"
										value="📍"
										class="btn location-button"
										id="current-location-button"
									/>
								</div>
							</form>
						</div>
						<div class="col-sm-12 col-md-6">
							<div class="row">
								<div class="weather-today ">
									<p class="day-time" id="date">
										Monday 11:30
									</p>
									<img
										src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
										alt="cloudy weather icon"
										class="icon"
										id="icon"
									/>
									<p class="city-header" id="city">
										Sydney
									</p>

									<p class="weather-description" id="description">
										Cloudy
									</p>
									<p>
										{" "}
										<span class="main-temperature" id="temperature">
											?
										</span>{" "}
										<span class="degrees">
											{" "}
											<a
												href="https://en.wikipedia.org/wiki/Celsius"
												id="celsius-link"
												class="active"
											>
												°C
											</a>{" "}
											|{" "}
											<a
												href="https://en.wikipedia.org/wiki/Fahrenheit"
												id="fahrenheit-link"
											>
												°F
											</a>{" "}
										</span>
									</p>
									<p class="temperature-low-high">
										Low <span id="low">13</span>°C - High{" "}
										<span id="high">18</span>°C
									</p>
									<p>
										Humidity <span id="humidity">13</span>% - Wind{" "}
										<span id="wind">18</span> m/s
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="weather-forecast" id="forecast">
						<div class="row">
							<div class="col-2">
								<div class="weather-forecast-date"></div>
								<img
									class="load-image"
									src="https://cdn-icons-png.flaticon.com/512/7746/7746162.png"
									alt="a person holding an umbrella"
								/>
								<div class="weather-forecast-tmperatures">
									<span class="weather-forecast-temperature-min"></span>
									<span class="weather-forecast-temperature-max"></span>
								</div>
							</div>
						</div>
					</div>

					<small class="credits">
						<a
							href="https://github.com/KC-Morrison/weather-react"
							target="_blank"
							rel="noreferrer"
						>
							Open-source code
						</a>{" "}
						by Katie Morrison
					</small>
				</div>
			</div>
		</div>
	);
}

export default App;
