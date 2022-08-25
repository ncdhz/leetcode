#
# @lc app=leetcode.cn id=23 lang=python3
#
# [23] 合并K个升序链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        
        while True:
            x = True
            for l in lists:
                if l == None:
                    lists.remove(l)
                    x = False
                    break
            if x:
                break
            
        if len(lists) == 0:
            return None
        start = None
        end = None
        while True:
            if len(lists) == 0:
                break
            min_l = lists[0].val
            j = 0

            for i in range(1, len(lists)):
                if lists[i].val < min_l:
                    min_l = lists[i].val
                    j = i
            
            l = lists[j]
            
            if l.next == None:
                lists.remove(l)
            else:
                lists[j] = l.next

            l.next = None
            if start == None:
                start = l
                end = l
            else:
                end.next = l
                end = l

        return start
# @lc code=end

