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
          rgba(13, 13, 18, 0.55) 0%,
          rgba(0, 0, 0, 0.88) 100%
        );
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      padding: 1rem;
      animation: modalOverlayIn 0.22s ease-out;
    }

    .modal-content {
      position: relative;
      background:
        linear-gradient(
          145deg,
          rgba(28, 28, 40, 0.97) 0%,
          rgba(22, 22, 30, 0.97) 60%,
          rgba(36, 22, 48, 0.97) 100%
        );
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(179, 136, 255, 0.35);
      border-radius: 18px;
      padding: 2.2rem 2.4rem;
      max-width: 520px;
      width: 100%;
      max-height: 85vh;
      overflow-y: auto;
      overflow-x: hidden;
      box-sizing: border-box;
      text-align: center;
      color: #e8e8f0;
      box-shadow:
        0 24px 70px rgba(0, 0, 0, 0.7),
        0 0 40px rgba(179, 136, 255, 0.18),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
      animation: modalScaleIn 0.3s cubic-bezier(0.34, 1.45, 0.5, 1);
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
      max-width: 640px;
      text-align: left;
    }

    .modal-title {
      font-family: "Creepster", cursive;
      font-size: clamp(1.55rem, 4.2vw, 2.05rem);
      color: #e8d4ff;
      margin: 0 0 1rem 0;
      padding: 0 2.4rem 0.9rem;
      line-height: 1.18;
      word-wrap: break-word;
      overflow-wrap: break-word;
      letter-spacing: 1.2px;
      text-shadow:
        0 0 12px rgba(179, 136, 255, 0.55),
        0 0 28px rgba(179, 136, 255, 0.25);
      border-bottom: 1px solid rgba(179, 136, 255, 0.18);
    }

    .modal-x {
      position: absolute;
      top: 12px;
      right: 14px;
      width: 32px;
      height: 32px;
      padding: 0;
      border: 1px solid rgba(179, 136, 255, 0.25);
      border-radius: 50%;
      background: rgba(13, 13, 18, 0.6);
      color: #a0a0bb;
      font-size: 1.35rem;
      line-height: 1;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.18s ease, border-color 0.18s ease,
                  background 0.18s ease, transform 0.18s ease,
                  box-shadow 0.18s ease;
      z-index: 2;
    }
    .modal-x span {
      transform: translateY(-1px);
      display: inline-block;
    }
    .modal-x:hover {
      color: #fff;
      border-color: rgba(230, 57, 70, 0.7);
      background: rgba(230, 57, 70, 0.18);
      transform: rotate(90deg);
      box-shadow: 0 0 14px rgba(230, 57, 70, 0.35);
    }
    .modal-x:focus-visible {
      outline: 2px solid #ffd54f;
      outline-offset: 2px;
    }

    @keyframes modalScaleIn {
      from { transform: scale(0.88) translateY(8px); opacity: 0; }
      to   { transform: scale(1) translateY(0); opacity: 1; }
    }
    @keyframes modalOverlayIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    @media (prefers-reduced-motion: reduce) {
      .modal-content,
      .modal-overlay {
        animation: none !important;
      }
    }

    @media (max-width: 600px) {
      .modal-content { padding: 1.5rem 1.2rem; border-radius: 14px; }
      .modal-title {
        font-size: 1.45rem;
        padding-bottom: 0.7rem;
        margin-bottom: 0.8rem;
      }
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
