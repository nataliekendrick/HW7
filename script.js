
/*https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp*/
document.body.style.backgroundColor = "#ABBEFF";

let bio = document.querySelector('#bio');


let myDiv = document.querySelector('#img1');
	myDiv.addEventListener('click', myFunction);

function myFunction(){
	myDiv.classList.add("myClass");
	bio.innerHTML = "Nothing can go wrong when watching a disney movie!" ;
	bio.classList.add("p")
}

let myDiv2 = document.querySelector('#img2');
	myDiv2.addEventListener('click', myFunction2);


function myFunction2(){
	bio.innerHTML = "Chocolate LOVER <3";
	myDiv2.classList.add("myClass2");

}

let myDiv3 = document.querySelector('#img3');
	myDiv3.addEventListener('click', myFunction3);

function myFunction3(){
	bio.innerHTML = "Nothing can go wrong when watching a disney movie!";
	myDiv3.classList.add("myClass3");
}

let myDiv4 = document.querySelector('#img4');
	myDiv4.addEventListener('click', myFunction4);

function myFunction4(){
	bio.innerHTML = "Currently struggling with Javascript";
	myDiv4.classList.add("myClass4");
}


