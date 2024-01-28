class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        group = []
        for i in range(m):
            rows = []
            for j in range(n):
                rows.append((i,j)) # rows.append(i * n + j)
            group.append(rows)
        def find(x):
            if group[x[0]][x[1]] != x:
                group[x[0]][x[1]] = find(group[x[0]][x[1]])
            return group[x[0]][x[1]]
        def union(x, y):
            xP, yP = find(x), find(y)
            if xP != yP:
                for i in range(m):
                    for j in range(n):
                        if group[i][j] == (xP[0],xP[1]):
                            group[i][j] = group[yP[0]][yP[1]]
                group[xP[0]][xP[1]] = group[yP[0]][yP[1]]
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 0:
                    group[i][j] = (-1,-1)
                else:
                    if i < m - 1 and grid[i+1][j] == 1:
                        union((i,j), (i+1,j))
                    if j < n - 1 and grid[i][j+1] == 1:
                        union((i,j), (i,j+1))
        #print(group) 
        counter = defaultdict(int)
        for i in range(m):
            for j in range(n):
                if group[i][j] != (-1, -1):
                    counter[group[i][j]] += 1
        answer = 0
        for x in counter.values():
            answer = max(answer, x)
        # return max(list(counter.values()))
        return answer
        