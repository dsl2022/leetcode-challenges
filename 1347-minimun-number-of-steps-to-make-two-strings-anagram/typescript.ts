function minSteps(s: string, t: string): number {
    const sCount: { [key: string]: number } = {};
    let steps: number = 0;

    // Count the frequency of each character in 's'
    for (let i = 0; i < s.length; i++) {
        sCount[s[i]] = (sCount[s[i]] || 0) + 1;
    }
    
    // Calculate the number of steps by counting how many characters in 't' are not in 's'
    for (let i = 0; i < t.length; i++) {        
        if (sCount[t[i]]) {
            sCount[t[i]]--;
        } else {
            steps++;
        }
    }

    return steps;
}
