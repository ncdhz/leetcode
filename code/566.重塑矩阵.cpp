/*
 * @lc app=leetcode.cn id=566 lang=cpp
 *
 * [566] 重塑矩阵
 */

// @lc code=start
class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        if (mat.size() * mat[0].size() != r * c || (mat.size() == r && mat[0].size() == c)) return mat;
        vector<vector<int>> rs;
        int m = 0;
        int n = 0;
        for (size_t i = 0; i < r; i++) {
            vector<int> r;
            for (size_t j = 0; j < c; j++) {
                if (mat[m].size() == n) {
                    m++;
                    n = 0;
                }
                r.push_back(mat[m][n]);
                n++;
            }
            rs.push_back(r);
        }
        return rs;
    }
};
// @lc code=end

