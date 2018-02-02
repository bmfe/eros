#!/bin/bash

eros_prefix="[\033[34meros\033[0m]"

function error_exit {
    echo "--------------------------------------------"
    echo -e "\033[31m Error code is $1 \033[0m" 1>&2
    echo ""
    echo " Code tips: "
    echo -e "\033[33m1 -> platforms/ios/WeexEros/ is not existed. \033[0m"
    echo -e "\033[33m2 -> cannot remove platforms/ios/WeexEros/WeexiOSSDK, please check file permissions. \033[0m"
    echo -e "\033[33m3 -> cannot remove platforms/ios/WeexEros/Benmu-iOS-Library, please check file permissions. \033[0m"
    echo -e "\033[33m4 -> failed run: git clone https://github.com/bmfe/WeexiOSSDK.git. \033[0m"
    echo -e "\033[33m5 -> failed run: git clone https://github.com/bmfe/Benmu-iOS-Library.git. \033[0m"
    echo -e "\033[33m6 -> pod update failed. \033[0m"
    echo -e "\033[33m7 -> run open xcode failed, make sure you had install xcode in appStore. \033[0m"
    exit 1
}

cd platforms/ios/WeexEros/ || \
error_exit 1
echo -e "$eros_prefix \033[33mtips: make sure xcode had been closed.\033[0m"
echo -e "$eros_prefix Enter ios project"

if [ -e WeexiOSSDK/ ] || [ -e Benmu-iOS-Library/ ]
then
    echo -e "$eros_prefix WeexiOSSDK and Benmu-iOS-Library is existed, remove old sdk."
    rm -rf WeexiOSSDK/ || error_exit 2
    rm -rf Benmu-iOS-Library/ || error_exit 3
else
    echo -e "$eros_prefix No WeexiOSSDK and Benmu-iOS-Library, we will start to clone new sdk..."
fi
    echo -e "$eros_prefix \033[36mMay spend a lot of time, please wait patiently. \033[0m"
    git clone https://github.com/bmfe/WeexiOSSDK.git -q --depth=1 || \
    error_exit 4
    echo -e "$eros_prefix Weex sdk clone done."
    git clone https://github.com/bmfe/Benmu-iOS-Library.git -q --depth=1 || \
    error_exit 5
    echo -e "$eros_prefix Eros sdk clone done." 
    echo -e "$eros_prefix Run pod update and show some update detail:"
    pod update --no-ansi || error_exit 6
    echo ""
    echo -e "$eros_prefix \033[32miOS sdk has been installed, enjoy it! \033[0m"
    open WeexEros.xcworkspace || error_exit 7
