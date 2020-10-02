//first commit
    function showzodiac()
{
 var d,m,z;
 d=document.myform.date.value;
 m=document.myform.month.value;
 if(m==""){
        z = "Enter Valid Month";
 }
 if(d==""){
        z = "Enter Valid Date";
 }
 if(d>31){
        z = "Enter Valid Date";
 }
 if(m=="" && d==""){
        z = "Enter Valid Date and Month";
 }
 if(m=="january")
 {
 if(d<=19 && d>=1 )
 z="Capricon";
 else
 z="Aquarius";
 }
 if(m=="february")
 {
 if(d<=19 && d>=1)
 z="Aquarius";
 else
 z="Pisces";
 }
 if(m=="march")
 {
 if(d<=20 && d>=1)
 z="Pisces";
 else
 z="Aries";
 }
 if(m=="april")
 {
 if(d<=20 && d>=1)
 z="Aries";
 else
 z="Taurus";
 }
 if(m=="may")
 {
 if(d<=20 && d>=1)
 z="Taurus";
 else
 z="Gemini";
 }
 if(m=="june")
 {
 if(d<=20 && d>=1)
 z="Gemini";
 else
 z="Cancer";
 }
 if(m=="july")
 {
 if(d<=22 && d>=1)
 z="Cancer";
 else
 z="Leo";
 }
 if(m=="august")
 {
 if(d<=22 && d>=1)
 z="Leo";
 else
 z="Virgio";
 }
 if(m=="september")
 {
 if(d<=22 && d>=1)
 z="Virgo";
 else
 z="Libra";
 }
 if(m=="october")
 {
 if(d<=22 && d>=1)
 z="Libra";
 else
 z="Scorpio";
 }
 if(m=="november")
 {
 if(d<=22 && d>=1)
 z="Scorpio";
 else
 z="Sagattarius";
 }
 if(m=="december")
 {
 if(d<=21 && d>=1)
 z="Sagattarius";
 else
 z="Capricon";
 }
 document.myform.sign.value=z;
}
    