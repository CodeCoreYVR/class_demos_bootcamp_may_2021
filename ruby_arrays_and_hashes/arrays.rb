# Arrays

#Adding elements to an array

#.push a method that will add an element to the end of an array

arr = [1,2,3]
p arr
arr.push(4)
p arr  #add 4 to end of array and mutate it

# shovel operator <<
# another way to add an element to the end of an array

arr << 5

p arr #add 5 to end of array and mutate it

#at the moment our array looks like [1,2,3,4,5]

p arr.include?(6) #false
p arr.include?(4) #true

#Get the number of elements in an array
# returns the number of elements within the array:
#All the below return 5

p arr.count 
p arr.length
p arr.size

#To get the specific index of an element, use .index
p arr.index(2) # return index number 1

# Turn multi-dimensional array into a one-dimensional array
# .flatten

multi_array = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]
p multi_array.flatten

d3_array = [[[1],[2],[3]], [[4],[5],[6]], [[7], [8], [9]]]
p d3_array.flatten(1)
p d3_array.flatten(2)

#Add and remove elements from the beginning of arrays

#.shift
#can remove element from the start of an array but
#returns the removed element

a = ['a', 'b', 'c', 'd', 'e']
p a.shift
p a

#.unshift
#retruns the mutated array with the new elements
p a.unshift('a')
p a

#.drop
# returns a new array without the dropped elements
#immutable - does not mutate original array
p a.drop 2
p a

#Many other methods, like delete_at 0 (specify at which index you want to delete, i.e. 0 is first element)

#Covert a string sentence into an array of words:
#.split
string = "Hello everyone, why are you sleeping?"
p string.split ' '

#To convert an array of words into a string sentence:
#.join

p ['Hello', 'World'].join ' '

#Swap elements
a2 = ['Hello', 'CodeCore', 'Students']
a2 = a2[2], a2[1], a2[0]
p a2

#Replace elements
a2[0..1] = [1,2]
p a2










