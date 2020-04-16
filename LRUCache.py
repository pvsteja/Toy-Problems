class LRUCache:
    def __init__(self, capacity) :
        self.capacity = capacity
        self.li = []
    
    def put(self, value):
        if len(self.li) < self.capacity :
            if not value in self.li :
                self.li.append(value)
        if len(self.li) >= self.capacity :
            if not value in self.li :
                self.li.remove(value)
                self.li.append(value)
        else :
            self.li.remove(value)
            self.li.append(value)
    
    def get(self, index):
        if index > len(self.li):
            return -1
        else :
            ind = self.li[index]
            self.li.remove(self.li[index])
            self.li.append(ind)
            return ind

    
    def get_cache(self):
        return self.li