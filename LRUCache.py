class LRUCache:
    def __init__(self, capacity) :
        self.capacity = capacity
        self.li = []