class Solution:
    def findSubsequences(self, nums: List[int]) -> List[List[int]]:
        result = []
        existing = set()

        def backtracking(options, path, result):

            if len(path) >= 2:
                key = '-'.join(map(str, path))
                if key not in existing:
                    result.append(path.copy())
                    existing.add(key)

            #print("before options", options, "path", path)
            for i, ele in enumerate(options):
                if not path or ele >= path[-1]:
                    backtracking(options[i + 1:], path + [ele], result)

        backtracking(nums, [], result)
        return result