function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const n = equations.length, answer = []
    const graph: Map<string, [string, number][]> = new Map()
    for (let i = 0; i < n; i++ ) {
        const [numerator, denominator] = equations[i]
        if( !graph.has(numerator)){
            graph.set(numerator, [])
        }
        graph.get(numerator).push([denominator, values[i]])
        
        if( !graph.has(denominator)){
            graph.set(denominator, [])
        }
        graph.get(denominator).push([numerator, 1/values[i]])
    }

    const dfs = (current, target, cumulativeValue,  visited) => {
        if (!graph.has(current) || !graph.has(target) || visited.has(current)){
            return -1
        }
        for (const [destination, value] of graph.get(current)) {
            //console.log('current', current, 'destination', destination, 'value', value)
            if (destination == target) {
                return cumulativeValue * value
            } else {
                visited.add(current)
                const result = dfs(destination, target, cumulativeValue * value, visited)
                visited.delete(current)
                if (result > -1 ){
                    return result
                }
            }
        }
        return -1
    }
    for (const [numerator, denominator] of queries){
        if (!graph.has(numerator)){
            answer.push(-1)
        } else if (numerator === denominator) {
            answer.push(1)
        } else {
            answer.push(dfs(numerator, denominator, 1, new Set()))
        }
    }
    return answer
};