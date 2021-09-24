var n=window.prompt("Enter the N")
var grid=[];
for(i=0;i<n;i++){
  grid[i]=[];
  for(j=0;j<n;j++){
    grid[i][j]=0;
    }
}
blankgrid=grid;

function setup() {
  createCanvas(1200, 1200);
  addnumber();
  addnumber();
}
function addnumber(){
  let options=[];
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      if(grid[i][j]===0){
        options.push({
          x:i,
          y:j
        });
      }
    }
  }
  if(options.lenght>0);
  let spot=random(options);
  let r=random(1);
  grid[spot.x][spot.y]=r>0.5?2:2;
}
function flipgrid(){
  for(let i=0;i<n;i++){
    grid[i].reverse();
  }
}
function keyPressed(){
  let flipped=false;
  if(keyCode===DOWN_ARROW){
    for(let i=0;i<n;i++){
      grid[i]=operate(grid[i]);
    }
  }else if(keyCode===UP_ARROW){
    flipgrid(grid);
    flipped=true;
  }
  flipgrid(grid);
  addnumber();
}
function operate(row){
  row=slide(row);
  return row;
}
function draw() {
  background(220);
  drawgrid();
  
}
function slide(row){
  let arr=row.filter(val => val);
  let missing=n-arr.length;
  let zeros=Array(missing).fill(0);
  arr=zeros.concat(arr);
  return arr;
}
function drawgrid(){
  let w=100;
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      noFill();
      strokeWeight(2);
      stroke(0);
      rect(i*w,j*w,w,w);
      let val=grid[i][j];
      if(grid[i][j]!==0){
        textAlign(CENTER,CENTER);
        textSize(64);
        fill(0);
        noStroke();
        text(val,i*w+w/2,j*w+w/2);
      }
    }
  }
}