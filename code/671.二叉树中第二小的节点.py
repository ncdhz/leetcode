#
# @lc app=leetcode.cn id=671 lang=python3
#
# [671] 二叉树中第二小的节点
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findSMV(self, root, s_max, min_):
        
        if not root.left:
            if min_ < root.val < s_max or min_ == s_max:
                return root.val
            return s_max
        
        if root.left.val <= s_max or min_ == s_max:
            l = self.findSMV(root.left, s_max, min_)
            if min_ < l < s_max or min_ == s_max:
                s_max = l
        
        if root.right.val <= s_max or min_ == s_max:
            r = self.findSMV(root.right, s_max, min_)
            if min_ < r < s_max or min_ == s_max:
                s_max = r
        return s_max
    
    def findSecondMinimumValue(self, root: Optional[TreeNode]) -> int:
        if not root.left:
            return -1
        s_max = self.findSMV(root, max([root.left.val, root.right.val]), root.val)
        
        if s_max == root.val:
            return -1
        
        return s_max
# @lc code=end

