function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(u => goodUsers.some(u1 => u1.id==u.id))
    };
  }

  module.exports = checkUsersValid

  /*    module.exports = function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
          return goodUsers.some(function(goodUser) {
            return goodUser.id === submittedUser.id
          })
        })
      }
    }
*/