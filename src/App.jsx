import "./App.css";
import Navbar from "./Navbar/Navbar";
import InProgress from "./TicketCounter/InProgress";
import Resolved from "./TicketCounter/Resolved";

function App() {
    return (
        <>
            <Navbar></Navbar>

            <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto my-12">
                <InProgress></InProgress>
                <Resolved></Resolved>
            </div>
        </>
    );
}

export default App;
