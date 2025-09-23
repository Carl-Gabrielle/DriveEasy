import { FaCheckCircle } from "react-icons/fa";

const requirements = [
    "Clear scan or photo of the PSA/NSO Certificate of Live Birth (original and photocopy must be presented during the in-person transaction)",
    "Clear scan or photo of a valid government-issued ID (original and photocopy must be presented during the in-person transaction)",
    "If married: Clear scan or photo of the PSA Marriage Contract (original and photocopy must be presented during the in-person transaction)",
    "One recent 2x2 ID picture (digital copy for upload; physical copy must be submitted in person)",
];

export default function RequirementsList({ title, message, submitted }) {
    if (submitted) {
        return (
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 rounded-full mb-6">
                    <FaCheckCircle className="text-emerald-600 h-10 w-10" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Documents Submitted
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Your application documents have been successfully submitted and are now in queue for review.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h2>
            {message && <p className="text-gray-700 mb-4">{message}</p>}
            <ul className="space-y-5">
                {requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 mt-1 h-6 w-6" />
                        <span className="text-gray-800">{req}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
