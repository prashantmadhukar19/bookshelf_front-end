import { Component, OnInit } from '@angular/core';
import { Member } from '../Entity/member';
import { MemberService } from '../Services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  member = new Member();
  option: string;
  message: string = "";

  constructor(private httpclient:MemberService, private router:Router) {
    
   }

  ngOnInit() {
  }
  redirect(){
    this.router.navigate(["admin-homepage"]);
  }

  sendData(){
    return this.httpclient.addMembers(this.member).subscribe(
      response =>{ 
      console.log(this.member);
       this.member.memberId=null;
       this.member.memberPassword=null;
       this.member.memberDob=null;
       this.member.memberAddress=null;
       this.member.memberEmail=null;
       this.member.suspended=null;
       this.redirect();
       alert("Member added Successfully !");
        
      }
      ); 
  }
  
}

