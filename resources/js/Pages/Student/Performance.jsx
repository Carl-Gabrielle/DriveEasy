import ScheduleCard from '@/Components/cards/ScheduleCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { formatDate, formatTime, formatDateTime } from "@/lib/dateFormatter";
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { FaCalendarAlt, FaUserTie, FaMapMarkerAlt, FaClock, FaArrowRight, FaRegClock, FaBook, FaGraduationCap } from 'react-icons/fa';
import { HiLockClosed, HiCheckCircle } from 'react-icons/hi';
import { MdAccessTimeFilled, MdOutlineQuiz } from 'react-icons/md';
export default function Performance() {
    const { evaluations = [], hasEvaluation = false } = usePage().props;
    const { examSchedule = [], hasExamSchedule = false } = usePage().props;

    const now = new Date();
    const renderExamCard = (examSchedule) => {
        return (
            examSchedule.length === 0 ? (
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
                    {examSchedule.map((item, index) => {
                        const scheduleDateTime = new Date(item.datetime);
                        const isAvailable = now >= scheduleDateTime;
                        return (
                            <div key={index} className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 mb-6 overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                                            <FaGraduationCap className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors duration-300">
                                                {item.course}
                                            </h3>
                                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                <span className="flex items-center">
                                                    <MdOutlineQuiz className="w-4 h-4 mr-1 text-blue-500" />
                                                    Exam Session
                                                </span>
                                                <span className="flex items-center">
                                                    <FaRegClock className="w-4 h-4 mr-1 text-green-500" />
                                                    {item.duration || '60 mins'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`mt-4 lg:mt-0 px-4 py-2 rounded-full border ${isAvailable
                                        ? 'bg-green-50 border-green-200 text-green-700'
                                        : 'bg-amber-50 border-amber-200 text-amber-700'
                                        }`}>
                                        <div className="flex items-center space-x-2">
                                            {isAvailable ? (
                                                <>
                                                    <HiCheckCircle className="w-4 h-4" />
                                                    <span className="text-sm font-semibold">Ready to Start</span>
                                                </>
                                            ) : (
                                                <>
                                                    <HiLockClosed className="w-4 h-4" />
                                                    <span className="text-sm font-semibold">Starts Soon</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <FaCalendarAlt className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</p>
                                            <p className="text-sm font-medium text-gray-900">{formatDate(item.datetime)}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <MdAccessTimeFilled className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Time</p>
                                            <p className="text-sm font-medium text-gray-900">{formatTime(item.datetime)}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <FaUserTie className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Instructor</p>
                                            <p className="text-sm font-medium text-gray-900">{item.instructor}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                            <FaMapMarkerAlt className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Location</p>
                                            <p className="text-sm font-medium text-gray-900">{item.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                                    <div className="bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100">
                                        <span className="font-semibold text-indigo-700">Questions:</span>
                                        <span className="text-indigo-900 ml-1">{item.questions || '25'}</span>
                                    </div>
                                    <div className="bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                                        <span className="font-semibold text-blue-700">Passing Score:</span>
                                        <span className="text-blue-900 ml-1">{item.passingScore || '80%'}</span>
                                    </div>
                                    <div className="bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                                        <span className="font-semibold text-emerald-700">Attempts:</span>
                                        <span className="text-emerald-900 ml-1">{item.attempts || '2/3'}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200">
                                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4 sm:mb-0">
                                        <FaBook className="w-4 h-4 text-gray-400" />
                                        <span>Make sure you're prepared before starting</span>
                                    </div>

                                    {isAvailable ? (
                                        <Link
                                            href={route('exam.show', item.id)}
                                            className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                                        >
                                            <span>Begin Exam</span>
                                            <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </Link>
                                    ) : (
                                        <button
                                            disabled
                                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-500 bg-gray-100 border border-gray-200 rounded-xl cursor-not-allowed"
                                        >
                                            <HiLockClosed className="w-4 h-4 mr-2" />
                                            Available {item.availableFrom ? `from ${formatDate(item.availableFrom)}` : 'Soon'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )
        );
    };

    if (!hasEvaluation || !evaluations || Object.keys(evaluations).length === 0) {
        return (
            <AuthenticatedLayout>
                <Head title="Performance" />
                <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        {renderExamCard(examSchedule)}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="p-8 md:p-10 text-center">
                                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mb-4">
                                    <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-3">Performance Overview</h1>
                                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                                    You currently have no evaluation results available.
                                </p>
                                <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-md p-4 max-w-2xl mx-auto">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-blue-700">
                                                <span className="font-medium">Information:</span> Instructor feedback and scores will appear here once available.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }


    const renderEvaluationCard = (evaluation, courseType) => {
        const performanceStatus = evaluation?.remark?.toLowerCase() === 'passed' ? 'passed' : 'failed';
        const isPassed = performanceStatus === 'passed';

        return (
            <div key={courseType} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
                <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="flex items-center">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${isPassed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {isPassed ? 'Passed' : 'Failed'}
                                </span>
                                <span className="ml-3 text-sm font-medium text-gray-500">{courseType.toUpperCase()} COURSE</span>
                            </div>
                            <h2 className="mt-2 text-xl font-semibold text-gray-900">
                                {isPassed
                                    ? `Congratulations on completing the ${courseType} course!`
                                    : `${courseType} course not completed`}
                            </h2>
                        </div>
                        <div className={`flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg ${isPassed ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                            {isPassed ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </div>
                    </div>

                    <div className="mt-6 space-y-6">
                        {isPassed ? (
                            <>
                                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex items-center justify-between">
                                    <div className="flex items-start">
                                        <svg className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className="ml-3 text-sm text-green-700">
                                            <span className="font-medium">Certificate available!</span> You are eligible to download your certificate of completion.
                                        </p>
                                    </div>
                                    <a
                                        href={`/certificate/download?courseType=${courseType}`} target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                    >
                                        View Certificate
                                    </a>

                                </div>
                            </>
                        ) : (
                            <>
                                <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-center justify-between">
                                    <div className="flex">
                                        <svg className="flex-shrink-0 h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-red-800">Remarks</h3>
                                            <p className="mt-1 text-sm text-red-700">{evaluation?.remark || 'Failed'}</p>
                                        </div>
                                    </div>
                                    <a
                                        href={route('learning.materials')}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    >
                                        View Learning Materials
                                    </a>
                                </div>

                            </>
                        )}

                        <div className="border-t border-gray-200 pt-4">
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Instructor Notes</h3>
                            <div className="prose prose-sm text-gray-600 max-w-none">
                                <p>{evaluation?.instructor_notes || 'No additional notes were provided by your instructor.'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <AuthenticatedLayout>
            <Head title="Performance" />
            <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Performance Dashboard</h1>
                        <p className="text-lg text-gray-600">Review your course results and progress</p>
                    </div>

                    <div className="space-y-6">
                        {Object.entries(evaluations).map(([courseType, courseEvaluations]) => {
                            if (!Array.isArray(courseEvaluations) || courseEvaluations.length === 0) return null;
                            return renderEvaluationCard(courseEvaluations[0], courseType);
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}