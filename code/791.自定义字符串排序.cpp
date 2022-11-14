/*
 * @lc app=leetcode.cn id=791 lang=cpp
 *
 * [791] 自定义字符串排序
 */
#include <map>
#include <set>
#include <sstream>
using namespace std;

// @lc code=start
class Solution {
public:
    string customSortString(string order, string s) {
        map<int, char> ms;
        map<char, int> mss;
        set<char> ss;
        stringstream cs;
        stringstream cs1;
        for (size_t i = 0; i < order.size(); i++) {
            ss.insert(order[i]);
            ms.insert(make_pair(i, order[i]));
        }
        
        for (size_t i = 0; i < s.size(); i++) {
            if (ss.count(s[i]) == 0) {
                cs << s[i];
                continue;
            }
            if (mss.count(s[i]) > 0) {
                mss[s[i]] = mss[s[i]] + 1;
            } else {
                mss.insert(make_pair(s[i], 1));
            }
        }
        
        for (size_t i = 0; i < order.size(); i++) {
            if (mss.count(ms[i]) > 0) {
                for (size_t k = 0; k < mss[ms[i]]; k++) {
                    cs1 << ms[i];
                }
            }
        }
        
        return cs1.str() + cs.str();
    }
};
// @lc code=end

