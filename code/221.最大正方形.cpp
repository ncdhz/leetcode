/*
 * @lc app=leetcode.cn id=221 lang=cpp
 *
 * [221] 最大正方形
 */
#include <vector>
#include <algorithm>
using namespace std;
// @lc code=start
class Solution {
public:
    int maximalSquare(vector<vector<char>>& matrix) {
        vector<int> s(matrix[0].size() + 1, 0);
        int max_ = 0;
        
        int e = 0;
        for (size_t i = 0; i < matrix.size(); i++) {
            for (size_t j = 0; j < matrix[i].size(); j++) {
                int a = 0;
                if (matrix[i][j] == '1') {
                    a = min(s[j + 1], min(e, s[j])) + 1;
                }
                e = s[j + 1];
                s[j + 1] = a;
                if (s[j + 1] > max_) {
                    max_ = s[j + 1];
                }
            }
            e = 0;
        }
        return max_ * max_;
    }
};
// @lc code=end

