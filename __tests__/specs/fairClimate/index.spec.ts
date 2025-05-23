require("dotenv").config();

import { relayerVerifyAllEntities } from "../../flows/entities";
import { createQueryClient, generateWallets } from "../../helpers/common";
import { dids } from "../../setup/constants";
import { chainNetwork } from "../../setup/constants";
import { didOracleFlow } from "../../setup/didOracle/setupFlow";
import * as FC from "../../setup/emerging/fairClimate";

beforeAll(() => Promise.all([createQueryClient(), generateWallets(false)]));

// ------------------------------------------
// Fair Climate COLLECTION
// ------------------------------------------
// New Collection creation, set fairClimateCollection and adminEntityAccounts.fairClimateCollection in constants.ts
// FC.fairClimateCollectionFlow();
// New Cookstove minting
// FC.fairClimateCookstovesFlow();
// verify all entities created (get list of dids to verify fro ai4g_cookstoves_dids.json)
// relayerVerifyAllEntities(
//   process.env.ROOT_EMERGING,
//   dids.emergingDao,
//   chainNetwork,
//   [
//     "did:ixo:entity:9cb39e47f2ef26d3dd1c4e53c35e58a5",
//     "did:ixo:entity:00ec1612c191312c91fa0ee80e801a0a",
//     "did:ixo:entity:0123a0067073f2632b8f883d7db71715",
//     "did:ixo:entity:01983d32c4bd8d854d5d6f07dbdaa17f",
//     "did:ixo:entity:01d24e2aa0330211d021be957d5f1aa9",
//     "did:ixo:entity:020babc0a25f349dc8a2b3ac94d96ae6",
//     "did:ixo:entity:025e080b9cf7bfa841d79a02b56fc02f",
//     "did:ixo:entity:027fe7b5914c668d4617d517843d11e0",
//     "did:ixo:entity:0526c107d39d709f51395f904cecc3e8",
//     "did:ixo:entity:052d0ca50af09a428ef6569d5efd01c0",
//     "did:ixo:entity:06010e36b219039d5ca5d8bf1e720e6d",
//     "did:ixo:entity:061f8fe07c66a7c2289a975ad5b6be46",
//     "did:ixo:entity:0621ec6d3f7e1c6906cbc116772e5f22",
//     "did:ixo:entity:064d3e93c7423130351f625cc12ffa17",
//     "did:ixo:entity:07a52e141ef99636bb5badf7fb3ea567",
//     "did:ixo:entity:07b3cc606700226e688f4de213b74d05",
//     "did:ixo:entity:084273e188d36be63c17c7f3d59e257d",
//     "did:ixo:entity:08dd19ae1c818f7512e38b3cac09091c",
//     "did:ixo:entity:093f8915f49e4e12188b745ba9233a40",
//     "did:ixo:entity:0a741e87e57dad80c3abd38eb2605ed0",
//     "did:ixo:entity:0aeac7fea5108bcff80b411b8c345548",
//     "did:ixo:entity:0b181810d1d8aeed0f8e2562d31bcc4e",
//     "did:ixo:entity:0b31e0115c4e64c00c41b10cfe62aa0c",
//     "did:ixo:entity:0bbc45d7aa4be1aeaa95a907fb3a06dc",
//     "did:ixo:entity:0be233ce68a3f963fcf7f0319bea83e0",
//     "did:ixo:entity:0be7b8bad9a9ef317592779b94c5329b",
//     "did:ixo:entity:0cca227421a2a29da5fbc3ce22187bca",
//     "did:ixo:entity:0d6fe71ae8641fc541b8de18d4633332",
//     "did:ixo:entity:0d9ba5c264d45fef574680d14374bc48",
//     "did:ixo:entity:0e9a164df46d1632ad79036fc333809e",
//     "did:ixo:entity:0ee703405f19c8d00f97c3542e2555d9",
//     "did:ixo:entity:0f239709dd8973e5b105d09eba507faf",
//     "did:ixo:entity:106204742328319aedb3383c573baf38",
//     "did:ixo:entity:1144222f9de2afac384de0da5ba5143f",
//     "did:ixo:entity:129d0ac202a71e1832e5eabef51f8c0d",
//     "did:ixo:entity:12ec58cbce3d6480d2ff3eb445bddde1",
//     "did:ixo:entity:1304ded1c11ab7db280596a77ed93eb3",
//     "did:ixo:entity:148f75f78fc30a3ba219a99290920bda",
//     "did:ixo:entity:172b012a593fd97072c00f1d9fe08f95",
//     "did:ixo:entity:17a04cff3e1f27b6669aa1a53cfb890c",
//     "did:ixo:entity:17d6cf391fa8a7c12a8bc872db507f97",
//     "did:ixo:entity:1868bb88eaafc19cc465c340d09f32d9",
//     "did:ixo:entity:19468c1e33d308864b9e18e2744d9713",
//     "did:ixo:entity:1969e8136fcc631165097f16268b92c4",
//     "did:ixo:entity:19706a451c58414fa25c16cb6d0dd08f",
//     "did:ixo:entity:199a5465c475791b5d5b18df1e9bc542",
//     "did:ixo:entity:19d3af219aaf75ae7e1704840f888691",
//     "did:ixo:entity:1a51cfac0185ec691b39a7ff25cc8bcc",
//     "did:ixo:entity:1a6ff1adab88ea451082ad3d2ab83e31",
//     "did:ixo:entity:1a7450dd6e3e27241eb7b85a1d36a359",
//     "did:ixo:entity:1a76366f16570483cea72b111b27fd78",
//     "did:ixo:entity:1a95be5c7aa3c8bd7bba9322a87677bf",
//     "did:ixo:entity:1afc36e67cd537ef566d001d83c04eb7",
//     "did:ixo:entity:1b3a13d3c7d6361213037969f03e1157",
//     "did:ixo:entity:1b897bd21b87446d287438eb029cc035",
//     "did:ixo:entity:1bc2eec1dc9c72acd5023740c6c2cddb",
//     "did:ixo:entity:1c8114c930a87b7893ede0b252b3da54",
//     "did:ixo:entity:1cf18d17f478de2d7c2aae182e172f2d",
//     "did:ixo:entity:1dd411cdabb7b963111bdfab891000a6",
//     "did:ixo:entity:1e56e4ab88f020bdf91721311c3de211",
//     "did:ixo:entity:1ee4d33f59ef1ebe6ab0425ef3705f05",
//     "did:ixo:entity:1f3479e531f9a92dde1476d55777efe5",
//     "did:ixo:entity:1fd0cba1aeb42acab8b9c7f8cccffbba",
//     "did:ixo:entity:2097a37ce1fb9b4eb342bce5ace7c846",
//     "did:ixo:entity:20ec8eadeaede4a370429c913dae90e9",
//     "did:ixo:entity:21a2af0b387db6871bb441f01a3e2f38",
//     "did:ixo:entity:2212fec34a5f0d26feed6bd607b422f9",
//     "did:ixo:entity:2214432e19022a6a91e1c8badbd5fe8c",
//     "did:ixo:entity:226ddac22a54fa075835d9da85494065",
//     "did:ixo:entity:254daa9af5d73732300d0bc688ece13d",
//     "did:ixo:entity:25b522836e245f73cc291453d4bb7e2f",
//     "did:ixo:entity:263bd247a7281e9d430a596d1fcf14d8",
//     "did:ixo:entity:26921ef5177fa9b02e3a8114b0400fe6",
//     "did:ixo:entity:26f58a4e08506d6e187090ff0fc1d394",
//     "did:ixo:entity:26f6f8ee266044b61c5f52d8ab93a6ea",
//     "did:ixo:entity:27eaad21d1b4ea251db4164b4b167f29",
//     "did:ixo:entity:281aa9ab1b43e7dad11e6b1e0c1787c6",
//     "did:ixo:entity:2878959c1c7157e65f7cfe46bd746487",
//     "did:ixo:entity:28dd8f8c4d208b179a4673a371c78dec",
//     "did:ixo:entity:28e5114baffbda7aa9737872166a4add",
//     "did:ixo:entity:2a86b9f3ad7c98ab86b359302605963d",
//     "did:ixo:entity:2a8af1c5b502b8a8dec9e4469b4fe55f",
//     "did:ixo:entity:2c53e6bca3e841a267a798d0f216d2d1",
//     "did:ixo:entity:2cc622fbb55bacac9958922920b4282e",
//     "did:ixo:entity:2d45a07111d5f6258f79c619d27d3b65",
//     "did:ixo:entity:2d63928850de29d8a356c8c4fa3144c8",
//     "did:ixo:entity:2df8c3bf7c3bab3adf474b5d7cf11602",
//     "did:ixo:entity:2e40a0ef85cd12bdca870c15a2545f38",
//     "did:ixo:entity:2ea23d480becd54db5b8dd1cf04a22a6",
//     "did:ixo:entity:2f09a3e9730bac15432675b60de947ed",
//     "did:ixo:entity:2f4be39f59c05ceae6f169c12a419b97",
//     "did:ixo:entity:2f963b37a6b70ad77b2b309d53aabaf8",
//     "did:ixo:entity:2f985de23dddf68ffe1c9ad4820b4a59",
//     "did:ixo:entity:31628c7b3ec0825e1dfee70991437ae7",
//     "did:ixo:entity:324b95c076234a13d0bd19d5f3e44205",
//     "did:ixo:entity:32ad2f1df0c2787ca53b39abb6c22962",
//     "did:ixo:entity:34c3935a5c45bbd78765036ee31c1cc6",
//     "did:ixo:entity:34e73b2b714c3251d10f754fd6d60c0f",
//     "did:ixo:entity:362f85014c50a195f134a9a83a96feb5",
//     "did:ixo:entity:369275febab1022b69bd4009221b96ba",
//     "did:ixo:entity:3797fd6a594eb98db964a5e3c8ffe7a3",
//     "did:ixo:entity:3943e0f0abf86ae945f3d94263873bad",
//     "did:ixo:entity:39e2cd4268bad5319db59e74970f5b68",
//     "did:ixo:entity:3a55a60d8e31638ab69d6a29c75f5423",
//     "did:ixo:entity:3aa794fad04b4540cbe42967d6776fd7",
//     "did:ixo:entity:3aac90f468be2659da541d048427b036",
//     "did:ixo:entity:3aebbf0ac6bd80a01238d3ee1725320b",
//     "did:ixo:entity:3aec164857024bde53d3482ee62af6d3",
//     "did:ixo:entity:3bd402a05f0828c70efec001ecef1254",
//     "did:ixo:entity:3c6298d9f43d4bf582f7f9a3274a39b9",
//     "did:ixo:entity:3d5a97cf8db4cdd26baac8af9f56ff24",
//     "did:ixo:entity:3d685beab9ac1af83be728413d6449ca",
//     "did:ixo:entity:3d875e6db1f6a725579ff3c37a77dc1b",
//     "did:ixo:entity:40263a90d015395684d09db4bafc3555",
//     "did:ixo:entity:4067c56aacb4bca8eff8883c7e90c537",
//     "did:ixo:entity:42549c05e4412bc055b7d0aabf4dac35",
//     "did:ixo:entity:42af2ae794165d0b452f1654579f28d6",
//     "did:ixo:entity:43844e78d981fb6b2a52690dc5880252",
//     "did:ixo:entity:43a383cdf68105bd27c47a789a31bd1b",
//     "did:ixo:entity:43aee6571252c503dc22bf1c78bcfc18",
//     "did:ixo:entity:4463b2fbda1674f3b8648b62ec6767af",
//     "did:ixo:entity:4625d9c287b362e85537f39a64f1d7e1",
//     "did:ixo:entity:46dfaf4d490e0b2d4e14abfb03e98ee1",
//     "did:ixo:entity:4a295dfd811b0e66ce0513828b3ff8d1",
//     "did:ixo:entity:4a931324a3b100b8a96052eb6326c60d",
//     "did:ixo:entity:4aa6bbc44b03dc32a38055de214aaf58",
//     "did:ixo:entity:4aa941e39133355b696650548dcbbbf9",
//     "did:ixo:entity:4b28db030321fa6c2727df3d0ce04873",
//     "did:ixo:entity:4b2a1ebaa8ff8e87a846143aac57995a",
//     "did:ixo:entity:4b81ab42391d197a86df9a5abf3d22f1",
//     "did:ixo:entity:4c642471b93fa9fb7ae9ca0cfdfe053a",
//     "did:ixo:entity:4c698cb8e5fe4ae6ad24a28aa8afb366",
//     "did:ixo:entity:4cf1f04f26444e317a2d6e42a4687b11",
//     "did:ixo:entity:4d42b52f489249a2388449d13f1e4794",
//     "did:ixo:entity:4dc528b700e6842ff4177c634488ec3f",
//     "did:ixo:entity:4e8ee48db7f0870bf624b455b29dd8fc",
//     "did:ixo:entity:4ee6bf8824085c1321f27de6340f6284",
//     "did:ixo:entity:4ee7db8408e3cdcc0a34bf0532a825aa",
//     "did:ixo:entity:50915b0b9c5273e9a48721a491bef7ae",
//     "did:ixo:entity:5270150e47dddc2b830ffca8f43f3e70",
//     "did:ixo:entity:52dae151016d7d8ce558d45d5f0598a7",
//     "did:ixo:entity:53b10586fdc9d236ab43fd2ab64fc179",
//     "did:ixo:entity:53e06583ec09d944d52bf2c318ad0dbd",
//     "did:ixo:entity:5468dc736ef17d2936d9dbeb40d8a845",
//     "did:ixo:entity:54b5a8d620abeb99875d3bc06bf2a3ff",
//     "did:ixo:entity:54bede0aced5282b2401c58a048a731a",
//     "did:ixo:entity:54c6014db80f8440d1f3b8489b1604df",
//     "did:ixo:entity:551fe0a6048f0d61e92ee6c30f7f5066",
//     "did:ixo:entity:554e4ad1ed0e266aa56ed472ecf49ac8",
//     "did:ixo:entity:557d5c27333d2229344c9da1249968e2",
//     "did:ixo:entity:558a5421afdfb2eb93dbf8609f07a037",
//     "did:ixo:entity:55aca8b46a581f3eb14ee345b88a8f95",
//     "did:ixo:entity:5601e4b7974c15d22d2ff8eee33c0d85",
//     "did:ixo:entity:5627bd82e4f00fb2072a9bb815730dd6",
//     "did:ixo:entity:56a1ee0b04213c38e71df4f686d3fe01",
//     "did:ixo:entity:56bbb0739ceff3bed1bf84a035fa08c6",
//     "did:ixo:entity:56d6dbec83f334110c8eaa7af08c7681",
//     "did:ixo:entity:572e9c6bf9091cae8f96d33600ea9d3b",
//     "did:ixo:entity:57ab209024769ba6b4eb620aaf41b034",
//     "did:ixo:entity:57e55f62f5cc9d6e27e4ec80309d80d9",
//     "did:ixo:entity:585ef3e74755f2ff371fed7bdcfedbea",
//     "did:ixo:entity:596625a4b9252cdb84799590c7485115",
//     "did:ixo:entity:5a8ac98dc556c585862fb4801c9f25e6",
//     "did:ixo:entity:5ad713996df5755c50dcc097383120a1",
//     "did:ixo:entity:5b1e7afa04419930b53e7a0fa1795130",
//     "did:ixo:entity:5b206e7d522b630365e0b228adc65dae",
//     "did:ixo:entity:5bc563abe181b8db7e26ff41b39a6eeb",
//     "did:ixo:entity:5c6e05a5bafd7c30dffc7b72286fb118",
//     "did:ixo:entity:5d7a1a6c1282ec728e435562ccff7842",
//     "did:ixo:entity:5ded3dd8c69e8151d4f223d26b8bb099",
//     "did:ixo:entity:5e37bcd1bd2977d5923a56de0709a029",
//     "did:ixo:entity:5e4975eff0d4d4a037b110a102d44c80",
//     "did:ixo:entity:5f2866bb18272ee22d0e375c83aac3f3",
//     "did:ixo:entity:5f5ba4e4ef3f127bd8934a5f071987b0",
//     "did:ixo:entity:608e5d7b3ae58636122264bce5f3df6f",
//     "did:ixo:entity:6120b51586a378a958a38d27bbe046bc",
//     "did:ixo:entity:632788c8e9f15f832070648ce732ba9a",
//     "did:ixo:entity:636ccc7d4fe9a26b23cfef49a2b5df5f",
//     "did:ixo:entity:6491c48e4084736efe961bea0889a57f",
//     "did:ixo:entity:662182452a1981412f3a96947a608b13",
//     "did:ixo:entity:6680515f1c11f048d968b4cb135b60cd",
//     "did:ixo:entity:66b485bac115112cf0a9abad8eb12a2c",
//     "did:ixo:entity:678a9cd7a9713f9b1a08d48caa7a6572",
//     "did:ixo:entity:679835fe325fab2f2da82436b8a93bba",
//     "did:ixo:entity:679d031947c1af5c02b4ab4b1b0757e3",
//     "did:ixo:entity:682cd1deff609e14c2d0ce890add0f33",
//     "did:ixo:entity:69d9ae9f85181e54ef038818afb71079",
//     "did:ixo:entity:6b1ba84b9f9a86d7476e6a7cb187c736",
//     "did:ixo:entity:6c0faa6f6affa36805908fc7cea82e30",
//     "did:ixo:entity:6c2e6d2e45f2a89a8c2ae7ee85ff2335",
//     "did:ixo:entity:6c4c2c520b53962d4d7e2251cc11686f",
//     "did:ixo:entity:6d3591f11b4121702f839f4abcd17abb",
//     "did:ixo:entity:6ddffdb6d5a5f81929702b9b1dc082ce",
//     "did:ixo:entity:6e50e24f7d1785838fad7657c393b0d2",
//     "did:ixo:entity:6ec80e05393313b6f935cde8be7e7464",
//     "did:ixo:entity:6f2d9881bfd0e5d6aaff172e66eea3ed",
//     "did:ixo:entity:6f5b6ac9507c79b15a6930e86271e3e7",
//     "did:ixo:entity:6fb34aaf06b74edf8db2e7e07374dede",
//     "did:ixo:entity:7010650df5c7bea2652a9b571100ff40",
//     "did:ixo:entity:705373e42a6aacbeb6ac36bdf7528804",
//     "did:ixo:entity:71f689986e785c0177f576dac7d708fb",
//     "did:ixo:entity:724c446180f5db2b252fe99887530152",
//     "did:ixo:entity:7289c5d9a60a7ff1162c996d4f8ed480",
//     "did:ixo:entity:72e7bcc9475b16181a471e4d3343e8bb",
//     "did:ixo:entity:7314a60be23475493bf3ccf833b2f6ba",
//     "did:ixo:entity:736314e68c858af1665c991e0451674c",
//     "did:ixo:entity:7677a3aee350f7fc9241edc930671122",
//     "did:ixo:entity:767d558c9457324b89ed28d6b791c17f",
//     "did:ixo:entity:77025c2b461c0f2a62f28316af1e817d",
//     "did:ixo:entity:77bae9c5c51f85823adfa7f5d133ea8c",
//     "did:ixo:entity:77dcb50d36cc0b87ccb712cc79a3ee0b",
//     "did:ixo:entity:780d2a10b15df71fda969577ef28cd4c",
//     "did:ixo:entity:78ed6081b3043fd99f39ce145c7a0f21",
//     "did:ixo:entity:7b9ed8c65671c51fb3df062564a3b76a",
//     "did:ixo:entity:7ba48d867f444a9c2038b2849103ce2c",
//     "did:ixo:entity:7c1d3a5bbe2f549e7d42617f5f0fc7d6",
//     "did:ixo:entity:7c6ba7a8f94845aa537de87a0ca88a03",
//     "did:ixo:entity:7d10d7fb10fe2af540f666b1fac479ef",
//     "did:ixo:entity:7e6bdede7071054eb0e2719d6ae92c70",
//     "did:ixo:entity:7e6d51a14dca62ef9e1f6d47f33944d4",
//     "did:ixo:entity:7f66ad119ae3c3e8feae7fdbc5928311",
//     "did:ixo:entity:7f928cd060ccb6d72fcc60dce74ec650",
//     "did:ixo:entity:7fb7b0316f117c5122c805a2b68371ea",
//     "did:ixo:entity:8084210a25b0b3d5a5be99fc801768c6",
//     "did:ixo:entity:8205802a9e282c012680496ad8f21071",
//     "did:ixo:entity:8532a96909d1657c4af9a7af5ccc834f",
//     "did:ixo:entity:858fdf679d2e93e3b679a819b389b811",
//     "did:ixo:entity:862e64f4a52063cb5abba0f02caf491d",
//     "did:ixo:entity:8689f57e568746cb22a172680121db03",
//     "did:ixo:entity:87069945f93dc29f969c0d7a5423673b",
//     "did:ixo:entity:8718a6cc0684211e43b5965c1f30f4d5",
//     "did:ixo:entity:87298a5278c6d7ed6224064f962a29c6",
//     "did:ixo:entity:87cce375fc3dfd6f3e1237d17d9b0af4",
//     "did:ixo:entity:881e01d3149549a071cfbc2c9665b0f2",
//     "did:ixo:entity:88d31b45a0dafe0e389f50ae174a5ac7",
//     "did:ixo:entity:8956a196302dff8b156c0b91388d615a",
//     "did:ixo:entity:89a5da22a170ae904d3f40004c1121a5",
//     "did:ixo:entity:89e0feda1316afc21d342e016fec6943",
//     "did:ixo:entity:89e890d3357c796a693ae86008f9c174",
//     "did:ixo:entity:8af914e3ae3486eab5252b8cecb2cb0b",
//     "did:ixo:entity:8b37394927f9af7a529e2578b3e84a22",
//     "did:ixo:entity:8b704276196d113838626431245f259c",
//     "did:ixo:entity:8b8ee50c281fd57e2623658410589935",
//     "did:ixo:entity:8bcfe170b48179d39308cd58befad3fe",
//     "did:ixo:entity:8be0768019b67f62b9465b8578ed126a",
//     "did:ixo:entity:8c166397ce57793053404eeb661831c0",
//     "did:ixo:entity:8c177367dc9432ed6357f2504f2d010d",
//     "did:ixo:entity:8c28605eddf0554e6cf78b23a992c025",
//     "did:ixo:entity:8c452ac0e3506bee5870f38526a9bd1e",
//     "did:ixo:entity:8d493020f594c1d2e10bd6bc2ed62753",
//     "did:ixo:entity:8d6831429c5995af5f98e211f241b44c",
//     "did:ixo:entity:8da6f2817a0c482a9206b0f343f10b64",
//     "did:ixo:entity:8ef873c782ab204517493b690ee14d8c",
//     "did:ixo:entity:8f1310f954886c6127aa96e7907a2dbb",
//     "did:ixo:entity:8f5d5e1d9df5356ed2e8f01ce10671e1",
//     "did:ixo:entity:8fd54d4445dc7378348846e7ee6f914e",
//     "did:ixo:entity:909388c756df6f1e1674c174ec9bf330",
//     "did:ixo:entity:91179b1dad07dbf5516ba2bc4370877d",
//     "did:ixo:entity:913aac91e12f6f0ae56ae735692b85df",
//     "did:ixo:entity:91e07b28c496bbe4f1c045ce02c99486",
//     "did:ixo:entity:93582ca366e37da6e68ab4b66162d10b",
//     "did:ixo:entity:93d6ef1ba0f652b48229fee07d541db9",
//     "did:ixo:entity:94173f2712f42a2e450b16395b2f2057",
//     "did:ixo:entity:952c6d67cf2932a257858af7f9f0b817",
//     "did:ixo:entity:95b671aa84d3364d5ef5573964539c6f",
//     "did:ixo:entity:95c25ce60a897998b4b4e55c10c19205",
//     "did:ixo:entity:95e6a3b49e947ab2346fbb6b9c3e4ba4",
//     "did:ixo:entity:962b947e7f08fb34feb96e4c8075114e",
//     "did:ixo:entity:96ae0d538317e34ea00accf331baa0fd",
//     "did:ixo:entity:96fc25169f3315e30b5378600e0a259b",
//     "did:ixo:entity:975c40f84ba90611ae48bd9e5eb0f7c6",
//     "did:ixo:entity:97e230ee624f8f92667a13753bcd138c",
//     "did:ixo:entity:980e9fd4121c5b4043f72e0185cb1c61",
//     "did:ixo:entity:98a5596d7ae22282751c230e53d372f5",
//     "did:ixo:entity:98ca66505a741a20d7cc8846a5efb244",
//     "did:ixo:entity:9902340cfb39031a4bcfa87b8949d01b",
//     "did:ixo:entity:991311804206669f3a894f61049de4dd",
//     "did:ixo:entity:99e9a335f4b9df9c16ec247d1876d64b",
//     "did:ixo:entity:9a5cd4d464274501443b1785a96c0ac7",
//     "did:ixo:entity:9a83614222db8da9aa37be6df9781407",
//     "did:ixo:entity:9a89a0dae8a7a38c5d81bb17018a4443",
//     "did:ixo:entity:9a9d847d81bc8db382e711465a991ca8",
//     "did:ixo:entity:9afe1f86e16384fd89c9bd5474933393",
//     "did:ixo:entity:9b214de2ca053d6d20ddbf5b10f10a96",
//     "did:ixo:entity:9b390278d89f32cdfb08e994474ae0ca",
//     "did:ixo:entity:9b515873a8c4c4dfe8ce3f3a7f15631a",
//     "did:ixo:entity:9b8cea180cf7944a6d33c69f6b15daf0",
//     "did:ixo:entity:9ea46758d3476c8258ce91318a223ad4",
//     "did:ixo:entity:9f1ec7d985918b358561642629ecddc1",
//     "did:ixo:entity:9f3f61c493fe8014ce1527fbf729e299",
//     "did:ixo:entity:9f4609a3a11d37f1ee19a3b2614553ed",
//     "did:ixo:entity:9f7a485ac2c02788668ef132d8a249d5",
//     "did:ixo:entity:a03876bc5ea176ea66bd50a9cb98b446",
//     "did:ixo:entity:a042447c2f3b89847676bf25bd9958f1",
//     "did:ixo:entity:a24daf7966d025cc7711b223b6785261",
//     "did:ixo:entity:a3852122ee55d4c0807c4a1c00e7f5f4",
//     "did:ixo:entity:a3c3e4d74838a037ec059ca9f1242f1a",
//     "did:ixo:entity:a3c4b87ddd8131de17769d57b375810c",
//     "did:ixo:entity:a51cdd03da6b9f55a7c257871043c2e6",
//     "did:ixo:entity:a52ed0475c8e14278d4521c5961204a1",
//     "did:ixo:entity:a558f76a998fef26a1f5e9de535d823b",
//     "did:ixo:entity:a643f218bb38fcae1e25fae947f81b43",
//     "did:ixo:entity:a6d3105abc426a594591f25dc50cb3dd",
//     "did:ixo:entity:a799c938bee061fb02a69ea2f1e59806",
//     "did:ixo:entity:a7feeb0e835604f3c638c5d34c82a4d6",
//     "did:ixo:entity:a80c005935b8a9e5b2be141db8e5634d",
//     "did:ixo:entity:a81638bc047b9a124b5639453fdb63b0",
//     "did:ixo:entity:a83f1312549e43a42d25a713efad2876",
//     "did:ixo:entity:a8633f5a633f7976eea1d7c9007643ef",
//     "did:ixo:entity:a9228887f9364b4cd9e8def287c9bcb4",
//     "did:ixo:entity:a969227660572c812da8bb9b721c3a6e",
//     "did:ixo:entity:a9b5a31d7a816f660b2730defde88591",
//     "did:ixo:entity:a9e84568225b65ecbf82125ea30af0a9",
//     "did:ixo:entity:aa51c0b591a13ef3d20f12544c448020",
//     "did:ixo:entity:aa5f700fe50679e9888aeea39dccb1be",
//     "did:ixo:entity:aa8b0a4c08f8caa3ff8211347b647495",
//     "did:ixo:entity:aaf99a5edb8fd766bfde21178b62834a",
//     "did:ixo:entity:ab1c100368db778d4bf8d831e9068606",
//     "did:ixo:entity:ab39666c55448d656dd692dd6227f9a9",
//     "did:ixo:entity:ab5633308a12e10400a0be9ec41b75ee",
//     "did:ixo:entity:ab68b04e79e2aad34794fb787b7f7be9",
//     "did:ixo:entity:abd0985dcf85c6bdfd21199911748861",
//     "did:ixo:entity:abdf78f33ef5aa954ff67dfb1e534c2c",
//     "did:ixo:entity:acc8058a023085a1d3ff5206db511945",
//     "did:ixo:entity:ad5c22db4f76fac251d4423d5fc184dd",
//     "did:ixo:entity:ada1bbcf3c1cc6a280a60af9bc03af35",
//     "did:ixo:entity:ae5691fdd78c3da2651ce0ea9477c4ea",
//     "did:ixo:entity:ae655450debaee20ad87f10299fedc22",
//     "did:ixo:entity:b07e7956f786f4db9ecd5c73f3cd4305",
//     "did:ixo:entity:b08d65b0b8f71bc70305452c7bda795b",
//     "did:ixo:entity:b203295b78c75369b042cd84214d41a2",
//     "did:ixo:entity:b20accb6e271272017d8ae527323913e",
//     "did:ixo:entity:b2129514b6125843ebf16802951d8578",
//     "did:ixo:entity:b2314523f9070dbcb8b90b62e0b206d7",
//     "did:ixo:entity:b23a5ae675c88c6bb20b08ef4ff15027",
//     "did:ixo:entity:b258470381431d8d68ab9046f570eb2b",
//     "did:ixo:entity:b25e9c9422a6224481dee35a7d88b1e0",
//     "did:ixo:entity:b29fe23701764bc0b35ed16b8bb856c3",
//     "did:ixo:entity:b4572a083820053f6ead1b6bbe7fed59",
//     "did:ixo:entity:b5a329141a39a277189b9ba7d5e12902",
//     "did:ixo:entity:b5c47ec83dda3a6764f174619c9e35df",
//     "did:ixo:entity:b7918df9dfc37971bd670f6427f69514",
//     "did:ixo:entity:b80523f6ede1cd1bc3d8f938937fa498",
//     "did:ixo:entity:b880f564e2eb0c6b3abca5f97ece845b",
//     "did:ixo:entity:b955f65ef33dcc664c0c1c8775d8d780",
//     "did:ixo:entity:b98cd61eceb89ee7d23ac1ae7accd803",
//     "did:ixo:entity:bb1d48e111998a9112f530f34ddc730d",
//     "did:ixo:entity:bb69e00e38305cf4b9a83451f79068bc",
//     "did:ixo:entity:bb6a6d3104b6e2ab675a4cf18087a1a4",
//     "did:ixo:entity:bb98fc496c9a5f1b1b234a59f2aa8758",
//     "did:ixo:entity:bbf16c1d945c706ec812cbb493fe9e55",
//     "did:ixo:entity:bc4d39a2e60932e3ef17f74d7dc55921",
//     "did:ixo:entity:bc8c1ff97e69988b707f2bec913de02e",
//     "did:ixo:entity:bc9c5c16fcb85e91ac30ccfa6e21b777",
//     "did:ixo:entity:bd15113e31574637e7814006e5583286",
//     "did:ixo:entity:bd1e65767d6d7f83ae55777d31b1a7bc",
//     "did:ixo:entity:bd79205b62ca8684190546cf0f820fc4",
//     "did:ixo:entity:bd804fd50d0b508db7225ac72589d2ab",
//     "did:ixo:entity:be35a21a5026a6902e357d8dc8fcf7d1",
//     "did:ixo:entity:bf6a5f2d4b9ac9e878ad190ee8290c2a",
//     "did:ixo:entity:bffcd3a183df79b995a0eae86f42da1d",
//     "did:ixo:entity:c0cc8cb2516248a651380b635b4ae63b",
//     "did:ixo:entity:c174df7eec88240cd58149400440fba4",
//     "did:ixo:entity:c1ccdc82108fa86bc8dba516a1245875",
//     "did:ixo:entity:c2151a473952075466d3c363f7df7820",
//     "did:ixo:entity:c285ccf0ee8e34cdf5a0ed7842cd9267",
//     "did:ixo:entity:c2a5f3df523b096639e3929b136dcf38",
//     "did:ixo:entity:c3e68ae287f667b7fe521a5593c80446",
//     "did:ixo:entity:c4d2976890458bd2966dac7ccb374f27",
//     "did:ixo:entity:c4e49d5542317321d3ef41c7e02ede4f",
//     "did:ixo:entity:c4fd9e5c3473f8eda475aa97adfef636",
//     "did:ixo:entity:c5e45f46fc30ff6b4209c36e0e2cc33d",
//     "did:ixo:entity:c5ee0c6e8d0f23241e3f4f30e8c49193",
//     "did:ixo:entity:c643763a8b19ac92127388e38399fed5",
//     "did:ixo:entity:c67bed5e697dccef4a33c1fb2ddfeb19",
//     "did:ixo:entity:c6b86d64620698e08e603d07988dfc3b",
//     "did:ixo:entity:c6cf9cb9c90b836f3828eb6970b295a9",
//     "did:ixo:entity:c79b9608f80ea363d1d69349bf629cc3",
//     "did:ixo:entity:c7a6cc945de07d0d7b9473de6e7d945d",
//     "did:ixo:entity:c7b0240f2209f6152c8dd674efc16377",
//     "did:ixo:entity:c810c11f8566d197f3e3c7636b5bf7b3",
//     "did:ixo:entity:c8bd30f775168a570870e6953372e7fb",
//     "did:ixo:entity:ca6722d95c675450a9fea1d80ea393b4",
//     "did:ixo:entity:cac4a01967afac78b3073ea1040541c5",
//     "did:ixo:entity:cb6ed9b886a62d5c25a26c33ed7c4914",
//     "did:ixo:entity:cb7e9e13b6d36880efe8ce4232f47d38",
//     "did:ixo:entity:cb8f1b3563b8b978b06a680cc3ad96de",
//     "did:ixo:entity:cc5dc2d664649c17e0c045fa516c81ba",
//     "did:ixo:entity:cca28fbd9089a7bea0a4f03d40f80786",
//     "did:ixo:entity:ccc3f25c4b96103775b670e0ee3a04b6",
//     "did:ixo:entity:ce671534567e4b299cea8cf063757815",
//     "did:ixo:entity:cef1653e8b1f6b6c1c0d2eb07dbeb1a0",
//     "did:ixo:entity:cf601ec6e07bafe4c49426b7eee5fd37",
//     "did:ixo:entity:d054732cdd0aab71ba4444ed06b8a444",
//     "did:ixo:entity:d0a860ca7dfe86a3eed0a27e82068dfc",
//     "did:ixo:entity:d29feade664ce0764f077dda491ba0e9",
//     "did:ixo:entity:d3ff94cdbbb3163e84955a535799fe7e",
//     "did:ixo:entity:d40bdbbab470999fe48372683cbabb78",
//     "did:ixo:entity:d421ee87c5cd57405a0cd86f2ad72d74",
//     "did:ixo:entity:d42da459c69d538060992092d46ea0ce",
//     "did:ixo:entity:d487ee2731a23ae3a7ede4f9431da065",
//     "did:ixo:entity:d4a8f918683d259cd6be7dd6d7d4d63a",
//     "did:ixo:entity:d4cba54d5f43676be14898597a19447b",
//     "did:ixo:entity:d4e70ad944981ba276ef35b2a3984fe4",
//     "did:ixo:entity:d55aa6672046065e4ab3cd52b274a16d",
//     "did:ixo:entity:d66bb40f336b3d6585ea04a13a020a1a",
//     "did:ixo:entity:d6fbd769a27fc79dff9e57f507cb5abc",
//     "did:ixo:entity:d71e9e9d4258c57d1f73e8839ec58a68",
//     "did:ixo:entity:d74f3009997d807d7406f6a2a3fa16b1",
//     "did:ixo:entity:d7865d4329e7794d610f5136ec6428c6",
//     "did:ixo:entity:d7c62f80addaa278d932c4dca1626d65",
//     "did:ixo:entity:d878787778da0dca9f727815cdcac430",
//     "did:ixo:entity:d8dfde8331f706a536d34f091f1c46f2",
//     "did:ixo:entity:d8e0cbc3c5450428b0986428d485821f",
//     "did:ixo:entity:d9adb9da9a2f3b54c90a94bc59deb957",
//     "did:ixo:entity:da2072d8024a774837ff00db9e963eca",
//     "did:ixo:entity:db4d96d9c95e89a47237c36169104d92",
//     "did:ixo:entity:db86685bf1be5dba7b3e289cd0e29ad4",
//     "did:ixo:entity:dbd19c7d843069d72ca6a5d7e1844af6",
//     "did:ixo:entity:dc4311e6e76f427c1793ab703d3c3a23",
//     "did:ixo:entity:dcfd0c6bee69c73cec12cbc9bc86ed06",
//     "did:ixo:entity:ddcb0959ac24e5213701bc8a2b4f0894",
//     "did:ixo:entity:de9fb35849d66ea20525df6dd3b63ff5",
//     "did:ixo:entity:deb24afa273bf60709549c11d6da5eef",
//     "did:ixo:entity:e029d18d66b39b9be81451604ff8945b",
//     "did:ixo:entity:e14b2ad774a3df96eb5c935cced40fe8",
//     "did:ixo:entity:e26d46159a730dce1b6bde077c66f365",
//     "did:ixo:entity:e29ebfd5ebd51e9893d2f9dbcd26f890",
//     "did:ixo:entity:e32f8713067d72b8c4a4168de86d0e30",
//     "did:ixo:entity:e3343cd47588c98b217d57ba72ed039f",
//     "did:ixo:entity:e40494782d525619bc9e965fd4b11664",
//     "did:ixo:entity:e44f5889657a40ced3aa7a80d51d991a",
//     "did:ixo:entity:e45336cd8273b67d17ab88f236d24568",
//     "did:ixo:entity:e4ccae1f965181f56a9e2d28aa613509",
//     "did:ixo:entity:e5a4092306be3899add901ee88251b5f",
//     "did:ixo:entity:e5d057fa0d99eebb7ba840bc6de9c35a",
//     "did:ixo:entity:e602767888fe196a4d04b57bc5b7ee26",
//     "did:ixo:entity:e627eb12ac9bb4717661e7ad871256d3",
//     "did:ixo:entity:e6b0584a078878403e876283e624ce88",
//     "did:ixo:entity:e7f584cb6c651f547f6e06e89762288a",
//     "did:ixo:entity:e8a8049fd495f19379a5ce95484e8b47",
//     "did:ixo:entity:e952d7aae4ee88a876c4319fcc472c86",
//     "did:ixo:entity:e9608602b4a06729c130c6bc0a8eab7f",
//     "did:ixo:entity:e98dd0ae4ad747419f097bc2add05abf",
//     "did:ixo:entity:e99f13d5c8c10afeba690716644752b3",
//     "did:ixo:entity:e9b0bcc9a3322bbf0f6f08dc47f5ec71",
//     "did:ixo:entity:e9fec44f9cfa04398a665ff845cdbb48",
//     "did:ixo:entity:ea401266aebc0484b142ca785371bebc",
//     "did:ixo:entity:ea9b1b32a43d44c9177cb690ced23f96",
//     "did:ixo:entity:ead4ac829b66a42380dbd9a6f71f887b",
//     "did:ixo:entity:ec54fe1dd111a912b55ba6a0234f1084",
//     "did:ixo:entity:ec5e5d045edb512463c37c89deeec936",
//     "did:ixo:entity:ec84a918bddee39d69c21923efb71448",
//     "did:ixo:entity:ed690ee00292318aafbe5adf94e87447",
//     "did:ixo:entity:ed724424aaa75803e2f2b7456ec6a799",
//     "did:ixo:entity:ee1b5aa1b3dec72d9bebcb9d05bfca1b",
//     "did:ixo:entity:ee6c781b3d7b27c593f7a13eeca477af",
//     "did:ixo:entity:eec968c3186b1bbb2d728db4d9385a4e",
//     "did:ixo:entity:eeed32c1241ced4e7e5d6a4ee96a715a",
//     "did:ixo:entity:eef24c4aa9a3e9999c3da9bd446a97eb",
//     "did:ixo:entity:ef2b04b2093d0e258c5e8fc8459805dc",
//     "did:ixo:entity:ef2c5780c013a4f7cbb7b625be175471",
//     "did:ixo:entity:ef82a343c1aa9f7b736021402ed10b43",
//     "did:ixo:entity:efbb639721bfde4de705886f1f82654c",
//     "did:ixo:entity:efd94b847fc7e81ac06d4502d9c1a855",
//     "did:ixo:entity:f025fac557962e313ed8cbfe2dbf1196",
//     "did:ixo:entity:f0cb5f79b84af28538602bbbde38bd1a",
//     "did:ixo:entity:f14d78e64d974d68bdd9017994dc44ae",
//     "did:ixo:entity:f1a3ce75869d1919aa1c82ff7fa4fb6d",
//     "did:ixo:entity:f3a9e6797ec37ec125c8a5df14956975",
//     "did:ixo:entity:f3b3d61f63133ee705dad5620e027709",
//     "did:ixo:entity:f40a7da6586c5f0beb5e3a253d375ac7",
//     "did:ixo:entity:f4464fad2db0003bcded49894b1f351a",
//     "did:ixo:entity:f477bace5d345a2de455a1114ebf4779",
//     "did:ixo:entity:f47a402b6c343067726324b6e5c8eb00",
//     "did:ixo:entity:f4bffc7d2861f86e77af0945be9a36c8",
//     "did:ixo:entity:f5002483be8aefd0d03dcd746da2b54f",
//     "did:ixo:entity:f630a0bd102a7d22167559b992e6ce2b",
//     "did:ixo:entity:f67dcf7ff06f8db251db0d084c8141aa",
//     "did:ixo:entity:f6dab66b7b72d60ed112a51b6b5c5ed2",
//     "did:ixo:entity:f6f30379962bd2e04b22fdc13433f6bd",
//     "did:ixo:entity:f71d0d0a37c7914b2524c720d8cb2ac7",
//     "did:ixo:entity:f7268fa01a91cf789f32854d81a2f513",
//     "did:ixo:entity:f7887f52026c6a53280d003969dc4d1c",
//     "did:ixo:entity:f844b13414730a281e87aebdd8584423",
//     "did:ixo:entity:f861b3a136eb43443cc81ddc24ee8d6b",
//     "did:ixo:entity:f96445c44fe44f4a0b885930f9ac9152",
//     "did:ixo:entity:f9f2641b230623a12fbe7db1fa40cf68",
//     "did:ixo:entity:faadb8bd8e6a4192fc122432ff9f6edd",
//     "did:ixo:entity:faf5e5c6e49ac7db7d195d6e954b9ddc",
//     "did:ixo:entity:fba89e948e4c7f844f3eb01b7f6cc295",
//     "did:ixo:entity:fca679bb5ec6565721c6fcb22103294f",
//     "did:ixo:entity:fcbe57f423bb6dd2b066cf164d000067",
//     "did:ixo:entity:fcd99b36f83977a94015e49d22f0a523",
//     "did:ixo:entity:fd03eb550441754ba39ef5960f36961b",
//     "did:ixo:entity:fd80b5be28ccb45890440c1414b9b148",
//     "did:ixo:entity:fdcb83e6c85d57c9158ae0b76eb94046",
//     "did:ixo:entity:fe6fe2b14f414c65bd04985fe75aca87",
//     "did:ixo:entity:fed851c8c2263fc60e3ed3fe54e37127",
//   ],
//   true
// ); //emerging dao user

// ------------------------------------------
// DID ORACLE add ed keys
// ------------------------------------------
// didOracleFlow();
