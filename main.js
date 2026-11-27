const chartInfo = {
 avoidance: {title:"Avoidance",description:"Avoidance means not undertaking or abandoning a loss exposure. Examples include locating a facility outside a flood zone or withdrawing a product with dangerous side effects. It eliminates the exposure where feasible.",style:"radar"},
 lossPrevention: {title:"Loss prevention",description:"Loss prevention reduces the frequency of a particular loss. Examples include driver training, prohibiting alcohol or drug use while driving, and enforcing safety rules.",style:"line"},
 lossReduction: {title:"Loss reduction",description:"Loss reduction reduces the severity of a loss after it occurs. Examples include automatic sprinklers, first-aid equipment, and emergency response procedures.",style:"bar"},
 duplication: {title:"Duplication",description:"Duplication keeps backups or copies of important property or information available if the original is lost. Examples include spare tires and duplicate business records.",style:"doughnut"},
 separation: {title:"Separation",description:"Separation divides assets exposed to loss so one event cannot damage everything at once. For example, fire-resistant factory sections can prevent a fire spreading throughout a facility.",style:"polarArea"},
 diversification: {title:"Diversification",description:"Diversification spreads exposure across different parties, securities, suppliers, or transactions. Using several suppliers reduces dependence on one supplier.",style:"pie"}
};

const examples = {
  avoidance: {type:"radar",data:{labels:["Flood exposure","Hazardous inventory","Unsafe location"],datasets:[{label:"Exposure eliminated",data:[85,70,95],backgroundColor:"rgba(23,105,224,.2)",borderColor:"#1769e0"}]},options:{responsive:true,maintainAspectRatio:false,scales:{r:{beginAtZero:true,max:100}}}},
  lossPrevention: {type:"bar",data:{labels:["Driver training","No alcohol or drugs","Safety rules"],datasets:[{label:"Before",data:[80,90,65],backgroundColor:"#9bbce9"},{label:"After",data:[35,20,30],backgroundColor:"#1769e0"}]},options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true}}}},
  lossReduction: {type:"doughnut",data:{labels:["Fire damage","Sprinklers","First aid","Fire service"],datasets:[{label:"Loss severity share",data:[30,25,20,25],backgroundColor:["#d65a5a","#1769e0","#4f9b78","#e8b65b"]}]},options:{responsive:true,maintainAspectRatio:false}},
  duplication: {type:"scatter",data:{datasets:[{label:"Backup availability",data:[{x:10,y:20},{x:15,y:20},{x:50,y:40},{x:65,y:70}],backgroundColor:"#1769e0"}]},options:{responsive:true,maintainAspectRatio:false,scales:{x:{title:{display:true,text:"Storage location"}},y:{title:{display:true,text:"Availability"}}}}},
  separation: {type:"bar",data:{labels:["January","February","March"],datasets:[{label:"Section 1",data:[40,100,30],backgroundColor:"#1769e0"},{label:"Section 2",data:[20,50,10],backgroundColor:"#8ab2e8"}]},options:{responsive:true,maintainAspectRatio:false,scales:{x:{stacked:true},y:{stacked:true}}}},
  diversification: {type:"bubble",data:{datasets:[{label:"Stocks",data:[{x:20,y:10,r:7},{x:22,y:12,r:5}],backgroundColor:"#1769e0"},{label:"Bonds",data:[{x:50,y:40,r:4},{x:60,y:22,r:6}],backgroundColor:"#69a98b"}]},options:{responsive:true,maintainAspectRatio:false}}
 };
