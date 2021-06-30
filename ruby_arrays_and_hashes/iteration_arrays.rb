my_array = [1,2,3,4,5,6,7]

#The argument, x, represents the value of each element in the array in this case
my_array.each do |x| #the block starts after the 'do' statement. Arguments are within the two pipes '|x|'. Multiple arguments are seperated by commas '|x,y|'
    y = x*2 #this is the code within the block
    puts y
end

#print off the value of each element in the array:
my_array.each do |value|
    puts value
end

# my_array.each { |value| puts value }

#Build, Loop and Print
# value squared
number_array = [1,2,3,4,5]

number_array.each do |x|
    y = x**2
    puts y
end

#Map method

['a', 'b', 'c', 'd', 'e'].map do |element|
    p element.class
end

# The JS way of string interpolation `mlmlm ${}`
#The ruby way of string interpolation "mlmlm #{}""

['a', 'b', 'c', 'd', 'e'].map.with_index do |element, index|
    p "element: #{element}, index: #{index}" 
end

['a', 'b', 'c', 'd', 'e'].each.with_index do |element, index|
    p "element: #{element}, index: #{index}" 
end

#Printing multiple dimensions
a = [[1,7,3], [4,4,6], [7,2,9]]

a.each do |sub_array|
    sub_array.each do |val|
        p val * val
    end
end





