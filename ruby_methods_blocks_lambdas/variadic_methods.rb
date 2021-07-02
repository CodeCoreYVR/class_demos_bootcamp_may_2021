def product(*nums)
    nums.reduce(1) do |total, num|
        total*num
    end
end


p product(1,2,3,4,5,6,7)

#In JS, we had something similar to this for defaults

def multiply(a=1, b)
    a*b
end

p multiply 4,5




