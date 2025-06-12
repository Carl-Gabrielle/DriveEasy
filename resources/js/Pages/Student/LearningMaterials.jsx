import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function LearningMaterials({ materials = [] }) {

    const getYouTubeEmbedUrl = (url) => {
        try {
            const urlObj = new URL(url);
            const videoId = urlObj.searchParams.get('v') || urlObj.pathname.split('/').pop();
            return `https://www.youtube.com/embed/${videoId}`;
        } catch {
            return null;
        }
    };

    const pdfMaterials = materials.filter(material => material.type === 'pdf');
    const videoMaterials = materials.filter(material => material.type === 'video');

    return (
        <AuthenticatedLayout>
            <Head title="Learning Materials" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-white shadow rounded-lg p-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">Learning Materials</h1>
                        <p className="text-gray-600 mb-8">
                            Access official LTO reviewers and helpful video tutorials to improve your driving skills.
                        </p>

                        <div className="mb-10">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">📘 LTO Reviewers (PDF)</h2>
                            {pdfMaterials.length === 0 ? (
                                <div className="text-center py-6">
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
                                    <h3 className="mt-2 text-sm font-medium text-gray-900">No PDF materials available</h3>
                                    <p className="mt-1 text-sm text-gray-500">Please check back later.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {pdfMaterials.map((material, index) => (
                                        <a
                                            key={index}
                                            href={material.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-gray-200 p-4 rounded-lg hover:bg-gray-50 transition"
                                        >
                                            <div className="font-medium text-indigo-600">{material.title}</div>
                                            <p className="text-sm text-gray-500">{material.description}</p>
                                            <p className="text-sm text-gray-500 mt-1">Click to download</p>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="mb-10">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">🎥 Driving Tutorial Videos</h2>
                            {videoMaterials.length === 0 ? (
                                <div className="text-center py-6">
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
                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <h3 className="mt-2 text-sm font-medium text-gray-900">No video materials available</h3>
                                    <p className="mt-1 text-sm text-gray-500">Please check back later.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {videoMaterials.map((material, index) => (
                                        <div key={index} className="border border-gray-200 p-4 rounded-lg hover:bg-gray-50 transition">
                                            <div className="font-medium text-indigo-600">{material.title}</div>
                                            <p className="text-sm text-gray-500">{material.description}</p>

                                            {getYouTubeEmbedUrl(material.link) ? (
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
                                            )}

                                            <a
                                                href={material.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 cursor-pointer inline-block text-sm text-gray-500 hover:underline"
                                            >
                                                Watch on YouTube
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}