import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { HiOutlineCalendarDays, HiOutlineClock, HiOutlineUser, HiOutlineMapPin } from 'react-icons/hi2';

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
                                        <div
                                            key={item.id}
                                            className="relative border border-gray-100 rounded-lg p-5 transition-all duration-200 hover:shadow-sm bg-gradient-to-r from-white to-gray-50"
                                        >
                                            <div className="flex flex-col md:flex-row gap-6">
                                                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-50 shrink-0">
                                                    <HiOutlineCalendarDays className="h-8 w-8 text-indigo-600" />
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                                        <h2 className="text-lg font-semibold text-gray-900">
                                                            {item.course_registration?.course_type === 'Theoretical'
                                                                ? 'Theoretical Course'
                                                                : 'Practical Driving Course'}
                                                        </h2>
                                                        {/* <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'completed'
                                                            ? 'bg-green-100 text-green-800'
                                                            : item.status === 'cancelled'
                                                                ? 'bg-red-100 text-red-800'
                                                                : 'bg-blue-100 text-blue-800'
                                                            }`}>
                                                            {item.status || 'scheduled'}
                                                        </span> */}
                                                    </div>

                                                    <p className="text-gray-500 mt-1 text-sm">{item.description}</p>

                                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                                        <div className="flex items-start gap-3">
                                                            <div className="p-2 bg-gray-100 rounded-lg">
                                                                <HiOutlineCalendarDays className="h-5 w-5 text-gray-600" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-500 font-medium">Date</p>
                                                                <p className="text-gray-900 font-medium">{formatDate(item.date)}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-3">
                                                            <div className="p-2 bg-gray-100 rounded-lg">
                                                                <HiOutlineClock className="h-5 w-5 text-gray-600" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-500 font-medium">Time</p>
                                                                <p className="text-gray-900 font-medium">
                                                                    {new Date(item.created_at).toLocaleTimeString('en-PH', {
                                                                        timeZone: 'Asia/Manila',
                                                                        hour: '2-digit',
                                                                        minute: '2-digit',
                                                                        hour12: true,
                                                                    })}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-3">
                                                            <div className="p-2 bg-gray-100 rounded-lg">
                                                                <HiOutlineUser className="h-5 w-5 text-gray-600" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-500 font-medium">Instructor</p>
                                                                <p className="text-gray-900 font-medium">{item.instructor?.name || 'To be assigned'}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-3">
                                                            <div className="p-2 bg-gray-100 rounded-lg">
                                                                <HiOutlineMapPin className="h-5 w-5 text-gray-600" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-gray-500 font-medium">Location</p>
                                                                <p className="text-gray-900 font-medium">{item.location}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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