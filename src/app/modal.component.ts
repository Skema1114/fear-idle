import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="modal-overlay"
      *ngIf="open"
      (click)="onOverlayClick($event)"
    >
      <div
        #content
        class="modal-content"
        [class.stats-modal-content]="variant === 'stats'"
        role="dialog"
        aria-modal="true"
        [attr.aria-labelledby]="titleId"
        (click)="$event.stopPropagation()"
      >
        <h3 class="modal-title" [id]="titleId">{{ title }}</h3>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class ModalComponent implements OnChanges, AfterViewInit {
  private static idCounter = 0;
  readonly titleId = `app-modal-title-${++ModalComponent.idCounter}`;

  @Input({ required: true }) open = false;
  @Input() title = '';
  @Input() variant: '' | 'stats' = '';
  @Input() closeOnOverlay = true;
  @Output() closed = new EventEmitter<void>();

  @ViewChild('content') private contentRef?: ElementRef<HTMLElement>;
  private previousFocus: HTMLElement | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open']) {
      if (this.open) {
        this.previousFocus = document.activeElement as HTMLElement | null;
        setTimeout(() => this.focusFirstInteractive(), 0);
      } else if (this.previousFocus) {
        this.previousFocus.focus();
        this.previousFocus = null;
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.open) this.focusFirstInteractive();
  }

  onOverlayClick(ev: MouseEvent): void {
    if (!this.closeOnOverlay) return;
    const target = ev.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      this.closed.emit();
    }
  }

  @HostListener('document:keydown.tab', ['$event'])
  onTab(ev: KeyboardEvent): void {
    if (!this.open || !this.contentRef) return;
    const focusables = this.getFocusableElements();
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement as HTMLElement;
    if (ev.shiftKey && active === first) {
      ev.preventDefault();
      last.focus();
    } else if (!ev.shiftKey && active === last) {
      ev.preventDefault();
      first.focus();
    }
  }

  private focusFirstInteractive(): void {
    const focusables = this.getFocusableElements();
    if (focusables.length > 0) focusables[0].focus();
  }

  private getFocusableElements(): HTMLElement[] {
    if (!this.contentRef) return [];
    const selector =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(
      this.contentRef.nativeElement.querySelectorAll<HTMLElement>(selector)
    );
  }
}
