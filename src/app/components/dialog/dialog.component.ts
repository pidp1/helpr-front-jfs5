import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public 1:string = "assets/banner/1.png"
  public 2:string = "assets/banner/3.png"
  public 3:string = "assets/banner/5.png"
  public 4:string = "assets/banner/txt5.jpeg"

  public imgsArr: Array<string> = ["assets/banner/1.png", "assets/banner/3.png", "assets/banner/5.png", "assets/banner/txt5.jpeg"]

  constructor() { }

  ngOnInit(): void {
    this.randomImg()
  }

  
  private randomImg(): string{
    const randomIndex: number = Math.floor(Math.random() * this.imgsArr.length);
    const img: string = this.imgsArr[randomIndex];
    return img;
  }

  public img=this.randomImg()

}
