import json
new_data = []
case = 0
with open("C:\\Users\\ianke\\OneDrive\\Documents\\GitHub\\H4H-2024\\backend\\NorthEast.json") as f:
    data = json.load(f) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            case += float(item["metric_value"])


dictionary = {
    "region": "NorthEast",
    "count": case
}

jsonObject = json.dumps(dictionary, indent = 4)

print("\n North East Region: ",case)
print(jsonObject)
