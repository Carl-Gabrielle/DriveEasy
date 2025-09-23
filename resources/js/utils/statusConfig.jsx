import { MdOutlinePendingActions } from "react-icons/md";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export const statusConfig = {
    pending: {
        bg: "bg-yellow-50",
        border: "border-yellow-400",
        text: "text-yellow-800",
        icon: <MdOutlinePendingActions className="text-yellow-500 text-lg flex-shrink-0" />,
        title: "You've already submitted an application.",
        message: "To make changes, contact support or wait for review.",
    },
    approved: {
        bg: "bg-green-50",
        border: "border-green-400",
        text: "text-green-800",
        icon: <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />,
        title: "Your application has been approved!",
        message: "You're all set! Proceed to Course Registration.",
    },
    rejected: {
        bg: "bg-red-50",
        border: "border-red-400",
        text: "text-red-800",
        icon: <FaTimesCircle className="text-red-500 text-lg flex-shrink-0" />,
        title: "Your application has been rejected.",
        message: "Please review feedback and resubmit.",
    },
};
