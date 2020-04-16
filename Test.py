from LRUCache import LRUCache

def main():
    lru = LRUCache(4)
    lru.put(4)
    lru.put(2)

    assert lru.get_cache() == [4, 2], "put method failed"
    print("put method passed")

    assert lru.get(3) ==  -1,"put method failed"
    print("put method passed")
    lru.put(5)
    lru.put(4)
    assert lru.get(2) ==  4,"put method failed"
    print("put method passed")
    assert lru.get_cache() == [2, 5, 4], "put method failed"
    print("get_cache passed") 
    print(" LRU completed")

if __name__ == "__main__":
    main()