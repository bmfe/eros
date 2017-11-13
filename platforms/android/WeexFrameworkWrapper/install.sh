#!/usr/bin/env bash
echo "开始更新依赖库"
rm -rf wxframework/
rm -rf sdk/
rm -rf bmwidget/

git clone https://github.com/aa453509345/WeexErosFramework.git "wxframework"
cd wxframework
git checkout dev
cd ../
git clone https://github.com/aa453509345/WeexSDK.git "sdk"
cd sdk
git checkout dev
cd ../
git clone https://github.com/aa453509345/BMWidget.git "bmwidget"
cd bmwidget
git checkout dev

cd ../

echo "依赖库更新完成"
