# => ruby rocket
#keys in a hash can be strings, integers, or symbols

#ruby rocket some older syntax
h = { :symbol => 1, 'string' => 2, 4 => 3}

#newer syntax:
h = {jane: 10, jim: 6}

#All keays created using the above syntax are symbols

#hashes are ruby objects
grades = {
    "Jane Doe" => 10,
    "Jim Doe" => 6,
    :lisa => 12,
    "lisa" => 500
}

# p grades
#Selecting elements
#Use square brackets []
p grades["Jane Doe"] # returns the value 10

#a symbol is an immutable string.  You can create the using a colon :
# :hello #symbol hello
# symbols themselves are a value
p :hello.class #returns Symbol class

grades = {
    "Jane Doe" => 20,
    "Jim Doe" => 16,
    :lisa => 40,
    "lisa" => 501
}

p grades

grades[:lisa] = 50000
p grades
#symbols are immutable but their values are mutable

#Method to return array of Hash keys:
#.keys
#returns all the keys of a hash as an array

p grades.keys

#Method to return array of Hash values:
#.keys
#returns all the values of a hash as an array

p grades.values
