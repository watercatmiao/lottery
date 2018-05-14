wx.config({
	debug: true,
	appId: 'wx0f83b661510406e1',
	timestamp: '1526197516',
	nonceStr: 'etomeoa',
	signature: '90c029cf024ac4129f92b993927aad91396a2d68',
	jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
});
wx.ready(function () {
	wx.onMenuShareTimeline({
	    title: '互联网之子',
	    link: 'http://movie.douban.com/subject/25785114/',
	    imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
	    trigger: function (res) {
	      // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
	      alert('用户点击分享到朋友圈');
	    },
	    success: function (res) {
	      alert('已分享');
	    },
	    cancel: function (res) {
	      alert('已取消');
	    },
	    fail: function (res) {
	      alert(JSON.stringify(res));
	    }
	});
	//分享给朋友
	wx.onMenuShareAppMessage({
	    title: '互联网之子',
	    desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
	    link: 'http://movie.douban.com/subject/25785114/',
	    imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
	    trigger: function (res) {
	      // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
	      alert('用户点击发送给朋友');
	    },
	    success: function (res) {
	      alert('已分享');
	    },
	    cancel: function (res) {
	      alert('已取消');
	    },
	    fail: function (res) {
	      alert(JSON.stringify(res));
	    }
    });
	
})
