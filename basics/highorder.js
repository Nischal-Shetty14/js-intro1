let greet="Nischal "
for(const i of greet)
{
    console.log(i)
}//in string this prints indi characters

//Map
const map=new Map()
map.set('Nis',"Nischal")
console.log(map)
for(const [key,value] of map)
{
    console.log(key,":-",value)//decentralising map values
}
//maps are iterable,objects are not(in this way)