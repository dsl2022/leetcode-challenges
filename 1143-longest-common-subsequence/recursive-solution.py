class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        memo = [[-1] * (n + 1) for _ in range(m + 1)]
        return self.lcs_memo(text1, text2, m, n, memo)

    def lcs_memo(self, text1: str, text2: str, m: int, n: int, memo: List[List[int]]) -> int:
        if m == 0 or n == 0:
            return 0

        if memo[m][n] != -1:
            return memo[m][n]

        if text1[m - 1] == text2[n - 1]:
            memo[m][n] = 1 + self.lcs_memo(text1, text2, m - 1, n - 1, memo)
        else:
            memo[m][n] = max(self.lcs_memo(text1, text2, m - 1, n, memo), self.lcs_memo(text1, text2, m, n - 1, memo))

        return memo[m][n]