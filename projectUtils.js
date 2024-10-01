import { readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import ignore from 'ignore';
import { readFileSync } from 'fs';

// Load and parse the .gitignore file
const gitignorePath = resolve('.gitignore');
const gitignore = ignore();
gitignore.add(readFileSync(gitignorePath).toString());


/**
 * Recursively find all HTML files while ignoring files from .gitignore
 * @param {string} dir - The directory to start the search in
 * @returns {string[]} - An array of HTML file paths
 */
export function findHtmlFiles(dir) {
  let htmlFiles = [];

  const filesAndDirs = readdirSync(dir);

  filesAndDirs.forEach((fileOrDir) => {
    const fullPath = join(dir, fileOrDir);

    // Ignore files in .gitignore
    if (gitignore.ignores(fullPath.replace(process.cwd() + '/', ''))) {
      return;
    }

    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      htmlFiles = htmlFiles.concat(findHtmlFiles(fullPath));
    } else if (stats.isFile() && fileOrDir.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  });

  return htmlFiles;
}

// Usage
// const htmlFiles = findHtmlFiles('.');
// console.log(htmlFiles);
