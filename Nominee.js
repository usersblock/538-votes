/*stats-An array of statistics that will be derived from a single line of NomineesInfo.csv.
Input:This constructor will take stats as a parameter.
Output:Will create an object with the variables of 
(firstname,lastname,party,state,liberal,
moderate,conservative,charisma,appearance,
credibility,experience,intelligence,mediabias,
minorityappeal,religious,fundraisingability,
stamina,funds)
*/



function Nominee(stats){
this.firstname=stats[0];
this.lastname=stats[1];
this.party=stats[2];
this.state=stats[3];
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
//Output:Will return the firstname and lastname in String form.
this.getName= function(){
return(this.firstname+" "+this.lastname);
}
//Output:Will return the party in String form.
this.getParty=function(){
return this.party;
}

//Output:Will return the nominee's home state in String form.
this.getState=function(){
return this.state;
}

//Output:Will return the liberal appeal in integer form.
this.getLiberalAppeal=function(){
return this.liberal;
}
/*Input:Will take an integer change.
Output:Will change the liberal variable by "change" amount.*/
this.changeLiberalAppeal=function(change){
this.liberal=this.liberal+change;  
}
//Output:Will return the moderate appeal in integer form.  
this.getModerateAppeal=function(){
return this.moderate;
}
/*Input:Will take an integer change.
Output:Will change the moderate variable by "change" amount.*/  
this.changeModerateAppeal=function(change){
this.moderate=this.moderate+change;
}

//Output:Will return the conservative appeal in integer form.
this.getConservativeAppeal=function(){
return this.conservative;
}
/*Input:Will take an integer change.
Output:Will change the conservative variable by "change" amount.*/
this.changeConservativeAppeal=function(change){
this.conservative=this.conservative+change;
}  
}
