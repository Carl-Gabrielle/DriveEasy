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
import ExistingSchedules from "@/Components/ExistingSchedules";
import { formatDate, formatTime } from '@/lib/dateFormatter';
import { groupByDate } from '@/utils/groupByDate';
import toast, { Toaster } from 'react-hot-toast';

export default function Schedules({ instructors = [], registrations = [], schedules = [], student }) {
    const { data, setData, post, reset, processing, errors } = useForm({
        instructor_id: '',
        course_registration_id: '',
        date: '',
        time: '',
        location: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.schedules.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.success("Schedule saved successfully!", { duration: 3000 });
            },
            onError: () => {
                toast.error("Failed to save schedule.");
            },
        });
    };

    const handleTimeChange = (e) => {
        const selectedTime = e.target.value;

        if (selectedTime >= "08:00" && selectedTime <= "17:00") {
            setData("time", selectedTime);
        } else {
            toast.error("Please select a time between 8:00 AM and 5:00 PM (Philippine Time).");
        }
    };

    const groupedTheoretical = groupByDate(
        schedules.filter((s) => s.course_registration?.course_type === "Theoretical")
    );

    const groupedPractical = groupByDate(
        schedules.filter((s) => s.course_registration?.course_type === "Practical")
    );

    const [selectedSchedule, setSelectedSchedule] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const scheduledIds = new Set(schedules.map(s => s.course_registration_id));


    return (
        <AdminLayout>
            <Head title="Schedules" />
            <Toaster position="top-center" reverseOrder={false} />
            <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Training Schedules</h1>
                        <p className="mt-1 text-sm text-gray-500">Manage and assign training schedules for students</p>
                    </div>
                </div>
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
                                    {registrations
                                        .filter(reg => !scheduledIds.has(reg.id))
                                        .map((reg) => (
                                            <option key={reg.id} value={reg.id}>
                                                {reg.student_application?.user?.name} - {reg.course_type}
                                            </option>
                                        ))}

                                </select>
                                {errors.course_registration_id && <p className="text-red-500 text-xs mt-1">{errors.course_registration_id}</p>}
                            </div>


                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Date</label>
                                <input
                                    type="date"
                                    value={data.date}
                                    onChange={(e) => setData('date', e.target.value)}
                                    min={new Date().toISOString().split("T")[0]}
                                    className="mt-1 cursor-pointer block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border text-sm"
                                />
                                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Time</label>
                                <input
                                    type="time"
                                    value={data.time}
                                    onChange={handleTimeChange}
                                    min="08:00"
                                    max="17:00"
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
                <ExistingSchedules
                    schedules={schedules}
                    groupedTheoretical={groupedTheoretical}
                    groupedPractical={groupedPractical}
                    selectedSchedule={selectedSchedule}
                    setSelectedSchedule={setSelectedSchedule}
                    selectedStudent={selectedStudent}
                    setSelectedStudent={setSelectedStudent}
                />

            </div>
        </AdminLayout>
    );
}