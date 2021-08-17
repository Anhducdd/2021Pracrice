const btnlamp = document.getElementById("item");
const thelamps = document.getElementById("lampitem")
const form1 = "form1";
const icon1 = "icon1";
const form2 = "form2";
const icon2 = "icon2";
const lampOff = "lampOff";
const lampOn = "lampOn";
let lampbtn =[];
function addlampbtn(id, name, status) {
    const formstatus = status ? form1 : "";
    const iconstatus = status ? icon1 : "";
    const lampstatus = status ? lampOn : lampOff;
    const element1 = `<li>
    <span>${name}</span>
    <span class="btnControl" id="${id}" onclick="changebtnstatus(${id}); changelampstatus(${id});">
        <div class="form ${formstatus}">
            <div class="icon ${iconstatus}"> 
            </div>
        </div> 
      </span>
      </li> 
    `;
    const key = 'beforeend';
    btnlamp.insertAdjacentHTML(key, element1);
    const element2 = `
    <li id="${id}" class="${lampstatus} text" status="${status}"></li>
    `;
    thelamps.insertAdjacentHTML(key, element2);
    lampbtn.push(
        {
            id : id,
            name : name,
            status :status
        }
    );

}
addlampbtn(0, "Lamp 1", false);
addlampbtn(1, "Lamp 2", false);



function changebtnstatus(id) {
  
    document.getElementById(id).querySelector(".form").classList.toggle(form1);
    document.getElementById(id).querySelector(".icon").classList.toggle(icon1);
    lampbtn[id].status = lampbtn[id].status ? false : true;


}
function changelampstatus(id){
  let me = thelamps.children[id]
  me.classList.toggle(lampOn);

}
