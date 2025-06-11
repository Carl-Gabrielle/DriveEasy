import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { FaCheckCircle, FaUpload, FaUser } from 'react-icons/fa';

export default function Applications({ applications = [], success }) {
    const { errors } = usePage().props;

    const requirements = [
        "Clear scan or photo of the PSA/NSO Certificate of Live Birth (original and photocopy must be presented during the in-person transaction)",
        "Clear scan or photo of a valid government-issued ID (original and photocopy must be presented during the in-person transaction)",
        "If married: Clear scan or photo of the PSA Marriage Contract (original and photocopy must be presented during the in-person transaction)",
        "One recent 2x2 ID picture (digital copy for upload; physical copy must be submitted in person)",
    ];

    const [married, setMarried] = useState(false);
    const { data, setData, post, processing, reset } = useForm({
        birthCertificate: null,
        govId: null,
        idPicture: null,
        marriageContract: null,
    });

    const handleFileChange = (e) => {
        setData(e.target.name, e.target.files[0]);
    };

    const handleMarriedChange = (e) => {
        setMarried(e.target.checked);
        if (!e.target.checked) setData('marriageContract', null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('student.applications.store'), {
            forceFormData: true,
            onSuccess: () => {
                reset();
                setMarried(false);
            }
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Applications" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                        Application
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                Requirements Submission
                            </h2>
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
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                Submit Your Documents
                            </h2>

                            {applications.length > 0 ? (
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <svg
                                            className="h-6 w-6 text-yellow-500 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z"
                                            />
                                        </svg>
                                        <div className="text-sm">
                                            <p className="font-medium">You've already submitted an application.</p>
                                            <p className="mt-1 text-gray-700">
                                                To make changes or updates, please contact support or wait for your application to be reviewed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <FileUploadField
                                        label="Birth Certificate"
                                        name="birthCertificate"
                                        file={data.birthCertificate}
                                        onChange={handleFileChange}
                                        error={errors.birthCertificate}
                                    />
                                    <FileUploadField
                                        label="Government ID"
                                        name="govId"
                                        file={data.govId}
                                        onChange={handleFileChange}
                                        error={errors.govId}
                                    />
                                    <FileUploadField
                                        label="2x2 ID Picture"
                                        name="idPicture"
                                        file={data.idPicture}
                                        onChange={handleFileChange}
                                        error={errors.idPicture}
                                    />
                                    <div>
                                        <label className="inline-flex items-center gap-2 font-medium text-gray-700">
                                            <input
                                                type="checkbox"
                                                checked={married}
                                                onChange={handleMarriedChange}
                                                className="accent-indigo-600"
                                            />
                                            I am married
                                        </label>
                                        {married && (
                                            <div className="mt-4">
                                                <FileUploadField
                                                    label="Marriage Contract"
                                                    name="marriageContract"
                                                    file={data.marriageContract}
                                                    onChange={handleFileChange}
                                                    error={errors.marriageContract}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-4 text-right">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg shadow disabled:opacity-50 transition"
                                        >
                                            {processing ? 'Submitting...' : 'Submit Application'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <section className="space-y-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Submitted Application

                    </h1>
                    {applications.length > 0 ? (
                        <div className="space-y-6">
                            {applications.map((app) => (
                                <div
                                    key={app.id}
                                    className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 overflow-hidden"
                                >
                                    <div className="p-6">
                                        <div className='mb-6'>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                                    <FaUser className="text-sm" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800">{app.user?.name || 'N/A'}</h3>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500 flex items-center mt-1">
                                                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                Submitted {new Date(app.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
                                            <div className="bg-gray-50 p-3 rounded-lg">
                                                <p className="font-medium text-gray-500 mb-1">Contact</p>
                                                <p className="text-gray-900 font-semibold">{app.user?.phone || 'N/A'}</p>
                                            </div>
                                            <div className="bg-gray-50 p-3 rounded-lg">
                                                <p className="font-medium text-gray-500 mb-1">Address</p>
                                                <p className="text-gray-900 font-semibold">{app.user?.address || 'N/A'}</p>
                                            </div>
                                            <div className="bg-gray-50 p-3 rounded-lg">
                                                <p className="font-medium text-gray-500 mb-1">Status</p>
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                                                    {app.status || 'Pending'}
                                                </span>
                                            </div>
                                            <div className="bg-gray-50 p-3 rounded-lg">
                                                <p className="font-medium text-gray-500 mb-1">Account ID</p>
                                                <p className="text-gray-900 font-mono font-semibold">#{app.user?.id}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
                                        <h4 className="text-sm font-medium text-gray-700 mb-3">Attached Documents</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                            <ImageDisplay
                                                label="Birth Certificate"
                                                src={`/storage/${app.birth_certificate}`}
                                                className="hover:ring-2 hover:ring-blue-200 transition-all"
                                            />
                                            <ImageDisplay
                                                label="Government ID"
                                                src={`/storage/${app.gov_id}`}
                                                className="hover:ring-2 hover:ring-blue-200 transition-all"
                                            />
                                            <ImageDisplay
                                                label="ID Picture"
                                                src={`/storage/${app.id_picture}`}
                                                isCircle
                                                className="hover:ring-2 hover:ring-blue-200 transition-all"
                                            />
                                            {app.marriage_contract && (
                                                <ImageDisplay
                                                    label="Marriage Contract"
                                                    src={`/storage/${app.marriage_contract}`}
                                                    className="hover:ring-2 hover:ring-blue-200 transition-all"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h3 className="mt-2 text-lg font-medium text-gray-700">No applications submitted</h3>
                        </div>
                    )}
                </section>
            </div>
        </AuthenticatedLayout >
    );
}

function FileUploadField({ label, name, file, onChange, error }) {
    return (
        <div>
            <label className="block font-medium text-gray-700 mb-1">{label}</label>
            <div className="flex items-center gap-3 border-2 border-dashed border-gray-300 rounded-lg px-4 py-3 bg-gray-50 hover:bg-gray-100 transition">
                <FaUpload className="text-indigo-500 text-lg" />
                <span className="flex-grow text-sm text-gray-600 truncate">
                    {file ? file.name : 'No file chosen'}
                </span>
                <input
                    type="file"
                    name={name}
                    onChange={onChange}
                    className="hidden"
                    id={`file-${name}`}
                />
                <label
                    htmlFor={`file-${name}`}
                    className="cursor-pointer bg-indigo-100 text-indigo-700 text-sm px-3 py-1.5 rounded-md hover:bg-indigo-200 transition"
                >
                    Choose File
                </label>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

function ImageDisplay({ label, src, isCircle = false }) {
    return (
        <div>
            <p className="font-medium text-gray-700 mb-1">{label}:</p>
            <img
                src={src}
                alt={label}
                className={`${isCircle ? 'w-24 h-24 rounded-full' : 'w-40 h-auto rounded-md'} border shadow-sm object-cover`}
            />
        </div>
    );
}
