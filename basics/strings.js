const ob="nis"
console.log(ob)
console.log(typeof ob)//string
const name="chal"
console.log(ob+name)
//Preferred method for concatenation
console.log(`my name is ${ob}${name}`)
console.log(ob[0])//it's not array but it's an object with key-value property  
//another method
const name1=new String("Nischal")
const newString=name1.substring(0,3)//start and end but doesnt include end
console.log(newString)
console.log(name1.slice(-6)); //starts from reverse->does not make the string reverse or anything 
console.log(name1.replace('c','k'))
console.log(name1.split('i'))