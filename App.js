const note=require('./note')
const yargs=require('yargs')
let title=yargs.argv.title
let body=yargs.argv.body
let cmd=yargs.argv._[0]

if(cmd==="Add"){
  note.Add(title,body)    
}else if(cmd==="Remove"){

    note.Remove(title)
}else if(cmd==="list"){
    note.list(title)
}else if(cmd==="fetsh"){
    note.fetsh(title)
}

