import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function CourseApprovals() {
    return (
        <AdminLayout>
            <Head title="Course Approvals" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold mb-4">Course Approvals</h1>
                            <p className="text-gray-600">Manage course approvals here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}