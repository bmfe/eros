#!/usr/bin/env bash

echo "执行 git submodule update --init --recursive "
git submodule update --init --recursive

echo "切换主分支"
# git clone https://github.com/bmfe/WeexErosFramework.git "wxframework"

# git clone https://github.com/bmfe/eros-nexus.git "nexus"

# git clone https://github.com/bmfe/eros-plugin-android-amap.git "ErosPluginAmap"

# git clone https://github.com/bmfe/eros-plugin-android-getui.git "erosplugingt"

# git clone https://github.com/bmfe/eros-plugin-android-wxpay.git "erospluginwxpay"

# git clone https://github.com/bmfe/eros-plugin-android-wxshare.git "erospluginumeng"

cd wxframework
git checkout master
cd ../

cd nexus
git checkout master
cd ../

cd ErosPluginAmap
git checkout master
cd ../

cd erosplugingt
git checkout master
cd ../

cd erospluginwxpay
git checkout master
cd ../

cd erospluginumeng
git checkout master
cd ../


echo "依赖库更新完成"