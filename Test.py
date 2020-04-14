from LRUCache import LRUCache

def main():
    lru = LRUCache(4)
    lru.put(4)
    lru.put(2)

    assert lru.get_cache() == {4, 2}, "put method failed"
    print("put method passed")

    assert lru.get(3) ==  -1,"put method failed"
    print("put method passed")
    lru.put(5)
    lru.put(4)
    assert lru.get(3) ==  2,"put method failed"
    print("put method passed")
    assert lru.get_cache() == {2 5, 4}, "put method failed"
    print(" LRU completed")

