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
    echo -e "\033[33m4 -> cannot remove platforms/android/WeexFrameworkWrapper/nexus, please check file permissions. \033[0m"
    echo -e "\033[33m5 -> cannot remove platforms/android/WeexFrameworkWrapper/ErosPluginAmap, please check file permissions. \033[0m"
    echo -e "\033[33m6 -> failed run: git clone https://github.com/bmfe/WeexErosFramework.git. \033[0m"
    echo -e "\033[33m7 -> failed run: git clone https://github.com/bmfe/WeexSDK.git. \033[0m"
    echo -e "\033[33m8 -> failed run: git clone https://github.com/bmfe/eros-nexus.git. \033[0m"
    echo -e "\033[33m9 -> failed run: git clone https://github.com/bmfe/eros-plugin-android-amap.git. \033[0m"
    exit 1
}

cd platforms/android/WeexFrameworkWrapper/ || \
error_exit 1
echo -e "$eros_prefix Enter android project"

if [ -e wxframework/ ] || [ -e sdk/ ] || [ -e nexus/ ] || [ -e ErosPluginAmap/ ]
then
    echo -e "$eros_prefix mwxframework, sdk ,nexus or ErosPluginAmap has been existed, remove old sdk."
    rm -rf wxframework/ || error_exit 2
    rm -rf sdk/ || error_exit 3
    rm -rf nexus/ || error_exit 4
    rm -rf ErosPluginAmap/ || error_exit 5
else
    echo -e "$eros_prefix No eros devDependencies, we will start to clone new sdk..."
fi
    echo -e "$eros_prefix \033[36mMay spend a lot of time, please wait patiently. \033[0m"
    git clone https://github.com/bmfe/WeexErosFramework.git wxframework --depth=1 -q || \
    error_exit 6
    echo -e "$eros_prefix Eros wxframework clone done."
    git clone https://github.com/bmfe/WeexSDK.git sdk --depth=1 -q || \
    error_exit 7
    echo -e "$eros_prefix Weex sdk clone done."
    git clone https://github.com/bmfe/eros-nexus.git nexus --depth=1 -q || \
    error_exit 8
    echo -e "$eros_prefix Eros nexus clone done."
    git clone https://github.com/bmfe/eros-plugin-android-amap.git ErosPluginAmap --depth=1 -q || \
    error_exit 9
    echo -e "$eros_prefix Eros ErosPluginAmap clone done."

    echo ""
    echo -e "$eros_prefix \033[32mAndroid sdk has been installed, enjoy it! \033[0m"
