import MicroscopeMap from "./Map";
import Banner from "./Banner";

function Main() {
    return (
        <div className="flex flex-col h-screen">
            <Banner title="VirusVision" />
            <div className="flex-grow relative">
                <MicroscopeMap />
            </div>
        </div>
    );
}

export default Main;
