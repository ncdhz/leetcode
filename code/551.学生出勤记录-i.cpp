/*
 * @lc app=leetcode.cn id=551 lang=cpp
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
class Solution {
public:
    bool checkRecord(string s) {
        int l = 0;
        int a = 0;
        for (size_t i = 0; i < s.length(); i++){
            if (s[i] == 'P') {
                l = 0;
            } else if (s[i] == 'A') {
                l = 0;
                a++;
            } else {
                l++;
            }
            if (a == 2 || l == 3) {
                return false;
            }
        }
        return true;
    }
};
// @lc code=end

