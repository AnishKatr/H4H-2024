import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();

    return (
        
        <div className=" flex flex-col justify-center items-center">
            <h1 className="mt-11 text-xl font-bold">About VirusVision</h1>
            <p className="text-center p-2">
                VirusVision is a tool for visualizing and analyzing data from the
                Allen Brain Observatory. It was developed by the Allen Institute
                for Brain Science to help researchers explore the large-scale
                functional imaging datasets that are being collected by the
                Institute.
            </p>
            <h2 className="mt-11 text-xl font-bold">How to use VirusVision</h2>
            <p className="text-center p-3">
            VirusVision is an interactive 3-Dimensional Map that uses Deck-Gl and displays a map of the UK and 
                displays statistics for COVID-19 and the Flu. When you hover over one of the cities, its name, latitude and longitude
                 will pop up along under your cursor with its population, number of people affected by each virus respectively shown on the 
                 side under the Options on the right side of the screen. Right under there is a Dropbox to select the virus you are interested in, 
                 important information about said virus, and a pop up labeled "Symptoms" to verify whether or not you may have it.
                Under the header, are a few options that you can edit the focus of the map. The height of the Hexagon Bars can be adjusted by choosing 
                "Population," or "Total Disease Numbers" under the "Choose Height Metric." Similarly, you can change the Heatmap Settings to show the 
                severity of each illness under the "Choose Heatmap Metric," with the options "Total Disease Number" or "Population Effected."
                There is also a drag-bar beside those two dropdown boxes to adjust the radius of each of the hexagon bars.
            </p>
            <h3 className="mt-11 text-xl font-bold">About Our Mission</h3>
            <p className="text-center p-4">
                Our Team, composed of 6 members, Jake Esperson, Grant Goldman, Anish Katragadda, Ian Kennar, Jonathan Kimyai, and Austin Nguyen, 
                set out on the mission to improve the general person's ability to become more knowledgable regarding these viruses. After several
                team meetings, we decided on this interface due to it allowing us to format the information in a way that is easy to interpret, 
                and compact with the inclusion of the right side of the page with the map.
            </p>
            <button
                className=" border-2 border-black p-2 m-2 rounded-lg bg-sky-500 hover:bg-sky-700 text-sky-100 font-bold py-2 px-4"
                onClick={() => navigate("/")}
            >
                Home Page
            </button>
        </div>
    );
}

export default About;
