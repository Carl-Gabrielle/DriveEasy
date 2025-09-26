import {
    HiOutlineCalendarDays,
    HiOutlineClock,
    HiOutlineUser,
    HiOutlineMapPin,
} from "react-icons/hi2";
import { formatTime } from "@/lib/dateFormatter";

export default function ScheduleCard({ item, formatDate, status, isActive }) {
    return (
        <div
            className={`relative rounded-xl border-2 p-5 transition-all duration-300 hover:shadow-md 
        ${isActive ? "border-green-500 bg-green-50 animate-pulse" : "border-gray-100 bg-white"} 
        ${status === "completed" ? "opacity-60" : ""}`}
        >
            {isActive && (
                <div className="absolute -top-2 -right-2">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                        TODAY
                    </span>
                </div>
            )}

            <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div
                    className={`flex items-center justify-center w-20 h-20 rounded-xl shrink-0 
            ${item.course_registration?.course_type === "Theoretical"
                            ? "bg-blue-100 border-2 border-blue-200"
                            : "bg-orange-100 border-2 border-orange-200"
                        }`}
                >
                    <div className="text-center">
                        <HiOutlineCalendarDays
                            className={`h-8 w-8 mx-auto ${item.course_registration?.course_type === "Theoretical"
                                    ? "text-blue-600"
                                    : "text-orange-600"
                                }`}
                        />
                        <span
                            className={`text-xs font-bold mt-1 block ${item.course_registration?.course_type === "Theoretical"
                                    ? "text-blue-600"
                                    : "text-orange-600"
                                }`}
                        >
                            {item.course_registration?.course_type === "Theoretical"
                                ? "Theory"
                                : "Practical"}
                        </span>
                    </div>
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3">
                        <h3
                            className={`text-lg font-bold ${item.course_registration?.course_type === "Theoretical"
                                    ? "text-blue-700"
                                    : "text-orange-700"
                                }`}
                        >
                            {item.course_registration?.course_type === "Theoretical"
                                ? "Theoretical Course Session"
                                : "Practical Driving Session"}
                        </h3>
                        {status === "upcoming-today" && (
                            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                                Starting soon
                            </span>
                        )}
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <InfoRow icon={<HiOutlineCalendarDays />} label="Date" value={formatDate(item.date)} />
                        <InfoRow icon={<HiOutlineClock />} label="Time" value={formatTime(item.created_at)} />
                        <InfoRow icon={<HiOutlineUser />} label="Instructor" value={item.instructor?.name || "To be assigned"} />
                        <InfoRow icon={<HiOutlineMapPin />} label="Location" value={item.location} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoRow({ icon, label, value }) {
    return (
        <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-lg">{icon}</div>
            <div>
                <p className="text-xs text-gray-500">{label}</p>
                <p className="text-sm font-medium text-gray-900">{value}</p>
            </div>
        </div>
    );
}
