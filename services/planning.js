const { Planning, Administration } = require('../db/model/index')

async function getPlanning() {
  const result = await Planning.findAll({
    include: [
      {
        model: Administration,
      }
    ]
    // group: 'BelongRegionID'
  })
  // console.log(result);
  return result
}

module.exports = {
  getPlanning
}
 