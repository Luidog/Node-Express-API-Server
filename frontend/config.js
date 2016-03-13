System.config({
  //map tells the System loader where to look for things
  map: {
    app: "./static",
  },
  //packages defines our app package
  packages: {
    app: {
      main: './app.js',
      defaultExtension: 'js'
    }
  }
});