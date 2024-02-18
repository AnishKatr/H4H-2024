import json
from math import radians, sin, cos, sqrt, atan2


def calculate_distance(lat1, lon1, lat2, lon2):
    # Convert latitudes and longitudes from degrees to radians
    lat1_rad, lon1_rad = radians(lat1), radians(lon1)
    lat2_rad, lon2_rad = radians(lat2), radians(lon2)

    # Calculate the difference between latitudes and longitudes
    dlat = lat2_rad - lat1_rad
    dlon = lon2_rad - lon1_rad

    # Use the Haversine formula to calculate the distance
    a = sin(dlat / 2) ** 2 + cos(lat1_rad) * cos(lat2_rad) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    distance = 6371 * c  # Radius of the Earth in kilometers

    return distance


def distribute_counts(output_data, population_data):
    for output_obj in output_data:
        output_lat = output_obj["lat"]
        output_lon = output_obj["lon"]
        output_count = int(output_obj["count"])

        for population_obj in population_data:
            population_lat = population_obj["lat"]
            population_lon = population_obj["lon"]

            # Calculate the distance between the output and population objects
            distance = calculate_distance(
                output_lat, output_lon, population_lat, population_lon
            )

            # Calculate the weight based on the inverse of the distance
            weight = 1 / distance if distance != 0 else 1

            # Distribute the count based on the weight
            population_obj["covid_count"] += output_count * weight

    return population_data


# Read the data from output.json
with open("output.json", "r") as output_file:
    output_data = json.load(output_file)

# Read the data from Population.json
with open("Population.json", "r") as population_file:
    population_data = json.load(population_file)

# Distribute the counts
updated_population_data = distribute_counts(output_data, population_data)

# Save the updated data back to Population.json
with open("test.json", "w") as population_file:
    json.dump(updated_population_data, population_file)
