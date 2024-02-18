import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Options({ setDisease, cases, pop }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Diseases");
    const [popup, setPopup] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedOption(item);
        setDisease(item);
        console.log(item);
        setIsOpen(false);
    };
    const togglePopup = () => {
        setPopup(!popup);
    };
    return (
        <div>
            <div className="fixed right-0 mt-4 mr-4 w-1/5 h-screen bg-sky-950 text-center space-y-4 p-4 rounded-lg shadow-lg">
                <div className="text-sky-100 font-bold text-lg">Options</div>
                <div className="border border-black p-0.5 bg-black"></div>
                <div className="text-s">Cases: {cases}</div>
                <div className="text-s">Population: {pop}</div>
                <div
                    onClick={toggleDropdown}
                    className="dropdown text-sky-100 relative bg-sky-700 justify-center cursor-pointer"
                >
                    <ArrowDropDownIcon className="float-left" />
                    {selectedOption}

                    {isOpen && (
                        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div
                                onClick={() => handleItemClick("COVID-19")}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md"
                            >
                                All Diseases
                            </div>
                            <div
                                onClick={() => handleItemClick("COVID-19")}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md"
                            >
                                COVID-19
                            </div>
                            <div
                                onClick={() => handleItemClick("Influenza")}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md"
                            >
                                Influenza
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <div className="bg-sky-700 text-sky-100"> Info</div>
                    <div className="bg-sky-700 text-sky-100 overflow-auto h-96">
                        {selectedOption === "All Diseases" && (
                            <div className="text-s ">
                                <div>
                                    An infection is the invasion of tissues by
                                    pathogens, their multiplication, and the
                                    reaction of host tissues to the infectious
                                    agent and the toxins they produce. An
                                    infectious disease, also known as a
                                    transmissible disease or communicable
                                    disease, is an illness resulting from an
                                    infection.
                                </div>
                                <div>
                                    Infections can be caused by a wide range of
                                    pathogens, most prominently bacteria and
                                    viruses. Hosts can fight infections using
                                    their immune systems. Mammalian hosts react
                                    to infections with an innate response, often
                                    involving inflammation, followed by an
                                    adaptive response.
                                </div>
                                <div>
                                    Specific medications used to treat
                                    infections include antibiotics, antivirals,
                                    antifungals, antiprotozoals, and
                                    antihelminthics. Infectious diseases
                                    resulted in 9.2 million deaths in 2013 which
                                    is about 17% of all deaths. The branch of
                                    medicine that focuses on infections is
                                    referred to as infectious diseases.
                                </div>
                                <div>
                                    {" "}
                                    Source -{" "}
                                    <a href="https://en.wikipedia.org/wiki/Infection">
                                        Wikipedia
                                    </a>
                                </div>
                            </div>
                        )}
                        {selectedOption === "COVID-19" && (
                            <div className="text-s ">
                                <div>
                                    Coronavirus disease 2019 or COVID-19 is a
                                    contagious disease caused by the virus
                                    SARS-CoV-2. The first known case was
                                    identified in Wuhan, China, in December
                                    2019. The disease quickly spread worldwide,
                                    resulting in the COVID-19 pandemic.
                                </div>
                                <div>
                                    COVID‑19 transmits when infectious particles
                                    are breathed in or come into contact with
                                    the eyes, nose, or mouth. The risk is
                                    highest when people are in close proximity,
                                    but small airborne particles containing the
                                    virus can remain suspended in the air and
                                    travel over longer distances, particularly
                                    indoors. Transmission can also occur when
                                    people touch their eyes, nose or mouth after
                                    touching surfaces or objects that have been
                                    contaminated by the virus. People remain
                                    contagious for up to 20 days and can spread
                                    the virus even if they do not develop
                                    symptoms.
                                </div>
                                <div>
                                    Source -{" "}
                                    <a href="https://en.wikipedia.org/wiki/COVID-19">
                                        Wikipedia
                                    </a>
                                </div>
                            </div>
                        )}
                        {selectedOption === "Influenza" && (
                            <div className="text-s ">
                                <div>
                                    Influenza, commonly known as "the flu" or
                                    just "flu", is an infectious disease caused
                                    by influenza viruses. Symptoms range from
                                    mild to severe and often include fever,
                                    runny nose, sore throat, muscle pain,
                                    headache, coughing, and fatigue. These
                                    symptoms begin from one to four days after
                                    exposure to the virus which is typically two
                                    days and last for about 2–8 days. Diarrhea
                                    and vomiting can occur, particularly in
                                    children. Influenza may progress to
                                    pneumonia, which can be caused by the virus
                                    or by a subsequent bacterial infection.
                                    Other complications of infection include
                                    acute respiratory distress syndrome,
                                    meningitis, encephalitis, and worsening of
                                    pre-existing health problems such as asthma
                                    and cardiovascular disease.
                                </div>
                                <div>
                                    There are four types of influenza virus: A,
                                    B, C, and D. Aquatic birds are the primary
                                    source of Influenza A virus or IAV, which is
                                    also widespread in various mammals,
                                    including humans and pigs. Influenza B virus
                                    or IBV and Influenza C virus or ICV
                                    primarily infect humans, and Influenza D
                                    virus or IDV is found in cattle and pigs.
                                    IAV and IBV circulate in humans and cause
                                    seasonal epidemics, and ICV causes a mild
                                    infection, primarily in children. IDV can
                                    infect humans but is not known to cause
                                    illness. In humans, influenza viruses are
                                    primarily transmitted through respiratory
                                    droplets produced from coughing and
                                    sneezing. Transmission through aerosols and
                                    intermediate objects and surfaces
                                    contaminated by the virus also occur.
                                </div>
                                <div>
                                    Frequent hand washing and covering one's
                                    mouth and nose when coughing and sneezing
                                    reduce transmission. Annual vaccination can
                                    help to provide protection against
                                    influenza. Influenza viruses, particularly
                                    IAV, evolve quickly, so flu vaccines are
                                    updated regularly to match which influenza
                                    strains are in circulation. Vaccines provide
                                    protection against IAV subtypes H1N1 and
                                    H3N2 and one or two IBV subtypes. Influenza
                                    infection is diagnosed with laboratory
                                    methods such as antibody or antigen tests
                                    and a polymerase chain reaction or PCR to
                                    identify viral nucleic acid. The disease can
                                    be treated with supportive measures and, in
                                    severe cases, with antiviral drugs such as
                                    oseltamivir. In healthy individuals,
                                    influenza is typically self-limiting and
                                    rarely fatal, but it can be deadly in
                                    high-risk groups.
                                </div>
                                <div>
                                    Source -{" "}
                                    <a href="https://en.wikipedia.org/wiki/Influenza">
                                        Wikipedia
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div
                    className="bg-sky-700 text-sky-100 mb-4"
                    onClick={() => togglePopup()}
                >
                    Symptoms
                </div>
                {popup && (
                    <div className="absolute inset-x-0 -top-4 h-full bg-sky-400  overflow-auto">
                        <div>
                            <div className="bg-sky-700 relative top-0">
                                Symptoms
                            </div>
                            {selectedOption === "All Diseases" && (
                                <div className="text-s text-left">
                                    This is where disease information for
                                    identifying symptoms will be located. If you
                                    have any serious concerns please contact
                                    local emergency services
                                </div>
                            )}
                            {selectedOption === "COVID-19" && (
                                <div className="text-s text-left">
                                    <b>COVID-19 symptoms can include:</b>
                                    <br />
                                    - a high temperature or shivering (chills)
                                    <br />
                                    – a high temperature means you feel hot to
                                    touch on your chest or back
                                    <br />
                                    - a new, continuous cough – this means
                                    coughing a lot for more than an hour, or 3
                                    or more coughing episodes in 24 hours
                                    <br />
                                    - a loss or change to your sense of smell or
                                    taste
                                    <br />
                                    - shortness of breath
                                    <br />
                                    - feeling tired or exhausted
                                    <br />
                                    - an aching body
                                    <br />
                                    - a headache
                                    <br />
                                    - a sore throat
                                    <br />
                                    - a blocked or runny nose
                                    <br />
                                    - loss of appetite
                                    <br />
                                    - diarrhoea
                                    <br />
                                    - feeling sick or being sick
                                    <br />
                                    The symptoms are very similar to symptoms of
                                    other illnesses, such as colds and flu.
                                    <br />
                                    Most people feel better within a few days or
                                    weeks of their first COVID-19 symptoms and
                                    make a full recovery within 12 weeks. For
                                    some people, it can be a more serious
                                    illness and their symptoms can last longer.
                                    <br />
                                    <b>
                                        What to do if you have symptoms of
                                        COVID-19
                                    </b>
                                    <br />
                                    You may be able to look after yourself at
                                    home if you have COVID-19 or symptoms of
                                    COVID-19.
                                    <br />
                                    Try to stay at home and avoid contact with
                                    other people if you or your child have
                                    symptoms and either: <br />
                                    - have a high temperature
                                    <br />
                                    - do not feel well enough to go to work,
                                    school, childcare, or do your normal
                                    activities
                                    <br />
                                    You can go back to your normal activities
                                    when you feel better or do not have a high
                                    temperature.
                                    <br />
                                    If your child has mild symptoms such as a
                                    runny nose, sore throat or mild cough, and
                                    they feel well enough, they can go to school
                                    or childcare.
                                    <br />
                                    <div>
                                        <a
                                            className="font-bold"
                                            href="https://www.nhs.uk/conditions/covid-19/covid-19-symptoms-and-what-to-do/"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            )}
                            {selectedOption === "Influenza" && (
                                <div className="text-s text-left">
                                    <div>
                                        Flu symptoms come on very quickly and
                                        can include:
                                        <br />
                                        -a sudden high temperature
                                        <br />
                                        -an aching body
                                        <br />
                                        -feeling tired or exhausted
                                        <br />
                                        -a dry cough
                                        <br />
                                        -a sore throat
                                        <br />
                                        -a headache
                                        <br />
                                        -difficulty sleeping
                                        <br />
                                        -loss of appetite
                                        <br />
                                        -diarrhoea or tummy pain
                                        <br />
                                        -feeling sick and being sick
                                        <br />
                                        The symptoms are similar for children,
                                        but they can also get pain in their ear
                                        and appear less active.
                                    </div>
                                    <div>
                                        Flu is very infectious and easily spread
                                        to other people. You're more likely to
                                        give it to others in the first 5 days.
                                        <br />
                                        Flu is spread by germs from coughs and
                                        sneezes, which can live on hands and
                                        surfaces for 24 hours.
                                        <br />
                                        To reduce the risk of spreading flu:
                                        <br />
                                        wash your hands often with warm water
                                        and soap
                                        <br />
                                        cover your mouth and nose with a tissue
                                        when you cough or sneeze. If you do not
                                        have a tissue, cough or sneeze into the
                                        bend of your elbow, not into your hand
                                        <br />
                                        bin used tissues as quickly as possible
                                        <br />
                                        Try to stay at home and avoid contact
                                        with other people if you have a high
                                        temperature or you do not feel well
                                        enough to do your normal activities.
                                    </div>
                                    <div>
                                        <a
                                            className="font-bold"
                                            href="https://www.nhs.uk/conditions/flu/"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            onClick={() => togglePopup()}
                            className="relative inset-x-0 bottom-0 bg-sky-700"
                        >
                            Close Popup
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Options;
