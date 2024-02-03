from typing import List 
class Solution:
    def maxMoves(self, grid: List[List[int]]) -> int:
        m, n, steps = len(grid), len(grid[0]), 0
        dp = [[]] * n #(step, (rows))
        dp[0] = [i for i in range(m)]
        for col in range(1, n):
            rows = dp[col - 1]
            rowsToMove = set()
            for preRow in rows:
                for row in [preRow -1, preRow, preRow + 1]:
                    if 0 <= row < m and grid[preRow][col-1] < grid[row][col]:
                        rowsToMove.add(row)
            if rowsToMove:
                dp[col] =  list(rowsToMove)
                steps += 1
        return steps