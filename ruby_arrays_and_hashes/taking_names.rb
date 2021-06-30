names = []

while name = gets.chomp
    break if name == 'exit'
    names << name
end

names.each do |x|
    p x.capitalize!
end


