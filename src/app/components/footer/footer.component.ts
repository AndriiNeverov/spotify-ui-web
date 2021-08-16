import { Component, OnInit } from '@angular/core';
import Audio, { AudioPlaylistType, AudioPlaylist } from 'ts-audio';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  stateSong:boolean = true;
  vol:string = '';
  audio = Audio({
    file: './assets/music/Oceans Hillsong United  Remix  Aaron Kell.mp3',
    loop: true,
    volume: 0.2,
  });


  constructor() { }

  ngOnInit(): void {
  }

  songs = [{
    artist: "Hillsong",
    name: "Oceans (Remix Aaron kell)",
    url: "../music/Oceans Hillsong United  Remix  Aaron Kell.mp3",
}];


toggleSong() {
        this.songs.forEach(element => { console.log(element.name)});
        if(this.stateSong==true)
        {
          console.log(this.stateSong+"play");
          this.stateSong=false;
          this.audio.play();
          document.getElementById("playStyle").style.display = "none";
          document.getElementById("pauseStyle").style.display = "block";


        }else{
          console.log(this.stateSong+"pause");
          this.stateSong=true;
          this.audio.pause();
          document.getElementById("playStyle").style.display =  "block";
          document.getElementById("pauseStyle").style.display ="none";

        }

}

changeVol() {
  this.vol =(<HTMLInputElement>document.getElementById("rangeInput")).value;
  this.audio.volume = parseInt(this.vol);
  console.log("## VOLUME: "+this.vol+" ##");
} 



}

