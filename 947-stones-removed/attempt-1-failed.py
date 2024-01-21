from typing import List
from collections import defaultdict
def removeStones( stones: List[List[int]]) -> int:
    neignborsMap = defaultdict(list)
    # neignborsMap[(3,4)].appeznd([3,2,4])
    for row, col in stones:
        # print('ddd', row, col)
        for row_a, col_a in stones:
            # print('aaa', row_a, col_a)
            if row_a==row or col_a==col:
                # print('row =', row, 'col=', col, 'row_a= ', row_a, 'col_a', col_a)
                # print( 'row_a==row ', row_a==row ,"col_a==col", col_a==col)
                if not (row_a==row and col_a==col): 
                    # print("add an element to the map")                   
                    neignborsMap[(row, col)].append([row_a, col_a])
    print(neignborsMap)
    removedCounter, visited = 0, set()
    answer = 0
    def dfs(node):
        nonlocal removedCounter
        if node in visited or node not in neignborsMap:
            return
        visited.add(node)
        removedCounter += 1
        for x_i, y_i in neignborsMap[(node[0], node[1])]:
            dfs((x_i, y_i))
    for x,y in stones:
        removedCounter = 0
        dfs((x,y))
        print(' we get ', removedCounter, ' from ', (x,y))
        answer = max(answer, removedCounter)
    return answer - 1 if answer > 0 else 0


stones3 = [[0,0]]
stones2 = [[0,0],[0,2],[1,1],[2,0],[2,2]]
stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
stones4 = [[3,2],[3,1],[4,4],[1,1],[0,2],[4,0]]
print(removeStones(stones4))


# [0,0]:[[0,1],[1,0]]
# [0,1]:[[0,0],[2,1]]
# [1,0]:[[0,0],[1,2]]
# [1,2]:[[1,0],[2,2]]
# [2,1]:[[0,1],[2,2]]
# [2,2]:[[1,2],[2,1]]

