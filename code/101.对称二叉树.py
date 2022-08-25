#
# @lc app=leetcode.cn id=101 lang=python3
#
# [101] 对称二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def same(p, q):
            if p is None and q is None:
                return True
            elif p is not None and q is not None:
                if p.val != q.val:
                    return False
                return same(p.left, q.right) and same(p.right, q.left)
            else:
                return False
        return same(root.left, root.right)
# @lc code=end

