/*
 * @lc app=leetcode.cn id=216 lang=cpp
 *
 * [216] 组合总和 III
 */
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    vector<vector<int>> combinationSum3(int k, int n) {
        vector<vector<int>> rs;
        vector<int> r;
        int sum_ = 0;
        while () {
            
            if (r.size() == k && sum_ == n) {
                vector<int> rc(r);
                rs.push_back(rc);
            }
        }
        return rs;
    }
};
// @lc code=end

