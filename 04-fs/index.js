const fs = require('fs')

fs.writeFile('./first.txt','First file',(err) => {
    if(err){
        console.log(err)}
    console.log('First file was written');
    fs.appendFile('./first.txt','\nOne more line', (err) => {
        if(err) {
            console.log('err')
        }
        console.log('appended')
        fs.rename('./first.txt','./rename-first.txt',(err) => {
            if(err) {
                console.log(err)
            }
            console.log('rename')
        })
    })
})

