import Plugin from '@markplugin/plugin-core';

export const config = {
    name: "Decimal",
    loader: "import { Decimal } from '@markplugin/plugin-numeral'",
}

export class Decimal extends Plugin {

    run(args) {
        if (args.length != 1) {
            throw new Error("Decimal must have one number");
        }

        return args[0];
    }
}