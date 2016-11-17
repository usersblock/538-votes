function Issues(name, description, ropinion, rimportance, dopinion, dimportance, iopinion, iimportance){
this.name=name;
this.description=description;
this.ropinion=ropinion;
this.rimportance=rimportance;
this.dopinion=dopinion;
this.dimportance=dimportance;
this.iopinion=iopinion;
this.iimportance=iimportance;
  
this.getName=function(){
return this.name;
}
  
this.getDescription=function(){
return this.description;
}  
  
this.getRepublicanImportance=function(){
return this.rimportance;
}

this.getRepublicanOpinion=function(){
return this.ropinion
}

this.getDemocraticImportance=function(){
return this.dimportance
}

this.getDemocraticOpinion=function(){
return this.dopinion
}

this.getIndependentOpinion=function(){
return this.iopinion
}

this.getIndependentImportane=function(){
return this.iimportance
}
}
