import ApplicationLogo from '@/Components/assets/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    {/* <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
                        <span className="bg-indigo-600 text-white px-6 py-2 rounded-tr-3xl rounded-bl-3xl shadow-md">
                            Drive<span className="text-slate-100">Easy</span>
                        </span>
                    </h1> */}

                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
