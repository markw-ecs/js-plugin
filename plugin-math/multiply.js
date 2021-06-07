import Plugin from '@markplugin/plugin-core';

export const config = {
    name: "Multiply",
    loader: "import { Multiply } from '@markplugin/plugin-math'",
}

export class Multiply extends Plugin {

    run(args) {
        if (args.length != 2) {
            throw new Error("Sum must have two numbers");
        }

        return args[0] + args[1];
    }
}