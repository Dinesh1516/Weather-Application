
Weather-Application
A lightweight, server-rendered web application that fetches and displays current, daily, and weekly weather forecasts using the OpenWeather API.

# Weather-Application

A lightweight, server-rendered web application that fetches and displays current, daily, and weekly weather forecasts using the OpenWeather API.

---

## Features

- **Current weather**: Shows current conditions—temperature, humidity, wind, and sky description.
- **Daily forecast**: Provides a day-by-day outlook for the upcoming days.
- **Weekly overview**: Offers a broader weekly forecast summary.
- Built with **Node.js**, **Express**, and **EJS** templates.
- Fetches data using the **OpenWeather API**.

---

## Technologies Used

- **Node.js** & **Express** – backend server and routing  
- **EJS** – server-side templating engine (HTML views)  
- **JavaScript** – logic for retrieving weather from OpenWeather API  
- **CSS** – styling front-end components  
- **OpenWeather API** – weather data provider

---

## Installation

```bash
# Clone the repo
git clone https://github.com/Dinesh1516/Weather-Application.git
cd Weather-Application

# Install dependencies
npm install

# Set your OpenWeather API key
# For example, in your shell:
export OPENWEATHER_API_KEY="YOUR_API_KEY"

# Or add it to an .env file if using dotenv
Usage
bash
Copy
Edit
# Start the server
npm start

# Visit in browser
http://localhost:3000
Enter a location to fetch current, daily, and weekly forecasts.

The app renders weather results using EJS templates.

Configuration
API Key: Sign up at OpenWeather to get a free API key.

Environment variable: Your app should reference process.env.OPENWEATHER_API_KEY.

Optionally customize views and styling in the views/ and public/ directories.

Project Structure (Example)
plaintext
Copy
Edit
Weather-Application/
├── public/           # static assets (CSS, images)
├── views/            # EJS template files
├── index.js          # main server logic
├── package.json      # project meta & dependencies
└── .gitignore
(Exact file structure should reflect what’s in the repo.)

Contributing
Contributions are welcome! To improve the project:

Fork the repository

Create a feature branch (git checkout -b my-feature)

Commit your changes (git commit -m "Add feature")

Push (git push origin my-feature)

Open a Pull Request

Please keep the code clean and include clear descriptions of your changes.

Acknowledgments
Weather data provided by OpenWeather API

Inspired by similar open-source weather projects on GitHub.


Ask ChatGPT
