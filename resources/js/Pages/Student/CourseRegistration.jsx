import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

export default function CourseRegistration({ applicationStatus, courseStatus = {} }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        course_type: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/course-registration', {
            onSuccess: () => reset(),
        });
    };

    const bothCoursesCompleted =
        courseStatus?.Theoretical === 'completed' &&
        courseStatus?.Practical === 'completed';

    return (
        <AuthenticatedLayout>
            <Head title="Course Registration" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-white shadow-xl rounded-lg p-8">
                        <h1 className="text-3xl font-bold mb-6 text-gray-800">Course Registration</h1>

                        {applicationStatus !== 'pending' && applicationStatus !== 'rejected' && (
                            <p className="text-gray-600 mb-8">
                                Please select <span className="font-semibold">course</span>  to register for:
                            </p>
                        )}

                        {applicationStatus !== 'approved' && (
                            <div className="text-red-600 font-semibold text-center bg-red-100 p-4 rounded mb-6">
                                Your application is not yet approved. You cannot register for a course.
                            </div>
                        )}

                        {applicationStatus === 'approved' && bothCoursesCompleted && (
                            <div className="text-green-700 font-medium bg-green-100 border border-green-200 p-4 rounded mb-6 text-center">
                                🎉 You have successfully completed both courses. No further registration is required.
                            </div>
                        )}

                        {applicationStatus === 'approved' && !bothCoursesCompleted && (
                            <form onSubmit={handleSubmit} className="space-y-6">

                                <InputLabel
                                    htmlFor="theoretical"
                                    className={`relative flex items-start gap-4 p-5 border rounded-lg cursor-pointer transition
                                ${data.course_type === 'Theoretical' ? 'border-indigo-600 bg-indigo-50' : 'hover:border-indigo-300'}
                                ${courseStatus.Theoretical === 'completed' ? 'opacity-60 cursor-not-allowed' : ''}
                            `}
                                >
                                    <input
                                        type="radio"
                                        id="theoretical"
                                        name="course"
                                        value="Theoretical"
                                        checked={data.course_type === 'Theoretical'}
                                        onChange={(e) => setData('course_type', e.target.value)}
                                        disabled={courseStatus.Theoretical === 'completed'}
                                        className="h-5 w-5 text-indigo-600 mt-1"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-lg font-semibold text-gray-900">Theoretical Course</h2>
                                        <p className="text-sm text-gray-600">
                                            Learn road rules, traffic signs, and safety regulations.
                                        </p>
                                        {courseStatus.Theoretical === 'not_started' && (
                                            <div className="mt-3 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r">
                                                <div className="flex">
                                                    <div className="flex-shrink-0">
                                                        <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
                                                        </svg>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm text-indigo-700">
                                                            <span className="font-semibold">Registration successful for  Theoretical Course.</span>
                                                            <br />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {courseStatus.Theoretical && (
                                        <div className="absolute top-3 right-3 flex items-center gap-1">
                                            <span
                                                className={`relative flex h-2 w-2 ${courseStatus.Theoretical === 'completed'
                                                    ? 'bg-green-500'
                                                    : courseStatus.Theoretical === 'not_started'
                                                        ? 'bg-gray-500'
                                                        : 'bg-yellow-500'
                                                    } rounded-full`}
                                            >
                                                <span
                                                    className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${courseStatus.Theoretical === 'completed'
                                                        ? 'bg-green-400'
                                                        : courseStatus.Theoretical === 'not_started'
                                                            ? 'bg-gray-400'
                                                            : 'bg-yellow-400'
                                                        }`}
                                                ></span>
                                            </span>
                                            <span
                                                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${courseStatus.Theoretical === 'completed'
                                                    ? 'bg-green-100 text-green-800'
                                                    : courseStatus.Theoretical === 'not_started'
                                                        ? 'bg-gray-100 text-gray-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                    }`}
                                            >
                                                {courseStatus.Theoretical === 'completed'
                                                    ? 'Completed'
                                                    : courseStatus.Theoretical === 'not_started'
                                                        ? 'Not Started'
                                                        : 'Available'}
                                            </span>
                                        </div>
                                    )}
                                </InputLabel>


                                <InputLabel
                                    htmlFor="practical"
                                    className={`relative flex items-start gap-4 p-5 border rounded-lg cursor-pointer transition
                                    ${data.course_type === 'Practical' ? 'border-indigo-600 bg-indigo-50' : 'hover:border-indigo-300'}
                                    ${courseStatus.Practical === 'completed' ? 'opacity-60 cursor-not-allowed' : ''}
                                `}
                                >
                                    <input
                                        type="radio"
                                        id="practical"
                                        name="course"
                                        value="Practical"
                                        checked={data.course_type === 'Practical'}
                                        onChange={(e) => setData('course_type', e.target.value)}
                                        disabled={courseStatus.Practical === 'completed'}
                                        className="h-5 w-5 text-indigo-600 mt-1"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-lg font-semibold text-gray-900">Practical Course</h2>
                                        <p className="text-sm text-gray-600">
                                            Hands-on driving experience with licensed instructors.
                                        </p>
                                        {courseStatus.Practical === 'not_started' && (
                                            <div className="mt-3 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r">
                                                <div className="flex">
                                                    <div className="flex-shrink-0">
                                                        <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
                                                        </svg>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-sm text-indigo-700">
                                                            <span className="font-semibold">Registration successful for  Practical Course.</span>
                                                            <br />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {courseStatus.Practical && (
                                        <div className="absolute top-3 right-3 flex items-center gap-1">
                                            <span
                                                className={`relative flex h-2 w-2 ${courseStatus.Practical === 'completed'
                                                    ? 'bg-green-500'
                                                    : courseStatus.Practical === 'not_started'
                                                        ? 'bg-gray-500'
                                                        : 'bg-yellow-500'
                                                    } rounded-full`}
                                            >
                                                <span
                                                    className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${courseStatus.Practical === 'completed'
                                                        ? 'bg-green-400'
                                                        : courseStatus.Practical === 'not_started'
                                                            ? 'bg-gray-400'
                                                            : 'bg-yellow-400'
                                                        }`}
                                                ></span>
                                            </span>
                                            <span
                                                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${courseStatus.Practical === 'completed'
                                                    ? 'bg-green-100 text-green-800'
                                                    : courseStatus.Practical === 'not_started'
                                                        ? 'bg-gray-100 text-gray-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                    }`}
                                            >
                                                {courseStatus.Practical === 'completed'
                                                    ? 'Completed'
                                                    : courseStatus.Practical === 'not_started'
                                                        ? 'Not Started'
                                                        : 'Available'}
                                            </span>
                                        </div>
                                    )}
                                </InputLabel>



                                <div className="text-right pt-4">
                                    <PrimaryButton
                                        type="submit"
                                        disabled={!data.course_type || processing}
                                    >
                                        {processing ? 'Registering...' : 'Register Now'}
                                    </PrimaryButton>
                                </div>

                                {errors.course_type && (
                                    <div className="text-red-600 text-sm">{errors.course_type}</div>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
