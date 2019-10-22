import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'ang-cln-header',
})
export class Header {

  render() {
    return (
      <Host class="header">
        <a href="/" class="header-logo-link">
        </a>

        <section class="header-search">
          <input class="header-search-box" type="search" placeholder="search for a song.." />
        </section>

        <section class="header-actions">
          <button class="header-btn header-btn-link">Install Anghami for Windows</button>
          <button class="header-btn header-dropdown">Arabic + Int'l</button>

          <a class="header-icon" href="#">
            <i class="material-icons">
              notifications
            </i>
          </a>
          <a class="header-icon" href="#">
            <i class="material-icons">
              info
            </i>
          </a>
          <a class="header-icon" href="#">
            <i class="material-icons">
              settings
            </i>
          </a>

          <a href="#" class="header-user-profile plus">
            <span class="plus-mark">
              PLUS
            </span>
          </a>
        </section>
      </Host>
    )
  }
}
