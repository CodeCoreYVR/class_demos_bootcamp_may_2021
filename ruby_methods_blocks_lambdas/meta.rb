# def one
#     1
# end

# def two
#     2
# end

# def three
#     3
# end

# def four
#     4
# end

# etc...

# puts one()
# puts two()

#define_method

numbers = {
    1 => "one",
    2 => "two",
    3 => "three",
    #etc
}

numbers.each do |number, number_name|
    #When using the define_method, the first arg 
    #is the name of the method being defined
    #The body of the method is the block that is used
    #for the defined method
    define_method(number_name) do
        number
    end
end

puts one()
puts two()
puts three()

#Another example
define_method("hello_world") do
    puts "Hello World"
end

hello_world()

#Eval

#the eval method takes a string as an argument and will atempt to avaluate it as Ruby code
#this method is dangerous - AVOID USING AT WORK WHENEVER POSSIBLE!

p eval("1 + 1 + 10") #returns 12 asd if it were integers and not a string
p eval("two + two + three")

my_array = ["hello", "hola", "hi"]

my_array.each do |greeting|
    define_method(greeting) do |name|
        "#{greeting} #{name}"
    end
end

#hello(), holla(), hi() created with define_method

code = "
puts hi('Steph')
puts hola('Tam')
"
eval(code)




