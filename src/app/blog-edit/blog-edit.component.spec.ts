import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEditComponent } from './blog-edit.component';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../blog.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('BlogEditComponent', () => {
  let component: BlogEditComponent;
  let fixture: ComponentFixture<BlogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogEditComponent ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [BlogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
