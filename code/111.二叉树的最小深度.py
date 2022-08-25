#
# @lc app=leetcode.cn id=111 lang=python3
#
# [111] 二叉树的最小深度
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0

        all_depth = []

        def min_depth(r, k):
            if r.left == None and r.right == None:
                all_depth.append(k)
                return
            if r.left != None:
                min_depth(r.left, k + 1)
            if r.right != None:
                min_depth(r.right, k + 1)
        
        min_depth(root, 1)
        return min(all_depth)
# @lc code=end

