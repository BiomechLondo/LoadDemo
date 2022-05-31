

var BodyWeightValue;
var TorsoValue;
var getAge;
var gender;
var FemurValue;
var TibiaValue;

var tibifemoral_joint_max; 
var tibifemoral_joint_min;


var acetabulofemoral_joint_max; 
var acetabulofemoral_joint_min;

var glenohumeral_joint_max; 
var glenohumeral_joint_min;


var humeroradial_joint_max; 
var humeroradial_joint_min;

var talocrural_joint_max; 
var talocrural_joint_min;

var calf_weight;
var thigh_weight;
var torso_weight;
var forearm_weight;
var bicep_weight;
var head_weight;


var WeightValue;
var WeightValue_Squat;

var deadliftTibioLoad1;
var deadliftTaloLoad1;
var deadliftAcetabulLoad1;

var TotalDeadiftReps;
var TotalSquatReps;

var squatAcetabulLoad;
var x_squatHamstringForce;
var y_squatHamstringForce;

var squatTibioLoad;




function getgender()
        {
            var selectedgender;
            //var testif;

            document.getElementById('option1').innerHTML=(sex.genderselect[sex.genderselect.selectedIndex].text)
            selectedgender = document.getElementById('option1').innerHTML=(sex.genderselect[sex.genderselect.selectedIndex].text)

            if (selectedgender == "Male" ) { 
                
              //testif = 2;
            }else if (selectedgender == 'Female'){

             //testif = 0;
        

             
            }

            

        }


        function Age() {
            var ageValue = document.getElementById("age").value;
            document.getElementById("ageslidervalue").innerHTML = ageValue;
            console.log(ageValue);
        }

        function PersonalDimensions(){

            

            BodyWeightValue = document.getElementById("bodyWeight").value;
            document.getElementById("bodyWehightSliderValue").innerHTML = BodyWeightValue;

            var HumerusValue = document.getElementById("humerusLength").value;
            document.getElementById("HumerusSliderValue").innerHTML = HumerusValue;

            var ForearmValue = document.getElementById("forearmLength").value;
            document.getElementById("ForearmSliderValue").innerHTML = ForearmValue;

            TorsoValue = document.getElementById("torsoLength").value;
            document.getElementById("TorsoSliderValue").innerHTML = TorsoValue;

            FemurValue = document.getElementById("femurLength").value;
            document.getElementById("FemurSliderValue").innerHTML = FemurValue;

            TibiaValue = document.getElementById("tibiaLength").value;
            document.getElementById("TibiaSliderValue").innerHTML = TibiaValue;

            gender = document.getElementById('option1').innerHTML;

            getAge = parseFloat(document.getElementById("ageslidervalue").innerHTML);


           


            
        }

        function JointRange(){
            PersonalDimensions();
            
            

            var bodyweight = BodyWeightValue;


            

            
            if ( getAge >= 2 &&  getAge <= 8 && gender == "Male") {
                tibifemoral_joint_max =  148;
                tibifemoral_joint_min = 2;

                humeroradial_joint_max = 151;
                humeroradial_joint_min = 2;

                acetabulofemoral_joint_max =  131;
                acetabulofemoral_joint_min = -28;

                talocrural_joint_max = 56;
                talocrural_joint_min = 23;

                glenohumeral_joint_max = 150;
                glenohumeral_joint_min = -30;

                torso_weight = .483 * bodyweight;
                thigh_weight = .105 * bodyweight;
                head_weight = .071 * bodyweight;
                calf_weight = .0450 * bodyweight;
                forearm_weight = .013 * bodyweight;
                bicep_weight = .0325 * bodyweight;

            }

            else if ( getAge >= 9 &&  getAge <= 19 && gender == "Male") {
                tibifemoral_joint_max =  142;
                tibifemoral_joint_min = 2;

                humeroradial_joint_max = 151;
                humeroradial_joint_min = 5;

                acetabulofemoral_joint_max =  135;
                acetabulofemoral_joint_min = -18;

                talocrural_joint_max = 53;
                talocrural_joint_min = 16;

                glenohumeral_joint_max = 150;
                glenohumeral_joint_min = -30;

                torso_weight = .483 * bodyweight;
                thigh_weight = .105 * bodyweight;
                head_weight = .071 * bodyweight;
                calf_weight = .0450 * bodyweight;
                forearm_weight = .013 * bodyweight;
                bicep_weight = .0325 * bodyweight;

            }

            else if ( getAge >= 20 &&  getAge <= 44 && gender == "Male") {
                tibifemoral_joint_max =  142;
                tibifemoral_joint_min = 1;

                humeroradial_joint_max = 145;
                humeroradial_joint_min = 1;

                acetabulofemoral_joint_max =  130;
                acetabulofemoral_joint_min = -17;

                talocrural_joint_max = 55;
                talocrural_joint_min = 13;

                glenohumeral_joint_max = 150;
                glenohumeral_joint_min = -30;

                torso_weight = .483 * bodyweight;
                thigh_weight = .105 * bodyweight;
                head_weight = .071 * bodyweight;
                calf_weight = .0450 * bodyweight;
                forearm_weight = .013 * bodyweight;
                bicep_weight = .0325 * bodyweight;

            }

            else if ( getAge >= 44 && gender == "Male") {
                tibifemoral_joint_max =  133;
                tibifemoral_joint_min = 1;

                humeroradial_joint_max = 144;
                humeroradial_joint_min = 1;

                acetabulofemoral_joint_max =  127;
                acetabulofemoral_joint_min = -14;

                talocrural_joint_max = 49;
                talocrural_joint_min = 12;

                glenohumeral_joint_max = 150;
                glenohumeral_joint_min = -30;

                torso_weight = .483 * bodyweight;
                thigh_weight = .105 * bodyweight;
                head_weight = .071 * bodyweight;
                calf_weight = .0450 * bodyweight;
                forearm_weight = .013 * bodyweight;
                bicep_weight = .0325 * bodyweight;

            }

            else if ( gender == "Male") {
                tibifemoral_joint_max =  133;
                tibifemoral_joint_min = 1;

                humeroradial_joint_max = 144;
                humeroradial_joint_min = 1;

                acetabulofemoral_joint_max =  127;
                acetabulofemoral_joint_min = -14;

                talocrural_joint_max = 49;
                talocrural_joint_min = 12;

                glenohumeral_joint_max = 150;
                glenohumeral_joint_min = -30;

                torso_weight = .483 * bodyweight;
                thigh_weight = .105 * bodyweight;
                head_weight = .071 * bodyweight;
                calf_weight = .0450 * bodyweight;
                forearm_weight = .013 * bodyweight;
                bicep_weight = .0325 * bodyweight;

            }



            document.getElementById("ageshow").innerHTML  = getAge;

            document.getElementById("gendershow").innerHTML  = gender;

            

        
        }

        

        function PreTableDisplay() {
            var SetsValue = document.getElementById("sets").value;
            document.getElementById("setSliderValue").innerHTML = SetsValue;

            var RepsValue = document.getElementById("reps").value;
            document.getElementById("repSliderValue").innerHTML = RepsValue;

            WeightValue = document.getElementById("weight").value;
            document.getElementById("weightSliderValue").innerHTML = WeightValue;


        }

        function addRow() {

         

       

            "use strict";
         
             var table = document.getElementById("table");
             
             var row= document.createElement("tr");
             console.log(row);
             var td1 = document.createElement("td");
             var td2 = document.createElement("td");
             var td3 = document.createElement("td");
             var td4 = document.createElement("td");    
         
             td1.innerHTML = document.getElementById("exercise").value;
             td2.innerHTML  = document.getElementById("sets").value;
             td3.innerHTML  = document.getElementById("reps").value;
             td4.innerHTML  = document.getElementById("weight").value;
         
             row.appendChild(td1);
             row.appendChild(td2);
             row.appendChild(td3);
             row.appendChild(td4);
         
             table.children[0].appendChild(row);

             var deadliftFemurStart = tibifemoral_joint_max;
             var deadliftTibiaStart = talocrural_joint_max;
             var deadliftBackStart = acetabulofemoral_joint_max;

             var deadliftFemurFinish = 0;
             var deadliftTibiaFinish = 0;
             var deadliftBackFinish = 0;

             var deadliftLatLoad = 0;
             var deadliftGluteLoad  = 0;
             var deadliftQuadLoad = 0;

            
             var deadliftAcetabulLoad2 = 0;
             var deadliftTibifemoralLoad  = 0;
             var deadlifTaloLoad = 0;

             var squatFemurStart = tibifemoral_joint_max;
             var squatTibiaStart = talocrural_joint_max;
             var squatBackStart = acetabulofemoral_joint_max;

             var squatFemurFinish = 0;
             var squatTibiaFinish = 0;
             var squatBackFinish = 0;

             var squatFemurStart = tibifemoral_joint_max;
             var squatTibiaStart = talocrural_joint_max;
             var squatBackStart = acetabulofemoral_joint_max;

             var BenchpresshumerusStart = glenohumeral_joint_max;
             var BenchpressforearmStart = humeroradial_joint_max;

             var OHpresshumerusStart = glenohumeral_joint_max;
             var OHforearmStart = humeroradial_joint_max;

             var OHpresshumerusFinish = 0;
             var OHforearmFinish = 0;

             
             

             if (td1.innerHTML == "Deadlift"){

                TotalDeadiftReps = td2.innerHTML * td3.innerHTML;

                deadliftFemurStart = deadliftFemurStart * (Math.PI/180);
                deadliftTibiaStart = .5 * deadliftTibiaStart * (Math.PI/180);
                deadliftBackStart = .40 * deadliftBackStart * (Math.PI/180);

                deadliftFemurFinish = .5 * deadliftFemurStart;
                deadliftTibiaFinish = 3.3 * (deadliftTibiaStart);
                deadliftBackFinish =  0 * deadliftBackStart;

                var deadliftLoadposition_start = 20 * (Math.PI/180);
                var deadliftLoadposition_finish = deadliftBackFinish;


                //Torque and Load on Hamstring/hip 

                deadliftAcetabulLoad1 = Math.round((((.5*TorsoValue*torso_weight)*(Math.sin(deadliftBackStart)-Math.sin(deadliftBackFinish)))*(deadliftLoadposition_start - deadliftLoadposition_finish)) + (((TorsoValue*head_weight)*(Math.sin(deadliftBackStart)-Math.sin(deadliftBackFinish)))*(deadliftLoadposition_start - deadliftLoadposition_finish))+((TorsoValue*WeightValue)*(-Math.cos(deadliftLoadposition_finish)+Math.cos(deadliftLoadposition_start)))+((TorsoValue*WeightValue)*(Math.sin(deadliftLoadposition_start+deadliftLoadposition_finish)-Math.sin(deadliftLoadposition_finish+deadliftLoadposition_finish)))) * TotalDeadiftReps;

                var y_deadlift_force_back1 = Math.abs(Math.round(((torso_weight*(Math.sin(deadliftBackStart)-Math.sin(deadliftBackFinish)))*(deadliftLoadposition_start - deadliftLoadposition_finish))+ (WeightValue * (-Math.cos(deadliftLoadposition_start) + Math.cos(deadliftLoadposition_finish))) + (WeightValue * (Math.sin(deadliftLoadposition_start+deadliftLoadposition_finish)-Math.sin(deadliftLoadposition_finish+deadliftLoadposition_finish)))));

                var x_deadlift_force_back1 = Math.abs(Math.round((WeightValue * (Math.sin(deadliftLoadposition_start-deadliftLoadposition_finish))) + (WeightValue * (Math.sin(deadliftLoadposition_start+deadliftLoadposition_finish)-Math.sin(deadliftLoadposition_finish+deadliftLoadposition_finish)))));

                var resultant_back_deadlift = Math.abs(Math.round(Math.sqrt(Math.pow(y_deadlift_force_back1,2) + Math.pow(x_deadlift_force_back1,2))));

                var resultant_angle1 = Math.abs(Math.round(Math.atan(y_deadlift_force_back1/x_deadlift_force_back1)));


                //Torque and Load on Glute/knee

                deadliftTibioLoad1 = Math.abs(Math.round((((x_deadlift_force_back1)*FemurValue)*(Math.sin(deadliftBackStart) - Math.sin(deadliftBackFinish)))-(((resultant_back_deadlift*Math.cos(resultant_angle1))*FemurValue)*(Math.cos(deadliftFemurStart+deadliftBackStart)-Math.cos(deadliftFemurFinish+deadliftBackFinish)))-(((.5*FemurValue*thigh_weight)*(Math.sin(deadliftFemurStart)-Math.sin(deadliftFemurFinish)))*(deadliftBackFinish-deadliftBackStart))))* TotalDeadiftReps;

  

                var x_deadlift_force_glute1 = Math.abs(Math.round((x_deadlift_force_back1)*(Math.sin(deadliftFemurStart)-Math.sin(deadliftFemurFinish))));

                var y_deadlift_force_glute1 = Math.abs(Math.round((y_deadlift_force_back1*(-Math.cos(deadliftFemurStart)+Math.cos(deadliftFemurFinish))) + ((thigh_weight)*(Math.sin(deadliftFemurStart)-Math.sin(deadliftFemurFinish)))));


                var resultant_glute_deadlift = Math.abs(Math.round(Math.sqrt(Math.pow(y_deadlift_force_glute1,2) + Math.pow(x_deadlift_force_glute1,2))));



                //Torque and Load on Quad/Ankle 

                deadliftTaloLoad1 = Math.abs(Math.round((((x_deadlift_force_glute1)*TibiaValue)*(Math.sin(deadliftTibiaStart) - Math.sin(deadliftTibiaFinish)))-(((x_deadlift_force_glute1)*TibiaValue)*(Math.cos(deadliftTibiaStart+deadliftFemurStart)-Math.cos(deadliftTibiaFinish+deadliftFemurFinish)))-(((.5*TibiaValue*calf_weight)*(Math.sin(deadliftTibiaStart)-Math.sin(deadliftTibiaFinish)))*(deadliftTibiaStart-deadliftTibiaFinish))))* TotalDeadiftReps;


                var x_deadlift_force_quad1 = Math.abs(Math.round((x_deadlift_force_glute1)*(Math.sin(deadliftTibiaStart)-Math.sin(deadliftTibiaFinish))));

                var y_deadlift_force_quad1 = Math.abs(Math.round((y_deadlift_force_glute1*(-Math.cos(deadliftTibiaStart)+Math.cos(deadliftTibiaFinish))) + ((calf_weight)*(Math.sin(deadliftTibiaStart)-Math.sin(deadliftTibiaFinish)))));

                var resultant_quad_deadlift = Math.abs(Math.round(Math.sqrt(Math.pow(y_deadlift_force_quad1,2) + Math.pow(x_deadlift_force_quad1,2))));

                




                

             }

             if (td1.innerHTML == "Squat"){

                TotalSquatReps = td2.innerHTML * td3.innerHTML;
                WeightValue_Squat = td4.innerHTML;

                squatFemurStart = squatFemurStart  * (Math.PI/180);
                squatTibiaStart = 1.6 * squatTibiaStart * (Math.PI/180);
                squatBackStart = squatBackStart * (Math.PI/180);

                squatFemurFinish = .6 * squatFemurStart;
                squatTibiaFinish = .75 * squatTibiaStart;
                squatBackFinish = .85 * squatBackStart;


                //Torque and force load at hip/Hamstring Squat

                squatAcetabulLoad = Math.abs(((((TorsoValue*head_weight) + (.5*TorsoValue*torso_weight))*Math.sin(squatBackStart-squatBackFinish))-((TorsoValue*WeightValue_Squat)*Math.cos(squatBackStart-squatBackFinish)))*TotalSquatReps);

                x_squatHamstringForce = Math.abs((((WeightValue_Squat)*Math.cos(squatBackStart-squatBackFinish))));

                y_squatHamstringForce = Math.abs(((((head_weight) + (torso_weight))*Math.sin(squatBackStart-squatBackFinish))+((WeightValue_Squat)*Math.cos(squatBackStart-squatBackFinish))));

                var squatHamstringResulatantAngle = Math.atan(y_squatHamstringForce/x_squatHamstringForce);

                //Torque and Load on Glute/Knees Squat

                squatTibioLoad =





                


                

                document.getElementById("SquatKneeStart").innerHTML = squatFemurStart;
                document.getElementById("SquatCalfStart").innerHTML = squatTibiaStart;
                document.getElementById("SquatBackStart").innerHTML = squatBackStart;
                
                document.getElementById("BenchShoulderStart").innerHTML = squatHamstringResulatantAngle;
                document.getElementById("BenchForearmStart").innerHTML = y_squatHamstringForce;
                document.getElementById("OHShoulderStart").innerHTML = squatAcetabulLoad;

             }

             if (td1.innerHTML == "Benchpress"){

                BenchpresshumerusStart = BenchpresshumerusStart * .67;
                BenchpressforearmStart = BenchpressforearmStart * .67;

                document.getElementById("BenchShoulderStart").innerHTML = BenchpresshumerusStart;
                document.getElementById("BenchForearmStart").innerHTML = BenchpressforearmStart;
                              

             }

             if (td1.innerHTML == "Overheadpress"){

                OHpresshumerusStart = OHpresshumerusStart * .8;
                OHforearmStart = OHforearmStart * 1;

                OHpresshumerusFinish = OHpresshumerusStart * .2;
                OHforearmFinish = OHforearmStart * .1;

                document.getElementById("OHShoulderStart").innerHTML = OHpresshumerusStart;
                document.getElementById("OHForearmStart").innerHTML = OHforearmStart;
                               

             }


         }

         function myFunction() {
            document.getElementById("table").deleteRow(1);
          }

          function TotalReps(){

            PreTableDisplay();

            var TotalSquatReps;
            var TotalBenchReps;
            var TotalOHPressReps;
            var TotalDeadiftReps;

            if(td1.innerHTML == "Deadlift"){
                TotalDeadiftReps = td2.innerHTML * td3.innerHTML;
            }

            if(td1.innerHTML == "Squat"){
                TotalSquatReps = td2.innerHTML * td3.innerHTML;
            }

            if(td1.innerHTML == "Benchpress"){
                TotalBenchReps = td2.innerHTML * td3.innerHTML;
            }

            if(td1.innerHTML == "Overheadpress"){
                TotalOHPressReps = td2.innerHTML * td3.innerHTML;
            }



          }

          

          
  
            

            

        