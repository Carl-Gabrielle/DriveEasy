import ApplicationLogo from '@/Components/assets/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className=" overflow-scroll sm:overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 border  w-full">
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-0   p-5">
                {children}
            </div>
        </div>
    );
}
