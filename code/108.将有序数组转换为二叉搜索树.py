#
# @lc app=leetcode.cn id=108 lang=python3
#
# [108] 将有序数组转换为二叉搜索树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        nl = len(nums) // 2
        root = TreeNode(nums[nl])
        
        def sat(r, left, right):
            if len(left) != 0:
                ll = len(left) // 2
                r.left = TreeNode(left[ll])
                sat(r.left, left[:ll], left[ll + 1:])
            if len(right) != 0:
                rl = len(right) // 2
                r.right = TreeNode(right[rl])
                sat(r.right, right[:rl], right[rl + 1:])
        
        sat(root, nums[:nl], nums[nl+1:])
        return root
# @lc code=end
