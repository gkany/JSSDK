
let _bcx = require('./bcx.node.js');
var querystring = require('querystring')

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
         {url:"wss://api.cocosbcx.net", name:"主网"}   	
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

bcx.queryBlock({
    block:600000
 }).then(res=>{
     console.info("queryBlock res: ", res);
 })


/*
dev@ubuntu:~/data/cocos/JSSDK/build-node$ node bcx_t02_queryBlock.js 
bcxjs version：2.2.10
(node:28689) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Connecting to node :  wss://api.cocosbcx.net
Connection status :  realopen wss://api.cocosbcx.net
synced and subscribed, chainstore ready
queryBlock res:  {
  code: 1,
  data: {
    previous: '000927bf101bec1ff7dd027b0e2ceb464ee8c39c',
    timestamp: '2019-12-14T06:19:14',
    witness: '1.6.6',
    transaction_merkle_root: '0000000000000000000000000000000000000000',
    witness_signature: '20635e1043f4b6a57b281c9f538fd13f76bf089e4b26059a5dc7684f25e35f6e3e4a834dd6360717472962d109b9b7755f6892e1bf3c34ffd5bb4b0c4b3329af27',
    block_id: '000927c08e8ee18550e5e1922a690e9afe9ab140',
    transactions: [],
    time: '2019/12/13 22:19:14',
    block_height: 600000,
    witness_name: 'cocos-init5',
    op_count: 0,
    trx_count: 0
  }
}
*/