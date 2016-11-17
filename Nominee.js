function person(first, last, party, state, stats){
this.firstname=first;
this.lastname=last;
this.party=party;
this.state=state;
this.liberal=0;
this.moderate=0;
this.conservative=0;
this.charisma=stats[0];
this.appearance=stats[1];
this.credibility=stats[2]
this.experience=stats[3];
this.intelligence=stats[4];
this.mediabias=stats[5];
this.minorityappeal=stats[6];
this.religious=stats[7];
this.fundraisingability=stats[8];
this.stamina=stats[9];
this.funds=stats[10];

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
