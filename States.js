function States(name , points, wealth, stats){
this.name=name;
this.points=points;
this.wealth=wealth;
this.liberal=stats[0];
this.moderate=stats[1];
this.conservative=stats[2];
this.democrat=stats[3];
this.independent=stats[4];
this.republican=stats[5];
  
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
