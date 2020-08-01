$(function() {
	var zkwgtoken = localStorage.getItem("zkwgtoken");
//	$.ajax({
//		url: "http://47.94.193.104:8080/zkshopping/api/user/checkUserToken",
//		//url: "http://127.0.0.1:8080/api/user/checkUserToken",
//		headers: {
//			zkwgtoken: zkwgtoken
//		},
//		type: "get",
//		success: function(data) {
//			
//			if (data.code == 200) {
//				// 显示用户信息
//				document.getElementById("span_id").innerHTML = localStorage.getItem("email");
//				
//				document.getElementById("exit_spn").innerHTML = "<a href='javascript:void(0);' onclick='loginOut()'>退出</a>";
//				
//				// 不显示注册登录按钮
//				document.getElementById("hide_id").innerHTML = "";
//				
//				
//			}
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
		
			if (data.code == 200) {
				// 显示用户信息
				document.getElementById("span_id").innerHTML = localStorage.getItem("email");
				
				document.getElementById("exit_spn").innerHTML = "<a href='javascript:void(0);' onclick='loginOut()'>退出</a>";
				
				// 不显示注册登录按钮
				document.getElementById("hide_id").innerHTML = "";
				
				
			}
		
	}).catch(function(error) {
		console.log(error);
		//location.href = "login.html";
	})
	
	
})

function loginOut() {
	var zkwgtoken = localStorage.getItem("zkwgtoken");
	console.log(zkwgtoken);
//	$.ajax({
//		url: "http://47.94.193.104:8080/zkshopping/api/user/loginOut",
//		headers: {
//			zkwgtoken: zkwgtoken
//		},
//		type: "get",
//		success: function(data) {
//			console.log(data);
//			if (data.code == 200) {
//				location.reload();
//			}
//		}
//	})
	
	
	axios({
		url: 'http://47.94.193.104:8080/zkshopping/api/user/loginOut',
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
		console.log(data);
			if (data.code == 200) {
				location.reload();
			}
		
	}).catch(function(error) {
		console.log(error);
		//location.href = "login.html";
	})
	
}
