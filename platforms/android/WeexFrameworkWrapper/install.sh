#!/usr/bin/env bash
echo "开始更新依赖库"
rm -rf wxframework/
rm -rf sdk/
rm -rf bmwidget/

git clone https://github.com/bmfe/WeexErosFramework.git "wxframework"
cd wxframework
git checkout dir-rebuild
cd ../
git clone https://github.com/bmfe/WeexSDK.git "sdk"
cd sdk
git checkout dev
cd ../
git clone https://github.com/bmfe/BMWidget.git "bmwidget"
cd bmwidget
git checkout dev

cd ../

echo "依赖库更新完成"
