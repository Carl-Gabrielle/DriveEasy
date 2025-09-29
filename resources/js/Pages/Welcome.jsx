import FeaturesCard from '@/Components/cards/FeaturesCard';
import { Head, Link } from '@inertiajs/react';
import { FaRegCalendar, FaRegCheckCircle, FaRegUser } from 'react-icons/fa';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome to DriveEasy" />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-6xl w-full space-y-16">
                        <header className="text-center space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
                                    <span className="text-sm font-medium text-blue-700">🚗 Your Journey Starts Here</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                                    Master the Road with{' '}
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        DriveEasy
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Transform your driving skills with expert guidance, smart scheduling, and personalized feedback.
                                    Your path to confident, safe driving starts today.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-200"
                                    >
                                        Go to Dashboard
                                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-200"
                                        >
                                            Get Started
                                            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-700 bg-white/80 backdrop-blur-sm transition-all duration-200"
                                        >
                                            Create Account
                                        </Link>
                                    </>
                                )}
                            </div>
                        </header>

                        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <FeaturesCard
                                icon={<FaRegUser className="w-7 h-7 text-white" />}
                                fromColor="from-blue-500"
                                toColor="to-blue-600"
                                title="Expert Instructors"
                                description="Learn from certified professionals with years of experience. Our instructors provide personalized guidance to build your confidence behind the wheel."
                            />

                            <FeaturesCard
                                icon={<FaRegCalendar className="w-7 h-7 text-white" />}
                                fromColor="from-purple-500"
                                toColor="to-purple-600"
                                title="Smart Scheduling"
                                description="Admins efficiently manage training and exam schedules. Students receive instant notifications through their personalized portal for seamless coordination."

                            />
                            <FeaturesCard
                                icon={<FaRegCheckCircle className="w-7 h-7 text-white" />}
                                title="Performance Tracking"
                                description="Detailed assessments based on key driving criteria with personalized feedback to help you continuously improve and master essential skills."
                                fromColor="from-green-500"
                                toColor="to-green-600"
                            />
                        </section>

                        <footer className="pt-12 border-t border-gray-200/50 text-center">
                            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                                <div className="text-2xl font-bold text-gray-900">
                                    Drive<span className="text-blue-600">Easy</span>
                                </div>
                                <div className="text-gray-500 text-sm">
                                    &copy; {new Date().getFullYear()} DriveEasy. All rights reserved.
                                    <span className="text-gray-400 ml-2">Drive with confidence</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        </>
    );
}