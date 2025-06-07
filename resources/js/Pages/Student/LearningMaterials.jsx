import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function LearningMaterials() {
    return (
        <AuthenticatedLayout>
            <Head title="Results" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl font-bold mb-4">Learning Materials</h1>
                            <p>Welcome to the learning materials page. Here you can access various resources to aid your studies, including lecture notes, reading materials, and multimedia content.</p>
                            <p>Please check back regularly for updates to your learning materials.</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}