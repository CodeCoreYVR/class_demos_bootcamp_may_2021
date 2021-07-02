#Methods

#A method is created with the "def" keyword to definine a method.
#It takes in any arguments you want, separarted by commas
#Paretheses are optional

def multiply(a,b)
    a*b
end

# multiply 4, 5 # or multiply(4,5)


#Methods that retrun boolean usually ends with a "?" at the end.  
#This is convention, but Ruby does not enforce it, for example:

def is_a_cat?(a)
    p "#{a} is a cat"
end

# is_a_cat?('cat')

#The above is not good practise

#In methods, thje last line implicitly returns with a method
#If you want to return explicitly, use the return keyword

#Using a return keyword

def my_method (a, b)
    return a*b
    a+b  
end

p my_method 3,2


