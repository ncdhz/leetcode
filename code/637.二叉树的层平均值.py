#
# @lc app=leetcode.cn id=637 lang=python3
#
# [637] 二叉树的层平均值
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        queue = [root]
        result = []
        while len(queue) > 0:
            qc = queue
            queue = []
            sum_ = 0
            sum_len = len(qc)
            while len(qc) > 0:
                v = qc.pop()
                sum_ += v.val
                if v.left:
                    queue.append(v.left)
                if v.right:
                    queue.append(v.right)
            result.append(sum_ / sum_len)
        
        return result
# @lc code=end

