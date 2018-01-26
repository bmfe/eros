#!/usr/bin/env bash
echo "开始更新依赖库"
rm -r wxframework/
rm -r sdk/
rm -r bmwidget/

git clone https://github.com/bmfe/WeexErosFramework.git "wxframework"

git clone https://github.com/bmfe/WeexSDK.git "sdk"

git clone https://github.com/bmfe/BMWidget.git "bmwidget"

cd ../

echo "依赖库更新完成"
