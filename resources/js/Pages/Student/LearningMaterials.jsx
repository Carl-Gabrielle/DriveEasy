import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function LearningMaterials() {
    const reviewerFiles = [
        { title: 'LTO Reviewer - Basic Driving', url: '/reviewers/lto-basic-driving.pdf' },
        { title: 'LTO Reviewer - Road Signs', url: '/reviewers/lto-road-signs.pdf' },
    ];

    const videoLinks = [
        { title: 'How to Drive a Car - Beginner Tutorial', url: 'https://www.youtube.com/watch?v=example1' },
        { title: 'How to Ride a Motorcycle - Step by Step', url: 'https://www.youtube.com/watch?v=example2' },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Learning Materials" />
            <div className="py-12">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow rounded-lg p-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">Learning Materials</h1>
                        <p className="text-gray-600 mb-8">
                            Access official LTO reviewers and helpful video tutorials to improve your driving skills.
                        </p>

                        {/* LTO Reviewer Section */}
                        <div className="mb-10">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">📘 LTO Reviewers (PDF)</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {reviewerFiles.map((file, index) => (
                                    <a
                                        key={index}
                                        href={file.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-gray-200 p-4 rounded-lg hover:bg-gray-50 transition"
                                    >
                                        <div className="font-medium text-blue-600">{file.title}</div>
                                        <p className="text-sm text-gray-500">Click to download</p>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Driving Tutorial Videos */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">🎥 Driving Tutorial Videos</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {videoLinks.map((video, index) => (
                                    <a
                                        key={index}
                                        href={video.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-gray-200 p-4 rounded-lg hover:bg-gray-50 transition"
                                    >
                                        <div className="font-medium text-blue-600">{video.title}</div>
                                        <p className="text-sm text-gray-500">Watch on YouTube</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
