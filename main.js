document.getElementById('enter').onclick = () => {

  const PEOPLE = document.getElementById('person').value;
  const REGION = document.getElementById('region').value;
  let people = [];
  let dive = document.getElementById('div');
  dive.innerHTML = '';

  fetch(`https://cors-anywhere.herokuapp.com/https://uinames.com/api/?amount=${PEOPLE}&region=${REGION}`)
    .then(response => response.json())
    .then(response => {
      people = response; 

      fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=${PEOPLE}&urls=true`)
        .then(response => response.json())
        .then(response =>  {
          for (let x = 0; x < PEOPLE; x++) { 
            let container = document.createElement("div");
            dive.appendChild(container);
            container.style.border = '4px solid black';

            let names = document.createElement('p');
            names.innerText = `Name :${people[x].name}`;
            
            let surnames = document.createElement('p');
            surnames.innerText = `Surnames :${people[x].surname}`;

            let genders = document.createElement('p');
            genders.innerText = `Genders :${people[x].gender}`;

            let regn = document.createElement('p');
            regn.innerText = `Region :${people[x].region}`;

            let img = document.createElement('img');
            img.src = response[x];
            
            container.appendChild(img);
            container.appendChild(names);
            container.appendChild(surnames);
            container.appendChild(genders);
            container.appendChild(regn);
          }
        });
    });
};