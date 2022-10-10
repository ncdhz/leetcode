/*
 * @lc app=leetcode.cn id=284 lang=cpp
 *
 * [284] 顶端迭代器
 */

// @lc code=start
/*
 * Below is the interface for Iterator, which is already defined for you.
 * **DO NOT** modify the interface for Iterator.
 *
 *  class Iterator {
 *		struct Data;
 * 		Data* data;
 *  public:
 *		Iterator(const vector<int>& nums);
 * 		Iterator(const Iterator& iter);
 *
 * 		// Returns the next element in the iteration.
 *		int next();
 *
 *		// Returns true if the iteration has more elements.
 *		bool hasNext() const;
 *	};
 */

class PeekingIterator : public Iterator {
private:
	bool isHas = false;
	int nextData;
public:
	PeekingIterator(const vector<int>& nums) : Iterator(nums) {
	    // Initialize any member here.
	    // **DO NOT** save a copy of nums and manipulate it directly.
	    // You should only use the Iterator interface methods.
		isHas = Iterator::hasNext();
	    if (isHas) {
			nextData = Iterator::next();
		}
	}
	
    // Returns the next element in the iteration without advancing the iterator.
	int peek() {
        return nextData;
	}
	
	// hasNext() and next() should behave the same as in the Iterator interface.
	// Override them if needed.
	int next() {
		isHas = Iterator::hasNext();
		int d = nextData;
		if (isHas) {
			nextData = Iterator::next();
		}
	    return d;
	}
	
	bool hasNext() const {
	    return isHas;
	}
};
// @lc code=end

