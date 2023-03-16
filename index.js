let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn"); //const and let are two types of variables; const is short for "constant"; this is a variable that is CONSTANT and its value cannot be reassigned. !!! If possible, use by default const. If not, use let. !!!
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += `
    <li>
    <a target='_blank' href='${myLeads[i]}'> 
    ${myLeads[i]}
    </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}
