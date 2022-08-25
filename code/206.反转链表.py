#
# @lc app=leetcode.cn id=206 lang=python3
#
# [206] 反转链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head == None:
            return head
        start = None
        end = None

        def r(h):
            nonlocal start, end
            if h == None:
                return None
            rr = r(h.next)
            if rr != None:
                if start == None:
                    start = rr
                else:
                    end.next = rr 
                end = rr 
            return h
        h = r(head)
        if start == None:
            return head
        end.next = h
        h.next = None
        return start

# @lc code=end

