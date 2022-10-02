// if (process.env.NODE_ENV === 'production') {
//   // 我們在 production - return the prod set of keys
//   module.exports = require('./prod');
// } else {
//   // 我們在 development - return the dev keys!!
//   module.exports = require('./dev');
// }
import dev from "@conf/dev";
import prod from "@conf/prod";

const keys = () => {
  if (process.env.NODE_ENV === 'production') {
    // 我們在 production - return the prod set of keys
    return prod;
  } else {
    // 我們在 development - return the dev keys!!
    return dev;
  }
}

export default keys;
