import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome to DriveEasy" />
            <div className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl w-full space-y-12 text-center">
                    <header className="space-y-4">
                        <h1 className="text-5xl font-bold text-gray-900">
                            Welcome to <span className="text-indigo-600">DriveEasy</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Your trusted driving school to learn safe, confident, and smart driving.
                        </p>
                        <div className="flex justify-center space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition"
                                >
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transition"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </header>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Instructors</h3>
                            <p className="text-gray-600">Certified and experienced professionals who guide you step by step.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Admin-Scheduled Training</h3>
                            <p className="text-gray-600">  Admins can assign and manage training or exam schedules. Students are notified automatically through their portal.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Performance Evaluation</h3>
                            <p className="text-gray-600">  Instructors assess student performance based on key driving criteria and provide personalized feedback to help them improve.</p>
                        </div>
                    </section>

                    <footer className="pt-8 border-t mt-12 text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} DriveEasy. All rights reserved.
                    </footer>
                </div>
            </div>
        </>
    );
}
