module.exports={
  //入口文件
  entry: './src/js/app.js',
  //出口文件
  output: {
    path:__dirname+"/dist/",
    filename:'main.js'
  },
  //需要的装载器
  module:{
    rules:[
      {
        test:/\.css$/,
        exclude:/node_modules/,
        loader:'style-loader!css-loader'
      },
      {
        test:/\.jsx?$/, //js或jsx ,x?表示匹配x字符0次或1次
        exclude: /node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:["@babel/preset-env","@babel/preset-react"]
            //@babel/preset-env 转换ES6到ES5  @babel/preset-react将JSX和其他东西编译到 JavaScript
          }
        }
      },
    ]
  }
}
