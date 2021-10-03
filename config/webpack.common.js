module.exports = {
  resolve: {
    extensions: [".js", ".ts", ".mjs", ".jsx", ".tsx", ".css"],
    alias: {
      events: "events",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?(j|t)s$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(j|t)sx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-react",
            "@babel/preset-env",
            "@babel/preset-typescript",
          ],
        },
      },
    ],
  },
};
