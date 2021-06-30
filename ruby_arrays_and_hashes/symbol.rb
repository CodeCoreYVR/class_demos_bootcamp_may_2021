# symbol is denoted with colon in front :im_a_symbol
#symbols are immutable but the value they point to can be mutable


#change key into symbol or string
p "hello".to_sym
p "hello".intern
p :hello.intern
p :hello.to_s

