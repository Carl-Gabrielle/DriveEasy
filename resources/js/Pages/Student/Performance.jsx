import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Performance() {
    const performanceStatus = 'failed';

    return (
        <AuthenticatedLayout>
            <Head title="Performance" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Performance Overview</h1>
                        <p className="text-gray-600 mb-6">
                            View your driving course progress, including lesson completion,  and feedback from your instructors.
                        </p>
                        <div className="border-t pt-6 mt-4">
                            {performanceStatus === 'passed' ? (
                                <div className="space-y-4">
                                    <div className="text-green-600 text-lg font-semibold">
                                        ✅ Congratulations! You have successfully completed the course.
                                    </div>
                                    <div className="flex items-center justify-between bg-green-50 p-4 rounded-md border border-green-200">
                                        <div>
                                            <p className="text-sm text-gray-700">
                                                You are eligible to download your certificate of completion.
                                            </p>
                                        </div>
                                        <a
                                            href="/certificate/download"
                                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                                        >
                                            View Certificate
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="text-red-600 text-lg font-semibold">
                                        ❌ Unfortunately, you did not pass the course.
                                    </div>

                                    <div className="bg-red-50 p-4 rounded-md border border-red-200">
                                        <h2 className="font-semibold text-gray-800 mb-2">Remarks:</h2>
                                        <p className="text-sm text-gray-700">Failed</p>
                                    </div>

                                    <div className="mt-6">
                                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Learning Intervention</h2>
                                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                            <li>Review traffic signs and rules</li>
                                            <li>Practice driving maneuvers (parking, turning, etc.)</li>
                                            <li>Retake the theoretical module</li>
                                            <li>Request instructor feedback for improvement</li>
                                        </ul>
                                        <div className="mt-4">
                                            <a
                                                href={route('learning.materials')}
                                                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                                            >
                                                View Learning Materials
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
