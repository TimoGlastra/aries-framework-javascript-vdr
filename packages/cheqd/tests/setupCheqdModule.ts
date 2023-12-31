import type { CheqdModuleConfigOptions } from '../src'

import { AskarModule } from '@aries-framework/askar'
import { DidsModule } from '@aries-framework/core'
import { ariesAskar } from '@hyperledger/aries-askar-nodejs'

import { CheqdModule, CheqdDidRegistrar, CheqdDidResolver } from '../src'

export const getCheqdModuleConfig = (seed?: string, rpcUrl?: string) =>
  ({
    networks: [
      {
        rpcUrl: rpcUrl || 'http://localhost:26657',
        network: 'testnet',
        cosmosPayerSeed:
          seed ||
          'sketch mountain erode window enact net enrich smoke claim kangaroo another visual write meat latin bacon pulp similar forum guilt father state erase bright',
      },
    ],
  } satisfies CheqdModuleConfigOptions)

export const getCheqdModules = (seed?: string, rpcUrl?: string) => ({
  cheqd: new CheqdModule(getCheqdModuleConfig(seed, rpcUrl)),
  dids: new DidsModule({
    registrars: [new CheqdDidRegistrar()],
    resolvers: [new CheqdDidResolver()],
  }),
  askar: new AskarModule({ ariesAskar }),
})
