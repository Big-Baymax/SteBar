# StepBar
>分步骤完成插件，可以用在注册或者是认证信息等等页面，现在是第一个版本，主要实现了自动生成，还不能自定义颜色，后期更新。
>本插件主要是样式比较好看，采用箭头指示设计，比较顺眼。
> * stepBarBox: options.box, //显示的容器
> * items: options.items, //显示的内容['第一步', '第二步', '第二步']
> * stepbarid: options.stepbarid,//对应的显示内容的类用来选择对象用，可自定义，后面自己编号1、2、3、4、5……
> * current: options.current, //第几个被选中
## getoptions()
  获取当前StepBar的配置参数，其中options.id为唯一的标识，用来区分多个StepBar；
## init()
  初始化，要使用的时候必需先配置好
  demo
  <pre><code>
var id = stepbar.init({
          box: $("#newstepbar"),//指定容器
          items: ['第一步', '第二步', '第二步', '第二步', '第二步'],
          stepbarid: "stepBar", //stepBar
          current: 1, //第几个被选中
});
 </code></pre>
## setcurrent()
设置当前StepBar是执行到第几个步骤用的
