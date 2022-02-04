    audioPlayer();

    function audioPlayer(){
        var currentSong = 0;
        $("#audioPlayer")[0].src = $("#playlist li a")[0];
        // $("#audioPlayer")[0].play(); // this is autoplay
        $("#playlist li a").click(function(e){
          e.preventDefault(); 
          $("#audioPlayer")[0].src = this;
          $("#audioPlayer")[0].play();
          $("#playlist li a").removeClass("current-song");
            currentSong = $(this).parent().index();
            $(this).addClass("current-song");
        });
        
        $("#audioPlayer")[0].addEventListener("ended", function(){
          currentSong++;
            if(currentSong == $("#playlist li a").length)
                currentSong = 0;
            $("#playlist li a").removeClass("current-song");
            $("#playlist li:eq("+currentSong+")").children().addClass("current-song");
            $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
            $("#audioPlayer")[0].play();
        });
    
    }