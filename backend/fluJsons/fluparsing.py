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
latitudes = [53.209, 52.003185, 51.4319, 54.9333, 53.6210466667, 51.451019, 50.7773866667, 52.4751, 53.9591]
longitudes = [-0.440666667, 0.003212, -0.0936, -1.9467, -2.5945, -0.993490, -3.9995, -1.8298, -1.0792]

percentageFactor = 58.823529411

eastOfMidlands = round(eastOfMidlands * 48 * percentageFactor, 0)
eastOfEngland = round(eastOfEngland * 62.35 * percentageFactor, 0)
london = round(london * 89.1 * percentageFactor, 0)
northEast = round(northEast * 26.57 * percentageFactor, 0)
northWest = round(northWest * 73 * percentageFactor,0)
southEast = round(southEast * 91.75 * percentageFactor, 0)
southWest = round(southWest * 56.16 * percentageFactor, 0)
westMidlands = round(westMidlands * 29.28 * percentageFactor, 0)
yorkshireHumber = round(yorkshireHumber * 54.86 * percentageFactor, 0)



regions_data = []

# Define a function to add region data to the regions_data list
def add_region_data(region_name, count, latitude, longitude):
    region_data = {
        "region": region_name,
        "count": count,
        "latitude": latitude,
        "longitude": longitude
    }
    regions_data.append(region_data)

add_region_data("EastMidlands", eastOfMidlands, 52.8833, -1.9741)
add_region_data("EastofEngland", eastOfEngland, 52.2405, 0.9027)
add_region_data("London", london, 51.5074, -0.1278)
add_region_data("NorthEast", northEast, 54.9783, -1.6174)
add_region_data("NorthWest", northWest, 53.4084, -2.9916)
add_region_data("SouthEast", southEast, 51.5074, 0.1278)
add_region_data("SouthWest", southWest, 51.4545, -2.5879)
add_region_data("WestMidlands", westMidlands, 52.4862, -1.8904)
add_region_data("YorkshireHumber", yorkshireHumber, 53.9591, -1.0815)

json_data = json.dumps(regions_data, indent=4)

with open("flu_data.json", "w") as json_file:
    json_file.write(json_data)

print("Data has been written to flu_data.json file.")