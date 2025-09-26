import { FaCheckCircle, FaFileAlt, FaIdCard, FaRing, FaCamera } from "react-icons/fa";

const requirements = [
    {
        text: "Clear scan or photo of the PSA/NSO Certificate of Live Birth (original and photocopy must be presented during the in-person transaction)",
        icon: FaFileAlt
    },
    {
        text: "Clear scan or photo of a valid government-issued ID (original and photocopy must be presented during the in-person transaction)",
        icon: FaIdCard
    },
    {
        text: "If married: Clear scan or photo of the PSA Marriage Contract (original and photocopy must be presented during the in-person transaction)",
        icon: FaRing
    },
    {
        text: "One recent 2x2 ID picture (digital copy for upload; physical copy must be submitted in person)",
        icon: FaCamera
    }
];

export default function RequirementsList({ title, message, submitted }) {
    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-white to-gray-50/80 border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center backdrop-blur-sm">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-50 to-green-100 rounded-full mb-6 shadow-lg">
                        <FaCheckCircle className="text-emerald-500 h-12 w-12 drop-shadow-sm" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Documents Submitted
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg max-w-md mx-auto">
                        Your application documents have been successfully submitted and are now in queue for review.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></span>
                        <span className="text-emerald-700 font-medium text-sm">Under Review</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50/80 border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {title}
                    </h2>
                </div>

                {message && (
                    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 mb-6">
                        <p className="text-blue-700 text-sm leading-relaxed">{message}</p>
                    </div>
                )}

                <div className="grid gap-4">
                    {requirements.map((req, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-200 group border border-transparent hover:border-gray-100"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-sm">
                                <req.icon className="text-green-600 h-5 w-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors">
                                    {req.text}
                                </p>
                            </div>
                            <FaCheckCircle className="text-green-400 mt-1 h-5 w-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                        Please ensure all documents are clear and readable before submission
                    </div>
                </div>
            </div>
        </div>
    );
}