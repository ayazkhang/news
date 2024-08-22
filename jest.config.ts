import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',  // Use ts-jest preset for TypeScript
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.node.json'  // Use your specific tsconfig for Jest
    }
  }
};

export default config;