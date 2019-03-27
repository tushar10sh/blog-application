import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreateComponent } from './blog-create.component';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../blog.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('BlogCreateComponent', () => {
  let component: BlogCreateComponent;
  let fixture: ComponentFixture<BlogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCreateComponent ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [BlogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
