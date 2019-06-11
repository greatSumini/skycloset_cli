export default getHomeBgColor = () => {
    hour = new Date().getHours();
    if(hour>=5&&hour<8) // 새벽 [5, 8)
        return ['#00397B', '#CF8827'];
    if(hour>=8&&hour<11) // 아침 [8, 11)
        return ['#67D0F7', '#5C6AFF'];
    if(hour>=11&&hour<18) // 낮 [11, 18)
        return ['#FFC500', '#FF9500'];
    if(hour>=18&&hour<22) // 저녁 [18, 22)
        return ['#6904CF', '#F174D4'];
    if(hour>=22||hour<5) // 밤 [22, 5)
        return ['#08153B', '#2B4590'];
}