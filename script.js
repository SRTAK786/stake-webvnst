// Contract ABIs and Addresses (REPLACE THESE WITH YOUR ACTUAL VALUES)
const vnstTokenABI = [{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FeeCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"TransferFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"VNSTPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnstAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"VNSTPurchased","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BLACKLIST_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"buyVNST","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"getUSDTRequiredForVNST","outputs":[{"internalType":"uint256","name":"usdtRequired","type":"uint256"},{"internalType":"uint256","name":"usdtAllowance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"roles","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setTransferFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setVNSTPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPriceInUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const vnstTokenAddress = "0x5C6cB004b50278c6726c3cBEDd25165c2072C46D"; // PASTE YOUR VNST TOKEN ADDRESS
const stakingABI = [{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_vnstAutoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"paused","type":"bool"}],"name":"ContractPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[5]","name":"newPercents","type":"uint256[5]"}],"name":"DirectRewardPercentsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LevelDepositUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"}],"name":"LevelUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newLimit","type":"uint256"}],"name":"MaxManualStakeLimitUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minVNT","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minUSDT","type":"uint256"}],"name":"MinWithdrawAmountsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"MinWithdrawToggled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalUsers","type":"uint256"}],"name":"NewUserJoined","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"PercentageCheckFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[5]","name":"newPercents","type":"uint256[5]"}],"name":"RoiRewardPercentsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalStaked","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"activeStake","type":"uint256"}],"name":"StakeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalTeamStake","type":"uint256"}],"name":"TeamStakeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"USDTRewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"VNTRewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalWithdrawn","type":"uint256"}],"name":"VNTWithdrawn","type":"event"},{"inputs":[],"name":"DAYS_IN_YEAR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FIXED_APY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"checkLevel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimAllRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"claimRewardsBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimUSDTRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimVNTRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"countedAsValidReferral","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"curUserLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"directRewardPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractStats","outputs":[{"internalType":"uint256","name":"usersCount","type":"uint256"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"activeStake","type":"uint256"},{"internalType":"uint256","name":"vntWithdrawn","type":"uint256"},{"internalType":"uint256","name":"txCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getLevelDetails","outputs":[{"internalType":"uint256","name":"currentLevel","type":"uint256"},{"internalType":"uint256[]","name":"levelDeposits","type":"uint256[]"},{"internalType":"bool[]","name":"levelsAchieved","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinWithdrawInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"vntRewards","type":"uint256"},{"internalType":"uint256","name":"usdtRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getReferralEarnings","outputs":[{"internalType":"uint256","name":"totalReferralRewards","type":"uint256"},{"internalType":"uint256","name":"totalTeamDeposits","type":"uint256"},{"internalType":"uint256","name":"referralCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_stakeIndex","type":"uint256"}],"name":"getStakeDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getStakeHistory","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"startDays","type":"uint256[]"},{"internalType":"bool[]","name":"isActive","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"getTeamUsers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"getTeamUsersPaginated","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalReferralEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalTeamStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"getTotalTeamStakeByLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserStakeDetails","outputs":[{"internalType":"uint256","name":"manualStake","type":"uint256"},{"internalType":"uint256","name":"autoStake","type":"uint256"},{"internalType":"uint256","name":"totalStake","type":"uint256"},{"internalType":"uint256","name":"remainingManualLimit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStakesCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getValidReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getWithdrawHistory","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"timestamps","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"isLevelUnlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxManualStakePerUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minUSDTWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minVNTWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralCountByLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roiOfRoiPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[5]","name":"newPercents","type":"uint256[5]"}],"name":"setDirectRewardPercents","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newLimit","type":"uint256"}],"name":"setMaxManualStakeLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minVNT","type":"uint256"},{"internalType":"uint256","name":"_minUSDT","type":"uint256"}],"name":"setMinWithdrawLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[5]","name":"newPercents","type":"uint256[5]"}],"name":"setRoiOfRoiPercents","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"},{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setStakeLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_vnstAutoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setWalletAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"teamUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"toggleSeparateWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalActiveStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakedInContract","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakingTransactions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalVNTWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"useSeparateMinWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"userLevelDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userStakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startDay","type":"uint256"},{"internalType":"uint256","name":"lastClaimDay","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"totalManualStaked","type":"uint256"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalClaimed","type":"uint256"},{"internalType":"uint256","name":"lastClaimTimestamp","type":"uint256"},{"internalType":"uint256","name":"referralCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"validDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstAutoStakeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstStakingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdrawHistory","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isCompleted","type":"bool"}],"stateMutability":"view","type":"function"}];
const stakingAddress = "0x7b295d0fE405595444D3dbEC62715Fd9570ae5a7"; // PASTE YOUR STAKING CONTRACT ADDRESS

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
let walletConnectProvider = null;

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

    if (!connectWalletBtn || !walletModal || !closeModal || !metamaskBtn || !walletConnectBtn) {
        console.error("Required elements not found in DOM");
        return;
    }

    if (document.getElementById('networkSwitchBtn')) {
      document.getElementById('networkSwitchBtn').addEventListener('click', async () => {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38' }] // BSC Mainnet
          });
          document.getElementById('networkIndicator').textContent = 'Mainnet';
        } catch (error) {
          console.error("Network switch failed:", error);
          showNotification("Network switch failed: " + error.message, 'error');
        }
      });
    }

    // Event Listeners
    connectWalletBtn.addEventListener('click', toggleWalletModal);
    closeModal.addEventListener('click', toggleWalletModal);
    metamaskBtn.addEventListener('click', connectMetaMask);
    walletConnectBtn.addEventListener('click', connectWalletConnect);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    const approveMaxBtn = document.getElementById('approveMaxBtn');
    const stakeBtn = document.getElementById('stakeBtn');
    const claimVNTBtn = document.getElementById('claimVNTBtn');
    const claimUSDTBtn = document.getElementById('claimUSDTBtn');
    const copyReferralBtn = document.getElementById('copyReferralBtn');
    const claimBatchBtn = document.getElementById('claimBatchBtn');

    // Stake page specific event listeners
    if (window.location.pathname.includes('stake.html')) {
        if (approveMaxBtn) approveMaxBtn.addEventListener('click', approveMax);
        if (stakeBtn) stakeBtn.addEventListener('click', stakeTokens);
        if (claimVNTBtn) claimVNTBtn.addEventListener('click', claimVNTRewards);
        if (claimUSDTBtn) claimUSDTBtn.addEventListener('click', claimUSDTRewards);
        if (copyReferralBtn) copyReferralBtn.addEventListener('click', copyReferralLink);
        if (claimBatchBtn) claimBatchBtn.addEventListener('click', claimRewardsBatch);
    }

    if (window.location.pathname.includes('stake.html')) {
      setupStakingPage();
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

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
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
    const modal = document.getElementById('walletModal');
    if (!walletModal) {
        console.error('Wallet modal not initialized');
        return;
    }
    
    // Toggle modal display
    const isVisible = walletModal.style.display === 'block';
    walletModal.style.display = isVisible ? 'none' : 'block';
    
    // Disable scroll when modal is open
    document.body.style.overflow = isVisible ? 'hidden' : '';
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

// Wallet Connect को पूरी तरह implement करने का तरीका
async function connectWalletConnect() {
    try {
        if (typeof WalletConnectProvider === 'undefined') {
            throw new Error("WalletConnect provider not loaded");
        }
        
        // Provider को इनिशियलाइज़ करें
        const provider = new WalletConnectProvider.default({
            rpc: {
                56: "https://bsc-dataseed.binance.org/", // BSC Mainnet
                97: "https://data-seed-prebsc-1-s1.binance.org:8545/" // BSC Testnet
            },
            chainId: 56, // Default to BSC Mainnet
            bridge: "https://bridge.walletconnect.org"
        });

        // 2. Connection स्थापित करें
        await provider.enable();
        
        // 3. Web3 instance create करें
        web3 = new Web3(provider);
        
        // 4. Accounts प्राप्त करें
        accounts = await web3.eth.getAccounts();
        
        // 5. Connection status अपडेट करें
        isConnected = true;
        updateWalletButton();
        initContracts();
        await updateUI();
        
        // 6. Modal बंद करें
        toggleWalletModal();
        
        // 7. सफलता सूचना दिखाएं
        showNotification(`WalletConnect से कनेक्ट हुआ: ${accounts[0].substring(0,6)}...${accounts[0].substring(38)}`);
        
        // 8. Disconnect event के लिए listener जोड़ें
        provider.on("disconnect", (code, reason) => {
            console.log(`WalletConnect disconnected: ${reason}`);
            handleDisconnect();
        });

    } catch (error) {
        console.error("WalletConnect connection failed:", error);
        showNotification(`Connection failed: ${error.message}`, 'error');
    }
}

function handleDisconnect() {
    isConnected = false;
    accounts = [];
    updateWalletButton();
    showNotification("Wallet disconnected", 'warning');
    // Additional cleanup
    if (window.walletConnectProvider) {
        window.walletConnectProvider.disconnect();
        window.walletConnectProvider = null;
    }

    showNotification("Wallet disconnected", 'warning');
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
        await displayAllRewards();
    } catch (error) {
        console.error("Staking failed:", error);
        alert("Staking failed: " + error.message);
    }
}

// केवल VNT रिवॉर्ड्स क्लेम करने के लिए
async function claimVNTRewards() {
    if (!isConnected) {
        showNotification("Please connect wallet first", "error");
        return;
    }
    
    try {
        const [minVNT] = await stakingContract.methods.getMinWithdrawInfo().call();
        const rewards = await stakingContract.methods.getPendingRewards(accounts[0]).call();
        const vntRewards = rewards[0];

        if (vntRewards < minVNT) {
            showNotification(`Minimum VNT withdrawal not met (${web3.utils.fromWei(minVNT, 'ether')} VNT required)`, "warning");
            return;
        }

        showNotification("Claiming VNT rewards...", "info");
        const tx = await stakingContract.methods.claimVNTRewards()
            .send({ from: accounts[0] });
        
        showNotification(`Success! ${web3.utils.fromWei(vntRewards, 'ether')} VNT claimed`, "success");
        await updateUI();
    } catch (error) {
        console.error("VNT claim failed:", error);
        showNotification(`VNT claim failed: ${error.message}`, "error");
    }
}

// केवल USDT रिवॉर्ड्स क्लेम करने के लिए
async function claimUSDTRewards() {
    if (!isConnected) {
        showNotification("Please connect wallet first", "error");
        return;
    }
    
    try {
        const [, minUSDT] = await stakingContract.methods.getMinWithdrawInfo().call();
        const rewards = await stakingContract.methods.getPendingRewards(accounts[0]).call();
        const usdtRewards = rewards[1];

        if (usdtRewards < minUSDT) {
            showNotification(`Minimum USDT withdrawal not met (${web3.utils.fromWei(minUSDT, 'ether')} USDT required)`, "warning");
            return;
        }

        // यूजर के पास रेफरल है या नहीं चेक करें
        const user = await stakingContract.methods.users(accounts[0]).call();
        if (user.referralCount === 0) {
            showNotification("No referral team, no USDT rewards", "warning");
            return;
        }

        showNotification("Claiming USDT rewards...", "info");
        const tx = await stakingContract.methods.claimUSDTRewards()
            .send({ from: accounts[0] });
        
        showNotification(`Success! ${web3.utils.fromWei(usdtRewards, 'ether')} USDT claimed`, "success");
        await updateUI();
    } catch (error) {
        console.error("USDT claim failed:", error);
        showNotification(`USDT claim failed: ${error.message}`, "error");
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

async function loadDailyVNTRewards() {
  if (!isConnected || !accounts[0]) return;
  
  const rewardsDisplay = document.getElementById('dailyVntRewardsDisplay');
  if (!rewardsDisplay) return;

  try {
    rewardsDisplay.innerHTML = '<div class="loading-spinner"></div>';
    
    // पेंडिंग रिवॉर्ड्स प्राप्त करें
    const rewards = await stakingContract.methods.getPendingRewards(accounts[0]).call();
    const vntRewards = web3.utils.fromWei(rewards[0], 'ether');
    
    // डेली रिवॉर्ड्स कैलकुलेट करें (365 दिनों में विभाजित)
    const dailyVNT = parseFloat(vntRewards) / 365;
    
    rewardsDisplay.innerHTML = `
      <div class="reward-item">
        <span class="reward-label">Pending Total:</span>
        <span class="reward-value">${parseFloat(vntRewards).toFixed(4)} VNT</span>
      </div>
      <small>Updates automatically</small>
    `;
    
  } catch (error) {
    console.error("Error loading daily rewards:", error);
    rewardsDisplay.innerHTML = '<p class="error">Error loading rewards</p>';
  }
}

async function displayAllRewards() {
  if (!isConnected || !accounts[0]) return;

  try {
    // Get all required data in one call
    const [user, directRewardPercents, roiOfRoiPercents, rewards] = await Promise.all([
      stakingContract.methods.users(accounts[0]).call(),
      stakingContract.methods.directRewardPercents.call(), // Fixed call
      stakingContract.methods.roiOfRoiPercents.call(),     // Fixed call
      stakingContract.methods.getPendingRewards(accounts[0]).call()
    ]);

    const levelDeposits = user.levelDeposits || [];

    // 1. Auto-Staked VNST (Level 1 Only)
    const level1Deposit = levelDeposits[0] || 0;
    const autoStakeVNST = (level1Deposit * directRewardPercents[0]) / 100;
    document.getElementById('autoStakeDisplay').innerHTML = `
      <div class="reward-item">
        <span>From Level 1:</span>
        <span>${web3.utils.fromWei(autoStakeVNST.toString(), 'ether')} VNST (${directRewardPercents[0]}%)</span>
      </div>
      <small>Automatically staked from your direct referrals</small>
    `;

    // 2. Direct USDT Rewards (Level 2-5)
    let directUsdtHtml = '';
    let totalDirectUSDT = 0;
    
    for (let level = 1; level < 5; level++) {
      const levelDeposit = levelDeposits[level] || 0;
      if (levelDeposit > 0) {
        const vnstValue = web3.utils.fromWei(levelDeposit, 'ether');
        const reward = (vnstValue * directRewardPercents[level]) / 100;
        totalDirectUSDT += reward;
        directUsdtHtml += `
          <div class="reward-item">
            <span>Level ${level+1}:</span>
            <span>${reward.toFixed(4)} USDT (${directRewardPercents[level]}%)</span>
          </div>
        `;
      }
    }

    document.getElementById('directUsdtDisplay').innerHTML = `
      ${directUsdtHtml}
      <div class="reward-total">
        <span>Total Direct USDT:</span>
        <span>${totalDirectUSDT.toFixed(4)} USDT</span>
      </div>
    `;

    // 3. ROI of ROI USDT (All Levels)
    let roiOfRoiHtml = '';
    let totalRoiOfRoiUSDT = 0;

    for (let level = 0; level < 5; level++) {
      const levelDeposit = levelDeposits[level] || 0;
      if (levelDeposit > 0) {
        const vntReward = web3.utils.fromWei(levelDeposit, 'ether') * 2; // 2X VNT reward
        const reward = (vntReward * roiOfRoiPercents[level]) / 100;
        totalRoiOfRoiUSDT += reward;
        roiOfRoiHtml += `
          <div class="reward-item">
            <span>Level ${level+1}:</span>
            <span>${reward.toFixed(4)} USDT (${roiOfRoiPercents[level]}%)</span>
          </div>
        `;
      }
    }

    document.getElementById('roiOfRoiDisplay').innerHTML = `
      ${roiOfRoiHtml}
      <div class="reward-total">
        <span>Total ROI of ROI:</span>
        <span>${totalRoiOfRoiUSDT.toFixed(4)} USDT</span>
      </div>
      <small>Based on 2X VNT value of team stake</small>
    `;

  } catch (error) {
    console.error("Error displaying rewards:", error);
    // Show error to user
    showNotification("Error loading rewards data", "error");
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
        
        // 1. वॉलेट बैलेंस अपडेट करें (पहले जैसा)
        if (document.getElementById('walletBalance')) {
            const balance = await vnstTokenContract.methods.balanceOf(accounts[0]).call();
            document.getElementById('walletBalance').textContent = 
                web3.utils.fromWei(balance, 'ether') + ' VNST';
        }
        
        // 2. स्टेक्ड अमाउंट अपडेट करें (पहले जैसा)
        if (document.getElementById('yourStaked')) {
            const user = await stakingContract.methods.users(accounts[0]).call();
            const stakedAmount = user.totalStaked || '0';
            document.getElementById('yourStaked').textContent = 
                web3.utils.fromWei(stakedAmount, 'ether') + ' VNST';
            
            // टोटल क्लेम्ड रिवॉर्ड्स दिखाएं
            if (document.getElementById('totalClaimedRewards')) {
                document.getElementById('totalClaimedRewards').textContent = 
                    web3.utils.fromWei(user.totalClaimed || '0', 'ether') + ' VNT';
            }
        }
        
        // 3. पेंडिंग रिवॉर्ड्स अपडेट करें
        if (document.getElementById('pendingVntRewards') || document.getElementById('pendingUsdtRewards')) {
            try {
                const rewards = await stakingContract.methods.getPendingRewards(accounts[0]).call();
                console.log("Raw rewards data:", rewards);
                
                let vntRewards = '0', usdtRewards = '0';
                if (Array.isArray(rewards)) {
                    vntRewards = web3.utils.fromWei(rewards[0] || '0', 'ether');
                    usdtRewards = web3.utils.fromWei(rewards[1] || '0', 'ether');
                }
                
                // नए रिवॉर्ड्स डिस्प्ले को अपडेट करें
                if (document.getElementById('pendingVntRewards')) {
                    document.getElementById('pendingVntRewards').textContent = vntRewards + ' VNT';
                }
                if (document.getElementById('pendingUsdtRewards')) {
                    document.getElementById('pendingUsdtRewards').textContent = usdtRewards + ' USDT';
                }
                
                // पुराने रिवॉर्ड्स डिस्प्ले को भी अपडेट करें (अगर मौजूद है)
                if (document.getElementById('yourRewards')) {
                    document.getElementById('yourRewards').textContent = 
                        `${vntRewards} VNT + ${usdtRewards} USDT`;
                }
            } catch (error) {
                console.error("Error fetching rewards:", error);
                if (document.getElementById('pendingVntRewards')) {
                    document.getElementById('pendingVntRewards').textContent = 'Error';
                }
                if (document.getElementById('pendingUsdtRewards')) {
                    document.getElementById('pendingUsdtRewards').textContent = 'Error';
                }
                if (document.getElementById('yourRewards')) {
                    document.getElementById('yourRewards').textContent = "0 VNT + 0 USDT";
                }
            }
        }

        if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            await updateHomeStats();
        }

        await updateContractStats();
        
        await loadDailyVNTRewards();
        
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
    if (!window.location.pathname.includes('team.html')) return;

    // Get only total team data
    const [referralEarnings, rewards] = await Promise.all([
      stakingContract.methods.getReferralEarnings(accounts[0]).call(),
      stakingContract.methods.getPendingRewards(accounts[0]).call()
    ]);

    // Update only basic stats
    document.getElementById('totalTeamMembers').textContent = referralEarnings.referralCount;
    document.getElementById('totalTeamStake').textContent = 
      web3.utils.fromWei(referralEarnings.totalTeamDeposits, 'ether') + ' VNST';

  } catch (error) {
    console.error("Error updating team page:", error);
    showNotification("Error loading team data", "error");
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
