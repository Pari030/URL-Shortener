import { Database } from 'sqlite3';
import fs from 'fs';

export const db = new Database("test.db")

if (!fs.existsSync("test.db")) {
    db.serialize(() => {
        db.run("CREATE TABLE links (slug TEXT PRIMARY KEY, link TEXT)")
    })
}

export function slugExists(slug: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        db.get("SELECT COUNT(*) as count FROM links WHERE slug = ?", [slug], (err, row) => {
            if (err) {
                reject(err)
            } else {
                resolve(row.count > 0)
            }
        })
    })
}

export function randomSlug(length: number): string {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1
    }
    return result
}


export function getLinkBySlug(slug: string): Promise<string> {
    return new Promise((resolve, reject) => {
        db.get("SELECT link FROM links WHERE slug = ?", [slug], (err, row) => {
            if (err) {
                reject(err)
            } else {
                resolve(row.link)
            }
        })
    })
}