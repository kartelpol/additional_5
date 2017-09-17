module.exports = function check(str, bracketsConfig) {
var arr = str.split("");
var stack = [];
for (var a=0; a < arr.length; a++){
	for(var b=0; b < bracketsConfig.length; b++){
		if((arr[a] == bracketsConfig[b][0]) ){
			if (bracketsConfig[b][0] == bracketsConfig[b][1] &&  (stack[stack.length-1] != bracketsConfig[b][0]))
				stack.push(arr[a]);
			else if (bracketsConfig[b][0] != bracketsConfig[b][1])
				stack.push(arr[a]);		
		}

		if((arr[a] == bracketsConfig[b][1]) && (stack[stack.length-1] == bracketsConfig[b][0])){
			stack.pop();

		}
	}
}

if (!stack.length) return true;
else return false;
}
