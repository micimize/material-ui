import { createWebpackConfig } from "haul";

export default {
  webpack: env => {
    let conf = createWebpackConfig({
      entry: `./index.js`
    })(env)
    console.log(conf)
    return conf
  }
};
