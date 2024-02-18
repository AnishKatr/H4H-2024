import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Options() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Diseases");
    const [popup, setPopup] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedOption(item);
        setIsOpen(false);
    };
    const togglePopup = () => {
        setPopup(!popup);
    };
    return (
        <div>
            <div className="fixed top-24 right-0 mt-4 mr-4 w-1/5 h-full bg-sky-950 text-center space-y-4 p-4 rounded-lg shadow-lg">
                <div className="text-sky-100">Options</div>
                <div
                    onClick={toggleDropdown}
                    className="dropdown text-sky-100 relative bg-sky-700 justify-center cursor-pointer"
                >
                    <ArrowDropDownIcon className="float-left" />
                    {selectedOption}

                    {isOpen && (
                        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div
                                onClick={() => handleItemClick("All Diseases")}
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
                    <div className="h-64 bg-sky-700 text-sky-100 overflow-auto ">
                        {selectedOption === "All Diseases" && (
                            <div className="text-xs ">
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
                            <div className="text-xs ">
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
                            <div className="text-xs ">
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
            </div>
            <div className="absolute inset-0">{popup && <div>Popup</div>}</div>
        </div>
    );
}
export default Options;
