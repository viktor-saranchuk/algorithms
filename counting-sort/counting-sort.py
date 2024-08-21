arr = [1, 4, 0, 1, 3, 3, 2, 3]

print('initial:', arr)

# O(n + k) => O(n) => O(n^2)
def sort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)
    
    while len(arr) > 0:
        num = arr.pop(0)
        count[num] += 1
    
    for i in range(len(count)):
        while count[i] > 0:
            arr.append(i)
            count[i] -= 1
    
    return arr

sorted = sort(arr)

print('sorted:', sorted)