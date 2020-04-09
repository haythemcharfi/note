const fs=require('fs')
const Readnote=()=>{
  try{  return  JSON.parse(fs.readFileSync('notes.txt'))}
  catch{return []}
}

const Add=(title,body)=>{
   try{ let table=Readnote()
    let note={
        title:title,
        body:body
    }
    table.push(note)
    fs.writeFileSync('notes.txt',JSON.stringify(table))}
    catch (err){console.log(erreur)}
}
const Remove=(title)=>{
let tab=Readnote()
fs.writeFileSync("notes.txt",JSON.stringify(tab.filter(e=>e.title!=title)))


}
const list=(title)=>{
   
    console.log(JSON.parse(fs.readFileSync("notes.txt")))

}
const fetsh=(title)=>{
    let tab=Readnote()
console.log(tab.filter(e=>e.title===title))

}
    module.exports={
        Add:Add,
        Remove:Remove,
        list:list,
        fetsh:fetsh
    }