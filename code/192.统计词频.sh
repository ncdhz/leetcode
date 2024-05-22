#
# @lc app=leetcode.cn id=192 lang=bash
#
# [192] 统计词频
#

# @lc code=start
# Read from the file words.txt and output the word frequency list to stdout.
cat words.txt | tr -s ' ' '\n' | sort | uniq -c | sort -nr | awk '{print $2, $1}'
# @lc code=end
