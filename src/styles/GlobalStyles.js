import { createGlobalStyle } from 'styled-components';

// IMPORT FONTS
import ManropeExtraLight from '../assets/fonts/Manrope-ExtraLight.ttf';
import ManropeLight from '../assets/fonts/Manrope-Light.ttf';
import Manrope from '../assets/fonts/Manrope-Regular.ttf';
import ManropeMedium from '../assets/fonts/Manrope-Medium.ttf';
import ManropeSemiBold from '../assets/fonts/Manrope-SemiBold.ttf';
import ManropeBold from '../assets/fonts/Manrope-Bold.ttf';
import ManropeExtraBold from '../assets/fonts/Manrope-ExtraBold.ttf';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'ManropeExtraLight';
    src: url(${ManropeExtraLight}) format('truetype');
    font-weight: 200;
  }
  
  @font-face {
    font-family: 'ManropeLight';
    src: url(${ManropeLight}) format('truetype');
    font-weight: 300;
  }
  
  @font-face {
    font-family: 'Manrope';
    src: url(${Manrope}) format('truetype');
    font-weight: 400;
  }
  
  @font-face {
    font-family: 'ManropeMedium';
    src: local('ManropeMedium'),
      url(${ManropeMedium}) format('truetype');
    font-weight: 500;
  }
  
  @font-face {
    font-family: 'ManropeSemiBold';
    src: url(${ManropeSemiBold}) format('truetype');
    font-weight: 600;
  }
  
  @font-face {
    font-family: 'ManropeBold';
    src: url(${ManropeBold}) format('truetype');
    font-weight: 700;
  }
  
  @font-face {
    font-family: 'ManropeExtraBold';
    src: url(${ManropeExtraBold}) format('truetype');
    font-weight: 800;
  }
    html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-weight: normal;
        vertical-align: baseline;
        background: transparent;
    }

    main, article, aside, figure, footer, header, nav, section, details, summary {display: block;}

    /* Handle box-sizing while better addressing child elements: */
    html {
        box-sizing: border-box;
        font-size: 62.5%; /* 1rem == 10px */
    }

    body, button {
        font-family: 'Manrope', sans-serif;
        font-size: 1.6rem;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    /* consider resetting the default cursor: https://gist.github.com/murtaugh/5247154 */

    /* Responsive images and other embedded objects */
    /* if you don't have full control over 'img' tags (if you have to overcome attributes), consider adding height: auto */
    img,
    object,

    /*
    Note: keeping IMG here will cause problems if you're using foreground images as sprites.
        In fact, it *will* cause problems with Google Maps' controls at small size.
        If this is the case for you, try uncommenting the following:

    #map img {
            max-width: none;
    }
    */

    /* force a vertical scrollbar to prevent a jumpy page */
    html

    /* we use a lot of ULs that aren't bulleted.
        you'll have to restore the bullets within content,
        which is fine because they're probably customized anyway */
    ul {list-style: none;}

    blockquote, q {quotes: none;}

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {content: ''; content: none;}

    a {margin: 0; padding: 0; font-size: 100%; text-decoration: none; vertical-align: baseline; background: transparent;}

    del {text-decoration: line-through;}

    abbr[title], dfn[title] {border-bottom: 1px dotted #000; cursor: help;}

    /* tables still need cellspacing="0" in the markup */
    table {border-collapse: separate; border-spacing: 0;font: 100%;font-size: inherit;}
    th {font-weight: bold; vertical-align: bottom;}
    td {font-weight: normal; vertical-align: top;}

    hr {display: block; height: 1px; border: 0; border-top: 1px solid #ccc; margin: 1em 0; padding: 0;}

    input, select {vertical-align: middle;}

    pre {
        white-space: pre; /* CSS2 */
        white-space: pre-wrap; /* CSS 2.1 */
        white-space: pre-line; /* CSS 3 (and 2.1 as well, actually) */
        word-wrap: break-word; /* IE */
    }

    input[type="radio"] {
      vertical-align: text-bottom;
    }
    input[type="checkbox"] {
      vertical-align: bottom;
    }

    select, input, textarea {font: 99% sans-serif;}

    small {font-size: 85%;}

    strong {font-weight: bold;}

    td, td img {vertical-align: top;}

    /* Make sure sup and sub don't mess with your line-heights http://gist.github.com/413930 */
    sub, sup {font-size: 75%; line-height: 0; position: relative;}
    sup {top: -0.5em;}
    sub {bottom: -0.25em;}

    /* standardize any monospaced elements */

    /* hand cursor on clickable elements */
    .clickable,
    label,
    input[type=button],
    input[type=submit],
    input[type=file],
    button {cursor: pointer;}

    button[disabled] {
      user-select: none;
      pointer-events: none;
    }

    /* Webkit browsers add a 2px margin outside the chrome of form elements */
    button, input, select, textarea {margin: 0;}

    /* make buttons play nice in IE */
    button,
    input[type=button] {width: auto; overflow: visible;}

    /* let's clear some floats */
    .clearfix:after { content: " "; display: block; clear: both; }
`;
