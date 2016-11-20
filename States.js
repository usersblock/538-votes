/*stats-An array of statistics that will be derived from a single line of StatesInfo.csv.
Input:This constructor will take stats as a parameter.
Output:Will create an object with the variables of
(name,points,wealth,liberal,moderate,conservative,democrat,
independent,republican
) */
function States(stats){
this.name=stats[0];
this.points=stats[1];
this.wealth=stats[2];
this.liberal=stats[3];
this.moderate=stats[4];
this.conservative=stats[5];
this.democrat=stats[6];
this.independent=stats[7];
this.republican=stats[8];
  
//Output:Will return the name in String form.  
this.getName=function(){
return this.name;
}
//Output:Will return the points in Integer form.
this.getPoints=function(){
return this.points;
}
//Output:Will return the wealth in Integer form.
this.getWealth=function(){
return this.wealth;
}

/*Input:Will take the parameter change as an integer.
Output:Will change the wealth variable by "change" amount.*/
this.changeWealth=function(change){
this.wealth=this.wealth+change;
}
//Output:Will return the percentage of liberal voters in Integer form.
this.getLiberal=function(){
return this.liberal;
}

//Output:Will return the percentage of moderate voters in Integer form.
this.getModerate=function(){
return this.moderate;
}

//Output:Will return the percentage of conservative voters in Integer form.
this.getConservative=function(){
return this.conservative;
}

//Output:Will return the percentage of democrat voters in Integer form.
this.getDemocrat=function(){
return this.democrat;
}

//Output:Will return the percentage of independent voters in Integer form.
this.getIndependent=function(){
return this.independent;
}

//Output:Will return the percentage of republican voters in Integer form.
this.getRepublican=function(){
return this.republican;
}
}
