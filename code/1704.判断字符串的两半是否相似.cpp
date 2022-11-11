/*
 * @lc app=leetcode.cn id=1704 lang=cpp
 *
 * [1704] 判断字符串的两半是否相似
 */
#include <vector>
#include <string>
#include <set>
using namespace std;

// @lc code=start
class Solution {
public:
    bool halvesAreAlike(string s) {
        set<char> cache;
        cache.insert('A');
        cache.insert('E');
        cache.insert('I');
        cache.insert('O');
        cache.insert('U');
        cache.insert('a');
        cache.insert('e');
        cache.insert('i');
        cache.insert('o');
        cache.insert('u');
        int l1 = 0;
        int l2 = 0;
        for (size_t i = 0; i < s.size() / 2; i++) {
            if (cache.count(s[i]) > 0) {
                l1++;
            }
            if (cache.count(s[s.size() - 1 - i]) > 0) {
                l2++;
            }
        }
        return l1 == l2;
    }
};
// @lc code=end

