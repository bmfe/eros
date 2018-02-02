#!/bin/bash

eros_prefix="[\033[34meros\033[0m]"

function error_exit {
    echo "--------------------------------------------"
    echo -e "\033[31m Error code is $1 \033[0m" 1>&2
    echo ""
    echo " Code tips: "
    echo -e "\033[33m1 -> platforms/ios/WeexEros/ is not existed. \033[0m"
    echo -e "\033[33m2 -> cannot git pull platforms/ios/WeexEros/WeexiOSSDK, you can try a manual operation. \033[0m"
    echo -e "\033[33m3 -> cannot git pull platforms/ios/WeexEros/Benmu-iOS-Library, you can try a manual operation. \033[0m"
    echo -e "\033[33m4 -> pod update failed. \033[0m"
    echo -e "\033[33m5 -> run open xcode failed, make sure you had install xcode in appStore. \033[0m"
    exit 1
}

cd platforms/ios/WeexEros/ || \
error_exit 1
echo -e "$eros_prefix \033[33m tips: make sure xcode had been closed.\033[0m"
echo -e "$eros_prefix Enter ios project"

if [ -e WeexiOSSDK/ ] && [ -e Benmu-iOS-Library/ ]
then
    echo -e "$eros_prefix Start to updating."
    cd WeexiOSSDK/ && git pull || error_exit 2
    cd ../Benmu-iOS-Library/ && git pull || error_exit 3
    cd ..
    echo -e "$eros_prefix Run pod update and show some update detail:"
    pod update --no-ansi || error_exit 4
    echo -e "$eros_prefix \033[32miOS sdk has been updated, enjoy it! \033[0m"
    open WeexEros.xcworkspace || error_exit 5
else
    echo -e "$eros_prefix No WeexiOSSDK or Benmu-iOS-Library file, make sure you had been run eros install."
fi
  