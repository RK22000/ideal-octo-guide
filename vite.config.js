import { defineConfig } from 'vite';
import {findHtmlFiles} from './projectUtils'
import { resolve, basename } from 'path'

const input = {};

findHtmlFiles('.')
    .map(f=>resolve(f))
    .sort((a, b)=> a.split("/").length - b.split("/").length)
    .forEach((f,i) => input[i]=f);

// console.log("Pages being built")
// console.log(input)

export default defineConfig({
    build: {
        rollupOptions: {
            input: input
        }
    }
})