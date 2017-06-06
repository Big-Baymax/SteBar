//  stepBarBox: options.box, //显示的容器
//	items: options.items, //显示的内容['第一步', '第二步', '第二步']
//	color: options.color, //显示的背景颜色
//	fontColor: options.fontColor, //显示的字体颜色
//	selectedColor: options.selectedColor,//焦点显示的背景颜色
//	selectedFontColor: options.selectedFontColor,//焦点显示的字体颜色
//	current: options.current, //第几个被选中

	var stepbar = {
		options:[{}],
		id:0,
		getoptions:function(id){
			return this.options[id];
		},
		init: function(options) {
			this.options[this.id] = options;
			this.draw(this.options[this.id],this.id);
			
			var i = 0;
			var stepBarlength = this.options[this.id].items.length;
			var stepbarid = this.options[this.id].stepbarid;
			for(i = 0; i < stepBarlength; i++){
				var str = "."+stepbarid+"_"+(i+1)+"";
				if((i+1) == this.options[this.id].current){
					$(str).show();
				}else{
					$(str).hide();
				}
				
			}
			this.id++;
			return this.id-1;
		},
		setcurrent:function(id,current){
			this.options[id].current = current;
			var i = 0;
			var stepBarlength = this.options[id].items.length;
			var stepbarid = this.options[id].stepbarid;
			for(i = 0; i < stepBarlength; i++){
				var str = "."+stepbarid+"_"+(i+1)+"";
				if(current == (i+1)){
					$(str).show();
				}else{
					$(str).hide();
				}
				
			}
			this.draw(this.options[id],id);
		},
		draw:function(options,id){
			var i = 0;
			var stepBarlength = options.items.length;
			var htmlcode = "";
			var curnum = options.current-1;
			if(stepBarlength > 1) {
				for(i = 0; i < stepBarlength; i++) {
					if(i==curnum){
						htmlcode += '<li class="stepBar_li stepBar_li_cur">'+ options.items[i] +'</li>';
					}else{
						htmlcode += '<li class="stepBar_li" onclick = "stepbar.setcurrent('+id+','+(i+1)+');">'+options.items[i] +'</li>';
					}
				}
				options.box.html('<ul class="stepBar">'+htmlcode+'</ul>');
			} else {
				console.log("不好意思，长度必须大于1哦");
			}
		}
	}