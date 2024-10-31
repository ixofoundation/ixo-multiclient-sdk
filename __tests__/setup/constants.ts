// IMPORTANT! If you change these please revert before commiting, these are constants that is
// repeatedly used for devnet reset.

import { ChainNetwork } from "../../src/custom_queries/chain.types";

// DEVNET
// ========================================
export const chainNetwork: ChainNetwork = "testnet";

export const dids = {
  // impactsRootUserDid: "did:x:zQ3shj4dPHhbsSXYcmsZLoDkiPJxkHhWYZpihWSQn95fuos2y",
  // daoClass: "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14",
  // oracleClass: "did:ixo:entity:065ba0b99948e2e8ff3228836dee423b",
  // protocolClass: "did:ixo:entity:61392c571ef644d54d77e4daf611bf89",
  // assetClass: "did:ixo:entity:4d94f9b6078432648a755203eed50644",
  // impactsDao: "did:ixo:entity:2f22535f8b179a51d77a0e302e68d35d",
  // emergingDao: "did:ixo:entity:72a27013b1d2f9c3561145e4a424778a",
  // carbonOracle: "did:ixo:entity:7889238a0a6a68554f65f5c7da96f13b",
  // cleanCookingProtocol: "did:ixo:entity:8fcbc757e75c120dd4beae0e5696fd38",
  // prospectDao: "did:ixo:entity:8e8fc81e088154de379474db2f0aa2a9",
  // prospectOracle: "did:ixo:entity:f2235630689d4b54a561ca3de57494f6",
  // ecsDao: "did:ixo:entity:a1fcead81eab2f1158a726597d872413",
  // assetCollection: "did:ixo:entity:eb98bb2c92a62557b6c88c6f80e8d258",
  // carbonAsset: "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb",
  // ecsProject: "did:ixo:entity:29198b8a823e183a5e84d7ebf2f0febd",
  // legacyCookingProtocol: "did:ixo:entity:8ad0c5568aea9632db56a846a7112353",
  // legacyCollection: "did:ixo:entity:f645a3221d05eba19fefb31f1025f3af",
  // Yoma/Umuzi
  // yomaDao: "did:ixo:entity:50a7d92f449ab5752f63c64521adb3cc",
  // coderByteDao: "did:ixo:entity:8abd3503cbf6717393478117b8df4e6e",
  // coderByteOracle: "did:ixo:entity:23bc6e04fea6d884b4efc8a0f31bb740",
  // learnershipProtocol: "did:ixo:entity:0c12012217e08d3da96d33c85e09b9ad",
  // umuziDao: "did:ixo:entity:0fb18fbac5f4e18c75ced2f23a021fe9",
  // umuziProjectDid: "did:ixo:entity:b3104e1a5ffcbee06007d29525f3e07b",
  // umuziAssetCollection: "did:ixo:entity:3e7253499daf46aab546ab7d2b884bde",
  // educationAssetDid: "did:ixo:entity:4af7faf72e47f4b91a38750cb6e359a7",
};

export const intermediaryRegistry = {
  intermediaries:
    [
      // {
      //   name: "IDCC",
      //   daoTagsProof: "",
      //   projectTagsProof: "",
      //   blockchainAddress: "ixo16xl3c8jqnk2ujk2zyafkrcm2ahkmvll6aduvej",
      //   did: "did:ixo:entity:ff581af6e2e071758b1f94835933d038",
      //   mnemonic: process.env.IDCC_DAO,
      // },
      // {
      //   name: "BEHub",
      //   daoTagsProof: "bafkreifxervvezgvguy7nr6sdfkh4hxk7a4hjzjaliktu2jrmicipsowbm",
      //   projectTagsProof: "bafkreibe3x5sbkgx7nn7lqjhq6ulic2ubfzubk5oynapipjfj4wvk54yfy",
      //   blockchainAddress: "ixo1wgngzjv67wk9fr8lumdhllf84s79jm7uw75uen",
      //   did: "did:ixo:entity:35f09ecb848032333e5b67b38b2e3d53",
      //   mnemonic: process.env.IDCC_DAO_BEHUB,
      // },
      // {
      //   name: "GoodSeed",
      //   daoTagsProof: "bafkreifxervvezgvguy7nr6sdfkh4hxk7a4hjzjaliktu2jrmicipsowbm",
      //   projectTagsProof: "bafkreifflnjauouenjd4vymhekqjbtkzownzpwcn2c7euyzw6ajnt5z3ca",
      //   blockchainAddress: "ixo1cehfv7xgwmf5ltvzxmkehe7ds7v9s04wsnh6af",
      //   did: "did:ixo:entity:ffb6b788b6d6a2e7266d5a3eb7074816",
      //   mnemonic: process.env.IDCC_DAO_GOOD_SEED,
      // },
      // {
      //   name: "DreamImpact",
      //   daoTagsProof: "bafkreifxervvezgvguy7nr6sdfkh4hxk7a4hjzjaliktu2jrmicipsowbm",
      //   projectTagsProof: "bafkreigjc3v64kgd3hx5kgejpz6on623bqptx2u752sumaywsvztigayta",
      //   blockchainAddress: "ixo1jatf2ek6z4vzqwmtaz8jv4e9suaqmcdz6a9dcv",
      //   did: "did:ixo:entity:7df8533fefe215c83e67107639e360b1",
      //   mnemonic: process.env.IDCC_DAO_DREAM_IMPACT,
      // },
      // {
      //   name: "CCSG",
      //   daoTagsProof: "bafkreifxervvezgvguy7nr6sdfkh4hxk7a4hjzjaliktu2jrmicipsowbm",
      //   projectTagsProof: "bafkreigicuifavotu46uriwveb6po6e7djsmzhoabxalkyqkp6j4bhnjii",
      //   blockchainAddress: "ixo1928ghdn5suwlv630ly92d7sfqw4e265cvqz6yz",
      //   did: "did:ixo:entity:6578e65e6de53d873a4b8f7bd0186a9a",
      //   mnemonic: process.env.IDCC_DAO_CCSG,
      // },
      // {
      //   name: "GravityCapitalPartners",
      //   daoTagsProof: "bafkreifxervvezgvguy7nr6sdfkh4hxk7a4hjzjaliktu2jrmicipsowbm",
      //   projectTagsProof: "bafkreicmiukizqf7lbjbfdptisvzysusipvonnzagb3kmxtik4z422lwwa",
      //   blockchainAddress: "ixo1mf928zs6mstkjk6g0lwpm02nzukjha25d2ds40",
      //   did: "did:ixo:entity:fa4c60f1648eaac69f0040cb064df648",
      //   mnemonic: process.env.IDCC_DAO_GCP,
      // },
      // {
      //   name: "CUHKAlumni",
      //   daoTagsProof: "bafkreifxervvezgvguy7nr6sdfkh4hxk7a4hjzjaliktu2jrmicipsowbm",
      //   projectTagsProof: "bafkreih3cjysrafkmzgzljlkcdsr6ft5meei7jtybpspwqtobjp3jeea34",
      //   blockchainAddress: "ixo1x2awez2fvw6cehg8xgk4a2xg8jc8jrw6cvgdx8",
      //   did: "did:ixo:entity:c92166250fd76210662c71afbc3e4d48",
      //   mnemonic: process.env.IDCC_DAO_CUHK,
      // },
      // {
      //   name: "ICARE",
      //   daoTagsProof: "bafkreifxervvezgvguy7nr6sdfkh4hxk7a4hjzjaliktu2jrmicipsowbm",
      //   projectTagsProof: "bafkreicsbydiasqsrwqe5h4xwraf72xyjl5pheseyxtomivvwptjxncofu",
      //   blockchainAddress: "ixo1x029j64yjprthxy7jsye6we0sdf8ux5zzpcnr2",
      //   did: "did:ixo:entity:512d36e9ca4b52760eca61e2dc44d4a8",
      //   mnemonic: process.env.IDCC_DAO_ICARE,
      // },
      // {
      //   name: "SEBC",
      //   daoTagsProof: "bafkreifxervvezgvguy7nr6sdfkh4hxk7a4hjzjaliktu2jrmicipsowbm",
      //   projectTagsProof: "bafkreibz5tr46g6qrfdabz4sbxqgubzhnsz3mz6wa7aldgjjnfz3mhhgwq",
      //   blockchainAddress: "ixo12kl8felx4e5yae4utzs2z9rtfucktw0c9aes4h",
      //   did: "did:ixo:entity:410704c1363e61574dfae8446c2e6b77",
      //   mnemonic: process.env.IDCC_DAO_SEBC,
      // },
    ],
}

export const didArrays = {
  // IDCC Intermediaries and their Projects
  // BEHub:
  //   [
  //     "did:ixo:entity:43135ff27bc47ed48ae843daae243d71",
  //     "did:ixo:entity:ad175e53412a587b59e4480e6156bbb9",
  //     "did:ixo:entity:e6aadb3b32d26a44c1636a1dfcedcafa"
  //   ],
  // GoodSeed:
  //   [
  //     "did:ixo:entity:05fe581376b07405c72d0b7ff0005d8a",
  //     "did:ixo:entity:0863afb8f3f5b8d85f4e7227267d7cbf",
  //     "did:ixo:entity:0d4cae924b8da8234d57632c7a336964",
  //     "did:ixo:entity:109cbdc0d2bc825c5276e83bd9dfa776",
  //     "did:ixo:entity:10e700cbcfce3215bb85bc9da2d6ebf7",
  //     "did:ixo:entity:1827d092d5bda3c1e28327a8eecd393b",
  //     "did:ixo:entity:287c737b922414bac3409535160e084a",
  //     "did:ixo:entity:2e69494dbb3696eb5b8777f7f6fd6923",
  //     "did:ixo:entity:3ae3e842cef3be6c2cfab1ac4d6ade34",
  //     "did:ixo:entity:3d6096117461f52fed1afab0e6ccc1d6",
  //     "did:ixo:entity:3f05b6ed89e88e0dcf6759cd7ee7c17d",
  //     "did:ixo:entity:53b082dd58940675cf033ebf71a117e4",
  //     "did:ixo:entity:57f3e4a61da04e25bd548c5725d1b6a4",
  //     "did:ixo:entity:5916648a484010d64745910c6d60e798",
  //     "did:ixo:entity:5b7b898a85116d951602156fc0217fc8",
  //     "did:ixo:entity:6224ea7544d08ffe9f50920577c39e42",
  //     "did:ixo:entity:74c5f162bccef2ef91ff7792e2053306",
  //     "did:ixo:entity:7807c29ad7ad78522ececd3026b8c891",
  //     "did:ixo:entity:7f448df4884a85dca8782a54e89af0fd",
  //     "did:ixo:entity:a0ee499f3faecb7e7bb97f15266d0764",
  //     "did:ixo:entity:a7f56f17d90d04392b56ff8b6b70a4a2",
  //     "did:ixo:entity:a82dd699a427a9f7ba4f288fb59aef4d",
  //     "did:ixo:entity:ad68b7d291b3b46a0fa2af5fb2e93948",
  //     "did:ixo:entity:b3cf0fd6f5ba99009dc288488fcf8f34",
  //     "did:ixo:entity:b9a38065a68bad61bb2eeebc5cdb5197",
  //     "did:ixo:entity:bc26fabe17acc5912a23dfd95adcf0a3",
  //     "did:ixo:entity:c376085d757aeef71d45578749a1e57b",
  //     "did:ixo:entity:c8a71c48f0e88570b1b0b6495a0c51c1",
  //     "did:ixo:entity:ce737cdd5feaf58163683a6d21dcd6d2",
  //     "did:ixo:entity:d1d11a6676df3f4363b1d535698c9984",
  //     "did:ixo:entity:df1882706c0a6ee69d9ed841dfc7fb59",
  //     "did:ixo:entity:e47cff662c4a871a060863f9663dc487",
  //     "did:ixo:entity:eece6af401e46f7f55ff72bd2ce4a000",
  //     "did:ixo:entity:f7d4e873ae4227373017e3c2471f7614",
  //     "did:ixo:entity:fcf503b9fa767d384e060009aa535734",
  //     "did:ixo:entity:fef31928b853426c0da326e7bb9f343c"
  //   ],
  // DreamImpact:
  //   [
  //     "did:ixo:entity:06ea28a54401bbe1e549b0d4239b1482",
  //     "did:ixo:entity:1a83f8523105c6681d4b8de6ec017492",
  //     "did:ixo:entity:1ac502c9cbe6feb13dde00cc8919b78e",
  //     "did:ixo:entity:22c7a416ff20a25bce85dc21fcc8ef0a",
  //     "did:ixo:entity:2d45a4370de7f52ba576f2b0b77a0928",
  //     "did:ixo:entity:2d761e5808231c499944d8c51573fd3e",
  //     "did:ixo:entity:30e69b7b8d73a5c5aec82a409af960f3",
  //     "did:ixo:entity:3d4892fcf5b2ea9a0a7da1eb496bf84a",
  //     "did:ixo:entity:460bc7c766378bb75f537c727b9e0867",
  //     "did:ixo:entity:4a3ab0eab1738ab0bb488d945cb6b466",
  //     "did:ixo:entity:537ddc658150b657c7227ae42aad6944",
  //     "did:ixo:entity:5f2c9aef49b37b946a4ea4930ef5bab4",
  //     "did:ixo:entity:6f840e228701240fc8f2a0162d416a02",
  //     "did:ixo:entity:84e92060e197a948cb63954eade82b46",
  //     "did:ixo:entity:923c94fede9f1e8a21deaeaee5bd3bb5",
  //     "did:ixo:entity:9394db3eeb833c862d1c50280e466ab0",
  //     "did:ixo:entity:af9d5fdd7ebd780d76b75c96747f2031",
  //     "did:ixo:entity:ce5e8dc7393bd28cd41157659ae28afd",
  //     "did:ixo:entity:d6a0f216f3d9c083847ad27abe0ea53b",
  //     "did:ixo:entity:da7cc7b28040ee19d23d58158326ba3e",
  //     "did:ixo:entity:e5c43ea8c115912fe18b5e20dcc124d7"
  //   ],
  // CCSG:
  //   [
  //     "did:ixo:entity:02fe2c003acaf73a43743a2f1f149dbd",
  //     "did:ixo:entity:17e55d20ad052b658a904decb86f7bd2",
  //     "did:ixo:entity:18e2ed854b9f2300016327fb4b4f0637",
  //     "did:ixo:entity:7184443a34538ecfc379bb405f8703e5",
  //     "did:ixo:entity:bab1677bb4ef9ca98bd6cd706ab9b90f",
  //     "did:ixo:entity:c4576124292f599dbed1184e64b81266",
  //     "did:ixo:entity:cf4e79a29fc763ab8e4fc68261315421"
  //   ],
  // GravityCapitalPartners:
  //   [

  //   ],
  // CUHKAlumni:
  //   [
  //     "did:ixo:entity:4912f742a9f811bec12765b961f1c724",
  //     "did:ixo:entity:49d5cd85bee409ed3712ba877126d644",
  //     "did:ixo:entity:5c1d592c4b051c00c9b67b8e819204b3",
  //     "did:ixo:entity:6018f669c231e8b582e810a73903913b",
  //     "did:ixo:entity:9a98191dd6551eda5f0dd2e857b3a3a3",
  //     "did:ixo:entity:ecc5527313e7ab4041ac13be1295cae7"
  //   ],
  // ICARE:
  //   [
  //     "did:ixo:entity:0484fb0d68fb0a9701091674cddbda82",
  //     "did:ixo:entity:12b0addcf9250ce9470a5f069e37610f",
  //     "did:ixo:entity:15b3994269eca11016a5b7ad25ac22f8",
  //     "did:ixo:entity:cfd214228ea5562d4a5096b4ff5daa92",
  //     "did:ixo:entity:f61891d74cfb67b0c67e1bf442a23ddd"
  //   ],
  // SEBC:
  //   [
  //     "did:ixo:entity:01a66413f6f340069eca5d68453c92a5",
  //     "did:ixo:entity:370548c87b4221003cdc077adec95448",
  //     "did:ixo:entity:4d0772b9e9f3f80215e835f6bda54850",
  //     "did:ixo:entity:9b0d56ac4cddc0ba52868ade311d2ac3",
  //     "did:ixo:entity:9b4168193e3d297759f77654e0630772",
  //     "did:ixo:entity:f8be78ce141be3e639057db86fbc3d71"
  //   ],
}

export const adminEntityAccounts = {
  assetCollection: "ixo19e74tjy6gdwt0hjj6ph6xgtjhuulgqkzk8xaj4",
  legacyCollection: "ixo1kaluffrp0ncy3dlrerla3nd8v6zxwzmega3v7g",
  ai4gCollection: "",
};

// export const EcsCredentialsWorkerUrl = "http://localhost:3000/";
export const EcsCredentialsWorkerUrl =
  "https://ecs.credentials.devnet.ixo.earth/";
export const ProspectCredentialsWorkerUrl =
  "https://prospect.credentials.devnet.ixo.earth/";
export const CarbonCredentialsWorkerUrl =
  "https://carbon.credentials.devnet.ixo.earth/";
export const UmuziCredentialsWorkerUrl =
  "https://umuzi.credentials.devnet.ixo.earth/";

// TESTNET
// ========================================
// export const chainNetwork: ChainNetwork = "testnet";

// export const dids = {
//   impactsRootUserDid: "did:x:zQ3shj4dPHhbsSXYcmsZLoDkiPJxkHhWYZpihWSQn95fuos2y",
//   daoClass: "did:ixo:entity:8e8fc81e088154de379474db2f0aa2a9",
//   oracleClass: "did:ixo:entity:a1fcead81eab2f1158a726597d872413",
//   protocolClass: "did:ixo:entity:eb98bb2c92a62557b6c88c6f80e8d258",
//   assetClass: "did:ixo:entity:f2235630689d4b54a561ca3de57494f6",
//   impactsDao: "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb",
//   emergingDao: "did:ixo:entity:29198b8a823e183a5e84d7ebf2f0febd",
//   carbonOracle: "did:ixo:entity:75d738bbf9a61ec05acc16625d70a82c",
//   cleanCookingProtocol: "did:ixo:entity:32a5a11ebf1ce614a6eb8ef874898eee",
//   prospectDao: "did:ixo:entity:7b40f2500d4c89997f8389c5f2318cdb",
//   prospectOracle: "did:ixo:entity:eb260ac6137fa9a7600ee7239e3e1fb1",
//   ecsDao: "did:ixo:entity:237cb945b1368ed450ec67c7c4ac56ac",
//   assetCollection: "did:ixo:entity:7f0cc7a072d514b38cb90bdf2e215901",
//   carbonAsset: "did:ixo:entity:af96d8449eb5297a8b0812844374e0e2",
//   ecsProject: "did:ixo:entity:d9de4952c41124e453f260cfd2c7774a",
//   legacyCookingProtocol: "did:ixo:entity:9dc2f06bf379c922d2aa8703ba276bc3",
//   legacyCollection: "did:ixo:entity:314d8d02428debb5584d975910797121",
//   ai4gProtocol: "",
//   ai4gCollection: "did:ixo:entity:4ce80421effb121662866edf66d1cc21",
//   didOracle: "did:ixo:entity:504a8255ca35e103bc8e3e78f62a5231",
// };

// export const adminEntityAccounts = {
//   assetCollection: "ixo1rm68f38tv9dl2gne6599y3vz4hfa6f74tgcnha",
//   legacyCollection: "ixo1xwc3mty6jyqrzfjpqsrhtpcfz57798phfg8y6s",
//   ai4gCollection: "ixo1e466zhjtprtap545tj88uv8zjcc9768dfk97fl",
// };

// export const EcsCredentialsWorkerUrl =
//   "https://ecs.credentials.testnet.ixo.earth/";
// export const ProspectCredentialsWorkerUrl =
//   "https://prospect.credentials.testnet.ixo.earth/";
// export const CarbonCredentialsWorkerUrl =
//   "https://carbon.credentials.testnet.ixo.earth/";

// MAINNET
// ========================================
// export const chainNetwork: ChainNetwork = "mainnet";

// export const dids = {
//   impactsRootUserDid: "did:x:zQ3shdTvZuRtsRbdUY1ocoRJ6tSUqQGVFgwhpGApkEs3T3G9M",
//   daoClass: "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14",
//   oracleClass: "did:ixo:entity:065ba0b99948e2e8ff3228836dee423b",
//   protocolClass: "did:ixo:entity:61392c571ef644d54d77e4daf611bf89",
//   assetClass: "did:ixo:entity:4d94f9b6078432648a755203eed50644",
//   impactsDao: "did:ixo:entity:2f22535f8b179a51d77a0e302e68d35d",
//   emergingDao: "did:ixo:entity:72a27013b1d2f9c3561145e4a424778a",
//   carbonOracle: "did:ixo:entity:7889238a0a6a68554f65f5c7da96f13b",
//   cleanCookingProtocol: "did:ixo:entity:8fcbc757e75c120dd4beae0e5696fd38",
//   prospectDao: "did:ixo:entity:8e8fc81e088154de379474db2f0aa2a9",
//   prospectOracle: "did:ixo:entity:f2235630689d4b54a561ca3de57494f6",
//   ecsDao: "did:ixo:entity:a1fcead81eab2f1158a726597d872413",
//   assetCollection: "did:ixo:entity:eb98bb2c92a62557b6c88c6f80e8d258",
//   carbonAsset: "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb",
//   ecsProject: "did:ixo:entity:b3839c8bccf7ecff3cb6822869bb0d81",
//   legacyCookingProtocol: "did:ixo:entity:f4427ae632de60a6f7ed47f46da32fa2",
//   legacyCollection: "did:ixo:entity:9f8749d749af260d185f3df6f2206b63",
//   claimFormObjectsProtocol: "did:ixo:entity:c781ca0a76beae419441dbe27881e44e",
//   ai4gProtocol: "",
//   ai4gCollection: "did:ixo:entity:3448d91ccb919450342958bb187f7eee",
//   didOracle: "did:ixo:entity:a6e2f215dcfa4131dd299c958fdf1a03",
// };

// export const adminEntityAccounts = {
//   assetCollection: "ixo19e74tjy6gdwt0hjj6ph6xgtjhuulgqkzk8xaj4",
//   legacyCollection: "ixo14x5r6stdxua49tc90jngj7k7xuwhgp9vlm5tc8",
//   ai4gCollection: "ixo1atkdpd2cmh7tfehvsafpk6f6a0rq74ykekr4j9",
// };

// export const EcsCredentialsWorkerUrl = "http://localhost:3006/";
// // export const EcsCredentialsWorkerUrl = "https://ecs.credentials.ixo.world/";
// export const ProspectCredentialsWorkerUrl = "";
// export const CarbonCredentialsWorkerUrl =
//   "https://carbon.credentials.ixo.world/";
// export const ClaimFormCedentialsWorkerUrl =
//   "https://claimformobjects.credentials.ixo.world/";
