def my_yield_method
    p "I'm a yield method"
    yield
end

# p my_yield_method { 2+2 }

# If you try to yield without a block you will
# get a no block given error

#this is also a block:
#do
#end

def my_method
    x =15
    yield(x) if block_given?
    puts "Bye"
end

my_method do |my_arg|
    puts "I'm a block - x is #{my_arg}"
end

#Yield is like calling the block. Almost like a callback function. It will call the last expression from the block

#You can check if a block has been passed with block_given? method

def do_something_with_block
    return "no block given" unless block_given?
    yield
end

p do_something_with_block
p do_something_with_block {"hello world"}

#Yield can be used multiple times

def print_once
    yield
end

print_once{ puts "Block is being run"}

def print_twice
    yield
    yield
end

print_twice{ puts "Block is being run"}
