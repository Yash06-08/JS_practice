  document.getElementById("body").style.backgroundColor="lightblue"
let table=document.createElement("table");
for(let i=0;i<3;i++){
let row=table.insertRow();
for(let j=0;j<3;j++){
let cell=row.insertCell();
cell.innerText=`${i},${j}`;
}
}
document.getElementById("tbl").appendChild(table);