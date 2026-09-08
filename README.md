# Pompom Pet Web

一个以“整个网页就是宠物房间”为核心方向的治愈系网页虚拟宠物项目。

## 当前阶段

Room interaction prototype（Interaction UI V1）

- GitHub Pages 优先的纯静态前端
- 390 × 844 手机竖屏为主要设计基准
- HTML / CSS / Vanilla JavaScript
- 宠物、饭盆、球、小床、窗户、柜子、吊灯均为独立可交互图层
- 已实现五类功能共用的底部抽屉交互骨架
- 饭盆、球、小床可联动对应功能；宠物和窗户带轻量反馈
- 当前选项仅为预览，不会改变宠物数值

## 本地预览

在项目根目录运行：

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 后续计划

- pet animation
- pet stats
- feeding
- sleeping
- playing
- dress-up
- save system
- day/night cycle
