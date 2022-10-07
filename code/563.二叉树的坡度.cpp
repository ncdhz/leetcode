/*
 * @lc app=leetcode.cn id=563 lang=cpp
 *
 * [563] 二叉树的坡度
 */
#include <math.h>
// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
private:
    int rs;
    int fT(TreeNode* r) {
        if (r == nullptr) return 0;
        int left = fT(r->left);
        int right = fT(r->right);
        rs += abs(left - right);
        return left + right + r->val;
    }
public:
    int findTilt(TreeNode* root) {
        rs = 0;
        fT(root);
        return rs;
    }
};
// @lc code=end

