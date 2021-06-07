import { config as SumConfig } from './sum';
import { config as MultiplyConfig } from './multiply';
import { pluginContext } from '@markplugin/plugin-core';

pluginContext.registerPlugin(SumConfig);
pluginContext.registerPlugin(MultiplyConfig);
