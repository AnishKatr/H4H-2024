# H4H-2024
# Welcome to Virus Vision

Our Inspiration and Objective:
Our inspiration for Virus Vision comes from the desire to leverage technology for disease surveillance and solutions. Virus Vision aims to offer a detailed and current overview of global health threats, with a current focus on Covid and Influenza. Our objective is to enhance disease awareness and treatment by showcasing disease spread and density relative to population, simplifying complex data for the public. This includes highlighting relevant news articles and guiding users to nearby hospitals and clinics related to the targeted disease.

How the Project was Built:
Using statistics from the UK’s public health organization, we parsed through positive test cases for COVID within each of England’s nine regions since the beginning of the new year. We then did the same for influenza. By weighting these numbers with population densities found within local governments in each of the nine regions, we were able to create a spatial bar-graph that covers the area of the United Kingdom using a deck.gl mapping project.

Challenges We've Faced:
One major challenge we encountered was the downtime of the Gov.UK, UK Health Security Agency data dashboard API, which hosts information on influenza, Respiratory Syncytial Virus, and other tested respiratory diseases. This issue restricted our ability and increased the difficulty regarding mapping the spread of various viruses within our project outside of Covid. However, this could be easily addressed and implemented once the technical problems with the API are resolved.

Another challenge was gathering APIs for news articles that pertained to influenza and covid in the UK, the NYT mainly consisted of US cases and the BBC did not have a public API for use. We ended up solving this issue through a different API, News.API, but time was lost prior to this discovery

On the front end, a difficulty was figuring out the distribution of England’s population density across both its’ cities and regions. England has 76 cities and 9 regions and the biggest difficulty was matching the data/density of these populations into these regions.

What we learned
Our team learned a lot of things through this experience. Our frontend team learned how to link data to each React component and how to render our mass amounts of data on our deck.gl map. Our backend team learned to cache API data and parse these mass JSON arrays to get the data we needed. Along with 2 first-time hackathon participants, our project was not only a great success, but also a massive learning opportunity from our first-time hackers to our most experienced members.

What's next for VirusVision
Due to the unfortunate circumstances of our APIs not working, most of our data is not live. We would like this to display real-world data that changes over time to get trend data as well. We would also like to add more diseases to our catalog, support more countries, get vaccinations rates, and display nearby medical facilities. We feel that with a little more time, this project could become a real-world product very quickly and easily!
