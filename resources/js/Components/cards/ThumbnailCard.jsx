export default function ThumbnailCard() {
    return (
        <div className="max-w-md w-full ">
            <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-3xl shadow-2xl shadow-blue-500/20 border border-white/10 p-8 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/20 to-transparent">
                    <div className="flex space-x-8 animate-move-left">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-16 h-1 bg-yellow-400 rounded-full" />
                        ))}
                    </div>
                </div>

                {/* <div className="absolute hidden sm:block top-1/2 right-6 transform -translate-y-1/2">
                    <div className="relative animate-float">
                        <div className="relative w-32 h-14">
                            <div className="absolute top-0 left-4 w-24 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded-t-2xl shadow-lg" />

                            <div className="absolute top-4 w-full h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-xl" />

                            <div className="absolute top-1 left-5 w-10 h-4 bg-blue-300/40 rounded-t-lg backdrop-blur-sm border border-blue-400/30" />

                            <div className="absolute top-1 right-5 w-10 h-4 bg-blue-300/40 rounded-t-lg backdrop-blur-sm border border-blue-400/30" />

                            <div className="absolute top-2 left-16 w-12 h-3 bg-blue-300/30 rounded-sm backdrop-blur-sm" />

                            <div className="absolute top-6 -left-1 w-3 h-2 bg-yellow-300 rounded-r-full shadow-lg shadow-yellow-400/50">
                                <div className="absolute inset-0 bg-white/30 rounded-r-full animate-pulse" />
                            </div>

                            <div className="absolute top-6 -right-1 w-3 h-2 bg-red-500 rounded-l-full shadow-lg shadow-red-500/50" />

                            <div className="absolute -bottom-2 left-3 w-7 h-7 bg-gray-800 rounded-full border-2 border-gray-900 shadow-2xl">
                                <div className="absolute inset-1 bg-gray-700 rounded-full">
                                    <div className="absolute inset-1 bg-gray-600 rounded-full" />
                                    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                                </div>
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-900/50 transform -translate-y-1/2" />
                                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-900/50 transform -translate-x-1/2" />
                            </div>

                            <div className="absolute -bottom-2 right-3 w-7 h-7 bg-gray-800 rounded-full border-2 border-gray-900 shadow-2xl">
                                <div className="absolute inset-1 bg-gray-700 rounded-full">
                                    <div className="absolute inset-1 bg-gray-600 rounded-full" />
                                    <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                                </div>
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-900/50 transform -translate-y-1/2" />
                                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-900/50 transform -translate-x-1/2" />
                            </div>

                            <div className="absolute top-7 left-10 w-12 h-0.5 bg-red-400/50 rounded-full" />
                            <div className="absolute top-8 left-12 w-8 h-0.5 bg-red-400/30 rounded-full" />

                            <div className="absolute top-7 right-12 w-2 h-1 bg-gray-400 rounded-full shadow-sm" />

                            <div className="absolute top-2 left-12 w-4 h-4 bg-gradient-to-br from-gray-100 to-gray-300 rounded-sm shadow-inner flex items-center justify-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full" />
                            </div>

                            <div className="absolute bottom-3 -right-2 w-1 h-1 bg-gray-600 rounded-l-full">
                                <div className="absolute -left-1 top-1/2 w-2 h-0.5 bg-gray-700 transform -translate-y-1/2" />
                            </div>
                        </div>

                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                            <div className="flex space-x-1">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-2 h-0.5 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="relative z-10">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                        <span className="text-white/80 text-sm font-medium">Certified Instructors</span>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4">
                        Your Journey,
                        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Elevated
                        </span>
                    </h2>

                    <p className="text-white/70 text-lg mb-6 leading-relaxed">
                        Manage your driving school with ease — from student onboarding to certification — all in one powerful dashboard.
                    </p>

                    <div className="space-y-3 mb-8">
                        {[
                            { icon: "👨‍🎓", text: "Student Management " },
                            { icon: "📅", text: "Schedule Management " },
                            { icon: "✅", text: "Course Approval " },
                            { icon: "📜", text: "Certification Issue s" }
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3 group">
                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                                    <span className="text-sm">{feature.icon}</span>
                                </div>
                                <span className="text-white/80 font-medium">{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">10+</div>
                            <div className="text-white/60 text-sm">Scheduled Rides</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">99%</div>
                            <div className="text-white/60 text-sm">On-Time Sessions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">5+</div>
                            <div className="text-white/60 text-sm"> Instructors</div>
                        </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                        Start Your Journey
                    </button>
                </div>

                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl" />
            </div>


            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes moveLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-128px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-move-left {
                    animation: moveLeft 2s linear infinite;
                }
            `}</style>
        </div>
    );
}