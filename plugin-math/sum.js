import Plugin from '@markplugin/plugin-core';

export const config = {
    name: "Sum",
    loader: "import { Sum } from '@markplugin/plugin-math'",
}

export class Sum extends Plugin {
    constructor() {
        
    }

    run(args) {
        if (args.length != 2) {
            throw new Error("Sum must have two numbers");
        }

        return args[0] + args[1];
    }
}