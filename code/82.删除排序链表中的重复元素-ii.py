#
# @lc app=leetcode.cn id=82 lang=python3
#
# [82] 删除排序链表中的重复元素 II
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        root = head
        f = head
        is_i = False
        while head is not None:
            if head.next is not None and head.val == head.next.val:
                head.next = head.next.next
                is_i = True
                continue
            if is_i:
                
                if f == head:
                    f = head.next
                    head = head.next
                    root = f
                else:
                    f.next = head.next
                    head = head.next
                is_i = False
            else:
                f = head
                head = head.next

        return root
# @lc code=end

