#
# @lc app=leetcode.cn id=653 lang=python3
#
# [653] 两数之和 IV - 输入二叉搜索树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

    def findK(self, root, k):
        if root == None:
            return False
        if root.val == k:
            return True
        elif root.val > k:
            return self.findK(root.left, k)
        return self.findK(root.right, k)
    
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        root_ = root
        nodes = [root]
        while len(nodes) > 0:
            node = nodes.pop()
            if node.left: 
                nodes.append(node.left)
            if node.right:
                nodes.append(node.right)
            
            if node.val == k / 2:
                continue
            
            if self.findK(root_, k - node.val):
                return True
        return False
# @lc code=end

