import { Component, Host, Prop, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'ang-cln-player'
})
export class Player {
  @Prop() playState: boolean = false;
  @Prop() shuffleState: boolean = false;
  @Prop() repeatState: boolean = false;
  @Prop() progress: number = 0;
  @Prop() duration: number = 0;
  @Prop() trackTitle: string = 'SONG';
  @Prop() artist: string = 'ARTIST';
  @Prop() artworkId: number = null;

  @Event() togglePlayState: EventEmitter;
  @Event() next: EventEmitter;
  @Event() previous: EventEmitter;
  @Event() seekTo: EventEmitter;

  render() {
    return (<Host class="player">
      <div class="player-progress">
        <div class="player-progress-line" onClick={(e) => {
          const containerWidth = (e.target as any).getClientRects()[0].width;
          const width = e.pageX - (e.target as any).getClientRects()[0].left;
          const percenage = (width / containerWidth) * 100;
          this.seekTo.emit(percenage);
        }}>
          <div class="player-progress-current"
            style={{ width: isNaN(this.progress / this.duration * 100) ? 0 + '%' : this.progress / this.duration * 100 + '%' }}></div>
        </div>
      </div>

      <div class="player-holder">
        <div class="player-controls">
          <i class={{
            'material-icons': true,
            'active': this.repeatState
          }}>
            repeat
            </i>
          <i class="material-icons" onClick={() => this.previous.emit()}>
            skip_previous
            </i>
          <div class="player-play" onClick={() => this.togglePlayState.emit()}>
            {
              this.playState ? <i class="material-icons">pause</i> : <i class="material-icons">play_arrow</i>
            }
          </div>

          <i class="material-icons" onClick={() => this.next.emit()}>
            skip_next
            </i>
          <i class={{
            'material-icons': true,
            'active': this.shuffleState
          }}>
            shuffle
            </i>
        </div>

        <div class="player-current-song-info">
          {
            this.artworkId ? <img class="player-current-song-info-img"
              src={`https://anghamicoverart1.akamaized.net/webp/?id=${this.artworkId}&size=90`} />
              : <img class="player-current-song-info-img" src='' />
          }
          <div class="player-current-song-info-text">
            <h4>{this.trackTitle}</h4>
            <p>{this.artist}</p>
          </div>

          <div class="player-current-song-info-time">
            <div class="playing-song-timer">
              {this.progress}
            </div>
            / <div class="player-current-song-info-time-light">{this.duration}</div>
          </div>
        </div>

        <div class="player-actions">
          <i class="material-icons">
            music_video
            </i>
          <i class="material-icons">
            star
            </i>
          <i class="material-icons">
            block
            </i>
          <i class="material-icons">
            share
            </i>
          <i class="material-icons">
            more_horiz
            </i>
        </div>

        <div class="player-other-devices">
          <i class="material-icons">
            devices_other
            </i>
        </div>

        <div class="player-volume">
          <i class="material-icons">
            volume_up
            </i>
        </div>

        <div class="player-queue">
          <i class="material-icons">
            queue
            </i>
        </div>
      </div>
    </Host>)
  }
}
