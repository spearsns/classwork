var turn = 'X';
var cell;
var A1;
var A2;
var A3;
var B1;
var B2;
var B3;
var C1;
var C2;
var C3;
var xWins = 0;
var oWins = 0;

function reset(){
	document.getElementById('A1').innerHTML = '&nbsp;';
	document.getElementById('A1').classList.remove('disable');
	A1 = null;
	document.getElementById('A2').innerHTML = '&nbsp;';
	document.getElementById('A2').classList.remove('disable');
	A2 = null;
	document.getElementById('A3').innerHTML = '&nbsp;';
	document.getElementById('A3').classList.remove('disable');
	A3 = null;
	document.getElementById('B1').innerHTML = '&nbsp;';
	document.getElementById('B1').classList.remove('disable');
	B1 = null;
	document.getElementById('B2').innerHTML = '&nbsp;';
	document.getElementById('B2').classList.remove('disable');
	B2 = null;
	document.getElementById('B3').innerHTML = '&nbsp;';
	document.getElementById('B3').classList.remove('disable');
	B3 = null;
	document.getElementById('C1').innerHTML = '&nbsp;';
	document.getElementById('C1').classList.remove('disable');
	C1 = null;
	document.getElementById('C2').innerHTML = '&nbsp;';
	document.getElementById('C2').classList.remove('disable');
	C2 = null;
	document.getElementById('C3').innerHTML = '&nbsp;';
	document.getElementById('C3').classList.remove('disable');
	C3 = null;
}

function mark(){
		if(turn == 'X'){
			document.getElementById(cell).innerHTML = '<img src="X.png">';
				if( (A1 == 'X' && A2 == 'X' && A3 == 'X') ||
					(B1 == 'X' && B2 == 'X' && B3 == 'X') ||
					(C1 == 'X' && C2 == 'X' && C3 == 'X') ||
					(A1 == 'X' && B1 == 'X' && C1 == 'X') ||
					(A2 == 'X' && B2 == 'X' && C2 == 'X') ||
					(A3 == 'X' && B3 == 'X' && C3 == 'X') ||
					(A1 == 'X' && B2 == 'X' && C3 == 'X') ||
					(A3 == 'X' && B2 == 'X' && C1 == 'X') ){

					xWins += 1;
					alert('X Wins!');
					document.getElementById('X').innerHTML = xWins;
					reset();
				}

			turn = 'O';
			console.log('turn = ' + turn);
			console.log(cell);
		
		}else{
			document.getElementById(cell).innerHTML = '<img src="O.png">';
				if( (A1 == 'O' && A2 == 'O' && A3 == 'O') ||
					(B1 == 'O' && B2 == 'O' && B3 == 'O') ||
					(C1 == 'O' && C2 == 'O' && C3 == 'O') ||
					(A1 == 'O' && B1 == 'O' && C1 == 'O') ||
					(A2 == 'O' && B2 == 'O' && C2 == 'O') ||
					(A3 == 'O' && B3 == 'O' && C3 == 'O') ||
					(A1 == 'O' && B2 == 'O' && C3 == 'O') ||
					(A3 == 'O' && B2 == 'O' && C1 == 'O') ){

					oWins += 1;
					alert('O Wins!');
					document.getElementById('O').innerHTML = oWins;
					reset();
				}

			turn = 'X';
			console.log('turn = ' + turn);
			console.log(cell);
		}		
}

