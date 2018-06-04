#!/usr/bin/env bash
echo "开始更新依赖库"
rm -r wxframework/
rm -r sdk/
rm -r nexus/
rm -r ErosPluginAmap/
rm -r erosplugingt/
rm -r erospluginwxpay/
rm -r erospluginumeng/

git clone https://github.com/bmfe/WeexErosFramework.git "wxframework"

git clone https://github.com/bmfe/eros-nexus.git "nexus"

git clone https://github.com/bmfe/eros-plugin-android-amap.git "ErosPluginAmap"

git clone https://github.com/bmfe/eros-plugin-android-getui.git "erosplugingt"

git clone https://github.com/bmfe/eros-plugin-android-wxpay.git "erospluginwxpay"

git clone https://github.com/bmfe/eros-plugin-android-wxshare.git "erospluginumeng"
cd ../

echo "依赖库更新完成"