import json
new_data = []

eastOfMidlands = 0
eastOfEngland = 0
london = 0
northEast = 0
northWest = 0
southEast = 0
southWest = 0
westMidlands = 0
yorkshireHumber = 0

with open("eastMidlands.json") as mid:
    data = json.load(mid) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            eastOfMidlands += float(item["metric_value"])

with open("eastOfEngland.json") as eastEng:
    data = json.load(eastEng) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            eastOfEngland += float(item["metric_value"])

with open("London.json") as ln:
    data = json.load(ln) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            london += float(item["metric_value"])


with open("NorthEast.json") as NE:
    data = json.load(NE) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            northEast += float(item["metric_value"])


with open("northWest.json") as NW:
    data = json.load(NW) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            northWest += float(item["metric_value"])

with open("southEast.json") as SE:
    data = json.load(SE) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            southEast += float(item["metric_value"])

with open("southWest.json") as SW:
    data = json.load(SW) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            southWest += float(item["metric_value"])

with open("westMidlands.json") as WM:
    data = json.load(WM) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            westMidlands += float(item["metric_value"])

with open("yorkshireHumber.json") as YH:
    data = json.load(YH) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            yorkshireHumber += float(item["metric_value"])


NEdict = {
    "region": "eastMidland",
    "count": eastOfMidlands

}

jsonObject = json.dumps(NEdict, indent = 4)

print("\n eastMidland Region: ",eastOfMidlands)
print("\n eastEngland Region: ",eastOfEngland)
print("\n London Region: ",london)
print("\n northEast Region: ",northEast)
print("\n northWest Region: ",northWest)
print("\n southEast Region: ",southEast)
print("\n southWest Region: ",southWest)
print("\n westMidlands Region: ",westMidlands)
print("\n yorkshireHumber Region: ",yorkshireHumber)
print(jsonObject)

import json

region_counts = {
    "eastMidland": 0,
    "eastEngland": 0,
    "London": 0,
    "northEast": 0,
    "northWest": 0,
    "southEast": 0,
    "southWest": 0,
    "westMidlands": 0,
    "yorkshireHumber": 0
}

file_paths = [
    "eastMidlands.json",
    "eastOfEngland.json",
    "London.json",
    "NorthEast.json",
    "northWest.json",
    "southEast.json",
    "southWest.json",
    "westMidlands.json",
    "yorkshireHumber.json"
]


for file_paths, region in zip(file_paths, region_counts.keys()):
    with open(file_paths) as f:
        data = json.load(f)
        for item in data:
            if item["year"] == 2024:
                region_counts[region] += float(item["metric_value"])

result = [{"region": region, "count": count} for region, count in region_counts.items()]

json_output = json.dumps(result, indent=4)

print(json_output)

