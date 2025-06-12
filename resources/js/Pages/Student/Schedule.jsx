import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { HiOutlineCalendarDays, HiOutlineClock, HiOutlineUser, HiOutlineMapPin } from 'react-icons/hi2';


export default function Schedule() {
    const scheduleItems = [
        {
            id: 1,
            course: 'Theoretical Driving Course',
            date: '2025-11-29',
            time: '10:00 AM - 12:00 PM',
            status: 'confirmed',
            instructor: 'John Doe',
            location: 'Room 101, Main Campus',
            description: 'Learn traffic rules, road signs, and safe driving principles.'
        },
        {
            id: 2,
            course: 'Practical Driving Session',
            date: '2025-12-03',
            time: '2:00 PM - 4:00 PM',
            status: 'pending',
            instructor: 'Jane Smith',
            location: 'Driving Range, West Campus',
            description: 'Hands-on driving practice with certified instructor.'
        },
    ];

    const formatDate = (dateString) => {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Schedule" />
            <div className="py-12 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl rounded-2xl">
                        <div className="p-8">
                            <div className=" items-start mb-8">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900">Your Driving Schedule</h1>
                                    <p className="text-gray-500 mt-2">
                                        View and manage your upcoming driving lessons
                                    </p>
                                </div>

                            </div>

                            {scheduleItems.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="mx-auto h-24 w-24 text-gray-300 mb-4">
                                        <HiOutlineCalendarDays className="w-full h-full" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">No scheduled classes</h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        You don't have any scheduled classes yet. Request a new session to get started.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {scheduleItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`relative border rounded-xl p-6 transition-all duration-200 hover:shadow-md
                                                ${item.status === 'confirmed'
                                                    ? 'border-green-200 bg-white'
                                                    : 'border-orange-200 bg-white'
                                                }
                                            `}
                                        >
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3">
                                                        <h2 className="text-xl font-semibold text-gray-900">{item.course}</h2>
                                                        <span
                                                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium
                                                                ${item.status === 'confirmed'
                                                                    ? 'bg-green-100 text-green-800'
                                                                    : 'bg-orange-100 text-orange-800'
                                                                }
                                                            `}
                                                        >
                                                            {item.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                                                        </span>
                                                    </div>

                                                    <p className="text-gray-500 mt-1 text-sm">{item.description}</p>

                                                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                                        <div className="flex items-start gap-2">
                                                            <HiOutlineCalendarDays className="h-5 w-5 text-gray-400 mt-0.5" />
                                                            <div>
                                                                <p className="text-xs text-gray-500">Date</p>
                                                                <p className="text-gray-900">{formatDate(item.date)}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-2">
                                                            <HiOutlineClock className="h-5 w-5 text-gray-400 mt-0.5" />
                                                            <div>
                                                                <p className="text-xs text-gray-500">Time</p>
                                                                <p className="text-gray-900">{item.time}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-2">
                                                            <HiOutlineUser className="h-5 w-5 text-gray-400 mt-0.5" />
                                                            <div>
                                                                <p className="text-xs text-gray-500">Instructor</p>
                                                                <p className="text-gray-900">{item.instructor}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start gap-2">
                                                            <HiOutlineMapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                                                            <div>
                                                                <p className="text-xs text-gray-500">Location</p>
                                                                <p className="text-gray-900">{item.location}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-end  mt-4 sm:mt-0">
                                                    <button className="px-3 py-1.5 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                                        Reschedule
                                                    </button>
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