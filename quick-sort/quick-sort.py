from numpy import random
import math 
# O(n * log(n))
#arr = [math.floor(item*1000) for sub_list in random.rand(1, 4) for item in sub_list]
arr = [5, 2, 0, 6, 3]

def partition(array, low, high):                         
    print('array:', array, 'low:', low, 'high:', high)
    pivot = array[high]                                      
    print('pivot:', pivot)
    i = low - 1                                                
    print('i:', i)
    for j in range(low, high):                              
        print('j:', j)
        print(array[j], '<=', pivot, array[j] <= pivot)
        if array[j] <= pivot:                                  
            i += 1                                            
            print('i:', i)
            array[i], array[j] = array[j], array[i]       
            print('array:', array)
    array[i + 1], array[high] = array[high], array[i + 1]  
    print('array:', array)
    print('pivot_idx:', i+1)
    return i + 1                                                

def quickSort(array, low=0, high=None):
    if high is None:
        high = len(array) - 1
    
    if low < high:
        pivot_idx = partition(array, low, high)
        quickSort(array, low, pivot_idx-1)
        quickSort(array, pivot_idx + 1, high)
        
quickSort(arr)
print('Sorted array:', arr)