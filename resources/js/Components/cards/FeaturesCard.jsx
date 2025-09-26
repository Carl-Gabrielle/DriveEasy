export default function FeatureCard({ icon, fromColor, toColor, title, description }) {
    return (
        <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl border border-white transition-all duration-300 transform hover:-translate-y-2">
            <div
                className={`w-14 h-14 bg-gradient-to-br ${fromColor} ${toColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}
