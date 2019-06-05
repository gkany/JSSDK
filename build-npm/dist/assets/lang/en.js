"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var en_US = {
    languages_zh: "简体中文",
    languages_en: "English",
    //trxTypes
    trxTypes_transfer: "Transfer",
    trxTypes_limit_order_create: "Place order",
    trxTypes_limit_order_cancel: "Cancel order",
    trxTypes_call_order_update: "Update margin",
    trxTypes_account_create: "Create account",
    trxTypes_account_update: "Update account",
    trxTypes_account_whitelist: "Account whitelist",
    trxTypes_account_upgrade: "Upgrade Account",
    trxTypes_account_transfer: "Transfer Account",
    trxTypes_asset_create: "Create asset",
    trxTypes_asset_update: "Update asset",
    trxTypes_asset_update_restricted: "Update the list of limited assets",
    trxTypes_asset_update_bitasset: "Update SmartCoin",
    trxTypes_asset_update_feed_producers: "Update asset feed producers",
    trxTypes_asset_issue: "Issue asset",
    trxTypes_asset_reserve: "Reserve asset",
    trxTypes_asset_fund_fee_pool: "Fund asset fee pool",
    trxTypes_asset_settle: "Asset settlement",
    trxTypes_asset_global_settle: "Global asset settlement",
    trxTypes_asset_publish_feed: "Publish feed",
    trxTypes_committee_member_create: "Create committee member",
    trxTypes_committee_member_update: "Update committee member",
    trxTypes_witness_create: "Create witness",
    trxTypes_witness_update: "Update witness",
    trxTypes_witness_withdraw_pay: "Witness pay withdrawal",
    trxTypes_proposal_create: "Create proposal",
    trxTypes_proposal_update: "Update proposal",
    trxTypes_proposal_delete: "Delete proposal",
    trxTypes_withdraw_permission_create: "Create withdrawal permission",
    trxTypes_withdraw_permission_update: "Update withdrawal permission",
    trxTypes_withdraw_permission_claim: "Claim withdrawal permission",
    trxTypes_withdraw_permission_delete: "Delete withdrawal permission",
    trxTypes_fill_order: "Fill order",
    trxTypes_committee_member_update_global_parameters: "Global parameters update",
    trxTypes_vesting_balance_create: "Create vesting balance",
    trxTypes_vesting_balance_withdraw: "Withdraw vesting balance",
    trxTypes_worker_create: "Create budget item",
    trxTypes_custom: "Custom",
    trxTypes_assert: "Assert operation",
    trxTypes_balance_claim: "Claim balance",
    trxTypes_override_transfer: "Override transfer",
    trxTypes_transfer_to_blind: "Transfer to blinded account",
    trxTypes_blind_transfer: "Blinded transfer",
    trxTypes_transfer_from_blind: "Transfer from blinded account",
    trxTypes_asset_claim_fees: "Claim asset fees",

    trxTypes_call_contract_function: "Contract transaction",
    trxTypes_contract_create: "Contract creation",
    trxTypes_revise_contract: "Renewal contract",

    trxTypes_register_nh_asset_creator: "Registered Developer",
    trxTypes_creat_world_view: "Creating World View",
    trxTypes_creat_nh_asset: "NH Asset Creation",
    trxTypes_updata_game_item: "NH Asset Update",
    trxTypes_delete_nh_asset: "NH asset deletion",
    trxTypes_transfer_nh_asset: "NH Asset Transfer",
    trxTypes_creat_nh_asset_order: "NH Asset Certificate of Sale",
    trxTypes_cancel_nh_asset_order: "NH Asset Certificate Cancellation",
    trxTypes_fill_nh_asset_order: "NH Asset Order Matching",
    trxTypes_relate_nh_asset: "NH asset Association",
    trxTypes_relate_world_view: "Relevant World View",
    trxTypes_crontab_create: "Timing Task Creation",
    trxTypes_crontab_cancel: "Cancel the task",
    trxTypes_crontab_recover: "restart timed tasks",

    trxTypes_contract_affecteds_asset: "Assets",

    trxTypes_contract_affecteds_nh_transfer_from: "NH asset send",
    trxTypes_contract_affecteds_nh_transfer_to: "NH asset receive",
    trxTypes_contract_affecteds_nh_modifined: "NH asset data modification",
    trxTypes_contract_affecteds_log: "log",

    //operation
    operation_pending: "pending {blocks} blocks",
    operation_no_recent: "No recent transactions",
    operation_reg_account: "(registrar) registered the account (new_account)",
    operation_transfer: "(from) sent (amount) to (to)",

    operation_fill_order: "(account) bought (received) at (price)",
    operation_vesting_balance_withdraw: "(account) withdrew vesting balance of (amount)",
    operation_balance_claim: "(account) claimed a balance of (amount)",
    operation_publish_feed: "(account) published feed price of (price)",
    operation_set_proxy: "(account) set (proxy) as their voting proxy",
    operation_update_account: "(account) updated their account data",
    operation_limit_order_sell: "(account) placed an order to sell (amount) at (price)",
    operation_limit_order_buy: "(account) placed an order to buy (amount) at (price)",
    operation_limit_order_cancel: "(account) cancelled order #{order}",
    operation_call_order_update: "(account) changed (debtSymbol) debt by (debt) and collateral by (collateral)",
    operation_asset_reserve: "(account) reserved (burnt) (amount)",
    operation_asset_issue: "(account) issued (amount) to (to)",
    operation_asset_fund_fee_pool: "(account) funded (asset) fee pool with (amount)",
    operation_asset_create: "(account) created the asset (asset)",
    operation_asset_update: "(account) updated the asset (asset)",
    operation_asset_update_restricted: "(payer) updated the asset (target_asset) (restricted_type_text)",
    operation_lifetime_upgrade_account: "(account) was upgraded to lifetime member",
    operation_annual_upgrade_account: "(account) was upgraded to annual member",
    operation_unlisted_by: "(lister) unlisted the account (listee)",
    operation_whitelisted_by: "(lister) whitelisted the account (listee)",
    operation_blacklisted_by: "(lister) blacklisted the account (listee)",
    operation_transfer_account: "(account) ownership transferred to (to)",
    operation_asset_update_feed_producers: "(account) updated the feed producers for the asset (asset)",
    operation_asset_settle: "(account) requested settlement of (amount)",
    operation_asset_global_settle: "(account) requested global settlement of (asset) at (price)",
    operation_witness_create: "(account) was upgraded to become a witness",
    operation_witness_update: "(account) update its witness info",
    operation_witness_pay: "Withdrew witness pay to account",
    operation_witness_receive: "Received witness from witness",
    operation_committee_member_update_global_parameters: "(account) updated the global committee parameters",
    operation_worker_create: "(account) created a worker proposal with daily pay of (pay)",
    operation_override_transfer: "(issuer) transferred (amount) from (from) to (to)",

    operation_call_contract_function: "Author: (caller) ,Contract: (contract_name) , Action: (function_name) ,Data: (arg_list)",
    operation_contract_create: "(owner) Create Contract (contract_name)",
    operation_revise_contract: "(reviser) Renewal Contract (contract_name)",
    operation_register_nh_asset_creator: "(fee_paying_account) Register as a developer",
    operation_creat_world_view: "(fee_paying_account) Create a world view",
    operation_creat_nh_asset: "(fee_paying_account) Creates NH assets with ownership account (owner)",
    operation_delete_nh_asset: "(fee_paying_account) Delete NH Asset (nh_asset)",
    operation_transfer_nh_asset: "Transfer of ownership of (from) NH assets (nh_asset) to (to)",
    operation_creat_nh_asset_order: "(seller) submits a sales order to sell NH asset (nh_asset) at (amount) price",
    operation_cancel_nh_asset_order: "(fee_paying_account) cancelled NH asset sale order (order)",
    operation_fill_nh_asset_order: "(fee_paying_account) buys NH assets of (nh_asset) at a price of (price_amount) (price_asset_symbol)",
    operation_proposal_create: "(fee_paying_account) created a proposed transaction (result) : ",
    operation_proposal_update: "(fee_paying_account) updated a proposed transaction (proposal)",
    operation_proposal_delete: "(account) deleted a proposed transaction",

    operation_relate_world_view: "(related_account) relation (view_owner) world view (world_view)",
    operation_relate_nh_asset: "(nh_asset_creator) (related) parent NH asset (nh_asset) and child NH asset (nh_asset) Association",

    operation_crontab_create: "(crontab_creator) creates a timed task (result), execution time (start_time), execution interval (execute_interval) seconds, execution times (execute_times), execution transactions:",
    operation_crontab_cancel: "(fee_paying_account) cancel the task (task)",
    operation_crontab_recover: "(crontab_owner) restart timed tasks (crontab), restart time (restart_time)",

    contract_affecteds_nh_modifined: "(affected_account) NH assets (affected_item) modify data (modified)",
    contract_affecteds_nh_transfer_to: "NH asset (affected_item) transfer (affected_account)",
    contract_affecteds_nh_transfer_from: "(affected_account) NH Asset (affected_item) Transfer",
    contract_affecteds_asset: "(affected_account) (aseet_amount)",
    contract_affecteds_log: "(affected_account) (message)",

    restricted_type_1: "White List of Asset Accounts",
    restricted_type_2: "Blacklist of Asset Accounts",
    restricted_type_3: "White List of Market Transacted Assets",
    restricted_type_4: "Black List of Market Transacted Assets"
};

exports.default = en_US;