import recommendedIncremental from 'eslint-config-agent/recommended-incremental'

export default [
  ...recommendedIncremental,
  {
    ignores: ['dist/**', 'coverage/**'],
  },
  {
    // jest's mockResolvedValue/mockRejectedValue overloads require an
    // explicit `undefined` argument for void-returning mocks; the rule's
    // autofixer strips it and breaks the TS build.
    rules: {
      'unicorn/no-useless-undefined': 'off',
    },
  },
]
