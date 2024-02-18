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

with open("EastMidlandsFlu.json") as mid:
    data = json.load(mid) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            eastOfMidlands += float(item["metric_value"])

with open("EastofEnglandFlu.json") as eastEng:
    data = json.load(eastEng) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            eastOfEngland += float(item["metric_value"])

with open("LondonFlu.json") as ln:
    data = json.load(ln) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            london += float(item["metric_value"])


with open("NorthEastFlu.json") as NE:
    data = json.load(NE) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            northEast += float(item["metric_value"])


with open("NorthWestFlu.json") as NW:
    data = json.load(NW) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            northWest += float(item["metric_value"])

with open("SouthEastFlu.json") as SE:
    data = json.load(SE) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            southEast += float(item["metric_value"])

with open("SouthWestFlu.json") as SW:
    data = json.load(SW) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            southWest += float(item["metric_value"])

with open("WestMidlandsFlu.json") as WM:
    data = json.load(WM) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            westMidlands += float(item["metric_value"])

with open("YorkshireHumberFlu.json") as YH:
    data = json.load(YH) 
    print(data)
    

    for item in data:
        if (item["year"] == 2024):
            yorkshireHumber += float(item["metric_value"])


NEdict = {
    "region": "NorthEast",
    "count": northEast * 26.57
}

jsonObject = json.dumps(NEdict, indent = 4)

print("\n eastMidland Region: ",eastOfMidlands * 48)
print("\n eastEngland Region: ",eastOfEngland * 62.35)
print("\n London Region: ",london * 89.1)
print("\n northEast Region: ",northEast * 26.57)
print("\n northWest Region: ",northWest * 73)
print("\n southEast Region: ",southEast * 91.75)
print("\n southWest Region: ",southWest * 56.16)
print("\n westMidlands Region: ",westMidlands * 29.28)
print("\n yorkshireHumber Region: ",yorkshireHumber * 54.86)
print(jsonObject)
