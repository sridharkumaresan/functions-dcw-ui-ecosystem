export default {
  displayName: '@functions/dcw-react-typography',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: 'test-output/jest/coverage',
  moduleNameMapper: {
    '^@functions/dcw-react-typography$': '<rootDir>/src/index.ts',
    '^@functions/dcw-react-typography/(.*)$': '<rootDir>/src/$1',
  },
};
