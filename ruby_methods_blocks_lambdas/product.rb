def product (first, *nums)
    result = first
    puts "first: #{first}"
    puts "nums: #{nums}"
    nums.each { |num| result *= num }
    result
end

puts product(1,2,3,4,5,6,7)

