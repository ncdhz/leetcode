/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = {}
    this.cache_list = []
    this.capacity = capacity
    this.i = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let r = this.cache[key]
    if (r === undefined) {
        return -1
    } else {
        this.cache_list.splice(this.cache_list.indexOf(key), 1)
        this.cache_list.push(key)
    }
    return r
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let r = this.get(key)
    if (r !== -1) {
        this.cache[key] = value
        this.cache_list.splice(this.cache_list.indexOf(key), 1)
        this.cache_list.push(key)
    } else {
        this.i += 1
        if (this.i > this.capacity) {
            let x = this.cache_list.shift()
            delete this.cache[x]
            this.i = this.capacity
        } 
        this.cache[key] = value
        this.cache_list.push(key)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

