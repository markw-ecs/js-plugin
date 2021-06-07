import Plugin from './plugin';

class PluginContext {
    constructor() {
        this.pluginConfigs = [];
    }

    registerPlugin(pluginConfig) {
        console.log("Registering Plugin: ", pluginConfig.name);
        this.pluginConfigs.push(pluginConfig);
    }

    getPluginConfigs() {
        return this.pluginConfigs;
    }
}

export const pluginContext = new PluginContext();
export default Plugin;

