import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';
import { AMINO_MAP } from './aminos';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
const contractsDir = join(__dirname, '../assets/contract_schemas');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    tsDisable: {
      files: ['cosmos/authz/v1beta1/tx.amino.ts', 'cosmos/staking/v1beta1/tx.amino.ts']
    },
    prototypes: {
      includePackageVar: false,
      typingsFormat: {
        useDeepPartial: false,
        useExact: false,
        timestamp: 'timestamp',
        duration: 'duration'
      },
      methods: {
        toJSON: true,
        fromJSON: true
      }
    },
    aminoEncoding: {
      enabled: false
      // exceptions: AMINO_MAP
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    },
    cosmwasm: {
      contracts: [
        // DAO DAO CORE
        {
          name: 'dao-core',
          dir: join(contractsDir, '/daodao/dao-core')
        },
        // DAO DAO EXTERNAL
        {
          name: 'cw-admin-factory',
          dir: join(contractsDir, '/daodao/external/cw-admin-factory')
        },
        {
          name: 'cw-fund-distributor',
          dir: join(contractsDir, '/daodao/external/cw-fund-distributor')
        },
        {
          name: 'cw-payroll-factory',
          dir: join(contractsDir, '/daodao/external/cw-payroll-factory')
        },
        {
          name: 'cw-token-swap',
          dir: join(contractsDir, '/daodao/external/cw-token-swap')
        },
        {
          name: 'cw-vesting',
          dir: join(contractsDir, '/daodao/external/cw-vesting')
        },
        {
          name: 'dao-migrator',
          dir: join(contractsDir, '/daodao/external/dao-migrator')
        },
        // DAO DAO PRE PROPOSE
        {
          name: 'dao-pre-propose-approval-single',
          dir: join(contractsDir, '/daodao/pre-propose/dao-pre-propose-approval-single')
        },
        {
          name: 'dao-pre-propose-approver',
          dir: join(contractsDir, '/daodao/pre-propose/dao-pre-propose-approver')
        },
        {
          name: 'dao-pre-propose-multiple',
          dir: join(contractsDir, '/daodao/pre-propose/dao-pre-propose-multiple')
        },
        {
          name: 'dao-pre-propose-single',
          dir: join(contractsDir, '/daodao/pre-propose/dao-pre-propose-single')
        },
        // DAO DAO PROPOSAL
        {
          name: 'dao-proposal-condorcet',
          dir: join(contractsDir, '/daodao/proposal/dao-proposal-condorcet')
        },
        {
          name: 'dao-proposal-multiple',
          dir: join(contractsDir, '/daodao/proposal/dao-proposal-multiple')
        },
        {
          name: 'dao-proposal-single',
          dir: join(contractsDir, '/daodao/proposal/dao-proposal-single')
        },
        // DAO DAO STAKING
        {
          name: 'cw20-stake',
          dir: join(contractsDir, '/daodao/staking/cw20-stake')
        },
        {
          name: 'cw20-stake-external-rewards',
          dir: join(contractsDir, '/daodao/staking/cw20-stake-external-rewards')
        },
        {
          name: 'cw20-stake-reward-distributor',
          dir: join(contractsDir, '/daodao/staking/cw20-stake-reward-distributor')
        },
        // DAO DAO VOTING
        {
          name: 'dao-voting-cw4',
          dir: join(contractsDir, '/daodao/voting/dao-voting-cw4')
        },
        {
          name: 'dao-voting-cw20-staked',
          dir: join(contractsDir, '/daodao/voting/dao-voting-cw20-staked')
        },
        {
          name: 'dao-voting-cw721-staked',
          dir: join(contractsDir, '/daodao/voting/dao-voting-cw721-staked')
        },
        {
          name: 'dao-voting-native-staked',
          dir: join(contractsDir, '/daodao/voting/dao-voting-native-staked')
        },
        // COSMWASM CW4
        {
          name: 'cw4-group',
          dir: join(contractsDir, '/cosmwasm/cw4-group')
        },
        // COSMWASM CW20
        {
          name: 'cw20-base',
          dir: join(contractsDir, '/cosmwasm/cw20-base')
        },
        // COSMWASM CW721
        // Adding @ts-nocheck to top of 'Cw721Base.client.ts' file to prevent "extension" return type conflicts
        {
          name: 'cw721-base',
          dir: join(contractsDir, '/cosmwasm/cw721-base')
        },
        // WASMSWAP
        {
          name: 'wasmswap',
          dir: join(contractsDir, '/wasmswap')
        }
      ],
      outPath,
      options: {
        bundle: {
          bundleFile: 'contracts.ts',
          scope: 'contracts'
        },
        types: {
          enabled: true
        },
        client: {
          enabled: true
        }
      }
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
    console.log("IMPORTANT: add '// @ts-nocheck' to the top of Cw721Base.client.ts file to prevent type conflicts");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
