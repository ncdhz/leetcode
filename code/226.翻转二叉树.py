#
# @lc app=leetcode.cn id=226 lang=python3
#
# [226] 翻转二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if root == None:
            return root

        def it(r):
            if r.left != None:
                left, right = it(r.left)
                r.left.left = right
                r.left.right = left

            if r.right != None:
                left, right = it(r.right)
                r.right.left = right
                r.right.right = left

            return r.left, r.right

        left, right = it(root)
        root.left = right
        root.right = left

        return root
# @lc code=end

