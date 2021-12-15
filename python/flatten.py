l=[[1,'a',['cat'],2],[[[3]],'dog'],4,5,["kodluyoruz","patika.dev"]]

def flatten(l): 
  return flatten(l[0]) + (flatten(l[1:]) if len(l) > 1 else []) if type(l) is list else [l]

print(flatten(l)) 
l2=flatten(l)
print(l2[::-1])