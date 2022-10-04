/*
 * @lc app=leetcode.cn id=230 lang=cpp
 *
 * [230] 二叉搜索树中第K小的元素
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
    int ak;
public:
    void kS(TreeNode* root) {
        if (r != -1) return;
        if (root->left != nullptr) {
            kS(root->left);
        }
        if (ak == 0) {
            r = root->val;
        }
        ak--;
        if (root->right != nullptr) {
            kS(root->right);
        }
    }
    int kthSmallest(TreeNode* root, int k) {
        r = -1;
        ak = k - 1;
        kS(root);
        return r;
    }
};
// @lc code=end

