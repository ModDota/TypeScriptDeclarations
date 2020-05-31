const { spawnSync } = require('child_process');

const { stdout } = spawnSync('git', ['diff', '--color=always'], { encoding: 'utf8' });
if (stdout) {
  console.log('Error: Generated files are different from committed:\n');
  console.log(stdout);
  process.exit(1);
}
