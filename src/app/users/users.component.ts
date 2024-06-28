import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {


  userForm!: FormGroup
  user$!: Observable<any>
  posts$!: Observable<any>
  comments$!: Observable<any>

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: ['1']
    })
    
    this.user$ = this.userService.getUser(this.userForm.get('id')?.value)

    this.user$.subscribe((user) => {
      this.posts$ = this.userService.getPosts(user.id)
    })
  }
  showComments(postId: number): void {
    this.comments$ = this.userService.getComments(postId)
  }
}