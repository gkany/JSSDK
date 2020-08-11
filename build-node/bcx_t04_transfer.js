
let _bcx = require('./bcx.node.js');

let bcx = _bcx.createBCX({
    default_ws_node:"ws://127.0.0.1:8049",
    ws_node_list:[
         { url:"ws://127.0.0.1:8049", name:"local test" }   	
    ],
    networks:[
        {
            core_asset:"COCOS",
            chain_id:"efe386ccc61e27c85e8dfad2946faabddc09b0d81f39b42df96414869c16fe6f" 
        }
    ], 
    faucet_url:"",
    auto_reconnect:true,
    real_sub:true,
    check_cached_nodes_data:false                 
});

let account_name = "jssdk-test02";
let pwd = "JSSDK@test000002";
bcx.passwordLogin({
    account: account_name,
    password: pwd
}).then(res=>{
    console.log(account_name, pwd);
    console.info("passwordLogin res: ", res);

    if(res.code == 1) {
        // bcx.transferAsset({
        //     fromAccount:"jssdk-test02",
        //     toAccount:"jssdk-test03",  //query.to,
        //     amount:1,   //query.token,
        //     assetId:"COCOS",
        //     memo:"test transfer by jssdk, test last_block_num: " + last_block_num,
        //     isEncryption:false
        // }).then(result=>{
        //     console.info('bcx transfer res: ', result);
        // })

        /////////////////////////
        setInterval(() => {
            transfer();
        }, 200);
    }
});

function transfer() {
    var amount = Math.ceil(Math.random()*20) + 1;
    bcx.transferAsset({
        fromAccount:"jssdk-test02",
        toAccount:"jssdk-test03", 
        amount:amount,
        assetId:"COCOS",
        memo:"test transfer by jssdk, random: " + Math.ceil(Math.random()*210000),
        isEncryption:false
    }).then( result => {
        console.info("bcx transfer", amount, ', res: ', result);
    })
}

/**
dev@ubuntu:~/data/mrepo/JSSDK/build-node$ node bcx_t04_transfer.js 
bcxjs version：2.2.10
Connecting to node :  ws://127.0.0.1:8049
Connection status :  realopen ws://127.0.0.1:8049
synced and subscribed, chainstore ready
jssdk-test02 JSSDK@test000002
passwordLogin res:  { code: 1,
  data: 
   { account_id: '1.2.18',
     locked: false,
     account_name: 'jssdk-test02',
     mode: 'account' } }
bcx transferAsset { code: 1,
  data: [ { fees: [Array], real_running_time: 188 } ],
  trx_data: 
   { trx_id: '8f56dfc5fdd3c306172afcb8b6ce2be7f706116fc9b097494ef57a082b5a5c85',
     block_num: 145253 } }
 
*/

