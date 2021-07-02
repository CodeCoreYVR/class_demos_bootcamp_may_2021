#Creating Lambdas
#Ruby's name for anonymous functions

#Lambdas

say_something = lambda{ puts "this is a lambda"}

#OR

say_something_again = -> { puts "this is also a lambda"}

add_five = lambda { |n| p n + 5 }
power_2 = -> (n) {p n**2 }

#Calling a lambda
# say_something.call
# say_something_again.call
# add_five.call(5)
# power_2.call(3)

#Create a proc
my_proc = Proc.new {|x| p x}

#If you pass the wrong number of arguments to a lambda, it will raise an exception,
#just like a regular method

#Passing an argument to Lambda
times_two = -> (x){x*2}

# p times_two.call(10)

# Using a lambda as a callback

def my_method(code)
    puts "---#{code.class}---"
    puts "Hey you"
    puts code.call(2)
    puts "hello"
end

my_method(times_two)

my_method(my_proc)

#Using as a block
#You can pass a lambda as a method argument
#prefixed with "&" to call it as a block (i.e. using yield)
#This doesn't work with regular methods,
#only procs and lambdas.  In JS you can use regular functions, but not in Ruby

#Example
def map(arr)
    output = []
    for val in arr
        output << yield(val)
    end
    output
end

map([1,2,3,4,5], &power_2)








