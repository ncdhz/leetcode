/*
 * @lc app=leetcode.cn id=2 lang=cpp
 *
 * [2] 两数相加
 */

// @lc code=start

// Definition for singly-linked list.
// struct ListNode {
//     int val;
//     ListNode *next;
//     ListNode() : val(0), next(nullptr) {}
//     ListNode(int x) : val(x), next(nullptr) {}
//     ListNode(int x, ListNode *next) : val(x), next(next) {}
// };

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* root = new ListNode();
        ListNode* first = root;
        int carry = 0;
        while (l1 != nullptr &&  l2 != nullptr) {
            int val = l1->val + l2->val + carry;
            first->next = new ListNode(val % 10);
            first = first->next;
            carry = val / 10;
            l1 = l1->next;
            l2 = l2->next;
        }
        ListNode * tmp = l1;
        if (l2 != nullptr) {
            tmp = l2;
        }
        while (tmp != nullptr) {
            int val = tmp->val + carry;
            first->next = new ListNode(val % 10);
            first = first->next;
            carry = val / 10;
            if (carry == 0) {
                first->next = tmp->next;
                break;
            }
            tmp = tmp->next;
        }
        if (carry != 0) {
            first->next = new ListNode(carry);
        }
        return root->next;
    }
};
// @lc code=end

