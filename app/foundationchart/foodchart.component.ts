import {Component, OnInit,ViewChild} from '@angular/core';
import {MenuCategoryService} from '../services/menucategory.service';
import {SubMenuCategoryService} from '../services/submenucategory.service';
import {FooditemmasterService}  from '../services/fooditemmaster.service';

@Component({
  selector: 'app-foodchart',
  templateUrl: './foodchart.component.html',
  styleUrls: ['./foodchart.component.css'],
  providers:[MenuCategoryService,SubMenuCategoryService,FooditemmasterService]
})
export class FoodchartComponent implements OnInit {
  @ViewChild('frm') frm;
  Foodchart="";
  MenuCat="";
  SubMenuCat="";
  Items:any;
  dataarry:any=[];
 responseData : any;
  returnJsonMenu:any=[];
  returnJsonSubMenu:any=[];
  returnJsonitem :any;
  selectedItems: any = [];
  Arr = Array; //Array type captured in a variable
  num:number = 10;
  foodbox:boolean=true;
  
  constructor(private _menuservice:MenuCategoryService, private _submenuservice:SubMenuCategoryService, private _itemservice:FooditemmasterService) { 
    this.getAllFoodItemMaster();
  }

  ngOnInit() {
        this.getAllMenuCategory(); this.getAllSubMenuCategory(); 
  }
 
  onSubmit(data){
     this.saveValues(data);
  }
  saveValues(data){
    
    data.item_ids=this.selectedItems;
    
    //console.log(this.returnJsonitem);
    console.log(data);
    //console.log(this.frm);
    this.dataarry.push(data);
    this.responseData.key = this.dataarry;
    responseData :{
        key:[
            
        ]
    }

  }

  additem(recitem, event) {
            var index = this.selectedItems.indexOf(recitem.item_id);
            if (event.target.checked) {
                if (index === -1) {
                    this.selectedItems.push(recitem.item_id); 
                }
            } else {
                if (index !== -1) {
                    this.selectedItems.splice(index, 1);
                }
            }
            console.log(this.selectedItems);
        }
    

  getAllMenuCategory(): void{
    // console.log("Hello fetch data ");        
     this._menuservice.getMenu({"menu_categoryid":"0"}).subscribe(data => this.returnJsonMenu =data.data,
     error=>alert(error),
     () =>console.log("data displayed")
     );
  }


  getAllSubMenuCategory(): void{
    this._submenuservice.getsubMenu({"menu_sub_categoryid":"0"}).subscribe(data => this.returnJsonSubMenu =data.data,
    error=>alert(error),
    () =>console.log("data displayed")
    );
    
 }
   

 getAllFoodItemMaster(): void{
  this._itemservice.getFoodItemMasrter({"item_id":"0"}).subscribe(data => this.returnJsonitem =data.data,   
  error=>alert(error),
  () =>console.log("data displayed")
 );
 
}

foodchart(){
  if(this.foodbox ==true){
  this.foodbox =false;
  }
  else{
    this.foodbox =true;
  }
}
}
