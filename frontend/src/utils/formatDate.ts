export function formatDate(timestamp: string | number): string {
    // Parse the timestamp to ensure it's a valid integer representing milliseconds
    const date = new Date(typeof timestamp === "string" ? parseInt(timestamp) : timestamp);

    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
}

// Example usage:
const timestamp = 1704067200000; // Can be a number or string
const formattedDate = formatDate(timestamp);
console.log(formattedDate); // Output: "12 Dec 2023"
