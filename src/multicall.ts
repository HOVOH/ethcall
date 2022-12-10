interface Multicall {
  address: string;
  // The block at which the contract was deployed
  block: number;
}

function getMulticall(chainId: number): Multicall | null {
  const addressMap: Record<number, Multicall | null> = {
    1: {
      address: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
      block: 7929876,
    },
    3: {
      address: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
      block: 7980811,
    },
    4: {
      address: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
      block: 4534725,
    },
    5: {
      address: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
      block: 743550,
    },
    10: {
      address: '0x266557A864680A1401A3506c0eb72934BD13Bf59',
      block: 0,
    },
    25: {
      address: '0x5e954f5972EC6BFc7dECd75779F10d848230345F',
      block: 0,
    },
    42: {
      address: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a',
      block: 11482433,
    },
    56: {
      address: '0xe21a5b299756ee452a6a871ff29852862fc99be9',
      block: 0,
    },
    100: {
      address: '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
      block: 0,
    },
    106: {
      address: '0x0747CFe82D3Bee998f634569FE2B0005dF9d8EDE',
      block: 0,
    },
    108: {
      address: '0xfce4609743e17d349b7e5f478a7a9a6cfa3c808c',
      block: 0,
    },
    128: {
      address: '0x56171094a15b8cac4314c0f8930100b939503bd9',
      block: 0,
    },
    137: {
      address: '0x35e4aa226ce52e1e59e5e5ec24766007bcbe2e7d',
      block: 12608630,
    },
    250: {
      address: '0xc04d660976c923ddba750341fe5923e47900cf24',
      block: 0,
    },
    288: {
      address: '0x650129FB67354eF8C148a8CDb1a2d5E01B520CaD',
      block: 0,
    },
    321: {
      address: '0x543528e13eac69206e87334cca971503a552438b',
      block: 0,
    },
    592: {
      address: '0x57F40bbBCc11BE5471a8f9bF1dE56816a1CF08f6',
      block: 0,
    },
    820: {
      address: '0x8ba3d23241c7044be703afaf2a728fdbc16f5f6f',
      block: 0,
    },
    1234: {
      address: '0x176CcFFbAB792Aaa0da7C430FE20a7106d969f66',
      block: 22,
    },
    1284: {
      address: '0x83e3b61886770de2F64AAcaD2724ED4f08F7f36B',
      block: 0,
    },
    1337: {
      address: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
      block: 0,
    },
    3999: {
      address: '0xFC8bd6469c65d58fBf969512Be1564579cEc4855',
      block: 859439,
    },
    4689: {
      address: '0x0e14ded9e7965c6446df2e5c528dd1b4e3b4640f',
      block: 0,
    },
    31337: {
      address: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
      block: 0,
    },
    42161: {
      address: '0x10126ceb60954bc35049f24e819a380c505f8a0f',
      block: 0,
    },
    42262: {
      address: '0xAC84239C64D4E21c98C905Eca62af0b56017B8F6',
      block: 0,
    },
    43114: {
      address: '0xE8eeDd99baC03871CF123E76cE90bA179Df94351',
      block: 0,
    },
    80001: {
      address: '0x08411add0b5aa8ee47563b146743c13b3556c9cc',
      block: 12011090,
    },
    1313161554: {
      address: '0xa48c67d1c60b8187ecb7c549e8a670419d356994',
      block: 0,
    },
    1666600000: {
      address: '0xfe4980f62d708c2a84d3929859ea226340759320',
      block: 0,
    },
    73927: {
      address: '0x9Fa7eAC783F772734337B99D1d5AAeAd75Cd9077',
      block: 14080409,
    },
  };
  return addressMap[chainId];
}

function getMulticall2(chainId: number): Multicall | null {
  const addressMap: Record<number, Multicall | null> = {
    1: {
      address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
      block: 12336033,
    },
    4: {
      address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
      block: 8283206,
    },
    5: {
      address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
      block: 4489716,
    },
    10: {
      address: '0x054FfF7ee30953DdB739458e11EAAd51224343a1',
      block: 31946661,
    },
    42: {
      address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
      block: 24025820,
    },
    56: {
      address: '0x4c6bb7c24b6f3dfdfb548e54b7c5ea4cb52a0069',
      block: 0,
    },
    100: {
      address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
      block: 0,
    },
    137: {
      address: '0xf43a7be1b284aa908cdfed8b3e286961956b4d2c',
      block: 15695723,
    },
    250: {
      address: '0x470ADB45f5a9ac3550bcFFaD9D990Bf7e2e941c9',
      block: 0,
    },
    1284: {
      address: '0x9256d856A13EB3732d90D88B57F33d0847Fa50bF',
      block: 0,
    },
    1337: {
      address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
      block: 0,
    },
    3999: {
      address: '0xf03f60aC45EC5616516dC400C3f25Ec6Db566c9F',
      block: 859481,
    },
    31337: {
      address: '0x5ba1e12693dc8f9c48aad8770482f4739beed696',
      block: 0,
    },
    42161: {
      address: '0x842eC2c7D803033Edf55E478F461FC547Bc54EB2',
      block: 0,
    },
    42220: {
      address: '0xE72f42c64EA3dc05D2D94F541C3a806fa161c49B',
      block: 9325322,
    },
    44787: {
      address: '0xA3A2E17933C0865534Ac7839F7a860E40C95D340',
      block: 9082778,
    },
    53935: {
      address: '0x5b24224dC16508DAD755756639E420817DD4c99E',
      block: 62,
    },
    421611: {
      address: '0x96DB1F8055074aB62161B6Ad66Ab6B8679513DeF',
      block: 0,
    },
    73927: {
      address: '0x5Ac86eC2e6332280Eff161c169aCcC345996c340',
      block: 14080778,
    },
  };
  return addressMap[chainId];
}

function getMulticall3(chainId: number): Multicall | null {
  const address = '0xca11bde05977b3631167028862be2a173976ca11';
  const addressMap: Record<number, Multicall | null> = {
    1: {
      address,
      block: 14353601,
    },
    3: {
      address,
      block: 12063863,
    },
    4: {
      address,
      block: 10299530,
    },
    5: {
      address,
      block: 6507670,
    },
    10: {
      address,
      block: 4286263,
    },
    14: {
      address,
      block: 3002461,
    },
    16: {
      address,
      block: 276388,
    },
    19: {
      address,
      block: 13382504,
    },
    42: {
      address,
      block: 30285908,
    },
    56: {
      address,
      block: 15921452,
    },
    69: {
      address,
      block: 1418387,
    },
    97: {
      address,
      block: 17422483,
    },
    100: {
      address,
      block: 21022491,
    },
    114: {
      address,
      block: 508735,
    },
    137: {
      address,
      block: 25770160,
    },
    250: {
      address,
      block: 33001987,
    },
    1284: {
      address,
      block: 609002,
    },
    1285: {
      address,
      block: 1597904,
    },
    1287: {
      address,
      block: 1850686,
    },
    2222: {
      address: '0x1578f6d2D3168acF41b506AA666A521994F6BAB6',
      block: 1176602,
    },
    4002: {
      address,
      block: 8328688,
    },
    42161: {
      address,
      block: 7654707,
    },
    42220: {
      address,
      block: 13112599,
    },
    43113: {
      address,
      block: 7096959,
    },
    43114: {
      address,
      block: 11907934,
    },
    80001: {
      address,
      block: 25444704,
    },
    421611: {
      address,
      block: 10228837,
    },
    1666600000: {
      address,
      block: 24185753,
    },
    73927: {
      address: '0x138A85647768815078DF1dD85C6121e611381A0b',
      block: 14080843,
    },
  };
  return addressMap[chainId];
}

const deploylessMulticallBytecode =
  '0x608060405234801561001057600080fd5b5060405161075138038061075183398181016040528101906100329190610466565b60004390506000825167ffffffffffffffff811115610054576100536106d6565b5b60405190808252806020026020018201604052801561008757816020015b60608152602001906001900390816100725790505b50905060005b83518110156102715760008073bd770416a3345f91e4b34576cb804a576fa48eb173ffffffffffffffffffffffffffffffffffffffff168684815181106100d7576100d66106a7565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff16146101a757858381518110610111576101106106a7565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff16868481518110610146576101456106a7565b5b60200260200101516020015160405161015f91906104e0565b6000604051808303816000865af19150503d806000811461019c576040519150601f19603f3d011682016040523d82523d6000602084013e6101a1565b606091505b5061022f565b600073ffffffffffffffffffffffffffffffffffffffff168684815181106101d2576101d16106a7565b5b6020026020010151602001516040516101eb91906104e0565b6000604051808303816000865af19150503d8060008114610228576040519150601f19603f3d011682016040523d82523d6000602084013e61022d565b606091505b505b915091508161023d57600080fd5b80848481518110610251576102506106a7565b5b6020026020010181905250505080806102699061062f565b91505061008d565b508160408203526040602082035260208101602082015b602060018451010283018110156102aa57818151038152602081019050610288565b50604082604051030160408303f35b60006102cc6102c78461051c565b6104f7565b905080838252602082019050828560208602820111156102ef576102ee610714565b5b60005b8581101561033d57815167ffffffffffffffff81111561031557610314610705565b5b80860161032289826103fa565b855260208501945060208401935050506001810190506102f2565b5050509392505050565b600061035a61035584610548565b6104f7565b90508281526020810184848401111561037657610375610719565b5b6103818482856105cb565b509392505050565b60008151905061039881610739565b92915050565b600082601f8301126103b3576103b2610705565b5b81516103c38482602086016102b9565b91505092915050565b600082601f8301126103e1576103e0610705565b5b81516103f1848260208601610347565b91505092915050565b6000604082840312156104105761040f61070a565b5b61041a60406104f7565b9050600061042a84828501610389565b600083015250602082015167ffffffffffffffff81111561044e5761044d61070f565b5b61045a848285016103cc565b60208301525092915050565b60006020828403121561047c5761047b610723565b5b600082015167ffffffffffffffff81111561049a5761049961071e565b5b6104a68482850161039e565b91505092915050565b60006104ba82610579565b6104c48185610584565b93506104d48185602086016105cb565b80840191505092915050565b60006104ec82846104af565b915081905092915050565b6000610501610512565b905061050d82826105fe565b919050565b6000604051905090565b600067ffffffffffffffff821115610537576105366106d6565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610563576105626106d6565b5b61056c82610728565b9050602081019050919050565b600081519050919050565b600081905092915050565b600061059a826105a1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156105e95780820151818401526020810190506105ce565b838111156105f8576000848401525b50505050565b61060782610728565b810181811067ffffffffffffffff82111715610626576106256106d6565b5b80604052505050565b600061063a826105c1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561066d5761066c610678565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6107428161058f565b811461074d57600080fd5b5056fe';

const deploylessMulticall2Bytecode =
  '0x608060405234801561001057600080fd5b5060405161087538038061087583398181016040528101906100329190610666565b6000815167ffffffffffffffff81111561004f5761004e610358565b5b60405190808252806020026020018201604052801561008857816020015b6100756102da565b81526020019060019003908161006d5790505b50905060005b82518110156101d3576000808483815181106100ad576100ac6106c2565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff168584815181106100e2576100e16106c2565b5b6020026020010151602001516040516100fb9190610738565b6000604051808303816000865af19150503d8060008114610138576040519150601f19603f3d011682016040523d82523d6000602084013e61013d565b606091505b509150915085156101895781610188576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017f906107d2565b60405180910390fd5b5b60405180604001604052808315158152602001828152508484815181106101b3576101b26106c2565b5b6020026020010181905250505080806101cb9061082b565b91505061008e565b50602081516040028260405103030160408160405103036001835111156102535760005b8351811015610251578060200260208501018160200260400183018261021f57855160200281525b6000831115610244576020808303510151602083510151038060208303510180835250505b50506001810190506101f7565b505b60005b8351811015610281578060200260208501018051516040602083510151035250600181019050610256565b5060005b83518110156102ae57806020026020850101604060208083510151035250600181019050610285565b506001835114156102cb5760208301604082018451602002815250505b60208152825160208201528181f35b6040518060400160405280600015158152602001606081525090565b6000604051905090565b600080fd5b600080fd5b60008115159050919050565b61031f8161030a565b811461032a57600080fd5b50565b60008151905061033c81610316565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61039082610347565b810181811067ffffffffffffffff821117156103af576103ae610358565b5b80604052505050565b60006103c26102f6565b90506103ce8282610387565b919050565b600067ffffffffffffffff8211156103ee576103ed610358565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104398261040e565b9050919050565b6104498161042e565b811461045457600080fd5b50565b60008151905061046681610440565b92915050565b600080fd5b600067ffffffffffffffff82111561048c5761048b610358565b5b61049582610347565b9050602081019050919050565b60005b838110156104c05780820151818401526020810190506104a5565b838111156104cf576000848401525b50505050565b60006104e86104e384610471565b6103b8565b9050828152602081018484840111156105045761050361046c565b5b61050f8482856104a2565b509392505050565b600082601f83011261052c5761052b610342565b5b815161053c8482602086016104d5565b91505092915050565b60006040828403121561055b5761055a610404565b5b61056560406103b8565b9050600061057584828501610457565b600083015250602082015167ffffffffffffffff81111561059957610598610409565b5b6105a584828501610517565b60208301525092915050565b60006105c46105bf846103d3565b6103b8565b905080838252602082019050602084028301858111156105e7576105e66103ff565b5b835b8181101561062e57805167ffffffffffffffff81111561060c5761060b610342565b5b8086016106198982610545565b855260208501945050506020810190506105e9565b5050509392505050565b600082601f83011261064d5761064c610342565b5b815161065d8482602086016105b1565b91505092915050565b6000806040838503121561067d5761067c610300565b5b600061068b8582860161032d565b925050602083015167ffffffffffffffff8111156106ac576106ab610305565b5b6106b885828601610638565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600081905092915050565b6000610712826106f1565b61071c81856106fc565b935061072c8185602086016104a2565b80840191505092915050565b60006107448284610707565b915081905092915050565b600082825260208201905092915050565b7f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c6560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b60006107bc60218361074f565b91506107c782610760565b604082019050919050565b600060208201905081810360008301526107eb816107af565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b600061083682610821565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610869576108686107f2565b5b60018201905091905056fe';

const deploylessMulticall3Bytecode =
  '0x608060405234801561001057600080fd5b5060405161089338038061089383398181016040528101906100329190610697565b6000815167ffffffffffffffff81111561004f5761004e61033d565b5b60405190808252806020026020018201604052801561008857816020015b6100756102f7565b81526020019060019003908161006d5790505b50905060005b82518110156101f0576000808483815181106100ad576100ac6106e0565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff168584815181106100e2576100e16106e0565b5b6020026020010151604001516040516100fb9190610756565b6000604051808303816000865af19150503d8060008114610138576040519150601f19603f3d011682016040523d82523d6000602084013e61013d565b606091505b5091509150848381518110610155576101546106e0565b5b6020026020010151602001516101a657816101a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019c906107f0565b60405180910390fd5b5b60405180604001604052808315158152602001828152508484815181106101d0576101cf6106e0565b5b6020026020010181905250505080806101e890610849565b91505061008e565b50602081516040028260405103030160408160405103036001835111156102705760005b835181101561026e578060200260208501018160200260400183018261023c57855160200281525b6000831115610261576020808303510151602083510151038060208303510180835250505b5050600181019050610214565b505b60005b835181101561029e578060200260208501018051516040602083510151035250600181019050610273565b5060005b83518110156102cb578060200260208501016040602080835101510352506001810190506102a2565b506001835114156102e85760208301604082018451602002815250505b60208152825160208201528181f35b6040518060400160405280600015158152602001606081525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6103758261032c565b810181811067ffffffffffffffff821117156103945761039361033d565b5b80604052505050565b60006103a7610313565b90506103b3828261036c565b919050565b600067ffffffffffffffff8211156103d3576103d261033d565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061041e826103f3565b9050919050565b61042e81610413565b811461043957600080fd5b50565b60008151905061044b81610425565b92915050565b60008115159050919050565b61046681610451565b811461047157600080fd5b50565b6000815190506104838161045d565b92915050565b600080fd5b600067ffffffffffffffff8211156104a9576104a861033d565b5b6104b28261032c565b9050602081019050919050565b60005b838110156104dd5780820151818401526020810190506104c2565b838111156104ec576000848401525b50505050565b60006105056105008461048e565b61039d565b90508281526020810184848401111561052157610520610489565b5b61052c8482856104bf565b509392505050565b600082601f83011261054957610548610327565b5b81516105598482602086016104f2565b91505092915050565b600060608284031215610578576105776103e9565b5b610582606061039d565b905060006105928482850161043c565b60008301525060206105a684828501610474565b602083015250604082015167ffffffffffffffff8111156105ca576105c96103ee565b5b6105d684828501610534565b60408301525092915050565b60006105f56105f0846103b8565b61039d565b90508083825260208201905060208402830185811115610618576106176103e4565b5b835b8181101561065f57805167ffffffffffffffff81111561063d5761063c610327565b5b80860161064a8982610562565b8552602085019450505060208101905061061a565b5050509392505050565b600082601f83011261067e5761067d610327565b5b815161068e8482602086016105e2565b91505092915050565b6000602082840312156106ad576106ac61031d565b5b600082015167ffffffffffffffff8111156106cb576106ca610322565b5b6106d784828501610669565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600081905092915050565b60006107308261070f565b61073a818561071a565b935061074a8185602086016104bf565b80840191505092915050565b60006107628284610725565b915081905092915050565b600082825260208201905092915050565b7f4d756c746963616c6c33206167677265676174653a2063616c6c206661696c6560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b60006107da60218361076d565b91506107e58261077e565b604082019050919050565b60006020820190508181036000830152610809816107cd565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b60006108548261083f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561088757610886610810565b5b60018201905091905056fe';

export {
  Multicall,
  getMulticall,
  getMulticall2,
  getMulticall3,
  deploylessMulticallBytecode,
  deploylessMulticall2Bytecode,
  deploylessMulticall3Bytecode,
};
