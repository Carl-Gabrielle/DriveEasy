import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function PerformanceRating() {
    return (
        <AdminLayout>
            <Head title="Performance Ratings" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold">Performance Ratings</h1>
                            <p className="mt-4">This is the performance ratings page. You can manage performance ratings here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}