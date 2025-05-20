This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Configure New Tokens and Networks

### 🪙 Adding a New Token

To add a new token, it must first be deployed on the target chains. The easiest way to do this is by using the **[CCIP Token Manager creation wizard](https://tokenmanager.chain.link/)**.

Once deployed, update the `config/networkConfig.ts` file:

#### 1. If the token already exists in the config

Add the new chain-specific address:

```ts
import { hederaTestnet } from 'viem/chains';

const tokensList: Token[] = [
  {
    symbol: 'CCIP-BnM',
    address: {
      // other chain addresses...
      [hederaTestnet.id]: '0x01Ac06943d2B8327a7845235Ef034741eC1Da352',
    },
    logoURL: 'https://smartcontract.imgix.net/tokens/ccip-bnm.webp?auto=compress%2Cformat',
    tags: ['chainlink', 'default'],
  },
];
```

#### 2. If the token does **not** exist in the config

Add the full token entry:

```ts
import { avalancheFuji, sepolia } from 'viem/chains';
import { hederaTestnet } from 'viem/chains';

const tokensList: Token[] = [
  {
    symbol: 'CCTWT',
    address: {
      [avalancheFuji.id]: '0xda89a6c2c9f6e8d94e4a65d8aee482908e9d709a',
      [sepolia.id]: '0x74ef0b124f192e0990b5451ad12a4ec20fcf2b44',
      [hederaTestnet.id]: '0x7c5c738b90f524081e834b6d99f539d58b4ff6df',
    },
    logoURL: 'https://smartcontract.imgix.net/tokens/ccip-bnm.webp?auto=compress%2Cformat',
    tags: ['chainlink', 'default'],
  },
];
```

---

### 🌐 Adding a New Chain

To add a new chain, you'll need information from the [Chainlink CCIP Directory – Hedera Testnet](https://docs.chain.link/ccip/directory/testnet/chain/hedera-testnet).

#### 1. Add the chain to the `chains` array in `config/networkConfig.ts`:

```ts
import { hederaTestnet } from 'viem/chains';

const chains = [
  // other chains...
  {
    chain: hederaTestnet,
    logoURL: 'https://d2f70xi62kby8n.cloudfront.net/bridge/icons/networks/hedera.svg?auto=compress%2Cformat',
  },
];
```

#### 2. Add its router address:

```ts
import { hederaTestnet } from 'viem/chains';

const routerAddresses: AddressMap = {
  // other addresses...
  [hederaTestnet.id]: '0x802C5F84eAD128Ff36fD6a3f8a418e339f467Ce4',
};
```

#### 3. Add its chain selector:

```ts
import { hederaTestnet } from 'viem/chains';

const chainSelectors = {
  // other selectors...
  [hederaTestnet.id]: '222782988166878823',
};
```

#### 4. Add the LINK token address on the new chain:

```ts
import { hederaTestnet } from 'viem/chains';

const linkTokenAddresses: AddressMap = {
  // other tokens...
  [hederaTestnet.id]: '0x326C977E6efc84E512bB9C30f76E30c160eD06FB',
};
```

#### 5. Add the chain to `config/wagmiConfig.ts`:

```ts
import { hederaTestnet } from 'viem/chains';

export const wagmiConfig: Config = createConfig({
  chains: [
    // other chains...
    hederaTestnet,
  ],
  connectors: [injected()],
  transports: {
    // other transports...
    [hederaTestnet.id]: http(),
  },
});
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
