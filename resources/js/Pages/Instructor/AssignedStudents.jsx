import InstructorLayout from '@/Layouts/InstructorLayout';
import { Head } from '@inertiajs/react';


export default function AssignedStudents() {


    return (
        <InstructorLayout>
            <Head title="Assigned Students" />
            <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto">
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Assigned Students</h1>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600">This page will display the list of students assigned to you for training sessions.</p>
                    <p className="mt-4 text-gray-600">You can manage their progress, view their evaluations, and communicate with them directly.</p>
                </div>
            </div>

        </InstructorLayout>
    );
}
