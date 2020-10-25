'use strict'
function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(
            function userValid(submittedUser) {
                return goodUsers.some( goodUser => goodUser.id === submittedUser.id
                )
            }
        )
    };
}

module.exports = checkUsersValid