document.addEventListener("DOMContentLoaded",
	function (event) {
		function hello(event) {
			console.log(event);
			console.log("jskjsb");
			if (event.shiftKey){
				console.log(event.clientX);
			}
		}

		function hey (event) {
			console.log(event);
		}

		document.querySelector('button').addEventListener('click',hello);
		document.querySelector('body').addEventListener('mousemove', hey);

	}
)