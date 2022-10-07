/*
 * @lc app=leetcode.cn id=559 lang=cpp
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
private:
    int mD(Node *r, int j) {
        int s = j;
        for (size_t i = 0; i < r->children.size(); i++) {
            int a = mD(r->children[i], j + 1);
            if (a > s) {
                s = a;
            }
        }
        return s;
    }
public:
    int maxDepth(Node* root) {
        if (root == nullptr) return 0;
        return mD(root, 1);
    }
};
// @lc code=end

