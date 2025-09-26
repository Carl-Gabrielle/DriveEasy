import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { FaUserCheck, FaClock, FaClipboardList, FaCertificate, FaFileAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <OverviewCards
                            icon={<FaClipboardList className="text-indigo-600 text-2xl" />}
                            title="Pending Applications"
                            value="12"
                        />
                        <OverviewCards
                            icon={<FaClock className="text-teal-600 text-2xl" />}
                            title="Upcoming Schedules"
                            value="5"
                        />
                        <OverviewCards
                            icon={<FaUserCheck className="text-green-600 text-2xl" />}
                            title="Verified Students"
                            value="34"
                        />
                        <OverviewCards
                            icon={<FaCertificate className="text-yellow-500 text-2xl" />}
                            title="Certificates Issued"
                            value="22"
                        />
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">📊 System Overview</h2>
                        <p className="text-gray-700 text-base leading-relaxed mb-6">
                            Manage and monitor every aspect of your driving school seamlessly through this comprehensive dashboard.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SystemFeature
                                icon={<FaUsers className="text-blue-600" />}
                                title="Student Management"
                                description="Review applications, verify requirements, and manage student records with progress tracking."
                            />
                            <SystemFeature
                                icon={<FaCalendarAlt className="text-green-600" />}
                                title="Schedule Management"
                                description="Assign training and examination schedules with automated notifications."
                            />
                            <SystemFeature
                                icon={<FaFileAlt className="text-purple-600" />}
                                title="Course Approval"
                                description="Approve registrations for theoretical and practical courses efficiently."
                            />
                            <SystemFeature
                                icon={<FaCertificate className="text-orange-600" />}
                                title="Certification"
                                description="Track and issue certificates with complete history and verification."
                            />
                        </div>
                    </div>

                </div>
            </div>
        </AdminLayout >
    );
}
export function OverviewCards({ icon, title, value }) {
    return (
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center space-x-4">
                {icon}
                <div>
                    <p className="text-gray-600 text-sm">{title}</p>
                    <p className="text-xl font-semibold text-gray-900">{value}</p>
                </div>
            </div>
        </div>
    );
}
function SystemFeature({ icon, title, description }) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
            <div className="p-3 bg-gray-100 rounded-lg group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}