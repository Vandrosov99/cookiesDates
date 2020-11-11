const inputLog = document.querySelector("#login");
const btn = document.querySelector("#auth");

btn.addEventListener("click", (e) => {
  const login = inputLog.value;
  console.log(`hello ${login} you are logged `);

  const date = getDate();
  getNumberDays("dateFirstTimeUsage", date);
  clearInput(inputLog);
});

function getDate() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  return today;
}

function getNumberDays(key, value) {
  const data = JSON.parse(localStorage.getItem(key));
  if (data) {
    const date1 = new Date(getDate());
    const date2 = new Date(data);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays);
  } else {
    console.log("You are first time here");
    localStorage.setItem(key, JSON.stringify(value));
  }
}

function clearInput(input) {
  input.value = "";
}
