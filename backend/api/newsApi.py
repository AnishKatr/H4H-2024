import json

from newsapi import NewsApiClient

newsApi = NewsApiClient(api_key='d40825b3538f413ea7b096c651d1c8e6')

top_headlines = newsApi.get_everything(q='covid', sources='bbc-news', language='en')

json_ouput = json.dumps(top_headlines, indent=4)
print(json_ouput)

output_file_path = "newsDump.json"
with open(output_file_path, "w") as output_file:
     output_file.write(json_ouput)

