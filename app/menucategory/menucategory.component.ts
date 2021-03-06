import { Component, OnInit ,ViewChild} from '@angular/core';
import { MenuCategoryService } from '../services/menucategory.service';

@Component({
  selector: 'app-menucategory',
  templateUrl: './menucategory.component.html',
  styleUrls: ['./menucategory.component.css'],
  providers: [MenuCategoryService]
})
export class MenucategoryComponent implements OnInit {
  @ViewChild('frm') frm;
  MenuCategoryName="";
  MenuDescription="";
  successJson: any= [];
  returnJson: any = [];
  alert_class="alert-success";
  buttonClass: string='btn btn-primary';
  editid:any="";
  updateId: any= [];
  showMessage: any= false;
  errordata="";
  submitbtn:string="Save";

  constructor(private _httpService: MenuCategoryService) {this.getAllMenuCategory();}

  onSubmit(data){
    if(Object.keys(this.updateId).length==0){
     this.saveValues(data);
    }
    else{
      //console.log(this.updateId.item_category_id);
      this.updateValues(data,this.updateId.menu_categoryid);	
    }
  
  }

  saveValues(data){
    //this.saveValues(data);
   // console.log(data);
    this._httpService.saveMenu(data).subscribe(
  data => {
                  this.successJson = data;
                  if(this.successJson.status===true){ 
                  this.getAllMenuCategory();
                  this.alert_class="alert-success";
                  this.showMessage= true;
                 this.displayMessage();
              }
             else if(this.successJson.status===false){
              //console.log(this.successJson.errors[0].msg);
              this.getAllMenuCategory();
                this.errordata=this.successJson.errors[0].msg;
               //this.showMessage= true;
            
           }
              },
            error=>alert(error),
            () =>console.log("finished")
           );
          }

          getAllMenuCategory(): void{
            // console.log("Hello fetch data ");        
             this._httpService.getMenu({"menu_categoryid":"0"}).subscribe(data => this.returnJson =data.data,
             error=>alert(error),
             () =>console.log("data displayed")
             );
          }

     getMenuEdit(rec){
    this.updateId = rec;
    //console.log(data);
    this.submitbtn="Update";
    this.MenuCategoryName=rec.menu_categoryname;
    this.MenuDescription=rec.menu_description;
    //console.log("update function");
      //rawdata={"query_type":"set_data","memberid":"74125896","item_category":"Beverages555","item_category_id":"2"};
         }

         updateValues(data,id){
          console.log(data);      
            this._httpService.updateMenu({"menu_categoryname":data.menu_categoryname,"menu_description":data.menu_description,"menu_categoryid":id}).subscribe(
            data => {
                            this.successJson = data;
                            if(this.successJson.status===true){
                            this.getAllMenuCategory();
                            this.alert_class="alert-success";
                            this.showMessage= true;
                            this.displayMessage();
                            this.resetFunction();
                              
                        }
                        },
                    error=>alert(error),
                    () =>console.log("updated")
                    );
          }


          deleteMenu(id){
            //console.log({"query_type":"del_data","memberid":"1234564","item_category_id":id});
           this._httpService.DeleteMenu({"menu_categoryid":id}).subscribe(
             
            data => {
              this.successJson = data;
              //console.log(this.successJson);
              if(this.successJson.status===true){
                this.getAllMenuCategory();
                this.displayMessage();
          }
          },
          error=>alert(error),
          () =>console.log("deleted")
          );
              }

              displayMessage(){
                this.showMessage= true;
                    setTimeout(function() {
                   this.showMessage = false;
                   this.successJson={};
                   //console.log(this.successJson);
                   this.updateId = {};
                   //this.resetFunction();
               }.bind(this), 3000);
              }

              changeButton(){
                this.submitbtn= "Save";
                this.buttonClass= "btn btn-primary";
             }
              resetFunction(){
                
                this.updateId=[];
                this.frm.reset();
                this.frm.controls['menu_categoryname'].setValue('');
                this.frm.controls['menu_description'].setValue('');
                // this.form.controls['is_hospital'].setValue(1);
                this.changeButton(); 
              }

  ngOnInit() {
  }
}
