import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent implements OnInit {

  constructor() {

    
   }

  // 页面的html对象
   private items!:any
   // 当前展示的图片
   private indexImg:number = -1
   // 上一张展示的图片
   private lastIndex:number = 3
  //定时器
  private timeer!:any
  //下面的小li
  private circles!:any
  //tab 对象
  private itemtab!:any
  ngOnInit(): void {
    // 初始化变量
    this.init();
    // 开始轮播
    this.start();

  } 

  // 初始化变量
  init(){
    this.items = document.getElementsByClassName("item")
    this.circles = document.getElementsByClassName("circle")
    this.itemtab = document.getElementsByClassName("item_tab")
  }
//开始轮播
  start(){
    clearInterval(this.timeer);
    this.timeer =setTimeout(()=>{
      this.changeIndex(1);
    },1500)

  }

  /**
   * 改变当前展示的图片
   * @param n 当前展示图片添加的值
   */
  changeIndex(n:number){
    //清除上一张的样式
    this.items[this.lastIndex].style.opacity = 0
    this.itemtab[this.lastIndex].style.opacity = 0
    this.circles[this.lastIndex].style.background = 'rgba(0,0,0,0.4)'
    
    // 选定第一张图片
    this.indexImg = (this.indexImg + n) % this.items.length
    //为下一张提供样式  
    this.items[this.indexImg].style.opacity = 1 
    this.itemtab[this.indexImg].style.opacity = 1 
    this.circles[this.indexImg].style.backgroundColor = '#000'
  //定位上一张图片
    this.lastIndex = this.indexImg
//执行定时器
    this.start()
  }


//下一张图片
  Next(){

    this.changeIndex(1)

    
  }
// 上一张图片
  Back(){
    this.changeIndex(-1)
    
  }




}