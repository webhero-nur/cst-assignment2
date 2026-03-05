import { use } from "react";
import Ticket from "./Ticket";

const Tickets = ({ ticktesResponse }) => {
    const tickets = use(ticktesResponse);
    return (
        <div className="col-span-3">
            <h3 className="text-2xl font-semibold mb-4">
                Customer Tickets: {tickets.length}
            </h3>
            <div className="grid grid-cols-2 gap-2">
                {tickets.map((ticket) => (
                    <Ticket key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    );
};

export default Tickets;
