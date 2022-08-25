#
# @lc app=leetcode.cn id=71 lang=python3
#
# [71] 简化路径
#

# @lc code=start
class Solution:
    def simplifyPath(self, path: str) -> str:
        ps = path.split('/')
        x = []
        for p in ps:
            if p == '' or p == '.':
                continue
            elif p == '..':
                if len(x) > 0:
                    x.pop()
            else:
                x.append(p)

        return '/' + '/'.join(x)
# @lc code=end

