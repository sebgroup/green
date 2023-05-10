import {
  AfterViewInit,
  Directive,
  ElementRef,
  InjectionToken,
  OnDestroy,
} from '@angular/core'
import { Subject, fromEvent } from 'rxjs'
import { debounceTime, takeUntil } from 'rxjs/operators'

export const ON_SCROLL_TOKEN = new InjectionToken<string>('ON_SCROLL_TOKEN')

@Directive({
  selector: '[nggOnScrollDirective]',
  providers: [
    {
      provide: ON_SCROLL_TOKEN,
      useFactory: (component: NggOnScrollDirective): Subject<unknown> =>
        component?.onScroll$,
      deps: [NggOnScrollDirective],
    },
  ],
})
export class NggOnScrollDirective implements AfterViewInit, OnDestroy {
  onScroll$ = new Subject()
  destroy$ = new Subject()

  constructor(private elementRef: ElementRef) {}

  public ngAfterViewInit(): void {
    if (this.elementRef) {
      fromEvent(this.elementRef?.nativeElement, 'scroll')
        .pipe(takeUntil(this.destroy$), debounceTime(30))
        .subscribe(() => {
          this.onScroll$.next()
        })
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null)
    this.destroy$.complete()
  }
}
