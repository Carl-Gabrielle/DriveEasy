import InstructorLayout from '@/Layouts/InstructorLayout';
import { Head, useForm, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function EvaluateStudents({ student, courseType = '', errors }) {
    const normalizedCourseType = courseType.toLowerCase();

    const { data, setData, post, processing } = useForm({
        student_id: student?.id,
        course_type: normalizedCourseType,
        scores: {},
        instructor_notes: '',
    });

    const [theoreticalScores, setTheoreticalScores] = useState({
        roadSigns: "",
        trafficRules: "",
        defensiveDriving: "",
        courtesy: "",
        laws: "",
        responsibilities: "",
        emergencies: "",
    });

    const [practicalScores, setPracticalScores] = useState({
        preDrive: "",
        starting: "",
        movingStopping: "",
        turning: "",
        lane: "",
        parking: "",
        reversing: "",
        obeyingSigns: "",
        defensive: "",
    });

    const [theoIntervention, setTheoIntervention] = useState("");
    const [practIntervention, setPractIntervention] = useState("");

    useEffect(() => {
        if (errors) {
            Object.entries(errors).forEach(([key, value]) => {
                toast.error(value);
            });
        }
    }, [errors]);

    const calculateTotal = (scores) => {
        return Object.values(scores).reduce((a, b) => a + (Number(b) || 0), 0);
    };

    const totalTheoretical = calculateTotal(theoreticalScores);
    const totalPractical = calculateTotal(practicalScores);

    const getRemark = (total) => {
        if (Object.values(theoreticalScores).every(val => val === "")) return "";
        return total >= 80 ? "PASSED" : "FAILED";
    };

    const theoRemark = getRemark(totalTheoretical);
    const practRemark = getRemark(totalPractical);

    const handleTheoChange = (field, value) => {
        const numValue = value === "" ? "" : Math.min(100, Math.max(0, parseInt(value) || 0));
        const newScores = { ...theoreticalScores, [field]: numValue };
        setTheoreticalScores(newScores);
        setData('scores', newScores);
    };

    const handlePractChange = (field, value) => {
        const numValue = value === "" ? "" : Math.min(100, Math.max(0, parseInt(value) || 0));
        const newScores = { ...practicalScores, [field]: numValue };
        setPracticalScores(newScores);
        setData('scores', newScores);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const allScores = normalizedCourseType === 'theoretical' ? theoreticalScores : practicalScores;

        const processedScores = Object.fromEntries(
            Object.entries(allScores).map(([key, value]) => [key, value === "" ? 0 : parseInt(value) || 0])
        );

        const totalScore = Object.values(processedScores).reduce((sum, score) => sum + score, 0);
        const remark = totalScore >= 80 ? "PASSED" : "FAILED";
        const notes = normalizedCourseType === 'theoretical' ? theoIntervention : practIntervention;

        if (totalScore === 0) {
            toast.error('Please enter at least one score');
            return;
        }

        setData({
            student_id: student?.id,
            course_type: normalizedCourseType,
            scores: processedScores,
            total_score: totalScore,
            remark: remark,
            instructor_notes: notes || null,
        });


        post(route('instructor.evaluateStudents.store'), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Evaluation submitted successfully!');
                alert('Evaluation has been successfully submitted!');
                setTheoreticalScores({
                    roadSigns: "",
                    trafficRules: "",
                    defensiveDriving: "",
                    courtesy: "",
                    laws: "",
                    responsibilities: "",
                    emergencies: "",
                });

                setPracticalScores({
                    preDrive: "",
                    starting: "",
                    movingStopping: "",
                    turning: "",
                    lane: "",
                    parking: "",
                    reversing: "",
                    obeyingSigns: "",
                    defensive: "",
                });

                setTheoIntervention("");
                setPractIntervention("");
                setData('scores', {});
                setData('instructor_notes', '');
            },
            onError: (errors) => {
                Object.values(errors).forEach(error => toast.error(error));
            }
        });

    };


    return (
        <InstructorLayout>
            <Head title={`Evaluate ${student?.name}`} />
            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Student Evaluation</h1>
                            <p className="text-gray-500 mt-1">Comprehensive assessment dashboard</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <button
                                onClick={handleSubmit}
                                disabled={processing}
                                className={`px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm ${processing ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {processing ? 'Submitting...' : 'Save Evaluation'}
                            </button>
                        </div>
                    </div>

                    {/* Student Info Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex-shrink-0">
                                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                    {student?.name.charAt(0)}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">{student?.name}</h2>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mt-1">
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {student?.phone}
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {student?.address}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Evaluation Sections */}
                    <div className="space-y-8">
                        {/* Theoretical Evaluation */}
                        {normalizedCourseType === 'theoretical' && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 px-6 py-4">
                                    <h2 className="text-xl font-semibold text-white flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Theoretical Evaluation
                                    </h2>
                                </div>

                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            ["Road Traffic Signs and Markings", "roadSigns", "15%"],
                                            ["Traffic Rules and Regulations", "trafficRules", "15%"],
                                            ["Defensive Driving Principles", "defensiveDriving", "15%"],
                                            ["Road Courtesy and Proper Attitude", "courtesy", "10%"],
                                            ["Land Transportation Laws", "laws", "15%"],
                                            ["Duties and Responsibilities of Drivers", "responsibilities", "15%"],
                                            ["Emergency Situations and First Aid", "emergencies", "15%"],
                                        ].map(([label, key, placeholder]) => (
                                            <div key={key} className="space-y-1">
                                                <label className="block text-sm font-medium text-gray-700">{label}</label>
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="100"
                                                        placeholder={placeholder}
                                                        value={theoreticalScores[key]}
                                                        onChange={(e) => handleTheoChange(key, e.target.value)}
                                                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                                    />
                                                    <span className="absolute right-3 top-2 text-gray-400">%</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900">Theoretical Summary</h3>
                                                <p className="text-sm text-gray-500">Overall performance assessment</p>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="text-center">
                                                    <span className="block text-sm font-medium text-gray-500">Total Score</span>
                                                    <span className={`text-2xl font-bold ${totalTheoretical >= 80 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {totalTheoretical}%
                                                    </span>
                                                </div>
                                                <div className="h-10 border-l border-gray-200"></div>
                                                <div className="text-center">
                                                    <span className="block text-sm font-medium text-gray-500">Status</span>
                                                    <span className={`text-lg font-semibold ${theoRemark === "PASSED" ? 'text-green-600' : 'text-red-600'}`}>
                                                        {theoRemark}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Instructor Notes</label>
                                            <textarea
                                                rows="3"
                                                value={theoIntervention}
                                                onChange={(e) => setTheoIntervention(e.target.value)}
                                                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                                placeholder="Enter learning interventions or notes for theoretical evaluation..."
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Practical Evaluation */}
                        {normalizedCourseType === 'practical' && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="bg-gradient-to-r from-green-600 to-green-800 px-6 py-4">
                                    <h2 className="text-xl font-semibold text-white flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        Practical Evaluation
                                    </h2>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            ["Pre-Drive Checks", "preDrive", "10%"],
                                            ["Starting the Vehicle", "starting", "10%"],
                                            ["Moving and Stopping", "movingStopping", "10%"],
                                            ["Turning and U-Turns", "turning", "10%"],
                                            ["Lane Discipline", "lane", "10%"],
                                            ["Parking Skills", "parking", "10%"],
                                            ["Reversing", "reversing", "10%"],
                                            ["Obedience to Traffic Signs & Laws", "obeyingSigns", "15%"],
                                            ["Defensive Driving on the Road", "defensive", "15%"],
                                        ].map(([label, key, placeholder]) => (
                                            <div key={key} className="space-y-1">
                                                <label className="block text-sm font-medium text-gray-700">{label}</label>
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        max="100"
                                                        min="0"
                                                        placeholder={placeholder}
                                                        value={practicalScores[key]}
                                                        onChange={(e) => handlePractChange(key, e.target.value)}
                                                        className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                                                    />
                                                    <span className="absolute right-3 top-2 text-gray-400">%</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900">Practical Summary</h3>
                                                <p className="text-sm text-gray-500">On-road performance assessment</p>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="text-center">
                                                    <span className="block text-sm font-medium text-gray-500">Total Score</span>
                                                    <span className={`text-2xl font-bold ${totalPractical >= 80 ? 'text-green-600' : 'text-red-600'}`}>
                                                        {totalPractical}%
                                                    </span>
                                                </div>
                                                <div className="h-10 border-l border-gray-200"></div>
                                                <div className="text-center">
                                                    <span className="block text-sm font-medium text-gray-500">Status</span>
                                                    <span className={`text-lg font-semibold ${practRemark === "PASSED" ? 'text-green-600' : 'text-red-600'}`}>
                                                        {practRemark}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Instructor Notes
                                            </label>
                                            <textarea
                                                rows="3"
                                                value={practIntervention}
                                                onChange={(e) => setPractIntervention(e.target.value)}
                                                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                                                placeholder="Enter learning interventions or notes for practical evaluation..."
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </InstructorLayout>
    );
}