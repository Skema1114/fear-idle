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
  styles: [`
    :host {
      display: contents;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    .modal-content {
      background: rgba(22, 22, 30, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid #3a3a4f;
      border-radius: 16px;
      padding: 2.5rem;
      max-width: 480px;
      width: 90%;
      max-height: 85vh;
      overflow-y: auto;
      overflow-x: hidden;
      box-sizing: border-box;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
      animation: modalScaleIn 0.25s ease-out;
      color: #e8e8f0;
      position: relative;
      z-index: 1;
    }
    .modal-content::-webkit-scrollbar { width: 6px; }
    .modal-content::-webkit-scrollbar-track { background: transparent; }
    .modal-content::-webkit-scrollbar-thumb {
      background: rgba(179, 136, 255, 0.45);
      border-radius: 6px;
    }
    .modal-content::-webkit-scrollbar-thumb:hover {
      background: rgba(179, 136, 255, 0.7);
    }
    .stats-modal-content {
      max-width: 600px;
      text-align: left;
    }
    .modal-title {
      font-family: "Creepster", cursive;
      font-size: clamp(1.3rem, 4vw, 1.8rem);
      color: #b388ff;
      margin: 0 0 0.8rem 0;
      line-height: 1.2;
      word-wrap: break-word;
      overflow-wrap: break-word;
      text-shadow: 0 0 8px rgba(179, 136, 255, 0.35);
    }
    @keyframes modalScaleIn {
      from { transform: scale(0.9); opacity: 0; }
      to   { transform: scale(1); opacity: 1; }
    }
    @media (prefers-reduced-motion: reduce) {
      .modal-content { animation: none !important; }
    }
    @media (max-width: 600px) {
      .modal-content { padding: 1.5rem; }
      .modal-title { font-size: 1.4rem; }
    }
  `],
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
