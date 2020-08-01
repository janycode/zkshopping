// 查看某些页面之前，判断用户是否登录
$(function() {
	var zkwgtoken = localStorage.getItem("zkwgtoken");
//	$.ajax({
//		type: "get",
//		url: "http://47.94.193.104:8080/zkshopping/api/user/checkUserToken",
//		//url: "http://127.0.0.1:8080/api/user/checkUserToken",
//		headers: {
//			zkwgtoken: zkwgtoken,
//			"aaa": "123"
//		},
//
//		success: function(data) {
//			console.log(zkwgtoken);
//			console.log("校验信息：");
//			console.log(data);
//			if(data.code != 200) {
//				//location.href = "login.html";
//			}
//		},
//		error: function() {
//			location.href = "login.html";
//		}
//	})

	axios({
		url: 'http://47.94.193.104:8080/zkshopping/api/user/checkUserToken',
		method: 'get',
		headers: {
			zkwgtoken: zkwgtoken
		},
		data: {
			//'a': 1,
			//'b': 2,
		}
	}).then(function(response) {
		//console.log(response);
		//console.log(response.data);
		var data = response.data;
		console.log(zkwgtoken);
		console.log(data);
		console.log("登陆权限校验");
		if(data.code != 200) {
			location.href = "login.html";
		}
	}).catch(function(error) {
		console.log(error);
		location.href = "login.html";
	})
})