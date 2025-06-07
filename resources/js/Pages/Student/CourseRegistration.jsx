
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
export default function CourseRegistration() {
    return (
        <AuthenticatedLayout>
            <Head title="Course Registration" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold mb-4">Course Registration</h1>
                            <p>Welcome to the course registration page. Here you can register for courses, view available courses, and manage your course selections.</p>
                            <p>Please select the courses you wish to register for from the list below.</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}