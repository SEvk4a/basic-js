const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const array = [];
  if (!Array.isArray(members)) {
    return false;
  }

  members = members.filter((member) => typeof member == 'string');

  for (let i = 0; i < members.length; i++) {
    const firstCharacter = members[i].trim()[0].toUpperCase();
    array.push(firstCharacter);
  }
  return array.sort().join('');
}

module.exports = {
  createDreamTeam,
};
