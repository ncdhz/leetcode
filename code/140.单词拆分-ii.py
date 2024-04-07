#
# @lc app=leetcode.cn id=140 lang=python3
#
# [140] 单词拆分 II
#

# @lc code=start
class Solution:

    def _wordBreak(self, s, wordDict, result):
        rs = result.get(s)
        if rs:
            return rs
        
        res = []
        for i in range(len(s)):
            ss = s[:i + 1]

            if ss in wordDict:
                if i + 1 == len(s):
                    res.append([ss])
                else:
                    arr = self._wordBreak(s[i+1:], wordDict, result)
                    if len(arr) > 0:
                        res.extend([[ss] + a for a in arr])
        result[s] = res
        return res
     
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        return [' '.join(ws) for ws in self._wordBreak(s, set(wordDict), {})]
# @lc code=end

