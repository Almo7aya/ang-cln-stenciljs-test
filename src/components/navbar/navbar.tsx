import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ang-cln-navbar'
})
export class Navbar {
  render() {
    return (
      <Host class="navbar">
        <section class="navbar-items-holder navbar-items-holder-main">
          <a class="navbar-item active navbar-item-main">
            <div class="navbar-item-icon">
              <i class="material-icons">
                home
                        </i>
            </div>
            <div class="navbar-item-text">
              Home
                    </div>
          </a>
          <a class="navbar-item navbar-item-main">
            <div class="navbar-item-icon">
              <i class="material-icons">
                headset
                        </i>
            </div>
            <div class="navbar-item-text">
              Personal DJ
                    </div>
          </a>
          <a class="navbar-item navbar-item-main">
            <div class="navbar-item-icon">
              <i class="material-icons">
                people
                        </i>
            </div>
            <div class="navbar-item-text">
              Friends
                    </div>
          </a>

          <section class="navbar-heading navbar-item-main">
            <div class="navbar-heading-title">
              my music
                    </div>
            <div class="navbar-heading-button">
              <button>View</button>
            </div>
          </section>

          <a class="navbar-item navbar-item-main">
            <div class="navbar-item-icon">
              <i class="material-icons">
                cloud_download
                        </i>
            </div>
            <div class="navbar-item-text">
              My Downloads
                    </div>
          </a>
          <a class="navbar-item navbar-item-main">
            <div class="navbar-item-icon">
              <i class="material-icons">
                star
                        </i>
            </div>
            <div class="navbar-item-text">
              Liked Songs
                    </div>
          </a>
          <a class="navbar-item navbar-item-main">
            <div class="navbar-item-icon">
              <i class="material-icons">
                perm_media
                        </i>
            </div>
            <div class="navbar-item-text">
              Liked Albums
                    </div>
          </a>
          <a class="navbar-item navbar-item-main">
            <div class="navbar-item-icon">
              <i class="material-icons">
                mic
                        </i>
            </div>
            <div class="navbar-item-text">
              Followed Artists
                    </div>
          </a>

          <section class="navbar-heading">
            <div class="navbar-heading-title">
              my playlists
                    </div>
            <div class="navbar-heading-button">
              <button>View</button>
            </div>
          </section>

          <a class="navbar-item">
            <div class="navbar-item-img">
              <img src="https://anghamicoverart1.akamaized.net/webp/?id=84590449&size=296" />
            </div>
            <div class="navbar-item-text">
              Nights
                    </div>
          </a>
          <a class="navbar-item">
            <div class="navbar-item-img">
              <img src="https://anghamicoverart1.akamaized.net/webp/?id=84261829&size=296" />
            </div>
            <div class="navbar-item-text">
              Arabic
                    </div>
          </a>
          <a class="navbar-item">
            <div class="navbar-item-img">
              <img src="https://anghamicoverart1.akamaized.net/webp/?id=78367865&size=296" />
            </div>
            <div class="navbar-item-text">
              Chill
                    </div>
          </a>
          <a class="navbar-item">
            <div class="navbar-item-img">
              <img src="https://anghamicoverart1.akamaized.net/webp/?id=75710302&size=296" />
            </div>
            <div class="navbar-item-text">
              Rock & Metal
                    </div>
          </a>
          <a class="navbar-item navbar-item-add-playlist">
            <div class="navbar-item-icon">
              <i class="material-icons">
                add
                        </i>
            </div>
            <div class="navbar-item-text">
              New playlist
                    </div>
          </a>

          <h5 class="navbar-lead">
            © 2019 Anghami <p class="beating-heart">❤</p> maybe!
                </h5>
        </section>

        <a class="navbar-toggler" href="#navbar-collapsed">
          <i class="material-icons">
            keyboard_arrow_left
                </i>
        </a>
        <a class="navbar-toggler navbar-toggler-open" href="#">
          <i class="material-icons">
            keyboard_arrow_right
                </i>
        </a>
      </Host>
    )
  }
}
