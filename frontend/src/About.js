import Banner from "./Banner";

function About() {
    return (
        <div>
            <Banner title="About" />
            <div className="flex justify-center items-center">
                <div className=" flex flex-col justify-center items-center w-3/4 slide-up">
                    <h1 className="mt-11 text-xl font-bold">
                        About VirusVision
                    </h1>
                    <p className="text-center p-2 slide-up">
                        VirusVision is a tool for visualizing and analyzing
                        data. It was developed by our team of six students at
                        Santa Clara University for the 2024 Hack For Humanity
                        Hackathon. Our goal is to provide a user-friendly
                        interface for people to learn about various viruses and
                        their impact on the world. We hope to provide a platform
                        for people to learn about the spread of viruses and how
                        it affects different countries.
                    </p>
                    <h2 className="mt-11 text-xl font-bold">
                        How to use VirusVision
                    </h2>
                    <p className="text-center p-3 slide-up">
                        VirusVision is an interactive 3-Dimensional Map that
                        uses Deck-Gl and displays statistics for COVID-19 and
                        the Flu. When you hover over one of the cities, its
                        name, latitude and longitude will pop up along under
                        your cursor with its population, number of known cases
                        for each virus and total population are shown on the
                        side under the Options on the right side of the screen.
                        Right under there is a Dropbox to select the virus you
                        are interested in, important information about said
                        virus, and a pop up labeled "Symptoms" to verify whether
                        or not you may have it. Under the header, are a few
                        options that you can edit the focus of the map. The
                        height of the Hexagon Bars can be adjusted by choosing
                        "Population," or "Total Disease Numbers" under the
                        "Choose Height Metric." Similarly, you can change the
                        Heatmap Settings to show the severity of each illness
                        under the "Choose Heatmap Metric," with the options
                        "Total Disease Number" or "Population Effected." There
                        is also a drag-bar beside those two dropdown boxes to
                        adjust the radius of each of the hexagon bars.
                    </p>
                    <p className="text-center p-4 slide-up">
                        Besides the "About" option that was clicked to get to
                        this page, lie the "News" and "Live Map" buttons. The
                        News button will navigate you to our constantly updating
                        news bulletin with reliable and relevant articles
                        popping up on the page. The Live Map button will bring
                        you back to the page with the 3-D Interactive Map and
                        the information provided.
                    </p>
                    <h3 className="mt-11 text-xl font-bold">
                        About Our Mission
                    </h3>
                    <p className="text-center p-5 slide-up">
                        Our Team, composed of 6 members, Jake Esperson, Grant
                        Goldman, Anish Katragadda, Ian Kennar, Jonathan Kimyai,
                        and Austin Nguyen, set out on the mission to improve the
                        general person's ability to become more knowledgable
                        regarding these viruses. After several team meetings, we
                        decided on this interface due to it allowing us to
                        format the information in a way that is easy to
                        interpret, and compact with the inclusion of the right
                        side of the page with the map.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
