import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self,
} from '@angular/core'
import { NgControl, UntypedFormControl } from '@angular/forms'

import { Subject } from 'rxjs'
import { debounceTime, takeUntil } from 'rxjs/operators'

import { TRANSLOCO_SCOPE, TranslocoScope } from '@ngneat/transloco'
import type { InputmaskOptions } from '../input-mask'

import { BaseControlValueAccessorComponent } from '../../lib/shared/base-control-value-accessor/base-control-value-accessor.component'

/**
 * Input fields allow users to add and edit text.
 * https://designlibrary.sebgroup.com/components/component-input
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngg-input ngv-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent
  extends BaseControlValueAccessorComponent
  implements OnInit, OnDestroy
{
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook = 'input'
  /** Type of input field. Should avoid types that modify field too much such as range. */
  @Input() type = 'text'
  /** Text shown before input has a written value. */
  @Input() placeholder?: string
  /** If set to "on", hint for form autofill feature. */
  @Input() autocomplete = 'on'
  /** If set to true, the value will not be editable. */
  @Input() readonly = false
  /** If set to true, enables the Angular template-driven email validator. */
  @Input() email = false
  /** Minimum value required for numeric input types. */
  @Input() min = 0
  /** Maximum value required for numeric input types. */
  @Input() max = Number.MAX_SAFE_INTEGER
  /** Incremental values that are valid for numeric input types. */
  @Input() step = 1
  /** Minimum length (number of characters) of value. */
  @Input() set minLength(length: number) {
    this._minlength = length
  }
  /**
   * Minimum length (number of characters) of value.
   * @deprecated minlength triggers angular-template-validation. Use @Input() minLength instead.
   */
  @Input() set minlength(length: number) {
    this._minlength = length
  }
  /** Maximum length (number of characters) of value. */
  @Input() set maxLength(length: number) {
    this._maxlength = length
    this.writeValue(this.state)
  }
  /**
   * Maximum length (number of characters) of value.
   * @deprecated maxlength triggers angular-template-validation. Use @Input() maxLength instead.
   */
  @Input() set maxlength(length: number) {
    this._maxlength = length
    this.writeValue(this.state)
  }
  private _maxlength = Number.MAX_SAFE_INTEGER
  get maxlength(): number {
    return this._maxlength
  }

  private _minlength = 0
  get minlength(): number {
    return this._minlength
  }

  /** Wether to show label that tells how many characters are still left to be entered. Will only be set if maxLength is also set */
  private _showCharacterCountDown = true
  @Input() set showCharacterCountdown(option: boolean) {
    this._showCharacterCountDown = option
  }
  get showCharacterCountdown(): boolean {
    return this._showCharacterCountDown && this.hasMaxLength
  }

  /** Pattern the value must match to be valid. */
  @Input() pattern = ''
  /** Amount of time to wait until emitting (ngvINput) event */
  @Input() debounceTime: number = 500
  /**
   * @deprecated
   * Text to put in badge
   */
  @Input() badgeText = ''

  /** Settings for input mask if requested */
  private _inputMask!: InputmaskOptions<any>
  @Input() set inputMask(newInputMask: InputmaskOptions<any>) {
    // Hide input field
    this.hideInput$.next(true)
    this.cdr.detectChanges()
    this._inputMask = newInputMask

    // Show input field to reload input-mask settings upon update
    setTimeout(() => {
      this.hideInput$.next(false)
      this.cdr.detectChanges()
    }, 200)
  }
  get inputMask(): InputmaskOptions<any> {
    return this._inputMask
  }

  /** Emits every time the value of the inner input field changes, independantly of updates on the formcontroller */
  @Output() ngvInput = new EventEmitter<any>()

  private _formControl = new UntypedFormControl()
  get control(): UntypedFormControl {
    return (this.ngControl?.control as UntypedFormControl) ?? this._formControl
  }
  /** Returns if maxlength is used */
  get hasMaxLength(): boolean {
    return !!this.maxlength && this.maxlength !== Number.MAX_SAFE_INTEGER
  }

  /** Toggler for showing or hiding the input field */
  hideInput$ = new Subject<boolean>()

  protected inputChange$ = new Subject<any>()
  protected _destroy$ = new Subject<boolean>()

  constructor(
    @Self() @Optional() public ngControl: NgControl,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
    protected cdr: ChangeDetectorRef,
  ) {
    super(ngControl, translocoScope, cdr)
  }

  ngOnInit() {
    super.ngOnInit()
    this.inputChange$
      .pipe(takeUntil(this._destroy$), debounceTime(this.debounceTime))
      .subscribe((inputValue) => {
        this.ngvInput.emit(inputValue)
      })
  }

  ngOnDestroy(): void {
    this._destroy$.next(true)
    this._destroy$.complete()
  }

  writeValue(value: any) {
    // maxLength will only work with string values
    if (value?.length && value.length > this.maxlength) {
      // cut value to match max length
      this.state = this.cutTextAfterMaxLength(value)
      if (value.length !== this.state.length) {
        this.onChange(this.state)
      }
      // emit value
    } else {
      // update state
      this.state = value
    }
    this.cdr.detectChanges()
  }

  cutTextAfterMaxLength(value: any): any {
    if (typeof value === 'string') {
      return value.substring(0, this.maxlength)
    }
    return value
  }

  /** @internal */
  onInput(event: Event) {
    event.stopPropagation()
    if (this.disabled) return
    this.state = (event.target as HTMLInputElement).value
    this.onChange(this.state)
    this.inputChange$.next(this.state)
  }
}
