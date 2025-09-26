import { useState, useEffect, useMemo, useCallback } from "react";
import { Head, useForm } from "@inertiajs/react";
import InstructorLayout from "@/Layouts/InstructorLayout";
import { toast, Toaster } from 'react-hot-toast';
import { FaPhone, FaMapMarkerAlt, FaBookOpen, FaCar } from "react-icons/fa";
import { router } from "@inertiajs/react";
import EvaluationSection from "@/Components/sections/EvaluationSection";
// --- CONFIGS ---
const THEORETICAL_CRITERIA = [
    ["Road Traffic Signs and Markings", "roadSigns", 15],
    ["Traffic Rules and Regulations", "trafficRules", 15],
    ["Defensive Driving Principles", "defensiveDriving", 15],
    ["Road Courtesy and Proper Attitude", "courtesy", 10],
    ["Land Transportation Laws", "laws", 15],
    ["Duties and Responsibilities of Drivers", "responsibilities", 15],
    ["Emergency Situations and First Aid", "emergencies", 15],
];

const PRACTICAL_CRITERIA = [
    ["Pre-Drive Checks", "preDrive", 10],
    ["Starting the Vehicle", "starting", 10],
    ["Moving and Stopping", "movingStopping", 10],
    ["Turning and U-Turns", "turning", 10],
    ["Lane Discipline", "lane", 10],
    ["Parking Skills", "parking", 10],
    ["Reversing", "reversing", 10],
    ["Obedience to Traffic Signs & Laws", "obeyingSigns", 15],
    ["Defensive Driving on the Road", "defensive", 15],
];

// --- HELPERS ---
const calculateTotal = (scores) =>
    Object.values(scores).reduce((a, b) => a + (Number(b) || 0), 0);

const getRemark = (scores, total) =>
    Object.values(scores).every((v) => v === "")
        ? ""
        : total >= 80
            ? "PASSED"
            : "FAILED";

// --- COMPONENTS ---


export default function EvaluateStudents({ student, courseType = "", errors }) {
    const normalizedCourseType = courseType.toLowerCase();

    const { data, setData, post, processing } = useForm({
        student_id: student?.id,
        course_type: normalizedCourseType,
        scores: {},
        instructor_notes: "",
    });

    const [theoreticalScores, setTheoreticalScores] = useState(
        Object.fromEntries(THEORETICAL_CRITERIA.map(([, key]) => [key, ""]))
    );

    const [practicalScores, setPracticalScores] = useState(
        Object.fromEntries(PRACTICAL_CRITERIA.map(([, key]) => [key, ""]))
    );

    const [theoNotes, setTheoNotes] = useState("");
    const [practNotes, setPractNotes] = useState("");

    // show backend validation errors
    useEffect(() => {
        if (errors) {
            Object.values(errors).forEach((msg) => toast.error(msg));
        }
    }, [errors]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const scores =
            normalizedCourseType === "theoretical"
                ? theoreticalScores
                : practicalScores;

        const processedScores = Object.fromEntries(
            Object.entries(scores).map(([k, v]) => [k, v === "" ? 0 : Number(v)])
        );

        const totalScore = calculateTotal(processedScores);
        if (totalScore === 0) {
            toast.error("Please enter at least one score");
            return;
        }

        const remark = totalScore >= 80 ? "PASSED" : "FAILED";
        const notes = normalizedCourseType === "theoretical" ? theoNotes : practNotes;

        router.post(route("instructor.evaluateStudents.store"), {
            student_id: student?.id,
            course_type: normalizedCourseType,
            scores: processedScores,
            total_score: totalScore,
            remark,
            instructor_notes: notes || null,
        }, {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Evaluation submitted successfully!");

                setTheoNotes("");
                setPractNotes("");

                setTheoreticalScores(
                    Object.fromEntries(THEORETICAL_CRITERIA.map(([, key]) => [key, ""]))
                );
                setPracticalScores(
                    Object.fromEntries(PRACTICAL_CRITERIA.map(([, key]) => [key, ""]))
                );
            },
        });
    };

    return (
        <InstructorLayout>
            <Head title={`Evaluate ${student?.name}`} />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                Student Evaluation
                            </h1>
                            <p className="text-gray-500 mt-1">
                                Comprehensive assessment dashboard
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-4 md:mt-0">
                            <button
                                type="submit"
                                disabled={processing}
                                className={`px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg 
                hover:bg-indigo-700 transition-colors shadow-sm ${processing ? "opacity-70 cursor-not-allowed" : ""
                                    }`}
                            >
                                {processing ? "Submitting..." : "Save Evaluation"}
                            </button>
                        </form>
                    </div>

                    {/* Student Info */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                {student?.name?.charAt(0)}
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {student?.name}
                                </h2>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mt-1">
                                    <span className="flex items-center">
                                        <FaPhone className="w-4 h-4 mr-1" /> {student?.phone}
                                    </span>
                                    <span className="flex items-center">
                                        <FaMapMarkerAlt className="w-4 h-4 mr-1" /> {student?.address}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {normalizedCourseType === "theoretical" && (
                            <EvaluationSection
                                title="Theoretical Evaluation"
                                icon={FaBookOpen}
                                color="from-indigo-600 to-indigo-800"
                                criteria={THEORETICAL_CRITERIA}
                                scores={theoreticalScores}
                                setScores={setTheoreticalScores}
                                notes={theoNotes}
                                setNotes={setTheoNotes}
                            />
                        )}

                        {normalizedCourseType === "practical" && (
                            <EvaluationSection
                                title="Practical Evaluation"
                                icon={FaCar}
                                color="from-green-600 to-green-800"
                                criteria={PRACTICAL_CRITERIA}
                                scores={practicalScores}
                                setScores={setPracticalScores}
                                notes={practNotes}
                                setNotes={setPractNotes}
                            />
                        )}
                    </div>
                </div>
            </div>
        </InstructorLayout>
    );
}
