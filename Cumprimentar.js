var nome = prompt ("Olá, como vc se chama?");
document.write(nome);
console.log(nome);
 
d = new Date();
hour = d.getHours();
if(hour < 6){
   document.write(" Boa noite");
   alert("Boa noite");
} else if(hour < 12){
   document.write(" Bom dia");
   alert("Bom dia");
} else if(hour < 18){
   document.write(" Boa tarde");
   alert("Boa tarde");
} else{
   document.write(" Boa noite");
   alert("Boa noite");
}