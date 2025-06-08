import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Schedules() {
    return (
        <AdminLayout>
            <Head title="Schedules" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold">Schedules</h1>
                            <p className="mt-4">This is the schedules page. You can manage your schedules here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}