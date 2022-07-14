const name1Id = document.getElementById("name1");
const name2Id = document.getElementById("name2");
const name3Id = document.getElementById("name3");
const name4Id = document.getElementById("name4");

name1Id.style.cssText = `background: radial-gradient(white, blue, yellow);
border: solid black 1px;
border-radius:50%;
width:100px;
height:100px;`;
name2Id.innerHTML = `<ul> <li>Raziel Morad</li>
<li>0537227123</li>
<li>Rishon Lezzion</li>
<li>Male</li>
</ul>`;
const car = {
  title: "lamborgini",
  price: 200_000,
  hand: 2,
  km: 100_403,
  year: 2014,
};
name3Id.innerHTML = `<div class="card">
<div class="card-header">`+car.title+`
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">`+`car hand :`+car.hand+`</li>
  <li class="list-group-item">`+`price : `+car.price+`</li>
  <li class="list-group-item">`+`distance : `+car.km+`</li>
  <li class="list-group-item">`+`year : `+car.year+`</li>
</ul>
</div>`;
name3Id.style.cssText = `width : 200px`
name4Id.className = `bg-danger`

