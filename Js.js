let main = document.querySelector("#main")
let noOfCourses =0;

const send = ()=>{
	let courseGp = document.getElementById("courseGp");
	let range = document.getElementById("range");
	let courseUnit= document.getElementById("courseUnit");
	noOfCourses=range.options[range.selectedIndex].text;
	console.log(noOfCourses)
	for (var i = 1; i <= noOfCourses; i++ ) {
		let createPara = document.createElement("p");
		createPara.innerHTML ="Course" + i;

		//Setting option for courses
		let courseSelect =document.createElement("SELECT");
		courseSelect.setAttribute("id", "course" +i)
		let option1 = document.createElement("OPTION");
		option1.innerHTML = "Select Grade";
		option1.setAttribute("disabled", "true")
		let option2 = document.createElement("OPTION")
		option2.innerHTML = "A";
		let option3 = document.createElement("OPTION")
		option3.innerHTML = "B";
		let option4 = document.createElement("OPTION")
		option4.innerHTML = "C";
		let option5 = document.createElement("OPTION")
		option5.innerHTML = "D";
		let option6 = document.createElement("OPTION")
		option6.innerHTML = "E";
		let option7 = document.createElement("OPTION")
		option7.innerHTML = "F";


		
		//appending otpion to select
		courseSelect.appendChild(option1)
		courseSelect.appendChild(option2)
		courseSelect.appendChild(option3)
		courseSelect.appendChild(option4)
		courseSelect.appendChild(option5)
		courseSelect.appendChild(option6)
		courseSelect.appendChild(option7)

		//appending element to courseG
		courseGp.appendChild(createPara)
		courseGp.appendChild(courseSelect)

		//Setting options for unit
		let unitSelect =document.createElement("SELECT");
		unitSelect.setAttribute("id", "unit" +i)
		let unitoption1 = document.createElement("OPTION");
		unitoption1.innerHTML = "Select unit";
		unitoption1.setAttribute("disabled", "true")
		let unitoption2 = document.createElement("OPTION")
		unitoption2.innerHTML = "1";
		let unitoption3 = document.createElement("OPTION")
		unitoption3.innerHTML = "2";
		let unitoption4 = document.createElement("OPTION")
		unitoption4.innerHTML = "3";
		let unitoption5 = document.createElement("OPTION")
		unitoption5.innerHTML = "4";
		let unitoption6 = document.createElement("OPTION")
		unitoption6.innerHTML = "6";
		
		
		let createPara2 = document.createElement("p");
		createPara2.innerHTML ="Unit" + i;
		//appending otpion to select
		unitSelect.appendChild(unitoption1)
		unitSelect.appendChild(unitoption2)
		unitSelect.appendChild(unitoption3)
		unitSelect.appendChild(unitoption4)
		unitSelect.appendChild(unitoption5)
		unitSelect.appendChild(unitoption6)
		

		courseUnit.appendChild(createPara2)
		courseUnit.appendChild(unitSelect)

	}
	let button =document.createElement("button");
	button.innerHTML = "Calculate";
	button.setAttribute("onclick", "Calculate()")
	main.appendChild(button)


}

const Calculate = ()=>{
	let gp = 0;
	let totalCredit = 0;
	let totalGp = 0;
	for (var i = 1; i <= noOfCourses; i++) {
		let courseGrade = document.getElementById("course" +i);
		let gradeValue = courseGrade.options[courseGrade.selectedIndex].text
		let courseUnit =document.getElementById("unit" +i);
		let unitValue = parseInt(courseUnit.options[courseUnit.selectedIndex].text)

		switch (gradeValue){
			case "A":
				gp+= 5*unitValue
				break
			case "B":
				gp+= 4*unitValue
				break
			case "C":
				gp+= 3*unitValue
				break
			case "D":
				gp+= 2*unitValue
				break
			case "E":
				gp+= 1*unitValue
				break
			case "F":
				gp+= 0*unitValue
				break
		}
		totalCredit+=unitValue
	}
	totalGp = (gp/totalCredit).toFixed(2);
	alert("Your CGPA is " +totalGp)
}
//  	alert("my button is working")
// }
