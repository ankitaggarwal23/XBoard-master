export default {
  prefix: 'x-board-',
  path: '/',
  items: {
    account: 'a',
    token: 't',
    locale: 'l'
  },
 
  unless: ['locale'],
  getItem (key) {
    return key ? this.prefix + this.items[key] : ''
  }
}
