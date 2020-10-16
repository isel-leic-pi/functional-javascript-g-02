/*
## Example
    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)

    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true

    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false
*/ 

// function checkUsersValid(goodUsers) {
//     return function allUsersValid(submittedUsers) {
//         return submittedUsers.every(u => goodUsers.some(u1 => u1.id==u.id))
//     };
//   }
//---
  function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        const  validate = (u1,u2) => u1 == u2;
        return submittedUsers.every( u => goodUsers.some(u1 => validate(u.id,u1.id)));

    };
  }

  module.exports = checkUsersValid