
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import FileUploadField from "@/Components/forms/FileUploadField";

export default function ApplicationForm({ applications, errors }) {
    const app = applications[0] || null;
    const [married, setMarried] = useState(false);

    const { data, setData, post, processing, reset } = useForm({
        birthCertificate: null,
        govId: null,
        idPicture: null,
        marriageContract: null,
    });

    const handleFileChange = (e) => setData(e.target.name, e.target.files[0]);
    const handleMarriedChange = (e) => {
        setMarried(e.target.checked);
        if (!e.target.checked) setData('marriageContract', null);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('student.applications.store'), {
            forceFormData: true,
            onSuccess: () => {
                reset();
                toast.success("Application Submitted Successfully", { duration: 3000 });
                setMarried(false);
            },
        });
    };

    return (
        <div className=" p-4">
            <form onSubmit={handleSubmit} className="space-y-6">
                <FileUploadField
                    label="Birth Certificate"
                    name="birthCertificate"
                    file={data.birthCertificate}
                    onChange={handleFileChange}
                    error={errors.birthCertificate}
                />
                <FileUploadField
                    label="Government ID"
                    name="govId"
                    file={data.govId}
                    onChange={handleFileChange}
                    error={errors.govId}
                />
                <FileUploadField
                    label="2x2 ID Picture"
                    name="idPicture"
                    file={data.idPicture}
                    onChange={handleFileChange}
                    error={errors.idPicture}
                />
                <div>
                    <label className="inline-flex items-center gap-2 font-medium text-gray-700">
                        <input
                            type="checkbox"
                            checked={married}
                            onChange={handleMarriedChange}
                            className="accent-indigo-600"
                        />
                        I am married
                    </label>
                    {married && (
                        <div className="mt-4">
                            <FileUploadField
                                label="Marriage Contract"
                                name="marriageContract"
                                file={data.marriageContract}
                                onChange={handleFileChange}
                                error={errors.marriageContract}
                            />
                        </div>
                    )}
                </div>
                <div className="pt-4 text-right">
                    <button
                        type="submit"
                        disabled={processing}
                        className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg shadow disabled:opacity-50 transition"
                    >
                        {processing
                            ? 'Submitting...'
                            : app?.status === 'rejected'
                                ? 'Resubmit Application'
                                : 'Submit Application'}
                    </button>
                </div>
            </form>
        </div>
    );
}
