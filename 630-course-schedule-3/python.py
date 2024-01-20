import heapq
from typing import List
# Sort the courses by their end day.

# Iterate through the sorted courses and add each course's duration
# to a running total (which represents the current end day).
# Use a max heap (priority queue) to keep track of the courses taken.
 
# Whenever the running total exceeds the current course's last day, 
#remove the course with the longest duration from 
#the priority queue (and subtract its duration from the running total).

# The size of the priority queue at the end of iteration will represent the maximum number of courses that can be taken.


def scheduleCourse( courses: List[List[int]]) -> int:        
    total = 0
    courses.sort(key=lambda x: x[1])
    queue = []
    for dur, last in courses:            
        heapq.heappush(queue, -dur)
        total += dur
        if total > last:                
            total += heapq.heappop(queue)        
    return len(queue)

print(scheduleCourse([[6, 7], [10, 11], [8, 14], [5, 15], [5, 16], [3, 19], [2, 19], [2, 10]]))
