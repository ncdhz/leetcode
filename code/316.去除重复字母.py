#
# @lc app=leetcode.cn id=316 lang=python3
#
# [316] 去除重复字母
#

# @lc code=start
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        ar = {}
        for ss in s:
            ar[ss] = ar.get(ss, 0) + 1

        rl = []
        rs = set()

        for ss in s:
            ar[ss] -= 1

            if ss in rs:
                continue
            
            while len(rl) > 0 and ord(rl[-1]) > ord(ss):
                if ar[rl[-1]] > 0:
                    rs.remove(rl[-1])
                    rl.pop()
                else:
                    break
            
            rl.append(ss)
            rs.add(ss)

        return ''.join(rl)
# @lc code=end

