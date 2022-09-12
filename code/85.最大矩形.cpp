/*
 * @lc app=leetcode.cn id=85 lang=cpp
 *
 * [85] 最大矩形
 */
#include <vector>
#include <tuple>
#include <stack>
#include <algorithm>
using namespace std;
// @lc code=start
class Solution {
public:
    int largestRectangleArea(vector<int> heights) {
        int area = 0;
        heights.push_back(0);
        heights.insert(heights.begin(), 0);
        stack<int> s;
        s.push(0);
        for (size_t i = 1; i < heights.size(); i++) {
            while (!s.empty() && heights[i] < heights[s.top()]) {
                int j = s.top();
                s.pop();
                int a = heights[j] * (i - s.top() - 1);
                area = max(area, a);
            }
            s.push(i);
        }
        return area;
    }

    int maximalRectangle(vector<vector<char>>& matrix) {
        int area;
        vector<int> heights;
        for (size_t i = 0; i < matrix[0].size(); i++) {
            heights.push_back(0);
        }
        for (size_t i = 0; i < matrix.size(); i++) {
            for (size_t j = 0; j < matrix[i].size(); j++) {
                if (matrix[i][j] == '0') {
                    heights[j] = 0;
                } else {
                    heights[j] += 1;
                }
            }
            area = max(area, largestRectangleArea(heights));
        }
        return area;
    }
};
// @lc code=end

