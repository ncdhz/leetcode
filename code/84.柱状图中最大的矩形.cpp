/*
 * @lc app=leetcode.cn id=84 lang=cpp
 *
 * [84] 柱状图中最大的矩形
 */
#include <vector>
#include <stack>
#include <algorithm>
using namespace std;
// @lc code=start
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        int ans = 0;
        heights.push_back(0);
        heights.insert(heights.begin(), 0);
        stack<int> s;
        s.push(0);
        for (size_t i = 1; i < heights.size(); i++) {
            while (!s.empty() && heights[i] < heights[s.top()]) {
                int j = s.top();
                s.pop();
                int a = heights[j] * (i - s.top() - 1);
                ans = max(ans, a);
            }
            s.push(i);
        }
        return ans;
    }
};
// @lc code=end

