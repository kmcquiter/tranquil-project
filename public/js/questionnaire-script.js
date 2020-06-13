    $(document).ready(function(){

      var answers = [];
      var ansClicked;
      var anger =0, depression=0, stress=0, flag=0, tlitems=0;

      $(".answers input").click(function(){
        ansClicked =1;
        var questionNumber = $(this).parents(".question-box").attr("id").replace(/[^0-9]/g,'');
        answers[questionNumber] = $(this).val();
      });

      $(".next-question").click(function(){
        if(ansClicked == 1){
            var cur_question = $(this).parent();
            var nex_question = $(this).parent().next();
            $(cur_question).fadeOut(200).promise().done(function(){
               $(nex_question).fadeIn(200);
            });

            ansClicked++;
        }else{
          alert("Please select one answer!");
        } 
      });

      $(".last-question").click(function(){

      	$("#pageHeading").text("Your Questionnaire results");
        var string= '<table align="center" width="100%" cellcpacing="0px" cellpadding="10px">';
        for (var i = 1; i <= 5; i++) {
          if(answers[i] == 'Yes'){
            anger = anger + 19;
          }
        }
        for (var i = 6; i <= 10; i++) {
          if(answers[i] == 'Yes'){
            depression = depression + 19;
          }
        }
        for (var i = 11; i <= 15; i++) {
          if(answers[i] == 'Yes'){
            stress = stress + 19;
          }
        }

        string+='<tr><td><input type="button" class="btn btn-primary" style="background-color:white;color:black;min-width:200px;" value="'+anger+'%"></td><td><h3 style="color:white;">Anger</h3></td></tr>';
        string+='<tr><td><input type="button" class="btn btn-primary" style="background-color:white;color:black;min-width:200px;" value="'+depression+'%"></td><td><h3 style="color:white;">Depression</h3></td></tr>';
        string+='<tr><td><input type="button" class="btn btn-primary" style="background-color:white;color:black;min-width:200px;" value="'+stress+'%"></td><td><h3 style="color:white;">Stress</h3></td></tr>';

        string+='</table>';
        

        $("#questionsSection").fadeOut(250).promise().done(function(){
            $("#resultsSection").fadeIn(250);
        });


        $(".results-box").html(string);
        $(".plan-btn").css("display","block");

      });


      $(".plan-btn").click(function(){        
        
        
        if(anger>50){
          anger = "Yes";
          tlitems=tlitems+3;
        }
        if(depression>50){
          depression = "Yes";
          tlitems=tlitems+3;
        }
        if(stress>50){
          stress = "Yes";
          tlitems=tlitems+3;
        }

        window.location = "/your-plan?anger="+anger+"&depression="+depression+"&stress="+stress;
        
        
      });



    });