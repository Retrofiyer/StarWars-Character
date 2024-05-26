const fetchPeople = async () => {
      const response = await fetch("https://swapi.dev/api/people/");
      const data = await response.json();
      const results = data.results;
      results.forEach((person) => renderPerson(person));

  };
  
  const renderPerson = (person) => {
    const card = document.createElement("li");
    card.className = "card";
    card.innerHTML = `
      <h2>Name: ${person.name}</h2>
      <div class="content">
        <p>Mass: ${person.mass} Kgs</p>
        <p>Gender: ${person.gender}</p>
        <p>Height: ${person.height} cm</p>
        <p>Hair Color: ${person.hair_color}</p>
        <p>Skin Color: ${person.skin_color}</p>
      </div>`;
    document.getElementById("container").appendChild(card);
  };
  
  fetchPeople();
  