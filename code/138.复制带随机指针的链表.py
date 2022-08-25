#
# @lc app=leetcode.cn id=138 lang=python3
#
# [138] 复制带随机指针的链表
#

# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

from lib2to3.pytree import Node


class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        hc = head
        while hc != None:
            n = Node(hc.val)
            n.next = hc.next
            hc.next = n
            hc = hc.next.next
        
        hc = head
        while hc != None:
            if hc.random != None:
                hc.next.random = hc.random.next
            hc = hc.next.next
        end = None
        start = None
        hc = head 
        while hc != None:
            if start == None:
                start = hc.next
            else:
                end.next = hc.next
            end = hc.next
            hc = hc.next.next
        return start
# @lc code=end

