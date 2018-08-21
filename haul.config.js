import { createWebpackConfig } from "haul";

export default {
  webpack: env => {
    let conf = createWebpackConfig({
      entry: `./index.js`
    })(env)
    conf.module.rules[1].exclude =
      /node_modules(?!.*[\/\\](react|@expo|pretty-format|haul|metro|svgs|css-property-parser|camelcase))/;
    return conf
  }
};
