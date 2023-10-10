
import * as fs from 'fs'

let config = JSON.parse(fs.readFileSync(process.cwd() + '/src/resources/json/config.json', 'utf-8'))

let res = {
    json: {
        config
    }
}

export default res
