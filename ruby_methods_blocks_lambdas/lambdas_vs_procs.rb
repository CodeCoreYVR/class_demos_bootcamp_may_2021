#Procs
#There is no dedicated Lambda class. A lambda is just a specoial kind of proc

#Differences between procs and lambdas:

a = Proc.new { |x,y| puts "I don't care about arguments"}
a.call(4) #even if there are not the expected number of args, a proc would not care and will not give an error like a lambda would

#Procs and lambdas also handle return differently
#A lambda will return normally, like regular method (like anonymous function. Block with a name lambda)
#Procs return from the method enclosing the proc

def test_procs_and_lambdas
    yield
    puts "hello"
end

l = lambda do
    puts "lambda"
    return
end

p = Proc.new do
    puts "Proc"
    return
end

# test_procs_and_lambdas(&l)
test_procs_and_lambdas(&p)

#With a proc, if it encounters its own return, it will stop right there and
#will not continue with the method's return

#1. Difference in how to create them
#2. Proc doesn't care about arguments
#3. Proc returns from its own return and does not care about the rest of the method's code



