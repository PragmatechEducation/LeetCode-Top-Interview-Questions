nums = [ 2,7,11,15 ]
target = 9

def two_sum(arr,sum):
    for i in range(len(arr)):
        for j in range(i+1,len(arr)):
            if arr[i]+arr[j]==sum:
                return(i,j)

print(two_sum(nums,target))