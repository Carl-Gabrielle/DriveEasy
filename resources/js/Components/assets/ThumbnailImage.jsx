import { FaTimes } from 'react-icons/fa';
import { useState } from "react";

export default function ThumbnailImage({ label, src, isCircle = false }) {
    const [showPreview, setShowPreview] = useState(false);
    return (
        <div className="text-center">
            <div
                onClick={() => setShowPreview(true)}
                className={`${isCircle ? 'rounded-full' : 'rounded'} w-16 h-16 bg-gray-100 border border-gray-200 overflow-hidden cursor-pointer hover:scale-105 transition`}
            >
                <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-md text-gray-500 mt-1">{label}</p>

            {showPreview && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-lg w-full">
                        <button
                            onClick={() => setShowPreview(false)}
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75"
                        >
                            <FaTimes className="w-4 h-4" />
                        </button>
                        <img
                            src={src}
                            alt={label}
                            className="w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
                        />
                        <p className="text-sm text-white text-center mt-2">{label}</p>
                    </div>
                </div>
            )}
        </div>
    );
}