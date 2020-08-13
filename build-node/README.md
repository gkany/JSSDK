# 1. 依赖安装  
JSSDK路径下：  
``` shell  
sudo npm install  
```  
> npm会根据package.json文件安装依赖，安装完的依赖在node_modules中。  

# 2. 编译  
项目根路径下：  
``` shell  
sudo npm run release-node  
```  
> 编译成功后，会在build-node下生成bcx.node.js文件。  

# 3. 测试  
为了开发测试方便，测试代码直接放在了build-node路径下，直接通过node xxxx.js执行即可。  
示例：  
``` text  
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
```  

# 4. web页面操作  
使用浏览器打开build路径下的index.html进行操作。  
