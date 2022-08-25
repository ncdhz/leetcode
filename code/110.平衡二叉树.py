#
# @lc app=leetcode.cn id=110 lang=python3
#
# [110] 平衡二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        if root is None:
            return True

        is_ok = True
        
        def balanced(r, k):
            
            nonlocal is_ok

            if r is None:
                return k
            k1 = balanced(r.left, k + 1)
            k2 = balanced(r.right, k + 1)

            if k1 - k2 > 1 or k2 - k1 > 1:
                is_ok = False

            return max([k1, k2])
        
        balanced(root, 0)

        return is_ok
# @lc code=end

