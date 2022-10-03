/*
 * @lc app=leetcode.cn id=227 lang=cpp
 *
 * [227] 基本计算器 II
 */
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    int calculate(string s) {
        vector<int> ds;
        vector<char> cs;
        int sum = 0;
        for (size_t i = 0; i < s.length(); i++) {
            if (s[i] == ' ') {
                continue;
            }
            if (s[i] == '-' || s[i] == '+' || s[i] == '/' || s[i] == '*') {
                if (!cs.empty()) {
                    char c = cs.back();
                    if (c == '*' || c == '/') {
                        if (c == '*') {
                            sum = sum * ds.back();
                        } else if (c == '/') {
                            sum = ds.back() / sum;
                        }
                        ds.pop_back();
                        cs.pop_back();
                    }
                }
                ds.push_back(sum);
                sum = 0;
                cs.push_back(s[i]);
            } else {
                sum = sum * 10 + (s[i] - '0');
            }
        }
        if (!cs.empty()) {
            char c = cs.back();
            if (c == '*' || c == '/') {
                if (c == '*') {
                    sum = sum * ds.back();
                } else if (c == '/') {
                    sum = ds.back() / sum;
                }
                ds.pop_back();
                cs.pop_back();
            }
        }
        ds.push_back(sum);
        sum = ds[0];
        for (size_t i = 0; i < cs.size(); i++) {
            if (cs[i] == '+') {
                sum += ds[i + 1];
            } else if (cs[i] == '-') {
                sum -= ds[i + 1] ;
            }
        }
        
        return sum;
    }
};
// @lc code=end

