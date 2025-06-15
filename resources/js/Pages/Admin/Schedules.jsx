import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import {
    HiOutlineCalendarDays,
    HiOutlineClock,
    HiOutlineUser,
    HiOutlineMapPin,
    HiOutlineBookOpen,
    HiOutlinePlusCircle,
    HiOutlineCheckCircle,
    HiOutlineXCircle
} from 'react-icons/hi2';

export default function Schedules({ instructors = [], registrations = [], schedules = [], success }) {
    const { data, setData, post, reset, processing, errors } = useForm({
        instructor_id: '',
        course_registration_id: '',
        date: '',
        time: '',
        location: '',
        description: '',
    });

    const [localSuccess, setLocalSuccess] = useState(success);

    useEffect(() => {
        if (success) {
            setLocalSuccess(success);

            const timer = setTimeout(() => {
                setLocalSuccess(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [success]);
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.schedules.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };


    return (
        <AdminLayout>
            <Head title="Schedules" />
            <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Training Schedules</h1>
                        <p className="mt-1 text-sm text-gray-500">Manage and assign training schedules for students</p>
                    </div>
                </div>
                {localSuccess && (
                    <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200 flex items-start gap-3">
                        <HiOutlineCheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="font-medium">Success!</p>
                            <p className="text-sm">{localSuccess}</p>
                        </div>
                    </div>
                )}

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-10">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800">Create New Schedule</h2>
                        <p className="text-sm text-gray-500 mt-1">Fill in the details to assign a new training session</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Instructor</label>
                                <select
                                    value={data.instructor_id}
                                    onChange={(e) => setData('instructor_id', e.target.value)}
                                    className="mt-1 cursor-pointer block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border text-sm"
                                >
                                    <option value="">Select Instructor</option>
                                    {instructors.map((instructor) => (
                                        <option key={instructor.id} value={instructor.id}>
                                            {instructor.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.instructor_id && <p className="text-red-500 text-xs mt-1">{errors.instructor_id}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Student</label>
                                <select
                                    value={data.course_registration_id}
                                    onChange={(e) => setData('course_registration_id', e.target.value)}
                                    className="mt-1 block cursor-pointer w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border text-sm"
                                >
                                    <option value="">Select Student</option>
                                    {registrations.map((reg) => {
                                        const alreadyScheduled = schedules.some(
                                            (schedule) => schedule.course_registration_id === reg.id
                                        );

                                        return (
                                            <option
                                                key={reg.id}
                                                value={reg.id}
                                                disabled={alreadyScheduled}
                                                className={alreadyScheduled ? 'text-gray-400' : ''}
                                            >
                                                {reg.student_application?.user?.name} - {reg.course_type}
                                                {alreadyScheduled ? ' (Already Scheduled)' : ''}
                                            </option>
                                        );
                                    })}
                                </select>
                                {errors.course_registration_id && <p className="text-red-500 text-xs mt-1">{errors.course_registration_id}</p>}
                            </div>


                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Date</label>
                                <input
                                    type="date"
                                    value={data.date}
                                    onChange={(e) => setData('date', e.target.value)}
                                    className="mt-1 cursor-pointer block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border text-sm"
                                />
                                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Time</label>
                                <input
                                    type="time"
                                    value={data.time}
                                    onChange={(e) => setData('time', e.target.value)}
                                    className="mt-1 cursor-pointer block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border text-sm"
                                />
                                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Location</label>
                                <input
                                    type="text"
                                    value={data.location}
                                    onChange={(e) => setData('location', e.target.value)}
                                    placeholder="Ex. Room 101, Main Building"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border text-sm"
                                />
                                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                            </div>

                            <div className="space-y-2 md:col-span-3">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    rows="3"
                                    placeholder="Training description, objectives, etc."
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border text-sm"
                                />
                                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                            </div>
                        </div>

                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
                            >
                                {processing ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    'Set Schedule'
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800">Existing Schedules</h2>
                        <p className="text-sm text-gray-500 mt-1">{schedules.length} scheduled training sessions</p>
                    </div>

                    {schedules.length === 0 ? (
                        <div className="p-8 text-center">
                            <HiOutlineXCircle className="mx-auto h-12 w-12 text-gray-400" />
                            <h3 className="mt-2 text-sm font-medium text-gray-900">No schedules</h3>
                            <p className="mt-1 text-sm text-gray-500">Get started by creating a new training schedule.</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-200">
                            {schedules.map((item, index) => (
                                <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-150">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-semibold text-gray-900 truncate">
                                                {item.course_registration?.student_application?.user?.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <div className="p-1.5 rounded-full bg-indigo-50 text-indigo-600">
                                                    <HiOutlineBookOpen className="h-4 w-4" />
                                                </div>
                                                <span className="font-medium text-gray-700">  {item.course_registration?.course_type}</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <div className="p-1.5 rounded-full bg-blue-50 text-blue-600">
                                                    <HiOutlineUser className="h-4 w-4" />
                                                </div>
                                                <span className="text-gray-700">{item.instructor?.name}</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <div className="p-1.5 rounded-full bg-green-50 text-green-600">
                                                    <HiOutlineCalendarDays className="h-4 w-4" />
                                                </div>
                                                <span className="text-gray-700">{new Date(item.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <div className="p-1.5 rounded-full bg-yellow-50 text-yellow-600">
                                                    <HiOutlineClock className="h-4 w-4" />
                                                </div>
                                                <span className="text-gray-700">
                                                    {new Date(item.created_at).toLocaleTimeString('en-PH', {
                                                        timeZone: 'Asia/Manila',
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                        hour12: true,
                                                    })}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 col-span-2 sm:col-span-3 md:col-span-1">
                                                <div className="p-1.5 rounded-full bg-pink-50 text-pink-600">
                                                    <HiOutlineMapPin className="h-4 w-4" />
                                                </div>
                                                <span className="text-gray-700 truncate">{item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}