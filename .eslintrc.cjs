module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier'
  ],
  overrides: [
    {
      env: {
        'jest/globals': true
      },
      files: ['**/*.stories.tsx', '**/*.test.tsx'],
      plugins: ['jest'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'react/react-in-jsx-scope': 'off'
      }
    }
  ]
}
