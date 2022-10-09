/*
 * @lc app=leetcode.cn id=274 lang=cpp
 *
 * [274] H 指数
 */
#include <algorithm>
using namespace std;
// @lc code=start
class Solution {
public:
    int hIndex(vector<int>& citations) {
        sort(citations.begin(), citations.end());
        int n = citations.size();
        for (size_t i = 0; i < citations.size(); i++) {
            if (citations[i] >= n) {
                break;
            }
            n--;
        }
        return n;
    }
};
// @lc code=end

