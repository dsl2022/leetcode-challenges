function frequencySort(s: string): string {
    const countMap:Record<string, number> = {}
    for(let char of s){
        countMap[char] = (countMap[char]|| 0)+1
    }
    const countMapArr = Object.entries(countMap).sort((a,b)=>{
        return b[1]-a[1]
    })
    console.log(countMapArr)
    let ans = ""
    countMapArr.forEach(([char,freq])=>ans+=char.repeat(freq))
    return ans
};

function frequencySortAdvanced(s: string): string {
    let group = new Map<string, number>();
    s.split("").forEach((v) => {
      group.set(v, (group?.get(v) ?? 0) + 1);
    });
    return [...group]
      .sort((a, b) => b[1] - a[1])
      .map((g) => g[0].repeat(g[1]))
      .join("");
  }