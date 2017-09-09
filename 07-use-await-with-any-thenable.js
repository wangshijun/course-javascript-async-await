const bluebird = require('bluebird');

async function main() {
  console.log('waiting...');
  await bluebird.delay(2000);
  console.log('done!');
}

main();
