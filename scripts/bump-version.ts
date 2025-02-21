import { execSync } from 'child_process';
import * as path from 'path';

const cliArgs = process.argv;

if (cliArgs.length < 4) {
  console.log('Usage: npm run bump:<lua-types|panorama-types> <major|minor|patch>');
  process.exit(1);
}

const packageDirectory = cliArgs[2];
const packageName = path.basename(packageDirectory);
const bumpType = cliArgs[3];

if (bumpType !== 'major' && bumpType !== 'minor' && bumpType !== 'patch') {
  console.log(`'${bumpType}' should be one of: major, minor or patch`);
  process.exit(1);
}

execSync(`npm version ${bumpType} --git-tag-version false`, { cwd: packageDirectory });
const packageVersion = require(path.resolve(path.join(packageDirectory, 'package.json'))).version;

execSync(`git add ${path.join(packageDirectory, 'package.json')}`);
execSync(`git add ${path.join(packageDirectory, 'package-lock.json')}`);
execSync(`git commit -m "${packageName} ${packageVersion}"`);
execSync(`git tag ${packageName}@${packageVersion}`);

console.log(`Successfully bumped ${packageName} to version ${packageVersion}`);
