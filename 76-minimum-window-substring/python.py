from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not t or not s:
            return ""

        dict_t = Counter(t)
        required = len(dict_t)

        # Filter all the characters from s into a new list along with their index.
        # The filtering is done to remove all the characters we don't care about.
        filtered_s = [(i, char) for i, char in enumerate(s) if char in dict_t]
        print(filtered_s)
        l, r = 0, 0
        formed = 0
        window_counts = {}
        ans = float("inf"), None, None

        # Look for the characters only in the filtered list instead of the entire s.
        # This helps to reduce our search.
        # Hence, we follow the sliding window approach on this filtered list.
        while r < len(filtered_s):
            character = filtered_s[r][1]
            window_counts[character] = window_counts.get(character, 0) + 1

            if window_counts[character] == dict_t[character]:
                formed += 1

            # Try and contract the window till the point where it ceases to be 'desirable'.
            while l <= r and formed == required:
                character = filtered_s[l][1]

                # Save the smallest window until now.
                end = filtered_s[r][0]
                start = filtered_s[l][0]
                if end - start + 1 < ans[0]:
                    ans = (end - start + 1, start, end)

                window_counts[character] -= 1
                if window_counts[character] < dict_t[character]:
                    formed -= 1

                l += 1

            r += 1

        return "" if ans[0] == float("inf") else s[ans[1]: ans[2]+1]
