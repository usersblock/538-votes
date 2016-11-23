function CreateNominee(stats){
var Nom=new Nominee(stats);
var WordSpace=document.getElementById("DATATEST1");
WordSpace.innerHTML=Nom.getName()+
"</br>party="+Nom.getParty()
+"</br>state="+Nom.getState()
+"</br>liberal="+Nom.getLiberalAppeal()
+"</br>nmoderate="+Nom.getModerateAppeal()
+"</br>conservative="+Nom.getConservativeAppeal()
+"</br>charisma="+Nom.charisma
+"</br>appearance="+Nom.appearance
+"</br>credibility="+Nom.credibility
+"</br>experience="+Nom.experience
+"</br>intelligence="+Nom.intelligence
+"</br>mediabias="+Nom.mediabias
+"</br>minorityappeal="+Nom.minorityappeal
+"</br>religious="+Nom.religious
+"</br>fundraising="+Nom.fundraisingability
+"</br>stamina="+Nom.stamina
+"</br>funds="+Nom.funds;
}
CreateNominee(["Hillary","Clinton",1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
