import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Schedule() {
    const scheduleItems = [
        {
            id: 1,
            course: 'Theoretical',
            date: '2025-11-29',
            time: '10:00 AM - 12:00 PM',
            status: 'confirmed',
            instructor: 'John Doe',
            location: 'Room 101',
        },
        {
            id: 2,
            course: 'Practical',
            date: '2025-12-03',
            time: '2:00 PM - 4:00 PM',
            status: 'pending',
            instructor: 'Jane Smith',
            location: 'Driving Range',
        },
    ];

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Schedule" />
            <div className="py-12 bg-gray-50 min-h-screen">
                <div className="mx-auto max-w-3xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Driving School Schedule</h1>
                        <p className="text-gray-600 mb-8">
                            Your schedule is managed by the admin. You will be notified when your Training Sessions  are approved.
                        </p>

                        {scheduleItems.length === 0 ? (
                            <p className="text-center text-gray-500 text-lg">No scheduled classes yet. Please check back later.</p>
                        ) : (
                            <ul className="space-y-6">
                                {scheduleItems.map(({ id, course, date, time, status, instructor, location }) => (
                                    <li
                                        key={id}
                                        className={`relative flex flex-col gap-3 border rounded-lg p-5 cursor-default
                                            transition-colors
                                            ${status === 'confirmed'
                                                ? 'border-green-400 bg-green-50 hover:bg-green-100'
                                                : 'border-yellow-400 bg-yellow-50 hover:bg-yellow-100'
                                            }
                                        `}
                                    >
                                        <h2 className="text-xl font-semibold text-gray-900">{course} Course</h2>
                                        <p className="text-gray-700 text-sm leading-relaxed max-w-lg">
                                            <span className="font-semibold">Date:</span> {formatDate(date)} <br />
                                            <span className="font-semibold">Time:</span> {time} <br />
                                            <span className="font-semibold">Instructor:</span> {instructor} <br />
                                            <span className="font-semibold">Location:</span> {location}
                                        </p>
                                        <span
                                            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold
                                                ${status === 'confirmed'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                                }
                                            `}
                                        >
                                            {status === 'confirmed' ? 'Confirmed' : 'Pending Approval'}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
