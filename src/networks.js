'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.verge = {
  messagePrefix: '\x18Verge Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x022d2533,
    private: 0x0221312b,
  },
  pubKeyHash: 0x1e,
  scriptHash: 0x21,
  wif: 0x9e,
};
exports.regtest = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
