import { Link } from "@inertiajs/react";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import ScheduleCard from "@/Components/cards/ScheduleCard";

export default function UpcomingSchedule({ schedule, formatDate, getSessionStatus }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                            <HiOutlineCalendarDays className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Upcoming Schedule</h2>
                            <p className="text-sm text-gray-600">Your upcoming driving sessions</p>
                        </div>
                    </div>
                    <Link
                        href={route("student-schedule.index")}
                        className="text-blue-600 font-medium hover:text-blue-700 transition flex items-center space-x-1"
                    >
                        <span>View All</span>
                        <span>→</span>
                    </Link>
                </div>
            </div>

            <div className="p-6">
                {schedule.length === 0 ? (
                    <div className="text-center py-12">
                        <HiOutlineCalendarDays className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 text-lg font-medium">No sessions scheduled yet</p>
                        <p className="text-gray-400 text-sm mt-1">Your instructor will schedule sessions soon</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {schedule.map((item) => {
                            const status = getSessionStatus(item.date);
                            const isActive = status === "upcoming-today";
                            return (
                                <ScheduleCard
                                    key={item.id}
                                    item={item}
                                    formatDate={formatDate}
                                    status={status}
                                    isActive={isActive}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
