// script.js
let web3;
let providerWalletConnect = null;
let account;
let chainId = '0x61'; // BSC Testnet (97)
const stakingContractAddress = '0x71b66122f901c10670C818911b45B054Bcbc2e6F'; // Replace with your contract address
const vnstTokenAddress = '0x37c401DdBC8030c63BF3B3b2816Ba379BfD10474'; // Replace with your token address
const maxStakeLimit = 10000; // 10,000 VNST Max Stake

// Staking Contract ABI - Replace with your contract ABI
const stakingAbi = [{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_vnstAutoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"paused","type":"bool"}],"name":"ContractPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LevelDepositUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vntAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Staked","type":"event"},{"inputs":[],"name":"DAYS_IN_YEAR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"claimRewardsBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"defaultReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"directRewardPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"vntRewards","type":"uint256"},{"internalType":"uint256","name":"usdtRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStakesCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralCountByLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roiOfRoiPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"},{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setStakeLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vnstPrice","type":"uint256"},{"internalType":"uint256","name":"_vntPrice","type":"uint256"}],"name":"setTokenPrices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_vnstAutoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setWalletAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userStakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startDay","type":"uint256"},{"internalType":"uint256","name":"lastClaimDay","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalClaimed","type":"uint256"},{"internalType":"uint256","name":"lastClaimTimestamp","type":"uint256"},{"internalType":"uint256","name":"referralCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstAutoStakeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstStakingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

// VNST Token ABI - Replace with your token ABI
const tokenAbi = [{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FeeCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"TransferFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"VNSTPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnstAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"VNSTPurchased","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BLACKLIST_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"buyVNST","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"getUSDTRequiredForVNST","outputs":[{"internalType":"uint256","name":"usdtRequired","type":"uint256"},{"internalType":"uint256","name":"usdtAllowance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"roles","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setTransferFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setVNSTPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPriceInUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

// Contract instances with error handling
const contract = () => {
  if (!web3) {
    console.error('Web3 not initialized');
    return null;
  }
  return new web3.eth.Contract(stakingAbi, stakingContractAddress);
};

const vnstTokenContract = () => {
  if (!web3) {
    console.error('Web3 not initialized');
    return null;
  }
  return new web3.eth.Contract(tokenAbi, vnstTokenAddress);
};

// UI Elements
const walletBtn = document.getElementById('walletBtn');
const modal = document.getElementById('walletModal');
const connectMM = document.getElementById('connect-metamask');
const connectWC = document.getElementById('connect-walletconnect');
const connectTW = document.getElementById('connect-trustwallet');
const closeModalBtn = document.querySelector('.close-modal');

const stakeBtn = document.getElementById('stakeBtn');
const approveMaxBtn = document.getElementById('approveMaxBtn');
const claimTokenBtn = document.getElementById('claimTokenBtn');

const pendingVNT = document.getElementById('pendingVNT');
const pendingUSDT = document.getElementById('pendingUSDT');
const statStaked = document.getElementById('stat-staked');
const statEarned = document.getElementById('stat-earned');
const statReferrals = document.getElementById('stat-referrals');
const statLevel = document.getElementById('stat-level');

// Initialize
window.addEventListener('load', async () => {
  // Check if Web3 is injected
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        account = accounts[0];
        onConnect();
      }
      
      // Listen for account changes
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          account = accounts[0];
          onConnect();
        } else {
          onDisconnect();
        }
      });
      
      // Listen for chain changes
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });

      // Listen for disconnect event (new way)
      window.ethereum.on('disconnect', (error) => {
        console.log('Wallet disconnected', error);
        onDisconnect();
      });
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  }
});

// Wallet Connection Functions
async function connectMetaMask() {
  try {
    if (!window.ethereum) {
      alert('Please install MetaMask extension!');
      return;
    }

    // Reset WalletConnect if previously connected
    if (providerWalletConnect) {
      await providerWalletConnect.disconnect();
      providerWalletConnect = null;
    }

    web3 = new Web3(window.ethereum);
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];
    await switchToBSCTestnet();
    onConnect();
    closeModal();
  } catch (error) {
    console.error("MetaMask connection error:", error);
    alert('MetaMask connection failed: ' + (error.message || error));
  }
}

async function connectWalletConnect() {
  try {
    // Disconnect previous connection if any
    if (providerWalletConnect) {
      await providerWalletConnect.disconnect();
    }

    providerWalletConnect = new window.WalletConnectProvider.default({
      rpc: {
        56: 'https://bsc-dataseed.binance.org/',
        97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
      },
      chainId: 97 // BSC Testnet
    });

    await providerWalletConnect.enable();
    web3 = new Web3(providerWalletConnect);
    const accounts = await web3.eth.getAccounts();
    account = accounts[0];
    onConnect();
    closeModal();
    
    // Subscribe to accounts change
    providerWalletConnect.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        account = accounts[0];
        onConnect();
      } else {
        onDisconnect();
      }
    });

    // Subscribe to chainId change
    providerWalletConnect.on("chainChanged", () => {
      window.location.reload();
    });

    // Subscribe to session disconnection
    providerWalletConnect.on("disconnect", () => {
      onDisconnect();
    });
  } catch (error) {
    console.error("WalletConnect error:", error);
    alert('WalletConnect failed: ' + (error.message || error));
  }
}

async function connectTrustWallet() {
  try {
    if (window.trustwallet) {
      await connectMetaMask(); // Trust Wallet uses the same interface as MetaMask
    } else {
      await connectWalletConnect(); // Fallback to WalletConnect
    }
  } catch (error) {
    console.error("Trust Wallet connection error:", error);
    alert('Trust Wallet connection failed: ' + (error.message || error));
  }
}

async function switchToBSCTestnet() {
  try {
    const currentChain = await web3.eth.getChainId();
    if (currentChain !== 97) { // BSC Testnet chain ID
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId }],
      });
    }
  } catch (switchError) {
    // If chain doesn't exist, add it
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: chainId,
            chainName: 'Binance Smart Chain Testnet',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'BNB',
              decimals: 18
            },
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
            blockExplorerUrls: ['https://testnet.bscscan.com']
          }],
        });
      } catch (addError) {
        console.error("Error adding BSC Testnet:", addError);
        throw new Error('Failed to add BSC Testnet network');
      }
    } else {
      console.error("Error switching network:", switchError);
      throw new Error('Failed to switch to BSC Testnet');
    }
  }
}

// Event Listeners
walletBtn.addEventListener('click', () => modal.style.display = 'block');
closeModalBtn.addEventListener('click', closeModal);
connectMM.addEventListener('click', connectMetaMask);
connectWC.addEventListener('click', connectWalletConnect);
connectTW.addEventListener('click', connectTrustWallet);

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = 'none';
}

function onConnect() {
  walletBtn.textContent = `${account.slice(0, 6)}...${account.slice(-4)}`;
  walletBtn.classList.add('connected');
  refreshUI();
}

function onDisconnect() {
  walletBtn.textContent = 'Connect Wallet';
  walletBtn.classList.remove('connected');
  account = null;
  
  // Reset UI
  pendingVNT.textContent = 'Pending VNT: 0';
  pendingUSDT.textContent = 'Pending USDT: 0';
  statStaked.textContent = 'Staked: 0 VNST';
  statEarned.textContent = 'Earned: 0 VNT';
  statReferrals.textContent = 'Referrals: 0';
  statLevel.textContent = 'Current Level: 0';
  document.getElementById('levelData').innerHTML = '';
  document.getElementById('levelUnlockStatus').innerHTML = '';
}

// Main Functions
async function refreshUI() {
  if (!account) return;
  
  try {
    const c = contract();
    if (!c) {
      console.error('Contract not initialized');
      return;
    }
    
    // Check if contract is paused
    const isPaused = await c.methods.paused().call();
    if (isPaused) {
      alert('Contract is currently paused. Please try later.');
      return;
    }

    // Get pending rewards
    let rVnt = 0, rUsdt = 0;
    try {
      const rewards = await c.methods.getPendingRewards(account).call();
      if (Array.isArray(rewards)) {
        rVnt = rewards[0] || 0;
        rUsdt = rewards[1] || 0;
      }
    } catch (e) {
      console.log("Could not fetch pending rewards", e);
    }
    
    pendingVNT.textContent = `Pending VNT: ${(rVnt / 1e18).toFixed(4)}`;
    pendingUSDT.textContent = `Pending USDT: ${(rUsdt / 1e18).toFixed(4)}`;

    // Get user stats
    let staked = 0, earned = 0, direct = 0, level = 0;
    try {
      const userInfo = await c.methods.users(account).call();
      if (userInfo) {
        staked = userInfo.totalStaked || 0;
        earned = userInfo.totalClaimed || 0;
        direct = userInfo.referralCount || 0;
      }
      
      // Calculate level based on referrals (2 per level)
      level = Math.min(Math.floor(direct / 2), 4); // Max level 4
    } catch (e) {
      console.log("Could not fetch user stats", e);
    }
    
    statStaked.textContent = `Staked: ${(staked / 1e18).toFixed(2)} VNST`;
    statEarned.textContent = `Earned: ${(earned / 1e18).toFixed(2)} VNT`;
    statReferrals.textContent = `Referrals: ${direct}`;
    statLevel.textContent = `Current Level: ${level + 1}`;

    await showLevelReferralData();
    await checkUnlockedLevels();
  } catch (err) {
    console.error("Error refreshing UI:", err);
  }
}

approveMaxBtn.addEventListener('click', async () => {
  if (!account) {
    alert('Please connect your wallet first');
    return;
  }
  
  try {
    const amount = document.getElementById('stakeAmount').value;
    if (!amount || isNaN(amount)) {
      alert('Please enter a valid amount');
      return;
    }

    // Set loading state
    approveMaxBtn.disabled = true;
    approveMaxBtn.textContent = 'Approving...';

    const amountWei = web3.utils.toWei(amount, 'ether');
    const t = vnstTokenContract();
    if (!t) {
      throw new Error('Token contract not initialized');
    }

    // Estimate gas first
    const gasEstimate = await t.methods.approve(stakingContractAddress, amountWei)
      .estimateGas({ from: account });

    const tx = await t.methods.approve(stakingContractAddress, amountWei)
      .send({ 
        from: account,
        gas: Math.floor(gasEstimate * 1.2) // Add 20% buffer
      });
    
    console.log("Approval successful:", tx);
    alert(`Successfully approved ${amount} VNST for staking!`);
    
    // Enable stake button after approval
    stakeBtn.disabled = false;
  } catch (err) {
    console.error("Approval failed:", err);
    
    let errorMessage = 'Approval failed: ';
    if (err.code === 4001) {
      errorMessage = 'Transaction was rejected by user';
    } else if (err.message.includes('revert')) {
      errorMessage += 'Contract rejected the transaction';
    } else {
      errorMessage += (err.message || 'Unknown error');
    }
    
    alert(errorMessage);
  } finally {
    // Reset button state
    approveMaxBtn.disabled = false;
    approveMaxBtn.textContent = 'Approve VNST';
  }
});

stakeBtn.addEventListener('click', async () => {
  if (!account) {
    alert('Please connect your wallet first');
    return;
  }
  
  try {
    const amount = document.getElementById('stakeAmount').value;
    const referralInput = document.getElementById('referralAddress').value.trim();

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert('Please enter a valid amount to stake');
      return;
    }
    
    if (Number(amount) > maxStakeLimit) {
      alert(`Maximum stake amount is ${maxStakeLimit} VNST`);
      return;
    }
    
    // Check referral address if provided
    if (referralInput && !web3.utils.isAddress(referralInput)) {
      alert("Please enter a valid referral address (0x...) or leave empty");
      return;
    }

    // Set loading state
    stakeBtn.disabled = true;
    stakeBtn.textContent = 'Staking...';

    const c = contract();
    if (!c) {
      throw new Error('Staking contract not initialized');
    }

    const isPaused = await c.methods.paused().call();
    if (isPaused) {
      throw new Error('Contract is currently paused');
    }

    const amountWei = web3.utils.toWei(amount, 'ether');

    // Check allowance
    const t = vnstTokenContract();
    if (!t) {
      throw new Error('Token contract not initialized');
    }

    const allowance = await t.methods.allowance(account, stakingContractAddress).call();
    if (web3.utils.toBN(allowance).lt(web3.utils.toBN(amountWei))) {
      throw new Error('Please approve VNST tokens first');
    }

    // Check balance
    const balance = await t.methods.balanceOf(account).call();
    if (web3.utils.toBN(balance).lt(web3.utils.toBN(amountWei))) {
      throw new Error('Insufficient VNST balance');
    }

    // Use default referral if none provided
    const referrer = referralInput || await c.methods.defaultReferral().call();

    // Estimate gas first
    const gasEstimate = await c.methods.stake(amountWei, referrer)
      .estimateGas({ from: account });

    const tx = await c.methods.stake(amountWei, referrer)
      .send({ 
        from: account,
        gas: Math.floor(gasEstimate * 1.2) // Add 20% buffer
      });
    
    console.log("Staking successful:", tx);
    alert('Staking successful!');
    await refreshUI();
  } catch (err) {
    console.error("Staking failed:", err);
    
    let errorMessage = 'Staking failed: ';
    if (err.code === 4001) {
      errorMessage = 'Transaction was rejected by user';
    } else if (err.message.includes('revert')) {
      errorMessage += 'Contract rejected the transaction';
      if (err.message.includes('Invalid referral')) {
        errorMessage += ' - Invalid referral address';
      } else if (err.message.includes('Amount too high')) {
        errorMessage += ` - Amount exceeds maximum stake limit of ${maxStakeLimit} VNST`;
      } else if (err.message.includes('Blacklisted')) {
        errorMessage += ' - Your address is blacklisted';
      }
    } else {
      errorMessage += (err.message || 'Unknown error');
    }
    
    alert(errorMessage);
  } finally {
    // Reset button state
    stakeBtn.disabled = false;
    stakeBtn.textContent = 'Stake';
  }
});

claimTokenBtn.addEventListener('click', async () => {
  if (!account) {
    alert('Please connect your wallet first');
    return;
  }
  
  try {
    // Set loading state
    claimTokenBtn.disabled = true;
    claimTokenBtn.textContent = 'Claiming...';

    const c = contract();
    if (!c) {
      throw new Error('Contract not initialized');
    }
    
    // Check if there are rewards to claim
    const rewards = await c.methods.getPendingRewards(account).call();
    if ((rewards[0] / 1e18) < 0.0001 && (rewards[1] / 1e18) < 0.0001) {
      throw new Error('No rewards available to claim');
    }

    // Estimate gas first
    const gasEstimate = await c.methods.claimRewards()
      .estimateGas({ from: account });

    const tx = await c.methods.claimRewards()
      .send({ 
        from: account,
        gas: Math.floor(gasEstimate * 1.2) // Add 20% buffer
      });
    
    console.log("Claim successful:", tx);
    alert('Rewards claimed successfully!');
    await refreshUI();
  } catch (err) {
    console.error("Claim failed:", err);
    
    let errorMessage = 'Claim failed: ';
    if (err.code === 4001) {
      errorMessage = 'Transaction was rejected by user';
    } else if (err.message.includes('revert')) {
      errorMessage += 'Contract rejected the transaction';
      if (err.message.includes('No rewards')) {
        errorMessage += ' - No rewards available to claim';
      } else if (err.message.includes('Too frequent')) {
        errorMessage += ' - You can only claim once per day';
      }
    } else {
      errorMessage += (err.message || 'Unknown error');
    }
    
    alert(errorMessage);
  } finally {
    // Reset button state
    claimTokenBtn.disabled = false;
    claimTokenBtn.textContent = 'Claim Rewards';
  }
});

async function showLevelReferralData() {
  const c = contract();
  if (!c) {
    console.error('Contract not initialized');
    return;
  }

  const levels = 5;
  const container = document.getElementById('levelData');
  container.innerHTML = '<div>Loading referral data...</div>';
  
  try {
    for (let level = 0; level < levels; level++) {
      try {
        // Add delay between requests to avoid rate limiting
        if (level > 0) await new Promise(resolve => setTimeout(resolve, 1000));
        
        const count = await c.methods.referralCountByLevel(account, level).call();
        const div = document.createElement('div');
        div.innerHTML = `<b>Level ${level + 1}</b>: ${count} Members`;
        container.appendChild(div);
      } catch (e) {
        console.log(`Error fetching level ${level} data`, e);
        const div = document.createElement('div');
        div.innerHTML = `<b>Level ${level + 1}</b>: Data unavailable`;
        container.appendChild(div);
      }
    }
  } catch (err) {
    console.error("Error in showLevelReferralData:", err);
    container.innerHTML = '<div style="color:red">Failed to load referral data. Please try again later.</div>';
  }
}

async function checkUnlockedLevels() {
  const c = contract();
  if (!c) {
    console.error('Contract not initialized');
    return;
  }

  const unlockDiv = document.getElementById('levelUnlockStatus');
  unlockDiv.innerHTML = '';

  try {
    // Get user's total referral count
    const userInfo = await c.methods.users(account).call();
    const direct = userInfo.referralCount || 0;
    
    // Check each level (2 referrals needed per level)
    for (let i = 0; i < 5; i++) {
      const required = (i + 1) * 2; // 2,4,6,8,10 referrals needed
      const isUnlocked = direct >= required;
      const div = document.createElement('div');
      div.innerHTML = `Level ${i + 1}: ${isUnlocked ? '✅ Unlocked' : '🔒 Locked (Need ' + required + ' referrals)'}`;
      unlockDiv.appendChild(div);
    }
  } catch (e) {
    console.log("Error checking unlocked levels", e);
    unlockDiv.innerHTML = '<div style="color:red">Failed to load level status</div>';
  }
}

// Auto refresh every 30 seconds
setInterval(() => {
  if (account) {
    refreshUI();
  }
}, 30000);

// Animate cards on load
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, 200 * index);
  });
});
