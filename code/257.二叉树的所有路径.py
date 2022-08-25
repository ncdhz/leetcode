#
# @lc app=leetcode.cn id=257 lang=python3
#
# [257] 二叉树的所有路径
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        result_mid = []
        result = []
        
        def btp(r):
            result_mid.append(str(r.val))

            if r.left is None and r.right is None:
                result.append('->'.join(result_mid))

            if r.left is not None:
                btp(r.left)
            
            if r.right is not None:
                btp(r.right)

            result_mid.pop()
        
        btp(root)

        return result
# @lc code=end

