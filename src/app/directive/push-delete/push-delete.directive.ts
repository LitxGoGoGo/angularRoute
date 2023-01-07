import {Directive, HostListener,Renderer2,ElementRef,Output,EventEmitter} from '@angular/core';
import {interval, Subject} from "rxjs";
import {switchMap, takeUntil, take, filter, tap} from "rxjs";

@Directive({
  selector: '[appPushDelete]'
})
export class PushDeleteDirective {
  pushStart$ = new Subject();
  pushOver$ = new Subject();


  @Output('delete') delete = new EventEmitter
  constructor(
    private el:ElementRef,
    private rd2:Renderer2
  ) {
  }

  @HostListener('mousedown')
  @HostListener('touchStart')
  pushStart() {
    this.pushStart$.pipe(
      tap(()=>{
        this.rd2.addClass(this.el.nativeElement,'vibrate-2')
      }),
      switchMap(() => interval(1000)),
      tap(time => console.log(time)),
      takeUntil(this.pushOver$),
      filter(time => time === 1),
      take(1)
    ).subscribe(() => {
      console.log('done')
      this.rd2.removeClass(this.el.nativeElement,'vibrate-2')
      this.rd2.setStyle(this.el.nativeElement,'visibility','hidden')
      this.delete.emit("dididi")
    })

    this.pushStart$.next('start')
    console.log('start')
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  @HostListener('touchend')
  pushOver() {
    this.pushOver$.next('over')
    this.rd2.removeClass(this.el.nativeElement,'vibrate-2')

  }

}
