const { Value } = require('../db/model/index')

async function getValueList(listQuery) {
  const { id } = listQuery
  const result = await Value.findAll({
    where: {
      IndexID: id
    },
    // group: 'Time'
  })
  // console.log(result);
  return result
}

module.exports = {
  getValueList
}
 