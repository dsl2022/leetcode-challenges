class Solution:
    def maxSumAfterPartitioning(self, arr, k):
        n = len(arr)
        dp = [0] * n
        for i in range(n):
            maxValue = 0
            for j in range(1, min(k, i + 1) + 1):  # Fix the range to consider partitions up to size k correctly
                maxValue = max(maxValue, arr[i - j + 1])  # Include the current element in the max value calculation
                if i - j >= 0:  # Fix the condition to include the first element
                    dp[i] = max(dp[i], dp[i - j] + maxValue * j)  # Fix the calculation to include the product of maxValue and j
                else:
                    dp[i] = max(dp[i], maxValue * j)  # Handle the case for the beginning of the array
        return dp[n - 1]