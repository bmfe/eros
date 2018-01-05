#!/bin/bash

sudo rm -rf WeexiOSSDK/
sudo rm -rf Benmu-iOS-Library/
#sudo rm -rf Podfile.lock
#sudo rm -rf Pods/

git clone https://github.com/bmfe/WeexiOSSDK.git

git clone https://github.com/bmfe/Benmu-iOS-Library.git

pod update

echo =========================
echo  🍺   ios资源文件加载完成
echo =========================

open WeexEros.xcworkspace
