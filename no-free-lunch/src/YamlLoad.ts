const yaml = require('js-yaml')
const fs = require('fs')

export const loadWallets = (user = '') => {
  try {
    const doc = yaml.load(fs.readFileSync(process.env.ACCOUNT_FILE))
    return doc
  } catch (e) {
    console.error(e)
  }
}
