
function quiz(q, n, a, b, c, d) {
  let div1 = document.getElementsByClassName("tests");
  let divv = document.createElement("div");
  divv.className = 'test';

  let p1 = document.createElement("p");
  p1.textContent = q;

  let in1 = document.createElement('input');
  in1.type = "radio";
  in1.name = n;
  in1.value = a;

  let label1 = document.createElement("label");
  label1.textContent = a;

  let br = document.createElement("br");

  let in2 = document.createElement('input');
  in2.type = "radio";
  in2.name = n;
  in2.value = b;

  let label2 = document.createElement("label");
  label2.textContent = b;

  let br2 = document.createElement("br");

  let br1 = document.createElement("br");
  let in3 = document.createElement('input');
  in3.type = "radio";
  in3.name = n;
  in3.value = c;

  let label3 = document.createElement("label");
  label3.textContent = c;

  let in4 = document.createElement('input');
  in4.type = "radio";
  in4.name = n;
  in4.value = d;

  let label4 = document.createElement("label");
  label4.textContent = d;

  let pp = document.createElement('p');
  pp.className = "answer";

  let hr = document.createElement('hr');

  
  div1[0].appendChild(divv);
  divv.appendChild(p1);
  divv.appendChild(in1);
  divv.appendChild(label1);
  divv.appendChild(br1);
  divv.appendChild(in2);
  divv.appendChild(label2);
  divv.appendChild(br2);
  divv.appendChild(in3);
  divv.appendChild(label3);
  divv.appendChild(br);
  divv.appendChild(in4);
  divv.appendChild(label4);
  divv.appendChild(pp);
  divv.appendChild(hr);
}
document.addEventListener('DOMContentLoaded', function() {
quiz("2. Which actor played the character Tony Stark in the Marvel Cinematic Universe?", "nb2", "Chris Hemsworth", "Chris Evans", "Robert Downey Jr.", "Mark Ruffalo");

quiz("3. Which movie won the Academy Award for Best Picture in 2020?", "nb3", "Parasite", "Joker", "Once Upon a Time in Hollywood", "1917");

quiz("4. In the movie 'The Lord of the Rings: The Fellowship of the Ring,' who is the actor that portrays the character Frodo Baggins?", "nb4", "Elijah Wood", "Daniel Radcliffe", "Rupert Grint", "Tom Holland");

quiz("5. Which film features the character Hannibal Lecter?", "nb5", "The Silence of the Lambs", "Psycho", "Se7en", "Fight Club");
});
function done() {
  let radioGroups = document.getElementsByClassName("test");
  let allChecked = true;

  for (let i = 0; i < radioGroups.length; i++) {
    let radioGroup = radioGroups[i].querySelectorAll('input[type="radio"]');
    let checked = false;

    for (let j = 0; j < radioGroup.length; j++) {
      if (radioGroup[j].checked) {
        checked = true;
        break;
      }
    }

    if (!checked) {
      allChecked = false;
      break;
    }
  }

  if (allChecked) {
    let grade = 0;

    let selectedValue1 = document.querySelector('input[name="nb1"]:checked').value;
    let selectedValue2 = document.querySelector('input[name="nb2"]:checked').value;
    let selectedValue3 = document.querySelector('input[name="nb3"]:checked').value;
    let selectedValue4 = document.querySelector('input[name="nb4"]:checked').value;
    let selectedValue5 = document.querySelector('input[name="nb5"]:checked').value;

    let ans1 = document.getElementsByClassName('answer')[0];
    let ans2 = document.getElementsByClassName('answer')[1];
    let ans3 = document.getElementsByClassName('answer')[2];
    let ans4 = document.getElementsByClassName('answer')[3];
    let ans5 = document.getElementsByClassName('answer')[4];

    if (selectedValue1 === 'Frank Darabont') {
      ans1.style.color = 'green';
      ans1.innerHTML = 'Correct answer';
      grade = grade + 1;
    } else {
      ans1.style.color = 'red';
      ans1.innerHTML = 'Wrong answer';
    }

    if (selectedValue2 === 'Robert Downey Jr.') {
      ans2.style.color = 'green';
      ans2.innerHTML = 'Correct answer';
      grade = grade + 1;
    } else {
      ans2.style.color = 'red';
      ans2.innerHTML = 'Wrong answer';
    }
    if(selectedValue3 === 'Parasite'){
        ans3.style.color = 'green';
        ans3.innerHTML='Correct answer';
        grade = grade + 1;
    } else{
        ans3.style.color = 'red';
      ans3.innerHTML = 'Wrong answer';
    }

    if(selectedValue4 === 'Elijah Wood'){
        ans4.style.color = 'green';
        ans4.innerHTML='Correct answer';
        grade = grade + 1;
    } else{
        ans4.style.color = 'red';
      ans4.innerHTML = 'Wrong answer';
    }
    if(selectedValue5 === 'The Silence of the Lambs'){
        ans5.style.color = 'green';
        ans5.innerHTML='Correct answer';
        grade = grade + 1;
    } else{
        ans5.style.color = 'red';
      ans5.innerHTML = 'Wrong answer';
    } 
    let  gg=  document.getElementsByClassName('grades')[0]
if(grade >= 4){
 gg.style.color = 'white';

    gg.innerHTML ='you got :'+grade+'/5';
}
if(grade==3){
    gg.style.color = 'white';
    gg.innerHTML ='you got : '+grade+'/5';
}
if(grade<3){
    gg.style.color = 'white';
    gg.innerHTML ='you failed, you got :  '+grade+'/5';
}

    // Update the code for the remaining questions in a similar manner

    console.log("All radio groups are checked. Process the quiz answers here.");
  } else {
    console.log("Please answer all questions before submitting.");
  }

  
}

 