import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { FaCar, FaCalendarCheck, FaExclamationCircle } from "react-icons/fa";
import DashboardHero from "@/Components/sections/DashboardHero";
import StatusCard from "@/Components/cards/StatusCard";
import UpcomingSchedule from "@/Components/sections/UpcomingSchedule";
import { formatDate } from "@/lib/dateFormatter";

export default function Dashboard() {
    const { auth, schedule = [], application = null } = usePage().props;
    const user = auth.user;

    const getSessionStatus = (sessionDate) => {
        const now = new Date();
        const sessionTime = new Date(sessionDate);
        const timeDiff = sessionTime - now;
        const hoursDiff = timeDiff / (1000 * 60 * 60);

        if (hoursDiff < 24 && hoursDiff > 0) return "upcoming-today";
        if (hoursDiff <= 0) return "completed";
        return "upcoming";
    };
    // console.log("Schedule data:", schedule);

    return (
        <AuthenticatedLayout>
            <Head title="Student Dashboard" />
            <div className="min-h-screen  py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
                    <DashboardHero user={user} />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatusCard
                            title="Application Status"
                            value={application ? application.status.charAt(0).toUpperCase() + application.status.slice(1) : "Not Submitted"}
                            icon={<FaExclamationCircle className="w-6 h-6 text-blue-500" />}
                            borderColor="border-blue-500"
                            bgColor="bg-blue-50"
                            textColor="text-blue-600"
                            hoverBg="hover:bg-blue-100"
                            link={route("student.applications")}
                            linkLabel="Go to Application"
                        />

                        <StatusCard
                            title="Next Session"
                            value={schedule.length > 0 ? formatDate(schedule[0].date) : "Not Scheduled"}
                            icon={<FaCalendarCheck className="w-6 h-6 text-green-500" />}
                            borderColor="border-green-500"
                            bgColor="bg-green-50"
                            textColor="text-green-600"
                            hoverBg="hover:bg-green-100"
                            link={route("student-schedule.index")}
                            linkLabel="View Schedule"
                        />

                        <StatusCard
                            title="Course Progress"
                            value="0%"
                            icon={<FaCar className="w-6 h-6 text-purple-500" />}
                            borderColor="border-purple-500"
                            bgColor="bg-purple-50"
                            textColor="text-purple-600"
                            hoverBg="hover:bg-purple-100"
                            progress={0}
                        />

                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <UpcomingSchedule
                        schedule={schedule}
                        formatDate={formatDate}
                        getSessionStatus={getSessionStatus}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
