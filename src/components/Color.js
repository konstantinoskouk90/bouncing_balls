$(document).ready(function () {

	$("#mixColor").css("background-color", "rgb(150,100,150)");
	$("#do").html("150 , 100 , 150");
	function hexCodeZero(x) {
		if (x <= 9) {
			colorHex = ("0" + x.toString());
		} else
			if (x == 10) {
				colorHex = "0a";
			}
			else
				if (x == 11) {
					colorHex = "0b";
				}
				else
					if (x == 12) {
						colorHex = "0c";
					}
					else
						if (x == 13) {
							colorHex = "0d";
						}

						else
							if (x == 14) {
								colorHex = "0e";
							}
							else
								if (x == 15) {
									colorHex = "0f";
								}
								else {
									colorHex = x.toString(16);
								}
		return colorHex;

	}
	function getValue() {
		
		var color = $('#slide').val().toString();

		var mixColor = redColor + " , " + greenColor + " , " + blueColor;

		$("#mixColor").css("background-color", "rgb(" + redColor + "," + greenColor + "," + blueColor + ")");
		$("#redDiv").css("background-color", "rgb(" + redColor + "," + "0" + "," + "0" + ")");
		$("#greenDiv").css("background-color", "rgb(" + "0" + "," + greenColor + "," + "0" + ")");
		$("#blueDiv").css("background-color", "rgb(" + "0" + "," + "0" + "," + blueColor + ")");
		$("#do").html(mixColor);

		$("#valueRed").html(redColor);
		$("#valueGreen").html(greenColor);
		$("#valueBlue").html(blueColor);

		var redHex_zero = hexCodeZero(parseInt(redColor));
		var greenHex_zero = hexCodeZero(parseInt(greenColor));
		var blueHex_zero = hexCodeZero(parseInt(blueColor));

		var hexString = redHex_zero + greenHex_zero + blueHex_zero;
		$("#hexCode").html(hexString);
	}

	$("#slide").on('mousemove change', function () {
		getValue();
	});
});