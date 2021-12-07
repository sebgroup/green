import { createPopper } from '@popperjs/core'
import {
  create,
  active,
  open,
  close,
  toggle,
  select,
  loop,
  popper,
  keypress,
} from './reducers'
import {
  fromEvent,
  merge,
} from 'rxjs'
import {
  AbstractDropdown,
  DropdownHandler,
  DropdownListener,
  DropdownOption,
} from './types'

interface DropdownArgs {
  id?: string
  options: DropdownOption[]
  loop?: boolean
  text?: string
}
export const createDropdown = (
  init: DropdownArgs,
  toggler: HTMLElement,
  listbox: HTMLElement,
  listener: DropdownListener
): DropdownHandler =>  {
  const _handler: Partial<DropdownHandler> = {
    toggler,
    listbox,
    dropdown: create(init),
    isAlive: true,
  }
  const handler = _handler as DropdownHandler

  handler.active = (isActive) => update(handler, listener, active(handler.dropdown, isActive))
  handler.loop = (isLooping) => update(handler, listener, loop(handler.dropdown, isLooping))
  handler.open = () => update(handler, listener, open(handler.dropdown))
  handler.close = () => update(handler, listener, close(handler.dropdown))
  handler.toggle = () => update(handler, listener, toggle(handler.dropdown))
  handler.select = (selection) => update(handler, listener, close(select(handler.dropdown, selection)))

  handler.subscription = merge<KeyboardEvent, UIEvent>(
    fromEvent(document, 'keydown'),
    fromEvent(window, 'resize'),
  ).subscribe((event) => {
    if (event.type === 'keydown') {
      if (!handler.dropdown.isActive) return
      event.preventDefault()

      const { key } = event as KeyboardEvent
      update(handler, listener, keypress(handler.dropdown, key))
    } else {
      pop(handler, listener, (event.target as Window).innerWidth)
    }
  })

  handler.destroy = () => {
    handler.subscription?.unsubscribe()
    handler.popper?.destroy()
    handler.isAlive = false
  }

  pop(handler, listener)

  return handler
}

const update = async (handler: DropdownHandler, listener: DropdownListener, newState?: AbstractDropdown) => {
  if (!handler.isAlive) return

  const oldState = handler.dropdown
  if (newState) handler.dropdown = newState

  if (handler.popper) {
    const { styles } = await handler.popper.update()
    if (styles?.popper) {
      const oldStyle = handler.dropdown?.elements?.listbox?.attributes?.style
      const style = styles.popper as CSSStyleDeclaration

      if (JSON.stringify(oldStyle) !== JSON.stringify(style)) {
        handler.dropdown = popper(handler.dropdown, style)
      }
    }
  }
  if (handler.dropdown !== oldState) {
    listener(handler.dropdown)
  }
}
const pop = (handler: DropdownHandler, listener: DropdownListener, innerWidth: number = window.innerWidth) => {
  if (innerWidth < 576 && handler.popper) {
    handler.popper.destroy()
    handler.popper = undefined

    update(handler, listener, popper(handler.dropdown))
  } else if (innerWidth >= 576 && !handler.popper) {
    handler.popper = createPopper(handler.toggler, handler.listbox, {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 4],
          },
        },
      ],
    })

    update(handler, listener, handler.dropdown)
  }
}

export default createDropdown
