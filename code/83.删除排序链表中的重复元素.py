#
# @lc app=leetcode.cn id=83 lang=python3
#
# [83] 删除排序链表中的重复元素
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        values = []
        if head == None:
            return head
        hsc = head
        values.append(hsc.val)
        hc = head.next
        while hc != None:
            if hc.val not in values:
                values.append(hc.val)
                hsc = hc
                hc = hc.next
            else:
                hsc.next = hc.next
                hc = hsc.next
        return head
# @lc code=end

