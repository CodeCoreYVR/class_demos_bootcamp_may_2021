num1 = 3
num2 = 5
arr = []



for i in 1..100
   element = []
   element.push 'fizz' if i % 3 == 0
   element.push 'buzz' if i % 5 == 0
   element.push i if element.length == 0 
   #if the above string is empty, it means that it was not divisible by either 3 or 5
   #so we print the number
   arr << element.join('')
end

p arr


