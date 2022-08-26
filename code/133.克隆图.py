#
# @lc app=leetcode.cn id=133 lang=python3
#
# [133] 克隆图
#

# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    all_node = {}

    def cg(self, node):
        if node.val in self.all_node:
            return self.all_node[node.val]

        root = Node(node.val)
        self.all_node[root.val] = root

        for n in node.neighbors:
            root.neighbors.append(self.cg(n))
        
        return root

    def cloneGraph(self, node: 'Node') -> 'Node':
        self.all_node.clear()
        if node is None:
            return None
            
        return self.cg(node) 

# @lc code=end

