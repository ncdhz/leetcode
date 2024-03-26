#
# @lc app=leetcode.cn id=310 lang=python3
#
# [310] 最小高度树
#

from collections import deque
# @lc code=start
class Solution:

    def heightTree(self, i, n, tree):
        
        deques = deque([i])
        visits = {i}
        paths = [-1] * n
        while len(deques):
            node = deques.popleft()
            ns = tree.get(node)
            for n in ns:
                if n not in visits:
                    visits.add(n)
                    paths[n] = node
                    deques.append(n)
        return node, paths

    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        
        if n == 1:
            return [0]
        
        tree = {}
        for edge in edges:
            tree.setdefault(edge[0], []).append(edge[1])
            tree.setdefault(edge[1], []).append(edge[0])
        
        x, _ = self.heightTree(0, n, tree)
        y, paths = self.heightTree(x, n, tree)
        
        ps = []
        while paths[y] != -1:
            ps.append(y)
            y = paths[y]
        ps.append(x)

        psl2 = len(ps) // 2
        res = [ps[psl2]] 
        if len(ps) % 2 == 0:
            res.append(ps[psl2 - 1])
        return res

# @lc code=end
