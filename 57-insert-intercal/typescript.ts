function insert(intervals: number[][], newInterval: number[]): number[][] {
    let n = intervals.length;
    if (n === 0) {
        return [newInterval];
    }

    let result: number[][] = [];
    let i = 0;

    // Add all intervals ending before the new interval starts
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // Merge overlapping intervals
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    // Add remaining intervals
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}
