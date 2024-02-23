import json
from dotenv import load_dotenv
import os

from newsapi import NewsApiClient

load_dotenv()

NEWS_API_KEY = os.getenv("NEWS_API_KEY")
newsApi = NewsApiClient(api_key=NEWS_API_KEY)

top_headlines = newsApi.get_everything(q="covid", sources="bbc-news", language="en")
flu_headlines = newsApi.get_everything(q="flu", sources="bbc-news", language="en")

flu_output = json.dumps(flu_headlines, indent=4)
print(flu_output)

json_ouput = json.dumps(top_headlines, indent=4)
print(json_ouput)

output_file_path = "newsDump.json"
with open(output_file_path, "w") as output_file:
    output_file.write(json_ouput)
    output_file.write(flu_output)
