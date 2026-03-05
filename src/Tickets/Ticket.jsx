import { MdCircle } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

const Ticket = ({ ticket }) => {
    return (
        <div className="border border-slate-300 p-4 flex gap-y-2 flex-col rounded-lg">
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold">{ticket.title}</h3>
                <span className="flex items-center bg-green-300 text-green-700 rounded-full px-2 uppercase gap-1 text-sm">
                    <MdCircle />
                    {ticket.status}
                </span>
            </div>
            <p>{ticket.description}</p>
            <div className="flex justify-between items-center flex-col lg:flex-row">
                <div className="flex gap-2">
                    <span className="italic">#TKT-{ticket.id}</span>
                    <span className="uppercase text-red-500 font-semibold">
                        {ticket.priority} Priority
                    </span>
                </div>
                <div className="flex gap-2">
                    <span className="font-semibold">{ticket.customer}</span>
                    <span className="flex items-center gap-1">
                        <FaCalendarAlt />
                        {ticket.createdAt}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
