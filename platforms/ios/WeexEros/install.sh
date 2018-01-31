#!/bin/bash

sudo rm -rf WeexiOSSDK/
sudo rm -rf Benmu-iOS-Library/
#sudo rm -rf Podfile.lock
#sudo rm -rf Pods/

git clone https://github.com/bmfe/WeexiOSSDK.git
#cd WeexiOSSDK
#git checkout 0.17.0
#cd ../

git clone https://github.com/bmfe/Benmu-iOS-Library.git
cd Benmu-iOS-Library
git checkout 1.1.4
cd ../

pod update

echo =========================
echo  🍺   ios资源文件加载完成
echo =========================

open WeexEros.xcworkspace
