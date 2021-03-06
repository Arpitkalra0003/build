webpackJsonp(["common"],{

/***/ "../../../../wallet.js":
/***/ (function(module, exports) {

      var web3 = new Web3();
      var global_keystore;
      var callerAddress;
      console.log(web3);

        //Contract ABI's 
        var INCTokenABI = [
          {
            "constant": true,
            "inputs": [],
            "name": "version",
            "outputs": [
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
              {
                "name": "supplyCoins",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "owed",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "name": "balances",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "_owner",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "name": "balance",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "_owner",
                "type": "address"
              },
              {
                "name": "_spender",
                "type": "address"
              }
            ],
            "name": "allowance",
            "outputs": [
              {
                "name": "remaining",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "NAME",
            "outputs": [
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "DECIMALS",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "SYMBOL",
            "outputs": [
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "name": "_bankAddress",
                "type": "address"
              },
              {
                "name": "_intialSupply",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_owner",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "_spender",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "Destroy",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "conversion",
                "type": "bytes32"
              },
              {
                "indexed": true,
                "name": "agentSender",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "agentReceiver",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "amountForward",
                "type": "bool"
              },
              {
                "indexed": false,
                "name": "amountReceive",
                "type": "bool"
              }
            ],
            "name": "EscrowAmountReleased",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "LenderDestroy",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "LenderMint",
            "type": "event"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "Mint",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_from",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "_to",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_spender",
                "type": "address"
              },
              {
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [
              {
                "name": "success",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_owner",
                "type": "address"
              },
              {
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "decreaseBankBalance",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_owner",
                "type": "address"
              },
              {
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "increaseBankBalance",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "txid1",
                "type": "bytes32"
              },
              {
                "name": "txid2",
                "type": "bytes32"
              },
              {
                "name": "agentSender",
                "type": "address"
              },
              {
                "name": "agentReceiver",
                "type": "address"
              }
            ],
            "name": "releaseEscrowINRXtoUSDX",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "txid1",
                "type": "bytes32"
              },
              {
                "name": "txid2",
                "type": "bytes32"
              },
              {
                "name": "agentSender",
                "type": "address"
              },
              {
                "name": "agentReceiver",
                "type": "address"
              }
            ],
            "name": "releaseEscrowUSDXtoINRX",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_USDXContract",
                "type": "address"
              },
              {
                "name": "_INRXContract",
                "type": "address"
              }
            ],
            "name": "setUSDXandINRXContractAddress",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_owner",
                "type": "address"
              },
              {
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "toCurrencyX",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_owner",
                "type": "address"
              },
              {
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "toINC",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_to",
                "type": "address"
              },
              {
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "name": "success",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_from",
                "type": "address"
              },
              {
                "name": "_to",
                "type": "address"
              },
              {
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [
              {
                "name": "success",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ];
  
      var INRXAbi = [
        {
          "constant": false,
          "inputs": [
            {
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "addToCurrencyX",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_usdxContractAddress",
              "type": "address"
            }
          ],
          "name": "setUSDXContract",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "INRXBalance",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            },
            {
              "name": "txid",
              "type": "bytes32"
            },
            {
              "name": "senderAgent",
              "type": "address"
            },
            {
              "name": "receiverAgent",
              "type": "address"
            }
          ],
          "name": "releaseEscrowS",
          "outputs": [
            {
              "name": "isEscrowRelease",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "rateSet",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_user",
              "type": "address"
            }
          ],
          "name": "showBalance",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "addrSender",
              "type": "address"
            },
            {
              "name": "addrReceiverAgent",
              "type": "address"
            },
            {
              "name": "addrReceiver",
              "type": "address"
            },
            {
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "lockEscrow",
          "outputs": [
            {
              "name": "transactionID",
              "type": "bytes32"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_amount",
              "type": "uint256"
            },
            {
              "name": "_allYN",
              "type": "bool"
            }
          ],
          "name": "withdrawAsINC",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_user",
              "type": "address"
            },
            {
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "recieveFund",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            },
            {
              "name": "txid",
              "type": "bytes32"
            },
            {
              "name": "receiverAgent",
              "type": "address"
            }
          ],
          "name": "releaseEscrowR",
          "outputs": [
            {
              "name": "isEscrowRelease",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "INCval",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "_bankaddress",
              "type": "address"
            },
            {
              "name": "_mainContractAddress",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "senderAgent",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "reciever",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "recieverAgent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "time",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "txid",
              "type": "bytes32"
            }
          ],
          "name": "LockEscrowAmount",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "senderAgent",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "receiverAgent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "isEscrowAmountForwarded",
              "type": "bool"
            }
          ],
          "name": "ReleaseEscrowAmount",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "receiverAgent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "isEscrowAmountRelease",
              "type": "bool"
            }
          ],
          "name": "ReleaseReceiverEscrowAmount",
          "type": "event"
        }
      ];
  
      var USDXAbi = [
        {
          "constant": false,
          "inputs": [
            {
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "addToCurrencyX",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            },
            {
              "name": "txid",
              "type": "bytes32"
            },
            {
              "name": "senderAgent",
              "type": "address"
            },
            {
              "name": "receiverAgent",
              "type": "address"
            }
          ],
          "name": "releaseEscrowS",
          "outputs": [
            {
              "name": "isEscrowRelease",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "rateSet",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_user",
              "type": "address"
            }
          ],
          "name": "showBalance",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "addrSender",
              "type": "address"
            },
            {
              "name": "addrReceiverAgent",
              "type": "address"
            },
            {
              "name": "addrReceiver",
              "type": "address"
            },
            {
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "lockEscrow",
          "outputs": [
            {
              "name": "transactionID",
              "type": "bytes32"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_inrxContractAddress",
              "type": "address"
            }
          ],
          "name": "setINRXContract",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_amount",
              "type": "uint256"
            },
            {
              "name": "_allYN",
              "type": "bool"
            }
          ],
          "name": "withdrawAsINC",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_user",
              "type": "address"
            },
            {
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "recieveFund",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "USDXBalance",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_owner",
              "type": "address"
            },
            {
              "name": "txid",
              "type": "bytes32"
            },
            {
              "name": "receiverAgent",
              "type": "address"
            }
          ],
          "name": "releaseEscrowR",
          "outputs": [
            {
              "name": "isEscrowRelease",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "INCval",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "_bankaddress",
              "type": "address"
            },
            {
              "name": "_mainContractAddress",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "senderAgent",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "reciever",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "recieverAgent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "time",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "txid",
              "type": "bytes32"
            }
          ],
          "name": "LockEscrowAmount",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "senderAgent",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "recieverAgent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "isEscrowAmountForwarded",
              "type": "bool"
            }
          ],
          "name": "ReleaseEscrowAmount",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "receiverAgent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "isEscrowAmountRelease",
              "type": "bool"
            }
          ],
          "name": "ReleaseReceiverEscrowAmount",
          "type": "event"
        }
      ];
  
  
      var INCTokenContract = web3.eth.contract(INCTokenABI);
      var INRXContract = web3.eth.contract(INRXAbi);
      var USDXContract = web3.eth.contract(USDXAbi);
  
      //Contract Address
      var INCTokenContractAddress = '0x7889c1870877dcd72fa4714a2b47ff179fdeb443';
      var INRXContractAddress = '0x4b4d93b0203197a2c6623c98e947189182411ad9';
      var USDXContractAddress = '0x170c7a55f061aa4c90b989aa3a1256dc58a12ff4';
  
      //Contract 
      var INCTokenC = INCTokenContract.at(INCTokenContractAddress);
      var INRX = INRXContract.at(INRXContractAddress);    
      var USDX = USDXContract.at(USDXContractAddress);

      //Function List

      function setWeb3Provider(keystore) {
        var web3Provider = new HookedWeb3Provider({
          host: "https://ropsten.infura.io/",
          transaction_signer: keystore
        });

        web3.setProvider(web3Provider);
      }

      function newAddresses(password) {
        
        if (password == '') {
          password = prompt('Enter password to retrieve addresses', 'Password');
        }

        // var numAddr = parseInt(document.getElementById('numAddr').value)
        var numAddr = 1;
        global_keystore.keyFromPassword(password, function(err, pwDerivedKey) {

        global_keystore.generateNewAddress(pwDerivedKey, numAddr);

        var addresses = global_keystore.getAddresses();
        console.log(addresses);
        callerAddress =addresses[0];
        // document.getElementById('sendFrom').innerHTML = ''
        // document.getElementById('functionCaller').innerHTML = ''
        // for (var i=0; i<addresses.length; ++i) {
        //   document.getElementById('sendFrom').innerHTML += '<option value="' + addresses[i] + '">' + addresses[i] + '</option>'
        //   document.getElementById('functionCaller').innerHTML += '<option value="' + addresses[i] + '">' + addresses[i] + '</option>'
        // }

         getBalances();
      })
      }

      function getBalances() {
        
        var addresses = global_keystore.getAddresses();

        async.map(addresses, web3.eth.getBalance, function(err, balances) {
          async.map(addresses, web3.eth.getTransactionCount, function(err, nonces) {
            for (var i=0; i<addresses.length; ++i) {
              console.log( addresses[i] + ' (Bal: ' + balances[i] / 1.0e18 + ' ETH)');
            }
          })
        })

      }

      var ss=function setSeed() {
        var password = prompt('Enter Password to encrypt your seed', 'Password');
        var seed = prompt('Enter seed', 'seed');
      lightwallet.keystore.createVault({
        password: password,
        seedPhrase: seed,//document.getElementById('seed').value,
        //random salt 
        hdPathString: "m/0'/0'/0'"
      }, function (err, ks) {

        global_keystore = ks

        // document.getElementById('seed').value = ''
        
        newAddresses(password);
        setWeb3Provider(global_keystore);
        
        // getBalances();
        })
      }

      function newWallet() {
        var extraEntropy = document.getElementById('userEntropy').value;
        document.getElementById('userEntropy').value = '';
        var randomSeed = lightwallet.keystore.generateRandomSeed(extraEntropy);

        var infoString = 'Your new wallet seed is: "' + randomSeed + 
          '". Please write it down on paper or in a password manager, you will need it to access your wallet. Do not let anyone see this seed or they can take your Ether. ' +
          'Please enter a password to encrypt your seed while in the browser.'
        var password = prompt(infoString, 'Password');


      lightwallet.keystore.createVault({
        password: password,
        seedPhrase: randomSeed,
        //random salt 
        hdPathString: "m/0'/0'/0'"
      }, function (err, ks) {

        global_keystore = ks
                
        newAddresses(password);
        setWeb3Provider(global_keystore);
        getBalances();
        })
      }

      function showSeed() {
        var password = prompt('Enter password to show your seed. Do not let anyone else see your seed.', 'Password');

        global_keystore.keyFromPassword(password, function(err, pwDerivedKey) {
        var seed = global_keystore.getSeed(pwDerivedKey);
        alert('Your seed is: "' + seed + '". Please write it down.');
        });
      }

      function sendEth() {
        var fromAddr = document.getElementById('sendFrom').value
        var toAddr = document.getElementById('sendTo').value
        var valueEth = document.getElementById('sendValueAmount').value
        var value = parseFloat(valueEth)*1.0e18
        var gasPrice = 18000000000
        var gas = 50000
        web3.eth.sendTransaction({from: fromAddr, to: toAddr, value: value, gasPrice: gasPrice, gas: gas}, function (err, txhash) {
          console.log('error: ' + err)
          console.log('txhash: ' + txhash)
        })
      }

      function incToken(functionName , args) {
        var fromAddr = callerAddress
        var functionName = functionName
        var args = JSON.parse('[' + args + ']')
        args.push({from: fromAddr})
        var callback = function(err, txhash) {
          console.log('error: ' + err)
          console.log('Result: ' + txhash)
          console.log('Result: ' + txhash/1.0e18)          
          document.getElementById('response').value = txhash/1.0e18;
        }
        args.push(callback)
        INCTokenC[functionName].apply(this, args)
      }
      function USDX(functionName , args) {
        var fromAddr = callerAddress
        var functionName = functionName
        var args = JSON.parse('[' + args + ']')
        args.push({from: fromAddr})
        var callback = function(err, txhash) {
          console.log('error: ' + err)
          console.log('Result: ' + txhash)
          console.log('Result: ' + txhash/1.0e18)          
          document.getElementById('response').value = txhash/1.0e18;
        }
        args.push(callback)
        USDX[functionName].apply(this, args)
      }
      function INRX(functionName , args) {
        var fromAddr = callerAddress
        var functionName = functionName
        var args = JSON.parse('[' + args + ']')
        args.push({from: fromAddr})
        var callback = function(err, txhash) {
          console.log('error: ' + err)
          console.log('Result: ' + txhash)
          console.log('Result: ' + txhash/1.0e18)          
          document.getElementById('response').value = txhash/1.0e18;
        }
        args.push(callback)
        INRX[functionName].apply(this, args)
      }

/***/ })

});
//# sourceMappingURL=common.chunk.js.map