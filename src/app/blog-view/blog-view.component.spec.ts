import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogViewComponent } from './blog-view.component';
import { BlogService } from '../blog.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('BlogViewComponent', () => {
  let component: BlogViewComponent;
  let fixture: ComponentFixture<BlogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogViewComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [BlogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
