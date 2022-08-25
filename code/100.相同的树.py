#
# @lc app=leetcode.cn id=100 lang=python3
#
# [100] 相同的树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        def same(pp, qq):
            if pp == None and qq == None:
                return True
            elif pp != None and qq != None:
                if pp.val != qq.val:
                    return False
                return same(pp.right, qq.right) and same(pp.left, qq.left)
            else:
                return False

        return same(p, q)
# @lc code=end

