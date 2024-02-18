function About() {
    
    return (
        <div className=" flex flex-col justify-center items-center">
            <h1 className=" font-bold">About VirusVision</h1>
            <p className="text-center p-2">
                VirusVision is a tool for visualizing and analyzing data from the
                Allen Brain Observatory. It was developed by the Allen Institute
                for Brain Science to help researchers explore the large-scale
                functional imaging datasets that are being collected by the
                Institute.
            </p>
            <h2 className=" font-bold">How to use VirusVision</h2>
            <p className="text-center p-3">
            VirusVision is an interactive 3-Dimensional Map that uses Deck-Gl and displays a map of the UK and 
                displays statistics for COVID-19 and the Flu. As you view different areas,  
            </p>
            <h3 className=" font-bold">About Our Mission</h3>
            <p className="text-center p-4">
                Our Team, composed of 6 members, Grant, Johnathan, Jake Esperson, Anish Katragadda, Ian Kennar, and Austin Nguyen, 
                set out on the mission to improve the public's ability to perceive statistcis regarding vital diseases. After several
                team meetings, we decided on this interface due to it being aesthetically pleasing to the eye, as well as very easy to 
                digest from an unfamiliar perspective on the subject
            </p>
        </div>
    );
}

export default About;
