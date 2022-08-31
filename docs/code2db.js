const fs = require('fs')
const path = require('path')

function get_file_names(codePath) {
    if (!fs.existsSync(codePath)) {
        console.error(`[${codePath}] does not exist.`)
    } else {
        return fs.readdirSync(codePath)
    }   
}

const codePath = process.argv.slice(2)[0]
if (codePath == undefined) {
    console.error('Please enter the code path.')
} else {
    const db = {
        code: [],
        name: [],
        type: [],
        number: [],
        allTypes: []
    }
    
    const fileNames = get_file_names(codePath)
    if (fileNames !== undefined) {
        for (const fileName of fileNames) {
            let nameSplit = fileName.split('.')
            if (nameSplit.length !== 3) {
                continue
            } else {
                let ns2 = nameSplit[2];
                if (db[ns2] === undefined) {
                    db[ns2] = []
                    db.allTypes.push(ns2)
                }
                db.type.push(ns2)
                let filePath = path.join(codePath, fileName)
                let text = fs.readFileSync(filePath, 'utf8')
                text = text.split(/\r?\n/)
                let ts = []
                for(let t of text) {
                    if (t.trim() !== '') {
                        ts.push(t)
                    } 
                }
                db.code.push(ts.join('\n'))
                db.name.push(nameSplit[1])
                let ii = [db.code.length - 1, parseInt(nameSplit[0])]
                db.number.push(ii)
                db[ns2].push(ii)
            }
        }
        for (let ct of db.allTypes) {
            db[ct].sort((a, b) => a[1] - b[1])
        }
        db.number.sort((a, b) => a[1] - b[1])
        fs.writeFileSync(path.join(__dirname, 'src', 'db.json'), JSON.stringify(db))
    } else {
        console.log('No files.')
    }
}
    