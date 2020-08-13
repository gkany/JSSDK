
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
        // 1. callContract
        // callContract();

        // 2. batch callContract
        setInterval(() => {
            callContract();
        }, 200);
    }
});

function callContract() {
    var amount = Math.ceil(Math.random()*315482) + 1;
    bcx.callContractFunction({
        nameOrId: "contract.testshopapi1",
        functionName: "test_price",
        valueList: [amount]
    }).then( result => {
        console.info("bcx call_contract, set_price: ", amount, ', res: ', result);
    })
}



