import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import fetch from 'node-fetch'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        return { id, ...matterResult.data }
    })
    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1)
}