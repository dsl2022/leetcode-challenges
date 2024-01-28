class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        if text1 == text2:
            return len(text1)
        length1, length2 = len(text1), len(text2)
        
        dp = [[0] * (length2 + 1) for _ in range(length1 + 1)]
        last_position = defaultdict(int)
        for i in range(1, length1+1):
            found = False
            for j in range(1, length2+1):
                if found:
                    dp[i][j] = max(dp[i][j-1], dp[i-1][j])
                else:
                    
                    if text1[i-1] == text2[j-1] and ast_postion[text1[i-1]][1]>j:
                        print('find a same pare i=',i,'j=',j,text1[i-1] , text2[j-1])
                        dp[i][j] = max(dp[i][j-1],dp[i-1][j]) + 1
                        output = max(output, dp[i][j])
                        last_postion[text1[i-1]]=(ast_postion[text1[i-1]]+1, j)
                        found = True
                    else:
                       dp[i][j] = max(dp[i][j-1], dp[i-1][j])            
        print(dp)
        return dp[length1][length2]
        #return output
        
                