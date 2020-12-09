const UserControle = require('../src/Controllers/Login')
describe('Authentication', () => {
  it('should receive JWT token when authenticated with valid credentials', async () => {
    const user = await UserControle.create({
      name: 'Diego',
      email: 'diego@h.com',
      password_hash: '123123'
    })

    expect(user.name).toBe('Diego')
  })
})
