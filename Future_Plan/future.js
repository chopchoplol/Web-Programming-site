var canvas = document.getElementById("planner");
var context = canvas.getContext("2d");

context.beginPath();
context.moveTo(750, 5);
context.lineTo(750, 1000);
context.strokeStyle = "gray";
context.lineWidth = 5;
context.stroke();



context.beginPath();
context.moveTo(750, 50);
context.lineTo(1050, 50);
context.strokeStyle = "gray";
context.stroke();

context.font = "25px Noto Sans KR";
context.fillStyle = "black";
context.textAlign = "left";
context.fillText("2024.06.21.", 950, 100);
context.fillText("SQLD 자격증 취득", 950, 130);

var img = new Image();
img.src = "images/datatest.png";
img.onload = function (){
    context.drawImage(img, 950, 150, 200, 80);
}

context.beginPath();
context.strokeStyle = "gray";
context.lineWidth = 5;
context.arc(1060, 50, 10, 0, 2*Math.PI, false);
context.stroke();



context.beginPath();
context.moveTo(750, 200);
context.lineTo(350, 200);
context.strokeStyle = "gray";
context.stroke();

context.font = "25px Noto Sans KR";
context.fillStyle = "black";
context.textAlign = "right";
context.fillText("2024.07.1. ~ 24.8.31.", 550,240);
context.fillText("취업동아리 빅데이터분석 멘토링", 550, 280);

var img2 = new Image();
img2.src = "images/kongju.png";
img2.onload = function (){
    context.drawImage(img2, 200, 300, 300, 80);
}

context.beginPath();
context.strokeStyle = "gray";
context.lineWidth = 5;
context.arc(340, 200, 10, 0, 2*Math.PI, false);
context.stroke();



context.beginPath();
context.moveTo(750, 350);
context.lineTo(1090, 350);
context.strokeStyle = "gray";
context.stroke();

context.font = "25px Noto Sans KR";
context.fillStyle = "black";
context.textAlign = "left";
context.fillText("2024.09.", 950, 390);
context.fillText("ADSP 자격증 취득", 950, 430);

var img = new Image();
img.src = "images/datatest.png";
img.onload = function (){
    context.drawImage(img, 950, 450, 200, 80);
}

context.beginPath();
context.strokeStyle = "gray";
context.lineWidth = 5;
context.arc(1100, 350, 10, 0, 2*Math.PI, false);
context.stroke();



context.beginPath();
context.moveTo(750, 500);
context.lineTo(450, 500);
context.strokeStyle = "gray";
context.stroke();

context.font = "25px Noto Sans KR";
context.fillStyle = "black";
context.textAlign = "right";
context.fillText("2025.06.", 550, 540);
context.fillText("정보처리기사 취득", 550, 580);

var img3 = new Image();
img3.src = "images/qnet.jpg";
img3.onload = function (){
    context.drawImage(img3, 250, 600, 200, 100);
}

context.beginPath();
context.strokeStyle = "gray";
context.lineWidth = 5;
context.arc(440, 500, 10, 0, 2*Math.PI, false);
context.stroke();



context.beginPath();
context.moveTo(750, 650);
context.lineTo(1150, 650);
context.strokeStyle = "gray";
context.stroke();

context.font = "25px Noto Sans KR";
context.fillStyle = "black";
context.textAlign = "left";
context.fillText("2024.09.", 950, 690);
context.fillText("빅데이터분석기사 취득", 950, 730);

var img3 = new Image();
img3.src = "images/qnet.jpg";
img3.onload = function (){
    context.drawImage(img3, 950, 750, 200, 100);
}

context.beginPath();
context.strokeStyle = "gray";
context.lineWidth = 5;
context.arc(1160, 650, 10, 0, 2*Math.PI, false);
context.stroke();


context.beginPath();
context.moveTo(750, 800);
context.lineTo(400, 800);
context.strokeStyle = "gray";
context.stroke();

context.font = "25px Noto Sans KR";
context.fillStyle = "black";
context.textAlign = "right";
context.fillText("~2025.12.", 550, 840);
context.fillText("Kaggle 데이터 공모전 참가", 550, 880);

var img4 = new Image();
img4.src = "images/kaggle.png";
img4.onload = function (){
    context.drawImage(img4, 250, 900, 200, 150);
}

context.beginPath();
context.strokeStyle = "gray";
context.lineWidth = 5;
context.arc(390, 800, 10, 0, 2*Math.PI, false);
context.stroke();