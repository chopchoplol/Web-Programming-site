var companies = [
    {   
        logo: "https://hrimg.nexon.com/images/career_imgs/upload/careerimage/61297511-067f-4f43-9eaa-a8c74ed0168d.png",
        url: "https://mintrocketgames.com/ko/about",
        name: "Mint Rocket",
        gamelogo: "https://cdn.newsfreezone.co.kr/news/photo/202212/427681_403107_4029.jpg",
        game: "Dave the Diver",
        description: "민트로켓은 기존과 다른 색다른 게임 개발을 목표로 하는 넥슨의 서브 브랜드입니다.대표작 <데이브 더 다이버>에 이어 글로벌에서 폭넓게 사랑 받을 수 있는 작품 개발을 위해 몰두하는 열정적인 사람들이 많은 조직 입니다.",
        gamedescription: "<민트로켓>의 신비한 블루홀을 배경으로 한 해양 어드벤처 게임 [데이브 더 다이버]에 오신 것을 환영합니다.주인공 데이브와 함께 아름다운 바닷속을 탐험하고 블루홀에 얽힌 비밀을 파헤쳐 보세요."
    },
    {
        logo: "https://file.gamejob.co.kr/net/Corp/CoImage/LogoView?FN=2022/6/GJ_CoLogo_25767582.jpg",
        url: "https://southpaw.games/",
        name: "사우스포게임즈(주)",
        gamelogo: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1147560/capsule_616x353.jpg?t=1703635596",
        game: "Skul:the Hero Slayer",
        description: "사우스포게임즈는 PC/Console 액션게임 개발사입니다.대표작 <Skul the Hero Slayer>는 전세계 100만명의 게이머들이 즐기는 국내 인디게임 최초의 밀리언셀러입니다.세계 최고의 액션게임 브랜드를 목표로 성장과 변화를 함께할 당신을 찾습니다.",
        gamedescription: "Skul: The Hero Slayer는 <사우스포게임즈>의 2D 로그라이트 액션 플랫포머 게임입니다.마왕성 경비를 맡고있는 꼬마 스켈레톤 ‘스컬’은 인간들에게 붙잡혀간 마왕을 구하기 위해 용사와 모험가 그리고 제국군에 홀로 맞서 싸우기 시작합니다.스컬을 도와 마왕을 구출해보세요!"
    },
];

var companyList = document.getElementById("companyList");

var keys = Object.keys(localStorage);

keys.forEach(key => {
    const value = JSON.parse(localStorage.getItem(key));
    if (companies.indexOf(value) === -1) {
        companies.push(value);
    }
});

for(var i = 0; i<companies.length ;i++){
    var companyDiv = document.createElement("div");
    companyDiv.className = "companyContents";

    var companyLogo = document.createElement("img");
    companyLogo.src = companies[i].logo;
    companyLogo.alt = companies[i].name + "logo";

    var companyUrl = document.createElement("a");
    companyUrl.href = companies[i].url;

    var companyName = document.createElement("h1");
    companyName.innerHTML = companies[i].name;

    var representativeGame = document.createElement("h2");
    representativeGame.innerHTML = "대표게임 : ";

    var companyGameLogo = document.createElement("img");
    companyGameLogo.src = companies[i].gamelogo;
    companyGameLogo.alt = companies[i].game + "logo";

    var companyGame = document.createElement("h3");
    companyGame.innerHTML = companies[i].game;

    var sub = companies[i].description.split(".");
    var sub2 = companies[i].gamedescription.split(".");

    var companyDescription = document.createElement("p");
    for(var j = 0; j<sub.length ; j++){
        if (sub[j] && sub[j].trim().length > 0) {
            companyDescription.innerHTML += sub[j].trim() + (j < sub.length - 1 ? ".<br>" : ".");
        }
    }

    var gameDescription = document.createElement("p");
    for(var j = 0; j<sub.length ; j++){
        if (sub2[j] && sub2[j].trim().length > 0) {
            gameDescription.innerHTML += sub2[j].trim() + (j < sub2.length - 1 ? ".<br>" : ".");
        }
    }

    var br = document.createElement("br")
    var hr = document.createElement("hr");


    companyDiv.appendChild(companyUrl);
    companyUrl.appendChild(companyLogo);
    companyDiv.appendChild(companyName);
    companyDiv.appendChild(companyDescription);
    companyDiv.appendChild(representativeGame);
    companyDiv.appendChild(companyGameLogo);
    companyDiv.appendChild(companyGame);
    companyDiv.appendChild(gameDescription);

    companyList.appendChild(companyDiv);
    companyList.appendChild(br);
    companyList.appendChild(hr);
};


var addbtn = document.getElementById("addbtn");
var inputcompany = document.getElementById("inputcompany");

addbtn.addEventListener("click", getpage);

function getpage(){
    if(inputcompany.style.display === 'none'){
        inputcompany.style.display = 'block';
    } else{
        inputcompany.style.display = 'none';
    }
}

var ximg = document.getElementById("closePage");

ximg.addEventListener("click", getpage);

var check = document.getElementById("addcombtn");

check.addEventListener("click", function(event) {
    event.preventDefault();

    var inputimage = document.getElementById("inputimage");
    var inputurl = document.getElementById("inputurl");
    var inputname = document.getElementById("inputname");
    var companydescription = document.getElementById("companydescription");
    var gamelogo = document.getElementById("gamelogo");
    var inputGameName = document.getElementById("inputGameName");
    var gamedes = document.getElementById("gamedescription");

    var whatcompany = {};
    
    whatcompany.logo = inputimage.value;
    whatcompany.url = inputurl.value;
    whatcompany.name = inputname.value;
    whatcompany.gamelogo = gamelogo.value;
    whatcompany.game = inputGameName.value;
    whatcompany.description = companydescription.value;
    whatcompany.gamedescription = gamedes.value;

    localStorage.setItem(String(inputname.value), JSON.stringify(whatcompany));

    location.reload();

    alert("등록에 성공하였습니다.");
});