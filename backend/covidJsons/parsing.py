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
    "region": "NorthEast",
    "count": northEast
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
