<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

## Ubuntu 安装

1. 制作U盘  （F12 U盘启动）
2. 我选择直接覆盖Windows 配置选择默认
3. 科学上网
```js
sudo vim /etc/ss.json
写入自己的配置

右上角 >> 系统设置  >> 网络代理 >> Socks主机 填入 127.0.01  后面是 1080 

这就完成了，单是现在全部走的代理
我用Chrome的SwitchOmega插件管理
```

4. 安装MongoDB

    其实MongoDB已经在Ubuntu的默认仓库中了，只是它并不是最新版。建议使用官方的MongoDB仓库
- 1.使用MongoDB仓库，添加key：

  > sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6

- 2.添加源
  > echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee

- 3.安装MongoDB
  > sudo apt-get update

  > sudo apt-get install mongodb-org





参考：
1. https://github.com/qianjiahao/MongoDB/wiki/%E9%85%8D%E7%BD%AE%E3%80%81%E5%90%AF%E5%8A%A8MongoDB

1. http://blog.topspeedsnail.com/archives/4820

## Windows MongoDB

1. 官网下载安装后，在c/Progranm Files/MongoDB/server/3.4/bin
2. 配置环境变量： PATH后加上c/Progranm Files/MongoDB/server/3.4/bin
3. 创建 c/data/db 目录
4. 在bin目录下 mongod --dbpath /data/db/
5. 新开一个cmd 运行mongo
6. 打开 127.0.0.1:27017
