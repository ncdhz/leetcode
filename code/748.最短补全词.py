#
# @lc app=leetcode.cn id=748 lang=python3
#
# [748] 最短补全词
#

# @lc code=start
class Solution:

    def getLen(self, lp, ws):
        
        for l in lp:
            ws.remove(l)
        
        return len(ws)
    
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        lp = []
        for l in licensePlate:
            if 'a' <= l <= 'z' or 'A' <= l <= 'Z':
                lp.append(l.lower())
        res = None
        resL = -1
        for word in words:
            try:
                l = self.getLen(lp, list(word))
                if res is None or resL > l:
                    res = word
                    resL = l
            except:
                pass
        
        return res
# @lc code=end

