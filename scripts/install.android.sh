#!/bin/bash

eros_prefix="[\033[34meros\033[0m]"

function error_exit {
    echo "--------------------------------------------"
    echo -e "\033[31m Error code is $1 \033[0m" 1>&2
    echo ""
    echo " Code tips: "
    echo -e "\033[33m1 -> platforms/android/WeexFrameworkWrapper/ is not existed. \033[0m"
    echo -e "\033[33m2 -> cannot remove platforms/android/WeexFrameworkWrapper/wxframework, please check file permissions. \033[0m"
    echo -e "\033[33m3 -> cannot remove platforms/android/WeexFrameworkWrapper/sdk, please check file permissions. \033[0m"
    echo -e "\033[33m4 -> cannot remove platforms/android/WeexFrameworkWrapper/bmwidget, please check file permissions. \033[0m"
    echo -e "\033[33m5 -> failed run: git clone https://github.com/bmfe/WeexErosFramework.git. \033[0m"
    echo -e "\033[33m6 -> failed run: git clone https://github.com/bmfe/WeexSDK.git. \033[0m"
    echo -e "\033[33m7 -> failed run: git clone https://github.com/bmfe/BMWidget.git. \033[0m"
    exit 1
}

cd platforms/android/WeexFrameworkWrapper/ || \
error_exit 1
echo -e "$eros_prefix Enter android project"

if [ -e wxframework/ ] || [ -e sdk/ ] || [ -e bmwidget/ ]
then
    echo -e "$eros_prefix mwxframework, sdk or bmwidget has been existed, remove old sdk."
    rm -rf wxframework/ || error_exit 2
    rm -rf sdk/ || error_exit 3
    rm -rf bmwidget/ || error_exit 4
else
    echo -e "$eros_prefix No eros devDependencies, we will start to clone new sdk..."
fi
    echo -e "$eros_prefix \033[36mMay spend a lo""t of time, please wait patiently. \033[0m"
    git clone https://github.com/bmfe/WeexErosFramework.git wxframework --depth=1 -q || \
    error_exit 5
    echo -e "$eros_prefix Eros wxframework clone done."
    git clone https://github.com/bmfe/WeexSDK.git sdk --depth=1 -q || \
    error_exit 6
    echo -e "$eros_prefix Weex sdk clone done."
    git clone https://github.com/bmfe/BMWidget.git bmwidget --depth=1 -q || \
    error_exit 7
    echo -e "$eros_prefix Eros bmwidget clone done."
    echo ""
    echo -e "$eros_prefix \033[32mAndroid sdk has been installed, enjoy it! \033[0m"
