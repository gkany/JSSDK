
let _bcx = require('./bcx.node.js');
var querystring = require('querystring');

// let bcx=_bcx.createBCX({
//     default_ws_node:"ws://test.cocosbcx.net",
//     ws_node_list:[	
//          {url:"ws://test.cocosbcx.net", name:"Cocos - China - Beijing"}   	
//     ],
//     networks:[
//         {
//             core_asset:"COCOS",
//             chain_id:"1ae3653a3105800f5722c5bda2b55530d0e9e8654314e2f3dc6d2b010da641c5" 
//         }
//     ], 
//     faucet_url:"",
//     auto_reconnect:true,
//     real_sub:true,
//     check_cached_nodes_data:false                 
// });

let bcx = _bcx.createBCX({
    default_ws_node:"wss://api.cocosbcx.net",
    ws_node_list:[
         {url:"wss://api.cocosbcx.net",name:"主网"}   	
    ],
    networks:[
        {
            core_asset:"COCOS",
            chain_id:"6057d856c398875cac2650fe33caef3d5f6b403d184c5154abbff526ec1143c4" 
        }
    ], 
    faucet_url:"",
    auto_reconnect:true,
    real_sub:true,
    check_cached_nodes_data:false                 
});

bcx.passwordLogin({
    account:"test2",
    password:"12345678"
}).then(res=>{
    console.info("passwordLogin res", res);

    if(res.code == 1) {
        bcx.transferAsset({
            fromAccount:"test2",
            toAccount:"test1",  //query.to,
            amount:1,   //query.token,
            assetId:"COCOS",
            memo:"test transfer by jssdk",
            isEncryption:true
        }).then(result=>{
            console.info('bcx transferAsset', result);
        })
    }
});



