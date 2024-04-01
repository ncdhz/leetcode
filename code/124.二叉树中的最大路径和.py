#
# @lc app=leetcode.cn id=124 lang=python3
#
# [124] 二叉树中的最大路径和
#


# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        result = -2000
        
        def _maxPathSum(root):
            nonlocal result
            
            if root is None:
                return 0
            
            left = max([_maxPathSum(root.left), 0])
            right = max([_maxPathSum(root.right), 0])
            val = root.val

            result = max([val + left + right, result])

            return max([val, val + left, val + right])
        
        _maxPathSum(root)
        return result

# @lc code=end
