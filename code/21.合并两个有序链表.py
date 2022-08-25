#
# @lc app=leetcode.cn id=21 lang=python3
#
# [21] 合并两个有序链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        if list1 is None:
            return list2
        if list2 is None:
            return list1

        start, end = None, None


        while list1 is not None and list2 is not None:
            
            if list1.val <= list2.val:
                l1 = list1.next
                if start is None:
                    start = list1
                else:
                    end.next = list1
                end = list1
                end.next = None
                list1 = l1
            else:
                l2 = list2.next
                if start is None:
                    start = list2
                else:
                    end.next = list2
                end = list2
                end.next = None
                list2 = l2

        if list1 is not None:
            end.next = list1
        if list2 is not None:
            end.next = list2

        return start

# @lc code=end

