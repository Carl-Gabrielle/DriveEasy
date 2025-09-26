import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function DashboardHero({ user }) {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                        <HiOutlineAcademicCap className="w-8 h-8" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
                        <p className="text-blue-100 mt-1">
                            Ready to continue your driving journey?
                        </p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                        <p className="text-sm text-blue-200">Student ID</p>
                        <p className="font-mono font-bold">
                            {user.id?.toString().padStart(6, "0")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
