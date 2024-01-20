function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let inDegree: number[] = new Array(numCourses).fill(0);
    let graph: number[][] = new Array(numCourses).fill(0).map(() => []);
    
    for (let [course, prereq] of prerequisites) {
        if (graph[prereq]) { // Check if graph at index prereq is defined
            graph[prereq].push(course);
        }
        if (inDegree[course] !== undefined) { // Check if inDegree at index course is defined
            inDegree[course]++;
        }
    }
    console.log(graph)
    let stack: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            stack.push(i);
        }
    }
    
    let count = 0;
    while (stack.length) {
        let current = stack.pop()!;
         // Check if current is not undefined
            count++;
            for (let nextCourse of graph[current]) {
                if (inDegree[nextCourse] !== undefined) { // Check if inDegree at index nextCourse is defined
                    inDegree[nextCourse]--;
                    if (inDegree[nextCourse] === 0) {
                        stack.push(nextCourse);
                    }
                }
            }
        
    }
    
    return count === numCourses;
}
