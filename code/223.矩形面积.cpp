/*
 * @lc app=leetcode.cn id=223 lang=cpp
 *
 * [223] 矩形面积
 */
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        int a = (ax2 - ax1) * (ay2 - ay1);
        int b = (bx2 - bx1) * (by2 - by1);
        if (bx1 >= ax2 || bx2 <= ax1 || by2 <= ay1 || by1 >= ay2) {
            return a + b;
        }
        int x;
        if (ax2 >= bx2) {
            if (ax1 <= bx1) {
                x = bx2 - bx1;
            } else {
                x = bx2 - ax1;
            }
        } else {
            if (ax1 <= bx1) {
                x = ax2 - bx1;
            } else {
                x = ax2 - ax1;
            }
        }
        int y;
        if (ay2 >= by2) {
            if (ay1 <= by1) {
                y = by2 - by1;
            } else {
                y = by2 - ay1;
            }
        } else {
            if (ay1 <= by1) {
                y = ay2 - by1;
            } else {
                y = ay2 - ay1;
            }
        }

        return a + b - x * y;
    }
};
// @lc code=end

