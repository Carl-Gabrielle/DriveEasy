import InputLabel from "@/Components/ui/Input/InputLabel";

export default function CourseOptionCard({
    id,
    value,
    selectedValue,
    onChange,
    disabled,
    title,
    description,
    status,
}) {
    const isSelected = selectedValue === value;

    const statusColors = {
        completed: {
            dot: "bg-green-500",
            ping: "bg-green-400",
            badge: "bg-green-100 text-green-800",
            label: "Completed",
        },
        not_started: {
            dot: "bg-gray-500",
            ping: "bg-gray-400",
            badge: "bg-gray-100 text-gray-800",
            label: "Not Started",
        },
        available: {
            dot: "bg-yellow-500",
            ping: "bg-yellow-400",
            badge: "bg-yellow-100 text-yellow-800",
            label: "Available",
        },
    };

    const colors = statusColors[status] || statusColors.available;

    return (
        <InputLabel
            htmlFor={id}
            className={`relative flex items-start gap-4 p-5 border rounded-lg cursor-pointer transition
                ${isSelected ? "border-indigo-600 bg-indigo-50" : "hover:border-indigo-300"}
                ${status === "completed" ? "opacity-60 cursor-not-allowed" : ""}
            `}
        >
            <input
                type="radio"
                id={id}
                name="course"
                value={value}
                checked={isSelected}
                onChange={onChange}
                disabled={disabled}
                className="h-5 w-5 text-indigo-600 mt-1"
            />

            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>

                {status === "not_started" && (
                    <div className="mt-3 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg
                                    className="h-6 w-6 text-indigo-500"
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
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-indigo-700 font-semibold">
                                    Registration successful for {title}.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {status && (
                <div className="absolute top-3 right-3 flex items-center gap-1">
                    <span className={`relative flex h-2 w-2 ${colors.dot} rounded-full`}>
                        <span
                            className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${colors.ping}`}
                        ></span>
                    </span>
                    <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors.badge}`}
                    >
                        {colors.label}
                    </span>
                </div>
            )}
        </InputLabel>
    );
}
