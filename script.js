// Contract ABIs and Addresses (Replace these with your actual details)
// 1. VNST Token Contract (ERC20) - यहाँ आपका VNST टोकन कॉन्ट्रैक्ट ABI आएगा
const vnstTokenABI = [{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FeeCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"TransferFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"VNSTPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnstAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"VNSTPurchased","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BLACKLIST_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"buyVNST","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"getUSDTRequiredForVNST","outputs":[{"internalType":"uint256","name":"usdtRequired","type":"uint256"},{"internalType":"uint256","name":"usdtAllowance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"roles","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setTransferFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setVNSTPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPriceInUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const vnstTokenAddress = "0x37c401DdBC8030c63BF3B3b2816Ba379BfD10474"; // VNST टोकन का एड्रेस

// 2. Staking Contract
const stakingABI = [{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_vnstAutoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"paused","type":"bool"}],"name":"ContractPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LevelDepositUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vntAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Staked","type":"event"},{"inputs":[],"name":"DAYS_IN_YEAR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"claimRewardsBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"defaultReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"directRewardPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"vntRewards","type":"uint256"},{"internalType":"uint256","name":"usdtRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStakesCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralCountByLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roiOfRoiPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"},{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setStakeLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vnstPrice","type":"uint256"},{"internalType":"uint256","name":"_vntPrice","type":"uint256"}],"name":"setTokenPrices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_vnstAutoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setWalletAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userStakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startDay","type":"uint256"},{"internalType":"uint256","name":"lastClaimDay","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalClaimed","type":"uint256"},{"internalType":"uint256","name":"lastClaimTimestamp","type":"uint256"},{"internalType":"uint256","name":"referralCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstAutoStakeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstStakingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const stakingAddress = "0x71b66122f901c10670C818911b45B054Bcbc2e6F"; // स्टेकिंग कॉन्ट्रैक्ट एड्रेस

// DOM Elements
const connectWalletBtn = document.getElementById('connectWalletBtn');
const walletModal = document.getElementById('walletModal');
const closeModal = document.querySelector('.close-modal');
const metamaskBtn = document.getElementById('metamaskBtn');
const walletConnectBtn = document.getElementById('walletConnectBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

// Staking Page Elements
const stakeAmountInput = document.getElementById('stakeAmount');
const referralAddressInput = document.getElementById('referralAddress');
const approveMaxBtn = document.getElementById('approveMaxBtn');
const stakeBtn = document.getElementById('stakeBtn');
const claimTokenBtn = document.getElementById('claimTokenBtn');
const referralLinkInput = document.getElementById('referralLink');
const copyReferralBtn = document.getElementById('copyReferralBtn');

// Global Variables
let web3;
let vnstTokenContract;
let stakingContract;
let accounts = [];
let isConnected = false;

// Initialize the application
window.addEventListener('DOMContentLoaded', async () => {
    // Initialize Web3
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                isConnected = true;
                updateWalletButton();
                initContracts();
                updateUI();
            }
        } catch (error) {
            console.error("Error connecting to wallet:", error);
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        console.log('Non-Ethereum browser detected. Consider installing MetaMask!');
    }

    // Event Listeners
    connectWalletBtn.addEventListener('click', toggleWalletModal);
    closeModal.addEventListener('click', toggleWalletModal);
    metamaskBtn.addEventListener('click', connectMetaMask);
    walletConnectBtn.addEventListener('click', connectWalletConnect);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Staking Page Listeners
    if (approveMaxBtn) approveMaxBtn.addEventListener('click', approveMax);
    if (stakeBtn) stakeBtn.addEventListener('click', stakeTokens);
    if (claimTokenBtn) claimTokenBtn.addEventListener('click', claimRewards);
    if (copyReferralBtn) copyReferralBtn.addEventListener('click', copyReferralLink);
    
    // Check if we're on the staking page
    if (window.location.pathname.includes('stake.html')) {
        setupStakingPage();
    }
    
    // Animate cards on scroll
    animateCardsOnScroll();
});

// Initialize contracts
function initContracts() {
    vnstTokenContract = new web3.eth.Contract(vnstTokenABI, vnstTokenAddress);
    stakingContract = new web3.eth.Contract(stakingABI, stakingAddress);
}

// Update wallet button text
function updateWalletButton() {
    if (isConnected) {
        const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
        connectWalletBtn.textContent = shortAddress;
        connectWalletBtn.classList.add('connected');
        
        // Update referral link if on staking page
        if (referralLinkInput) {
            referralLinkInput.value = `${window.location.origin}/stake.html?ref=${accounts[0]}`;
        }
    } else {
        connectWalletBtn.textContent = 'Connect Wallet';
        connectWalletBtn.classList.remove('connected');
    }
}

// Toggle wallet modal
function toggleWalletModal() {
    walletModal.style.display = walletModal.style.display === 'block' ? 'none' : 'block';
}

// Toggle mobile menu
function toggleMobileMenu() {
    navMenu.classList.toggle('show');
}

// Connect MetaMask
async function connectMetaMask() {
    try {
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        isConnected = true;
        updateWalletButton();
        initContracts();
        updateUI();
        toggleWalletModal();
    } catch (error) {
        console.error("Error connecting to MetaMask:", error);
    }
}

// Connect WalletConnect (simplified)
async function connectWalletConnect() {
    alert("WalletConnect integration would go here in a full implementation");
    toggleWalletModal();
}

// Approve max VNST for staking
async function approveMax() {
    if (!isConnected) {
        alert("Please connect your wallet first");
        return;
    }
    
    try {
        const maxAmount = web3.utils.toWei('10000', 'ether'); // Approve max stake amount
        // VNST टोकन कॉन्ट्रैक्ट से approve करें
        const result = await vnstTokenContract.methods.approve(stakingAddress, maxAmount)
            .send({ from: accounts[0] });
        
        console.log("Approval successful:", result);
        alert("Approval successful! You can now stake VNST tokens.");
    } catch (error) {
        console.error("Approval failed:", error);
        alert("Approval failed: " + error.message);
    }
}

// Stake VNST tokens
async function stakeTokens() {
    if (!isConnected) {
        alert("Please connect your wallet first");
        return;
    }
    
    const amount = stakeAmountInput.value;
    if (!amount || amount < 100 || amount > 10000) {
        alert("Please enter a valid amount between 100 and 10,000 VNST");
        return;
    }
    
    const referralAddress = referralAddressInput.value || accounts[0]; // Default to self if no referral
    
    try {
        // First check allowance from VNST token contract
        const allowance = await vnstTokenContract.methods.allowance(accounts[0], stakingAddress).call();
        const amountWei = web3.utils.toWei(amount.toString(), 'ether');
        
        if (parseInt(allowance) < parseInt(amountWei)) {
            alert("Please approve the contract to spend your VNST tokens first");
            return;
        }
        
        // Then stake using staking contract
        const result = await stakingContract.methods.stake(amountWei, referralAddress)
            .send({ from: accounts[0] });
        
        console.log("Staking successful:", result);
        alert("Staking successful!");
        updateUI();
    } catch (error) {
        console.error("Staking failed:", error);
        alert("Staking failed: " + error.message);
    }
}

// Claim rewards
async function claimRewards() {
    if (!isConnected) {
        alert("Please connect your wallet first");
        return;
    }
    
    try {
        const result = await stakingContract.methods.claimRewards()
            .send({ from: accounts[0] });
        
        console.log("Rewards claimed:", result);
        alert("Rewards claimed successfully!");
        updateUI();
    } catch (error) {
        console.error("Claim failed:", error);
        alert("Claim failed: " + error.message);
    }
}

// Copy referral link
function copyReferralLink() {
    referralLinkInput.select();
    document.execCommand('copy');
    alert("Referral link copied to clipboard!");
}

// Update UI with contract data
async function updateUI() {
    if (!isConnected || !stakingContract) return;
    
    try {
        // Get user stakes
        if (document.getElementById('stakesList')) {
            const stakesCount = await stakingContract.methods.getUserStakesCount(accounts[0]).call();
            const stakesList = document.getElementById('stakesList');
            stakesList.innerHTML = '';
            
            if (stakesCount > 0) {
                for (let i = 0; i < stakesCount; i++) {
                    const stake = await stakingContract.methods.userStakes(accounts[0], i).call();
                    if (stake.isActive) {
                        const stakeElement = document.createElement('div');
                        stakeElement.className = 'stake-item';
                        stakeElement.innerHTML = `
                            <p><strong>Stake #${i+1}:</strong> ${web3.utils.fromWei(stake.amount, 'ether')} VNST</p>
                            <p>Days staked: ${stake.daysStaked || 0}/365</p>
                        `;
                        stakesList.appendChild(stakeElement);
                    }
                }
            } else {
                stakesList.innerHTML = '<p>No active stakes found</p>';
            }
        }
        
        // Get pending rewards
        if (document.getElementById('yourRewards')) {
            const [vntRewards, usdtRewards] = await stakingContract.methods.getPendingRewards(accounts[0]).call();
            document.getElementById('yourRewards').textContent = 
                `${web3.utils.fromWei(vntRewards, 'ether')} VNT + ${web3.utils.fromWei(usdtRewards, 'ether')} USDT`;
        }
        
        // Get total staked
        if (document.getElementById('yourStaked')) {
            const user = await stakingContract.methods.users(accounts[0]).call();
            document.getElementById('yourStaked').textContent = `${web3.utils.fromWei(user.totalStaked, 'ether')} VNST`;
        }
        
        // Get total staked across all users
        if (document.getElementById('totalStaked')) {
            // Note: You would need a function in your contract to get total staked
            // This is just a placeholder
            document.getElementById('totalStaked').textContent = "Loading...";
        }
        
    } catch (error) {
        console.error("Error updating UI:", error);
    }
}

// Setup staking page
function setupStakingPage() {
    // Check for referral parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    if (ref && !referralAddressInput.value) {
        referralAddressInput.value = ref;
    }
}

// Animate cards when they come into view
function animateCardsOnScroll() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
}

// Handle account changes
if (window.ethereum) {
    window.ethereum.on('accountsChanged', (newAccounts) => {
        accounts = newAccounts;
        if (accounts.length > 0) {
            isConnected = true;
            updateWalletButton();
            updateUI();
        } else {
            isConnected = false;
            updateWalletButton();
        }
    });
    
    window.ethereum.on('chainChanged', () => {
        window.location.reload();
    });
}
