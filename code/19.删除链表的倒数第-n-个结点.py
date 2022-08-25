#
# @lc app=leetcode.cn id=19 lang=python3
#
# [19] 删除链表的倒数第 N 个结点
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        l = [head]
        r = head
        while r.next is not None:
            l.append(r.next)
            r = r.next
        i = len(l) - n
        if i == 0:
            return head.next
        l[i-1].next = l[i].next
        return head

# @lc code=end

