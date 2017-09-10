const fetch = require('node-fetch');
const bluebird = require('bluebird');

async function getZhihuColumn(id) {
  await bluebird.delay(1000);
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json();
}

const showColumnInfo = async () => {
  console.time('showColumnInfo');

  const names = ['feweekly', 'toolingtips'];
  const promises = names.map(x => getZhihuColumn(x));
  for (const promise of promises) {
    const column = await promise;
    console.log(`Name: ${column.name}`);
    console.log(`Intro: ${column.intro}`);
  }

  console.timeEnd('showColumnInfo');
};

showColumnInfo();
