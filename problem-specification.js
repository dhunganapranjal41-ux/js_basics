/////!probleme number 1


function convertToClock(totalSeconds) {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");

    const minutes = String(
        Math.floor((totalSeconds % 3600) / 60)
    ).padStart(2, "0");

    const seconds = String(
        totalSeconds % 60
    ).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

console.log(convertToClock(3665));  // 01:01:05