from numpy import random
import math 

# O(n^2)
arr = [math.floor(item*1000) for sub_list in random.rand(1, 100) for item in sub_list]

n = len(arr)
for i in range(n-1):
    min_idx = i
    for j in range(i + 1, n):
        if arr[j] < arr[min_idx]:
            min_idx = j
    min_val = arr.pop(min_idx)
    arr.insert(i, min_val)
    
print('sorted:', arr)