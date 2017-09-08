const fetch = require('node-fetch');

async function getZhihuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json();
}

const showColumnInfo = async () => {
  const [feweekly, toolingtips] = await Promise.all([
    getZhihuColumn('feweekly'),
    getZhihuColumn('toolingtips'),
  ]);

  console.log(`NAME: ${feweekly.name}`);
  console.log(`INTRO: ${feweekly.intro}`);

  console.log(`NAME: ${toolingtips.name}`);
  console.log(`INTRO: ${toolingtips.intro}`);
};

showColumnInfo();
