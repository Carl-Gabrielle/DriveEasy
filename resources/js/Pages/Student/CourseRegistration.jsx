import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/ui/Button/PrimaryButton";
import CourseOptionCard from "@/Components/cards/CourseOptionCard";
import toast, { Toaster } from "react-hot-toast";

export default function CourseRegistration({ applicationStatus, courseStatus = {} }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        course_type: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/course-registration", {
            onSuccess: () => {
                reset();
                toast.success("Course Registered Successfully");
            },
            onError: () => {
                toast.error("Please fix the highlighted errors.");
            },
        });
    };

    const bothCoursesCompleted =
        courseStatus?.Theoretical === "completed" &&
        courseStatus?.Practical === "completed";

    return (
        <AuthenticatedLayout>
            <Head title="Course Registration" />
            <Toaster position="top-center" reverseOrder={false} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-white shadow-xl rounded-lg p-8">
                        <h1 className="text-3xl font-bold mb-6 text-gray-800">
                            Course Registration
                        </h1>

                        {applicationStatus !== "pending" &&
                            applicationStatus !== "rejected" && (
                                <p className="text-gray-600 mb-8">
                                    Please select{" "}
                                    <span className="font-semibold">course</span> to register
                                    for:
                                </p>
                            )}

                        {applicationStatus !== "approved" && (
                            <div className="text-red-600 font-semibold text-center bg-red-100 p-4 rounded mb-6">
                                Your application is not yet approved. You cannot register for a
                                course.
                            </div>
                        )}

                        {applicationStatus === "approved" && bothCoursesCompleted && (
                            <div className="text-green-700 font-medium bg-green-100 border border-green-200 p-4 rounded mb-6 text-center">
                                🎉 You have successfully completed both courses. No further
                                registration is required.
                            </div>
                        )}

                        {applicationStatus === "approved" && !bothCoursesCompleted && (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <CourseOptionCard
                                    id="theoretical"
                                    value="Theoretical"
                                    selectedValue={data.course_type}
                                    onChange={(e) => setData("course_type", e.target.value)}
                                    disabled={courseStatus.Theoretical === "completed"}
                                    title="Theoretical Course"
                                    description="Learn road rules, traffic signs, and safety regulations."
                                    status={courseStatus.Theoretical}
                                />

                                <CourseOptionCard
                                    id="practical"
                                    value="Practical"
                                    selectedValue={data.course_type}
                                    onChange={(e) => setData("course_type", e.target.value)}
                                    disabled={courseStatus.Practical === "completed"}
                                    title="Practical Course"
                                    description="Hands-on driving experience with licensed instructors."
                                    status={courseStatus.Practical}
                                />

                                <div className="text-right pt-4">
                                    <PrimaryButton
                                        type="submit"
                                        disabled={!data.course_type || processing}
                                    >
                                        {processing ? "Registering..." : "Register Now"}
                                    </PrimaryButton>
                                </div>

                                {errors.course_type && (
                                    <div className="text-red-600 text-sm">
                                        {errors.course_type}
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
