let manhinh = new Two({
    width : 1400,
    height : 400,
    type: Two.Types.canvas //Hiển thị bằng canvas
})
manhinh.appendTo(document.body)

let khunglong = manhinh.makeSprite('../img/khunglong.png', 50, 200)

let dat = manhinh.makeLine(0, 250, 1400, 250)

let xuongrong = manhinh.makeSprite('../img/xuongrong.png', 1400, 215) 

let may = manhinh.makeSprite('../img/may.png', 300, 70) 
let may_2 = manhinh.makeSprite('../img/may.png', 800, 40) 
// xuongrong.scale = 1.5  

// Tạo đối tượng văn bản để hiển thị thời gian chơi
let timeText = manhinh.makeText('Thời gian: 0s', 950, 350, {
    alignment: 'center',
    size: 30,
    fill: 'black'
});


document.addEventListener('keypress', function(event){
    if(event.key == ' ' && khunglong.position.y >= 200 || event.key == 'w' && khunglong.position.y >= 200){
        khunglong.position.y -= 220
    }
})
document.addEventListener('click', function(event){
    if(khunglong.position.y >= 200){
        khunglong.position.y -= 220
    }
})

let timeBatDau = Date.now();
function lapLai(){
   xuongrong.position.x -= 10
   if(khunglong.position.y <= 200){
        khunglong.position.y += 4
   } 

   if(xuongrong.position.x < 0){
        xuongrong.position.x = 1400
   }
   if(khunglong.position.x +35 > xuongrong.position.x  - 25 && khunglong.position.y + 35  > xuongrong.position.y - 35){
        manhinh.pause();
        alert('Game Over');
        location.reload();
   }
   //Tăng độ khó khi chơi được 1p
   let timeHienTai = Date.now();
   let timeChoi = (timeHienTai - timeBatDau);
   timeText.value = 'Thời gian: ' + timeChoi/1000 + 's'; // Cập nhật thời gian chơi hiển thị
   if(timeChoi >= 10000){
        xuongrong.position.x -= 10
        let xuongrong_2 = manhinh.makeSprite('../img/xuongrong.png', 700, 215) 
        xuongrong_2.position.x -= 15
   }

}
manhinh.play();
manhinh.bind('update', lapLai);


