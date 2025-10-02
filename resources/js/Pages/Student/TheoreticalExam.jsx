import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function TheoreticalExam({ student, questions, result, error, course_registration_id }) {
    const [answers, setAnswers] = useState({});

    const handleAnswerChange = (questionId, choice) => {
        setAnswers((prev) => ({ ...prev, [questionId]: choice }));
    };

    const handleSubmit = () => {
        router.post(route("exam.store"), {
            course_registration_id,
            answers,
        });

    };

    return (
        <AuthenticatedLayout>
            <Head title="Theoretical Exam" />

            <div className="p-6 space-y-6">
                <h1 className="text-2xl font-bold">Theoretical Exam</h1>
                <p className="text-gray-600">
                    Welcome, {student?.name} (ID: {student?.id})
                </p>

                {error && (
                    <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                {result ? (
                    <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-xl max-w-md mx-auto text-center space-y-6 backdrop-blur-sm bg-opacity-95">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full"></div>
                            </div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent relative">
                                Exam Results
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm">
                                <p className="text-sm font-medium text-gray-500 mb-1">Score</p>
                                <p className="text-2xl font-bold text-gray-800">
                                    {result.score}
                                    <span className="text-sm font-normal text-gray-400">/{result.total}</span>
                                </p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm">
                                <p className="text-sm font-medium text-gray-500 mb-1">Percentage</p>
                                <p className="text-2xl font-bold text-gray-800">{result.percentage}%</p>
                            </div>
                        </div>

                        <div
                            className={`inline-flex items-center px-4 py-2 rounded-full font-semibold text-sm ${result.status === "PASSED"
                                ? "bg-green-50 text-green-700 border border-green-200"
                                : "bg-red-50 text-red-700 border border-red-200"
                                }`}
                        >
                            <div
                                className={`w-2 h-2 rounded-full mr-2 ${result.status === "PASSED" ? "bg-green-500" : "bg-red-500"
                                    }`}
                            ></div>
                            {result.status}
                        </div>

                        <div
                            className={`p-4 rounded-xl ${result.status === "PASSED"
                                ? "bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100"
                                : "bg-gradient-to-r from-red-50 to-orange-50 border border-red-100"
                                }`}
                        >
                            <div className="flex items-center justify-center space-x-2">
                                {result.status === "PASSED" ? (
                                    <>
                                        <div className="text-2xl">🎉</div>
                                        <p className="font-semibold text-green-700">
                                            Congratulations on passing your exam!
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <div className="text-2xl">💪</div>
                                        <p className="font-semibold text-red-700">
                                            Keep practicing - you'll get it next time!
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-500 ${result.status === "PASSED"
                                        ? "bg-gradient-to-r from-green-400 to-emerald-500"
                                        : "bg-gradient-to-r from-red-400 to-orange-500"
                                        }`}
                                    style={{ width: `${result.percentage}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Performance indicator</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="space-y-6">
                            {questions.map((q, index) => (
                                <div key={q.id} className="p-4 border rounded-lg shadow-sm">
                                    <h2 className="font-semibold mb-2">
                                        {index + 1}. {q.question}
                                    </h2>

                                    <div className="space-y-2">
                                        {q.choices.map((choice, i) => (
                                            <label
                                                key={i}
                                                className="flex items-center space-x-2 cursor-pointer"
                                            >
                                                <input
                                                    type="radio"
                                                    name={`question-${q.id}`}
                                                    value={choice}
                                                    checked={answers[q.id] === choice}
                                                    onChange={() =>
                                                        handleAnswerChange(q.id, choice)
                                                    }
                                                    className="text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <span>{choice}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                        >
                            Submit Exam
                        </button>
                    </>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
