import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';
import { AMINO_MAP } from './aminos';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
const contractsDir = join(__dirname, '../assets/contracts');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    tsDisable: {
      files: [
        'cosmos/authz/v1beta1/tx.amino.ts',
        'cosmos/staking/v1beta1/tx.amino.ts'
      ]
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
        {
          name: 'dao-core',
          dir: join(contractsDir, '/daodao/dao-core')
        },
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
          name: 'dao-pre-propose-approval-single',
          dir: join(
            contractsDir,
            '/daodao/pre-propose/dao-pre-propose-approval-single'
          )
        },
        {
          name: 'dao-pre-propose-approver',
          dir: join(
            contractsDir,
            '/daodao/pre-propose/dao-pre-propose-approver'
          )
        },
        {
          name: 'dao-pre-propose-multiple',
          dir: join(
            contractsDir,
            '/daodao/pre-propose/dao-pre-propose-multiple'
          )
        },
        {
          name: 'dao-pre-propose-single',
          dir: join(contractsDir, '/daodao/pre-propose/dao-pre-propose-single')
        },
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
          dir: join(
            contractsDir,
            '/daodao/staking/cw20-stake-reward-distributor'
          )
        },
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
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
