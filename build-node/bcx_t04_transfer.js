
let _bcx = require('./bcx.node.js');
var querystring = require('querystring');

let bcx = _bcx.createBCX({
    // default_ws_node:"ws://127.0.0.1:8049",
    // ws_node_list:[
    //      { url:"ws://127.0.0.1:8049", name:"local test" }   	
    // ],
    // networks:[
    //     {
    //         core_asset:"COCOS",
    //         chain_id:"efe386ccc61e27c85e8dfad2946faabddc09b0d81f39b42df96414869c16fe6f" 
    //     }
    // ], 
        default_ws_node:"wss://api.cocosbcx.net",
        // default_ws_node:"ws://127.0.0.1:8049",
        ws_node_list:[
             {url:"wss://api.cocosbcx.net", name:"主网"}   	
            //  {url:"ws://127.0.0.1:8049", name:"主网"}   	
        ],
        networks:[
            {
                core_asset:"COCOS",
                chain_id:"6057d856c398875cac2650fe33caef3d5f6b403d184c5154abbff526ec1143c4" 
                // chain_id:"efe386ccc61e27c85e8dfad2946faabddc09b0d81f39b42df96414869c16fe6f" 
            }
        ], 
    faucet_url:"",
    auto_reconnect:true,
    real_sub:true,
    check_cached_nodes_data:false                 
});

// let account_name = "jssdk-test03";
// let pwd = "JSSDK@test000003";
bcx.passwordLogin({
    acount: account_name,
    password: pwd
}).then(res=>{
    console.log(account_name, pwd);
    console.info("passwordLogin res: ", res);

    // if(res.code == 1) {
    //     bcx.transferAsset({
    //         fromAccount:"jssdk-test02",
    //         toAccount:"init1",  //query.to,
    //         amount:210,   //query.token,
    //         assetId:"COCOS",
    //         memo:"test transfer by jssdk",
    //         isEncryption:false
    //     }).then(result=>{
    //         console.info('bcx transferAsset', result);
    //     })
    // }
});



