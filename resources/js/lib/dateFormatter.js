
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

export function isToday(date) {
    const inputDate = new Date(date);
    const today = new Date();

    const inputManila = new Date(inputDate.toLocaleString("en-US", { timeZone: "Asia/Manila" }));
    const todayManila = new Date(today.toLocaleString("en-US", { timeZone: "Asia/Manila" }));

    return (
        inputManila.getFullYear() === todayManila.getFullYear() &&
        inputManila.getMonth() === todayManila.getMonth() &&
        inputManila.getDate() === todayManila.getDate()
    );
}