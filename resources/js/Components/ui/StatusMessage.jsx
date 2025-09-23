import { statusConfig } from '@/utils/statusConfig.jsx';

export default function StatusMessage({ app }) {
    const config = statusConfig[app.status] || statusConfig.pending;

    return (
        <div className={`group relative overflow-hidden rounded-lg border-l-4 p-5 transition-all duration-300 hover:shadow-md ${config.bg} ${config.border} ${config.text}`}>
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-white bg-opacity-50 flex items-center justify-center">
                        {config.icon}
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900 text-base">{config.title}</h3>
                        <span
                            className={`inline-block w-2 h-2 rounded-full ${app.status === 'approved'
                                ? 'bg-emerald-500'
                                : app.status === 'pending'
                                    ? 'bg-amber-500'
                                    : 'bg-gray-500'
                                }`}
                        />
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">{config.message}</p>

                    {app.status === 'approved' && (
                        <div className="mt-3">
                            <a
                                href={route('course-registration.index')}
                                className="group inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                            >
                                Proceed to Course Registration
                                <svg
                                    className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 
                       010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 
                       11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 
                       0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
