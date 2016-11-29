var HEADQUARTERS=[["Campaign headquarters",10000,1,0,0,10]
["Campaign headquarters",30000,2,0,0,15]
["Campaign headquarters",90000,3,0,0,999]];

var OFFICE=[["Consulting office",0,0,1,0,0]
["Consulting office",0,0,3,0,0]
["Consulting office",0,1,7,0,0]];

var CENTER=[["Outreach center",0,0,0,1,0]
["Outreach center",0,1,0,3,0]
["Outreach center",0,2,0,7,0]];
function Building(){
this.Name=""
this.FundsperWeek=0;
this.AwarenessperWeek=0;
this.PCperWeek=0;
this.PRCloutperWeek=0;
this.IssuesUnlocked=0;
this.Level=0;
this.SetBuilding=new function(type){
if(type==0){
  this.Name=HEADQUARTERS[this.Level][0];
  this.FundsperWeek=HEADQUARTERS[this.Level][1];
  this.AwarenessperWeek=HEADQUARTERS[this.Level][2];
  this.PCperWeek=HEADQUARTERS[this.Level][3];
  this.PRCloutperWeek=HEADQUARTERS[this.Level][4];
  this.IssuesUnlocked=HEADQUARTERS[this.Level][5];
  }
if(type==1){
  this.Name=OFFICE[0][0];
  this.FundsperWeek=OFFICE[this.Level][1];
  this.AwarenessperWeek=OFFICE[this.Level][2];
  this.PCperWeek=OFFICE[this.Level][3];
  this.PRCloutperWeek=OFFICE[this.Level][4];
  this.IssuesUnlocked=OFFICE[this.Level][5];
  }
if(type==2){
  this.Name=CENTER[this.Level][0];
  this.FundsperWeek=CENTER[this.Level][1];
  this.AwarenessperWeek=CENTER[this.Level][2];
  this.PCperWeek=CENTER[this.Level][3];
  this.PRCloutperWeek=CENTER[this.Level][4];
  this.IssuesUnlocked=CENTER[this.Level][5];
  }
}
this.ChangeLevel=new function(change){
if((this.Level+change)>-1&&(this.Level+change)<2){
this.Level=this.Level+change;}
}
}
