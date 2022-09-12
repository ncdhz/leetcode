/*
 * @lc app=leetcode.cn id=87 lang=cpp
 *
 * [87] 扰乱字符串
 */
#include <string>
#include <unordered_map>
using namespace std;
// @lc code=start
class Solution {
private:
    unordered_map<string, bool> cache;
public:
    bool isSame(string s1, string s2) {
        if (s1.length() != s2.length()) {
            return false;
        }
        unordered_map<char, int> maps;
        for (size_t i = 0; i < s1.length(); i++) {
            if (maps.count(s1.at(i)) > 0) {
                maps[s1.at(i)] += 1;
            } else {
                maps.emplace(s1.at(i), 1);
            }
        }
        
        for (size_t i = 0; i < s2.length(); i++) {
            if (maps.count(s2.at(i)) == 0) {
                return false;
            }
            maps[s2.at(i)] -= 1;
            if (maps[s2.at(i)] < 0) {
                return false;
            }
        }
        return true;
    }

    bool isS(string s1, string s2) {
        if (cache.count(s1 + s2) > 0) {
            return cache[s1 + s2];
        }
        if (s1 == s2) {
            return true;
        }
        bool r1 = false;
        bool r2 = false;
        for (size_t i = 1; i < s1.length(); i++) {
            string s11 = s1.substr(0, i);
            string s22 = s2.substr(0, i);
            if (isSame(s11, s22)) {
                r1 = isS(s11, s22);
                r2 = isS(s1.substr(i, s1.length()), s2.substr(i, s2.length()));
                cache.emplace(s11 + s22, r1);
                cache.emplace(s1.substr(i, s1.length()) + s2.substr(i, s2.length()), r2);
                if (r1 && r2) return true;
            }

            s22 = s2.substr(s2.length() - i, s2.length());
            if (isSame(s11, s22)) {
                r1 = isS(s11, s22);
                r2 = isS(s1.substr(i, s1.length()), s2.substr(0, s2.length() - i));
                cache.emplace(s11 + s22, r1);
                cache.emplace(s1.substr(i, s1.length()) + s2.substr(0, s2.length() - i), r2);
                if (r1 && r2) return true;
            }
            s11 = s1.substr(s1.length() - i, s1.length());
            s22 = s2.substr(0, i);
            if (isSame(s11, s22)) {
                r1 = isS(s11, s22);
                r2 = isS(s1.substr(0, s1.length() - i), s2.substr(i, s2.length()));
                cache.emplace(s11 + s22, r1);
                cache.emplace(s1.substr(0, s1.length() - i) + s2.substr(i, s2.length()), r2);
                if (r1 && r2) return true;
            }
        }
        return false;
    }

    bool isScramble(string s1, string s2) {
        cache.clear();
        return isS(s1, s2);
    }
};
// @lc code=end

