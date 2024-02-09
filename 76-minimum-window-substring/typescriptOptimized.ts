function minWindow(s: string, t: string): string {
    if (s.length < t.length) return "";

    // Initialize character frequency map for t
    const tFreq: Record<string, number> = {};
    for (const char of t) {
        tFreq[char] = (tFreq[char] || 0) + 1;
    }

    let left = 0, right = 0;
    let formed = 0;
    const windowFreq: Record<string, number> = {};
    let minLen = Infinity, start = 0; // Use direct variables instead of an object
    const required = Object.keys(tFreq).length;

    while (right < s.length) {
        const char = s[right];
        // Increment character count if it's in t
        if (char in tFreq) {
            windowFreq[char] = (windowFreq[char] || 0) + 1;
            if (windowFreq[char] === tFreq[char]) {
                formed++;
            }
        }

        // Try to shrink the window as long as the current window constraint is satisfied
        while (left <= right && formed === required) {
            // Update minimum window if the current window is smaller
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            const leftChar = s[left];
            if (leftChar in tFreq) {
                windowFreq[leftChar]--;
                if (windowFreq[leftChar] < tFreq[leftChar]) {
                    formed--;
                }
            }
            left++;
        }

        right++;
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}
