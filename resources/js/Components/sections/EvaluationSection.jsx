
import { useState, useEffect, useMemo, useCallback } from "react";

// --- HELPERS ---
const calculateTotal = (scores) =>
    Object.values(scores).reduce((a, b) => a + (Number(b) || 0), 0);

const getRemark = (scores, total) =>
    Object.values(scores).every((v) => v === "")
        ? ""
        : total >= 80
            ? "PASSED"
            : "FAILED";

// --- COMPONENTS ---
function ScoreInput({ label, value, onChange, max }) {
    return (
        <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <div className="relative">
                <input
                    type="number"
                    min="0"
                    max={max}
                    value={value}
                    onChange={(e) => {
                        let val = Number(e.target.value);
                        if (val > max) val = max;
                        if (val < 0) val = 0;
                        onChange(val);
                    }}
                    placeholder={`${max}%`}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg 
          focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
                <span className="absolute right-3 top-2 text-gray-400">%</span>
            </div>
        </div>
    );
}

export default function EvaluationSection({
    title,
    icon: Icon,
    color,
    criteria,
    scores,
    setScores,
    notes,
}) {
    const total = useMemo(() => calculateTotal(scores), [scores]);
    const remark = useMemo(() => getRemark(scores, total), [scores, total]);

    const handleChange = useCallback(
        (field, value) => {
            setScores((prev) => ({ ...prev, [field]: value }));
        },
        [setScores]
    );

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className={`px-6 py-4 bg-gradient-to-r ${color}`}>
                <h2 className="text-xl font-semibold text-white flex items-center">
                    <Icon className="w-5 h-5 mr-2" /> {title}
                </h2>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {criteria.map(([label, key, max]) => (
                        <ScoreInput
                            key={key}
                            label={label}
                            value={scores[key]}
                            onChange={(val) => handleChange(key, val)}
                            max={max}
                        />
                    ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">
                                {title} Summary
                            </h3>
                            <p className="text-sm text-gray-500">
                                Overall performance assessment
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-center">
                                <span className="block text-sm font-medium text-gray-500">
                                    Total Score
                                </span>
                                <span
                                    className={`text-2xl font-bold ${total >= 80 ? "text-green-600" : "text-red-600"
                                        }`}
                                >
                                    {total}%
                                </span>
                            </div>
                            <div className="h-10 border-l border-gray-200"></div>
                            <div className="text-center">
                                <span className="block text-sm font-medium text-gray-500">
                                    Status
                                </span>
                                <span
                                    className={`text-lg font-semibold ${remark === "PASSED" ? "text-green-600" : "text-red-600"
                                        }`}
                                >
                                    {remark}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Notes */}

                </div>
            </div>
        </div>
    );
}
