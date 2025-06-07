
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Schedule() {
    return (
        <AuthenticatedLayout>
            <Head title="Schedule" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold mb-4">Schedule</h1>
                            <p>Welcome to your schedule page. Here you can view your class schedule, including the days and times of your classes.</p>
                            <p>Please check back regularly for updates to your schedule.</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}