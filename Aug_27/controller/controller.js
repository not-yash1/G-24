
import fs from 'fs'

export const fileUpdate = (req, res, next) => {
    const date = new Date(Date.now());
    fs.appendFileSync('view.txt', `${req.method}   ${date}   ${req.url} \n`)
    next();
}