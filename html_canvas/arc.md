### arc绘制圆弧的说明

```js
arc(x,y,r, sAngle, eAngle, counterclockwise)
```

- x: 圆的中心x坐标
- y: 圆的中心y坐标
- r: 圆的半径
- sAngle: 起始角(弧度计)，圆的三点钟位置是0，6点是0.5*PI,9点是1*PI,12点是1.5*PI,三点钟亦是2*PI;
- eAngle: 结束角
-counterclockwise: boolean,默认true,逆时针绘制，false顺时针