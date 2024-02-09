function minWindow(s: string, t: string): string {
    if(s.length < t.length)return "";
    let left = 0;
    let right = 0;
    const hashMap = {}
    for(let letter of t){
        if(!(letter in hashMap))hashMap[letter]=1
        else hashMap[letter]++
    }
    let totalRequired = Object.keys(hashMap).length;
    let created = 0;
    const countMap:Record<string,number> = {};
    const answerObj = {ansLen:Infinity,ansL:-1,ansR:-1}
    while(right < s.length){
        const char = hashMap[right];
        if(char in hashMap){
            countMap[char]=(countMap[char]|| 0)+1;
            if(countMap[char]===hashMap[char]){
                created++;
            }
        }
        while(left<=right && created===totalRequired){
            const currentLeftChar = s[left]
            if(right-left+1<answerObj.ansLen){
                answerObj.ansLen =right-left+1
                answerObj.ansL = left
                answerObj.ansR = right
            }
            if(currentLeftChar in hashMap){
                countMap[currentLeftChar]--;
                if(countMap[currentLeftChar]<hashMap[currentLeftChar]){
                    created--;
                }
            }
            left++
        }
        right++
    }
    return answerObj.ansLen ===Infinity?"":s.substring(answerObj.ansL,answerObj.ansR+1)
    
};

const compareMap = (expected, given):boolean => {
        let answer = true
        Object.keys(expected).forEach((key) => {
            if (!(key in given) || given[key] < expected[key]){
                answer=false
                //return
            }
        })
        //console.log('compare', expected, given, answer)
        return answer
    }