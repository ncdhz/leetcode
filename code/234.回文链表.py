#
# @lc app=leetcode.cn id=234 lang=python3
#
# [234] 回文链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:

        heads = []
        while head != None:
            heads.append(head)
            head = head.next

        for i in range(len(heads) // 2):
            if heads[i].val != heads[len(heads) - 1 - i].val:
                return False
        return True
# @lc code=end

