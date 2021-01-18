
const table =document.getElementById("table");
let selectedColor="";
let columns=2;
let mouseHold=false;

function addRow(){
  
const newRow=document.createElement("tr");
newRow.classList.add("row");
table.appendChild(newRow);

let allCells=document.querySelectorAll(".cell");
let totalCells=allCells.length; 

for (let i=0; i<columns; i++ ){
    let cell=document.createElement("td");
    cell.classList.add("cell");

    let cellId=totalCells+i+1;
    cell.setAttribute("id", cellId);
    cell.onclick=()=>addColor(cell.id);

    cell.addEventListener("mousedomn", function(){
      mouseHold=true;
  })
  cell.addEventListener("mousemove", function(){
    if(mouseHold===true){
     cell.style.backgroundColor=selectedColor;
    }
 })
 cell.addEventListener("mouseup", function(){
   mouseHold===false;
})

    newRow.appendChild(cell);

}
}
function addColumn(){
    columns++;
   let row=document.getElementsByClassName("row");
   let allCells=document.querySelectorAll(".cell");
   let totalCells=allCells.length; 

   for (let i=0; i<row.length;i++){
   let cell=document.createElement("td");
   cell.classList.add("cell");

   let cellId=totalCells+i+1;
   cell.setAttribute("id", cellId);

   cell.onclick=()=>addColor(cell.id);

   cell.addEventListener("mousedomn", function(){
       mouseHold=true;
   })
   cell.addEventListener("mousemove", function(){
     if(mouseHold===true){
      cell.style.backgroundColor=selectedColor;
     }
  })
  cell.addEventListener("mouseup", function(){
    mouseHold===false;
 })
   

   row[i].appendChild(cell);
   }
}




function removeRow(){
const allRows=document.querySelectorAll("tr");
const lastRow=allRows[allRows.length-1];
lastRow.remove();
}

 function removeColumn(){
  columns--;
  let rows=document.getElementsByClassName("row");
  for (let i=0; i<rows.length; i++){
    rows[i].removeChild(rows[i].lastChild);
  }
 }
 function selectColor(color){
  selectedColor=color;
 }

//addColor(color)=>
function addColor(id){
  let selectedCell=document.getElementById(id);
  selectedCell.style.backgroundColor=selectedColor;
}

function colorAllUncoloredCells(){
  let allCells=document.getElementsByClassName("cell");
  for (let i=0;i<allCells.length;i++){
    let curCell=allCells[i];
        if (curCell.style.backgroundColor===""){
          curCell.style.backgroundColor=selectedColor;
        }
  }
}
function fillAllCells(){
  let allCells=document.getElementsByClassName("cell");
  for (let i=0;i<allCells.length;i++){
    let curCell=allCells[i];
    curCell.style.backgroundColor=selectedColor;
  }
}
function clearAllCells(){
  let allCells=document.getElementsByClassName("cell");
  for (let i=0;i<allCells.length;i++){
    let curCell=allCells[i];
    curCell.style.backgroundColor="";
  }
}

function mouseDown(id){
mouseHold=true;
}
function mouseMove(id){
  if(mouseHold==true){
    let cell=document.getElementById(id);
    cell.style.backgroundColor=selectedColor;
  }

}
function mouseUp(){
  mouseHold=false;
}


