import SubmittedApplication from '@/Components/sections/SubmittedApplication';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { FaCheckCircle, FaUpload, FaUser, FaTimesCircle, FaClock } from 'react-icons/fa';
import RequirementsList from '@/Components/forms/RequirementsList';
import StatusMessage from '@/Components/ui/StatusMessage';
import ApplicationForm from '@/Components/forms/ApplicationForm';
import { Toaster } from 'react-hot-toast';
import { statusConfig } from '@/utils/statusConfig.jsx';


export default function Applications({ applications = [], success }) {
    const { errors } = usePage().props;
    const app = applications[0] || null;
    return (
        <AuthenticatedLayout>
            <Head title="Applications" />
            <Toaster position="top-center" reverseOrder={false} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                        Application
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {!app ? (
                            <RequirementsList title="Requirements Submission" />
                        ) : app.status === 'rejected' ? (
                            <RequirementsList
                                title="Resubmit Your Documents"
                                message="Your application was rejected. Please review the requirements and resubmit your documents."
                            />
                        ) : (
                            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 rounded-full mb-6">
                                    <FaCheckCircle className="text-emerald-600 h-10 w-10" />
                                </div>

                                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                    Documents Submitted
                                </h2>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Your application documents have been successfully submitted and are now in queue for review.
                                </p>
                            </div>
                        )}
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                {app ? (app.status === 'rejected' ? 'Resubmit Your Documents' : 'Application Status') : 'Submit Your Documents'}
                            </h2>
                            {!app ? (
                                <ApplicationForm applications={applications} errors={errors} />
                            ) : applications[0].status === 'rejected' ? (
                                <>
                                    <div className={`${statusConfig.rejected.bg} ${statusConfig.rejected.border} ${statusConfig.rejected.text} p-4 rounded-md shadow-sm border-l-4 `}>
                                        <div className="flex items-start gap-3">
                                            {statusConfig.rejected.icon}
                                            <div className="text-sm">
                                                <p className="font-medium">{statusConfig.rejected.title}</p>
                                                <p className="mt-1 text-gray-700">{statusConfig.rejected.message}</p>
                                                {applications[0].admin_remarks && (
                                                    <div className="mt-2 text-sm text-red-700 bg-red-100 border border-red-300 p-3 rounded">
                                                        <strong>Remarks:</strong> {applications[0].admin_remarks}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <ApplicationForm applications={applications} errors={errors} />
                                </>
                            ) : (
                                <StatusMessage app={applications[0]} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <SubmittedApplication applications={applications} />
        </AuthenticatedLayout >
    );
}
