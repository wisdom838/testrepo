import {Component, OnInit,ViewChild} from '@angular/core';
import {MenuCategoryService} from '../services/menucategory.service';
import {SubMenuCategoryService} from '../services/submenucategory.service';
import {FooditemmasterService}  from '../services/fooditemmaster.service';
import {Chartnames}  from '../services/chartnames.service';
import {FoundationChartItems}  from '../services/foundationchartitems.service';




@Component({
  selector: 'app-foodchart',
  templateUrl: './foodchart.component.html',
  styleUrls: ['./foodchart.component.css'],
  providers:[MenuCategoryService,SubMenuCategoryService,FooditemmasterService,Chartnames,FoundationChartItems]
})
export class FoodchartComponent implements OnInit {
  @ViewChild('frm') frm;
  @ViewChild('frm1') frm1;
  Foodchart="";
  Foodchartname="";
  MenuCat="";
  SubMenuCat="";
  Items:any;
  dataarry:any=[];

  
  responsedata:any={};
  returnJsonMenu:any=[];
  returnJsonSubMenu:any=[];
  returnJsonchart:any=[];
  returnJsonitem :any;
  selectedItems: any = [];
  successJson: any= [];
  returnJson: any = [];
  submitbtn:string="Save";
  buttonClass: string='btn btn-primary';
  alert_class="alert-success";
  Arr = Array; //Array type captured in a variable
  num:number = 10;
  foodbox:boolean=true;
  showMessage: any= false;
  constructor(private _menuservice:MenuCategoryService, private _submenuservice:SubMenuCategoryService, private _itemservice:FooditemmasterService,private _chartname:Chartnames,private _fservice:FoundationChartItems) { 
    
  }

  ngOnInit() {
    this.getAllFoodItemMaster(); this.getAllMenuCategory(); this.getAllSubMenuCategory(); this.getCharName();
  }
 
  onSubmit(data){
     this.saveValues(data);
  }
  saveValues(data){
    data.item_ids=this.selectedItems;
    this.dataarry.push(data);
    this.responsedata.foundation_chart_items=this.dataarry;
 
    //console.log(this.responsedata);

    this._fservice.saveFChartitems(this.responsedata).subscribe(
      data => {
                      this.successJson = data;
                      if(this.successJson.status===true){
                      
                      //this.getAllItemCategories();
                      this.alert_class="alert-success";
                      //this.showMessage= true;
                      this.displayMessage();
                  }
                //   else if(this.successJson.status===false){
                   
                //     this.getAllItemCategories();
                //      this.errordata=this.successJson.errors[0].msg;
                //     //this.showMessage= true;
                
                // }
                  },
                error=>alert(error),
                () =>console.log("finished")
               );


    

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
            //console.log(this.selectedItems);
        }

        getAllFoodItemMaster(): void{
          this._itemservice.getFoodItemMasrter({"item_id":"0"}).subscribe(data => this.returnJsonitem =data.data,   
          error=>alert(error),
          () =>console.log("data displayed")
         );
         
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
   
 getCharName(): void{
  this._chartname.getChartname({"foundation_chart_id":"0"}).subscribe(data => this.returnJsonchart =data.data,
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


chkchart(name){
  console.log(name);
  this._chartname.saveChartname(name).subscribe(
    data => {
                    this.successJson = data;
                    if(this.successJson.status===true){
                    this.getCharName();
                    this.alert_class="alert-success";
                    this.showMessage= true;
                    this.displayMessage();
                }
              //   else if(this.successJson.status===false){
                 
              //     this.getAllItemCategories();
              //      this.errordata=this.successJson.errors[0].msg;
              //     //this.showMessage= true;
              
              // }
                },
              error=>alert(error),
              () =>console.log("finished")
             );
            }


            displayMessage(){
              this.showMessage= true;
                setTimeout(function() {
               this.showMessage = false;
               this.successJson={};
               this.updateId = {};  
           }.bind(this), 3000);
          }

}


