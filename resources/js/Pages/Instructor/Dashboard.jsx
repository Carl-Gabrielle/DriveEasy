import InstructorLayout from '@/Layouts/InstructorLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { FaChalkboardTeacher, FaCalendarAlt, FaCheckCircle, FaFileAlt } from 'react-icons/fa';

export default function Dashboard() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();
        const day = now.toLocaleDateString(undefined, { weekday: 'long' });

        let timeGreeting = 'Welcome';
        if (hours < 12) {
            timeGreeting = 'Good morning';
        } else if (hours < 18) {
            timeGreeting = 'Good afternoon';
        } else {
            timeGreeting = 'Good evening';
        }

        setGreeting(`${timeGreeting}, Instructor. Happy ${day}!`);
    }, []);

    return (
        <InstructorLayout>
            <Head title="Instructor Dashboard" />
            <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">{greeting}</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
                            <div className="flex items-center space-x-4">
                                <FaChalkboardTeacher className="text-indigo-600 text-2xl" />
                                <div>
                                    <p className="text-gray-600 text-sm">Ongoing Trainings</p>
                                    <p className="text-xl font-semibold text-gray-900">3</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
                            <div className="flex items-center space-x-4">
                                <FaCalendarAlt className="text-teal-600 text-2xl" />
                                <div>
                                    <p className="text-gray-600 text-sm">Upcoming Sessions</p>
                                    <p className="text-xl font-semibold text-gray-900">4</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
                            <div className="flex items-center space-x-4">
                                <FaCheckCircle className="text-green-600 text-2xl" />
                                <div>
                                    <p className="text-gray-600 text-sm">Evaluated Students</p>
                                    <p className="text-xl font-semibold text-gray-900">18</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
                            <div className="flex items-center space-x-4">
                                <FaFileAlt className="text-yellow-500 text-2xl" />
                                <div>
                                    <p className="text-gray-600 text-sm">Feedback Reports</p>
                                    <p className="text-xl font-semibold text-gray-900">10</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 Instructor Overview</h2>
                        <p className="text-gray-700 text-base leading-relaxed mb-6">
                            As an instructor, you have the tools to mentor students, schedule trainings, and ensure success through practical evaluation.
                        </p>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 mt-1">✔</span>
                                <span>Manage your scheduled training sessions and reschedule as needed.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 mt-1">✔</span>
                                <span>Mark attendance and monitor student participation.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 mt-1">✔</span>
                                <span>Evaluate students based on practical driving performance.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 mt-1">✔</span>
                                <span>Submit reports and feedback directly to the admin dashboard.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 mt-1">✔</span>
                                <span>Upload reference materials or useful driving resources for students.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </InstructorLayout>
    );
}
