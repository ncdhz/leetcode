/*
 * @lc app=leetcode.cn id=229 lang=cpp
 *
 * [229] 多数元素 II
 */

// @lc code=start
class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        int element1;
        int element2;
        int v1 = 0;
        int v2 = 0;
        for (int num: nums) {
            if (v1 > 0 && num == element1) {
                v1++;
            } else if (v2 > 0 && num == element2) {
                v2++;
            } else if (v1 == 0) {
                element1 = num;
                v1++;
            } else if (v2 == 0) {
                element2 = num;
                v2++;
            } else {
                v1--;
                v2--;
            }
        }
        int vv1 = 0;
        int vv2 = 0;
        for (int num: nums) {
            if (v1 > 0 && num == element1) {
                vv1++;
            } else if (v2 > 0 && num == element2) {
                vv2++;
            }
        }
        vector<int> rs;
        if (v1 > 0 && vv1 > nums.size() / 3) {
            rs.push_back(element1);
        }
        if (v2 > 0 && vv2 > nums.size() / 3) {
            rs.push_back(element2);
        }
        return rs;
    }
};
// @lc code=end

