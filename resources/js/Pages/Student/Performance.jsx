import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Performance() {
    return (
        <AuthenticatedLayout>
            <Head title="Performance" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold mb-4">Performance</h1>
                            <p>Welcome to the performance page. Here you can view your academic performance, including grades, attendance, and feedback from instructors.</p>
                            <p>Please check back regularly for updates on your performance metrics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}