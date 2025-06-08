import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

export default function CourseRegistration() {
    const courseStatus = {
        Theoretical: 'completed',
        Practical: 'available',
    };

    const [selectedCourse, setSelectedCourse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedCourse) {
            alert("Please select a course to register.");
            return;
        }
        alert(`You have successfully registered for the ${selectedCourse} course.`);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Course Registration" />
            <div className="py-12">
                <div className="mx-auto max-w-3xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h1 className="text-3xl font-bold mb-6 text-gray-800">Course Registration</h1>
                        <p className="text-gray-600 mb-8">
                            Please select <span className="font-semibold">one</span> course to register for:
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <InputLabel
                                htmlFor="theoretical"
                                className={`relative flex items-center gap-4 p-5 border rounded-lg cursor-pointer transition
                                ${selectedCourse === 'Theoretical' ? 'border-indigo-600 bg-indigo-50' : 'hover:border-indigo-300'}
                                ${courseStatus.Theoretical === 'completed' ? 'opacity-70 cursor-not-allowed' : ''}
                                `}
                            >
                                <input
                                    type="radio"
                                    id="theoretical"
                                    name="course"
                                    value="Theoretical"
                                    checked={selectedCourse === 'Theoretical'}
                                    onChange={(e) => setSelectedCourse(e.target.value)}
                                    disabled={courseStatus.Theoretical === 'completed'}
                                    className="h-5 w-5 text-indigo-600"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">Theoretical Course</h2>
                                    <p className="text-sm text-gray-600">
                                        Learn road rules, traffic signs, and safety regulations.
                                    </p>
                                </div>
                                {courseStatus.Theoretical === 'completed' && (
                                    <span className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                        Completed
                                    </span>
                                )}
                            </InputLabel>
                            <InputLabel
                                htmlFor="practical"
                                className={`relative flex items-center gap-4 p-5 border rounded-lg cursor-pointer transition
                                ${selectedCourse === 'Practical' ? 'border-indigo-600 bg-indigo-50' : 'hover:border-indigo-300'}
                                ${courseStatus.Practical === 'completed' ? 'opacity-70 cursor-not-allowed' : ''}
                                `}
                            >
                                <input
                                    type="radio"
                                    id="practical"
                                    name="course"
                                    value="Practical"
                                    checked={selectedCourse === 'Practical'}
                                    onChange={(e) => setSelectedCourse(e.target.value)}
                                    disabled={courseStatus.Practical === 'completed'}
                                    className="h-5 w-5 text-indigo-600"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900">Practical Course</h2>
                                    <p className="text-sm text-gray-600">
                                        Hands-on driving experience with licensed instructors.
                                    </p>
                                </div>
                                {courseStatus.Practical === 'completed' && (
                                    <span className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                        Completed
                                    </span>
                                )}
                            </InputLabel>

                            {/* Submit Button */}
                            <div className="text-right pt-4">
                                <PrimaryButton
                                    type="submit"
                                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                                    disabled={!selectedCourse}
                                >
                                    Register Now
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
