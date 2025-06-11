import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { IoDocumentOutline } from "react-icons/io5";

export default function ManageMaterials({ materials = [], flash }) {
    const { data, setData, post, reset, errors, progress } = useForm({
        title: '',
        type: 'pdf',
        link: '',
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('type', data.type);

        if (data.type === 'pdf' && data.file) {
            formData.append('file', data.file);
        } else {
            formData.append('link', data.link);
        }

        post(route('admin.materials.store'), {
            data: formData,
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    const { delete: destroy } = useForm();

    const handleDelete = (material) => {
        if (window.confirm('Are you sure you want to delete this material?')) {
            destroy(route('admin.materials.destroy', material.id));
        }
    };
    const getYouTubeEmbedUrl = (url) => {
        try {
            const urlObj = new URL(url);
            const videoId = urlObj.searchParams.get('v') || urlObj.pathname.split('/').pop();
            return `https://www.youtube.com/embed/${videoId}`;
        } catch {
            return null;
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Materials" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Learning Materials</h1>
                                <p className="mt-2 text-gray-600">Upload and manage course materials including PDFs and videos</p>
                            </div>
                        </div>
                    </div>

                    {flash?.success && (
                        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-green-700">{flash.success}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <div className="bg-white shadow rounded-lg overflow-hidden">
                                <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
                                    <h3 className="text-lg font-medium text-gray-900">Add New Material</h3>
                                </div>
                                <div className="px-6 py-5">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                                                Material Type
                                            </label>
                                            <select
                                                id="type"
                                                value={data.type}
                                                onChange={(e) => setData('type', e.target.value)}
                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                            >
                                                <option value="pdf">PDF Document</option>
                                                <option value="video">YouTube Video</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                id="title"
                                                value={data.title}
                                                onChange={(e) => setData('title', e.target.value)}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                placeholder="Enter material title"
                                            />
                                            {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title}</p>}
                                        </div>

                                        {data.type === 'pdf' ? (
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    PDF File
                                                </label>
                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                    <div className="space-y-1 text-center">
                                                        <svg
                                                            className="mx-auto h-12 w-12 text-gray-400"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            viewBox="0 0 48 48"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <div className="flex text-sm text-gray-600">
                                                            <button
                                                                type="button"
                                                                onClick={() => document.getElementById('file-upload').click()}
                                                                className="cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full p-2 text-left"
                                                            >
                                                                <label htmlFor="file-upload" className="cursor-pointer">
                                                                    Upload a file
                                                                </label>
                                                                <input
                                                                    id="file-upload"
                                                                    name="file-upload"
                                                                    type="file"
                                                                    accept="application/pdf"
                                                                    onChange={(e) => setData('file', e.target.files[0])}
                                                                    className="sr-only"
                                                                />
                                                            </button>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PDF up to 10MB</p>
                                                    </div>
                                                </div>
                                                {data.file && (
                                                    <p className="mt-2 text-sm text-gray-600">
                                                        Selected: {data.file.name}
                                                    </p>
                                                )}
                                                {errors.file && <p className="mt-2 text-sm text-red-600">{errors.file}</p>}
                                            </div>
                                        ) : (
                                            <div>
                                                <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">
                                                    YouTube URL
                                                </label>
                                                <input
                                                    type="text"
                                                    id="link"
                                                    value={data.link}
                                                    onChange={(e) => setData('link', e.target.value)}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="https://www.youtube.com/watch?v=..."
                                                />
                                                {errors.link && <p className="mt-2 text-sm text-red-600">{errors.link}</p>}
                                            </div>
                                        )}
                                        {progress && (
                                            <div className="pt-1">
                                                <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-blue-200">
                                                    <div
                                                        style={{ width: `${progress.percentage}%` }}
                                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                                    ></div>
                                                </div>
                                                <span className="text-sm text-gray-600">
                                                    Uploading: {progress.percentage}%
                                                </span>
                                            </div>
                                        )}

                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Upload Material
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="bg-white shadow rounded-lg overflow-hidden">
                                <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
                                    <h3 className="text-lg font-medium text-gray-900">Course Materials</h3>
                                </div>
                                <div className="px-6 py-4">
                                    {materials.length === 0 ? (
                                        <div className="text-center py-12">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    vectorEffect="non-scaling-stroke"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                                />
                                            </svg>
                                            <h3 className="mt-2 text-sm font-medium text-gray-900">No materials</h3>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Get started by uploading a new learning material.
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {materials.sort((a, b) => {
                                                if (a.type === 'pdf' && b.type === 'video') return -1;
                                                if (a.type === 'video' && b.type === 'pdf') return 1;
                                                return 0;
                                            }).map((material, index, array) => (
                                                <>
                                                    {material.type === 'pdf' && (index === 0 || array[index - 1].type !== 'pdf') && (
                                                        <div className="col-span-full">
                                                            <h2 className="text-xl font-semibold text-zinc-700 mb-4">📘 LTO Reviewers (PDF)</h2>
                                                        </div>
                                                    )}

                                                    {material.type === 'video' && (index === 0 || array[index - 1].type !== 'video') && (
                                                        <div className="col-span-full">
                                                            <h2 className="text-xl font-semibold text-gray-700 mb-4">🎥 Driving Tutorial Videos</h2>
                                                        </div>
                                                    )}

                                                    <div key={material.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                                                        <div className="p-4">
                                                            <div className="flex items-start justify-between">
                                                                <div>
                                                                    <p className="text-lg font-semibold text-zinc-700 truncate">
                                                                        {material.title}
                                                                    </p>
                                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${material.type === 'pdf'
                                                                        ? 'bg-blue-100 text-blue-800'
                                                                        : 'bg-red-100 text-red-800'
                                                                        }`}>
                                                                        {material.type === 'pdf' ? 'PDF' : 'Video'}
                                                                    </span>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    className="text-gray-400 hover:text-gray-500"
                                                                    onClick={() => handleDelete(material)}
                                                                >
                                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                                    </svg>
                                                                </button>
                                                            </div>

                                                            {material.type === 'video' ? (
                                                                getYouTubeEmbedUrl(material.link) ? (
                                                                    <div className="mt-4 aspect-w-16 aspect-h-9">
                                                                        <iframe
                                                                            src={getYouTubeEmbedUrl(material.link)}
                                                                            className="w-full h-48 rounded"
                                                                            allowFullScreen
                                                                            title={material.title}
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div className="mt-4 p-3 bg-yellow-50 rounded-md">
                                                                        <p className="text-sm text-yellow-700">Invalid YouTube link format</p>
                                                                    </div>
                                                                )
                                                            ) : (
                                                                <div className="mt-4 flex items-start bg-gray-50 rounded-md p-4">
                                                                    <div className="flex items-start">
                                                                        <svg className="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                                                        </svg>
                                                                        <div className="ml-4">
                                                                            <a
                                                                                href={material.link}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                                                            >
                                                                                View PDF
                                                                            </a>
                                                                            <p className="text-xs text-gray-500">Click to open</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                                                                <span>Uploaded: {new Date(material.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                                            </div>
                                                        </div>
                                                    </div >
                                                </>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout >
    );
}