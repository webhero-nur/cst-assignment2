import { Suspense } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import InProgress from "./TicketCounter/InProgress";
import Resolved from "./TicketCounter/Resolved";
import Tickets from "./Tickets/Tickets";
const ticktesResponse = fetch(
    "https://webhero-nur.github.io/cst-assignment2/data.json",
).then((res) => res.json());

function App() {
    return (
        <>
            <Navbar></Navbar>

            <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto my-12">
                <InProgress></InProgress>
                <Resolved></Resolved>
            </div>

            <div className="grid grid-cols-4 max-w-7xl mx-auto my-12">
                <Suspense
                    fallback={
                        <h3 className="text-3xl font-semibold text-center">
                            Loading...
                        </h3>
                    }
                >
                    <Tickets ticktesResponse={ticktesResponse}></Tickets>
                </Suspense>
            </div>
        </>
    );
}

export default App;
