import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { FaCheckCircle, FaUpload } from 'react-icons/fa';
import { useState } from 'react';

export default function Application() {
    const requirements = [
        "Original and one (1) photocopy of the PSA/NSO Certificate of Live Birth",
        "Original and one (1) photocopy of valid government-issued identification card",
        "If married: Original and one (1) photocopy of the PSA marriage contract",
        "One piece of 2x2 ID picture",
        // Removed "Printed copy of Theoretical Driving School Student List"
    ];

    const [formData, setFormData] = useState({
        birthCertificate: null,
        govId: null,
        marriageContract: null,
        idPicture: null,
        // Removed studentList from formData
    });

    const [married, setMarried] = useState(false);

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files[0] || null,
        }));
    };

    const handleMarriedChange = (e) => {
        setMarried(e.target.checked);
        if (!e.target.checked) {
            setFormData((prev) => ({ ...prev, marriageContract: null }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.birthCertificate || !formData.govId || !formData.idPicture) {
            alert("Please upload all required documents.");
            return;
        }
        if (married && !formData.marriageContract) {
            alert("Please upload your marriage contract.");
            return;
        }

        const submissionData = new FormData();
        Object.entries(formData).forEach(([key, file]) => {
            if (file) submissionData.append(key, file);
        });

        alert("Application submitted successfully!");
    };

    return (
        <AuthenticatedLayout>
            <Head title="Application Requirements" />

            <div className="py-12">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                        Requirements Submission
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Left: Requirements List */}
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <p className="text-gray-700 mb-6">
                                Please prepare the following documents to complete your application:
                            </p>
                            <ul className="space-y-5">
                                {requirements.map((req, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-green-500 mt-1 h-6 w-6" />
                                        <span className="text-gray-800">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Submission Form */}
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                Submit Your Documents
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <FileUploadField
                                    label="Original and photocopy of PSA/NSO Certificate of Live Birth"
                                    name="birthCertificate"
                                    file={formData.birthCertificate}
                                    onChange={handleFileChange}
                                    required
                                />

                                <FileUploadField
                                    label="Original and photocopy of valid government-issued ID"
                                    name="govId"
                                    file={formData.govId}
                                    onChange={handleFileChange}
                                    required
                                />

                                <div>
                                    <label className="inline-flex items-center gap-2 cursor-pointer text-gray-700 font-medium mb-2">
                                        <input
                                            type="checkbox"
                                            checked={married}
                                            onChange={handleMarriedChange}
                                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                                        />
                                        I am married
                                    </label>
                                    {married && (
                                        <FileUploadField
                                            label="Original and photocopy of PSA Marriage Contract"
                                            name="marriageContract"
                                            file={formData.marriageContract}
                                            onChange={handleFileChange}
                                            required
                                        />
                                    )}
                                </div>

                                <FileUploadField
                                    label="One piece of 2x2 ID picture"
                                    name="idPicture"
                                    file={formData.idPicture}
                                    onChange={handleFileChange}
                                    required
                                />

                                <div className="pt-4 text-right">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                                    >
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function FileUploadField({ label, name, file, onChange, required }) {
    return (
        <div>
            <label className="block mb-2 font-medium text-gray-700">
                {label} {required && <span className="text-red-600">*</span>}
            </label>
            <label className="flex items-center gap-3 cursor-pointer rounded-lg border border-gray-300 px-4 py-3 hover:border-indigo-500 transition">
                <FaUpload className="text-indigo-600 w-6 h-6" />
                <span className="text-gray-700 flex-grow">
                    {file ? file.name : "Click to upload file"}
                </span>
                <input
                    type="file"
                    name={name}
                    onChange={onChange}
                    className="hidden"
                    accept="image/*,.pdf,.doc,.docx"
                    required={required}
                />
            </label>
        </div>
    );
}
