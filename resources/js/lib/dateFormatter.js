
export function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export function formatTime(date) {
    return new Date(date).toLocaleTimeString("en-PH", {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
}

export function formatDateTime(date) {
    return `${formatDate(date)} ${formatTime(date)}`;
}
