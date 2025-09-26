import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { formatTime } from '@/lib/dateFormatter';
import ScheduleCard from '@/Components/cards/ScheduleCard';

export default function Schedule() {
    const { schedule } = usePage().props;

    const formatDate = (dateString) => {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    return (
        <AuthenticatedLayout>
            <Head title="Schedule" />
            <div className="py-8 md:py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-xl">
                        <div className="p-6 sm:p-8">
                            <div className="flex flex-col md:flex-row md:items-center mb-8">
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Driving Schedule</h1>
                                    <p className="text-gray-500 mt-2">Your upcoming driving lessons</p>
                                </div>
                            </div>
                            {schedule.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="mx-auto h-24 w-24 text-gray-300 mb-4">
                                        <HiOutlineCalendarDays className="w-full h-full opacity-50" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">No sessions scheduled</h3>
                                    <p className="mt-2 text-gray-500 max-w-md mx-auto">
                                        You don't have any driving lessons scheduled yet.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {schedule.map((item) => (
                                        <ScheduleCard
                                            key={item.id}
                                            item={item}
                                            formatDate={formatDate}
                                            status={item.status}
                                            isActive={item.isActive}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
