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

        function JointRange(){
            var gender = document.getElementById('option1').innerHTML;

            var getAge = parseFloat(document.getElementById("ageslidervalue").innerHTML);

            var tibifemoral_joint_max = 0; 
            var tibifemoral_joint_min = 0;
            

            var acetabulofemoral_joint_max = 0; 
            var acetabulofemoral_joint_min = 0;
            
            var glenohumeral_joint_max = 0; 
            var glenohumeral_joint_min = 0;
            

            var humeroradial_joint_max = 0; 
            var humeroradial_joint_min = 0;
            
            var talocrural_joint_max = 0; 
            var talocrural_joint_min = 0;
            

            
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

            }



            
            var tibifemoral_joint_range = tibifemoral_joint_max - tibifemoral_joint_min;
            var acetabulofemoral_joint_range = acetabulofemoral_joint_max - acetabulofemoral_joint_min; 
            var glenohumeral_joint_range = glenohumeral_joint_max - glenohumeral_joint_min;
            var humeroradial_joint_range = humeroradial_joint_max - humeroradial_joint_min;
            var talocrural_joint_range = talocrural_joint_max - talocrural_joint_min;



            
          

            
        


            document.getElementById("ageshow").innerHTML  = getAge;

            document.getElementById("gendershow").innerHTML  = gender;

            document.getElementById("joint1").innerHTML  = tibifemoral_joint_max;

            document.getElementById("joint2").innerHTML  = acetabulofemoral_joint_max;

            document.getElementById("joint3").innerHTML  = glenohumeral_joint_max;

            document.getElementById("joint4").innerHTML  = humeroradial_joint_max;

            document.getElementById("joint5").innerHTML  = talocrural_joint_max;

        
        }

        function PersonalDimensions(){

            var BodyWeightValue = document.getElementById("bodyWeight").value;
            document.getElementById("bodyWehightSliderValue").innerHTML = BodyWeightValue;

            var HumerusValue = document.getElementById("humerusLength").value;
            document.getElementById("HumerusSliderValue").innerHTML = HumerusValue;

            var ForearmValue = document.getElementById("forearmLength").value;
            document.getElementById("ForearmSliderValue").innerHTML = ForearmValue;

            var TorsoValue = document.getElementById("torsoLength").value;
            document.getElementById("TorsoSliderValue").innerHTML = TorsoValue;

            var FemurValue = document.getElementById("femurLength").value;
            document.getElementById("FemurSliderValue").innerHTML = FemurValue;

            var TibiaValue = document.getElementById("tibiaLength").value;
            document.getElementById("TibiaSliderValue").innerHTML = TibiaValue;


            
        }

        function PreTableDisplay() {
            var SetsValue = document.getElementById("sets").value;
            document.getElementById("setSliderValue").innerHTML = SetsValue;

            var RepsValue = document.getElementById("reps").value;
            document.getElementById("repSliderValue").innerHTML = RepsValue;

            var WeightValue = document.getElementById("weight").value;
            document.getElementById("weightSliderValue").innerHTML = WeightValue;


        }

        function addRow() {

            JointRange();

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

             var deadliftFemurStart = document.getElementById("joint1").innerHTML;
             var deadliftTibiaStart = document.getElementById("joint5").innerHTML;
             var deadliftBackStart = document.getElementById("joint2").innerHTML;

             var deadliftFemurFinish = 0;
             var deadliftTibiaFinish = 0;
             var deadliftBackFinish = 0;

             var deadliftLatLoad = 0;
             var deadliftGluteLoad  = 0;
             var deadliftQuadLoad = 0;

             var deadliftAcetabulLoad = 0;
             var deadliftTibifemoralLoad  = 0;
             var deadlifTaloLoad = 0;

             var squatFemurStart = document.getElementById("joint1").innerHTML;
             var squatTibiaStart = document.getElementById("joint5").innerHTML;
             var squatBackStart = document.getElementById("joint2").innerHTML;

             var squatFemurFinish = 0;
             var squatTibiaFinish = 0;
             var squatBackFinish = 0;

             var squatFemurStart = document.getElementById("joint1").innerHTML;
             var squatTibiaStart = document.getElementById("joint5").innerHTML;
             var squatBackStart = document.getElementById("joint2").innerHTML;

             var BenchpresshumerusStart = document.getElementById("joint3").innerHTML;
             var BenchpressforearmStart = document.getElementById("joint4").innerHTML;

             var OHpresshumerusStart = document.getElementById("joint3").innerHTML;
             var OHforearmStart = document.getElementById("joint4").innerHTML;

             var OHpresshumerusFinish = 0;
             var OHforearmFinish = 0;

             
             

             if (td1.innerHTML == "Deadlift"){

                deadliftFemurStart = .5 * deadliftFemurStart;
                deadliftTibiaStart = .5 * deadliftTibiaStart;
                deadliftBackStart = .63 * deadliftBackStart;

                deadliftFemurFinish = .9 * deadliftFemurStart;
                deadliftTibiaFinish = deadliftTibiaStart;
                deadliftBackFinish = deadliftBackStart;

                document.getElementById("DeadliftKneeStart").innerHTML = deadliftFemurStart;
                document.getElementById("DeadliftCalfStart").innerHTML = deadliftTibiaStart;
                document.getElementById("DeadliftBackStart").innerHTML = deadliftBackStart;

                

             }

             if (td1.innerHTML == "Squat"){

                squatFemurStart = squatFemurStart;
                squatTibiaStart = squatTibiaStart;
                squatBackStart = squatBackStart;

                squatFemurFinish = .5 * squatFemurStart;
                squatTibiaFinish = .45 * squatTibiaStart;
                squatBackFinish = .22 * squatBackStart;


                

                document.getElementById("SquatKneeStart").innerHTML = squatFemurStart;
                document.getElementById("SquatCalfStart").innerHTML = squatTibiaStart;
                document.getElementById("SquatBackStart").innerHTML = squatBackStart;                

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
            

            

        