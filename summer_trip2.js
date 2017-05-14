$(document).ready(function() {
	var pages = [
		'home',
		'step1',
		'step2',
		'step3'
	];

	var creditCardValid = false;
	var ssnValid = false;
	var step2Checked = false;

	function showPage (pageId)
	{
		hideAllPages();
		$('#' + pageId).removeClass('homepage_hidden');
	}

	function hideAllPages () 
	{
		for (var i = 0; i < pages.length; i++) 
		{
			$('#' + pages[i]).addClass('homepage_hidden');
		}
	}

	function verifica2()
	{
		creditCardValid = false;
		var ccn = document.getElementById ("CCN").value;
		var length_ccn = ccn.length;
		var last_digit = ccn.toString().charAt( ccn.length - 1 );
		var first_half_ccn = ccn.substr(0,8);
		var second_half_ccn = ccn.substr(8,15);
		var i = 0;
		var ccn_string = ccn.toString();
		var suma = 0;

		while(ccn) 
		{
    		suma +=ccn % 10;
    		ccn= Math.floor(ccn / 10);
    	}
		if (length_ccn!=16)
		{
			alert("The credit card number must have exactly 16 digits!...Please re-enter your credit card number corectly!...");
		}
		else if (isNaN(ccn))
		{
        	alert("The credit card number contains only digits!....lease re-enter your credit card number corectly!...");
		}
        else if (last_digit%2!=0)
        {
        	alert("The last digit must be even!....Please re-enter your credit card number corectly!...");
        }
        else if (suma <= 16)
       	{
        	alert("The sum of all digits must be greater than 16!....Please re-enter your credit card number corectly!...");
       	}
        else if (suma % 16 == 0)
        {
        	alert("The credit card number needs at least 2 diferent digits!....Please re-enter your credit card number corectly!...");
        }
    	else
    	{
    		alert("Credit Card Valid!");
    		creditCardValid = true;
    	}
    }

    function verifica1()
	{
		ssnValid = false;
		var ssn = document.getElementById ("SSN").value;
		var day = document.getElementById ("Day").value;
		var month = document.getElementById ("Month").value;
		var year = document.getElementById ("Year").value;
		var lengthssn = ssn.length;
		var lengthday = day.length;
		var lengthmonth = month.length;
		var lengthyear = year.length;
		var birth_date = year + month + day;
		var partial_ssn = ssn.substr(1,6);
	
		if (lengthssn!=13) 
		{
			alert("The SSN has not 13 characters !! Please fill in a new one." );	
		}
		else if (isNaN(ssn)) 
		{
			alert("The SSN contains only digits !! Please fill in a new one." );	
		}
		else if (lengthday<1) 
		{
			alert("Please fill in the day of birth" );	
		}
		else if (lengthmonth<1) 
		{
			alert("Please fill in the month of birth" );	
		}
		else if (lengthyear<1) 
		{
			alert("Please fill in the year of birth" );	
		}
		else if (day>31 || day<1 || lengthday!=2)
		{
			alert("The day is not valid !! Please fill in a new one." );	
		}
		else if (month>12 || month<1 || lengthmonth!=2)
		{
			alert("The month is not valid !! Please fill in a new one." );	
		}
		else if (year>2016 || year<1 || lengthyear!=2)
		{
			alert("The year is not valid !! Please fill in a new one." );	
		}
		else if (birth_date!=partial_ssn)
		{
			alert("The date of birth you entered is not confirmed by your ssn!")
		}
		else 
		{
			alert ("CNP valid");
			ssnValid = true;
		}
	}

	function start()
	{
		var x = Math.floor((Math.random() * 100) + 1);
		document.getElementById("casuta_castigator_invizibil").value = x;
	}

	var i = 0;

	function incearca1()
	{
		var x = document.getElementById("casuta_castigator_invizibil").value;
		var y = document.getElementById("casuta_input").value;
			
		if (y<x)
			alert("Numarul introdus este mai mic....Nu va lasati....Mai incercati!....");
		else if (y>x)
			alert("Numarul introdus este mai mare....Nu va lasati....Mai incercati!....");
		else if (x===y)
			alert("Ati ghicit!!!!.....Yupppiiii!!!!....In continuare apasati butonul rezultat si puteti vizualiza numarul dumneavoastra de incercari si premiul obtinut"); 
		i++;
	}

	function rezultat1()
	{
		step2Checked = false;
		var punctaj = i *10;
		alert("Ati avut "+i+" incercari, deci punctajul obtinut este "+punctaj);
		step2Checked = true;
	}

	function sterge()
	{
		document.getElementById("casuta_rezultat").value= "";
	}
	function adauga_7()
	{
		document.getElementById("casuta_rezultat").value+= "7";
	}
	function adauga_8()
	{
		document.getElementById("casuta_rezultat").value+= "8";
	}
	function adauga_9()
	{
		document.getElementById("casuta_rezultat").value+= "9";
	}
	function adauga_simbol_adunare()
	{
		document.getElementById("casuta_rezultat").value+= "+";
	}
	function adauga_4()
	{
		document.getElementById("casuta_rezultat").value+= "4";
	}
	function adauga_5()
	{
		document.getElementById("casuta_rezultat").value+= "5";
	}
	function adauga_6()
	{
		document.getElementById("casuta_rezultat").value+= "6";
	}
	function adauga_simbol_diferenta()
	{
		document.getElementById("casuta_rezultat").value+= "-";
	}
	function adauga_1()
	{
		document.getElementById("casuta_rezultat").value+= "1";
	}
	function adauga_2()
	{
		document.getElementById("casuta_rezultat").value+= "2";
	}
	function adauga_3()
	{
		document.getElementById("casuta_rezultat").value+= "3";
	}
	function adauga_simbol_impartire()
	{
		document.getElementById("casuta_rezultat").value+= "/";
	}
	function adauga_0()
	{
		document.getElementById("casuta_rezultat").value+= "0";
	}
	function adauga_virgula()
	{
		document.getElementById("casuta_rezultat").value+= ".";
	}
	function calculeaza()
	{
		var total= eval (document.getElementById("casuta_rezultat").value)
		var l= total.length;
		if (l>15)
		{
			document.getElementById("casuta_rezultat").value= "	EROARE ";
		}
		else
		{
		document.getElementById("casuta_rezultat").value= total;
		}
	}
	function adauga_simbol_inmultire()
	{
		document.getElementById("casuta_rezultat").value+= "*";
	}

	$('.showStep1').click(function(e) 
	{
		e.preventDefault();
		showPage('step1');
	});

	$('.showStep2').click(function(e) 
	{
		e.preventDefault();
		if (!creditCardValid || !ssnValid) 
		{
			alert("step 1 not valid");
			return;
		}
		showPage('step2');
	});

	$('.showStep3').click(function(e) {
		e.preventDefault();
		if (!step2Checked) 
		{
			alert("step 2 not valid");
			return;
		}
		showPage('step3');
	});

	$('.showHome').click(function(e) 
	{
		e.preventDefault();
		showPage('home');
	});

	$('#verifica_buton').click(function(e) 
	{
		verifica2 ();
	});

	$('#buton_verifica').click(function(e) 
	{
		verifica1 ();
	});

	$('#buton_start').click(function(e) 
	{
		start ();
	});

	$('#incearca').click(function(e) 
	{
		incearca1 ();
	});

	$('#rezultat').click(function(e) 
	{
		rezultat1 ();
	});

	$('#c').click(function(e) 
	{
		sterge ();
	});

	$('#7').click(function(e) 
	{
		adauga_7 ();
	});

	$('#8').click(function(e) 
	{
		adauga_8 ();
	});

	$('#9').click(function(e) 
	{
		adauga_9 ();
	});

	$('#aduna').click(function(e) 
	{
		adauga_simbol_adunare ();
	});

	$('#4').click(function(e) 
	{
		adauga_4 ();
	});

	$('#5').click(function(e) 
	{
		adauga_5 ();
	});

	$('#6').click(function(e) 
	{
		adauga_6 ();
	});

	$('#scade').click(function(e) 
	{
		adauga_simbol_diferenta ();
	});

	$('#1').click(function(e) 
	{
		adauga_1 ();
	});

	$('#2').click(function(e) 
	{
		adauga_2 ();
	});

	$('#3').click(function(e) 
	{
		adauga_3 ();
	});

	$('#imparte').click(function(e) 
	{
		adauga_simbol_impartire ();
	});

	$('#0').click(function(e) 
	{
		adauga_0 ();
	});

	$('#virgula').click(function(e) 
	{
		adauga_virgula ();
	});

	$('#egal').click(function(e) 
	{
		calculeaza ();
	});

	$('#ori').click(function(e) 
	{
		adauga_simbol_inmultire ();
	});
});
