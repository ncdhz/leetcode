/*
 * @lc app=leetcode.cn id=816 lang=cpp
 *
 * [816] 模糊坐标
 */
#include <vector>
#include <string>
using namespace std;
// @lc code=start
class Solution {
private:
    vector<string> rs;

    bool checkDigit(string s, int i) {
        if (s.size() != 1) {
            if (s[0] == '0' && i != 1) {
                return false;
            }
            if (i != 0 && s[s.size() - 1] == '0') {
                return false;
            }
        }
        return true;
    }

    string makeStr(string a, string b) {
        return "(" + a + ", " + b + ")";
    }

    string genStr(string a, int i) {
        if (i == 0) {
            return a;
        }
        return a.substr(0, i) + "." + a.substr(i, a.size());
    }

    void aC(string s, int i) {
        if (i >= s.size()) {
            return;
        }
        string a = s.substr(0, i);
        string b = s.substr(i, s.size() - i);

        for(int i = 0; i < a.size(); i++) {
            string s1 = genStr(a, i);
            if (checkDigit(s1, i)) {
                for (size_t j = 0; j < b.size(); j++) {
                    string s2 = genStr(b, j);
                    if (checkDigit(s2, j)) {
                        rs.push_back(makeStr(s1, s2));
                    }
                }
                
            }
        }
        aC(s, i + 1);
    }
public:
    vector<string> ambiguousCoordinates(string s) {
        rs.clear();
        aC(s.substr(1, s.size() - 2), 1);
        return rs;
    }
};
// @lc code=end

