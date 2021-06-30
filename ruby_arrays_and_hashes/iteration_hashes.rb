#Hashes also have a .each method

movies_with_directors = {
    "Forrest Gump" => "Robert Zemeckis",
    "The Matrix" => "The Watchowskis",
    "Pulp Fiction" => "Quentin Tarintino",
    :Zero_Dark_Thirty => "Kathryn Bigelow"
}

movies_with_directors.each do |key, value|
    puts "#{key}'s director is #{value}."
end

canada = {
    "BC" => "Victoria",
    :Alberta => "Edmonton",
    :Saskatchewan => "Regina"
}

canada.each { |province, city| puts "#{province}'s capital is #{city}."}

canada.each_key { |province| p province }

canada.each_value { |city| p city }

# Print all keys in hash and all members of value array
my_hash = { 'BC' => ["Vancouver", "Richmond"], 'AB' => ['Edmonton', 'Calgary']}

my_hash.each do |key, values|
    puts "#{key}:#{values.join(', ')}"
end





