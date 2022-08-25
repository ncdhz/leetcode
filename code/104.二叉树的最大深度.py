#
# @lc app=leetcode.cn id=104 lang=python3
#
# [104] 二叉树的最大深度
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0

        max_depth = 0
        def md(r, k):
            nonlocal max_depth
            if r.left == None and r.right == None:
                if k > max_depth:
                    max_depth = k
            if r.left != None:
                md(r.left, k + 1)
            if r.right != None:
                md(r.right, k + 1)

        md(root, 1)
        return max_depth
# @lc code=end

