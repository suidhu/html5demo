var NS={}    //设置NS为namespace
/**************************flowplayer相关初始化********************************/
$(function(){
    //播放列表
    var playlist = [
      [
      {webm: "http://stream.flowplayer.org/night7/640x360.webm"},
      {mp4: "http://stream.flowplayer.org/night7/640x360.mp4"},
      {ogg: "http://stream.flowplayer.org/night7/640x360.ogv"},
      {flash: "mp4:night7/640x360"}
      ],
      [
      {webm: "http://stream.flowplayer.org/night5/640x360.webm"},
      {mp4: "http://stream.flowplayer.org/night5/640x360.mp4"},
      {ogg: "http://stream.flowplayer.org/night5/640x360.ogv"},
      {flash: "mp4:night5/640x360"}
      ],
      [
      {webm: "http://stream.flowplayer.org/night6/640x360.webm"},
      {mp4: "http://stream.flowplayer.org/night6/640x360.mp4"},
      {ogg: "http://stream.flowplayer.org/night6/640x360.ogv"},
      {flash: "mp4:night6/640x360"}
      ],
      [
      {webm: "http://stream.flowplayer.org/night4/640x360.webm"},
      {mp4: "http://stream.flowplayer.org/night4/640x360.mp4"},
      {ogg: "http://stream.flowplayer.org/night4/640x360.ogv"},
      {flash: "mp4:night4/640x360"}
      ]
      ];
    var currentPlay=0;//当前播放的视频序号
    $(".player").flowplayer({engin:"flash"});    //初始化flowplayer

    NS.verticalCenter($(".playerButton"));     //设置playerbutton列表垂直居中

    //playerButtton的hover效果
    $(".playerButton li").hover(function(){
                                  if($(this).parent().hasClass("left")){
                                      $(this).animate({"left":"-=10px"},200);
                                      }
                                   else{
                                       $(this).animate({"left":"+=10px"},200); 
                                       } 
                                  }
                              ,function(){
                                  if($(this).parent().hasClass("left")){
                                      $(this).animate({"left":"+=10px"},100);
                                      }
                                   else{
                                       $(this).animate({"left":"-=10px"},100); 
                                       } 
                                  }
                              ); 
   //playerButton 的fade效果
    $(".playerWrap .playerButton").fadeOut(0);
    $(".playerWrap").hover(function(){
                               $(".playerWrap .playerButton").fadeIn(200);
                               }
                           ,function(){
                                $(".playerWrap .playerButton").fadeOut(200);
                                }
                           );
    var player=flowplayer();   



   //playerButton功能设置
   $(".prev").click(function(){
                        currentPlay--;
                        if(currentPlay<0){
                            currentPlay=playlist.length-1;
                            }
                        player.load(playlist[currentPlay]);
                        });
                      
   $(".play").click(function(){
                        player.play();
                        });

   $(".pause").click(function(){
                        player.pause();
                        });

   $(".next").click(function(){
                        currentPlay++;
                        if(currentPlay>playlist.length-1){
                            currentPlay=0;
                            }
                        player.load(playlist[currentPlay]);
                        });

   $(".resume").click(function(){
                         player.resume();
                         });

   $(".mute").click(function(){
                         player.mute();
                         });

   $(".screen").click(function(){
                         player.fullscreen();
                         });

   $(".stop").click(function(){
                         player.stop();
                         });
  


   //点播功能
   $(".playList td").each(function(i){
                              $(this).data({"data-video":playlist[i],"number":i});
                              }
                          )
                    .click(function(){
                               player.play($(this).data("data-video"));
                               currentPlay=$(this).data("number");
                               }
                          );
    });
/***************************************************************************/


//设置jquery对象垂直居中  
NS.verticalCenter=function(elements){
                          var topOffset=-elements.innerHeight()/2;
                          elements.css({top:"50%",marginTop:String(topOffset)+"px"});
                          }

