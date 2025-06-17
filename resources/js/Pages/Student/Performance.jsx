import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Performance() {
    const { evaluations = {}, hasEvaluation = false } = usePage().props;

    if (!hasEvaluation || !evaluations || Object.keys(evaluations).length === 0) {
        return (
            <AuthenticatedLayout>
                <Head title="Performance" />
                <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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