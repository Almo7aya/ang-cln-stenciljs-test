/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AngClnHeader {}
  interface AngClnNavbar {}
  interface AngClnPlayer {
    'artist': string;
    'artworkId': number;
    'duration': number;
    'playState': boolean;
    'progress': number;
    'repeatState': boolean;
    'shuffleState': boolean;
    'trackTitle': string;
  }
}

declare global {


  interface HTMLAngClnHeaderElement extends Components.AngClnHeader, HTMLStencilElement {}
  const HTMLAngClnHeaderElement: {
    prototype: HTMLAngClnHeaderElement;
    new (): HTMLAngClnHeaderElement;
  };

  interface HTMLAngClnNavbarElement extends Components.AngClnNavbar, HTMLStencilElement {}
  const HTMLAngClnNavbarElement: {
    prototype: HTMLAngClnNavbarElement;
    new (): HTMLAngClnNavbarElement;
  };

  interface HTMLAngClnPlayerElement extends Components.AngClnPlayer, HTMLStencilElement {}
  const HTMLAngClnPlayerElement: {
    prototype: HTMLAngClnPlayerElement;
    new (): HTMLAngClnPlayerElement;
  };
  interface HTMLElementTagNameMap {
    'ang-cln-header': HTMLAngClnHeaderElement;
    'ang-cln-navbar': HTMLAngClnNavbarElement;
    'ang-cln-player': HTMLAngClnPlayerElement;
  }
}

declare namespace LocalJSX {
  interface AngClnHeader {}
  interface AngClnNavbar {}
  interface AngClnPlayer {
    'artist'?: string;
    'artworkId'?: number;
    'duration'?: number;
    'onNext'?: (event: CustomEvent<any>) => void;
    'onPrevious'?: (event: CustomEvent<any>) => void;
    'onSeekTo'?: (event: CustomEvent<any>) => void;
    'onTogglePlayState'?: (event: CustomEvent<any>) => void;
    'playState'?: boolean;
    'progress'?: number;
    'repeatState'?: boolean;
    'shuffleState'?: boolean;
    'trackTitle'?: string;
  }

  interface IntrinsicElements {
    'ang-cln-header': AngClnHeader;
    'ang-cln-navbar': AngClnNavbar;
    'ang-cln-player': AngClnPlayer;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ang-cln-header': LocalJSX.AngClnHeader & JSXBase.HTMLAttributes<HTMLAngClnHeaderElement>;
      'ang-cln-navbar': LocalJSX.AngClnNavbar & JSXBase.HTMLAttributes<HTMLAngClnNavbarElement>;
      'ang-cln-player': LocalJSX.AngClnPlayer & JSXBase.HTMLAttributes<HTMLAngClnPlayerElement>;
    }
  }
}

