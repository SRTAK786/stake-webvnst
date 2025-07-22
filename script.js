// Contract ABIs and Addresses (REPLACE THESE WITH YOUR ACTUAL VALUES)
const vnstTokenABI = [{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FeeCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"TransferFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"VNSTPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnstAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"VNSTPurchased","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BLACKLIST_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"buyVNST","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"getUSDTRequiredForVNST","outputs":[{"internalType":"uint256","name":"usdtRequired","type":"uint256"},{"internalType":"uint256","name":"usdtAllowance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"roles","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setTransferFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setVNSTPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPriceInUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const vnstTokenAddress = "0x37c401DdBC8030c63BF3B3b2816Ba379BfD10474"; // PASTE YOUR VNST TOKEN ADDRESS
const stakingABI = [{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_vnstAutoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"paused","type":"bool"}],"name":"ContractPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[5]","name":"newPercents","type":"uint256[5]"}],"name":"DirectRewardPercentsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LevelDepositUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"}],"name":"LevelUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newLimit","type":"uint256"}],"name":"MaxManualStakeLimitUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minVNT","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minUSDT","type":"uint256"}],"name":"MinWithdrawAmountsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"MinWithdrawToggled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalUsers","type":"uint256"}],"name":"NewUserJoined","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"PercentageCheckFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vntAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPercentage","type":"uint256"}],"name":"RewardPercentageChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[5]","name":"newPercents","type":"uint256[5]"}],"name":"RoiRewardPercentsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalStaked","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"activeStake","type":"uint256"}],"name":"StakeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalTeamStake","type":"uint256"}],"name":"TeamStakeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalWithdrawn","type":"uint256"}],"name":"VNTWithdrawn","type":"event"},{"inputs":[],"name":"DAYS_IN_YEAR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"checkLevel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"claimRewardsBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"countedAsValidReferral","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"curUserLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"directRewardPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractStats","outputs":[{"internalType":"uint256","name":"usersCount","type":"uint256"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"activeStake","type":"uint256"},{"internalType":"uint256","name":"vntWithdrawn","type":"uint256"},{"internalType":"uint256","name":"txCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getLevelDetails","outputs":[{"internalType":"uint256","name":"currentLevel","type":"uint256"},{"internalType":"uint256[]","name":"levelDeposits","type":"uint256[]"},{"internalType":"bool[]","name":"levelsAchieved","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinWithdrawInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"vntRewards","type":"uint256"},{"internalType":"uint256","name":"usdtRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getReferralEarnings","outputs":[{"internalType":"uint256","name":"totalReferralRewards","type":"uint256"},{"internalType":"uint256","name":"totalTeamDeposits","type":"uint256"},{"internalType":"uint256","name":"referralCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_stakeIndex","type":"uint256"}],"name":"getStakeDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getStakeHistory","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"startDays","type":"uint256[]"},{"internalType":"bool[]","name":"isActive","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"getTeamUsers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalReferralEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalTeamStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserStakeDetails","outputs":[{"internalType":"uint256","name":"manualStake","type":"uint256"},{"internalType":"uint256","name":"autoStake","type":"uint256"},{"internalType":"uint256","name":"totalStake","type":"uint256"},{"internalType":"uint256","name":"remainingManualLimit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStakesCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getValidReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getWithdrawHistory","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"timestamps","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"isLevelUnlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxManualStakePerUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxRewardPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minUSDTWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minVNTWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralCountByLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roiOfRoiPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[5]","name":"newPercents","type":"uint256[5]"}],"name":"setDirectRewardPercents","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newLimit","type":"uint256"}],"name":"setMaxManualStakeLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minVNT","type":"uint256"},{"internalType":"uint256","name":"_minUSDT","type":"uint256"}],"name":"setMinWithdrawAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPercentage","type":"uint256"}],"name":"setRewardPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[5]","name":"newPercents","type":"uint256[5]"}],"name":"setRoiOfRoiPercents","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"},{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setStakeLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vnstPrice","type":"uint256"},{"internalType":"uint256","name":"_vntPrice","type":"uint256"}],"name":"setTokenPrices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_vnstAutoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setWalletAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"teamUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"toggleMinWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalActiveStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedInContract","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakingTransactions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalVNTWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"useMinWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"userLevelDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userStakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startDay","type":"uint256"},{"internalType":"uint256","name":"lastClaimDay","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"totalManualStaked","type":"uint256"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalClaimed","type":"uint256"},{"internalType":"uint256","name":"lastClaimTimestamp","type":"uint256"},{"internalType":"uint256","name":"referralCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"validDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstAutoStakeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstStakingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntRewardPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdrawHistory","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isCompleted","type":"bool"}],"stateMutability":"view","type":"function"}];
const stakingAddress = "0x93a21c975C49cD81dc76fF920A682C900Ed5208e"; // PASTE YOUR STAKING CONTRACT ADDRESS

// DOM Elements
const connectWalletBtn = document.getElementById('connectWalletBtn');
const walletModal = document.getElementById('walletModal');
const closeModal = document.querySelector('.close-modal');
const metamaskBtn = document.getElementById('metamaskBtn');
const walletConnectBtn = document.getElementById('walletConnectBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

// Global Variables
let web3;
let vnstTokenContract;
let stakingContract;
let accounts = [];
let isConnected = false;

// Initialize the application
window.addEventListener('DOMContentLoaded', async () => {
    console.log("Initializing Web3...");
    console.log("Window.ethereum available:", !!window.ethereum);
    
    // Initialize Web3
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Check connection
            accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                isConnected = true;
                updateWalletButton();
                initContracts();
                await updateUI();
            }
            
            // Listen for account changes
            window.ethereum.on('accountsChanged', (newAccounts) => {
                accounts = newAccounts;
                isConnected = accounts.length > 0;
                updateWalletButton();
                if (isConnected) updateUI();
            });
            
            // Listen for chain changes
            window.ethereum.on('chainChanged', () => {
                window.location.reload();
            });
            
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
    
    const approveMaxBtn = document.getElementById('approveMaxBtn');
    const stakeBtn = document.getElementById('stakeBtn');
    const claimTokenBtn = document.getElementById('claimTokenBtn');
    const copyReferralBtn = document.getElementById('copyReferralBtn');
    const claimBatchBtn = document.getElementById('claimBatchBtn');

    // Stake page specific event listeners
    if (window.location.pathname.includes('stake.html')) {
        if (approveMaxBtn) approveMaxBtn.addEventListener('click', approveMax);
        if (stakeBtn) stakeBtn.addEventListener('click', stakeTokens);
        if (claimTokenBtn) claimTokenBtn.addEventListener('click', claimRewards);
        if (copyReferralBtn) copyReferralBtn.addEventListener('click', copyReferralLink);
        if (claimBatchBtn) claimBatchBtn.addEventListener('click', claimRewardsBatch);
    }
    
    animateCardsOnScroll();
});

// Initialize contracts
function initContracts() {
    try {
        vnstTokenContract = new web3.eth.Contract(vnstTokenABI, vnstTokenAddress);
        stakingContract = new web3.eth.Contract(stakingABI, stakingAddress);
        console.log("Contracts initialized successfully");
    } catch (error) {
        console.error("Error initializing contracts:", error);
    }
}

async function updateHomeStats() {
    try {
        const stats = await stakingContract.methods.getContractStats().call();
        document.getElementById('totalUsers').textContent = stats.usersCount;
        document.getElementById('totalStakedInContract').textContent = 
            web3.utils.fromWei(stats.totalStaked, 'ether') + ' VNST';
        document.getElementById('totalVNTWithdrawn').textContent = 
            web3.utils.fromWei(stats.vntWithdrawn, 'ether') + ' VNT';
    } catch (error) {
        console.error("Failed to update home stats:", error);
    }
}

async function updateContractStats() {
  if (!isConnected) return;
  
  try {
    const statsContainer = document.getElementById('contractStats');
    if (!statsContainer) return;

    // Get contract stats
    const stats = await stakingContract.methods.getContractStats().call();
    
    statsContainer.innerHTML = `
      <div class="stat-item">
        <span class="stat-label">Total Users:</span>
        <span class="stat-value">${stats.usersCount}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Total Staked:</span>
        <span class="stat-value">${web3.utils.fromWei(stats.totalStaked, 'ether')} VNST</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Active Stake:</span>
        <span class="stat-value">${web3.utils.fromWei(stats.activeStake, 'ether')} VNST</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">VNT Withdrawn:</span>
        <span class="stat-value">${web3.utils.fromWei(stats.vntWithdrawn, 'ether')} VNT</span>
      </div>
    `;
  } catch (error) {
    console.error("Error fetching contract stats:", error);
  }
}

// Wallet functions
function toggleWalletModal() {
    walletModal.style.display = walletModal.style.display === 'block' ? 'none' : 'block';
}

function toggleMobileMenu() {
    navMenu.classList.toggle('show');
}

async function connectMetaMask() {
    try {
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Connected account:", accounts[0]);
        
        isConnected = true;
        updateWalletButton();
        initContracts();
        await updateUI();
        
        toggleWalletModal();
    } catch (error) {
        console.error("Connection failed:", error);
        alert("Connection failed: " + error.message);
    }
}

async function connectWalletConnect() {
    alert("WalletConnect integration would go here in a full implementation");
    toggleWalletModal();
}

function updateWalletButton() {
    if (isConnected && accounts[0]) {
        const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
        connectWalletBtn.textContent = shortAddress;
        connectWalletBtn.classList.add('connected');
    } else {
        connectWalletBtn.textContent = 'Connect Wallet';
        connectWalletBtn.classList.remove('connected');
    }
}

// Staking functions
async function approveMax() {
    if (!isConnected) return alert("Please connect your wallet first");
    
    try {
        const maxAmount = web3.utils.toWei('10000', 'ether');
        const result = await vnstTokenContract.methods.approve(stakingAddress, maxAmount)
            .send({ from: accounts[0] });
        console.log("Approval successful:", result);
        alert("Approval successful! You can now stake VNST tokens.");
    } catch (error) {
        console.error("Approval failed:", error);
        alert("Approval failed: " + error.message);
    }
}

async function calculateROI(amount, durationDays) {
  if (!isConnected) return null;
  
  try {
    const amountWei = web3.utils.toWei(amount.toString(), 'ether');
    const rewards = await stakingContract.methods.getPendingRewards(accounts[0]).call();
    
    // Simple ROI calculation (can be enhanced)
    const dailyROI = parseFloat(web3.utils.fromWei(rewards[0], 'ether')) / 365;
    const estimatedReward = dailyROI * durationDays;
    
    return {
      principal: amount,
      duration: durationDays,
      estimatedReward: estimatedReward.toFixed(4),
      roiPercentage: ((estimatedReward / amount) * 100).toFixed(2)
    };
  } catch (error) {
    console.error("Error calculating ROI:", error);
    return null;
  }
}

async function stakeTokens() {
    if (!isConnected) return alert("Please connect your wallet first");
    
    const amount = document.getElementById('stakeAmount')?.value;
    if (!amount || amount < 100 || amount > 10000) {
        return alert("Please enter a valid amount between 100 and 10,000 VNST");
    }
    
    try {
        const amountWei = web3.utils.toWei(amount, 'ether');
        const referralAddress = document.getElementById('referralAddress')?.value || accounts[0];
        
        // Check allowance
        const allowance = await vnstTokenContract.methods.allowance(accounts[0], stakingAddress).call();
        if (parseInt(allowance) < parseInt(amountWei)) {
            return alert("Please approve the contract to spend your VNST tokens first");
        }
        
        // Execute stake
        const result = await stakingContract.methods.stake(amountWei, referralAddress)
            .send({ from: accounts[0] });
        console.log("Staking successful:", result);
        alert("Staking successful!");
        await updateUI();
    } catch (error) {
        console.error("Staking failed:", error);
        alert("Staking failed: " + error.message);
    }
}

async function claimRewards() {
    if (!isConnected) return alert("Please connect your wallet first");
    
    try {
        const result = await stakingContract.methods.claimRewards()
            .send({ from: accounts[0] });
        console.log("Rewards claimed:", result);
        alert("Rewards claimed successfully!");
        await updateUI();
    } catch (error) {
        console.error("Claim failed:", error);
        alert("Claim failed: " + error.message);
    }
}

// 1. बैच क्लेम फंक्शन
async function claimRewardsBatch() {
    if (!isConnected) return alert("कृपया पहले वॉलेट कनेक्ट करें");
    
    try {
        const stakesCount = await stakingContract.methods.getUserStakesCount(accounts[0]).call();
        if (stakesCount <= 50) {
            document.getElementById('batchStatus').textContent = "Batch क्लेम केवल 50+ स्टेक्स वालों के लिए है";
            return;
        }

        const batchSize = 50;
        let processed = 0;
        document.getElementById('claimBatchBtn').disabled = true;
        document.getElementById('batchStatus').textContent = "प्रोसेसिंग...";

        for (let i = 0; i < stakesCount; i += batchSize) {
            const endIndex = Math.min(i + batchSize, stakesCount);
            await stakingContract.methods.claimRewardsBatch(i, endIndex)
                .send({ from: accounts[0] });
            processed += (endIndex - i);
            document.getElementById('batchStatus').textContent = 
                `प्रोसेस्ड: ${processed}/${stakesCount} स्टेक्स...`;
        }

        alert("सभी रिवार्ड्स क्लेम हो गए!");
        await updateUI();
    } catch (error) {
        console.error("Batch क्लेम फेल:", error);
        alert(`एरर: ${error.message}`);
    } finally {
        document.getElementById('claimBatchBtn').disabled = false;
        document.getElementById('batchStatus').textContent = "";
    }
}

async function updateTeamStats() {
  if (!isConnected || !accounts[0]) return;
  
  try {
    const teamContainer = document.getElementById('teamLevelsContainer');
    if (!teamContainer) return;

    teamContainer.innerHTML = ''; // Clear previous data
    
    for (let level = 1; level <= 5; level++) {
      // Get team members for this level
      const members = await stakingContract.methods.getTeamUsers(accounts[0], level-1).call();
      
      // Calculate total stake for this level
      let levelStake = 0;
      for (const member of members) {
        const stake = await stakingContract.methods.getTotalStaked(member).call();
        levelStake += parseInt(stake);
      } 

      // Create level card HTML
      const levelCard = `
        <div class="level-card">
          <h4>Level ${level}</h4>
          <div class="level-stats">
            <p><span class="stat-label">Members:</span> <span class="stat-value">${members.length}</span></p>
            <p><span class="stat-label">Total Stake:</span> <span class="stat-value">${web3.utils.fromWei(levelStake.toString(), 'ether')} VNST</span></p>
          </div>
        </div>
      `;
      
      teamContainer.innerHTML += levelCard;
    }
  } catch (error) {
    console.error("Error fetching team stats:", error);
  }
}

async function showWithdrawHistory() {
  if (!isConnected || !accounts[0]) return;
  
  try {
    const historyContainer = document.getElementById('withdrawHistory');
    if (!historyContainer) return;

    const history = await stakingContract.methods.getWithdrawHistory(accounts[0]).call();
    
    if (history.amounts.length === 0) {
      historyContainer.innerHTML = '<p>No withdrawal history found</p>';
      return;
    }
    
    let historyHTML = '<div class="history-header"><span>Amount</span><span>Date</span></div>';
    
    for (let i = 0; i < history.amounts.length; i++) {
      const date = new Date(history.timestamps[i] * 1000);
      historyHTML += `
        <div class="history-item">
          <span>${web3.utils.fromWei(history.amounts[i], 'ether')} VNT</span>
          <span>${date.toLocaleDateString()}</span>
        </div>
      `;
    }
    
    historyContainer.innerHTML = historyHTML;
  } catch (error) {
    console.error("Error fetching withdraw history:", error);
  }
}

// UI functions
async function updateUI() {
    if (!isConnected || !accounts[0] || !stakingContract) {
        console.log("UI update skipped - not connected");
        return;
    }

    try {
        console.log("Updating UI...");
        
        // 1. Update wallet balance
        if (document.getElementById('walletBalance')) {
            const balance = await vnstTokenContract.methods.balanceOf(accounts[0]).call();
            document.getElementById('walletBalance').textContent = 
                web3.utils.fromWei(balance, 'ether') + ' VNST';
        }
        
        // 2. Update staking info
        if (document.getElementById('yourStaked')) {
            const user = await stakingContract.methods.users(accounts[0]).call();
            const stakedAmount = user.totalStaked || '0';
            document.getElementById('yourStaked').textContent = 
                web3.utils.fromWei(stakedAmount, 'ether') + ' VNST';
        }
        
        // 3. Update rewards
        if (document.getElementById('yourRewards')) {
            try {
                const rewards = await stakingContract.methods.getPendingRewards(accounts[0]).call();
                console.log("Raw rewards data:", rewards);
                
                let vntRewards = '0', usdtRewards = '0';
                if (Array.isArray(rewards)) {
                    vntRewards = web3.utils.fromWei(rewards[0] || '0', 'ether');
                    usdtRewards = web3.utils.fromWei(rewards[1] || '0', 'ether');
                }
                document.getElementById('yourRewards').textContent = 
                    `${vntRewards} VNT + ${usdtRewards} USDT`;
            } catch (error) {
                console.error("Error fetching rewards:", error);
                document.getElementById('yourRewards').textContent = "0 VNT + 0 USDT";
            }
        }

        if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            await updateHomeStats();
        }

        await updateContractStats();

        await updateTeamStats();
        
        // 4. Update referral link
        if (document.getElementById('referralLink')) {
            document.getElementById('referralLink').value = 
                `${window.location.origin}/stake.html?ref=${accounts[0]}`;
        } 
        
        // 5. Update stakes list
        if (document.getElementById('stakesList')) {
            try {
                const stakesCount = await stakingContract.methods.getUserStakesCount(accounts[0]).call();
                const stakesList = document.getElementById('stakesList');
                stakesList.innerHTML = '';
        
                if (stakesCount > 0) {
                    const summaryCard = document.createElement('div');
                    summaryCard.className = 'stake-summary';
            
                    let totalStaked = 0;
                    const activeStakes = [];
            
                    for (let i = 0; i < stakesCount; i++) {
                        const stake = await stakingContract.methods.userStakes(accounts[0], i).call();
                        if (stake.isActive) {
                            totalStaked += parseFloat(web3.utils.fromWei(stake.amount, 'ether'));
                            activeStakes.push(stake);
                        }
                    }
            
                    summaryCard.innerHTML = `
                        <p><strong>Total Staked:</strong> ${totalStaked.toFixed(2)} VNST</p>
                        <p><strong>Active Stakes:</strong> ${activeStakes.length}</p>
                        <div class="see-more">See More Details</div>
            `        ;
            
                    const detailsCard = document.createElement('div');
                    detailsCard.className = 'stake-details';
            
                    activeStakes.forEach((stake, index) => {
                        detailsCard.innerHTML += `
                            <div class="stake-item">
                                <p><strong>Stake #${index+1}:</strong> ${web3.utils.fromWei(stake.amount, 'ether')} VNST</p>
                                <p>Days staked: ${stake.daysStaked || 0}/365</p>
                            </div>
                `       ;
                    });
            
                    stakesList.appendChild(summaryCard);
                    stakesList.appendChild(detailsCard);
            
                    const seeMoreBtn = summaryCard.querySelector('.see-more');
                    seeMoreBtn.addEventListener('click', () => {
                        detailsCard.classList.toggle('active');
                        seeMoreBtn.textContent = detailsCard.classList.contains('active') ? 
                            'Show Less' : 'See More Details';
                    });
            
                } else {
                    stakesList.innerHTML = '<p>No active stakes found</p>';
                }
            } catch (error) {
                console.error("Error loading stakes:", error);
                stakesList.innerHTML = '<p>Error loading stake details</p>';
            }
        }

        if (document.getElementById('claimBatchBtn')) {
        const stakesCount = await stakingContract.methods.getUserStakesCount(accounts[0]).call();
        document.getElementById('claimBatchBtn').disabled = stakesCount <= 50;
    }

    await showWithdrawHistory();

    if (window.location.pathname.includes('team.html')) {
            await updateTeamPage();
        }

        console.log("UI updated successfully");
    } catch (error) {
        console.error("UI update failed:", error);
    }
}

// Utility functions
function copyReferralLink() {
    const referralLinkInput = document.getElementById('referralLink');
    if (!referralLinkInput) return;
    
    referralLinkInput.select();
    document.execCommand('copy');
    alert("Referral link copied to clipboard!");
}

async function updateTeamPage() {
    if (!isConnected || !accounts[0]) return;

    try {
        // 1. बेसिक डेटा एक साथ फेच करें (ऑप्टिमाइज्ड)
        const [userLevel, referralEarnings, directRewards, rewards] = await Promise.all([
            stakingContract.methods.getUserLevel(accounts[0]).call(),
            stakingContract.methods.getReferralEarnings(accounts[0]).call(),
            stakingContract.methods.getTotalReferralEarnings(accounts[0]).call(),
            stakingContract.methods.getPendingRewards(accounts[0]).call()
        ]);

        // 2. बेसिक इन्फो अपडेट करें
        document.getElementById('userLevel').textContent = userLevel;
        document.getElementById('totalTeamMembers').textContent = referralEarnings.referralCount;
        document.getElementById('totalTeamStake').textContent = web3.utils.fromWei(referralEarnings.totalTeamDeposits, 'ether') + ' VNST';
        document.getElementById('totalReferrals').textContent = referralEarnings.referralCount;
        document.getElementById('directIncome').textContent = web3.utils.fromWei(directRewards, 'ether') + ' USDT';
        document.getElementById('roiIncome').textContent = web3.utils.fromWei(rewards[1], 'ether') + ' USDT';

        // 3. सभी लेवल्स के लिए डेटा प्रोसेस करें
        const levelUpdates = [];
        for (let level = 1; level <= 5; level++) {
            levelUpdates.push(updateLevelData(level));
        }
        await Promise.all(levelUpdates);

    } catch (error) {
        console.error("Team page update error:", error);
        // एरर को यूजर को दिखाएं (वैकल्पिक)
        alert("Team data could not be loaded. Please try again later.");
    }
}

async function updateLevelData(level) {
    try {
        const levelCard = document.querySelector(`#level${level}Count`).closest('.team-card');
        if (!levelCard) return;

        // 1. मेंबर्स और उनका स्टेक डेटा फेच करें
        const members = await stakingContract.methods.getTeamUsers(accounts[0], level-1).call();
        let levelStake = 0;
        let membersHtml = '';

        // 2. प्रत्येक मेंबर का डेटा प्रोसेस करें
        const memberPromises = members.map(async (member) => {
            const stake = await stakingContract.methods.getTotalStaked(member).call();
            levelStake += parseInt(stake);
            return `
                <div class="member-item">
                    <span>${member.substring(0,6)}...${member.substring(38)}</span>
                    <span>${web3.utils.fromWei(stake, 'ether')} VNST</span>
                </div>
            `;
        });

        membersHtml = (await Promise.all(memberPromises)).join('');

        // 3. UI अपडेट करें
        const existingDetails = levelCard.querySelector('.level-details-container');
        if (existingDetails) {
            existingDetails.remove();
        }

        const detailsHtml = `
            <div class="level-details-container">
                <div class="level-details-toggle">Show Members</div>
                <div class="level-members-list">
                    ${membersHtml}
                    <div class="member-item total-item">
                        <span>Total Level ${level} Stake:</span>
                        <span>${web3.utils.fromWei(levelStake.toString(), 'ether')} VNST</span>
                    </div>
                </div>
            </div>
        `;

        levelCard.insertAdjacentHTML('beforeend', detailsHtml);

        // 4. Level 1 के लिए विशेष हैंडलिंग
        if (level === 1) {
            const statusElement = levelCard.querySelector('.status');
            if (statusElement) {
                statusElement.textContent = members.length > 0 ? 'Unlocked' : 'Locked';
                statusElement.className = `status ${members.length > 0 ? 'status-unlocked' : 'status-locked'}`;
            }
        }

        // 5. टॉगल फंक्शनैलिटी जोड़ें
        levelCard.querySelector('.level-details-toggle').addEventListener('click', (e) => {
            const list = e.target.nextElementSibling;
            list.classList.toggle('active');
            e.target.textContent = list.classList.contains('active') ? 'Hide Members' : 'Show Members';
        });

        // 6. काउंट और स्टेक अपडेट करें
        levelCard.querySelector('#level${level}Count').textContent = members.length;
        levelCard.querySelector('#level${level}Stake').textContent = 
            web3.utils.fromWei(levelStake.toString(), 'ether') + ' VNST';

    } catch (error) {
        console.error(`Error updating level ${level} data:`, error);
    }
}

async function updateTeamLevels() {
    const levelUpdates = [];
    for (let level = 1; level <= 5; level++) {
        levelUpdates.push(updateSingleLevel(level));
    }
    await Promise.all(levelUpdates);
}

async function updateSingleLevel(level) {
    const [levelData, isUnlocked] = await Promise.all([
        getLevelWiseData(level),
        stakingContract.methods.isLevelUnlocked(accounts[0], level).call()
    ]);
    
    document.getElementById(`level${level}Count`).textContent = levelData ? levelData.members.length : 0;
    document.getElementById(`level${level}Stake`).textContent = levelData ? web3.utils.fromWei(levelData.totalStake.toString(), 'ether') + ' VNST' : '0 VNST';
    document.getElementById(`level${level}Status`).textContent = isUnlocked ? 'Unlocked' : 'Locked';
    document.getElementById(`level${level}Status`).className = isUnlocked ? 'status-unlocked' : 'status-locked';
}

async function getLevelWiseData(level) {
  if (!isConnected || !accounts[0]) return null;
  
  try {
    const data = {
      members: await stakingContract.methods.getTeamUsers(accounts[0], level-1).call(),
      totalStake: 0,
      details: []
    };
    
    // Calculate stake for each member
    for (const member of data.members) {
      const stake = await stakingContract.methods.getTotalStaked(member).call();
      data.totalStake += parseInt(stake);
      data.details.push({
        address: member,
        stake: web3.utils.fromWei(stake, 'ether')
      });
    }
    
    return data;
  } catch (error) {
    console.error(`Error getting level ${level} data:`, error);
    return null;
  }
}

function setupStakingPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    const referralAddressInput = document.getElementById('referralAddress');
    
    if (ref && referralAddressInput && !referralAddressInput.value) {
        referralAddressInput.value = ref;
    }
}

async function getStakeDetails(stakeIndex) {
  if (!isConnected || !accounts[0]) return null;
  
  try {
    const stake = await stakingContract.methods.userStakes(accounts[0], stakeIndex).call();
    const currentDay = Math.floor(Date.now() / 1000 / 86400);
    const daysStaked = currentDay - stake.startDay;
    
    return {
      amount: web3.utils.fromWei(stake.amount, 'ether'),
      startDay: stake.startDay,
      daysStaked: daysStaked > 365 ? 365 : daysStaked,
      isActive: stake.isActive,
      lastClaimDay: stake.lastClaimDay
    };
  } catch (error) {
    console.error("Error getting stake details:", error);
    return null;
  }
}

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
