import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { FaUserCheck, FaClock, FaClipboardList, FaCertificate } from 'react-icons/fa';
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

        setGreeting(`${timeGreeting}, Admin. Happy ${day}!`);
    }, []);

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />
            <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">{greeting}</h1>

                    {/* Overview Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
                            <div className="flex items-center space-x-4">
                                <FaClipboardList className="text-indigo-600 text-2xl" />
                                <div>
                                    <p className="text-gray-600 text-sm">Pending Applications</p>
                                    <p className="text-xl font-semibold text-gray-900">12</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
                            <div className="flex items-center space-x-4">
                                <FaClock className="text-teal-600 text-2xl" />
                                <div>
                                    <p className="text-gray-600 text-sm">Upcoming Schedules</p>
                                    <p className="text-xl font-semibold text-gray-900">5</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
                            <div className="flex items-center space-x-4">
                                <FaUserCheck className="text-green-600 text-2xl" />
                                <div>
                                    <p className="text-gray-600 text-sm">Verified Students</p>
                                    <p className="text-xl font-semibold text-gray-900">34</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
                            <div className="flex items-center space-x-4">
                                <FaCertificate className="text-yellow-500 text-2xl" />
                                <div>
                                    <p className="text-gray-600 text-sm">Certificates Issued</p>
                                    <p className="text-xl font-semibold text-gray-900">22</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">📊 System Overview</h2>
                        <p className="text-gray-700 text-base leading-relaxed mb-6">
                            Manage and monitor every aspect of your driving school seamlessly through this comprehensive dashboard.
                        </p>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 mt-1">✔</span>
                                <span>Review and verify student driver applications and submitted requirements.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 mt-1">✔</span>
                                <span>Approve registrations for both theoretical and practical courses.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 mt-1">✔</span>
                                <span>Assign training and examination schedules, with automated student notifications.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 mt-1">✔</span>
                                <span>Evaluate students based on handling, focus, and behavior criteria.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 mt-1">✔</span>
                                <span>Submit instructor feedback and generate e-certificates for successful students.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 mt-1">✔</span>
                                <span>Upload LTO reviewers in PDF format and link helpful YouTube driving tutorials.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 mt-1">✔</span>
                                <span>Provide targeted learning interventions for students who do not pass.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}
