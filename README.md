# ERC20 Starter (Base)

Professional starter for deploying an ERC20 token to Base networks.

## Quick Steps
1. `npm ci`
2. Copy `.env.example` -> `.env` and set `PRIVATE_KEY`, `BASE_RPC` if needed.
3. `npm run compile`
4. Deploy: `npx hardhat run scripts/deploy-erc20.js --network baseSepolia`

## Notes
- Use GitHub Secrets for CI deployments.
