import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-container.html'
})
export class ScrollContainer implements AfterViewInit, OnDestroy {
  @ViewChild('scrollEl') scrollEl!: ElementRef<HTMLDivElement>;

  private cdr = inject(ChangeDetectorRef);

  showLeft = false;
  showRight = false;

  private observer!: ResizeObserver;

  ngAfterViewInit(): void {
    const el = this.scrollEl.nativeElement;
    el.addEventListener('scroll', this.onScroll, { passive: true });
    this.observer = new ResizeObserver(() => this.updateButtons());
    this.observer.observe(el);
    setTimeout(() => this.updateButtons(), 100);
  }

  ngOnDestroy(): void {
    this.scrollEl?.nativeElement.removeEventListener('scroll', this.onScroll);
    this.observer?.disconnect();
  }

  private onScroll = (): void => {
    this.updateButtons();
  };

  updateButtons(): void {
    const el = this.scrollEl.nativeElement;
    const newLeft = el.scrollLeft > 10;
    const newRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 10;

    if (this.showLeft !== newLeft || this.showRight !== newRight) {
      this.showLeft = newLeft;
      this.showRight = newRight;
      this.cdr.detectChanges();
    }
  }

  scrollRight(): void {
    this.scrollEl.nativeElement.scrollBy({ left: 320, behavior: 'smooth' });
  }

  scrollLeft(): void {
    this.scrollEl.nativeElement.scrollBy({ left: -320, behavior: 'smooth' });
  }
}