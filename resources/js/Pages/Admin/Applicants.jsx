import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Applicants() {
    return (
        <AdminLayout>
            <Head title="Applicants" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold mb-4">Applicants</h1>
                            <p className="text-gray-600">This section will display the list of applicants.</p>
                            {/* Future implementation for displaying applicants will go here */}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}