from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles  # Import StaticFiles
import qrcode
import secrets
import os  # Import os module

app = FastAPI()

class URLItem(BaseModel):
    original_url: str

url_database = {}

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure 'static' directory exists
if not os.path.exists('static'):
    os.makedirs('static')

# Configure the 'static' directory to serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")

def generate_short_url():
    return secrets.token_urlsafe(6)

@app.post("/shorten/")
def shorten_url(url_item: URLItem):
    # Generate a short URL using secrets module
    short_url = generate_short_url()

    # Store the mapping between short URL and original URL in the database
    url_database[short_url] = url_item.original_url

    # Return the short URL in the response
    return {"short_url": short_url}

@app.get("/{short_url}")
def redirect_to_original(short_url: str):
    # Retrieve the original URL from the database
    original_url = url_database.get(short_url)

    # If the original URL exists, redirect to it
    if original_url:
        return RedirectResponse(url=original_url)
    else:
        # If the short URL is not found in the database, return an error response
        raise HTTPException(status_code=404, detail="URL not found")

@app.get("/generate_qr_code")
def generate_qr_code():
    website_link = 'http://localhost:8000/shorten/'
    qr = qrcode.QRCode(version=1, box_size=5, border=5)
    qr.add_data(website_link)
    qr.make()
    img = qr.make_image(fill_color='black', back_color='white')
    
    # Specify the path relative to the directory of 'main.py'
    img_path = os.path.join('static', 'shortener_qr.png')
    img.save(img_path)
    return {"image_url": f"/{img_path}"}
