/*
 * @lc app=leetcode.cn id=1684 lang=cpp
 *
 * [1684] 统计一致字符串的数目
 */
#include <set>
#include <string>
#include <vector>
using namespace std;

// @lc code=start
class Solution {
public:
    int countConsistentStrings(string allowed, vector<string>& words) {
        set<char> s;
        for (size_t i = 0; i < allowed.size(); i++) {
            s.insert(allowed[i]);
        }
        
        int sum = 0;

        for (size_t i = 0; i < words.size(); i++) {
            bool is_ok = true;
            for (size_t j = 0; j < words[i].size(); j++) {
                if (s.count(words[i][j]) == 0) {
                    is_ok = false;
                    break;
                }
            }
            if (is_ok) {
                sum++;
            }            
        }
        return sum;
    }
};
// @lc code=end

