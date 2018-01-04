import { Component, OnInit , ViewChild} from '@angular/core';
import { SubMenuCategoryService } from '../services/submenucategory.service';

@Component({
  selector: 'app-submenucategory',
  templateUrl: './submenucategory.component.html',
  styleUrls: ['./submenucategory.component.css'],
  providers: [SubMenuCategoryService]
})
export class SubmenucategoryComponent implements OnInit {
  @ViewChild('frm') frm;
  SubMenuCategoryName="";
  SubMenuDescription="";
  successJson: any= [];
  returnJson: any = [];
  alert_class="alert-success";
  buttonClass: string='btn btn-primary';
  editid:any="";
  updateId: any= [];
  showMessage: any= false;
  errordata="";
  submitbtn:string="Save";


  constructor(private _httpService: SubMenuCategoryService) {  }
  onSubmit(data){
    if(Object.keys(this.updateId).length==0){
     this.saveValues(data);
    }
    else{
      this.updateValues(data,this.updateId.menu_sub_categoryid);	
    } 
  }

  saveValues(data){  
    this._httpService.savesubMenu(data).subscribe(
  data => {
                  this.successJson = data;
                  if(this.successJson.status===true){
                  this.getAllSubMenuCategory();
                  this.alert_class="alert-success";
                  this.showMessage= true;
                  this.displayMessage();
                 
              }
          //    else if(this.successJson.status===false){

          //     //console.log(this.successJson.errors[0].msg);
               
          //     this.getAllSubMenuCategory();
          //       this.errordata=this.successJson.errors[0].msg;
          //      //this.showMessage= true;
                    
          //  }
              },
            error=>alert(error),
            () =>console.log("finished")
           );
          }

          getAllSubMenuCategory(): void{
             this._httpService.getsubMenu({"menu_sub_categoryid":"0"}).subscribe(data => this.returnJson =data.data,
             error=>alert(error),
             () =>console.log("data displayed")
             );
          }

     getsubMenuEdit(rec){
                this.updateId = rec;
                this.submitbtn="Update";
                this.SubMenuCategoryName=rec.menu_sub_categoryname;
                this.SubMenuDescription=rec.menu_sub_description;
                }

         updateValues(data,id){
      
            this._httpService.updatesubMenu({"menu_sub_categoryname":data.menu_sub_categoryname,"menu_sub_description":data.menu_sub_description,"menu_sub_categoryid":id}).subscribe(
            data => {
                            this.successJson = data;
                            if(this.successJson.status===true){
                            this.getAllSubMenuCategory();
                            this.alert_class="alert-success";
                            this.showMessage= true;
                            this.displayMessage();
                            this. resetFunction();
                        }
                        },
                    error=>alert(error),
                    () =>console.log("updated")
                    );
          }

          deletesubMenu(id){
           this._httpService.DeletesubMenu({"menu_sub_categoryid":id}).subscribe(      
            data => {
              this.successJson = data;
              if(this.successJson.status===true){
                this.getAllSubMenuCategory();
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
                this.frm.controls['menu_sub_categoryname'].setValue('');
                this.frm.controls['menu_sub_description'].setValue('');
                // this.form.controls['is_hospital'].setValue(1);
                this.changeButton();
               
              }


  ngOnInit() {
       this.getAllSubMenuCategory();
      
  }
}
