#
# @lc app=leetcode.cn id=86 lang=python3
#
# [86] 分隔链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: ListNode, x: int) -> ListNode:
        root = ListNode()
        root.next = head
        front = root
        hf = root
        while head is not None:
            if head.val < x:
                r = head
                hf.next = head.next
                head = head.next
                if hf == front:
                    hf = r
                r.next = front.next 
                front.next = r
                front = r
                
            else:
                hf = head
                head = head.next
        return root.next
# @lc code=end

