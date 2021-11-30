function num(n)
{
    if (document.getElementById('display').value == '0')
    {document.getElementById('display').value = n}		
	else
	{document.getElementById('display').value += n;}
}

function opr(o)
{
  if (o == '^2')
  { var num3;
	num3 = eval(document.getElementById('display').value);
	document.getElementById('display').value *= num3;  
  }
  if (o == '√')
  {
	  var num4;
    num4 = eval(document.getElementById('display').value);
	document.getElementById('display').value = Math.sqrt(num4); 	
	
  }
  if (o == 'c') 
  { document.getElementById('display').value = '0';
    num1 = 0;
	num2 = 0;
	op = '';
	}	  
  if (o == '+' || o == '-' || o == '*' || o == '/' ) {
	op = o;
	num1 = eval(document.getElementById('display').value);
    document.getElementById('display').value = 0;
  }
  if (o == '=') {
	num2 = eval(document.getElementById('display').value); 
	switch(op) {
	  case '+':
		ris = num1 + num2;
		break;
	  case '*':
		ris = num1 * num2;
		break;
	 case '-':
		ris = num1 - num2;
		break;
	case '/':
		ris = num1 / num2;
		break;
	} 
   document.getElementById('display').value = ris;	
  }
}	
	