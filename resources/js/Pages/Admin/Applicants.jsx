import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import InputLabel from '@/Components/ui/Input/InputLabel';
import Pagination from '@/Layouts/Pagination';
import { Toaster } from 'react-hot-toast';
import ThumbnailImage from '@/Components/assets/ThumbnailImage';
import CompactApplicationCard from '@/Components/cards/CompactApplicationCard';

export default function Applicants({ applications }) {
    return (
        <AdminLayout>
            <Head title="Applicants" />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800">Applicant Management</h1>
                            <p className="text-sm text-gray-500">Review and process submitted applications</p>
                        </div>
                        <div className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                            {applications.total} {applications.total === 1 ? 'application' : 'applications'}
                        </div>
                    </div>

                    {applications.data.length > 0 ? (
                        <div className="space-y-3">
                            {applications.data.map((app) => (
                                <CompactApplicationCard key={app.id} app={app} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-2">
                                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-medium text-gray-500">No applications submitted yet</h3>
                            <p className="text-xs text-gray-400 mt-1">When applicants submit forms, they'll appear here</p>
                        </div>
                    )}
                    <Pagination links={applications.links} />
                </div>
            </div>
        </AdminLayout>
    );
}
