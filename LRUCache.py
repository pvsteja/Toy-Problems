class LRUCache:
    def __init__(self, capacity) :
        self.capacity = capacity
        self.li = []
    
    def put(self, value):
        pass
    
    def get(self, index):
        if index >len(self.li):
            return -1
        else :
            ind = self.li[index]
            
    
    def get_cache(self):
        return self.li