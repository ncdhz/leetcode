#
# @lc app=leetcode.cn id=24 lang=python3
#
# [24] 两两交换链表中的节点
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        hd = head
        s = None
        e = None
        while hd != None:
            if hd.next != None:
                x = hd.next
                hd.next = hd.next.next
                x.next = hd   
                if s == None:
                    s = x
                else:
                    e.next = x
            if s == None:
                s = hd
            e = hd
            hd = hd.next  
        return s       
# @lc code=end

