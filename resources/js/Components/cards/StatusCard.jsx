import { Link } from "@inertiajs/react";

export default function StatusCard({
    title,
    value,
    icon,
    borderColor,
    bgColor,
    textColor,
    hoverBg,
    link,
    linkLabel,
    progress,
}) {
    return (
        <div className={`bg-white rounded-xl shadow-sm p-6 border-l-4 ${borderColor}`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
                </div>
                <div className={`${bgColor} p-3 rounded-lg`}>{icon}</div>
            </div>

            {link && (
                <Link
                    href={link}
                    className={`inline-block w-full mt-4 ${bgColor} ${textColor} text-center px-4 py-2 rounded-lg font-medium ${hoverBg} transition`}
                >
                    {linkLabel}
                </Link>
            )}

            {progress !== undefined && (
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div
                        className={`${borderColor.replace("border-", "bg-")} h-2 rounded-full`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            )}
        </div>
    );
}
