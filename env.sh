#!/usr/bin/env
init="package.json"
dep="node_modules"
### npm env
## npm init
if [ ! -f $init ] ; then
    npm init
    # babel
    npm install --save-dev babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    # css/style loader
    npm install --save-dev css-loader style-loader
    # react
    npm install --save-dev react react-dom
else echo "$init 已存在，跳过初始化"
fi


## npm dependencies
if [ ! -d $dep ] ;then
    npm install
else
    echo "$dep 已存在，跳过依赖解析"
    exit 0
fi
