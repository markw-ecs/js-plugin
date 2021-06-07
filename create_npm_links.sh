#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

pushd $SCRIPT_DIR/plugin-core
    npm link
popd

pushd $SCRIPT_DIR/plugin-math
    npm link
    npm link "@markplugin/plugin-core"
popd

pushd $SCRIPT_DIR/plugin-numeral
    npm link
    npm link "@markplugin/plugin-core"
popd

pushd $SCRIPT_DIR/plugin-consumer
    npm link
    npm link "@markplugin/plugin-core" "@markplugin/plugin-math" "@markplugin/plugin-numeral"
popd