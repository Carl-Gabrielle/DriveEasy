import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaCar } from 'react-icons/fa';
import { Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;
    return (
        <AuthenticatedLayout>
            <Head title="Student Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md sm:rounded-lg p-8 flex flex-col items-center  text-center">
                        <FaCar className="text-indigo-600 w-14 h-14 mb-4" />
                        <h1 className="text-3xl font-medium text-gray-900 mb-2">
                            Welcome to DriveEasy  <span className='font-extrabold'> {user.name}</span>!
                        </h1>
                        <p className="text-gray-700 text-md max-w-2xl">
                            You're almost ready to start your driving journey!  To get started, please complete your application by submitting the required documents on the Application page.
                        </p>
                        <div className="mt-6">
                            <Link
                                href={route('student.applications')}
                                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                            >
                                Go to Application
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
