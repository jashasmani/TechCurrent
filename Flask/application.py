from flask import Flask, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

application = Flask(__name__)
CORS(application)  # This will enable CORS for all routes

def scrape_data():
    url = "https://www.businesstoday.in/technology/"
    HEADERS = ({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0',
        'Accept-Language': 'en-US,en;q=0.5'
    })
    
    response = requests.get(url, headers=HEADERS)
    soup = BeautifulSoup(response.content, 'html.parser')

    widgets = soup.find_all('div', class_='widget-listing-content-section')
    articles = []
    
    for widget in widgets:
        title_tag = widget.find('a', title=True)
        title = title_tag['title']
        link = title_tag['href']
    
        description_tag = widget.find('p')
        description = description_tag.text if description_tag else ''
    
        image_tag = widget.find('img')
        image_src = image_tag['src'] if image_tag else ''
        
        articles.append({
            "title": title,
            "link": link,
            "description": description,
            "image": image_src
        })
    
    return articles

@application.route("/data", methods=["GET"])
def get_data():
    try:
        data = scrape_data()
        return jsonify(data), 200
    except Exception as e:
        print(f"Error reading data: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == "__main__":
    application.run(host="0.0.0.0", port=5000, debug=True)
