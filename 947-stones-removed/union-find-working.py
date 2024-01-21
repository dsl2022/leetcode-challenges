from typing import List
from collections import defaultdict
def removeStones( stones: List[List[int]]) -> int:
    parent = {(x,y): (x,y) for x, y in stones}
    def find(node):
        r = parent[(node[0],node[1])]
        # top parent is the indenfity of this group
        if r != node:
            r = find(r)
        return r
    def join(a, b):
        aP, bP = find((a[0], a[1])), find((b[0], b[1]))
        for key, value in parent.items():
            if value == bP:
                parent[(key[0], key[1])] = (aP[0],aP[1])
        parent[(bP[0], bP[1])] = (aP[0],aP[1])
    for row, col in stones:
        for row_a, col_a in stones:
            if row_a==row or col_a==col:
                if not (row_a==row and col_a==col): 
                    print("merge one element to another one")                   
                    # a, b = find((row, col)), find((row_a, col_a))
                    # parent[(b[0], b[1])] = (a[0],a[1])
                    join((row, col), (row_a, col_a))
    
    print(parent)
    mySet = set()
    for x in parent.values():
        mySet.add(x)
    return len(stones) - len(mySet)
stones3 = [[0,0]]
stones2 = [[0,0],[0,2],[1,1],[2,0],[2,2]]
stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
stones4 = [[3,2],[3,1],[4,4],[1,1],[0,2],[4,0]]
stones5 = [[0,1],[1,0],[1,1]]
print(removeStones(stones5))