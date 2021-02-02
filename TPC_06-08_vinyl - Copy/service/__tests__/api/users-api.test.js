
'use strict'

const frisby = require('frisby')
const fork = require('child_process').fork

const server = fork('./index', ['./__test__/mocks/users.json'])

afterAll(() => {
    server.kill()
})

test('Test route to get all users', () => frisby
      .get('http://localhost:8000/vinyl/users')
      .expect('status', 404)
);