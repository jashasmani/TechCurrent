# [TechCurrent](https://tech-current.vercel.app/)

## Overview
TechCurrent is a web application that scrapes news articles from [businesstoday](https://www.businesstoday.in/) using Flask for the backend and displays them using React for the frontend. It provides users with up-to-date news summaries and allows them to filter news based on categories or sources.

## Features
- **Web Scraping**: Automatically fetches news articles from  [businesstoday](https://www.businesstoday.in/).
- **Backend**: Uses Flask to handle web scraping logic and serve API endpoints.
- **Frontend**: Displays news data in a user-friendly interface using React.
- **Filtering**: Allows users to filter news by categories (e.g., technology, business) or sources.
- **Responsive Design**: Ensures seamless viewing experience across devices.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Flask
- **Web Scraping**: BeautifulSoup, requests
- **API**: Flask RESTful
- **Deployment**: Deployable on platforms like Heroku or AWS for live usage.

## Getting Started
To run this project locally:
1. Clone the repository.
2. Navigate to the frontend directory and install dependencies: `cd frontend && npm install`
3. Start the frontend server: `npm start`
4. Open another terminal, navigate to the backend directory: `cd ../backend`
5. Install backend dependencies: `pip install -r requirements.txt`
6. Run the Flask server: `python app.py`

## Project Structure
- `frontend/`: React.js frontend code.
- `backend/`: Flask backend code for web scraping and API.
- `data/`: Stores scraped news data.
- `requirements.txt`: Lists backend dependencies.

## Contributions
Contributions are welcome! Please follow our [Contributing Guidelines](CONTRIBUTING.md).

## Authors
- [jashasmani](https://github.com/jashasmani)
