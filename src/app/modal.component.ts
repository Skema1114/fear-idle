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
        <button
          type="button"
          class="modal-x"
          aria-label="Fechar"
          (click)="closed.emit()"
        >
          <span aria-hidden="true">×</span>
        </button>
        <h3 class="modal-title" [id]="titleId">{{ title }}</h3>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host { display: contents; }

    .modal-overlay {
      position: fixed;
      inset: 0;
      background:
        radial-gradient(
          ellipse at center,
          rgba(8, 7, 10, 0.72) 0%,
          rgba(8, 7, 10, 0.94) 100%
        );
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      backdrop-filter: blur(10px) saturate(0.85);
      -webkit-backdrop-filter: blur(10px) saturate(0.85);
      padding: 1.25rem;
      animation: modalOverlayIn 0.22s ease-out;
      will-change: opacity;
    }

    .modal-content {
      position: relative;
      background:
        linear-gradient(
          162deg,
          rgba(42, 31, 58, 0.97) 0%,
          rgba(22, 19, 28, 0.98) 55%,
          rgba(22, 19, 28, 0.98) 100%
        );
      border: 1px solid rgba(74, 63, 90, 0.55);
      border-radius: 14px;
      padding: 2.4rem 2.6rem 2.2rem;
      max-width: 480px;
      width: 100%;
      max-height: 85vh;
      overflow-y: auto;
      overflow-x: hidden;
      box-sizing: border-box;
      text-align: left;
      color: #d8d2c0;
      font-family: "Nanum Myeongjo", serif;
      font-size: 1rem;
      line-height: 1.6;
      box-shadow:
        0 28px 80px rgba(0, 0, 0, 0.72),
        0 8px 24px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(8, 7, 10, 0.6),
        inset 0 1px 0 rgba(239, 232, 216, 0.06),
        inset 0 0 0 1px rgba(157, 125, 250, 0.04);
      animation: modalScaleIn 0.28s cubic-bezier(0.34, 1.45, 0.5, 1);
      will-change: transform, opacity;
    }
    .modal-content::-webkit-scrollbar { width: 6px; }
    .modal-content::-webkit-scrollbar-track {
      background: rgba(8, 7, 10, 0.4);
      border-radius: 6px;
    }
    .modal-content::-webkit-scrollbar-thumb {
      background: rgba(74, 63, 90, 0.7);
      border-radius: 6px;
    }
    .modal-content::-webkit-scrollbar-thumb:hover {
      background: rgba(157, 125, 250, 0.55);
    }

    .stats-modal-content {
      max-width: 640px;
    }

    .modal-title {
      font-family: "Creepster", cursive;
      font-weight: 400;
      font-size: clamp(1.7rem, 4.4vw, 2.2rem);
      color: #ffb454;
      margin: 0 0 1.4rem 0;
      padding: 0 2.4rem 1rem 0;
      line-height: 1.2;
      letter-spacing: 1.6px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      text-shadow:
        0 0 14px rgba(255, 180, 84, 0.45),
        0 0 32px rgba(255, 180, 84, 0.18),
        0 1px 0 rgba(8, 7, 10, 0.8);
      border-bottom: 1px solid rgba(74, 63, 90, 0.55);
      position: relative;
    }
    .modal-title::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 56px;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(255, 180, 84, 0.85) 0%,
        rgba(255, 180, 84, 0) 100%
      );
    }

    .modal-x {
      position: absolute;
      top: 14px;
      right: 14px;
      width: 32px;
      height: 32px;
      padding: 0;
      border: 1px solid rgba(74, 63, 90, 0.65);
      border-radius: 50%;
      background: rgba(8, 7, 10, 0.65);
      color: #d8d2c0;
      font-family: "Nanum Myeongjo", serif;
      font-size: 1.4rem;
      line-height: 1;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        color 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease,
        transform 0.28s cubic-bezier(0.34, 1.45, 0.5, 1),
        box-shadow 0.2s ease;
      z-index: 2;
    }
    .modal-x span {
      transform: translateY(-1px);
      display: inline-block;
    }
    .modal-x:hover {
      color: #efe8d8;
      border-color: rgba(193, 55, 74, 0.75);
      background: rgba(193, 55, 74, 0.18);
      transform: rotate(90deg);
      box-shadow:
        0 0 0 1px rgba(193, 55, 74, 0.25),
        0 0 16px rgba(193, 55, 74, 0.4);
    }
    .modal-x:active {
      transform: rotate(90deg) scale(0.94);
    }
    .modal-x:focus-visible {
      outline: 2px solid #ffb454;
      outline-offset: 2px;
      box-shadow: 0 0 14px rgba(255, 180, 84, 0.45);
    }

    @keyframes modalScaleIn {
      from {
        transform: scale(0.9) translateY(10px);
        opacity: 0;
        filter: blur(2px);
      }
      to {
        transform: scale(1) translateY(0);
        opacity: 1;
        filter: blur(0);
      }
    }
    @keyframes modalOverlayIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    @media (prefers-reduced-motion: reduce) {
      .modal-content,
      .modal-overlay,
      .modal-x {
        animation: none !important;
        transition: none !important;
      }
    }

    @media (max-width: 600px) {
      .modal-overlay { padding: 0.75rem; }
      .modal-content {
        padding: 1.7rem 1.4rem 1.5rem;
        border-radius: 12px;
      }
      .modal-title {
        font-size: 1.5rem;
        padding: 0 2.2rem 0.8rem 0;
        margin-bottom: 1rem;
        letter-spacing: 1.2px;
      }
      .modal-x { top: 10px; right: 10px; width: 30px; height: 30px; }
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
