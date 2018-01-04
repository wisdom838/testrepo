import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorprovidersService } from '../services/doctorproviders.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { EcgClaimService } from '../services/ecg-claim.service';
import { IMyDrpOptions } from 'mydaterangepicker';
@Component({
  selector: 'app-ecgclaimreport',
  templateUrl: './ecgclaimreport.component.html',
  styleUrls: ['./ecgclaimreport.component.css'],
  providers: [DoctorprovidersService, EcgClaimService]
})
export class EcgclaimreportComponent implements OnInit {
@ViewChild('frm') form;
statusArr:any=[{column_value:'2', column_name:'Medicare Paid Date' }, {column_value:'3', column_name:'Amount Received Date' }];
claimTypeArr:any=[{column_value:'2', column_name:'All' },{column_value:'1', column_name:'Online' }, {column_value:'0', column_name:'Offline' }];
statusVal='2';
resultSet:any=[];
providersArr:any=[];
claimVal='2';
prodVal='1';
buttonString="Search";
buttonClass='btn-save';
public maxSize:number = 5;
public rowCount:number = 0;
public currentPage:number = 1;
public numPages:number = 0;
numRowsPage: number=10;
pagingLimit:any=[10,25,50,100,200,500];
stratCount:number=0;
searchObj:any={};
private myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
    width: '83%',
    height:'30px'
};
  constructor(private _httpService: DoctorprovidersService, private _httpService1: EcgClaimService, private slimLoadingBarService: SlimLoadingBarService) {
  	this.getHosDoctorProviders();
   }

  ngOnInit() {
  }

  getHosDoctorProviders(): void{
    this.slimLoadingBarService.start();
  	this._httpService.getHosDoctorProviders().subscribe(data => this.providersArr=data,
    error=>alert(error),
    () =>console.log("finished")
    );
    this.slimLoadingBarService.complete();
  }

  onSubmit(obj){
  	var prepareObj={};
  	var temparr= obj.mydaterange.formatted.split(" - ");
  	var tempFrom=temparr[0].split('/');
  	var tempTo=temparr[1].split('/');
  	prepareObj['from_date']=tempFrom[2]+'-'+tempFrom[1]+'-'+tempFrom[0];
  	prepareObj['to_date']=tempTo[2]+'-'+tempTo[1]+'-'+tempTo[0];
  	prepareObj['status']= obj.status;
  	prepareObj['doc_provider']= obj.doc_provider;
  	prepareObj['claim_type']= obj.claim_type;
    this.searchObj=prepareObj;
    this.searchObj['limit']=this.numRowsPage;
    this.searchObj['page']=this.currentPage;
    this.getReports();
  }
  getReports(){
    this.slimLoadingBarService.start();
    this._httpService1.getClaimRecords(this.searchObj).subscribe(data => {
      this.resultSet= data.resultSet;
      this.stratCount=(this.currentPage-1)*this.numRowsPage;
      this.rowCount=data.count;
      this.slimLoadingBarService.complete();
    },
    error=>alert(error),
    () =>console.log("finished")
    );
  }

   pageChanged(event:any):void {
    this.searchObj['limit']=event.itemsPerPage;
    this.searchObj['page']=event.page;
    this.getReports();
  }
  changePageLimit(){
    this.searchObj['limit']=this.numRowsPage;
    this.searchObj['page']=1;
    this.getReports();
  }
}
