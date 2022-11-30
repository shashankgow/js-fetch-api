(() => {
  fetchAllUsers();
})();
 function fetchAllUsers() {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      
      data.data.forEach((element) => {
        // console.log(element);
        var card = `<div class="card mt-5" style="width: 18rem">
        <img class="card-img-top" src=${element.avatar} alt="Card image cap" />
        <div class="card-body">
          <p class="card-text">
           ${element.first_name}
           ${element.last_name}
           ${element.email}        
          </p>
        </div>
      </div>`;
        let section = document.getElementById("arrayid");
        var div = document.createElement("div");
        div.setAttribute("class", "col-4")
        div.innerHTML = card;
        section.appendChild(div);
      });
    });
}
