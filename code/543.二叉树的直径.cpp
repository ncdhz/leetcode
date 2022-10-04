/*
 * @lc app=leetcode.cn id=543 lang=cpp
 *
 * [543] 二叉树的直径
 */
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
    int r;
    int dOBT(TreeNode * root) {
        if (root == nullptr) return 0;
        int left = dOBT(root->left);
        int right = dOBT(root->right);
        if (left + right > r) {
            r = left + right;
        }
        return left > right? left + 1 : right + 1;
    }
public:
    int diameterOfBinaryTree(TreeNode* root) {
        r = 0;
        dOBT(root);
        return r;
    }
};
// @lc code=end

