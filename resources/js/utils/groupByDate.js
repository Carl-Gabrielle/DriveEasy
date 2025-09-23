import { formatDate } from "@/lib/dateFormatter";

export const groupByDate = (schedules) => {
    return Object.values(
        schedules.reduce((acc, item) => {
            const date = formatDate(item.date || item.created_at);

            if (!acc[date]) {
                acc[date] = { date, students: [], schedules: [] };
            }

            acc[date].students.push(...(item.students || []));
            acc[date].schedules.push(item);

            return acc;
        }, {})
    );
};
