import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

# MongoDB connection setup
client = MongoClient('mongodb+srv://jashasmani:jashasmani@cluster0.mf0pimy.mongodb.net/')  
db = client['scraped_data_db']  
collection = db['articles']  

url = "https://www.businesstoday.in/tech-today/explainers"
HEADERS = ({'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0', 'Accept-Language': 'en-US,en;q=0.5'})

webpage = requests.get(url, headers=HEADERS)
soup = BeautifulSoup(webpage.content, "html.parser")

widgets = soup.find_all('div', class_='widget-listing')

collection.delete_many({})

for widget in widgets:
    title_tag = widget.find('a', title=True)
    title = title_tag['title']
    link = title_tag['href']
    
    description_tag = widget.find('p')
    description = description_tag.text if description_tag else ''
    
    image_tag = widget.find('img')
    image_src = image_tag['src'] if image_tag else ''
    
    # Document to insert into MongoDB
    article = {
        'title': title,
        'link': link,
        'description': description,
        'image': image_src
    }
    
    # Insert the document into MongoDB
    collection.insert_one(article)
