// 立即执行函数
(function () {
		// 构造函数第一个字母是大写的
		var SideBar = function(eId,closeBarId) {
		// 菜单项目
		var Menubar = function() {
			this.el = document.querySelector('#sidebar ul');
			this.state = 'allClosed';// hasOpened
			this.el.addEventListener('click', function() {
				e.stopPropagation();
			});
		}
		
		var self = this;
		this.state = 'opened';
		// 代表sidebar的el dom对象
		this.el = document.getElementById(eId || 'sidebar');
		this.closeBarEl =  document.getElementById(closeBarId || 'close');
		this.memubar = new Menubar();
		// 第三个函数默认让它进行冒泡
		this.el.addEventListener('click',function(event){
			// 此时的闭包产生的时候的函数的上下文已经消失了  要获取的上下文的话 那么就用外面访问我们保存的self 指定为this
			// 如果它点击的不是自身，那么就切换 ??
			// 判断点击的对象是不是sidebar 这个对象，如果是的话，我们不做相应，否则
			if(event.target !== self.el) {
				self.triggerSwitch();
			}
		});
	};
	SideBar.prototype.close = function() {
		console.log('close sidebar');
		this.state = 'closed';
	};
	SideBar.prototype.open = function() {
		console.log('open sidebar');
		this.state = 'opened';
	};
	SideBar.prototype.triggerSwitch = function() {
		// 如果转台是开的话，那么就关闭它否则的话，就打开它s
		if(this.state = 'opened') {
			this.close();
		} else {
			this.open();
		}
	}

	var sidebar = new SideBar();




})();