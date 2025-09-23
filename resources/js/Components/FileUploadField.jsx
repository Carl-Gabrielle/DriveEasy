import { FaUpload } from 'react-icons/fa';

export default function FileUploadField({ label, name, file, onChange, error }) {
    return (
        <div>
            <label className="block font-medium text-gray-700 mb-1">{label}</label>
            <div className="flex items-center gap-3 border-2 border-dashed border-gray-300 rounded-lg px-4 py-3 bg-gray-50 hover:bg-gray-100 transition">
                <FaUpload className="text-indigo-500 text-lg" />
                <span className="flex-grow text-sm text-gray-600 truncate">
                    {file ? file.name : 'No file chosen'}
                </span>
                <input
                    type="file"
                    name={name}
                    onChange={onChange}
                    className="hidden"
                    id={`file-${name}`}
                />
                <label
                    htmlFor={`file-${name}`}
                    className="cursor-pointer bg-indigo-100 text-indigo-700 text-sm px-3 py-1.5 rounded-md hover:bg-indigo-200 transition"
                >
                    Choose File
                </label>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
