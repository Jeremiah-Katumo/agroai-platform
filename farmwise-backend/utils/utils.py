import json
from pathlib import Path

# Offline fallback
# Get the directory of the current file
base_path = Path(__file__).resolve().parent
faq_file = base_path / 'json/offline_faq.json'

# Load the JSON
offline_faq = json.loads(faq_file.read_text())
category_prompts = {
    "crop": "You are an agricultural advisor.",
    "weather": "You are a weather forecaster.",
    "pest": "You are a plant health expert.",
    "market": "You are a farm market analyst.",
    "season": "You are a horticulture expert."
}