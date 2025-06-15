import InstructorLayout from '@/Layouts/InstructorLayout';
import { Head } from '@inertiajs/react';
import { FiUser, FiCalendar, FiClock, FiMapPin, FiBook, FiGrid, FiList, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

export default function AssignedStudents({ students }) {
    const [viewMode, setViewMode] = useState('list');
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const studentsByDate = students.reduce((acc, student) => {
        const date = new Date(student.date).toDateString();
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(student);
        return acc;
    }, {});

    const goToPreviousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const goToToday = () => {
        setCurrentMonth(new Date());
    };

    const generateCalendarDays = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const daysFromPrevMonth = firstDay;
        const prevMonthDays = new Date(year, month, 0).getDate();

        const totalDaysToShow = Math.ceil((daysInMonth + daysFromPrevMonth) / 7) * 7;
        const daysFromNextMonth = totalDaysToShow - (daysInMonth + daysFromPrevMonth);

        const days = [];

        for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
            const date = new Date(year, month - 1, prevMonthDays - i);
            days.push({ date, isCurrentMonth: false });
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i);
            days.push({ date, isCurrentMonth: true });
        }

        for (let i = 1; i <= daysFromNextMonth; i++) {
            const date = new Date(year, month + 1, i);
            days.push({ date, isCurrentMonth: false });
        }

        return days;
    };

    const calendarDays = generateCalendarDays();

    return (
        <InstructorLayout>
            <Head title="My Schedule" />
            <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">📅 My Schedule</h1>
                            <p className="text-gray-600">
                                {viewMode === 'calendar' ? 'Calendar view of your training sessions' : 'List of all assigned students'}
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0 flex space-x-3">
                            <div className="inline-flex rounded-md shadow-sm">
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`inline-flex items-center px-4 py-2 rounded-l-md text-sm font-medium ${viewMode === 'list' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                                >
                                    <FiList className="mr-2" />
                                    List View
                                </button>
                                <button
                                    onClick={() => setViewMode('calendar')}
                                    className={`inline-flex items-center px-4 py-2 rounded-r-md text-sm font-medium ${viewMode === 'calendar' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                                >
                                    <FiGrid className="mr-2" />
                                    Calendar View
                                </button>
                            </div>
                        </div>
                    </div>
                    {students.length === 0 ? (
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                            <div className="mx-auto h-24 w-24 text-gray-300 mb-4">
                                <FiCalendar className="w-full h-full" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">No scheduled sessions</h3>
                            <p className="text-gray-500 max-w-md mx-auto">
                                You currently don't have any training sessions scheduled.
                            </p>
                        </div>
                    ) : viewMode === 'calendar' ? (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                </h2>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={goToToday}
                                        className="px-3 py-1 text-sm rounded-md hover:bg-gray-100"
                                    >
                                        Today
                                    </button>
                                    <button
                                        onClick={goToPreviousMonth}
                                        className="p-2 rounded-md hover:bg-gray-100"
                                    >
                                        <FiChevronLeft className="h-5 w-5" />
                                    </button>
                                    <button
                                        onClick={goToNextMonth}
                                        className="p-2 rounded-md hover:bg-gray-100"
                                    >
                                        <FiChevronRight className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-7 gap-px bg-gray-200">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                    <div key={day} className="bg-gray-100 py-2 text-center text-xs font-medium text-gray-500">
                                        {day}
                                    </div>
                                ))}

                                {calendarDays.map((day, i) => {
                                    const dateString = day.date.toDateString();
                                    const dayStudents = studentsByDate[dateString] || [];

                                    return (
                                        <div
                                            key={i}
                                            className={`bg-white min-h-24 p-1 ${!day.isCurrentMonth ? 'text-gray-400' : ''}`}
                                        >
                                            <div className="text-right p-1">
                                                {day.date.getDate()}
                                            </div>
                                            {dayStudents.map((student, idx) => {
                                                const studentData = student.course_registration?.student_application?.user;
                                                return (
                                                    <div
                                                        key={idx}
                                                        className="mb-1 p-2 text-xs bg-indigo-50 rounded hover:bg-indigo-100 cursor-pointer"
                                                    >
                                                        <div className="font-medium truncate">
                                                            {studentData?.name || 'Student'}
                                                        </div>
                                                        <div className="text-indigo-600 truncate">
                                                            {new Date(student.created_at).toLocaleTimeString('en-PH', {
                                                                timeZone: 'Asia/Manila',
                                                                hour: '2-digit',
                                                                minute: '2-digit',
                                                                hour12: true,
                                                            })}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Sessions</h3>
                                {students
                                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                                    .map((item, index) => {
                                        const student = item.course_registration?.student_application?.user;
                                        const courseType = item.course_registration?.course_type;
                                        const sessionDate = new Date(item.date);

                                        return (
                                            <div
                                                key={index}
                                                className="group py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-2 rounded-lg"
                                            >
                                                <div className="flex items-start justify-between">
                                                    <div className="flex items-start space-x-4">
                                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mt-1">
                                                            <FiUser className="h-5 w-5 text-indigo-600" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center space-x-2">
                                                                <h3 className="text-base font-semibold text-gray-900 truncate">
                                                                    {student?.name || 'Unknown Student'}
                                                                </h3>
                                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                                                    {courseType}
                                                                </span>
                                                            </div>
                                                            <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
                                                                <div className="flex items-center text-sm text-gray-500">
                                                                    <FiCalendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                                                    {sessionDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                                                                </div>
                                                                <div className="flex items-center text-sm text-gray-500">
                                                                    <FiClock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                                                    {new Date(item.created_at).toLocaleTimeString('en-PH', {
                                                                        timeZone: 'Asia/Manila',
                                                                        hour: '2-digit',
                                                                        minute: '2-digit',
                                                                        hour12: true,
                                                                    })}
                                                                </div>
                                                                <div className="flex items-center text-sm text-gray-500">
                                                                    <FiMapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                                                    {item.location || 'Location TBD'}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </InstructorLayout>
    );
}