import type { InitConfig } from '@aries-framework/core'

import { KeyDerivationMethod } from '@aries-framework/core'

export function getAgentConfig(name: string): InitConfig {
  return {
    label: name,
    walletConfig: {
      id: name,
      key: 'CwNJroKHTSSj3XvE7ZAnuKiTn2C4QkFvxEqfm5rzhNrb',
      keyDerivationMethod: KeyDerivationMethod.Raw,
    },
  }
}
