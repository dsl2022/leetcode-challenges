type Rec = Record<string, number>
function balancedString(s: string): number {
    
    const factor = s.length/4
    const nonFactorChar:Rec={'Q':0, 'W':0, 'E':0, 'R':0}
    const sMap: Rec = {'Q':-factor, 'W':-factor, 'E':-factor, 'R':-factor}
    for(let char of s){
        sMap[char]++
    }
    let balanced = true
    for (const k in sMap){
        if (sMap[k] > 0) balanced = false
    }
    if (balanced) return 0
    let left = 0, right = -1, answer = s.length
    // {Q:3,W:1}
    const check = () => {
        return nonFactorChar['Q'] >= sMap['Q']
        && nonFactorChar['W'] >= sMap['W']
        && nonFactorChar['E'] >= sMap['E']
        && nonFactorChar['R'] >= sMap['R']
    }

    while (right < s.length - 1){
        nonFactorChar[s[++right]]++
        // the window should contain enough letters
        // {Q:1}
        while (right < s.length -1 && !check()) {
            nonFactorChar[s[++right]]++
        }
        // move the left pointer to shrink the window
        while (left <= right && check()){
            //update the minimum answer
            answer = Math.min(answer, right - left + 1)
            nonFactorChar[s[left++]]--
        }
    }
    return answer
    //  make map
    // find all that are not with factors
    // create window and identify the ajacent substring with the non factor ones
    // then return the number
};
//"QQQW"