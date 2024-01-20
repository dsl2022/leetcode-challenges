function canFinish(numCourses, prerequisites) {
    var inDegree = new Array(numCourses).fill(0);
    var graph = new Array(numCourses).fill(0).map(function () { return []; });
    for (var _i = 0, prerequisites_1 = prerequisites; _i < prerequisites_1.length; _i++) {
        var _a = prerequisites_1[_i], course = _a[0], prereq = _a[1];
        if (graph[prereq]) { // Check if graph at index prereq is defined
            graph[prereq].push(course);
        }
        if (inDegree[course] !== undefined) { // Check if inDegree at index course is defined
            inDegree[course]++;
        }
    }
    console.log(graph);
    var stack = [];
    for (var i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            stack.push(i);
        }
    }
    var count = 0;
    while (stack.length) {
        var current = stack.pop();
        if (current !== undefined) { // Check if current is not undefined
            count++;
            for (var _b = 0, _c = graph[current]; _b < _c.length; _b++) {
                var nextCourse = _c[_b];
                if (inDegree[nextCourse] !== undefined) { // Check if inDegree at index nextCourse is defined
                    inDegree[nextCourse]--;
                    if (inDegree[nextCourse] === 0) {
                        stack.push(nextCourse);
                    }
                }
            }
        }
    }
    return count === numCourses;
}
