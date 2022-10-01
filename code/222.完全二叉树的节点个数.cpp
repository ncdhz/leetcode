/*
 * @lc app=leetcode.cn id=222 lang=cpp
 *
 * [222] 完全二叉树的节点个数
 */
#include <cmath>
#include <iostream>
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
class Solution {
private:
    int min;
    bool isR;
    int k;
    void cN(TreeNode* r, int i) {
        if (isR) return;
        if (r->left == nullptr && r->right == nullptr) {
            if (i == k) { 
                isR = true;
            } else {
                min += 2;
            }
            return;
        }
        if (r->right != nullptr) {
            cN(r->right, i + 1);
        } else {
            min++;
        }

        if (r->left != nullptr) {
            cN(r->left, i + 1);
        }

           
    }
public:
    int countNodes(TreeNode* root) {
        if (root == nullptr) return 0;
        TreeNode * r = root;
        min = 0;
        isR = false;
        k = 0;
        while (r != nullptr) {
            k++;
            r = r->left;
        }
        cN(root, 1);
        return pow(2, k) - 1 - min;
    }
};
// @lc code=end

