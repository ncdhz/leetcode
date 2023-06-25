#
# @lc app=leetcode.cn id=657 lang=python3
#
# [657] 机器人能否返回原点
#

# @lc code=start
class Solution:
    def judgeCircle(self, moves: str) -> bool:
        ud = 0
        lr = 0
        
        for move in moves:
            if move == 'U':
                ud -= 1
            elif move == 'D':
                ud += 1
            elif move == 'L':
                lr -= 1
            else:
                lr += 1
        
        if not ud and not lr:
            return True
        return False
# @lc code=end

