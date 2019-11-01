var userArray=[];
function listMaker (input)
{
  for (var i = 0;i<=input;i++)
  {
    userArray[i]=i.toString();
    if(userArray[i].includes(3))
      userArray[i]="I'm sorry Dave, I'm afraid I can't do that.";
    else if(userArray[i].includes(2))
      userArray[i]="Boop!";
    else if(userArray[i].includes(1))
      userArray[i]="Beep!";
  }

  console.log(userArray);
}


$(document).ready(function()
{
    $("form#formBeep").submit(function(event)
  {
    event.preventDefault();
    userArray=[];
    $("#output").text("");
    var userInput = parseInt($("input#input").val());
    listMaker(userInput);
    $("#results").show();
    for(var i=0;i<=userArray.length;i++)
    {
      $("#output").append(userArray[i]);
      $("#output").append(" ");
    }


  })
});
