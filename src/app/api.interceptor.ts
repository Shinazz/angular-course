import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { DataService } from './service/data.service';
import { finalize, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {
  constructor(private data: DataService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req);

    let request = req;
    this.data.spinner.next(true);
    if (!req.url.includes('authenticate')) {
      request = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.data.accToken,
          purpose: 'test',
        }),
      });
    } else {
      request = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      });
    }

    //   console.log(reqeuest);

    //   return next
    //     .handle(reqeuest)
    //     .pipe(catchError((err) =>

    //     next.handle(reqeuest)

    //     ));
    // }

    return next.handle(request).pipe(
      finalize(() => {
        this.data.spinner.next(false);
      })
    );
  }
}
