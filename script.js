function firstChar(str) {
  // your code here
	str=str.trim()
	if(str.length==0)
{
    return ""
}
return(str[0])
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
