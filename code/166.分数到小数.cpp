/*
 * @lc app=leetcode.cn id=166 lang=cpp
 *
 * [166] 分数到小数
 */
#include <string>
#include <vector>
#include <map>
using namespace std;
// @lc code=start
class Solution {
public:
    string fractionToDecimal(int numerator, int denominator) {
        
        int symbol = 1;
        string integer;
        string x;
        long numeratorLong = numerator;
        long denominatorLong = denominator;
        if (numeratorLong % denominatorLong == 0) {
            return to_string(numeratorLong / denominatorLong);
        }

        if (numeratorLong < 0) {
            symbol *= -1;
        }
        if (denominatorLong < 0) {
            symbol *= -1;
        }

        numeratorLong = abs(numeratorLong);
        denominatorLong = abs(denominatorLong);
        integer += to_string(numeratorLong / denominatorLong);
        numeratorLong %= denominatorLong;

        string decimal;
        vector<int> vs;
        bool is_c = false;
        int i = 0;
        while (numeratorLong != 0) {
            numeratorLong *= 10;
            x = to_string(numeratorLong / denominatorLong);
            numeratorLong %= denominatorLong;
            for (i = 0; i < vs.size(); i++)
            {
                if (decimal.at(i) == x.at(0) && vs[i] == numeratorLong) {
                    is_c = true;
                    break;
                }
            }
            if (is_c) {
                break;
            }
            vs.push_back(numeratorLong);
            decimal += x;
            
        }
        if (is_c) {
            decimal = decimal.substr(0, i) + "(" + decimal.substr(i) + ")";
        }
        return (symbol == -1 ? "-": "") + integer + "." + decimal;
    }
};
// @lc code=end

