import { defineConfig } from 'vite';
import {findHtmlFiles} from './projectUtils'
import { resolve, basename } from 'path'

const input = {};

findHtmlFiles('.')
    .map(f=>resolve(f))
    .forEach(f=>input[basename(f).split(".")[0]]=f);

export default defineConfig({
    build: {
        rollupOptions: {
            input: input
        }
    }
})