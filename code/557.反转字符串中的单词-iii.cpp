/*
 * @lc app=leetcode.cn id=557 lang=cpp
 *
 * [557] 反转字符串中的单词 III
 */
#include <sstream>
using namespace std;
// @lc code=start
class Solution {
public:
    string reverseWords(string s) {
        stringstream ss;
        int i = 0;
        while (i < s.length()) {
            string ms = "";
            while (i < s.length() && s[i] != ' ') {
                ms = s[i] + ms;
                i++;
            }
            ss << ms;
            if (i < s.length()) {
                ss << " ";
            }
            i++;
        }
        return ss.str();
    }
};
// @lc code=end

