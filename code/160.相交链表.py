#
# @lc app=leetcode.cn id=160 lang=python3
#
# [160] 相交链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        ha = []
        while headA is not None:
            ha.append(headA)
            headA = headA.next
        while headB is not None:
            if headB in ha:
                return headB
            headB = headB.next
        return None
# @lc code=end

