#
# @lc app=leetcode.cn id=112 lang=python3
#
# [112] 路径总和
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if root is None:
            return False
        
        def hps(r, sum):
            if r.left is None and r.right is None:
                return sum == targetSum
            left = False
            if r.left is not None:
                left = hps(r.left, sum + r.left.val)
            right = False
            if r.right is not None:
                right = hps(r.right, sum + r.right.val)
            return left or right

        return hps(root, root.val)

# @lc code=end

