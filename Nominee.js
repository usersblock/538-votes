function person(stats){
this.firstname=stats[0];
this.lastname=stats[1];
this.party=stats[2];
this.state[stats[3];
this.liberal=0;
this.moderate=0;
this.conservative=0;
this.charisma=stats[4];
this.appearance=stats[5];
this.credibility=stats[6]
this.experience=stats[7];
this.intelligence=stats[8];
this.mediabias=stats[9];
this.minorityappeal=stats[10];
this.religious=stats[11];
this.fundraisingability=stats[12];
this.stamina=stats[13];
this.funds=stats[14];

this.getName= function(){
return(this.firstname+" "+this.lastname);
}

this.getParty=function(){
return this.party;
}

this.getState=function(){
return this.state;
}

this.getLiberalAppeal(){
return this.liberal;
}

this.changeLiberalAppeal=function(change){
this.liberal=this.liberal+change;  
  
this.getModerateAppeal(){
return this.moderate;
}
this.changeModerateAppeal=function(change){
this.moderate=this.moderate+change;
}    
this.getConservativeAppeal(){
return this.conservative;
}

this.changeConservativeAppeal=function(change){
this.conservative=this.conservative+change;
}  
}
