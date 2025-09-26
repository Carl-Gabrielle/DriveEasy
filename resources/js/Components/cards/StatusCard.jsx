import { Link } from "@inertiajs/react";

export default function StatusCard({ title, value, icon, color, link, linkLabel, progress }) {
    return (
        <div className={`bg-white rounded-xl shadow-sm p-6 border-l-4 border-${color}-500`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
                </div>
                <div className={`bg-${color}-50 p-3 rounded-lg`}>{icon}</div>
            </div>

            {link && (
                <Link
                    href={link}
                    className={`inline-block w-full mt-4 bg-${color}-50 text-${color}-600 text-center px-4 py-2 rounded-lg font-medium hover:bg-${color}-100 transition`}
                >
                    {linkLabel}
                </Link>
            )}

            {progress !== undefined && (
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div
                        className={`bg-${color}-500 h-2 rounded-full`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            )}
        </div>
    );
}
