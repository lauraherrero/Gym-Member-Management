import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Member } from '../../../models/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  genderList = [
    { id: 1, value: 'Hombre' },
    { id: 2, value: 'Mujer' }
  ];

  do: String = 'insert';
  position: any = 0;

  members: Array<Member> = [];

  member: Member = {
    name: '',
    surname: '',
    memberNumber: '',
    dni: '',
    phone: '',
    gender: '',
  };

  ngOnInit(): void {}
  add(form: NgForm) {
    if (this.do === 'insert') {
      this.members.push(this.member);
    } else {
      this.members[this.position] = this.member;
      this.do = 'insert';
    }
    this.member = {
      name: '',
      surname: '',
      memberNumber: '',
      dni: '',
      phone: '',
      gender: '',
    };
    form.resetForm();
  }

  delete(delPosition: number): void {
    this.members.splice(delPosition, 1);
  }
  update(upPosition: number): void {
    this.member = this.members[upPosition];
    this.do = 'update';
    this.position = upPosition;
  }
}
