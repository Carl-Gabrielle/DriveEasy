import InstructorLayout from '@/Layouts/InstructorLayout';
import { Head } from '@inertiajs/react';


export default function EvaluateStudents() {


    return (
        <InstructorLayout>
            <Head title="Evaluate Students" />
            <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto">
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Evaluate Students</h1>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-600">This page will allow you to evaluate students based on their performance in training sessions.</p>
                    <p className="mt-4 text-gray-600">You can provide feedback, assign grades, and track their progress over time.</p>
                    <p className="mt-4 text-gray-600">Please select a student from the list to begin the evaluation process.</p>
                </div>
            </div>

        </InstructorLayout>
    );
}
