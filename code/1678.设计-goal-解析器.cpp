/*
 * @lc app=leetcode.cn id=1678 lang=cpp
 *
 * [1678] 设计 Goal 解析器
 */
#include <stack>
#include <sstream>
using namespace std;
// @lc code=start
class Solution {
public:
    string interpret(string command) {
        stack<char> sc;
        stringstream s;
        char c;
        for (size_t i = 0; i < command.size(); i++) {
            if (command[i] == 'G') {
                s << "G";
            } else if (command[i] == ')') {
                int j = 0;
                while ((c = sc.top()) != '(') {
                    sc.pop();
                    j++;
                }
                sc.pop();
                if (j == 0) {
                    s << "o";
                } else {
                    s << "al";
                }
            } else {
                sc.push(command[i]);
            }
        }
        return s.str();
    }
};
// @lc code=end

