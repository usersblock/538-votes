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
  
this.getName=function(){
return this.name;
}

this.getPoints=function(){
return this.points;
}

this.getWealth=function(){
return this.wealth;
}

this.changeWealth=function(change){
this.wealth=this.wealth+change;
}

this.getLiberal=function(){
return this.liberal;
}

this.getModerate=function(){
return this.moderate;
}

this.getConservative=function(){
return this.conservative;
}

this.getDemocrat=function(){
return this.democrat;
}

this.getIndependent=function(){
return this.independent;
}

this.getRepublican=function(){
return this.republican;
}
}
