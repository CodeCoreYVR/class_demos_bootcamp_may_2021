def what_is_it (x)
    if [String, Integer, Array].include? (x.class)
        x.class
    else
        "Something else"
    end
end

p what_is_it "string"
p what_is_it 4
p what_is_it [1,2,3]
p what_is_it 5.0





