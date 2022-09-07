/*
 * @lc app=leetcode.cn id=173 lang=cpp
 *
 * [173] 二叉搜索树迭代器
 */
#include <list>
using namespace std;
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
class BSTIterator {
public:
    list<TreeNode*> nodes;
    int i = 0;
    BSTIterator(TreeNode* root) {
        nodes.clear();
        md(root);
    }

    void md(TreeNode* root) {
        while (root != nullptr) {
            nodes.push_back(root);
            root = root->left;
        }
    }
    
    int next() {
        TreeNode* node = nodes.back();
        nodes.pop_back();
        if (node->right != nullptr) {
            md(node->right);
        }
        return node->val;
    }
    
    bool hasNext() {
        return nodes.size() > 0;
    }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator* obj = new BSTIterator(root);
 * int param_1 = obj->next();
 * bool param_2 = obj->hasNext();
 */
// @lc code=end

