#
# @lc app=leetcode.cn id=203 lang=python3
#
# [203] 移除链表元素
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        if head is None:
            return head
        root = ListNode(next=head)
        start = root
        run = head
        while run != None:
            if run.val == val:
                start.next = run.next
                run = run.next
            else:
                start = run
                run = run.next

        return root.next
# @lc code=end

