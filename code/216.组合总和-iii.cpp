/*
 * @lc app=leetcode.cn id=216 lang=cpp
 *
 * [216] 组合总和 III
 */
#include <vector>
using namespace std;
// @lc code=start
class Solution {
private:
    vector<vector<int>> rs;
    void cS3(vector<int> r, int i, int sum_, int k, int n) {
        if (r.size() == k) {
            if (sum_ == n) {
                vector<int> x(r);
                rs.push_back(x);
            }
            return;
        }
        if (sum_ > n) {
            return;
        }
        for (; i <= 9; i++) {
            r.push_back(i);
            cS3(r, i + 1, sum_ + i, k, n);
            r.pop_back();
        }
    }
public:
    vector<vector<int>> combinationSum3(int k, int n) {
        rs.clear();
        vector<int> r;
        cS3(r, 1, 0, k, n);
        return rs;
    }
};
// @lc code=end

