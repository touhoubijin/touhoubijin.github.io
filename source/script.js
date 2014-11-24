function popup(URLStr,Name, width, height)
{
	var popUpWin;
	popUpWin=window.open(URLStr, Name, 'toolbar=no,location=no,directories=no,status=no,menub ar=no,scrollbars=no,resizable=no,copyhistory=no,width='+width+',height='+height+'');
	popUpWin.window.focus();
	popUpWin.window.moveTo(670, 115) 
}

