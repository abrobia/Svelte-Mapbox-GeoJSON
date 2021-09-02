
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function (internal, svelte, store, transition, mapbox) {
  'use strict';

  mapbox = mapbox && Object.prototype.hasOwnProperty.call(mapbox, 'default') ? mapbox['default'] : mapbox;

  const stateDrawer = store.writable(false);

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  function createFocusTrapInstance(surfaceEl, focusTrapFactory, initialFocusEl) {
      return focusTrapFactory(surfaceEl, { initialFocusEl: initialFocusEl });
  }
  function isScrollable(el) {
      return el ? el.scrollHeight > el.offsetHeight : false;
  }
  /**
   * For scrollable content, returns true if the content has not been scrolled
   * (that is, the scroll content is as the "top"). This is used in full-screen
   * dialogs, where the scroll divider is expected only to appear once the
   * content has been scrolled "underneath" the header bar.
   */
  function isScrollAtTop(el) {
      return el ? el.scrollTop === 0 : false;
  }
  /**
   * For scrollable content, returns true if the content has been scrolled all the
   * way to the bottom. This is used in full-screen dialogs, where the footer
   * scroll divider is expected only to appear when the content is "cut-off" by
   * the footer bar.
   */
  function isScrollAtBottom(el) {
      return el ? Math.ceil(el.scrollHeight - el.scrollTop) === el.clientHeight :
          false;
  }
  function areTopsMisaligned(els) {
      var tops = new Set();
      [].forEach.call(els, function (el) { return tops.add(el.offsetTop); });
      return tops.size > 1;
  }

  var util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createFocusTrapInstance: createFocusTrapInstance,
    isScrollable: isScrollable,
    isScrollAtTop: isScrollAtTop,
    isScrollAtBottom: isScrollAtBottom,
    areTopsMisaligned: areTopsMisaligned
  });

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCFoundation = /** @class */ (function () {
      function MDCFoundation(adapter) {
          if (adapter === void 0) { adapter = {}; }
          this.adapter = adapter;
      }
      Object.defineProperty(MDCFoundation, "cssClasses", {
          get: function () {
              // Classes extending MDCFoundation should implement this method to return an object which exports every
              // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
              return {};
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCFoundation, "strings", {
          get: function () {
              // Classes extending MDCFoundation should implement this method to return an object which exports all
              // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
              return {};
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCFoundation, "numbers", {
          get: function () {
              // Classes extending MDCFoundation should implement this method to return an object which exports all
              // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
              return {};
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCFoundation, "defaultAdapter", {
          get: function () {
              // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
              // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
              // validation.
              return {};
          },
          enumerable: false,
          configurable: true
      });
      MDCFoundation.prototype.init = function () {
          // Subclasses should override this method to perform initialization routines (registering events, etc.)
      };
      MDCFoundation.prototype.destroy = function () {
          // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
      };
      return MDCFoundation;
  }());

  /**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';
  /**
   * Utility to trap focus in a given root element, e.g. for modal components such
   * as dialogs. The root should have at least one focusable child element,
   * for setting initial focus when trapping focus.
   * Also tracks the previously focused element, and restores focus to that
   * element when releasing focus.
   */
  var FocusTrap = /** @class */ (function () {
      function FocusTrap(root, options) {
          if (options === void 0) { options = {}; }
          this.root = root;
          this.options = options;
          // Previously focused element before trapping focus.
          this.elFocusedBeforeTrapFocus = null;
      }
      /**
       * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
       * otherwises sets initial focus to the first focusable child element.
       */
      FocusTrap.prototype.trapFocus = function () {
          var focusableEls = this.getFocusableElements(this.root);
          if (focusableEls.length === 0) {
              throw new Error('FocusTrap: Element must have at least one focusable child.');
          }
          this.elFocusedBeforeTrapFocus =
              document.activeElement instanceof HTMLElement ? document.activeElement :
                  null;
          this.wrapTabFocus(this.root);
          if (!this.options.skipInitialFocus) {
              this.focusInitialElement(focusableEls, this.options.initialFocusEl);
          }
      };
      /**
       * Releases focus from `root`. Also restores focus to the previously focused
       * element.
       */
      FocusTrap.prototype.releaseFocus = function () {
          [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS))
              .forEach(function (sentinelEl) {
              sentinelEl.parentElement.removeChild(sentinelEl);
          });
          if (!this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus) {
              this.elFocusedBeforeTrapFocus.focus();
          }
      };
      /**
       * Wraps tab focus within `el` by adding two hidden sentinel divs which are
       * used to mark the beginning and the end of the tabbable region. When
       * focused, these sentinel elements redirect focus to the first/last
       * children elements of the tabbable region, ensuring that focus is trapped
       * within that region.
       */
      FocusTrap.prototype.wrapTabFocus = function (el) {
          var _this = this;
          var sentinelStart = this.createSentinel();
          var sentinelEnd = this.createSentinel();
          sentinelStart.addEventListener('focus', function () {
              var focusableEls = _this.getFocusableElements(el);
              if (focusableEls.length > 0) {
                  focusableEls[focusableEls.length - 1].focus();
              }
          });
          sentinelEnd.addEventListener('focus', function () {
              var focusableEls = _this.getFocusableElements(el);
              if (focusableEls.length > 0) {
                  focusableEls[0].focus();
              }
          });
          el.insertBefore(sentinelStart, el.children[0]);
          el.appendChild(sentinelEnd);
      };
      /**
       * Focuses on `initialFocusEl` if defined and a child of the root element.
       * Otherwise, focuses on the first focusable child element of the root.
       */
      FocusTrap.prototype.focusInitialElement = function (focusableEls, initialFocusEl) {
          var focusIndex = 0;
          if (initialFocusEl) {
              focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
          }
          focusableEls[focusIndex].focus();
      };
      FocusTrap.prototype.getFocusableElements = function (root) {
          var focusableEls = [].slice.call(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button'));
          return focusableEls.filter(function (el) {
              var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' ||
                  el.getAttribute('disabled') != null ||
                  el.getAttribute('hidden') != null ||
                  el.getAttribute('aria-hidden') === 'true';
              var isTabbableAndVisible = el.tabIndex >= 0 &&
                  el.getBoundingClientRect().width > 0 &&
                  !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
              var isProgrammaticallyHidden = false;
              if (isTabbableAndVisible) {
                  var style = getComputedStyle(el);
                  isProgrammaticallyHidden =
                      style.display === 'none' || style.visibility === 'hidden';
              }
              return isTabbableAndVisible && !isProgrammaticallyHidden;
          });
      };
      FocusTrap.prototype.createSentinel = function () {
          var sentinel = document.createElement('div');
          sentinel.setAttribute('tabindex', '0');
          // Don't announce in screen readers.
          sentinel.setAttribute('aria-hidden', 'true');
          sentinel.classList.add(FOCUS_SENTINEL_CLASS);
          return sentinel;
      };
      return FocusTrap;
  }());

  var domFocusTrap = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FocusTrap: FocusTrap
  });

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  /**
   * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
   * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
   */
  function closest(element, selector) {
      if (element.closest) {
          return element.closest(selector);
      }
      var el = element;
      while (el) {
          if (matches(el, selector)) {
              return el;
          }
          el = el.parentElement;
      }
      return null;
  }
  function matches(element, selector) {
      var nativeMatches = element.matches
          || element.webkitMatchesSelector
          || element.msMatchesSelector;
      return nativeMatches.call(element, selector);
  }
  /**
   * Used to compute the estimated scroll width of elements. When an element is
   * hidden due to display: none; being applied to a parent element, the width is
   * returned as 0. However, the element will have a true width once no longer
   * inside a display: none context. This method computes an estimated width when
   * the element is hidden or returns the true width when the element is visble.
   * @param {Element} element the element whose width to estimate
   */
  function estimateScrollWidth(element) {
      // Check the offsetParent. If the element inherits display: none from any
      // parent, the offsetParent property will be null (see
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
      // This check ensures we only clone the node when necessary.
      var htmlEl = element;
      if (htmlEl.offsetParent !== null) {
          return htmlEl.scrollWidth;
      }
      var clone = htmlEl.cloneNode(true);
      clone.style.setProperty('position', 'absolute');
      clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
      document.documentElement.appendChild(clone);
      var scrollWidth = clone.scrollWidth;
      document.documentElement.removeChild(clone);
      return scrollWidth;
  }

  var ponyfill = /*#__PURE__*/Object.freeze({
    __proto__: null,
    closest: closest,
    matches: matches,
    estimateScrollWidth: estimateScrollWidth
  });

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics$1 = function(d, b) {
      extendStatics$1 = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics$1(d, b);
  };

  function __extends$1(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics$1(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign$1 = function() {
      __assign$1 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign$1.apply(this, arguments);
  };

  /**
   * @license
   * Copyright 2019 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  /**
   * Determine whether the current browser supports passive event listeners, and
   * if so, use them.
   */
  function applyPassive(globalObj) {
      if (globalObj === void 0) { globalObj = window; }
      return supportsPassiveOption(globalObj) ?
          { passive: true } :
          false;
  }
  function supportsPassiveOption(globalObj) {
      if (globalObj === void 0) { globalObj = window; }
      // See
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
      var passiveSupported = false;
      try {
          var options = {
              // This function will be called when the browser
              // attempts to access the passive property.
              get passive() {
                  passiveSupported = true;
                  return false;
              }
          };
          var handler = function () { };
          globalObj.document.addEventListener('test', handler, options);
          globalObj.document.removeEventListener('test', handler, options);
      }
      catch (err) {
          passiveSupported = false;
      }
      return passiveSupported;
  }

  var events = /*#__PURE__*/Object.freeze({
    __proto__: null,
    applyPassive: applyPassive
  });

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses = {
      // Ripple is a special case where the "root" component is really a "mixin" of sorts,
      // given that it's an 'upgrade' to an existing component. That being said it is the root
      // CSS class that all other CSS classes derive from.
      BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
      FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
      FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
      ROOT: 'mdc-ripple-upgraded',
      UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  };
  var strings = {
      VAR_FG_SCALE: '--mdc-ripple-fg-scale',
      VAR_FG_SIZE: '--mdc-ripple-fg-size',
      VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
      VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
      VAR_LEFT: '--mdc-ripple-left',
      VAR_TOP: '--mdc-ripple-top',
  };
  var numbers = {
      DEACTIVATION_TIMEOUT_MS: 225,
      FG_DEACTIVATION_MS: 150,
      INITIAL_ORIGIN_SCALE: 0.6,
      PADDING: 10,
      TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
  };

  /**
   * Stores result from supportsCssVariables to avoid redundant processing to
   * detect CSS custom variable support.
   */
  var supportsCssVariables_;
  function supportsCssVariables(windowObj, forceRefresh) {
      if (forceRefresh === void 0) { forceRefresh = false; }
      var CSS = windowObj.CSS;
      var supportsCssVars = supportsCssVariables_;
      if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
          return supportsCssVariables_;
      }
      var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
      if (!supportsFunctionPresent) {
          return false;
      }
      var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
      // See: https://bugs.webkit.org/show_bug.cgi?id=154669
      // See: README section on Safari
      var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
          CSS.supports('color', '#00000000'));
      supportsCssVars =
          explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
      if (!forceRefresh) {
          supportsCssVariables_ = supportsCssVars;
      }
      return supportsCssVars;
  }
  function getNormalizedEventCoords(evt, pageOffset, clientRect) {
      if (!evt) {
          return { x: 0, y: 0 };
      }
      var x = pageOffset.x, y = pageOffset.y;
      var documentX = x + clientRect.left;
      var documentY = y + clientRect.top;
      var normalizedX;
      var normalizedY;
      // Determine touch point relative to the ripple container.
      if (evt.type === 'touchstart') {
          var touchEvent = evt;
          normalizedX = touchEvent.changedTouches[0].pageX - documentX;
          normalizedY = touchEvent.changedTouches[0].pageY - documentY;
      }
      else {
          var mouseEvent = evt;
          normalizedX = mouseEvent.pageX - documentX;
          normalizedY = mouseEvent.pageY - documentY;
      }
      return { x: normalizedX, y: normalizedY };
  }

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  // Activation events registered on the root element of each instance for activation
  var ACTIVATION_EVENT_TYPES = [
      'touchstart', 'pointerdown', 'mousedown', 'keydown',
  ];
  // Deactivation events registered on documentElement when a pointer-related down event occurs
  var POINTER_DEACTIVATION_EVENT_TYPES = [
      'touchend', 'pointerup', 'mouseup', 'contextmenu',
  ];
  // simultaneous nested activations
  var activatedTargets = [];
  var MDCRippleFoundation = /** @class */ (function (_super) {
      __extends$1(MDCRippleFoundation, _super);
      function MDCRippleFoundation(adapter) {
          var _this = _super.call(this, __assign$1(__assign$1({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
          _this.activationAnimationHasEnded_ = false;
          _this.activationTimer_ = 0;
          _this.fgDeactivationRemovalTimer_ = 0;
          _this.fgScale_ = '0';
          _this.frame_ = { width: 0, height: 0 };
          _this.initialSize_ = 0;
          _this.layoutFrame_ = 0;
          _this.maxRadius_ = 0;
          _this.unboundedCoords_ = { left: 0, top: 0 };
          _this.activationState_ = _this.defaultActivationState_();
          _this.activationTimerCallback_ = function () {
              _this.activationAnimationHasEnded_ = true;
              _this.runDeactivationUXLogicIfReady_();
          };
          _this.activateHandler_ = function (e) { return _this.activate_(e); };
          _this.deactivateHandler_ = function () { return _this.deactivate_(); };
          _this.focusHandler_ = function () { return _this.handleFocus(); };
          _this.blurHandler_ = function () { return _this.handleBlur(); };
          _this.resizeHandler_ = function () { return _this.layout(); };
          return _this;
      }
      Object.defineProperty(MDCRippleFoundation, "cssClasses", {
          get: function () {
              return cssClasses;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "strings", {
          get: function () {
              return strings;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "numbers", {
          get: function () {
              return numbers;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
          get: function () {
              return {
                  addClass: function () { return undefined; },
                  browserSupportsCssVars: function () { return true; },
                  computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                  containsEventTarget: function () { return true; },
                  deregisterDocumentInteractionHandler: function () { return undefined; },
                  deregisterInteractionHandler: function () { return undefined; },
                  deregisterResizeHandler: function () { return undefined; },
                  getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                  isSurfaceActive: function () { return true; },
                  isSurfaceDisabled: function () { return true; },
                  isUnbounded: function () { return true; },
                  registerDocumentInteractionHandler: function () { return undefined; },
                  registerInteractionHandler: function () { return undefined; },
                  registerResizeHandler: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  updateCssVariable: function () { return undefined; },
              };
          },
          enumerable: false,
          configurable: true
      });
      MDCRippleFoundation.prototype.init = function () {
          var _this = this;
          var supportsPressRipple = this.supportsPressRipple_();
          this.registerRootHandlers_(supportsPressRipple);
          if (supportsPressRipple) {
              var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
              requestAnimationFrame(function () {
                  _this.adapter.addClass(ROOT_1);
                  if (_this.adapter.isUnbounded()) {
                      _this.adapter.addClass(UNBOUNDED_1);
                      // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                      _this.layoutInternal_();
                  }
              });
          }
      };
      MDCRippleFoundation.prototype.destroy = function () {
          var _this = this;
          if (this.supportsPressRipple_()) {
              if (this.activationTimer_) {
                  clearTimeout(this.activationTimer_);
                  this.activationTimer_ = 0;
                  this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
              }
              if (this.fgDeactivationRemovalTimer_) {
                  clearTimeout(this.fgDeactivationRemovalTimer_);
                  this.fgDeactivationRemovalTimer_ = 0;
                  this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
              }
              var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
              requestAnimationFrame(function () {
                  _this.adapter.removeClass(ROOT_2);
                  _this.adapter.removeClass(UNBOUNDED_2);
                  _this.removeCssVars_();
              });
          }
          this.deregisterRootHandlers_();
          this.deregisterDeactivationHandlers_();
      };
      /**
       * @param evt Optional event containing position information.
       */
      MDCRippleFoundation.prototype.activate = function (evt) {
          this.activate_(evt);
      };
      MDCRippleFoundation.prototype.deactivate = function () {
          this.deactivate_();
      };
      MDCRippleFoundation.prototype.layout = function () {
          var _this = this;
          if (this.layoutFrame_) {
              cancelAnimationFrame(this.layoutFrame_);
          }
          this.layoutFrame_ = requestAnimationFrame(function () {
              _this.layoutInternal_();
              _this.layoutFrame_ = 0;
          });
      };
      MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
          var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
          if (unbounded) {
              this.adapter.addClass(UNBOUNDED);
          }
          else {
              this.adapter.removeClass(UNBOUNDED);
          }
      };
      MDCRippleFoundation.prototype.handleFocus = function () {
          var _this = this;
          requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
      };
      MDCRippleFoundation.prototype.handleBlur = function () {
          var _this = this;
          requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
      };
      /**
       * We compute this property so that we are not querying information about the client
       * until the point in time where the foundation requests it. This prevents scenarios where
       * client-side feature-detection may happen too early, such as when components are rendered on the server
       * and then initialized at mount time on the client.
       */
      MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
          return this.adapter.browserSupportsCssVars();
      };
      MDCRippleFoundation.prototype.defaultActivationState_ = function () {
          return {
              activationEvent: undefined,
              hasDeactivationUXRun: false,
              isActivated: false,
              isProgrammatic: false,
              wasActivatedByPointer: false,
              wasElementMadeActive: false,
          };
      };
      /**
       * supportsPressRipple Passed from init to save a redundant function call
       */
      MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
          var _this = this;
          if (supportsPressRipple) {
              ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                  _this.adapter.registerInteractionHandler(evtType, _this.activateHandler_);
              });
              if (this.adapter.isUnbounded()) {
                  this.adapter.registerResizeHandler(this.resizeHandler_);
              }
          }
          this.adapter.registerInteractionHandler('focus', this.focusHandler_);
          this.adapter.registerInteractionHandler('blur', this.blurHandler_);
      };
      MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
          var _this = this;
          if (evt.type === 'keydown') {
              this.adapter.registerInteractionHandler('keyup', this.deactivateHandler_);
          }
          else {
              POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                  _this.adapter.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
              });
          }
      };
      MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
          var _this = this;
          ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
              _this.adapter.deregisterInteractionHandler(evtType, _this.activateHandler_);
          });
          this.adapter.deregisterInteractionHandler('focus', this.focusHandler_);
          this.adapter.deregisterInteractionHandler('blur', this.blurHandler_);
          if (this.adapter.isUnbounded()) {
              this.adapter.deregisterResizeHandler(this.resizeHandler_);
          }
      };
      MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
          var _this = this;
          this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler_);
          POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
              _this.adapter.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
          });
      };
      MDCRippleFoundation.prototype.removeCssVars_ = function () {
          var _this = this;
          var rippleStrings = MDCRippleFoundation.strings;
          var keys = Object.keys(rippleStrings);
          keys.forEach(function (key) {
              if (key.indexOf('VAR_') === 0) {
                  _this.adapter.updateCssVariable(rippleStrings[key], null);
              }
          });
      };
      MDCRippleFoundation.prototype.activate_ = function (evt) {
          var _this = this;
          if (this.adapter.isSurfaceDisabled()) {
              return;
          }
          var activationState = this.activationState_;
          if (activationState.isActivated) {
              return;
          }
          // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
          var previousActivationEvent = this.previousActivationEvent_;
          var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
          if (isSameInteraction) {
              return;
          }
          activationState.isActivated = true;
          activationState.isProgrammatic = evt === undefined;
          activationState.activationEvent = evt;
          activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
          var hasActivatedChild = evt !== undefined &&
              activatedTargets.length > 0 &&
              activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
          if (hasActivatedChild) {
              // Immediately reset activation state, while preserving logic that prevents touch follow-on events
              this.resetActivationState_();
              return;
          }
          if (evt !== undefined) {
              activatedTargets.push(evt.target);
              this.registerDeactivationHandlers_(evt);
          }
          activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
          if (activationState.wasElementMadeActive) {
              this.animateActivation_();
          }
          requestAnimationFrame(function () {
              // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
              activatedTargets = [];
              if (!activationState.wasElementMadeActive
                  && evt !== undefined
                  && (evt.key === ' ' || evt.keyCode === 32)) {
                  // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                  // active states inconsistently when they're called within event handling code:
                  // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                  // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                  // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                  // variable is set within a rAF callback for a submit button interaction (#2241).
                  activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                  if (activationState.wasElementMadeActive) {
                      _this.animateActivation_();
                  }
              }
              if (!activationState.wasElementMadeActive) {
                  // Reset activation state immediately if element was not made active.
                  _this.activationState_ = _this.defaultActivationState_();
              }
          });
      };
      MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
          return (evt !== undefined && evt.type === 'keydown') ?
              this.adapter.isSurfaceActive() :
              true;
      };
      MDCRippleFoundation.prototype.animateActivation_ = function () {
          var _this = this;
          var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
          var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
          var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
          this.layoutInternal_();
          var translateStart = '';
          var translateEnd = '';
          if (!this.adapter.isUnbounded()) {
              var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
              translateStart = startPoint.x + "px, " + startPoint.y + "px";
              translateEnd = endPoint.x + "px, " + endPoint.y + "px";
          }
          this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
          this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
          // Cancel any ongoing activation/deactivation animations
          clearTimeout(this.activationTimer_);
          clearTimeout(this.fgDeactivationRemovalTimer_);
          this.rmBoundedActivationClasses_();
          this.adapter.removeClass(FG_DEACTIVATION);
          // Force layout in order to re-trigger the animation.
          this.adapter.computeBoundingRect();
          this.adapter.addClass(FG_ACTIVATION);
          this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
      };
      MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
          var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
          var startPoint;
          if (wasActivatedByPointer) {
              startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
          }
          else {
              startPoint = {
                  x: this.frame_.width / 2,
                  y: this.frame_.height / 2,
              };
          }
          // Center the element around the start point.
          startPoint = {
              x: startPoint.x - (this.initialSize_ / 2),
              y: startPoint.y - (this.initialSize_ / 2),
          };
          var endPoint = {
              x: (this.frame_.width / 2) - (this.initialSize_ / 2),
              y: (this.frame_.height / 2) - (this.initialSize_ / 2),
          };
          return { startPoint: startPoint, endPoint: endPoint };
      };
      MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
          var _this = this;
          // This method is called both when a pointing device is released, and when the activation animation ends.
          // The deactivation animation should only run after both of those occur.
          var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
          var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
          var activationHasEnded = hasDeactivationUXRun || !isActivated;
          if (activationHasEnded && this.activationAnimationHasEnded_) {
              this.rmBoundedActivationClasses_();
              this.adapter.addClass(FG_DEACTIVATION);
              this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                  _this.adapter.removeClass(FG_DEACTIVATION);
              }, numbers.FG_DEACTIVATION_MS);
          }
      };
      MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
          var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
          this.adapter.removeClass(FG_ACTIVATION);
          this.activationAnimationHasEnded_ = false;
          this.adapter.computeBoundingRect();
      };
      MDCRippleFoundation.prototype.resetActivationState_ = function () {
          var _this = this;
          this.previousActivationEvent_ = this.activationState_.activationEvent;
          this.activationState_ = this.defaultActivationState_();
          // Touch devices may fire additional events for the same interaction within a short time.
          // Store the previous event until it's safe to assume that subsequent events are for new interactions.
          setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
      };
      MDCRippleFoundation.prototype.deactivate_ = function () {
          var _this = this;
          var activationState = this.activationState_;
          // This can happen in scenarios such as when you have a keyup event that blurs the element.
          if (!activationState.isActivated) {
              return;
          }
          var state = __assign$1({}, activationState);
          if (activationState.isProgrammatic) {
              requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
              this.resetActivationState_();
          }
          else {
              this.deregisterDeactivationHandlers_();
              requestAnimationFrame(function () {
                  _this.activationState_.hasDeactivationUXRun = true;
                  _this.animateDeactivation_(state);
                  _this.resetActivationState_();
              });
          }
      };
      MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
          var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
          if (wasActivatedByPointer || wasElementMadeActive) {
              this.runDeactivationUXLogicIfReady_();
          }
      };
      MDCRippleFoundation.prototype.layoutInternal_ = function () {
          var _this = this;
          this.frame_ = this.adapter.computeBoundingRect();
          var maxDim = Math.max(this.frame_.height, this.frame_.width);
          // Surface diameter is treated differently for unbounded vs. bounded ripples.
          // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
          // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
          // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
          // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
          // `overflow: hidden`.
          var getBoundedRadius = function () {
              var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
              return hypotenuse + MDCRippleFoundation.numbers.PADDING;
          };
          this.maxRadius_ = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
          // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
          var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
          // Unbounded ripple size should always be even number to equally center align.
          if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
              this.initialSize_ = initialSize - 1;
          }
          else {
              this.initialSize_ = initialSize;
          }
          this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
          this.updateLayoutCssVars_();
      };
      MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
          var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
          this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
          this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
          if (this.adapter.isUnbounded()) {
              this.unboundedCoords_ = {
                  left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                  top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
              };
              this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
              this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
          }
      };
      return MDCRippleFoundation;
  }(MDCFoundation));

  /**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  /**
   * AnimationFrame provides a user-friendly abstraction around requesting
   * and canceling animation frames.
   */
  var AnimationFrame = /** @class */ (function () {
      function AnimationFrame() {
          this.rafIDs = new Map();
      }
      /**
       * Requests an animation frame. Cancels any existing frame with the same key.
       * @param {string} key The key for this callback.
       * @param {FrameRequestCallback} callback The callback to be executed.
       */
      AnimationFrame.prototype.request = function (key, callback) {
          var _this = this;
          this.cancel(key);
          var frameID = requestAnimationFrame(function (frame) {
              _this.rafIDs.delete(key);
              // Callback must come *after* the key is deleted so that nested calls to
              // request with the same key are not deleted.
              callback(frame);
          });
          this.rafIDs.set(key, frameID);
      };
      /**
       * Cancels a queued callback with the given key.
       * @param {string} key The key for this callback.
       */
      AnimationFrame.prototype.cancel = function (key) {
          var rafID = this.rafIDs.get(key);
          if (rafID) {
              cancelAnimationFrame(rafID);
              this.rafIDs.delete(key);
          }
      };
      /**
       * Cancels all queued callback.
       */
      AnimationFrame.prototype.cancelAll = function () {
          var _this = this;
          // Need to use forEach because it's the only iteration method supported
          // by IE11. Suppress the underscore because we don't need it.
          // tslint:disable-next-line:enforce-name-casing
          this.rafIDs.forEach(function (_, key) {
              _this.cancel(key);
          });
      };
      /**
       * Returns the queue of unexecuted callback keys.
       */
      AnimationFrame.prototype.getQueue = function () {
          var queue = [];
          // Need to use forEach because it's the only iteration method supported
          // by IE11. Suppress the underscore because we don't need it.
          // tslint:disable-next-line:enforce-name-casing
          this.rafIDs.forEach(function (_, key) {
              queue.push(key);
          });
          return queue;
      };
      return AnimationFrame;
  }());

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses$1 = {
      CLOSING: 'mdc-dialog--closing',
      OPEN: 'mdc-dialog--open',
      OPENING: 'mdc-dialog--opening',
      SCROLLABLE: 'mdc-dialog--scrollable',
      SCROLL_LOCK: 'mdc-dialog-scroll-lock',
      STACKED: 'mdc-dialog--stacked',
      FULLSCREEN: 'mdc-dialog--fullscreen',
      // Class for showing a scroll divider on full-screen dialog header element.
      // Should only be displayed on scrollable content, when the dialog content is
      // scrolled "underneath" the header.
      SCROLL_DIVIDER_HEADER: 'mdc-dialog-scroll-divider-header',
      // Class for showing a scroll divider on a full-screen dialog footer element.
      // Should only be displayed on scrolalble content, when the dialog content is
      // obscured "underneath" the footer.
      SCROLL_DIVIDER_FOOTER: 'mdc-dialog-scroll-divider-footer',
      // The "surface scrim" is a scrim covering only the surface of a dialog. This
      // is used in situations where a confirmation dialog is shown over an already
      // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
      // is sized as a modal and so in these situations we display a "surface scrim"
      // to prevent a "double scrim" (where the scrim from the secondary
      // confirmation dialog would overlap with the scrim from the full-screen
      // dialog).
      SURFACE_SCRIM_SHOWN: 'mdc-dialog__surface-scrim--shown',
      // "Showing" animating class for the surface-scrim.
      SURFACE_SCRIM_SHOWING: 'mdc-dialog__surface-scrim--showing',
      // "Hiding" animating class for the surface-scrim.
      SURFACE_SCRIM_HIDING: 'mdc-dialog__surface-scrim--hiding',
      // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
      // Note that we only hide the original scrim rather than removing it entirely
      // to prevent interactions with the content behind this scrim, and to capture
      // scrim clicks.
      SCRIM_HIDDEN: 'mdc-dialog__scrim--hidden',
  };
  var strings$1 = {
      ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
      BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
      BUTTON_SELECTOR: '.mdc-dialog__button',
      CLOSED_EVENT: 'MDCDialog:closed',
      CLOSE_ACTION: 'close',
      CLOSING_EVENT: 'MDCDialog:closing',
      CONTAINER_SELECTOR: '.mdc-dialog__container',
      CONTENT_SELECTOR: '.mdc-dialog__content',
      DESTROY_ACTION: 'destroy',
      INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
      OPENED_EVENT: 'MDCDialog:opened',
      OPENING_EVENT: 'MDCDialog:opening',
      SCRIM_SELECTOR: '.mdc-dialog__scrim',
      SUPPRESS_DEFAULT_PRESS_SELECTOR: [
          'textarea',
          '.mdc-menu .mdc-list-item',
          '.mdc-menu .mdc-deprecated-list-item',
      ].join(', '),
      SURFACE_SELECTOR: '.mdc-dialog__surface',
  };
  var numbers$1 = {
      DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
      DIALOG_ANIMATION_OPEN_TIME_MS: 150,
  };

  /**
   * @license
   * Copyright 2017 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var AnimationKeys;
  (function (AnimationKeys) {
      AnimationKeys["POLL_SCROLL_POS"] = "poll_scroll_position";
      AnimationKeys["POLL_LAYOUT_CHANGE"] = "poll_layout_change";
  })(AnimationKeys || (AnimationKeys = {}));
  var MDCDialogFoundation = /** @class */ (function (_super) {
      __extends(MDCDialogFoundation, _super);
      function MDCDialogFoundation(adapter) {
          var _this = _super.call(this, __assign(__assign({}, MDCDialogFoundation.defaultAdapter), adapter)) || this;
          _this.dialogOpen = false;
          _this.isFullscreen = false;
          _this.animationFrame = 0;
          _this.animationTimer = 0;
          _this.escapeKeyAction = strings$1.CLOSE_ACTION;
          _this.scrimClickAction = strings$1.CLOSE_ACTION;
          _this.autoStackButtons = true;
          _this.areButtonsStacked = false;
          _this.suppressDefaultPressSelector = strings$1.SUPPRESS_DEFAULT_PRESS_SELECTOR;
          _this.animFrame = new AnimationFrame();
          _this.contentScrollHandler = function () {
              _this.handleScrollEvent();
          };
          _this.windowResizeHandler = function () {
              _this.layout();
          };
          _this.windowOrientationChangeHandler = function () {
              _this.layout();
          };
          return _this;
      }
      Object.defineProperty(MDCDialogFoundation, "cssClasses", {
          get: function () {
              return cssClasses$1;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCDialogFoundation, "strings", {
          get: function () {
              return strings$1;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCDialogFoundation, "numbers", {
          get: function () {
              return numbers$1;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
          get: function () {
              return {
                  addBodyClass: function () { return undefined; },
                  addClass: function () { return undefined; },
                  areButtonsStacked: function () { return false; },
                  clickDefaultButton: function () { return undefined; },
                  eventTargetMatches: function () { return false; },
                  getActionFromEvent: function () { return ''; },
                  getInitialFocusEl: function () { return null; },
                  hasClass: function () { return false; },
                  isContentScrollable: function () { return false; },
                  notifyClosed: function () { return undefined; },
                  notifyClosing: function () { return undefined; },
                  notifyOpened: function () { return undefined; },
                  notifyOpening: function () { return undefined; },
                  releaseFocus: function () { return undefined; },
                  removeBodyClass: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  reverseButtons: function () { return undefined; },
                  trapFocus: function () { return undefined; },
                  registerContentEventHandler: function () { return undefined; },
                  deregisterContentEventHandler: function () { return undefined; },
                  isScrollableContentAtTop: function () { return false; },
                  isScrollableContentAtBottom: function () { return false; },
                  registerWindowEventHandler: function () { return undefined; },
                  deregisterWindowEventHandler: function () { return undefined; },
              };
          },
          enumerable: false,
          configurable: true
      });
      MDCDialogFoundation.prototype.init = function () {
          if (this.adapter.hasClass(cssClasses$1.STACKED)) {
              this.setAutoStackButtons(false);
          }
          this.isFullscreen = this.adapter.hasClass(cssClasses$1.FULLSCREEN);
      };
      MDCDialogFoundation.prototype.destroy = function () {
          if (this.dialogOpen) {
              this.close(strings$1.DESTROY_ACTION);
          }
          if (this.animationTimer) {
              clearTimeout(this.animationTimer);
              this.handleAnimationTimerEnd();
          }
          if (this.isFullscreen) {
              this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
          }
          this.animFrame.cancelAll();
          this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
          this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
      };
      MDCDialogFoundation.prototype.open = function (dialogOptions) {
          var _this = this;
          this.dialogOpen = true;
          this.adapter.notifyOpening();
          this.adapter.addClass(cssClasses$1.OPENING);
          if (this.isFullscreen) {
              // A scroll event listener is registered even if the dialog is not
              // scrollable on open, since the window resize event, or orientation
              // change may make the dialog scrollable after it is opened.
              this.adapter.registerContentEventHandler('scroll', this.contentScrollHandler);
          }
          if (dialogOptions && dialogOptions.isAboveFullscreenDialog) {
              this.adapter.addClass(cssClasses$1.SCRIM_HIDDEN);
          }
          this.adapter.registerWindowEventHandler('resize', this.windowResizeHandler);
          this.adapter.registerWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
          // Wait a frame once display is no longer "none", to establish basis for
          // animation
          this.runNextAnimationFrame(function () {
              _this.adapter.addClass(cssClasses$1.OPEN);
              _this.adapter.addBodyClass(cssClasses$1.SCROLL_LOCK);
              _this.layout();
              _this.animationTimer = setTimeout(function () {
                  _this.handleAnimationTimerEnd();
                  _this.adapter.trapFocus(_this.adapter.getInitialFocusEl());
                  _this.adapter.notifyOpened();
              }, numbers$1.DIALOG_ANIMATION_OPEN_TIME_MS);
          });
      };
      MDCDialogFoundation.prototype.close = function (action) {
          var _this = this;
          if (action === void 0) { action = ''; }
          if (!this.dialogOpen) {
              // Avoid redundant close calls (and events), e.g. from keydown on elements
              // that inherently emit click
              return;
          }
          this.dialogOpen = false;
          this.adapter.notifyClosing(action);
          this.adapter.addClass(cssClasses$1.CLOSING);
          this.adapter.removeClass(cssClasses$1.OPEN);
          this.adapter.removeBodyClass(cssClasses$1.SCROLL_LOCK);
          if (this.isFullscreen) {
              this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
          }
          this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
          this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
          cancelAnimationFrame(this.animationFrame);
          this.animationFrame = 0;
          clearTimeout(this.animationTimer);
          this.animationTimer = setTimeout(function () {
              _this.adapter.releaseFocus();
              _this.handleAnimationTimerEnd();
              _this.adapter.notifyClosed(action);
          }, numbers$1.DIALOG_ANIMATION_CLOSE_TIME_MS);
      };
      /**
       * Used only in instances of showing a secondary dialog over a full-screen
       * dialog. Shows the "surface scrim" displayed over the full-screen dialog.
       */
      MDCDialogFoundation.prototype.showSurfaceScrim = function () {
          var _this = this;
          this.adapter.addClass(cssClasses$1.SURFACE_SCRIM_SHOWING);
          this.runNextAnimationFrame(function () {
              _this.adapter.addClass(cssClasses$1.SURFACE_SCRIM_SHOWN);
          });
      };
      /**
       * Used only in instances of showing a secondary dialog over a full-screen
       * dialog. Hides the "surface scrim" displayed over the full-screen dialog.
       */
      MDCDialogFoundation.prototype.hideSurfaceScrim = function () {
          this.adapter.removeClass(cssClasses$1.SURFACE_SCRIM_SHOWN);
          this.adapter.addClass(cssClasses$1.SURFACE_SCRIM_HIDING);
      };
      /**
       * Handles `transitionend` event triggered when surface scrim animation is
       * finished.
       */
      MDCDialogFoundation.prototype.handleSurfaceScrimTransitionEnd = function () {
          this.adapter.removeClass(cssClasses$1.SURFACE_SCRIM_HIDING);
          this.adapter.removeClass(cssClasses$1.SURFACE_SCRIM_SHOWING);
      };
      MDCDialogFoundation.prototype.isOpen = function () {
          return this.dialogOpen;
      };
      MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
          return this.escapeKeyAction;
      };
      MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
          this.escapeKeyAction = action;
      };
      MDCDialogFoundation.prototype.getScrimClickAction = function () {
          return this.scrimClickAction;
      };
      MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
          this.scrimClickAction = action;
      };
      MDCDialogFoundation.prototype.getAutoStackButtons = function () {
          return this.autoStackButtons;
      };
      MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
          this.autoStackButtons = autoStack;
      };
      MDCDialogFoundation.prototype.getSuppressDefaultPressSelector = function () {
          return this.suppressDefaultPressSelector;
      };
      MDCDialogFoundation.prototype.setSuppressDefaultPressSelector = function (selector) {
          this.suppressDefaultPressSelector = selector;
      };
      MDCDialogFoundation.prototype.layout = function () {
          var _this = this;
          this.animFrame.request(AnimationKeys.POLL_LAYOUT_CHANGE, function () {
              _this.layoutInternal();
          });
      };
      /** Handles click on the dialog root element. */
      MDCDialogFoundation.prototype.handleClick = function (evt) {
          var isScrim = this.adapter.eventTargetMatches(evt.target, strings$1.SCRIM_SELECTOR);
          // Check for scrim click first since it doesn't require querying ancestors.
          if (isScrim && this.scrimClickAction !== '') {
              this.close(this.scrimClickAction);
          }
          else {
              var action = this.adapter.getActionFromEvent(evt);
              if (action) {
                  this.close(action);
              }
          }
      };
      /** Handles keydown on the dialog root element. */
      MDCDialogFoundation.prototype.handleKeydown = function (evt) {
          var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
          if (!isEnter) {
              return;
          }
          var action = this.adapter.getActionFromEvent(evt);
          if (action) {
              // Action button callback is handled in `handleClick`,
              // since space/enter keydowns on buttons trigger click events.
              return;
          }
          // `composedPath` is used here, when available, to account for use cases
          // where a target meant to suppress the default press behaviour
          // may exist in a shadow root.
          // For example, a textarea inside a web component:
          // <mwc-dialog>
          //   <horizontal-layout>
          //     #shadow-root (open)
          //       <mwc-textarea>
          //         #shadow-root (open)
          //           <textarea></textarea>
          //       </mwc-textarea>
          //   </horizontal-layout>
          // </mwc-dialog>
          var target = evt.composedPath ? evt.composedPath()[0] : evt.target;
          var isDefault = this.suppressDefaultPressSelector ?
              !this.adapter.eventTargetMatches(target, this.suppressDefaultPressSelector) :
              true;
          if (isEnter && isDefault) {
              this.adapter.clickDefaultButton();
          }
      };
      /** Handles keydown on the document. */
      MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
          var isEscape = evt.key === 'Escape' || evt.keyCode === 27;
          if (isEscape && this.escapeKeyAction !== '') {
              this.close(this.escapeKeyAction);
          }
      };
      /**
       * Handles scroll event on the dialog's content element -- showing a scroll
       * divider on the header or footer based on the scroll position. This handler
       * should only be registered on full-screen dialogs with scrollable content.
       */
      MDCDialogFoundation.prototype.handleScrollEvent = function () {
          var _this = this;
          // Since scroll events can fire at a high rate, we throttle these events by
          // using requestAnimationFrame.
          this.animFrame.request(AnimationKeys.POLL_SCROLL_POS, function () {
              _this.toggleScrollDividerHeader();
              _this.toggleScrollDividerFooter();
          });
      };
      MDCDialogFoundation.prototype.layoutInternal = function () {
          if (this.autoStackButtons) {
              this.detectStackedButtons();
          }
          this.toggleScrollableClasses();
      };
      MDCDialogFoundation.prototype.handleAnimationTimerEnd = function () {
          this.animationTimer = 0;
          this.adapter.removeClass(cssClasses$1.OPENING);
          this.adapter.removeClass(cssClasses$1.CLOSING);
      };
      /**
       * Runs the given logic on the next animation frame, using setTimeout to
       * factor in Firefox reflow behavior.
       */
      MDCDialogFoundation.prototype.runNextAnimationFrame = function (callback) {
          var _this = this;
          cancelAnimationFrame(this.animationFrame);
          this.animationFrame = requestAnimationFrame(function () {
              _this.animationFrame = 0;
              clearTimeout(_this.animationTimer);
              _this.animationTimer = setTimeout(callback, 0);
          });
      };
      MDCDialogFoundation.prototype.detectStackedButtons = function () {
          // Remove the class first to let us measure the buttons' natural positions.
          this.adapter.removeClass(cssClasses$1.STACKED);
          var areButtonsStacked = this.adapter.areButtonsStacked();
          if (areButtonsStacked) {
              this.adapter.addClass(cssClasses$1.STACKED);
          }
          if (areButtonsStacked !== this.areButtonsStacked) {
              this.adapter.reverseButtons();
              this.areButtonsStacked = areButtonsStacked;
          }
      };
      MDCDialogFoundation.prototype.toggleScrollableClasses = function () {
          // Remove the class first to let us measure the natural height of the
          // content.
          this.adapter.removeClass(cssClasses$1.SCROLLABLE);
          if (this.adapter.isContentScrollable()) {
              this.adapter.addClass(cssClasses$1.SCROLLABLE);
              if (this.isFullscreen) {
                  // If dialog is full-screen and scrollable, check if a scroll divider
                  // should be shown.
                  this.toggleScrollDividerHeader();
                  this.toggleScrollDividerFooter();
              }
          }
      };
      MDCDialogFoundation.prototype.toggleScrollDividerHeader = function () {
          if (!this.adapter.isScrollableContentAtTop()) {
              this.adapter.addClass(cssClasses$1.SCROLL_DIVIDER_HEADER);
          }
          else if (this.adapter.hasClass(cssClasses$1.SCROLL_DIVIDER_HEADER)) {
              this.adapter.removeClass(cssClasses$1.SCROLL_DIVIDER_HEADER);
          }
      };
      MDCDialogFoundation.prototype.toggleScrollDividerFooter = function () {
          if (!this.adapter.isScrollableContentAtBottom()) {
              this.adapter.addClass(cssClasses$1.SCROLL_DIVIDER_FOOTER);
          }
          else if (this.adapter.hasClass(cssClasses$1.SCROLL_DIVIDER_FOOTER)) {
              this.adapter.removeClass(cssClasses$1.SCROLL_DIVIDER_FOOTER);
          }
      };
      return MDCDialogFoundation;
  }(MDCFoundation));

  /**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  /**
   * KEY provides normalized string values for keys.
   */
  var KEY = {
      UNKNOWN: 'Unknown',
      BACKSPACE: 'Backspace',
      ENTER: 'Enter',
      SPACEBAR: 'Spacebar',
      PAGE_UP: 'PageUp',
      PAGE_DOWN: 'PageDown',
      END: 'End',
      HOME: 'Home',
      ARROW_LEFT: 'ArrowLeft',
      ARROW_UP: 'ArrowUp',
      ARROW_RIGHT: 'ArrowRight',
      ARROW_DOWN: 'ArrowDown',
      DELETE: 'Delete',
      ESCAPE: 'Escape',
      TAB: 'Tab',
  };
  var normalizedKeys = new Set();
  // IE11 has no support for new Map with iterable so we need to initialize this
  // by hand.
  normalizedKeys.add(KEY.BACKSPACE);
  normalizedKeys.add(KEY.ENTER);
  normalizedKeys.add(KEY.SPACEBAR);
  normalizedKeys.add(KEY.PAGE_UP);
  normalizedKeys.add(KEY.PAGE_DOWN);
  normalizedKeys.add(KEY.END);
  normalizedKeys.add(KEY.HOME);
  normalizedKeys.add(KEY.ARROW_LEFT);
  normalizedKeys.add(KEY.ARROW_UP);
  normalizedKeys.add(KEY.ARROW_RIGHT);
  normalizedKeys.add(KEY.ARROW_DOWN);
  normalizedKeys.add(KEY.DELETE);
  normalizedKeys.add(KEY.ESCAPE);
  normalizedKeys.add(KEY.TAB);
  var KEY_CODE = {
      BACKSPACE: 8,
      ENTER: 13,
      SPACEBAR: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      ARROW_LEFT: 37,
      ARROW_UP: 38,
      ARROW_RIGHT: 39,
      ARROW_DOWN: 40,
      DELETE: 46,
      ESCAPE: 27,
      TAB: 9,
  };
  var mappedKeyCodes = new Map();
  // IE11 has no support for new Map with iterable so we need to initialize this
  // by hand.
  mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
  mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
  mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
  mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
  mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
  mappedKeyCodes.set(KEY_CODE.END, KEY.END);
  mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
  mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
  mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
  mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
  mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
  mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
  mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
  mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
  var navigationKeys = new Set();
  // IE11 has no support for new Set with iterable so we need to initialize this
  // by hand.
  navigationKeys.add(KEY.PAGE_UP);
  navigationKeys.add(KEY.PAGE_DOWN);
  navigationKeys.add(KEY.END);
  navigationKeys.add(KEY.HOME);
  navigationKeys.add(KEY.ARROW_LEFT);
  navigationKeys.add(KEY.ARROW_UP);
  navigationKeys.add(KEY.ARROW_RIGHT);
  navigationKeys.add(KEY.ARROW_DOWN);
  /**
   * normalizeKey returns the normalized string for a navigational action.
   */
  function normalizeKey(evt) {
      var key = evt.key;
      // If the event already has a normalized key, return it
      if (normalizedKeys.has(key)) {
          return key;
      }
      // tslint:disable-next-line:deprecation
      var mappedKey = mappedKeyCodes.get(evt.keyCode);
      if (mappedKey) {
          return mappedKey;
      }
      return KEY.UNKNOWN;
  }

  // Match modifiers on DOM events.
  const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
  // Match modifiers on other events.
  const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;

  function forwardEventsBuilder(component) {
    // This is our pseudo $on function. It is defined on component mount.
    let $on;
    // This is a list of events bound before mount.
    let events = [];
    // This is the original component $on function.
    const componentOn = component.$on;

    // And we override the $on function to forward all bound events.
    component.$on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let destructor = () => {};
      if ($on) {
        // The event was bound programmatically.
        destructor = $on(eventType, callback);
      } else {
        // The event was bound before mount by Svelte.
        events.push([eventType, callback]);
      }
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;

      if (oldModifierMatch && console) {
        console.warn(
          'Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',
          eventType
        );
      }

      if (modifierMatch) {
        // Remove modifiers from the real event.
        const parts = eventType.split(oldModifierMatch ? ':' : '$');
        eventType = parts[0];
      }

      // Call the original $on function.
      const componentDestructor = componentOn.call(
        component,
        eventType,
        callback
      );

      return (...args) => {
        destructor();
        return componentDestructor(...args);
      };
    };

    function forward(e) {
      // Internally bubble the event up from Svelte components.
      internal.bubble(component, e);
    }

    return (node) => {
      const destructors = [];
      const forwardDestructors = {};

      // This function is responsible for forwarding all bound events.
      $on = (fullEventType, callback) => {
        let eventType = fullEventType;
        let handler = callback;
        // DOM addEventListener options argument.
        let options = false;
        const oldModifierMatch = eventType.match(oldModifierRegex);
        const newModifierMatch = eventType.match(newModifierRegex);
        const modifierMatch = oldModifierMatch || newModifierMatch;
        if (modifierMatch) {
          // Parse the event modifiers.
          // Supported modifiers:
          // - preventDefault
          // - stopPropagation
          // - passive
          // - nonpassive
          // - capture
          // - once
          const parts = eventType.split(oldModifierMatch ? ':' : '$');
          eventType = parts[0];
          options = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
          if (options.nonpassive) {
            options.passive = false;
            delete options.nonpassive;
          }
          if (options.preventDefault) {
            handler = internal.prevent_default(handler);
            delete options.preventDefault;
          }
          if (options.stopPropagation) {
            handler = internal.stop_propagation(handler);
            delete options.stopPropagation;
          }
        }

        // Listen for the event directly, with the given options.
        const off = internal.listen(node, eventType, handler, options);
        const destructor = () => {
          off();
          const idx = destructors.indexOf(destructor);
          if (idx > -1) {
            destructors.splice(idx, 1);
          }
        };

        destructors.push(destructor);

        // Forward the event from Svelte.
        if (!eventType in forwardDestructors) {
          forwardDestructors[eventType] = internal.listen(node, eventType, forward);
        }

        return destructor;
      };

      for (let i = 0; i < events.length; i++) {
        // Listen to all the events added before mount.
        $on(events[i][0], events[i][1]);
      }

      return {
        destroy: () => {
          // Remove all event listeners.
          for (let i = 0; i < destructors.length; i++) {
            destructors[i]();
          }

          // Remove all event forwarders.
          for (let entry of Object.entries(forwardDestructors)) {
            entry[1]();
          }
        },
      };
    };
  }

  function classMap(classObj) {
    return Object.entries(classObj)
      .filter(([name, value]) => name !== '' && value)
      .map(([name]) => name)
      .join(' ');
  }

  /* node_modules/@smui/common/ClassAdder.svelte generated by Svelte v3.21.0 */

  // (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     [smuiClass]: true,     ...smuiClassMap,   })}   {...props}   {...$$restProps}>
  function create_default_slot(ctx) {
  	let current;
  	const default_slot_template = /*$$slots*/ ctx[12].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[14], null);

  	const block = {
  		c: function create() {
  			if (default_slot) default_slot.c();
  		},
  		m: function mount(target, anchor) {
  			if (default_slot) {
  				default_slot.m(target, anchor);
  			}

  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 16384) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[14], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[14], dirty, null));
  				}
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (default_slot) default_slot.d(detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot.name,
  		type: "slot",
  		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     [smuiClass]: true,     ...smuiClassMap,   })}   {...props}   {...$$restProps}>",
  		ctx
  	});

  	return block;
  }

  function create_fragment(ctx) {
  	let switch_instance_anchor;
  	let current;

  	const switch_instance_spread_levels = [
  		{
  			use: [/*forwardEvents*/ ctx[7], .../*use*/ ctx[0]]
  		},
  		{
  			class: classMap({
  				[/*className*/ ctx[1]]: true,
  				[/*smuiClass*/ ctx[5]]: true,
  				.../*smuiClassMap*/ ctx[4]
  			})
  		},
  		/*props*/ ctx[6],
  		/*$$restProps*/ ctx[8]
  	];

  	var switch_value = /*component*/ ctx[2];

  	function switch_props(ctx) {
  		let switch_instance_props = {
  			$$slots: { default: [create_default_slot] },
  			$$scope: { ctx }
  		};

  		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
  			switch_instance_props = internal.assign(switch_instance_props, switch_instance_spread_levels[i]);
  		}

  		return {
  			props: switch_instance_props,
  			$$inline: true
  		};
  	}

  	if (switch_value) {
  		var switch_instance = new switch_value(switch_props(ctx));
  		/*switch_instance_binding*/ ctx[13](switch_instance);
  	}

  	const block = {
  		c: function create() {
  			if (switch_instance) internal.create_component(switch_instance.$$.fragment);
  			switch_instance_anchor = internal.empty();
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			if (switch_instance) {
  				internal.mount_component(switch_instance, target, anchor);
  			}

  			internal.insert_dev(target, switch_instance_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, smuiClass, smuiClassMap, props, $$restProps*/ 499)
  			? internal.get_spread_update(switch_instance_spread_levels, [
  					dirty & /*forwardEvents, use*/ 129 && {
  						use: [/*forwardEvents*/ ctx[7], .../*use*/ ctx[0]]
  					},
  					dirty & /*classMap, className, smuiClass, smuiClassMap*/ 50 && {
  						class: classMap({
  							[/*className*/ ctx[1]]: true,
  							[/*smuiClass*/ ctx[5]]: true,
  							.../*smuiClassMap*/ ctx[4]
  						})
  					},
  					dirty & /*props*/ 64 && internal.get_spread_object(/*props*/ ctx[6]),
  					dirty & /*$$restProps*/ 256 && internal.get_spread_object(/*$$restProps*/ ctx[8])
  				])
  			: {};

  			if (dirty & /*$$scope*/ 16384) {
  				switch_instance_changes.$$scope = { dirty, ctx };
  			}

  			if (switch_value !== (switch_value = /*component*/ ctx[2])) {
  				if (switch_instance) {
  					internal.group_outros();
  					const old_component = switch_instance;

  					internal.transition_out(old_component.$$.fragment, 1, 0, () => {
  						internal.destroy_component(old_component, 1);
  					});

  					internal.check_outros();
  				}

  				if (switch_value) {
  					switch_instance = new switch_value(switch_props(ctx));
  					/*switch_instance_binding*/ ctx[13](switch_instance);
  					internal.create_component(switch_instance.$$.fragment);
  					internal.transition_in(switch_instance.$$.fragment, 1);
  					internal.mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
  				} else {
  					switch_instance = null;
  				}
  			} else if (switch_value) {
  				switch_instance.$set(switch_instance_changes);
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			if (switch_instance) internal.transition_in(switch_instance.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			if (switch_instance) internal.transition_out(switch_instance.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			/*switch_instance_binding*/ ctx[13](null);
  			if (detaching) internal.detach_dev(switch_instance_anchor);
  			if (switch_instance) internal.destroy_component(switch_instance, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  const internals = {
  	component: null,
  	class: "",
  	// The class map maps classes to contexts. The context
  	// should resolve to a Svelte store, and the class
  	// will be added if the Svelte store's value is true.
  	classMap: {},
  	contexts: {},
  	props: {}
  };

  function instance($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","class","component","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let element;
  	const smuiClass = internals.class;
  	const smuiClassMap = {};
  	const smuiClassUnsubscribes = [];
  	const contexts = internals.contexts;
  	const props = internals.props;
  	let { component = internals.component } = $$props;

  	Object.entries(internals.classMap).forEach(([name, context]) => {
  		const store = svelte.getContext(context);

  		if (store && "subscribe" in store) {
  			smuiClassUnsubscribes.push(store.subscribe(value => {
  				$$invalidate(4, smuiClassMap[name] = value, smuiClassMap);
  			}));
  		}
  	});

  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());

  	for (let context in contexts) {
  		if (contexts.hasOwnProperty(context)) {
  			svelte.setContext(context, contexts[context]);
  		}
  	}

  	svelte.onDestroy(() => {
  		for (const unsubscribe of smuiClassUnsubscribes) {
  			unsubscribe();
  		}
  	});

  	function getElement() {
  		return element.getElement();
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("ClassAdder", $$slots, ['default']);

  	function switch_instance_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(3, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(8, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
  		if ("component" in $$new_props) $$invalidate(2, component = $$new_props.component);
  		if ("$$scope" in $$new_props) $$invalidate(14, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		internals,
  		onDestroy: svelte.onDestroy,
  		getContext: svelte.getContext,
  		setContext: svelte.setContext,
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		use,
  		className,
  		element,
  		smuiClass,
  		smuiClassMap,
  		smuiClassUnsubscribes,
  		contexts,
  		props,
  		component,
  		forwardEvents,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  		if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
  		if ("component" in $$props) $$invalidate(2, component = $$new_props.component);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		className,
  		component,
  		element,
  		smuiClassMap,
  		smuiClass,
  		props,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		smuiClassUnsubscribes,
  		contexts,
  		$$slots,
  		switch_instance_binding,
  		$$scope
  	];
  }

  class ClassAdder extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(this, options, instance, create_fragment, internal.safe_not_equal, {
  			use: 0,
  			class: 1,
  			component: 2,
  			getElement: 9
  		});

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "ClassAdder",
  			options,
  			id: create_fragment.name
  		});
  	}

  	get use() {
  		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get component() {
  		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set component(value) {
  		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[9];
  	}

  	set getElement(value) {
  		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  const defaults = { ...internals };

  function classAdderBuilder(props) {
    function Component(...args) {
      Object.assign(internals, defaults, props);
      return new ClassAdder(...args);
    }

    Component.prototype = ClassAdder;

    // SSR support
    if (ClassAdder.$$render) {
      Component.$$render = (...args) =>
        Object.assign(internals, defaults, props) && ClassAdder.$$render(...args);
    }
    if (ClassAdder.render) {
      Component.render = (...args) =>
        Object.assign(internals, defaults, props) && ClassAdder.render(...args);
    }

    return Component;
  }

  function dispatch(
    element,
    eventType,
    detail = {},
    eventInit = { bubbles: true }
  ) {
    if (typeof Event !== 'undefined' && element) {
      const event = new Event(eventType, eventInit);
      event.detail = detail;
      const el = 'getElement' in element ? element.getElement() : element;
      el.dispatchEvent(event);
      return event;
    }
  }

  function exclude(obj, keys) {
    let names = Object.getOwnPropertyNames(obj);
    const newObj = {};

    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const cashIndex = name.indexOf('$');
      if (
        cashIndex !== -1 &&
        keys.indexOf(name.substring(0, cashIndex + 1)) !== -1
      ) {
        continue;
      }
      if (keys.indexOf(name) !== -1) {
        continue;
      }
      newObj[name] = obj[name];
    }

    return newObj;
  }

  function prefixFilter(obj, prefix) {
    let names = Object.getOwnPropertyNames(obj);
    const newObj = {};

    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      if (name.substring(0, prefix.length) === prefix) {
        newObj[name.substring(prefix.length)] = obj[name];
      }
    }

    return newObj;
  }

  function useActions(node, actions) {
    let objects = [];

    if (actions) {
      for (let i = 0; i < actions.length; i++) {
        const isArray = Array.isArray(actions[i]);
        const action = isArray ? actions[i][0] : actions[i];
        if (isArray && actions[i].length > 1) {
          objects.push(action(node, actions[i][1]));
        } else {
          objects.push(action(node));
        }
      }
    }

    return {
      update(actions) {
        if (((actions && actions.length) || 0) != objects.length) {
          throw new Error('You must not change the length of an actions array.');
        }

        if (actions) {
          for (let i = 0; i < actions.length; i++) {
            if (objects[i] && 'update' in objects[i]) {
              const isArray = Array.isArray(actions[i]);
              if (isArray && actions[i].length > 1) {
                objects[i].update(actions[i][1]);
              } else {
                objects[i].update();
              }
            }
          }
        }
      },

      destroy() {
        for (let i = 0; i < objects.length; i++) {
          if (objects[i] && 'destroy' in objects[i]) {
            objects[i].destroy();
          }
        }
      },
    };
  }

  /* node_modules/@smui/dialog/Dialog.svelte generated by Svelte v3.21.0 */

  const { document: document_1, window: window_1 } = internal.globals;

  const file = "node_modules/@smui/dialog/Dialog.svelte";
  const get_over_slot_changes = dirty => ({});
  const get_over_slot_context = ctx => ({});

  // (47:6) {#if fullscreen}
  function create_if_block(ctx) {
  	let div;
  	let dispose;

  	const block = {
  		c: function create() {
  			div = internal.element("div");
  			internal.attr_dev(div, "class", "mdc-dialog__surface-scrim");
  			internal.add_location(div, file, 47, 8, 1327);
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, div, anchor);
  			if (remount) dispose();
  			dispose = internal.listen_dev(div, "transitionend", /*transitionend_handler*/ ctx[48], false, false, false);
  		},
  		p: internal.noop,
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(div);
  			dispose();
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_if_block.name,
  		type: "if",
  		source: "(47:6) {#if fullscreen}",
  		ctx
  	});

  	return block;
  }

  function create_fragment$1(ctx) {
  	let t0;
  	let div3;
  	let div1;
  	let div0;
  	let t1;
  	let t2;
  	let div2;
  	let useActions_action;
  	let forwardEvents_action;
  	let t3;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[44].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[43], null);
  	let if_block = /*fullscreen*/ ctx[5] && create_if_block(ctx);

  	let div0_levels = [
  		{
  			class: classMap({
  				[/*surface$class*/ ctx[7]]: true,
  				"mdc-dialog__surface": true
  			})
  		},
  		{ role: "alertdialog" },
  		{ "aria-modal": "true" },
  		prefixFilter(/*$$restProps*/ ctx[17], "surface$")
  	];

  	let div0_data = {};

  	for (let i = 0; i < div0_levels.length; i += 1) {
  		div0_data = internal.assign(div0_data, div0_levels[i]);
  	}

  	let div1_levels = [
  		{
  			class: classMap({
  				[/*container$class*/ ctx[6]]: true,
  				"mdc-dialog__container": true
  			})
  		},
  		prefixFilter(/*$$restProps*/ ctx[17], "container$")
  	];

  	let div1_data = {};

  	for (let i = 0; i < div1_levels.length; i += 1) {
  		div1_data = internal.assign(div1_data, div1_levels[i]);
  	}

  	let div3_levels = [
  		{
  			class: classMap({
  				[/*className*/ ctx[2]]: true,
  				"mdc-dialog": true,
  				"mdc-dialog--stacked": !/*autoStackButtons*/ ctx[4],
  				"mdc-dialog--fullscreen": /*fullscreen*/ ctx[5],
  				"smui-dialog--selection": /*selection*/ ctx[3],
  				.../*internalClasses*/ ctx[10]
  			})
  		},
  		{ role: "alertdialog" },
  		{ "aria-modal": "true" },
  		exclude(/*$$restProps*/ ctx[17], ["container$", "surface$"])
  	];

  	let div3_data = {};

  	for (let i = 0; i < div3_levels.length; i += 1) {
  		div3_data = internal.assign(div3_data, div3_levels[i]);
  	}

  	const over_slot_template = /*$$slots*/ ctx[44].over;
  	const over_slot = internal.create_slot(over_slot_template, ctx, /*$$scope*/ ctx[43], get_over_slot_context);

  	const block = {
  		c: function create() {
  			t0 = internal.space();
  			div3 = internal.element("div");
  			div1 = internal.element("div");
  			div0 = internal.element("div");
  			if (default_slot) default_slot.c();
  			t1 = internal.space();
  			if (if_block) if_block.c();
  			t2 = internal.space();
  			div2 = internal.element("div");
  			t3 = internal.space();
  			if (over_slot) over_slot.c();
  			internal.set_attributes(div0, div0_data);
  			internal.add_location(div0, file, 36, 4, 1070);
  			internal.set_attributes(div1, div1_data);
  			internal.add_location(div1, file, 29, 2, 910);
  			internal.attr_dev(div2, "class", "mdc-dialog__scrim");
  			internal.add_location(div2, file, 55, 2, 1523);
  			internal.set_attributes(div3, div3_data);
  			internal.add_location(div3, file, 8, 0, 250);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, t0, anchor);
  			internal.insert_dev(target, div3, anchor);
  			internal.append_dev(div3, div1);
  			internal.append_dev(div1, div0);

  			if (default_slot) {
  				default_slot.m(div0, null);
  			}

  			internal.append_dev(div0, t1);
  			if (if_block) if_block.m(div0, null);
  			internal.append_dev(div3, t2);
  			internal.append_dev(div3, div2);
  			/*div3_binding*/ ctx[49](div3);
  			internal.insert_dev(target, t3, anchor);

  			if (over_slot) {
  				over_slot.m(target, anchor);
  			}

  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.listen_dev(window_1, "resize", /*resize_handler*/ ctx[45], false, false, false),
  				internal.listen_dev(window_1, "orientationchange", /*orientationchange_handler*/ ctx[46], false, false, false),
  				internal.listen_dev(document_1.body, "keydown", /*keydown_handler*/ ctx[47], false, false, false),
  				internal.action_destroyer(useActions_action = useActions.call(null, div3, /*use*/ ctx[1])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[11].call(null, div3)),
  				internal.listen_dev(div3, "MDCDialog:opening", /*handleDialogOpening*/ ctx[14], false, false, false),
  				internal.listen_dev(div3, "MDCDialog:opened", /*handleDialogOpened*/ ctx[15], false, false, false),
  				internal.listen_dev(div3, "MDCDialog:closed", /*handleDialogClosed*/ ctx[16], false, false, false),
  				internal.listen_dev(div3, "click", /*click_handler*/ ctx[50], false, false, false),
  				internal.listen_dev(div3, "keydown", /*keydown_handler_1*/ ctx[51], false, false, false)
  			];
  		},
  		p: function update(ctx, dirty) {
  			if (default_slot) {
  				if (default_slot.p && dirty[1] & /*$$scope*/ 4096) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[43], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[43], dirty, null));
  				}
  			}

  			if (/*fullscreen*/ ctx[5]) {
  				if (if_block) {
  					if_block.p(ctx, dirty);
  				} else {
  					if_block = create_if_block(ctx);
  					if_block.c();
  					if_block.m(div0, null);
  				}
  			} else if (if_block) {
  				if_block.d(1);
  				if_block = null;
  			}

  			internal.set_attributes(div0, internal.get_spread_update(div0_levels, [
  				dirty[0] & /*surface$class*/ 128 && {
  					class: classMap({
  						[/*surface$class*/ ctx[7]]: true,
  						"mdc-dialog__surface": true
  					})
  				},
  				{ role: "alertdialog" },
  				{ "aria-modal": "true" },
  				dirty[0] & /*$$restProps*/ 131072 && prefixFilter(/*$$restProps*/ ctx[17], "surface$")
  			]));

  			internal.set_attributes(div1, internal.get_spread_update(div1_levels, [
  				dirty[0] & /*container$class*/ 64 && {
  					class: classMap({
  						[/*container$class*/ ctx[6]]: true,
  						"mdc-dialog__container": true
  					})
  				},
  				dirty[0] & /*$$restProps*/ 131072 && prefixFilter(/*$$restProps*/ ctx[17], "container$")
  			]));

  			internal.set_attributes(div3, internal.get_spread_update(div3_levels, [
  				dirty[0] & /*className, autoStackButtons, fullscreen, selection, internalClasses*/ 1084 && {
  					class: classMap({
  						[/*className*/ ctx[2]]: true,
  						"mdc-dialog": true,
  						"mdc-dialog--stacked": !/*autoStackButtons*/ ctx[4],
  						"mdc-dialog--fullscreen": /*fullscreen*/ ctx[5],
  						"smui-dialog--selection": /*selection*/ ctx[3],
  						.../*internalClasses*/ ctx[10]
  					})
  				},
  				{ role: "alertdialog" },
  				{ "aria-modal": "true" },
  				dirty[0] & /*$$restProps*/ 131072 && exclude(/*$$restProps*/ ctx[17], ["container$", "surface$"])
  			]));

  			if (useActions_action && internal.is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);

  			if (over_slot) {
  				if (over_slot.p && dirty[1] & /*$$scope*/ 4096) {
  					over_slot.p(internal.get_slot_context(over_slot_template, ctx, /*$$scope*/ ctx[43], get_over_slot_context), internal.get_slot_changes(over_slot_template, /*$$scope*/ ctx[43], dirty, get_over_slot_changes));
  				}
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			internal.transition_in(over_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			internal.transition_out(over_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t0);
  			if (detaching) internal.detach_dev(div3);
  			if (default_slot) default_slot.d(detaching);
  			if (if_block) if_block.d();
  			/*div3_binding*/ ctx[49](null);
  			if (detaching) internal.detach_dev(t3);
  			if (over_slot) over_slot.d(detaching);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$1.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance_1($$self, $$props, $$invalidate) {
  	const omit_props_names = [
  		"use","class","open","selection","escapeKeyAction","scrimClickAction","autoStackButtons","fullscreen","container$class","surface$class","isOpen","setOpen","layout","getElement"
  	];

  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let $actionButtonsReversed;
  	let $aboveFullscreenShown;
  	const { FocusTrap } = domFocusTrap;
  	const { closest, matches } = ponyfill;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let { open = false } = $$props;
  	let { selection = false } = $$props;
  	let { escapeKeyAction = "close" } = $$props;
  	let { scrimClickAction = "close" } = $$props;
  	let { autoStackButtons = true } = $$props;
  	let { fullscreen = false } = $$props;
  	let { container$class = "" } = $$props;
  	let { surface$class = "" } = $$props;
  	let element;
  	let instance;
  	let internalClasses = {};
  	let focusTrap;
  	let actionButtonsReversed = store.writable(false);
  	internal.validate_store(actionButtonsReversed, "actionButtonsReversed");
  	internal.component_subscribe($$self, actionButtonsReversed, value => $$invalidate(27, $actionButtonsReversed = value));
  	let addLayoutListener = svelte.getContext("SMUI:addLayoutListener");
  	let aboveFullscreen = svelte.getContext("SMUI:dialog:aboveFullscreen");
  	let aboveFullscreenShown = svelte.getContext("SMUI:dialog:aboveFullscreenShown") || store.writable(false);
  	internal.validate_store(aboveFullscreenShown, "aboveFullscreenShown");
  	internal.component_subscribe($$self, aboveFullscreenShown, value => $$invalidate(28, $aboveFullscreenShown = value));
  	let removeLayoutListener;
  	let layoutListeners = [];

  	let addLayoutListenerFn = listener => {
  		layoutListeners.push(listener);

  		return () => {
  			const idx = layoutListeners.indexOf(listener);

  			if (idx >= 0) {
  				layoutListeners.splice(idx, 1);
  			}
  		};
  	};

  	svelte.setContext("SMUI:dialog:actions:reversed", actionButtonsReversed);
  	svelte.setContext("SMUI:addLayoutListener", addLayoutListenerFn);
  	svelte.setContext("SMUI:dialog:selection", selection);
  	svelte.setContext("SMUI:dialog:aboveFullscreen", aboveFullscreen || fullscreen);
  	svelte.setContext("SMUI:dialog:aboveFullscreenShown", aboveFullscreenShown);

  	if (addLayoutListener) {
  		removeLayoutListener = addLayoutListener(layout);
  	}

  	let previousAboveFullscreenShown = $aboveFullscreenShown;

  	svelte.onMount(() => {
  		focusTrap = new FocusTrap(element, { initialFocusEl: getInitialFocusEl() });

  		$$invalidate(9, instance = new MDCDialogFoundation({
  				addBodyClass: className => document.body.classList.add(className),
  				addClass,
  				areButtonsStacked: () => areTopsMisaligned(getButtonEls()),
  				clickDefaultButton: () => {
  					const defaultButton = getDefaultButtonEl();

  					if (defaultButton) {
  						defaultButton.click();
  					}
  				},
  				eventTargetMatches: (target, selector) => target ? matches(target, selector) : false,
  				getActionFromEvent: evt => {
  					if (!evt.target) {
  						return "";
  					}

  					const element = closest(evt.target, "[data-mdc-dialog-action]");
  					return element && element.getAttribute("data-mdc-dialog-action");
  				},
  				getInitialFocusEl,
  				hasClass,
  				isContentScrollable: () => isScrollable(getContentEl()),
  				notifyClosed: action => {
  					$$invalidate(0, open = false);
  					dispatch(getElement(), "MDCDialog:closed", action ? { action } : {});
  				},
  				notifyClosing: action => dispatch(getElement(), "MDCDialog:closing", action ? { action } : {}),
  				notifyOpened: () => dispatch(getElement(), "MDCDialog:opened", {}),
  				notifyOpening: () => dispatch(getElement(), "MDCDialog:opening", {}),
  				releaseFocus: () => focusTrap.releaseFocus(),
  				removeBodyClass: className => document.body.classList.remove(className),
  				removeClass,
  				reverseButtons: () => {
  					internal.set_store_value(actionButtonsReversed, $actionButtonsReversed = true);
  				},
  				trapFocus: () => focusTrap.trapFocus(),
  				registerContentEventHandler: (evt, handler) => {
  					const content = getContentEl();

  					if (content instanceof HTMLElement) {
  						content.addEventListener(evt, handler);
  					}
  				},
  				deregisterContentEventHandler: (evt, handler) => {
  					const content = getContentEl();

  					if (content instanceof HTMLElement) {
  						content.removeEventListener(evt, handler);
  					}
  				},
  				isScrollableContentAtTop: () => {
  					return isScrollAtTop(getContentEl());
  				},
  				isScrollableContentAtBottom: () => {
  					return isScrollAtBottom(getContentEl());
  				},
  				registerWindowEventHandler: (evt, handler) => {
  					window.addEventListener(evt, handler);
  				},
  				deregisterWindowEventHandler: (evt, handler) => {
  					window.removeEventListener(evt, handler);
  				}
  			}));

  		instance.init();

  		return () => {
  			instance.destroy();
  		};
  	});

  	svelte.onDestroy(() => {
  		if (removeLayoutListener) {
  			removeLayoutListener();
  		}
  	});

  	function hasClass(className) {
  		return className in internalClasses
  		? internalClasses[className]
  		: getElement().classList.contains(className);
  	}

  	function addClass(className) {
  		if (!internalClasses[className]) {
  			$$invalidate(10, internalClasses[className] = true, internalClasses);
  		}
  	}

  	function removeClass(className) {
  		if (!(className in internalClasses) || internalClasses[className]) {
  			$$invalidate(10, internalClasses[className] = false, internalClasses);
  		}
  	}

  	function getButtonEls() {
  		return [].slice.call(element.querySelectorAll(".mdc-dialog__button"));
  	}

  	function getDefaultButtonEl() {
  		return element.querySelector("[data-mdc-dialog-button-default");
  	}

  	function getContentEl() {
  		return element.querySelector(".mdc-dialog__content");
  	}

  	function getInitialFocusEl() {
  		return element.querySelector("[data-mdc-dialog-initial-focus]");
  	}

  	function handleDialogOpening() {
  		if (aboveFullscreen) {
  			internal.set_store_value(aboveFullscreenShown, $aboveFullscreenShown = true);
  		}

  		requestAnimationFrame(() => {
  			layoutListeners.forEach(listener => listener());
  		});
  	}

  	function handleDialogOpened() {
  		layoutListeners.forEach(listener => listener());
  	}

  	function handleDialogClosed() {
  		if (aboveFullscreen) {
  			internal.set_store_value(aboveFullscreenShown, $aboveFullscreenShown = false);
  		}
  	}

  	function isOpen() {
  		return open;
  	}

  	function setOpen(value) {
  		$$invalidate(0, open = value);
  	}

  	function layout() {
  		return instance.layout();
  	}

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Dialog", $$slots, ['default','over']);
  	const resize_handler = () => open && instance && instance.layout();
  	const orientationchange_handler = () => open && instance && instance.layout();
  	const keydown_handler = event => open && instance && instance.handleDocumentKeydown(event);
  	const transitionend_handler = () => instance && instance.handleSurfaceScrimTransitionEnd();

  	function div3_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(8, element = $$value);
  		});
  	}

  	const click_handler = event => instance && instance.handleClick(event);
  	const keydown_handler_1 = event => instance && instance.handleKeydown(event);

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(17, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
  		if ("open" in $$new_props) $$invalidate(0, open = $$new_props.open);
  		if ("selection" in $$new_props) $$invalidate(3, selection = $$new_props.selection);
  		if ("escapeKeyAction" in $$new_props) $$invalidate(18, escapeKeyAction = $$new_props.escapeKeyAction);
  		if ("scrimClickAction" in $$new_props) $$invalidate(19, scrimClickAction = $$new_props.scrimClickAction);
  		if ("autoStackButtons" in $$new_props) $$invalidate(4, autoStackButtons = $$new_props.autoStackButtons);
  		if ("fullscreen" in $$new_props) $$invalidate(5, fullscreen = $$new_props.fullscreen);
  		if ("container$class" in $$new_props) $$invalidate(6, container$class = $$new_props.container$class);
  		if ("surface$class" in $$new_props) $$invalidate(7, surface$class = $$new_props.surface$class);
  		if ("$$scope" in $$new_props) $$invalidate(43, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		MDCDialogFoundation,
  		util,
  		domFocusTrap,
  		ponyfill,
  		onMount: svelte.onMount,
  		onDestroy: svelte.onDestroy,
  		getContext: svelte.getContext,
  		setContext: svelte.setContext,
  		writable: store.writable,
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		exclude,
  		prefixFilter,
  		useActions,
  		dispatch,
  		FocusTrap,
  		closest,
  		matches,
  		forwardEvents,
  		use,
  		className,
  		open,
  		selection,
  		escapeKeyAction,
  		scrimClickAction,
  		autoStackButtons,
  		fullscreen,
  		container$class,
  		surface$class,
  		element,
  		instance,
  		internalClasses,
  		focusTrap,
  		actionButtonsReversed,
  		addLayoutListener,
  		aboveFullscreen,
  		aboveFullscreenShown,
  		removeLayoutListener,
  		layoutListeners,
  		addLayoutListenerFn,
  		previousAboveFullscreenShown,
  		hasClass,
  		addClass,
  		removeClass,
  		getButtonEls,
  		getDefaultButtonEl,
  		getContentEl,
  		getInitialFocusEl,
  		handleDialogOpening,
  		handleDialogOpened,
  		handleDialogClosed,
  		isOpen,
  		setOpen,
  		layout,
  		getElement,
  		$actionButtonsReversed,
  		$aboveFullscreenShown
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
  		if ("open" in $$props) $$invalidate(0, open = $$new_props.open);
  		if ("selection" in $$props) $$invalidate(3, selection = $$new_props.selection);
  		if ("escapeKeyAction" in $$props) $$invalidate(18, escapeKeyAction = $$new_props.escapeKeyAction);
  		if ("scrimClickAction" in $$props) $$invalidate(19, scrimClickAction = $$new_props.scrimClickAction);
  		if ("autoStackButtons" in $$props) $$invalidate(4, autoStackButtons = $$new_props.autoStackButtons);
  		if ("fullscreen" in $$props) $$invalidate(5, fullscreen = $$new_props.fullscreen);
  		if ("container$class" in $$props) $$invalidate(6, container$class = $$new_props.container$class);
  		if ("surface$class" in $$props) $$invalidate(7, surface$class = $$new_props.surface$class);
  		if ("element" in $$props) $$invalidate(8, element = $$new_props.element);
  		if ("instance" in $$props) $$invalidate(9, instance = $$new_props.instance);
  		if ("internalClasses" in $$props) $$invalidate(10, internalClasses = $$new_props.internalClasses);
  		if ("focusTrap" in $$props) focusTrap = $$new_props.focusTrap;
  		if ("actionButtonsReversed" in $$props) $$invalidate(12, actionButtonsReversed = $$new_props.actionButtonsReversed);
  		if ("addLayoutListener" in $$props) addLayoutListener = $$new_props.addLayoutListener;
  		if ("aboveFullscreen" in $$props) $$invalidate(33, aboveFullscreen = $$new_props.aboveFullscreen);
  		if ("aboveFullscreenShown" in $$props) $$invalidate(13, aboveFullscreenShown = $$new_props.aboveFullscreenShown);
  		if ("removeLayoutListener" in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
  		if ("layoutListeners" in $$props) layoutListeners = $$new_props.layoutListeners;
  		if ("addLayoutListenerFn" in $$props) addLayoutListenerFn = $$new_props.addLayoutListenerFn;
  		if ("previousAboveFullscreenShown" in $$props) $$invalidate(26, previousAboveFullscreenShown = $$new_props.previousAboveFullscreenShown);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$self.$$.update = () => {
  		if ($$self.$$.dirty[0] & /*instance, escapeKeyAction*/ 262656) {
  			 if (instance && instance.getEscapeKeyAction() !== escapeKeyAction) {
  				instance.setEscapeKeyAction(escapeKeyAction);
  			}
  		}

  		if ($$self.$$.dirty[0] & /*instance, scrimClickAction*/ 524800) {
  			 if (instance && instance.getScrimClickAction() !== scrimClickAction) {
  				instance.setScrimClickAction(scrimClickAction);
  			}
  		}

  		if ($$self.$$.dirty[0] & /*instance, autoStackButtons*/ 528) {
  			 if (instance && instance.getAutoStackButtons() !== autoStackButtons) {
  				instance.setAutoStackButtons(autoStackButtons);
  			}
  		}

  		if ($$self.$$.dirty[0] & /*autoStackButtons*/ 16) {
  			 if (!autoStackButtons) {
  				internal.set_store_value(actionButtonsReversed, $actionButtonsReversed = true);
  			}
  		}

  		if ($$self.$$.dirty[0] & /*instance, open*/ 513) {
  			 if (instance && instance.isOpen() !== open) {
  				if (open) {
  					instance.open({
  						isAboveFullscreenDialog: !!aboveFullscreen
  					});
  				} else {
  					instance.close();
  				}
  			}
  		}

  		if ($$self.$$.dirty[0] & /*fullscreen, instance, previousAboveFullscreenShown, $aboveFullscreenShown*/ 335544864) {
  			 if (fullscreen && instance && previousAboveFullscreenShown !== $aboveFullscreenShown) {
  				$$invalidate(26, previousAboveFullscreenShown = $aboveFullscreenShown);

  				if ($aboveFullscreenShown) {
  					instance.showSurfaceScrim();
  				} else {
  					instance.hideSurfaceScrim();
  				}
  			}
  		}
  	};

  	return [
  		open,
  		use,
  		className,
  		selection,
  		autoStackButtons,
  		fullscreen,
  		container$class,
  		surface$class,
  		element,
  		instance,
  		internalClasses,
  		forwardEvents,
  		actionButtonsReversed,
  		aboveFullscreenShown,
  		handleDialogOpening,
  		handleDialogOpened,
  		handleDialogClosed,
  		$$restProps,
  		escapeKeyAction,
  		scrimClickAction,
  		isOpen,
  		setOpen,
  		layout,
  		getElement,
  		focusTrap,
  		removeLayoutListener,
  		previousAboveFullscreenShown,
  		$actionButtonsReversed,
  		$aboveFullscreenShown,
  		FocusTrap,
  		closest,
  		matches,
  		addLayoutListener,
  		aboveFullscreen,
  		layoutListeners,
  		addLayoutListenerFn,
  		hasClass,
  		addClass,
  		removeClass,
  		getButtonEls,
  		getDefaultButtonEl,
  		getContentEl,
  		getInitialFocusEl,
  		$$scope,
  		$$slots,
  		resize_handler,
  		orientationchange_handler,
  		keydown_handler,
  		transitionend_handler,
  		div3_binding,
  		click_handler,
  		keydown_handler_1
  	];
  }

  class Dialog extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(
  			this,
  			options,
  			instance_1,
  			create_fragment$1,
  			internal.safe_not_equal,
  			{
  				use: 1,
  				class: 2,
  				open: 0,
  				selection: 3,
  				escapeKeyAction: 18,
  				scrimClickAction: 19,
  				autoStackButtons: 4,
  				fullscreen: 5,
  				container$class: 6,
  				surface$class: 7,
  				isOpen: 20,
  				setOpen: 21,
  				layout: 22,
  				getElement: 23
  			},
  			[-1, -1]
  		);

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Dialog",
  			options,
  			id: create_fragment$1.name
  		});
  	}

  	get use() {
  		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get open() {
  		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set open(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get selection() {
  		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set selection(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get escapeKeyAction() {
  		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set escapeKeyAction(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get scrimClickAction() {
  		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set scrimClickAction(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get autoStackButtons() {
  		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set autoStackButtons(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get fullscreen() {
  		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set fullscreen(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get container$class() {
  		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set container$class(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get surface$class() {
  		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set surface$class(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get isOpen() {
  		return this.$$.ctx[20];
  	}

  	set isOpen(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get setOpen() {
  		return this.$$.ctx[21];
  	}

  	set setOpen(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get layout() {
  		return this.$$.ctx[22];
  	}

  	set layout(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[23];
  	}

  	set getElement(value) {
  		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules/@smui/common/Div.svelte generated by Svelte v3.21.0 */
  const file$1 = "node_modules/@smui/common/Div.svelte";

  function create_fragment$2(ctx) {
  	let div;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[6].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
  	let div_levels = [/*$$restProps*/ ctx[3]];
  	let div_data = {};

  	for (let i = 0; i < div_levels.length; i += 1) {
  		div_data = internal.assign(div_data, div_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			div = internal.element("div");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(div, div_data);
  			internal.add_location(div, file$1, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, div, anchor);

  			if (default_slot) {
  				default_slot.m(div, null);
  			}

  			/*div_binding*/ ctx[7](div);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, div))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 32) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
  				}
  			}

  			internal.set_attributes(div, internal.get_spread_update(div_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(div);
  			if (default_slot) default_slot.d(detaching);
  			/*div_binding*/ ctx[7](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$2.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$1($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { use = [] } = $$props;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let element = null;

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Div", $$slots, ['default']);

  	function div_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(1, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(3, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		useActions,
  		use,
  		forwardEvents,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		div_binding
  	];
  }

  class Div extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$1, create_fragment$2, internal.safe_not_equal, { use: 0, getElement: 4 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Div",
  			options,
  			id: create_fragment$2.name
  		});
  	}

  	get use() {
  		throw new Error("<Div>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Div>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[4];
  	}

  	set getElement(value) {
  		throw new Error("<Div>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  classAdderBuilder({
    class: 'mdc-dialog__header',
    component: Div,
    contexts: {
      'SMUI:icon-button:context': 'dialog:header',
    },
  });

  /* node_modules/@smui/common/H2.svelte generated by Svelte v3.21.0 */
  const file$2 = "node_modules/@smui/common/H2.svelte";

  function create_fragment$3(ctx) {
  	let h2;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[6].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
  	let h2_levels = [/*$$restProps*/ ctx[3]];
  	let h2_data = {};

  	for (let i = 0; i < h2_levels.length; i += 1) {
  		h2_data = internal.assign(h2_data, h2_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			h2 = internal.element("h2");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(h2, h2_data);
  			internal.add_location(h2, file$2, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, h2, anchor);

  			if (default_slot) {
  				default_slot.m(h2, null);
  			}

  			/*h2_binding*/ ctx[7](h2);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, h2, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, h2))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 32) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
  				}
  			}

  			internal.set_attributes(h2, internal.get_spread_update(h2_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(h2);
  			if (default_slot) default_slot.d(detaching);
  			/*h2_binding*/ ctx[7](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$3.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$2($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { use = [] } = $$props;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let element = null;

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("H2", $$slots, ['default']);

  	function h2_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(1, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(3, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		useActions,
  		use,
  		forwardEvents,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		h2_binding
  	];
  }

  class H2 extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$2, create_fragment$3, internal.safe_not_equal, { use: 0, getElement: 4 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "H2",
  			options,
  			id: create_fragment$3.name
  		});
  	}

  	get use() {
  		throw new Error("<H2>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<H2>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[4];
  	}

  	set getElement(value) {
  		throw new Error("<H2>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  var Title = classAdderBuilder({
    class: 'mdc-dialog__title',
    component: H2,
  });

  var Content = classAdderBuilder({
    class: 'mdc-dialog__content',
    component: Div,
  });

  var Actions = classAdderBuilder({
    class: 'mdc-dialog__actions',
    component: Div,
    classMap: {
      'smui-dialog__actions--reversed': 'SMUI:dialog:actions:reversed',
    },
    contexts: {
      'SMUI:button:context': 'dialog:action',
    },
  });

  const { applyPassive: applyPassive$1 } = events;
  const { matches: matches$1 } = ponyfill;

  function Ripple(
    node,
    {
      ripple = true,
      surface = false,
      unbounded = false,
      disabled = false,
      color = null,
      active = null,
      eventTarget = null,
      activeTarget = null,
      addClass = (className) => node.classList.add(className),
      removeClass = (className) => node.classList.remove(className),
      addStyle = (name, value) => node.style.setProperty(name, value),
      initPromise = Promise.resolve(),
    } = {}
  ) {
    let instance;
    let addLayoutListener = svelte.getContext('SMUI:addLayoutListener');
    let removeLayoutListener;
    let oldActive = active;
    let oldEventTarget = eventTarget;
    let oldActiveTarget = activeTarget;

    function handleProps() {
      if (surface) {
        addClass('mdc-ripple-surface');
        if (color === 'primary') {
          addClass('smui-ripple-surface--primary');
          removeClass('smui-ripple-surface--secondary');
        } else if (color === 'secondary') {
          removeClass('smui-ripple-surface--primary');
          addClass('smui-ripple-surface--secondary');
        } else {
          removeClass('smui-ripple-surface--primary');
          removeClass('smui-ripple-surface--secondary');
        }
      }

      // Handle activation first.
      if (instance && oldActive !== active) {
        oldActive = active;
        if (active) {
          instance.activate();
        } else if (active === false) {
          instance.deactivate();
        }
      }

      // Then create/destroy an instance.
      if (ripple && !instance) {
        instance = new MDCRippleFoundation({
          addClass,
          browserSupportsCssVars: () => supportsCssVariables(window),
          computeBoundingRect: () => node.getBoundingClientRect(),
          containsEventTarget: (target) => node.contains(target),
          deregisterDocumentInteractionHandler: (evtType, handler) =>
            document.documentElement.removeEventListener(
              evtType,
              handler,
              applyPassive$1()
            ),
          deregisterInteractionHandler: (evtType, handler) =>
            (eventTarget || node).removeEventListener(
              evtType,
              handler,
              applyPassive$1()
            ),
          deregisterResizeHandler: (handler) =>
            window.removeEventListener('resize', handler),
          getWindowPageOffset: () => ({
            x: window.pageXOffset,
            y: window.pageYOffset,
          }),
          isSurfaceActive: () =>
            active == null ? matches$1(activeTarget || node, ':active') : active,
          isSurfaceDisabled: () => !!disabled,
          isUnbounded: () => !!unbounded,
          registerDocumentInteractionHandler: (evtType, handler) =>
            document.documentElement.addEventListener(
              evtType,
              handler,
              applyPassive$1()
            ),
          registerInteractionHandler: (evtType, handler) =>
            (eventTarget || node).addEventListener(
              evtType,
              handler,
              applyPassive$1()
            ),
          registerResizeHandler: (handler) =>
            window.addEventListener('resize', handler),
          removeClass,
          updateCssVariable: addStyle,
        });

        initPromise.then(() => {
          instance.init();
          instance.setUnbounded(unbounded);
        });
      } else if (instance && !ripple) {
        initPromise.then(() => {
          instance.destroy();
          instance = null;
        });
      }

      // Now handle event/active targets
      if (
        instance &&
        (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)
      ) {
        oldEventTarget = eventTarget;
        oldActiveTarget = activeTarget;

        instance.destroy();
        requestAnimationFrame(() => {
          if (instance) {
            instance.init();
            instance.setUnbounded(unbounded);
          }
        });
      }

      if (!ripple && unbounded) {
        addClass('mdc-ripple-upgraded--unbounded');
      }
    }

    handleProps();

    if (addLayoutListener) {
      removeLayoutListener = addLayoutListener(layout);
    }

    function layout() {
      if (instance) {
        instance.layout();
      }
    }

    return {
      update(props) {
        ({
          ripple,
          surface,
          unbounded,
          disabled,
          color,
          active,
          eventTarget,
          activeTarget,
          addClass,
          removeClass,
          addStyle,
          initPromise,
        } = {
          ripple: true,
          surface: false,
          unbounded: false,
          disabled: false,
          color: null,
          active: null,
          eventTarget: null,
          activeTarget: null,
          addClass: (className) => node.classList.add(className),
          removeClass: (className) => node.classList.remove(className),
          addStyle: (name, value) => node.style.setProperty(name, value),
          initPromise: Promise.resolve(),
          ...props,
        });
        handleProps();
      },

      destroy() {
        if (instance) {
          instance.destroy();
          instance = null;
          removeClass('mdc-ripple-surface');
          removeClass('smui-ripple-surface--primary');
          removeClass('smui-ripple-surface--secondary');
        }

        if (removeLayoutListener) {
          removeLayoutListener();
        }
      },
    };
  }

  /* node_modules/@smui/common/A.svelte generated by Svelte v3.21.0 */
  const file$3 = "node_modules/@smui/common/A.svelte";

  function create_fragment$4(ctx) {
  	let a;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[7].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
  	let a_levels = [{ href: /*href*/ ctx[0] }, /*$$restProps*/ ctx[4]];
  	let a_data = {};

  	for (let i = 0; i < a_levels.length; i += 1) {
  		a_data = internal.assign(a_data, a_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			a = internal.element("a");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(a, a_data);
  			internal.add_location(a, file$3, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, a, anchor);

  			if (default_slot) {
  				default_slot.m(a, null);
  			}

  			/*a_binding*/ ctx[8](a);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, a, /*use*/ ctx[1])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[3].call(null, a))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 64) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[6], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null));
  				}
  			}

  			internal.set_attributes(a, internal.get_spread_update(a_levels, [
  				dirty & /*href*/ 1 && { href: /*href*/ ctx[0] },
  				dirty & /*$$restProps*/ 16 && /*$$restProps*/ ctx[4]
  			]));

  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(a);
  			if (default_slot) default_slot.d(detaching);
  			/*a_binding*/ ctx[8](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$4.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$3($$self, $$props, $$invalidate) {
  	const omit_props_names = ["href","use","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { href = "javascript:void(0);" } = $$props;
  	let { use = [] } = $$props;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let element = null;

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("A", $$slots, ['default']);

  	function a_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(2, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(4, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("href" in $$new_props) $$invalidate(0, href = $$new_props.href);
  		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
  		if ("$$scope" in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		useActions,
  		href,
  		use,
  		forwardEvents,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("href" in $$props) $$invalidate(0, href = $$new_props.href);
  		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
  		if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		href,
  		use,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		a_binding
  	];
  }

  class A extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$3, create_fragment$4, internal.safe_not_equal, { href: 0, use: 1, getElement: 5 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "A",
  			options,
  			id: create_fragment$4.name
  		});
  	}

  	get href() {
  		throw new Error("<A>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set href(value) {
  		throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get use() {
  		throw new Error("<A>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[5];
  	}

  	set getElement(value) {
  		throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules/@smui/common/Button.svelte generated by Svelte v3.21.0 */
  const file$4 = "node_modules/@smui/common/Button.svelte";

  function create_fragment$5(ctx) {
  	let button;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[6].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
  	let button_levels = [/*$$restProps*/ ctx[3]];
  	let button_data = {};

  	for (let i = 0; i < button_levels.length; i += 1) {
  		button_data = internal.assign(button_data, button_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			button = internal.element("button");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(button, button_data);
  			internal.add_location(button, file$4, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, button, anchor);

  			if (default_slot) {
  				default_slot.m(button, null);
  			}

  			/*button_binding*/ ctx[7](button);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, button, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, button))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 32) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
  				}
  			}

  			internal.set_attributes(button, internal.get_spread_update(button_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(button);
  			if (default_slot) default_slot.d(detaching);
  			/*button_binding*/ ctx[7](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$5.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$4($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { use = [] } = $$props;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let element = null;

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Button", $$slots, ['default']);

  	function button_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(1, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(3, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		useActions,
  		use,
  		forwardEvents,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		button_binding
  	];
  }

  class Button extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$4, create_fragment$5, internal.safe_not_equal, { use: 0, getElement: 4 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Button",
  			options,
  			id: create_fragment$5.name
  		});
  	}

  	get use() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[4];
  	}

  	set getElement(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules/@smui/button/Button.svelte generated by Svelte v3.21.0 */
  const file$5 = "node_modules/@smui/button/Button.svelte";

  // (50:10) {#if touch}
  function create_if_block$1(ctx) {
  	let div;

  	const block = {
  		c: function create() {
  			div = internal.element("div");
  			internal.attr_dev(div, "class", "mdc-button__touch");
  			internal.add_location(div, file$5, 49, 21, 1522);
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, div, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(div);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_if_block$1.name,
  		type: "if",
  		source: "(50:10) {#if touch}",
  		ctx
  	});

  	return block;
  }

  // (1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-button': true,     'mdc-button--raised': variant === 'raised',     'mdc-button--unelevated': variant === 'unelevated',     'mdc-button--outlined': variant === 'outlined',     'smui-button--color-secondary': color === 'secondary',     'mdc-button--touch': touch,     'mdc-card__action': context === 'card:action',     'mdc-card__action--button': context === 'card:action',     'mdc-dialog__button': context === 'dialog:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__action': context === 'snackbar:actions',     'mdc-banner__secondary-action': context === 'banner' && secondary,     'mdc-banner__primary-action': context === 'banner' && !secondary,     'mdc-tooltip__action': context === 'tooltip:rich-actions',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {...actionProp}   {...defaultProp}   {...secondaryProp}   {href}   on:click={handleClick}   {...$$restProps}   >
  function create_default_slot$1(ctx) {
  	let div;
  	let t;
  	let if_block_anchor;
  	let current;
  	const default_slot_template = /*$$slots*/ ctx[27].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[29], null);
  	let if_block = /*touch*/ ctx[6] && create_if_block$1(ctx);

  	const block = {
  		c: function create() {
  			div = internal.element("div");
  			t = internal.space();
  			if (default_slot) default_slot.c();
  			if (if_block) if_block.c();
  			if_block_anchor = internal.empty();
  			internal.attr_dev(div, "class", "mdc-button__ripple");
  			internal.add_location(div, file$5, 48, 3, 1466);
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, div, anchor);
  			internal.insert_dev(target, t, anchor);

  			if (default_slot) {
  				default_slot.m(target, anchor);
  			}

  			if (if_block) if_block.m(target, anchor);
  			internal.insert_dev(target, if_block_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 536870912) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[29], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[29], dirty, null));
  				}
  			}

  			if (/*touch*/ ctx[6]) {
  				if (if_block) ; else {
  					if_block = create_if_block$1(ctx);
  					if_block.c();
  					if_block.m(if_block_anchor.parentNode, if_block_anchor);
  				}
  			} else if (if_block) {
  				if_block.d(1);
  				if_block = null;
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(div);
  			if (detaching) internal.detach_dev(t);
  			if (default_slot) default_slot.d(detaching);
  			if (if_block) if_block.d(detaching);
  			if (detaching) internal.detach_dev(if_block_anchor);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot$1.name,
  		type: "slot",
  		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-button': true,     'mdc-button--raised': variant === 'raised',     'mdc-button--unelevated': variant === 'unelevated',     'mdc-button--outlined': variant === 'outlined',     'smui-button--color-secondary': color === 'secondary',     'mdc-button--touch': touch,     'mdc-card__action': context === 'card:action',     'mdc-card__action--button': context === 'card:action',     'mdc-dialog__button': context === 'dialog:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__action': context === 'snackbar:actions',     'mdc-banner__secondary-action': context === 'banner' && secondary,     'mdc-banner__primary-action': context === 'banner' && !secondary,     'mdc-tooltip__action': context === 'tooltip:rich-actions',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {...actionProp}   {...defaultProp}   {...secondaryProp}   {href}   on:click={handleClick}   {...$$restProps}   >",
  		ctx
  	});

  	return block;
  }

  function create_fragment$6(ctx) {
  	let switch_instance_anchor;
  	let current;

  	const switch_instance_spread_levels = [
  		{
  			use: [
  				[
  					Ripple,
  					{
  						ripple: /*ripple*/ ctx[3],
  						unbounded: false,
  						color: /*color*/ ctx[4],
  						disabled: !!/*$$restProps*/ ctx[22].disabled,
  						addClass: /*addClass*/ ctx[18],
  						removeClass: /*removeClass*/ ctx[19],
  						addStyle: /*addStyle*/ ctx[20]
  					}
  				],
  				/*forwardEvents*/ ctx[16],
  				.../*use*/ ctx[0]
  			]
  		},
  		{
  			class: classMap({
  				[/*className*/ ctx[1]]: true,
  				"mdc-button": true,
  				"mdc-button--raised": /*variant*/ ctx[5] === "raised",
  				"mdc-button--unelevated": /*variant*/ ctx[5] === "unelevated",
  				"mdc-button--outlined": /*variant*/ ctx[5] === "outlined",
  				"smui-button--color-secondary": /*color*/ ctx[4] === "secondary",
  				"mdc-button--touch": /*touch*/ ctx[6],
  				"mdc-card__action": /*context*/ ctx[17] === "card:action",
  				"mdc-card__action--button": /*context*/ ctx[17] === "card:action",
  				"mdc-dialog__button": /*context*/ ctx[17] === "dialog:action",
  				"mdc-top-app-bar__navigation-icon": /*context*/ ctx[17] === "top-app-bar:navigation",
  				"mdc-top-app-bar__action-item": /*context*/ ctx[17] === "top-app-bar:action",
  				"mdc-snackbar__action": /*context*/ ctx[17] === "snackbar:actions",
  				"mdc-banner__secondary-action": /*context*/ ctx[17] === "banner" && /*secondary*/ ctx[8],
  				"mdc-banner__primary-action": /*context*/ ctx[17] === "banner" && !/*secondary*/ ctx[8],
  				"mdc-tooltip__action": /*context*/ ctx[17] === "tooltip:rich-actions",
  				.../*internalClasses*/ ctx[11]
  			})
  		},
  		{
  			style: Object.entries(/*internalStyles*/ ctx[12]).map(func).concat([/*style*/ ctx[2]]).join(" ")
  		},
  		/*actionProp*/ ctx[13],
  		/*defaultProp*/ ctx[14],
  		/*secondaryProp*/ ctx[15],
  		{ href: /*href*/ ctx[7] },
  		/*$$restProps*/ ctx[22]
  	];

  	var switch_value = /*component*/ ctx[9];

  	function switch_props(ctx) {
  		let switch_instance_props = {
  			$$slots: { default: [create_default_slot$1] },
  			$$scope: { ctx }
  		};

  		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
  			switch_instance_props = internal.assign(switch_instance_props, switch_instance_spread_levels[i]);
  		}

  		return {
  			props: switch_instance_props,
  			$$inline: true
  		};
  	}

  	if (switch_value) {
  		var switch_instance = new switch_value(switch_props(ctx));
  		/*switch_instance_binding*/ ctx[28](switch_instance);
  		switch_instance.$on("click", /*handleClick*/ ctx[21]);
  	}

  	const block = {
  		c: function create() {
  			if (switch_instance) internal.create_component(switch_instance.$$.fragment);
  			switch_instance_anchor = internal.empty();
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			if (switch_instance) {
  				internal.mount_component(switch_instance, target, anchor);
  			}

  			internal.insert_dev(target, switch_instance_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			const switch_instance_changes = (dirty & /*Ripple, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, classMap, className, variant, touch, context, secondary, internalClasses, Object, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/ 6289919)
  			? internal.get_spread_update(switch_instance_spread_levels, [
  					dirty & /*Ripple, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/ 6094873 && {
  						use: [
  							[
  								Ripple,
  								{
  									ripple: /*ripple*/ ctx[3],
  									unbounded: false,
  									color: /*color*/ ctx[4],
  									disabled: !!/*$$restProps*/ ctx[22].disabled,
  									addClass: /*addClass*/ ctx[18],
  									removeClass: /*removeClass*/ ctx[19],
  									addStyle: /*addStyle*/ ctx[20]
  								}
  							],
  							/*forwardEvents*/ ctx[16],
  							.../*use*/ ctx[0]
  						]
  					},
  					dirty & /*classMap, className, variant, color, touch, context, secondary, internalClasses*/ 133490 && {
  						class: classMap({
  							[/*className*/ ctx[1]]: true,
  							"mdc-button": true,
  							"mdc-button--raised": /*variant*/ ctx[5] === "raised",
  							"mdc-button--unelevated": /*variant*/ ctx[5] === "unelevated",
  							"mdc-button--outlined": /*variant*/ ctx[5] === "outlined",
  							"smui-button--color-secondary": /*color*/ ctx[4] === "secondary",
  							"mdc-button--touch": /*touch*/ ctx[6],
  							"mdc-card__action": /*context*/ ctx[17] === "card:action",
  							"mdc-card__action--button": /*context*/ ctx[17] === "card:action",
  							"mdc-dialog__button": /*context*/ ctx[17] === "dialog:action",
  							"mdc-top-app-bar__navigation-icon": /*context*/ ctx[17] === "top-app-bar:navigation",
  							"mdc-top-app-bar__action-item": /*context*/ ctx[17] === "top-app-bar:action",
  							"mdc-snackbar__action": /*context*/ ctx[17] === "snackbar:actions",
  							"mdc-banner__secondary-action": /*context*/ ctx[17] === "banner" && /*secondary*/ ctx[8],
  							"mdc-banner__primary-action": /*context*/ ctx[17] === "banner" && !/*secondary*/ ctx[8],
  							"mdc-tooltip__action": /*context*/ ctx[17] === "tooltip:rich-actions",
  							.../*internalClasses*/ ctx[11]
  						})
  					},
  					dirty & /*Object, internalStyles, style*/ 4100 && {
  						style: Object.entries(/*internalStyles*/ ctx[12]).map(func).concat([/*style*/ ctx[2]]).join(" ")
  					},
  					dirty & /*actionProp*/ 8192 && internal.get_spread_object(/*actionProp*/ ctx[13]),
  					dirty & /*defaultProp*/ 16384 && internal.get_spread_object(/*defaultProp*/ ctx[14]),
  					dirty & /*secondaryProp*/ 32768 && internal.get_spread_object(/*secondaryProp*/ ctx[15]),
  					dirty & /*href*/ 128 && { href: /*href*/ ctx[7] },
  					dirty & /*$$restProps*/ 4194304 && internal.get_spread_object(/*$$restProps*/ ctx[22])
  				])
  			: {};

  			if (dirty & /*$$scope, touch*/ 536870976) {
  				switch_instance_changes.$$scope = { dirty, ctx };
  			}

  			if (switch_value !== (switch_value = /*component*/ ctx[9])) {
  				if (switch_instance) {
  					internal.group_outros();
  					const old_component = switch_instance;

  					internal.transition_out(old_component.$$.fragment, 1, 0, () => {
  						internal.destroy_component(old_component, 1);
  					});

  					internal.check_outros();
  				}

  				if (switch_value) {
  					switch_instance = new switch_value(switch_props(ctx));
  					/*switch_instance_binding*/ ctx[28](switch_instance);
  					switch_instance.$on("click", /*handleClick*/ ctx[21]);
  					internal.create_component(switch_instance.$$.fragment);
  					internal.transition_in(switch_instance.$$.fragment, 1);
  					internal.mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
  				} else {
  					switch_instance = null;
  				}
  			} else if (switch_value) {
  				switch_instance.$set(switch_instance_changes);
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			if (switch_instance) internal.transition_in(switch_instance.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			if (switch_instance) internal.transition_out(switch_instance.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			/*switch_instance_binding*/ ctx[28](null);
  			if (detaching) internal.detach_dev(switch_instance_anchor);
  			if (switch_instance) internal.destroy_component(switch_instance, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$6.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  const func = ([name, value]) => `${name}: ${value};`;

  function instance$5($$self, $$props, $$invalidate) {
  	const omit_props_names = [
  		"use","class","style","ripple","color","variant","touch","href","action","default","secondary","component","getElement"
  	];

  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let { style = "" } = $$props;
  	let { ripple = true } = $$props;
  	let { color = "primary" } = $$props;
  	let { variant = "text" } = $$props;
  	let { touch = false } = $$props;
  	let { href = null } = $$props;
  	let { action = "close" } = $$props;
  	let { default: defaultAction = false } = $$props;
  	let { secondary = false } = $$props;
  	let element;
  	let internalClasses = {};
  	let internalStyles = {};
  	let context = svelte.getContext("SMUI:button:context");
  	let { component = href == null ? Button : A } = $$props;
  	svelte.setContext("SMUI:label:context", "button");
  	svelte.setContext("SMUI:icon:context", "button");

  	function addClass(className) {
  		if (!internalClasses[className]) {
  			$$invalidate(11, internalClasses[className] = true, internalClasses);
  		}
  	}

  	function removeClass(className) {
  		if (!(className in internalClasses) || internalClasses[className]) {
  			$$invalidate(11, internalClasses[className] = false, internalClasses);
  		}
  	}

  	function addStyle(name, value) {
  		if (internalStyles[name] != value) {
  			if (value === "" || value == null) {
  				delete internalStyles[name];
  				$$invalidate(12, internalStyles);
  			} else {
  				$$invalidate(12, internalStyles[name] = value, internalStyles);
  			}
  		}
  	}

  	function handleClick() {
  		if (context === "banner") {
  			dispatch(getElement(), secondary
  			? "SMUI:banner:button:secondaryActionClick"
  			: "SMUI:banner:button:primaryActionClick");
  		}
  	}

  	function getElement() {
  		return element.getElement();
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Button", $$slots, ['default']);

  	function switch_instance_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(10, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$invalidate(26, $$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props)));
  		$$invalidate(22, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
  		if ("style" in $$new_props) $$invalidate(2, style = $$new_props.style);
  		if ("ripple" in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
  		if ("color" in $$new_props) $$invalidate(4, color = $$new_props.color);
  		if ("variant" in $$new_props) $$invalidate(5, variant = $$new_props.variant);
  		if ("touch" in $$new_props) $$invalidate(6, touch = $$new_props.touch);
  		if ("href" in $$new_props) $$invalidate(7, href = $$new_props.href);
  		if ("action" in $$new_props) $$invalidate(23, action = $$new_props.action);
  		if ("default" in $$new_props) $$invalidate(24, defaultAction = $$new_props.default);
  		if ("secondary" in $$new_props) $$invalidate(8, secondary = $$new_props.secondary);
  		if ("component" in $$new_props) $$invalidate(9, component = $$new_props.component);
  		if ("$$scope" in $$new_props) $$invalidate(29, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		setContext: svelte.setContext,
  		getContext: svelte.getContext,
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		dispatch,
  		Ripple,
  		A,
  		Button,
  		forwardEvents,
  		use,
  		className,
  		style,
  		ripple,
  		color,
  		variant,
  		touch,
  		href,
  		action,
  		defaultAction,
  		secondary,
  		element,
  		internalClasses,
  		internalStyles,
  		context,
  		component,
  		addClass,
  		removeClass,
  		addStyle,
  		handleClick,
  		getElement,
  		actionProp,
  		defaultProp,
  		secondaryProp
  	});

  	$$self.$inject_state = $$new_props => {
  		$$invalidate(26, $$props = internal.assign(internal.assign({}, $$props), $$new_props));
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  		if ("style" in $$props) $$invalidate(2, style = $$new_props.style);
  		if ("ripple" in $$props) $$invalidate(3, ripple = $$new_props.ripple);
  		if ("color" in $$props) $$invalidate(4, color = $$new_props.color);
  		if ("variant" in $$props) $$invalidate(5, variant = $$new_props.variant);
  		if ("touch" in $$props) $$invalidate(6, touch = $$new_props.touch);
  		if ("href" in $$props) $$invalidate(7, href = $$new_props.href);
  		if ("action" in $$props) $$invalidate(23, action = $$new_props.action);
  		if ("defaultAction" in $$props) $$invalidate(24, defaultAction = $$new_props.defaultAction);
  		if ("secondary" in $$props) $$invalidate(8, secondary = $$new_props.secondary);
  		if ("element" in $$props) $$invalidate(10, element = $$new_props.element);
  		if ("internalClasses" in $$props) $$invalidate(11, internalClasses = $$new_props.internalClasses);
  		if ("internalStyles" in $$props) $$invalidate(12, internalStyles = $$new_props.internalStyles);
  		if ("context" in $$props) $$invalidate(17, context = $$new_props.context);
  		if ("component" in $$props) $$invalidate(9, component = $$new_props.component);
  		if ("actionProp" in $$props) $$invalidate(13, actionProp = $$new_props.actionProp);
  		if ("defaultProp" in $$props) $$invalidate(14, defaultProp = $$new_props.defaultProp);
  		if ("secondaryProp" in $$props) $$invalidate(15, secondaryProp = $$new_props.secondaryProp);
  	};

  	let actionProp;
  	let defaultProp;
  	let secondaryProp;

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$self.$$.update = () => {
  		 $$invalidate(13, actionProp = context === "dialog:action" && action != null
  		? { "data-mdc-dialog-action": action }
  		: { action: $$props.action });

  		 $$invalidate(14, defaultProp = context === "dialog:action" && defaultAction
  		? { "data-mdc-dialog-button-default": "" }
  		: { default: $$props.default });

  		 $$invalidate(15, secondaryProp = context === "banner"
  		? {}
  		: { secondary: $$props.secondary });
  	};

  	$$props = internal.exclude_internal_props($$props);

  	return [
  		use,
  		className,
  		style,
  		ripple,
  		color,
  		variant,
  		touch,
  		href,
  		secondary,
  		component,
  		element,
  		internalClasses,
  		internalStyles,
  		actionProp,
  		defaultProp,
  		secondaryProp,
  		forwardEvents,
  		context,
  		addClass,
  		removeClass,
  		addStyle,
  		handleClick,
  		$$restProps,
  		action,
  		defaultAction,
  		getElement,
  		$$props,
  		$$slots,
  		switch_instance_binding,
  		$$scope
  	];
  }

  class Button_1 extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(this, options, instance$5, create_fragment$6, internal.safe_not_equal, {
  			use: 0,
  			class: 1,
  			style: 2,
  			ripple: 3,
  			color: 4,
  			variant: 5,
  			touch: 6,
  			href: 7,
  			action: 23,
  			default: 24,
  			secondary: 8,
  			component: 9,
  			getElement: 25
  		});

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Button_1",
  			options,
  			id: create_fragment$6.name
  		});
  	}

  	get use() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get style() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set style(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get ripple() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set ripple(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get color() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set color(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get variant() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set variant(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get touch() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set touch(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get href() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set href(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get action() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set action(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get default() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set default(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get secondary() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set secondary(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get component() {
  		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set component(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[25];
  	}

  	set getElement(value) {
  		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules/@smui/common/Span.svelte generated by Svelte v3.21.0 */
  const file$6 = "node_modules/@smui/common/Span.svelte";

  function create_fragment$7(ctx) {
  	let span;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[6].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
  	let span_levels = [/*$$restProps*/ ctx[3]];
  	let span_data = {};

  	for (let i = 0; i < span_levels.length; i += 1) {
  		span_data = internal.assign(span_data, span_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			span = internal.element("span");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(span, span_data);
  			internal.add_location(span, file$6, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, span, anchor);

  			if (default_slot) {
  				default_slot.m(span, null);
  			}

  			/*span_binding*/ ctx[7](span);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, span, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, span))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 32) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
  				}
  			}

  			internal.set_attributes(span, internal.get_spread_update(span_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(span);
  			if (default_slot) default_slot.d(detaching);
  			/*span_binding*/ ctx[7](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$7.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$6($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { use = [] } = $$props;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let element = null;

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Span", $$slots, ['default']);

  	function span_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(1, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(3, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		useActions,
  		use,
  		forwardEvents,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		span_binding
  	];
  }

  class Span extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$6, create_fragment$7, internal.safe_not_equal, { use: 0, getElement: 4 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Span",
  			options,
  			id: create_fragment$7.name
  		});
  	}

  	get use() {
  		throw new Error("<Span>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Span>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[4];
  	}

  	set getElement(value) {
  		throw new Error("<Span>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules/@smui/common/CommonLabel.svelte generated by Svelte v3.21.0 */

  // (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__label': context === 'button',     'mdc-fab__label': context === 'fab',     'mdc-tab__text-label': context === 'tab',     'mdc-image-list__label': context === 'image-list',     'mdc-snackbar__label': context === 'snackbar',     'mdc-banner__text': context === 'banner',     'mdc-segmented-button__label': context === 'segmented-button',     'mdc-data-table__pagination-rows-per-page-label':       context === 'data-table:pagination',     'mdc-data-table__header-cell-label':       context === 'data-table:sortable-header-cell',   })}   {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}   {tabindex}   {...$$restProps}>
  function create_default_slot$2(ctx) {
  	let current;
  	const default_slot_template = /*$$slots*/ ctx[9].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

  	const block = {
  		c: function create() {
  			if (default_slot) default_slot.c();
  		},
  		m: function mount(target, anchor) {
  			if (default_slot) {
  				default_slot.m(target, anchor);
  			}

  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 2048) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[11], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[11], dirty, null));
  				}
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (default_slot) default_slot.d(detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot$2.name,
  		type: "slot",
  		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__label': context === 'button',     'mdc-fab__label': context === 'fab',     'mdc-tab__text-label': context === 'tab',     'mdc-image-list__label': context === 'image-list',     'mdc-snackbar__label': context === 'snackbar',     'mdc-banner__text': context === 'banner',     'mdc-segmented-button__label': context === 'segmented-button',     'mdc-data-table__pagination-rows-per-page-label':       context === 'data-table:pagination',     'mdc-data-table__header-cell-label':       context === 'data-table:sortable-header-cell',   })}   {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}   {tabindex}   {...$$restProps}>",
  		ctx
  	});

  	return block;
  }

  function create_fragment$8(ctx) {
  	let switch_instance_anchor;
  	let current;

  	const switch_instance_spread_levels = [
  		{
  			use: [/*forwardEvents*/ ctx[4], .../*use*/ ctx[0]]
  		},
  		{
  			class: classMap({
  				[/*className*/ ctx[1]]: true,
  				"mdc-button__label": /*context*/ ctx[5] === "button",
  				"mdc-fab__label": /*context*/ ctx[5] === "fab",
  				"mdc-tab__text-label": /*context*/ ctx[5] === "tab",
  				"mdc-image-list__label": /*context*/ ctx[5] === "image-list",
  				"mdc-snackbar__label": /*context*/ ctx[5] === "snackbar",
  				"mdc-banner__text": /*context*/ ctx[5] === "banner",
  				"mdc-segmented-button__label": /*context*/ ctx[5] === "segmented-button",
  				"mdc-data-table__pagination-rows-per-page-label": /*context*/ ctx[5] === "data-table:pagination",
  				"mdc-data-table__header-cell-label": /*context*/ ctx[5] === "data-table:sortable-header-cell"
  			})
  		},
  		/*context*/ ctx[5] === "snackbar"
  		? { "aria-atomic": "false" }
  		: {},
  		{ tabindex: /*tabindex*/ ctx[6] },
  		/*$$restProps*/ ctx[7]
  	];

  	var switch_value = /*component*/ ctx[2];

  	function switch_props(ctx) {
  		let switch_instance_props = {
  			$$slots: { default: [create_default_slot$2] },
  			$$scope: { ctx }
  		};

  		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
  			switch_instance_props = internal.assign(switch_instance_props, switch_instance_spread_levels[i]);
  		}

  		return {
  			props: switch_instance_props,
  			$$inline: true
  		};
  	}

  	if (switch_value) {
  		var switch_instance = new switch_value(switch_props(ctx));
  		/*switch_instance_binding*/ ctx[10](switch_instance);
  	}

  	const block = {
  		c: function create() {
  			if (switch_instance) internal.create_component(switch_instance.$$.fragment);
  			switch_instance_anchor = internal.empty();
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			if (switch_instance) {
  				internal.mount_component(switch_instance, target, anchor);
  			}

  			internal.insert_dev(target, switch_instance_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, context, tabindex, $$restProps*/ 243)
  			? internal.get_spread_update(switch_instance_spread_levels, [
  					dirty & /*forwardEvents, use*/ 17 && {
  						use: [/*forwardEvents*/ ctx[4], .../*use*/ ctx[0]]
  					},
  					dirty & /*classMap, className, context*/ 34 && {
  						class: classMap({
  							[/*className*/ ctx[1]]: true,
  							"mdc-button__label": /*context*/ ctx[5] === "button",
  							"mdc-fab__label": /*context*/ ctx[5] === "fab",
  							"mdc-tab__text-label": /*context*/ ctx[5] === "tab",
  							"mdc-image-list__label": /*context*/ ctx[5] === "image-list",
  							"mdc-snackbar__label": /*context*/ ctx[5] === "snackbar",
  							"mdc-banner__text": /*context*/ ctx[5] === "banner",
  							"mdc-segmented-button__label": /*context*/ ctx[5] === "segmented-button",
  							"mdc-data-table__pagination-rows-per-page-label": /*context*/ ctx[5] === "data-table:pagination",
  							"mdc-data-table__header-cell-label": /*context*/ ctx[5] === "data-table:sortable-header-cell"
  						})
  					},
  					dirty & /*context*/ 32 && internal.get_spread_object(/*context*/ ctx[5] === "snackbar"
  					? { "aria-atomic": "false" }
  					: {}),
  					dirty & /*tabindex*/ 64 && { tabindex: /*tabindex*/ ctx[6] },
  					dirty & /*$$restProps*/ 128 && internal.get_spread_object(/*$$restProps*/ ctx[7])
  				])
  			: {};

  			if (dirty & /*$$scope*/ 2048) {
  				switch_instance_changes.$$scope = { dirty, ctx };
  			}

  			if (switch_value !== (switch_value = /*component*/ ctx[2])) {
  				if (switch_instance) {
  					internal.group_outros();
  					const old_component = switch_instance;

  					internal.transition_out(old_component.$$.fragment, 1, 0, () => {
  						internal.destroy_component(old_component, 1);
  					});

  					internal.check_outros();
  				}

  				if (switch_value) {
  					switch_instance = new switch_value(switch_props(ctx));
  					/*switch_instance_binding*/ ctx[10](switch_instance);
  					internal.create_component(switch_instance.$$.fragment);
  					internal.transition_in(switch_instance.$$.fragment, 1);
  					internal.mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
  				} else {
  					switch_instance = null;
  				}
  			} else if (switch_value) {
  				switch_instance.$set(switch_instance_changes);
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			if (switch_instance) internal.transition_in(switch_instance.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			if (switch_instance) internal.transition_out(switch_instance.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			/*switch_instance_binding*/ ctx[10](null);
  			if (detaching) internal.detach_dev(switch_instance_anchor);
  			if (switch_instance) internal.destroy_component(switch_instance, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$8.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$7($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","class","component","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let element;
  	let { component = Span } = $$props;
  	const context = svelte.getContext("SMUI:label:context");
  	const tabindex = svelte.getContext("SMUI:label:tabindex");

  	function getElement() {
  		return element.getElement();
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("CommonLabel", $$slots, ['default']);

  	function switch_instance_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(3, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(7, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
  		if ("component" in $$new_props) $$invalidate(2, component = $$new_props.component);
  		if ("$$scope" in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		getContext: svelte.getContext,
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		useActions,
  		Span,
  		forwardEvents,
  		use,
  		className,
  		element,
  		component,
  		context,
  		tabindex,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  		if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
  		if ("component" in $$props) $$invalidate(2, component = $$new_props.component);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		className,
  		component,
  		element,
  		forwardEvents,
  		context,
  		tabindex,
  		$$restProps,
  		getElement,
  		$$slots,
  		switch_instance_binding,
  		$$scope
  	];
  }

  class CommonLabel extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(this, options, instance$7, create_fragment$8, internal.safe_not_equal, {
  			use: 0,
  			class: 1,
  			component: 2,
  			getElement: 8
  		});

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "CommonLabel",
  			options,
  			id: create_fragment$8.name
  		});
  	}

  	get use() {
  		throw new Error("<CommonLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<CommonLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<CommonLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<CommonLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get component() {
  		throw new Error("<CommonLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set component(value) {
  		throw new Error("<CommonLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[8];
  	}

  	set getElement(value) {
  		throw new Error("<CommonLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics$2 = function(d, b) {
      extendStatics$2 = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics$2(d, b);
  };

  function __extends$2(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics$2(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign$2 = function() {
      __assign$2 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign$2.apply(this, arguments);
  };

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses$2 = {
      LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
      LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
  };

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCLineRippleFoundation = /** @class */ (function (_super) {
      __extends$2(MDCLineRippleFoundation, _super);
      function MDCLineRippleFoundation(adapter) {
          var _this = _super.call(this, __assign$2(__assign$2({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
          _this.transitionEndHandler_ = function (evt) { return _this.handleTransitionEnd(evt); };
          return _this;
      }
      Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
          get: function () {
              return cssClasses$2;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
          /**
           * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
           */
          get: function () {
              // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
              return {
                  addClass: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  hasClass: function () { return false; },
                  setStyle: function () { return undefined; },
                  registerEventHandler: function () { return undefined; },
                  deregisterEventHandler: function () { return undefined; },
              };
              // tslint:enable:object-literal-sort-keys
          },
          enumerable: false,
          configurable: true
      });
      MDCLineRippleFoundation.prototype.init = function () {
          this.adapter.registerEventHandler('transitionend', this.transitionEndHandler_);
      };
      MDCLineRippleFoundation.prototype.destroy = function () {
          this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler_);
      };
      MDCLineRippleFoundation.prototype.activate = function () {
          this.adapter.removeClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
          this.adapter.addClass(cssClasses$2.LINE_RIPPLE_ACTIVE);
      };
      MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
          this.adapter.setStyle('transform-origin', xCoordinate + "px center");
      };
      MDCLineRippleFoundation.prototype.deactivate = function () {
          this.adapter.addClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
      };
      MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
          // Wait for the line ripple to be either transparent or opaque
          // before emitting the animation end event
          var isDeactivating = this.adapter.hasClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
          if (evt.propertyName === 'opacity') {
              if (isDeactivating) {
                  this.adapter.removeClass(cssClasses$2.LINE_RIPPLE_ACTIVE);
                  this.adapter.removeClass(cssClasses$2.LINE_RIPPLE_DEACTIVATING);
              }
          }
      };
      return MDCLineRippleFoundation;
  }(MDCFoundation));

  /* node_modules/@smui/line-ripple/LineRipple.svelte generated by Svelte v3.21.0 */

  const file$7 = "node_modules/@smui/line-ripple/LineRipple.svelte";

  function create_fragment$9(ctx) {
  	let div;
  	let useActions_action;
  	let forwardEvents_action;
  	let dispose;

  	let div_levels = [
  		{
  			class: classMap({
  				[/*className*/ ctx[1]]: true,
  				"mdc-line-ripple": true,
  				"mdc-line-ripple--active": /*active*/ ctx[3],
  				.../*internalClasses*/ ctx[5]
  			})
  		},
  		{
  			style: Object.entries(/*internalStyles*/ ctx[6]).map(func$1).concat([/*style*/ ctx[2]]).join(" ")
  		},
  		/*$$restProps*/ ctx[8]
  	];

  	let div_data = {};

  	for (let i = 0; i < div_levels.length; i += 1) {
  		div_data = internal.assign(div_data, div_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			div = internal.element("div");
  			internal.set_attributes(div, div_data);
  			internal.add_location(div, file$7, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, div, anchor);
  			/*div_binding*/ ctx[18](div);
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[7].call(null, div))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			internal.set_attributes(div, internal.get_spread_update(div_levels, [
  				dirty & /*classMap, className, active, internalClasses*/ 42 && {
  					class: classMap({
  						[/*className*/ ctx[1]]: true,
  						"mdc-line-ripple": true,
  						"mdc-line-ripple--active": /*active*/ ctx[3],
  						.../*internalClasses*/ ctx[5]
  					})
  				},
  				dirty & /*Object, internalStyles, style*/ 68 && {
  					style: Object.entries(/*internalStyles*/ ctx[6]).map(func$1).concat([/*style*/ ctx[2]]).join(" ")
  				},
  				dirty & /*$$restProps*/ 256 && /*$$restProps*/ ctx[8]
  			]));

  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: internal.noop,
  		o: internal.noop,
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(div);
  			/*div_binding*/ ctx[18](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$9.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  const func$1 = ([name, value]) => `${name}: ${value};`;

  function instance_1$1($$self, $$props, $$invalidate) {
  	const omit_props_names = [
  		"use","class","style","active","activate","deactivate","setRippleCenter","getElement"
  	];

  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let { style = "" } = $$props;
  	let { active = false } = $$props;
  	let element;
  	let instance;
  	let internalClasses = {};
  	let internalStyles = {};

  	svelte.onMount(() => {
  		instance = new MDCLineRippleFoundation({
  				addClass,
  				removeClass,
  				hasClass,
  				setStyle: addStyle,
  				registerEventHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
  				deregisterEventHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler)
  			});

  		instance.init();

  		return () => {
  			instance.destroy();
  		};
  	});

  	function hasClass(className) {
  		return className in internalClasses
  		? internalClasses[className]
  		: getElement().classList.contains(className);
  	}

  	function addClass(className) {
  		if (!internalClasses[className]) {
  			$$invalidate(5, internalClasses[className] = true, internalClasses);
  		}
  	}

  	function removeClass(className) {
  		if (!(className in internalClasses) || internalClasses[className]) {
  			$$invalidate(5, internalClasses[className] = false, internalClasses);
  		}
  	}

  	function addStyle(name, value) {
  		if (internalStyles[name] != value) {
  			if (value === "" || value == null) {
  				delete internalStyles[name];
  				$$invalidate(6, internalStyles);
  			} else {
  				$$invalidate(6, internalStyles[name] = value, internalStyles);
  			}
  		}
  	}

  	function activate() {
  		instance.activate();
  	}

  	function deactivate() {
  		instance.deactivate();
  	}

  	function setRippleCenter(xCoordinate) {
  		instance.setRippleCenter(xCoordinate);
  	}

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("LineRipple", $$slots, []);

  	function div_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(4, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(8, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
  		if ("style" in $$new_props) $$invalidate(2, style = $$new_props.style);
  		if ("active" in $$new_props) $$invalidate(3, active = $$new_props.active);
  	};

  	$$self.$capture_state = () => ({
  		MDCLineRippleFoundation,
  		onMount: svelte.onMount,
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		useActions,
  		forwardEvents,
  		use,
  		className,
  		style,
  		active,
  		element,
  		instance,
  		internalClasses,
  		internalStyles,
  		hasClass,
  		addClass,
  		removeClass,
  		addStyle,
  		activate,
  		deactivate,
  		setRippleCenter,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  		if ("style" in $$props) $$invalidate(2, style = $$new_props.style);
  		if ("active" in $$props) $$invalidate(3, active = $$new_props.active);
  		if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
  		if ("instance" in $$props) instance = $$new_props.instance;
  		if ("internalClasses" in $$props) $$invalidate(5, internalClasses = $$new_props.internalClasses);
  		if ("internalStyles" in $$props) $$invalidate(6, internalStyles = $$new_props.internalStyles);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		className,
  		style,
  		active,
  		element,
  		internalClasses,
  		internalStyles,
  		forwardEvents,
  		$$restProps,
  		activate,
  		deactivate,
  		setRippleCenter,
  		getElement,
  		instance,
  		hasClass,
  		addClass,
  		removeClass,
  		addStyle,
  		div_binding
  	];
  }

  class LineRipple extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(this, options, instance_1$1, create_fragment$9, internal.safe_not_equal, {
  			use: 0,
  			class: 1,
  			style: 2,
  			active: 3,
  			activate: 9,
  			deactivate: 10,
  			setRippleCenter: 11,
  			getElement: 12
  		});

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "LineRipple",
  			options,
  			id: create_fragment$9.name
  		});
  	}

  	get use() {
  		throw new Error("<LineRipple>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<LineRipple>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get style() {
  		throw new Error("<LineRipple>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set style(value) {
  		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get active() {
  		throw new Error("<LineRipple>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set active(value) {
  		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get activate() {
  		return this.$$.ctx[9];
  	}

  	set activate(value) {
  		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get deactivate() {
  		return this.$$.ctx[10];
  	}

  	set deactivate(value) {
  		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get setRippleCenter() {
  		return this.$$.ctx[11];
  	}

  	set setRippleCenter(value) {
  		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[12];
  	}

  	set getElement(value) {
  		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* src/Panels/Modal.svelte generated by Svelte v3.21.0 */
  const file$8 = "src/Panels/Modal.svelte";

  // (15:0) {#if show}
  function create_if_block$2(ctx) {
  	let div2;
  	let div1;
  	let div0;
  	let t0;
  	let t1;
  	let div1_transition;
  	let current;
  	let dispose;

  	const title = new Title({
  			props: {
  				id: "dialog-title",
  				$$slots: { default: [create_default_slot_1] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const lineripple = new LineRipple({ $$inline: true });

  	const content = new Content({
  			props: {
  				id: "dialog-content",
  				$$slots: { default: [create_default_slot$3] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			div2 = internal.element("div");
  			div1 = internal.element("div");
  			div0 = internal.element("div");
  			internal.create_component(title.$$.fragment);
  			t0 = internal.space();
  			internal.create_component(lineripple.$$.fragment);
  			t1 = internal.space();
  			internal.create_component(content.$$.fragment);
  			internal.attr_dev(div0, "class", "modal-container");
  			internal.add_location(div0, file$8, 17, 0, 447);
  			internal.attr_dev(div1, "class", "modal-overlay");
  			internal.attr_dev(div1, "data-close", "");
  			internal.add_location(div1, file$8, 16, 0, 349);
  			internal.add_location(div2, file$8, 15, 0, 343);
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, div2, anchor);
  			internal.append_dev(div2, div1);
  			internal.append_dev(div1, div0);
  			internal.mount_component(title, div0, null);
  			internal.append_dev(div0, t0);
  			internal.mount_component(lineripple, div0, null);
  			internal.append_dev(div0, t1);
  			internal.mount_component(content, div0, null);
  			current = true;
  			if (remount) dispose();
  			dispose = internal.listen_dev(div1, "click", /*overlay_click*/ ctx[1], false, false, false);
  		},
  		p: function update(ctx, dirty) {
  			const title_changes = {};

  			if (dirty & /*$$scope*/ 4) {
  				title_changes.$$scope = { dirty, ctx };
  			}

  			title.$set(title_changes);
  			const content_changes = {};

  			if (dirty & /*$$scope*/ 4) {
  				content_changes.$$scope = { dirty, ctx };
  			}

  			content.$set(content_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(title.$$.fragment, local);
  			internal.transition_in(lineripple.$$.fragment, local);
  			internal.transition_in(content.$$.fragment, local);

  			internal.add_render_callback(() => {
  				if (!div1_transition) div1_transition = internal.create_bidirectional_transition(div1, transition.fade, { duration: 150 }, true);
  				div1_transition.run(1);
  			});

  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(title.$$.fragment, local);
  			internal.transition_out(lineripple.$$.fragment, local);
  			internal.transition_out(content.$$.fragment, local);
  			if (!div1_transition) div1_transition = internal.create_bidirectional_transition(div1, transition.fade, { duration: 150 }, false);
  			div1_transition.run(0);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(div2);
  			internal.destroy_component(title);
  			internal.destroy_component(lineripple);
  			internal.destroy_component(content);
  			if (detaching && div1_transition) div1_transition.end();
  			dispose();
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_if_block$2.name,
  		type: "if",
  		source: "(15:0) {#if show}",
  		ctx
  	});

  	return block;
  }

  // (19:2) <Title id="dialog-title">
  function create_default_slot_1(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("Modal");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_1.name,
  		type: "slot",
  		source: "(19:2) <Title id=\\\"dialog-title\\\">",
  		ctx
  	});

  	return block;
  }

  // (21:2) <Content id="dialog-content">
  function create_default_slot$3(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("Text modal");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot$3.name,
  		type: "slot",
  		source: "(21:2) <Content id=\\\"dialog-content\\\">",
  		ctx
  	});

  	return block;
  }

  function create_fragment$a(ctx) {
  	let if_block_anchor;
  	let current;
  	let if_block = /*show*/ ctx[0] && create_if_block$2(ctx);

  	const block = {
  		c: function create() {
  			if (if_block) if_block.c();
  			if_block_anchor = internal.empty();
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			if (if_block) if_block.m(target, anchor);
  			internal.insert_dev(target, if_block_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			if (/*show*/ ctx[0]) {
  				if (if_block) {
  					if_block.p(ctx, dirty);

  					if (dirty & /*show*/ 1) {
  						internal.transition_in(if_block, 1);
  					}
  				} else {
  					if_block = create_if_block$2(ctx);
  					if_block.c();
  					internal.transition_in(if_block, 1);
  					if_block.m(if_block_anchor.parentNode, if_block_anchor);
  				}
  			} else if (if_block) {
  				internal.group_outros();

  				internal.transition_out(if_block, 1, 1, () => {
  					if_block = null;
  				});

  				internal.check_outros();
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(if_block);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(if_block);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (if_block) if_block.d(detaching);
  			if (detaching) internal.detach_dev(if_block_anchor);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$a.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$8($$self, $$props, $$invalidate) {
  	function overlay_click(e) {
  		if ("close" in e.target.dataset) $$invalidate(0, show = false);
  	}

  	let { show = false } = $$props;
  	const writable_props = ["show"];

  	Object.keys($$props).forEach(key => {
  		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Modal> was created with unknown prop '${key}'`);
  	});

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Modal", $$slots, []);

  	$$self.$set = $$props => {
  		if ("show" in $$props) $$invalidate(0, show = $$props.show);
  	};

  	$$self.$capture_state = () => ({
  		Dialog,
  		Title,
  		Content,
  		Actions,
  		Button: Button_1,
  		Label: CommonLabel,
  		fade: transition.fade,
  		LineRipple,
  		overlay_click,
  		show
  	});

  	$$self.$inject_state = $$props => {
  		if ("show" in $$props) $$invalidate(0, show = $$props.show);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [show, overlay_click];
  }

  class Modal extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$8, create_fragment$a, internal.safe_not_equal, { show: 0 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Modal",
  			options,
  			id: create_fragment$a.name
  		});
  	}

  	get show() {
  		throw new Error("<Modal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set show(value) {
  		throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics$3 = function(d, b) {
      extendStatics$3 = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics$3(d, b);
  };

  function __extends$3(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics$3(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign$3 = function() {
      __assign$3 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign$3.apply(this, arguments);
  };

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses$3 = {
      FIXED_CLASS: 'mdc-top-app-bar--fixed',
      FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
      SHORT_CLASS: 'mdc-top-app-bar--short',
      SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
      SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
  };
  var numbers$2 = {
      DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
      MAX_TOP_APP_BAR_HEIGHT: 128,
  };
  var strings$2 = {
      ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
      NAVIGATION_EVENT: 'MDCTopAppBar:nav',
      NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
      ROOT_SELECTOR: '.mdc-top-app-bar',
      TITLE_SELECTOR: '.mdc-top-app-bar__title',
  };

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCTopAppBarBaseFoundation = /** @class */ (function (_super) {
      __extends$3(MDCTopAppBarBaseFoundation, _super);
      /* istanbul ignore next: optional argument is not a branch statement */
      function MDCTopAppBarBaseFoundation(adapter) {
          return _super.call(this, __assign$3(__assign$3({}, MDCTopAppBarBaseFoundation.defaultAdapter), adapter)) || this;
      }
      Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
          get: function () {
              return strings$2;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
          get: function () {
              return cssClasses$3;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
          get: function () {
              return numbers$2;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
          /**
           * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
           */
          get: function () {
              // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
              return {
                  addClass: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  hasClass: function () { return false; },
                  setStyle: function () { return undefined; },
                  getTopAppBarHeight: function () { return 0; },
                  notifyNavigationIconClicked: function () { return undefined; },
                  getViewportScrollY: function () { return 0; },
                  getTotalActionItems: function () { return 0; },
              };
              // tslint:enable:object-literal-sort-keys
          },
          enumerable: false,
          configurable: true
      });
      /** Other variants of TopAppBar foundation overrides this method */
      MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () { }; // tslint:disable-line:no-empty
      /** Other variants of TopAppBar foundation overrides this method */
      MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () { }; // tslint:disable-line:no-empty
      MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
          this.adapter.notifyNavigationIconClicked();
      };
      return MDCTopAppBarBaseFoundation;
  }(MDCFoundation));

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var INITIAL_VALUE = 0;
  var MDCTopAppBarFoundation = /** @class */ (function (_super) {
      __extends$3(MDCTopAppBarFoundation, _super);
      /* istanbul ignore next: optional argument is not a branch statement */
      function MDCTopAppBarFoundation(adapter) {
          var _this = _super.call(this, adapter) || this;
          /**
           * Indicates if the top app bar was docked in the previous scroll handler iteration.
           */
          _this.wasDocked_ = true;
          /**
           * Indicates if the top app bar is docked in the fully shown position.
           */
          _this.isDockedShowing_ = true;
          /**
           * Variable for current scroll position of the top app bar
           */
          _this.currentAppBarOffsetTop_ = 0;
          /**
           * Used to prevent the top app bar from being scrolled out of view during resize events
           */
          _this.isCurrentlyBeingResized_ = false;
          /**
           * The timeout that's used to throttle the resize events
           */
          _this.resizeThrottleId_ = INITIAL_VALUE;
          /**
           * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
           */
          _this.resizeDebounceId_ = INITIAL_VALUE;
          _this.lastScrollPosition_ = _this.adapter.getViewportScrollY();
          _this.topAppBarHeight_ = _this.adapter.getTopAppBarHeight();
          return _this;
      }
      MDCTopAppBarFoundation.prototype.destroy = function () {
          _super.prototype.destroy.call(this);
          this.adapter.setStyle('top', '');
      };
      /**
       * Scroll handler for the default scroll behavior of the top app bar.
       * @override
       */
      MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
          var currentScrollPosition = Math.max(this.adapter.getViewportScrollY(), 0);
          var diff = currentScrollPosition - this.lastScrollPosition_;
          this.lastScrollPosition_ = currentScrollPosition;
          // If the window is being resized the lastScrollPosition_ needs to be updated but the
          // current scroll of the top app bar should stay in the same position.
          if (!this.isCurrentlyBeingResized_) {
              this.currentAppBarOffsetTop_ -= diff;
              if (this.currentAppBarOffsetTop_ > 0) {
                  this.currentAppBarOffsetTop_ = 0;
              }
              else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
                  this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
              }
              this.moveTopAppBar_();
          }
      };
      /**
       * Top app bar resize handler that throttle/debounce functions that execute updates.
       * @override
       */
      MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
          var _this = this;
          // Throttle resize events 10 p/s
          if (!this.resizeThrottleId_) {
              this.resizeThrottleId_ = setTimeout(function () {
                  _this.resizeThrottleId_ = INITIAL_VALUE;
                  _this.throttledResizeHandler_();
              }, numbers$2.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
          }
          this.isCurrentlyBeingResized_ = true;
          if (this.resizeDebounceId_) {
              clearTimeout(this.resizeDebounceId_);
          }
          this.resizeDebounceId_ = setTimeout(function () {
              _this.handleTargetScroll();
              _this.isCurrentlyBeingResized_ = false;
              _this.resizeDebounceId_ = INITIAL_VALUE;
          }, numbers$2.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
      };
      /**
       * Function to determine if the DOM needs to update.
       */
      MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
          var offscreenBoundaryTop = -this.topAppBarHeight_;
          var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
          var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
          var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
          // If it's partially showing, it can't be docked.
          if (partiallyShowing) {
              this.wasDocked_ = false;
          }
          else {
              // Not previously docked and not partially showing, it's now docked.
              if (!this.wasDocked_) {
                  this.wasDocked_ = true;
                  return true;
              }
              else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
                  this.isDockedShowing_ = hasAnyPixelsOnscreen;
                  return true;
              }
          }
          return partiallyShowing;
      };
      /**
       * Function to move the top app bar if needed.
       */
      MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
          if (this.checkForUpdate_()) {
              // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
              // so the top app bar doesn't show if the window resizes and the new height > the old height.
              var offset = this.currentAppBarOffsetTop_;
              if (Math.abs(offset) >= this.topAppBarHeight_) {
                  offset = -numbers$2.MAX_TOP_APP_BAR_HEIGHT;
              }
              this.adapter.setStyle('top', offset + 'px');
          }
      };
      /**
       * Throttled function that updates the top app bar scrolled values if the
       * top app bar height changes.
       */
      MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
          var currentHeight = this.adapter.getTopAppBarHeight();
          if (this.topAppBarHeight_ !== currentHeight) {
              this.wasDocked_ = false;
              // Since the top app bar has a different height depending on the screen width, this
              // will ensure that the top app bar remains in the correct location if
              // completely hidden and a resize makes the top app bar a different height.
              this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
              this.topAppBarHeight_ = currentHeight;
          }
          this.handleTargetScroll();
      };
      return MDCTopAppBarFoundation;
  }(MDCTopAppBarBaseFoundation));

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCFixedTopAppBarFoundation = /** @class */ (function (_super) {
      __extends$3(MDCFixedTopAppBarFoundation, _super);
      function MDCFixedTopAppBarFoundation() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          /**
           * State variable for the previous scroll iteration top app bar state
           */
          _this.wasScrolled_ = false;
          return _this;
      }
      /**
       * Scroll handler for applying/removing the modifier class on the fixed top app bar.
       * @override
       */
      MDCFixedTopAppBarFoundation.prototype.handleTargetScroll = function () {
          var currentScroll = this.adapter.getViewportScrollY();
          if (currentScroll <= 0) {
              if (this.wasScrolled_) {
                  this.adapter.removeClass(cssClasses$3.FIXED_SCROLLED_CLASS);
                  this.wasScrolled_ = false;
              }
          }
          else {
              if (!this.wasScrolled_) {
                  this.adapter.addClass(cssClasses$3.FIXED_SCROLLED_CLASS);
                  this.wasScrolled_ = true;
              }
          }
      };
      return MDCFixedTopAppBarFoundation;
  }(MDCTopAppBarFoundation));

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCShortTopAppBarFoundation = /** @class */ (function (_super) {
      __extends$3(MDCShortTopAppBarFoundation, _super);
      /* istanbul ignore next: optional argument is not a branch statement */
      function MDCShortTopAppBarFoundation(adapter) {
          var _this = _super.call(this, adapter) || this;
          _this.isCollapsed_ = false;
          _this.isAlwaysCollapsed_ = false;
          return _this;
      }
      Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
          // Public visibility for backward compatibility.
          get: function () {
              return this.isCollapsed_;
          },
          enumerable: false,
          configurable: true
      });
      MDCShortTopAppBarFoundation.prototype.init = function () {
          _super.prototype.init.call(this);
          if (this.adapter.getTotalActionItems() > 0) {
              this.adapter.addClass(cssClasses$3.SHORT_HAS_ACTION_ITEM_CLASS);
          }
          // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed
          this.setAlwaysCollapsed(this.adapter.hasClass(cssClasses$3.SHORT_COLLAPSED_CLASS));
      };
      /**
       * Set if the short top app bar should always be collapsed.
       *
       * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
       */
      MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function (value) {
          this.isAlwaysCollapsed_ = !!value;
          if (this.isAlwaysCollapsed_) {
              this.collapse_();
          }
          else {
              // let maybeCollapseBar_ determine if the bar should be collapsed
              this.maybeCollapseBar_();
          }
      };
      MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function () {
          return this.isAlwaysCollapsed_;
      };
      /**
       * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
       * @override
       */
      MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function () {
          this.maybeCollapseBar_();
      };
      MDCShortTopAppBarFoundation.prototype.maybeCollapseBar_ = function () {
          if (this.isAlwaysCollapsed_) {
              return;
          }
          var currentScroll = this.adapter.getViewportScrollY();
          if (currentScroll <= 0) {
              if (this.isCollapsed_) {
                  this.uncollapse_();
              }
          }
          else {
              if (!this.isCollapsed_) {
                  this.collapse_();
              }
          }
      };
      MDCShortTopAppBarFoundation.prototype.uncollapse_ = function () {
          this.adapter.removeClass(cssClasses$3.SHORT_COLLAPSED_CLASS);
          this.isCollapsed_ = false;
      };
      MDCShortTopAppBarFoundation.prototype.collapse_ = function () {
          this.adapter.addClass(cssClasses$3.SHORT_COLLAPSED_CLASS);
          this.isCollapsed_ = true;
      };
      return MDCShortTopAppBarFoundation;
  }(MDCTopAppBarBaseFoundation));

  /* node_modules/@smui/top-app-bar/TopAppBar.svelte generated by Svelte v3.21.0 */

  const { window: window_1$1 } = internal.globals;

  const file$9 = "node_modules/@smui/top-app-bar/TopAppBar.svelte";

  function create_fragment$b(ctx) {
  	let header;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[30].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[29], null);

  	let header_levels = [
  		{
  			class: classMap({
  				[/*className*/ ctx[2]]: true,
  				"mdc-top-app-bar": true,
  				"mdc-top-app-bar--short": /*variant*/ ctx[4] === "short",
  				"mdc-top-app-bar--short-collapsed": /*collapsed*/ ctx[0],
  				"mdc-top-app-bar--fixed": /*variant*/ ctx[4] === "fixed",
  				"smui-top-app-bar--static": /*variant*/ ctx[4] === "static",
  				"smui-top-app-bar--color-secondary": /*color*/ ctx[5] === "secondary",
  				"mdc-top-app-bar--prominent": /*prominent*/ ctx[6],
  				"mdc-top-app-bar--dense": /*dense*/ ctx[7],
  				.../*internalClasses*/ ctx[11]
  			})
  		},
  		{
  			style: Object.entries(/*internalStyles*/ ctx[12]).map(func$2).concat([/*style*/ ctx[3]]).join(" ")
  		},
  		/*$$restProps*/ ctx[15]
  	];

  	let header_data = {};

  	for (let i = 0; i < header_levels.length; i += 1) {
  		header_data = internal.assign(header_data, header_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			header = internal.element("header");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(header, header_data);
  			internal.add_location(header, file$9, 9, 0, 208);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, header, anchor);

  			if (default_slot) {
  				default_slot.m(header, null);
  			}

  			/*header_binding*/ ctx[33](header);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.listen_dev(window_1$1, "resize", /*resize_handler*/ ctx[31], false, false, false),
  				internal.listen_dev(window_1$1, "scroll", /*scroll_handler*/ ctx[32], false, false, false),
  				internal.action_destroyer(useActions_action = useActions.call(null, header, /*use*/ ctx[1])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[13].call(null, header)),
  				internal.listen_dev(header, "SMUI:top-app-bar:icon-button:nav", /*SMUI_top_app_bar_icon_button_nav_handler*/ ctx[34], false, false, false)
  			];
  		},
  		p: function update(ctx, dirty) {
  			if (default_slot) {
  				if (default_slot.p && dirty[0] & /*$$scope*/ 536870912) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[29], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[29], dirty, null));
  				}
  			}

  			internal.set_attributes(header, internal.get_spread_update(header_levels, [
  				dirty[0] & /*className, variant, collapsed, color, prominent, dense, internalClasses*/ 2293 && {
  					class: classMap({
  						[/*className*/ ctx[2]]: true,
  						"mdc-top-app-bar": true,
  						"mdc-top-app-bar--short": /*variant*/ ctx[4] === "short",
  						"mdc-top-app-bar--short-collapsed": /*collapsed*/ ctx[0],
  						"mdc-top-app-bar--fixed": /*variant*/ ctx[4] === "fixed",
  						"smui-top-app-bar--static": /*variant*/ ctx[4] === "static",
  						"smui-top-app-bar--color-secondary": /*color*/ ctx[5] === "secondary",
  						"mdc-top-app-bar--prominent": /*prominent*/ ctx[6],
  						"mdc-top-app-bar--dense": /*dense*/ ctx[7],
  						.../*internalClasses*/ ctx[11]
  					})
  				},
  				dirty[0] & /*internalStyles, style*/ 4104 && {
  					style: Object.entries(/*internalStyles*/ ctx[12]).map(func$2).concat([/*style*/ ctx[3]]).join(" ")
  				},
  				dirty[0] & /*$$restProps*/ 32768 && /*$$restProps*/ ctx[15]
  			]));

  			if (useActions_action && internal.is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(header);
  			if (default_slot) default_slot.d(detaching);
  			/*header_binding*/ ctx[33](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$b.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  const func$2 = ([name, value]) => `${name}: ${value};`;

  function instance_1$2($$self, $$props, $$invalidate) {
  	const omit_props_names = [
  		"use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"
  	];

  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());

  	let uninitializedValue = () => {
  		
  	};

  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let { style = "" } = $$props;
  	let { variant = "standard" } = $$props;
  	let { color = "primary" } = $$props;
  	let { collapsed = uninitializedValue } = $$props;
  	let { prominent = false } = $$props;
  	let { dense = false } = $$props;
  	let { scrollTarget = null } = $$props;
  	let element;
  	let instance;
  	let internalClasses = {};
  	let internalStyles = {};
  	const alwaysCollapsed = collapsed !== uninitializedValue && !!collapsed;

  	if (collapsed === uninitializedValue) {
  		collapsed = false;
  	}

  	let propStoreSet;

  	let propStore = store.readable({ variant, prominent, dense }, set => {
  		$$invalidate(18, propStoreSet = set);
  	});

  	let oldScrollTarget = null;
  	let oldVariant = variant;

  	svelte.onMount(() => {
  		$$invalidate(10, instance = getInstance());
  		instance.init();

  		return () => {
  			instance.destroy();
  		};
  	});

  	function getInstance() {
  		const Foundation = ({
  			static: MDCTopAppBarBaseFoundation,
  			short: MDCShortTopAppBarFoundation,
  			fixed: MDCFixedTopAppBarFoundation
  		})[variant] || MDCTopAppBarFoundation;

  		return new Foundation({
  				hasClass,
  				addClass,
  				removeClass,
  				setStyle: addStyle,
  				getTopAppBarHeight: () => element.clientHeight,
  				notifyNavigationIconClicked: () => dispatch(element, "MDCTopAppBar:nav"),
  				getViewportScrollY: () => scrollTarget == null
  				? window.pageYOffset
  				: scrollTarget.scrollTop,
  				getTotalActionItems: () => element.querySelectorAll(".mdc-top-app-bar__action-item").length
  			});
  	}

  	function hasClass(className) {
  		return className in internalClasses
  		? internalClasses[className]
  		: getElement().classList.contains(className);
  	}

  	function addClass(className) {
  		if (!internalClasses[className]) {
  			$$invalidate(11, internalClasses[className] = true, internalClasses);
  		}
  	}

  	function removeClass(className) {
  		if (!(className in internalClasses) || internalClasses[className]) {
  			$$invalidate(11, internalClasses[className] = false, internalClasses);
  		}
  	}

  	function addStyle(name, value) {
  		if (internalStyles[name] != value) {
  			if (value === "" || value == null) {
  				delete internalStyles[name];
  				((($$invalidate(12, internalStyles), $$invalidate(20, oldVariant)), $$invalidate(4, variant)), $$invalidate(10, instance));
  			} else {
  				$$invalidate(12, internalStyles[name] = value, internalStyles);
  			}
  		}
  	}

  	function handleTargetScroll() {
  		if (instance) {
  			instance.handleTargetScroll();

  			if (variant === "short") {
  				$$invalidate(0, collapsed = instance.isCollapsed);
  			}
  		}
  	}

  	function getPropStore() {
  		return propStore;
  	}

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("TopAppBar", $$slots, ['default']);
  	const resize_handler = () => variant !== "short" && variant !== "fixed" && instance && instance.handleWindowResize();
  	const scroll_handler = () => scrollTarget == null && handleTargetScroll();

  	function header_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(9, element = $$value);
  		});
  	}

  	const SMUI_top_app_bar_icon_button_nav_handler = () => instance && instance.handleNavigationClick();

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(15, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
  		if ("style" in $$new_props) $$invalidate(3, style = $$new_props.style);
  		if ("variant" in $$new_props) $$invalidate(4, variant = $$new_props.variant);
  		if ("color" in $$new_props) $$invalidate(5, color = $$new_props.color);
  		if ("collapsed" in $$new_props) $$invalidate(0, collapsed = $$new_props.collapsed);
  		if ("prominent" in $$new_props) $$invalidate(6, prominent = $$new_props.prominent);
  		if ("dense" in $$new_props) $$invalidate(7, dense = $$new_props.dense);
  		if ("scrollTarget" in $$new_props) $$invalidate(8, scrollTarget = $$new_props.scrollTarget);
  		if ("$$scope" in $$new_props) $$invalidate(29, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		MDCTopAppBarBaseFoundation,
  		MDCTopAppBarFoundation,
  		MDCFixedTopAppBarFoundation,
  		MDCShortTopAppBarFoundation,
  		onMount: svelte.onMount,
  		get_current_component: internal.get_current_component,
  		readable: store.readable,
  		forwardEventsBuilder,
  		classMap,
  		useActions,
  		dispatch,
  		forwardEvents,
  		uninitializedValue,
  		use,
  		className,
  		style,
  		variant,
  		color,
  		collapsed,
  		prominent,
  		dense,
  		scrollTarget,
  		element,
  		instance,
  		internalClasses,
  		internalStyles,
  		alwaysCollapsed,
  		propStoreSet,
  		propStore,
  		oldScrollTarget,
  		oldVariant,
  		getInstance,
  		hasClass,
  		addClass,
  		removeClass,
  		addStyle,
  		handleTargetScroll,
  		getPropStore,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("uninitializedValue" in $$props) uninitializedValue = $$new_props.uninitializedValue;
  		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
  		if ("style" in $$props) $$invalidate(3, style = $$new_props.style);
  		if ("variant" in $$props) $$invalidate(4, variant = $$new_props.variant);
  		if ("color" in $$props) $$invalidate(5, color = $$new_props.color);
  		if ("collapsed" in $$props) $$invalidate(0, collapsed = $$new_props.collapsed);
  		if ("prominent" in $$props) $$invalidate(6, prominent = $$new_props.prominent);
  		if ("dense" in $$props) $$invalidate(7, dense = $$new_props.dense);
  		if ("scrollTarget" in $$props) $$invalidate(8, scrollTarget = $$new_props.scrollTarget);
  		if ("element" in $$props) $$invalidate(9, element = $$new_props.element);
  		if ("instance" in $$props) $$invalidate(10, instance = $$new_props.instance);
  		if ("internalClasses" in $$props) $$invalidate(11, internalClasses = $$new_props.internalClasses);
  		if ("internalStyles" in $$props) $$invalidate(12, internalStyles = $$new_props.internalStyles);
  		if ("propStoreSet" in $$props) $$invalidate(18, propStoreSet = $$new_props.propStoreSet);
  		if ("propStore" in $$props) propStore = $$new_props.propStore;
  		if ("oldScrollTarget" in $$props) $$invalidate(19, oldScrollTarget = $$new_props.oldScrollTarget);
  		if ("oldVariant" in $$props) $$invalidate(20, oldVariant = $$new_props.oldVariant);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$self.$$.update = () => {
  		if ($$self.$$.dirty[0] & /*propStoreSet, variant, prominent, dense*/ 262352) {
  			 if (propStoreSet) {
  				propStoreSet({ variant, prominent, dense });
  			}
  		}

  		if ($$self.$$.dirty[0] & /*oldVariant, variant, instance*/ 1049616) {
  			 if (oldVariant !== variant && instance) {
  				$$invalidate(20, oldVariant = variant);
  				instance.destroy();
  				$$invalidate(11, internalClasses = {});
  				$$invalidate(12, internalStyles = {});
  				$$invalidate(10, instance = getInstance());
  				instance.init();
  			}
  		}

  		if ($$self.$$.dirty[0] & /*instance, variant*/ 1040) {
  			 if (instance && variant === "short") {
  				instance.setAlwaysCollapsed(alwaysCollapsed);
  			}
  		}

  		if ($$self.$$.dirty[0] & /*oldScrollTarget, scrollTarget*/ 524544) {
  			 if (oldScrollTarget !== scrollTarget) {
  				if (oldScrollTarget) {
  					oldScrollTarget.removeEventListener("scroll", handleTargetScroll);
  				}

  				if (scrollTarget) {
  					scrollTarget.addEventListener("scroll", handleTargetScroll);
  				}

  				$$invalidate(19, oldScrollTarget = scrollTarget);
  			}
  		}
  	};

  	return [
  		collapsed,
  		use,
  		className,
  		style,
  		variant,
  		color,
  		prominent,
  		dense,
  		scrollTarget,
  		element,
  		instance,
  		internalClasses,
  		internalStyles,
  		forwardEvents,
  		handleTargetScroll,
  		$$restProps,
  		getPropStore,
  		getElement,
  		propStoreSet,
  		oldScrollTarget,
  		oldVariant,
  		uninitializedValue,
  		alwaysCollapsed,
  		propStore,
  		getInstance,
  		hasClass,
  		addClass,
  		removeClass,
  		addStyle,
  		$$scope,
  		$$slots,
  		resize_handler,
  		scroll_handler,
  		header_binding,
  		SMUI_top_app_bar_icon_button_nav_handler
  	];
  }

  class TopAppBar extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(
  			this,
  			options,
  			instance_1$2,
  			create_fragment$b,
  			internal.safe_not_equal,
  			{
  				use: 1,
  				class: 2,
  				style: 3,
  				variant: 4,
  				color: 5,
  				collapsed: 0,
  				prominent: 6,
  				dense: 7,
  				scrollTarget: 8,
  				getPropStore: 16,
  				getElement: 17
  			},
  			[-1, -1]
  		);

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "TopAppBar",
  			options,
  			id: create_fragment$b.name
  		});
  	}

  	get use() {
  		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get style() {
  		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set style(value) {
  		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get variant() {
  		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set variant(value) {
  		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get color() {
  		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set color(value) {
  		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get collapsed() {
  		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set collapsed(value) {
  		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get prominent() {
  		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set prominent(value) {
  		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get dense() {
  		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set dense(value) {
  		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get scrollTarget() {
  		throw new Error("<TopAppBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set scrollTarget(value) {
  		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getPropStore() {
  		return this.$$.ctx[16];
  	}

  	set getPropStore(value) {
  		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[17];
  	}

  	set getElement(value) {
  		throw new Error("<TopAppBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  var Row = classAdderBuilder({
    class: 'mdc-top-app-bar__row',
    component: Div,
  });

  /* node_modules/@smui/top-app-bar/Section.svelte generated by Svelte v3.21.0 */

  const file$a = "node_modules/@smui/top-app-bar/Section.svelte";

  function create_fragment$c(ctx) {
  	let section;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[9].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

  	let section_levels = [
  		{
  			class: classMap({
  				[/*className*/ ctx[1]]: true,
  				"mdc-top-app-bar__section": true,
  				"mdc-top-app-bar__section--align-start": /*align*/ ctx[2] === "start",
  				"mdc-top-app-bar__section--align-end": /*align*/ ctx[2] === "end"
  			})
  		},
  		/*toolbar*/ ctx[3] ? { role: "toolbar" } : {},
  		/*$$restProps*/ ctx[6]
  	];

  	let section_data = {};

  	for (let i = 0; i < section_levels.length; i += 1) {
  		section_data = internal.assign(section_data, section_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			section = internal.element("section");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(section, section_data);
  			internal.add_location(section, file$a, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, section, anchor);

  			if (default_slot) {
  				default_slot.m(section, null);
  			}

  			/*section_binding*/ ctx[10](section);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, section, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[5].call(null, section))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 256) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[8], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[8], dirty, null));
  				}
  			}

  			internal.set_attributes(section, internal.get_spread_update(section_levels, [
  				dirty & /*classMap, className, align*/ 6 && {
  					class: classMap({
  						[/*className*/ ctx[1]]: true,
  						"mdc-top-app-bar__section": true,
  						"mdc-top-app-bar__section--align-start": /*align*/ ctx[2] === "start",
  						"mdc-top-app-bar__section--align-end": /*align*/ ctx[2] === "end"
  					})
  				},
  				dirty & /*toolbar*/ 8 && (/*toolbar*/ ctx[3] ? { role: "toolbar" } : {}),
  				dirty & /*$$restProps*/ 64 && /*$$restProps*/ ctx[6]
  			]));

  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(section);
  			if (default_slot) default_slot.d(detaching);
  			/*section_binding*/ ctx[10](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$c.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$9($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","class","align","toolbar","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let { align = "start" } = $$props;
  	let { toolbar = false } = $$props;
  	let element;

  	svelte.setContext("SMUI:icon-button:context", toolbar
  	? "top-app-bar:action"
  	: "top-app-bar:navigation");

  	svelte.setContext("SMUI:button:context", toolbar
  	? "top-app-bar:action"
  	: "top-app-bar:navigation");

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Section", $$slots, ['default']);

  	function section_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(4, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(6, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
  		if ("align" in $$new_props) $$invalidate(2, align = $$new_props.align);
  		if ("toolbar" in $$new_props) $$invalidate(3, toolbar = $$new_props.toolbar);
  		if ("$$scope" in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		setContext: svelte.setContext,
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		useActions,
  		forwardEvents,
  		use,
  		className,
  		align,
  		toolbar,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  		if ("align" in $$props) $$invalidate(2, align = $$new_props.align);
  		if ("toolbar" in $$props) $$invalidate(3, toolbar = $$new_props.toolbar);
  		if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		className,
  		align,
  		toolbar,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		section_binding
  	];
  }

  class Section extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(this, options, instance$9, create_fragment$c, internal.safe_not_equal, {
  			use: 0,
  			class: 1,
  			align: 2,
  			toolbar: 3,
  			getElement: 7
  		});

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Section",
  			options,
  			id: create_fragment$c.name
  		});
  	}

  	get use() {
  		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get align() {
  		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set align(value) {
  		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get toolbar() {
  		throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set toolbar(value) {
  		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[7];
  	}

  	set getElement(value) {
  		throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  var Title$1 = classAdderBuilder({
    class: 'mdc-top-app-bar__title',
    component: Span,
  });

  function ShortFixedAdjust(node) {
    node.classList.add('mdc-top-app-bar--short-fixed-adjust');

    return {
      destroy() {
        node.classList.remove('mdc-top-app-bar--short-fixed-adjust');
      },
    };
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics$4 = function(d, b) {
      extendStatics$4 = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics$4(d, b);
  };

  function __extends$4(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics$4(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign$4 = function() {
      __assign$4 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign$4.apply(this, arguments);
  };

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses$4 = {
      ICON_BUTTON_ON: 'mdc-icon-button--on',
      ROOT: 'mdc-icon-button',
  };
  var strings$3 = {
      ARIA_LABEL: 'aria-label',
      ARIA_PRESSED: 'aria-pressed',
      DATA_ARIA_LABEL_OFF: 'data-aria-label-off',
      DATA_ARIA_LABEL_ON: 'data-aria-label-on',
      CHANGE_EVENT: 'MDCIconButtonToggle:change',
  };

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCIconButtonToggleFoundation = /** @class */ (function (_super) {
      __extends$4(MDCIconButtonToggleFoundation, _super);
      function MDCIconButtonToggleFoundation(adapter) {
          var _this = _super.call(this, __assign$4(__assign$4({}, MDCIconButtonToggleFoundation.defaultAdapter), adapter)) || this;
          /**
           * Whether the icon button has an aria label that changes depending on
           * toggled state.
           */
          _this.hasToggledAriaLabel = false;
          return _this;
      }
      Object.defineProperty(MDCIconButtonToggleFoundation, "cssClasses", {
          get: function () {
              return cssClasses$4;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCIconButtonToggleFoundation, "strings", {
          get: function () {
              return strings$3;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCIconButtonToggleFoundation, "defaultAdapter", {
          get: function () {
              return {
                  addClass: function () { return undefined; },
                  hasClass: function () { return false; },
                  notifyChange: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  getAttr: function () { return null; },
                  setAttr: function () { return undefined; },
              };
          },
          enumerable: false,
          configurable: true
      });
      MDCIconButtonToggleFoundation.prototype.init = function () {
          var ariaLabelOn = this.adapter.getAttr(strings$3.DATA_ARIA_LABEL_ON);
          var ariaLabelOff = this.adapter.getAttr(strings$3.DATA_ARIA_LABEL_OFF);
          if (ariaLabelOn && ariaLabelOff) {
              if (this.adapter.getAttr(strings$3.ARIA_PRESSED) !== null) {
                  throw new Error('MDCIconButtonToggleFoundation: Button should not set ' +
                      '`aria-pressed` if it has a toggled aria label.');
              }
              this.hasToggledAriaLabel = true;
          }
          else {
              this.adapter.setAttr(strings$3.ARIA_PRESSED, String(this.isOn()));
          }
      };
      MDCIconButtonToggleFoundation.prototype.handleClick = function () {
          this.toggle();
          this.adapter.notifyChange({ isOn: this.isOn() });
      };
      MDCIconButtonToggleFoundation.prototype.isOn = function () {
          return this.adapter.hasClass(cssClasses$4.ICON_BUTTON_ON);
      };
      MDCIconButtonToggleFoundation.prototype.toggle = function (isOn) {
          if (isOn === void 0) { isOn = !this.isOn(); }
          // Toggle UI based on state.
          if (isOn) {
              this.adapter.addClass(cssClasses$4.ICON_BUTTON_ON);
          }
          else {
              this.adapter.removeClass(cssClasses$4.ICON_BUTTON_ON);
          }
          // Toggle aria attributes based on state.
          if (this.hasToggledAriaLabel) {
              var ariaLabel = isOn ?
                  this.adapter.getAttr(strings$3.DATA_ARIA_LABEL_ON) :
                  this.adapter.getAttr(strings$3.DATA_ARIA_LABEL_OFF);
              this.adapter.setAttr(strings$3.ARIA_LABEL, ariaLabel || '');
          }
          else {
              this.adapter.setAttr(strings$3.ARIA_PRESSED, "" + isOn);
          }
      };
      return MDCIconButtonToggleFoundation;
  }(MDCFoundation));

  /* node_modules/@smui/icon-button/IconButton.svelte generated by Svelte v3.21.0 */

  // (1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: true,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-icon-button': true,     'mdc-icon-button--on': pressed !== uninitializedValue && pressed,     'mdc-card__action': context === 'card:action',     'mdc-card__action--icon': context === 'card:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__dismiss': context === 'snackbar:actions',     'mdc-data-table__pagination-button': context === 'data-table:pagination',     'mdc-data-table__sort-icon-button':       context === 'data-table:sortable-header-cell',     'mdc-dialog__close': context === 'dialog:header' && action === 'close',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   aria-pressed={pressed !== uninitializedValue     ? pressed       ? 'true'       : 'false'     : null}   aria-label={pressed ? ariaLabelOn : ariaLabelOff}   data-aria-label-on={ariaLabelOn}   data-aria-label-off={ariaLabelOff}   aria-describedby={ariaDescribedby}   on:click={() => instance && instance.handleClick()}   on:click={() =>     context === 'top-app-bar:navigation' &&     dispatch(element, 'SMUI:top-app-bar:icon-button:nav')}   {href}   {...actionProp}   {...internalAttrs}   {...$$restProps}>
  function create_default_slot$4(ctx) {
  	let current;
  	const default_slot_template = /*$$slots*/ ctx[32].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[36], null);

  	const block = {
  		c: function create() {
  			if (default_slot) default_slot.c();
  		},
  		m: function mount(target, anchor) {
  			if (default_slot) {
  				default_slot.m(target, anchor);
  			}

  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			if (default_slot) {
  				if (default_slot.p && dirty[1] & /*$$scope*/ 32) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[36], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[36], dirty, null));
  				}
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (default_slot) default_slot.d(detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot$4.name,
  		type: "slot",
  		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: true,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-icon-button': true,     'mdc-icon-button--on': pressed !== uninitializedValue && pressed,     'mdc-card__action': context === 'card:action',     'mdc-card__action--icon': context === 'card:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__dismiss': context === 'snackbar:actions',     'mdc-data-table__pagination-button': context === 'data-table:pagination',     'mdc-data-table__sort-icon-button':       context === 'data-table:sortable-header-cell',     'mdc-dialog__close': context === 'dialog:header' && action === 'close',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   aria-pressed={pressed !== uninitializedValue     ? pressed       ? 'true'       : 'false'     : null}   aria-label={pressed ? ariaLabelOn : ariaLabelOff}   data-aria-label-on={ariaLabelOn}   data-aria-label-off={ariaLabelOff}   aria-describedby={ariaDescribedby}   on:click={() => instance && instance.handleClick()}   on:click={() =>     context === 'top-app-bar:navigation' &&     dispatch(element, 'SMUI:top-app-bar:icon-button:nav')}   {href}   {...actionProp}   {...internalAttrs}   {...$$restProps}>",
  		ctx
  	});

  	return block;
  }

  function create_fragment$d(ctx) {
  	let switch_instance_anchor;
  	let current;

  	const switch_instance_spread_levels = [
  		{
  			use: [
  				[
  					Ripple,
  					{
  						ripple: /*ripple*/ ctx[4],
  						unbounded: true,
  						color: /*color*/ ctx[5],
  						disabled: !!/*$$restProps*/ ctx[24].disabled,
  						addClass: /*addClass*/ ctx[21],
  						removeClass: /*removeClass*/ ctx[22],
  						addStyle: /*addStyle*/ ctx[23]
  					}
  				],
  				/*forwardEvents*/ ctx[17],
  				.../*use*/ ctx[1]
  			]
  		},
  		{
  			class: classMap({
  				[/*className*/ ctx[2]]: true,
  				"mdc-icon-button": true,
  				"mdc-icon-button--on": /*pressed*/ ctx[0] !== /*uninitializedValue*/ ctx[18] && /*pressed*/ ctx[0],
  				"mdc-card__action": /*context*/ ctx[19] === "card:action",
  				"mdc-card__action--icon": /*context*/ ctx[19] === "card:action",
  				"mdc-top-app-bar__navigation-icon": /*context*/ ctx[19] === "top-app-bar:navigation",
  				"mdc-top-app-bar__action-item": /*context*/ ctx[19] === "top-app-bar:action",
  				"mdc-snackbar__dismiss": /*context*/ ctx[19] === "snackbar:actions",
  				"mdc-data-table__pagination-button": /*context*/ ctx[19] === "data-table:pagination",
  				"mdc-data-table__sort-icon-button": /*context*/ ctx[19] === "data-table:sortable-header-cell",
  				"mdc-dialog__close": /*context*/ ctx[19] === "dialog:header" && /*action*/ ctx[9] === "close",
  				.../*internalClasses*/ ctx[13]
  			})
  		},
  		{
  			style: Object.entries(/*internalStyles*/ ctx[14]).map(func$3).concat([/*style*/ ctx[3]]).join(" ")
  		},
  		{
  			"aria-pressed": /*pressed*/ ctx[0] !== /*uninitializedValue*/ ctx[18]
  			? /*pressed*/ ctx[0] ? "true" : "false"
  			: null
  		},
  		{
  			"aria-label": /*pressed*/ ctx[0]
  			? /*ariaLabelOn*/ ctx[6]
  			: /*ariaLabelOff*/ ctx[7]
  		},
  		{
  			"data-aria-label-on": /*ariaLabelOn*/ ctx[6]
  		},
  		{
  			"data-aria-label-off": /*ariaLabelOff*/ ctx[7]
  		},
  		{
  			"aria-describedby": /*ariaDescribedby*/ ctx[20]
  		},
  		{ href: /*href*/ ctx[8] },
  		/*actionProp*/ ctx[16],
  		/*internalAttrs*/ ctx[15],
  		/*$$restProps*/ ctx[24]
  	];

  	var switch_value = /*component*/ ctx[10];

  	function switch_props(ctx) {
  		let switch_instance_props = {
  			$$slots: { default: [create_default_slot$4] },
  			$$scope: { ctx }
  		};

  		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
  			switch_instance_props = internal.assign(switch_instance_props, switch_instance_spread_levels[i]);
  		}

  		return {
  			props: switch_instance_props,
  			$$inline: true
  		};
  	}

  	if (switch_value) {
  		var switch_instance = new switch_value(switch_props(ctx));
  		/*switch_instance_binding*/ ctx[33](switch_instance);
  		switch_instance.$on("click", /*click_handler*/ ctx[34]);
  		switch_instance.$on("click", /*click_handler_1*/ ctx[35]);
  	}

  	const block = {
  		c: function create() {
  			if (switch_instance) internal.create_component(switch_instance.$$.fragment);
  			switch_instance_anchor = internal.empty();
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			if (switch_instance) {
  				internal.mount_component(switch_instance, target, anchor);
  			}

  			internal.insert_dev(target, switch_instance_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const switch_instance_changes = (dirty[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, pressed, uninitializedValue, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/ 33547263)
  			? internal.get_spread_update(switch_instance_spread_levels, [
  					dirty[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/ 31588402 && {
  						use: [
  							[
  								Ripple,
  								{
  									ripple: /*ripple*/ ctx[4],
  									unbounded: true,
  									color: /*color*/ ctx[5],
  									disabled: !!/*$$restProps*/ ctx[24].disabled,
  									addClass: /*addClass*/ ctx[21],
  									removeClass: /*removeClass*/ ctx[22],
  									addStyle: /*addStyle*/ ctx[23]
  								}
  							],
  							/*forwardEvents*/ ctx[17],
  							.../*use*/ ctx[1]
  						]
  					},
  					dirty[0] & /*className, pressed, uninitializedValue, context, action, internalClasses*/ 795141 && {
  						class: classMap({
  							[/*className*/ ctx[2]]: true,
  							"mdc-icon-button": true,
  							"mdc-icon-button--on": /*pressed*/ ctx[0] !== /*uninitializedValue*/ ctx[18] && /*pressed*/ ctx[0],
  							"mdc-card__action": /*context*/ ctx[19] === "card:action",
  							"mdc-card__action--icon": /*context*/ ctx[19] === "card:action",
  							"mdc-top-app-bar__navigation-icon": /*context*/ ctx[19] === "top-app-bar:navigation",
  							"mdc-top-app-bar__action-item": /*context*/ ctx[19] === "top-app-bar:action",
  							"mdc-snackbar__dismiss": /*context*/ ctx[19] === "snackbar:actions",
  							"mdc-data-table__pagination-button": /*context*/ ctx[19] === "data-table:pagination",
  							"mdc-data-table__sort-icon-button": /*context*/ ctx[19] === "data-table:sortable-header-cell",
  							"mdc-dialog__close": /*context*/ ctx[19] === "dialog:header" && /*action*/ ctx[9] === "close",
  							.../*internalClasses*/ ctx[13]
  						})
  					},
  					dirty[0] & /*internalStyles, style*/ 16392 && {
  						style: Object.entries(/*internalStyles*/ ctx[14]).map(func$3).concat([/*style*/ ctx[3]]).join(" ")
  					},
  					dirty[0] & /*pressed, uninitializedValue*/ 262145 && {
  						"aria-pressed": /*pressed*/ ctx[0] !== /*uninitializedValue*/ ctx[18]
  						? /*pressed*/ ctx[0] ? "true" : "false"
  						: null
  					},
  					dirty[0] & /*pressed, ariaLabelOn, ariaLabelOff*/ 193 && {
  						"aria-label": /*pressed*/ ctx[0]
  						? /*ariaLabelOn*/ ctx[6]
  						: /*ariaLabelOff*/ ctx[7]
  					},
  					dirty[0] & /*ariaLabelOn*/ 64 && {
  						"data-aria-label-on": /*ariaLabelOn*/ ctx[6]
  					},
  					dirty[0] & /*ariaLabelOff*/ 128 && {
  						"data-aria-label-off": /*ariaLabelOff*/ ctx[7]
  					},
  					dirty[0] & /*ariaDescribedby*/ 1048576 && {
  						"aria-describedby": /*ariaDescribedby*/ ctx[20]
  					},
  					dirty[0] & /*href*/ 256 && { href: /*href*/ ctx[8] },
  					dirty[0] & /*actionProp*/ 65536 && internal.get_spread_object(/*actionProp*/ ctx[16]),
  					dirty[0] & /*internalAttrs*/ 32768 && internal.get_spread_object(/*internalAttrs*/ ctx[15]),
  					dirty[0] & /*$$restProps*/ 16777216 && internal.get_spread_object(/*$$restProps*/ ctx[24])
  				])
  			: {};

  			if (dirty[1] & /*$$scope*/ 32) {
  				switch_instance_changes.$$scope = { dirty, ctx };
  			}

  			if (switch_value !== (switch_value = /*component*/ ctx[10])) {
  				if (switch_instance) {
  					internal.group_outros();
  					const old_component = switch_instance;

  					internal.transition_out(old_component.$$.fragment, 1, 0, () => {
  						internal.destroy_component(old_component, 1);
  					});

  					internal.check_outros();
  				}

  				if (switch_value) {
  					switch_instance = new switch_value(switch_props(ctx));
  					/*switch_instance_binding*/ ctx[33](switch_instance);
  					switch_instance.$on("click", /*click_handler*/ ctx[34]);
  					switch_instance.$on("click", /*click_handler_1*/ ctx[35]);
  					internal.create_component(switch_instance.$$.fragment);
  					internal.transition_in(switch_instance.$$.fragment, 1);
  					internal.mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
  				} else {
  					switch_instance = null;
  				}
  			} else if (switch_value) {
  				switch_instance.$set(switch_instance_changes);
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			if (switch_instance) internal.transition_in(switch_instance.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			if (switch_instance) internal.transition_out(switch_instance.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			/*switch_instance_binding*/ ctx[33](null);
  			if (detaching) internal.detach_dev(switch_instance_anchor);
  			if (switch_instance) internal.destroy_component(switch_instance, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$d.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  const func$3 = ([name, value]) => `${name}: ${value};`;

  function instance_1$3($$self, $$props, $$invalidate) {
  	const omit_props_names = [
  		"use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","href","action","component","getElement"
  	];

  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());

  	let uninitializedValue = () => {
  		
  	};

  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let { style = "" } = $$props;
  	let { ripple = true } = $$props;
  	let { color = null } = $$props;
  	let { toggle = false } = $$props;
  	let { pressed = uninitializedValue } = $$props;
  	let { ariaLabelOn = null } = $$props;
  	let { ariaLabelOff = null } = $$props;
  	let { href = null } = $$props;
  	let { action = null } = $$props;
  	let element;
  	let instance;
  	let internalClasses = {};
  	let internalStyles = {};
  	let internalAttrs = {};
  	let context = svelte.getContext("SMUI:icon-button:context");
  	let ariaDescribedby = svelte.getContext("SMUI:icon-button:aria-describedby");
  	let { component = href == null ? Button : A } = $$props;
  	svelte.setContext("SMUI:icon:context", "icon-button");
  	let oldToggle = null;

  	svelte.onDestroy(() => {
  		instance && instance.destroy();
  	});

  	function hasClass(className) {
  		return className in internalClasses
  		? internalClasses[className]
  		: getElement().classList.contains(className);
  	}

  	function addClass(className) {
  		if (!internalClasses[className]) {
  			$$invalidate(13, internalClasses[className] = true, internalClasses);
  		}
  	}

  	function removeClass(className) {
  		if (!(className in internalClasses) || internalClasses[className]) {
  			$$invalidate(13, internalClasses[className] = false, internalClasses);
  		}
  	}

  	function addStyle(name, value) {
  		if (internalStyles[name] != value) {
  			if (value === "" || value == null) {
  				delete internalStyles[name];
  				$$invalidate(14, internalStyles);
  			} else {
  				$$invalidate(14, internalStyles[name] = value, internalStyles);
  			}
  		}
  	}

  	function getAttr(name) {
  		return name in internalAttrs
  		? internalAttrs[name]
  		: getElement().getAttribute(name);
  	}

  	function addAttr(name, value) {
  		if (internalAttrs[name] !== value) {
  			$$invalidate(15, internalAttrs[name] = value, internalAttrs);
  		}
  	}

  	function handleChange(evtData) {
  		$$invalidate(0, pressed = evtData.isOn);
  	}

  	function getElement() {
  		return element.getElement();
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("IconButton", $$slots, ['default']);

  	function switch_instance_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(11, element = $$value);
  		});
  	}

  	const click_handler = () => instance && instance.handleClick();
  	const click_handler_1 = () => context === "top-app-bar:navigation" && dispatch(element, "SMUI:top-app-bar:icon-button:nav");

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(24, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
  		if ("style" in $$new_props) $$invalidate(3, style = $$new_props.style);
  		if ("ripple" in $$new_props) $$invalidate(4, ripple = $$new_props.ripple);
  		if ("color" in $$new_props) $$invalidate(5, color = $$new_props.color);
  		if ("toggle" in $$new_props) $$invalidate(25, toggle = $$new_props.toggle);
  		if ("pressed" in $$new_props) $$invalidate(0, pressed = $$new_props.pressed);
  		if ("ariaLabelOn" in $$new_props) $$invalidate(6, ariaLabelOn = $$new_props.ariaLabelOn);
  		if ("ariaLabelOff" in $$new_props) $$invalidate(7, ariaLabelOff = $$new_props.ariaLabelOff);
  		if ("href" in $$new_props) $$invalidate(8, href = $$new_props.href);
  		if ("action" in $$new_props) $$invalidate(9, action = $$new_props.action);
  		if ("component" in $$new_props) $$invalidate(10, component = $$new_props.component);
  		if ("$$scope" in $$new_props) $$invalidate(36, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		MDCIconButtonToggleFoundation,
  		onDestroy: svelte.onDestroy,
  		getContext: svelte.getContext,
  		setContext: svelte.setContext,
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		dispatch,
  		Ripple,
  		A,
  		Button,
  		forwardEvents,
  		uninitializedValue,
  		use,
  		className,
  		style,
  		ripple,
  		color,
  		toggle,
  		pressed,
  		ariaLabelOn,
  		ariaLabelOff,
  		href,
  		action,
  		element,
  		instance,
  		internalClasses,
  		internalStyles,
  		internalAttrs,
  		context,
  		ariaDescribedby,
  		component,
  		oldToggle,
  		hasClass,
  		addClass,
  		removeClass,
  		addStyle,
  		getAttr,
  		addAttr,
  		handleChange,
  		getElement,
  		actionProp
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("uninitializedValue" in $$props) $$invalidate(18, uninitializedValue = $$new_props.uninitializedValue);
  		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
  		if ("style" in $$props) $$invalidate(3, style = $$new_props.style);
  		if ("ripple" in $$props) $$invalidate(4, ripple = $$new_props.ripple);
  		if ("color" in $$props) $$invalidate(5, color = $$new_props.color);
  		if ("toggle" in $$props) $$invalidate(25, toggle = $$new_props.toggle);
  		if ("pressed" in $$props) $$invalidate(0, pressed = $$new_props.pressed);
  		if ("ariaLabelOn" in $$props) $$invalidate(6, ariaLabelOn = $$new_props.ariaLabelOn);
  		if ("ariaLabelOff" in $$props) $$invalidate(7, ariaLabelOff = $$new_props.ariaLabelOff);
  		if ("href" in $$props) $$invalidate(8, href = $$new_props.href);
  		if ("action" in $$props) $$invalidate(9, action = $$new_props.action);
  		if ("element" in $$props) $$invalidate(11, element = $$new_props.element);
  		if ("instance" in $$props) $$invalidate(12, instance = $$new_props.instance);
  		if ("internalClasses" in $$props) $$invalidate(13, internalClasses = $$new_props.internalClasses);
  		if ("internalStyles" in $$props) $$invalidate(14, internalStyles = $$new_props.internalStyles);
  		if ("internalAttrs" in $$props) $$invalidate(15, internalAttrs = $$new_props.internalAttrs);
  		if ("context" in $$props) $$invalidate(19, context = $$new_props.context);
  		if ("ariaDescribedby" in $$props) $$invalidate(20, ariaDescribedby = $$new_props.ariaDescribedby);
  		if ("component" in $$props) $$invalidate(10, component = $$new_props.component);
  		if ("oldToggle" in $$props) $$invalidate(27, oldToggle = $$new_props.oldToggle);
  		if ("actionProp" in $$props) $$invalidate(16, actionProp = $$new_props.actionProp);
  	};

  	let actionProp;

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$self.$$.update = () => {
  		if ($$self.$$.dirty[0] & /*action*/ 512) {
  			 $$invalidate(16, actionProp = (() => {
  				if (context === "data-table:pagination") {
  					switch (action) {
  						case "first-page":
  							return { "data-first-page": "true" };
  						case "prev-page":
  							return { "data-prev-page": "true" };
  						case "next-page":
  							return { "data-next-page": "true" };
  						case "last-page":
  							return { "data-last-page": "true" };
  						default:
  							return { "data-action": "true" };
  					}
  				} else if (context === "dialog:header") {
  					return { "data-mdc-dialog-action": action };
  				} else {
  					return { action };
  				}
  			})());
  		}

  		if ($$self.$$.dirty[0] & /*element, toggle, oldToggle, instance*/ 167778304) {
  			 if (element && getElement() && toggle !== oldToggle) {
  				if (toggle && !instance) {
  					$$invalidate(12, instance = new MDCIconButtonToggleFoundation({
  							addClass,
  							hasClass,
  							notifyChange: evtData => {
  								handleChange(evtData);
  								dispatch(getElement(), "MDCIconButtonToggle:change", evtData);
  							},
  							removeClass,
  							getAttr,
  							setAttr: addAttr
  						}));

  					instance.init();
  				} else if (!toggle && instance) {
  					instance.destroy();
  					$$invalidate(12, instance = null);
  					$$invalidate(13, internalClasses = {});
  					$$invalidate(15, internalAttrs = {});
  				}

  				$$invalidate(27, oldToggle = toggle);
  			}
  		}

  		if ($$self.$$.dirty[0] & /*instance, pressed*/ 4097) {
  			 if (instance && instance.isOn() !== pressed) {
  				instance.toggle(pressed);
  			}
  		}
  	};

  	return [
  		pressed,
  		use,
  		className,
  		style,
  		ripple,
  		color,
  		ariaLabelOn,
  		ariaLabelOff,
  		href,
  		action,
  		component,
  		element,
  		instance,
  		internalClasses,
  		internalStyles,
  		internalAttrs,
  		actionProp,
  		forwardEvents,
  		uninitializedValue,
  		context,
  		ariaDescribedby,
  		addClass,
  		removeClass,
  		addStyle,
  		$$restProps,
  		toggle,
  		getElement,
  		oldToggle,
  		hasClass,
  		getAttr,
  		addAttr,
  		handleChange,
  		$$slots,
  		switch_instance_binding,
  		click_handler,
  		click_handler_1,
  		$$scope
  	];
  }

  class IconButton extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(
  			this,
  			options,
  			instance_1$3,
  			create_fragment$d,
  			internal.safe_not_equal,
  			{
  				use: 1,
  				class: 2,
  				style: 3,
  				ripple: 4,
  				color: 5,
  				toggle: 25,
  				pressed: 0,
  				ariaLabelOn: 6,
  				ariaLabelOff: 7,
  				href: 8,
  				action: 9,
  				component: 10,
  				getElement: 26
  			},
  			[-1, -1]
  		);

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "IconButton",
  			options,
  			id: create_fragment$d.name
  		});
  	}

  	get use() {
  		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get style() {
  		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set style(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get ripple() {
  		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set ripple(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get color() {
  		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set color(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get toggle() {
  		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set toggle(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get pressed() {
  		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set pressed(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get ariaLabelOn() {
  		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set ariaLabelOn(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get ariaLabelOff() {
  		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set ariaLabelOff(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get href() {
  		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set href(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get action() {
  		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set action(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get component() {
  		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set component(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[26];
  	}

  	set getElement(value) {
  		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* src/Panels/TopBar.svelte generated by Svelte v3.21.0 */

  const { console: console_1 } = internal.globals;
  const file$b = "src/Panels/TopBar.svelte";

  // (42:8) <IconButton on:click={changeDrawerState} class="material-icons">
  function create_default_slot_7(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("menu");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_7.name,
  		type: "slot",
  		source: "(42:8) <IconButton on:click={changeDrawerState} class=\\\"material-icons\\\">",
  		ctx
  	});

  	return block;
  }

  // (41:6) <Section>
  function create_default_slot_6(ctx) {
  	let current;

  	const iconbutton = new IconButton({
  			props: {
  				class: "material-icons",
  				$$slots: { default: [create_default_slot_7] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	iconbutton.$on("click", changeDrawerState);

  	const block = {
  		c: function create() {
  			internal.create_component(iconbutton.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(iconbutton, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const iconbutton_changes = {};

  			if (dirty & /*$$scope*/ 2048) {
  				iconbutton_changes.$$scope = { dirty, ctx };
  			}

  			iconbutton.$set(iconbutton_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(iconbutton.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(iconbutton.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(iconbutton, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_6.name,
  		type: "slot",
  		source: "(41:6) <Section>",
  		ctx
  	});

  	return block;
  }

  // (49:8) <Title>
  function create_default_slot_5(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text(/*title*/ ctx[5]);
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		p: internal.noop,
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_5.name,
  		type: "slot",
  		source: "(49:8) <Title>",
  		ctx
  	});

  	return block;
  }

  // (48:6) <Section align="middle" toolbar>
  function create_default_slot_4(ctx) {
  	let current;

  	const title_1 = new Title$1({
  			props: {
  				$$slots: { default: [create_default_slot_5] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			internal.create_component(title_1.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(title_1, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const title_1_changes = {};

  			if (dirty & /*$$scope*/ 2048) {
  				title_1_changes.$$scope = { dirty, ctx };
  			}

  			title_1.$set(title_1_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(title_1.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(title_1.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(title_1, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_4.name,
  		type: "slot",
  		source: "(48:6) <Section align=\\\"middle\\\" toolbar>",
  		ctx
  	});

  	return block;
  }

  // (53:8) <IconButton           on:click={() => {             modal_show = true;             show = false;           }}           class="btinfo material-icons"           aria-label="Informació">
  function create_default_slot_3(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("info");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_3.name,
  		type: "slot",
  		source: "(53:8) <IconButton           on:click={() => {             modal_show = true;             show = false;           }}           class=\\\"btinfo material-icons\\\"           aria-label=\\\"Informació\\\">",
  		ctx
  	});

  	return block;
  }

  // (52:6) <Section align="end" toolbar>
  function create_default_slot_2(ctx) {
  	let current;

  	const iconbutton = new IconButton({
  			props: {
  				class: "btinfo material-icons",
  				"aria-label": "Informació",
  				$$slots: { default: [create_default_slot_3] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	iconbutton.$on("click", /*click_handler*/ ctx[9]);

  	const block = {
  		c: function create() {
  			internal.create_component(iconbutton.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(iconbutton, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const iconbutton_changes = {};

  			if (dirty & /*$$scope*/ 2048) {
  				iconbutton_changes.$$scope = { dirty, ctx };
  			}

  			iconbutton.$set(iconbutton_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(iconbutton.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(iconbutton.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(iconbutton, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_2.name,
  		type: "slot",
  		source: "(52:6) <Section align=\\\"end\\\" toolbar>",
  		ctx
  	});

  	return block;
  }

  // (40:4) <Row>
  function create_default_slot_1$1(ctx) {
  	let t0;
  	let t1;
  	let current;

  	const section0 = new Section({
  			props: {
  				$$slots: { default: [create_default_slot_6] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const section1 = new Section({
  			props: {
  				align: "middle",
  				toolbar: true,
  				$$slots: { default: [create_default_slot_4] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const section2 = new Section({
  			props: {
  				align: "end",
  				toolbar: true,
  				$$slots: { default: [create_default_slot_2] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			internal.create_component(section0.$$.fragment);
  			t0 = internal.space();
  			internal.create_component(section1.$$.fragment);
  			t1 = internal.space();
  			internal.create_component(section2.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(section0, target, anchor);
  			internal.insert_dev(target, t0, anchor);
  			internal.mount_component(section1, target, anchor);
  			internal.insert_dev(target, t1, anchor);
  			internal.mount_component(section2, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const section0_changes = {};

  			if (dirty & /*$$scope*/ 2048) {
  				section0_changes.$$scope = { dirty, ctx };
  			}

  			section0.$set(section0_changes);
  			const section1_changes = {};

  			if (dirty & /*$$scope*/ 2048) {
  				section1_changes.$$scope = { dirty, ctx };
  			}

  			section1.$set(section1_changes);
  			const section2_changes = {};

  			if (dirty & /*$$scope, modal_show, show*/ 2053) {
  				section2_changes.$$scope = { dirty, ctx };
  			}

  			section2.$set(section2_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(section0.$$.fragment, local);
  			internal.transition_in(section1.$$.fragment, local);
  			internal.transition_in(section2.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(section0.$$.fragment, local);
  			internal.transition_out(section1.$$.fragment, local);
  			internal.transition_out(section2.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(section0, detaching);
  			if (detaching) internal.detach_dev(t0);
  			internal.destroy_component(section1, detaching);
  			if (detaching) internal.detach_dev(t1);
  			internal.destroy_component(section2, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_1$1.name,
  		type: "slot",
  		source: "(40:4) <Row>",
  		ctx
  	});

  	return block;
  }

  // (39:2) <TopAppBar variant="short" {dense} {prominent} bind:collapsed>
  function create_default_slot$5(ctx) {
  	let current;

  	const row = new Row({
  			props: {
  				$$slots: { default: [create_default_slot_1$1] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			internal.create_component(row.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(row, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const row_changes = {};

  			if (dirty & /*$$scope, modal_show, show*/ 2053) {
  				row_changes.$$scope = { dirty, ctx };
  			}

  			row.$set(row_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(row.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(row.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(row, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot$5.name,
  		type: "slot",
  		source: "(39:2) <TopAppBar variant=\\\"short\\\" {dense} {prominent} bind:collapsed>",
  		ctx
  	});

  	return block;
  }

  function create_fragment$e(ctx) {
  	let updating_show;
  	let t0;
  	let div1;
  	let updating_collapsed;
  	let t1;
  	let div0;
  	let Adjust_action;
  	let current;
  	let dispose;

  	function modal_show_binding(value) {
  		/*modal_show_binding*/ ctx[8].call(null, value);
  	}

  	let modal_props = {};

  	if (/*modal_show*/ ctx[2] !== void 0) {
  		modal_props.show = /*modal_show*/ ctx[2];
  	}

  	const modal = new Modal({ props: modal_props, $$inline: true });
  	internal.binding_callbacks.push(() => internal.bind(modal, "show", modal_show_binding));

  	function topappbar_collapsed_binding(value) {
  		/*topappbar_collapsed_binding*/ ctx[10].call(null, value);
  	}

  	let topappbar_props = {
  		variant: "short",
  		dense: /*dense*/ ctx[3],
  		prominent: /*prominent*/ ctx[4],
  		$$slots: { default: [create_default_slot$5] },
  		$$scope: { ctx }
  	};

  	if (/*collapsed*/ ctx[1] !== void 0) {
  		topappbar_props.collapsed = /*collapsed*/ ctx[1];
  	}

  	const topappbar = new TopAppBar({ props: topappbar_props, $$inline: true });
  	internal.binding_callbacks.push(() => internal.bind(topappbar, "collapsed", topappbar_collapsed_binding));

  	const block = {
  		c: function create() {
  			internal.create_component(modal.$$.fragment);
  			t0 = internal.space();
  			div1 = internal.element("div");
  			internal.create_component(topappbar.$$.fragment);
  			t1 = internal.space();
  			div0 = internal.element("div");
  			internal.add_location(div0, file$b, 65, 2, 1415);
  			internal.attr_dev(div1, "class", "top-app-bar-container flexor");
  			internal.add_location(div1, file$b, 37, 0, 746);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.mount_component(modal, target, anchor);
  			internal.insert_dev(target, t0, anchor);
  			internal.insert_dev(target, div1, anchor);
  			internal.mount_component(topappbar, div1, null);
  			internal.append_dev(div1, t1);
  			internal.append_dev(div1, div0);
  			current = true;
  			if (remount) dispose();
  			dispose = internal.action_destroyer(Adjust_action = /*Adjust*/ ctx[6].call(null, div0));
  		},
  		p: function update(ctx, [dirty]) {
  			const modal_changes = {};

  			if (!updating_show && dirty & /*modal_show*/ 4) {
  				updating_show = true;
  				modal_changes.show = /*modal_show*/ ctx[2];
  				internal.add_flush_callback(() => updating_show = false);
  			}

  			modal.$set(modal_changes);
  			const topappbar_changes = {};

  			if (dirty & /*$$scope, modal_show, show*/ 2053) {
  				topappbar_changes.$$scope = { dirty, ctx };
  			}

  			if (!updating_collapsed && dirty & /*collapsed*/ 2) {
  				updating_collapsed = true;
  				topappbar_changes.collapsed = /*collapsed*/ ctx[1];
  				internal.add_flush_callback(() => updating_collapsed = false);
  			}

  			topappbar.$set(topappbar_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(modal.$$.fragment, local);
  			internal.transition_in(topappbar.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(modal.$$.fragment, local);
  			internal.transition_out(topappbar.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(modal, detaching);
  			if (detaching) internal.detach_dev(t0);
  			if (detaching) internal.detach_dev(div1);
  			internal.destroy_component(topappbar);
  			dispose();
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$e.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function changeDrawerState() {
  	console.info("update", stateDrawer);

  	//tateDrawer.update(n => n = !n);
  	stateDrawer.set(function () {
  		return true;
  	});
  }

  function openInfoDialog() {
  	openModalInfo = true;
  }

  function instance$a($$self, $$props, $$invalidate) {
  	let dense = false;
  	let prominent = false;
  	let variant = "fixed";
  	let collapsed = false;
  	let title = "Title";
  	let Adjust = ShortFixedAdjust;
  	let { show = false } = $$props;
  	let modal_show = false;
  	const writable_props = ["show"];

  	Object.keys($$props).forEach(key => {
  		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<TopBar> was created with unknown prop '${key}'`);
  	});

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("TopBar", $$slots, []);

  	function modal_show_binding(value) {
  		modal_show = value;
  		$$invalidate(2, modal_show);
  	}

  	const click_handler = () => {
  		$$invalidate(2, modal_show = true);
  		$$invalidate(0, show = false);
  	};

  	function topappbar_collapsed_binding(value) {
  		collapsed = value;
  		$$invalidate(1, collapsed);
  	}

  	$$self.$set = $$props => {
  		if ("show" in $$props) $$invalidate(0, show = $$props.show);
  	};

  	$$self.$capture_state = () => ({
  		stateDrawer,
  		Modal,
  		TopAppBar,
  		Row,
  		Section,
  		Title: Title$1,
  		ShortFixedAdjust,
  		IconButton,
  		dense,
  		prominent,
  		variant,
  		collapsed,
  		title,
  		Adjust,
  		show,
  		modal_show,
  		changeDrawerState,
  		openInfoDialog
  	});

  	$$self.$inject_state = $$props => {
  		if ("dense" in $$props) $$invalidate(3, dense = $$props.dense);
  		if ("prominent" in $$props) $$invalidate(4, prominent = $$props.prominent);
  		if ("variant" in $$props) variant = $$props.variant;
  		if ("collapsed" in $$props) $$invalidate(1, collapsed = $$props.collapsed);
  		if ("title" in $$props) $$invalidate(5, title = $$props.title);
  		if ("Adjust" in $$props) $$invalidate(6, Adjust = $$props.Adjust);
  		if ("show" in $$props) $$invalidate(0, show = $$props.show);
  		if ("modal_show" in $$props) $$invalidate(2, modal_show = $$props.modal_show);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		show,
  		collapsed,
  		modal_show,
  		dense,
  		prominent,
  		title,
  		Adjust,
  		variant,
  		modal_show_binding,
  		click_handler,
  		topappbar_collapsed_binding
  	];
  }

  class TopBar extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$a, create_fragment$e, internal.safe_not_equal, { show: 0 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "TopBar",
  			options,
  			id: create_fragment$e.name
  		});
  	}

  	get show() {
  		throw new Error("<TopBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set show(value) {
  		throw new Error("<TopBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  const mapBoxAccessToken ="";

  // https://docs.mapbox.com/help/glossary/access-token/
  mapbox.accessToken = mapBoxAccessToken;
  const keyApp = {};

  /* src/Components/Map.svelte generated by Svelte v3.21.0 */
  const file$c = "src/Components/Map.svelte";

  // (43:2) {#if map}
  function create_if_block$3(ctx) {
  	let current;
  	const default_slot_template = /*$$slots*/ ctx[7].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

  	const block = {
  		c: function create() {
  			if (default_slot) default_slot.c();
  		},
  		m: function mount(target, anchor) {
  			if (default_slot) {
  				default_slot.m(target, anchor);
  			}

  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 64) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[6], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null));
  				}
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (default_slot) default_slot.d(detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_if_block$3.name,
  		type: "if",
  		source: "(43:2) {#if map}",
  		ctx
  	});

  	return block;
  }

  function create_fragment$f(ctx) {
  	let div;
  	let current;
  	let if_block = /*map*/ ctx[1] && create_if_block$3(ctx);

  	const block = {
  		c: function create() {
  			div = internal.element("div");
  			if (if_block) if_block.c();
  			internal.attr_dev(div, "id", "map");
  			internal.attr_dev(div, "class", "svelte-f1etbr");
  			internal.add_location(div, file$c, 41, 0, 582);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, div, anchor);
  			if (if_block) if_block.m(div, null);
  			/*div_binding*/ ctx[8](div);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			if (/*map*/ ctx[1]) {
  				if (if_block) {
  					if_block.p(ctx, dirty);

  					if (dirty & /*map*/ 2) {
  						internal.transition_in(if_block, 1);
  					}
  				} else {
  					if_block = create_if_block$3(ctx);
  					if_block.c();
  					internal.transition_in(if_block, 1);
  					if_block.m(div, null);
  				}
  			} else if (if_block) {
  				internal.group_outros();

  				internal.transition_out(if_block, 1, 1, () => {
  					if_block = null;
  				});

  				internal.check_outros();
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(if_block);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(if_block);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(div);
  			if (if_block) if_block.d();
  			/*div_binding*/ ctx[8](null);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$f.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$b($$self, $$props, $$invalidate) {
  	svelte.setContext(keyApp, { getMap: () => map });
  	let { lat } = $$props;
  	let { lon } = $$props;
  	let { zoom } = $$props;
  	let { style } = $$props;
  	let container;
  	let map;

  	svelte.onMount(() => {
  		$$invalidate(1, map = new mapbox.Map({
  				container,
  				style,
  				hash: true,
  				center: [lon, lat],
  				zoom,
  				attributionControl: false
  			}));
  	});

  	const writable_props = ["lat", "lon", "zoom", "style"];

  	Object.keys($$props).forEach(key => {
  		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Map> was created with unknown prop '${key}'`);
  	});

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Map", $$slots, ['default']);

  	function div_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(0, container = $$value);
  		});
  	}

  	$$self.$set = $$props => {
  		if ("lat" in $$props) $$invalidate(2, lat = $$props.lat);
  		if ("lon" in $$props) $$invalidate(3, lon = $$props.lon);
  		if ("zoom" in $$props) $$invalidate(4, zoom = $$props.zoom);
  		if ("style" in $$props) $$invalidate(5, style = $$props.style);
  		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		onMount: svelte.onMount,
  		setContext: svelte.setContext,
  		mapbox,
  		keyApp,
  		lat,
  		lon,
  		zoom,
  		style,
  		container,
  		map
  	});

  	$$self.$inject_state = $$props => {
  		if ("lat" in $$props) $$invalidate(2, lat = $$props.lat);
  		if ("lon" in $$props) $$invalidate(3, lon = $$props.lon);
  		if ("zoom" in $$props) $$invalidate(4, zoom = $$props.zoom);
  		if ("style" in $$props) $$invalidate(5, style = $$props.style);
  		if ("container" in $$props) $$invalidate(0, container = $$props.container);
  		if ("map" in $$props) $$invalidate(1, map = $$props.map);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [container, map, lat, lon, zoom, style, $$scope, $$slots, div_binding];
  }

  class Map$1 extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$b, create_fragment$f, internal.safe_not_equal, { lat: 2, lon: 3, zoom: 4, style: 5 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Map",
  			options,
  			id: create_fragment$f.name
  		});

  		const { ctx } = this.$$;
  		const props = options.props || {};

  		if (/*lat*/ ctx[2] === undefined && !("lat" in props)) {
  			console.warn("<Map> was created without expected prop 'lat'");
  		}

  		if (/*lon*/ ctx[3] === undefined && !("lon" in props)) {
  			console.warn("<Map> was created without expected prop 'lon'");
  		}

  		if (/*zoom*/ ctx[4] === undefined && !("zoom" in props)) {
  			console.warn("<Map> was created without expected prop 'zoom'");
  		}

  		if (/*style*/ ctx[5] === undefined && !("style" in props)) {
  			console.warn("<Map> was created without expected prop 'style'");
  		}
  	}

  	get lat() {
  		throw new Error("<Map>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set lat(value) {
  		throw new Error("<Map>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get lon() {
  		throw new Error("<Map>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set lon(value) {
  		throw new Error("<Map>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get zoom() {
  		throw new Error("<Map>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set zoom(value) {
  		throw new Error("<Map>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get style() {
  		throw new Error("<Map>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set style(value) {
  		throw new Error("<Map>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* src/Components/MapAttribution.svelte generated by Svelte v3.21.0 */

  function create_fragment$g(ctx) {
  	const block = {
  		c: internal.noop,
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: internal.noop,
  		p: internal.noop,
  		i: internal.noop,
  		o: internal.noop,
  		d: internal.noop
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$g.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$c($$self, $$props, $$invalidate) {
  	const { getMap } = svelte.getContext(keyApp);
  	const map = getMap();
  	map.addControl(new mapbox.AttributionControl({ compact: true }));
  	const writable_props = [];

  	Object.keys($$props).forEach(key => {
  		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<MapAttribution> was created with unknown prop '${key}'`);
  	});

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("MapAttribution", $$slots, []);
  	$$self.$capture_state = () => ({ getContext: svelte.getContext, mapbox, keyApp, getMap, map });
  	return [];
  }

  class MapAttribution extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$c, create_fragment$g, internal.safe_not_equal, {});

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "MapAttribution",
  			options,
  			id: create_fragment$g.name
  		});
  	}
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics$5 = function(d, b) {
      extendStatics$5 = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics$5(d, b);
  };

  function __extends$5(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics$5(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign$5 = function() {
      __assign$5 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign$5.apply(this, arguments);
  };

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics$6 = function(d, b) {
      extendStatics$6 = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics$6(d, b);
  };

  function __extends$6(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics$6(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign$6 = function() {
      __assign$6 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign$6.apply(this, arguments);
  };

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var _a, _b;
  var cssClasses$5 = {
      LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
      LIST_ITEM_CLASS: 'mdc-list-item',
      LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
      LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
      LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
      LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
      ROOT: 'mdc-list',
  };
  var evolutionClassNameMap = (_a = {},
      _a["" + cssClasses$5.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-list-item--activated',
      _a["" + cssClasses$5.LIST_ITEM_CLASS] = 'mdc-list-item',
      _a["" + cssClasses$5.LIST_ITEM_DISABLED_CLASS] = 'mdc-list-item--disabled',
      _a["" + cssClasses$5.LIST_ITEM_SELECTED_CLASS] = 'mdc-list-item--selected',
      _a["" + cssClasses$5.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-list-item__primary-text',
      _a["" + cssClasses$5.ROOT] = 'mdc-list',
      _a);
  var deprecatedClassNameMap = (_b = {},
      _b["" + cssClasses$5.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-deprecated-list-item--activated',
      _b["" + cssClasses$5.LIST_ITEM_CLASS] = 'mdc-deprecated-list-item',
      _b["" + cssClasses$5.LIST_ITEM_DISABLED_CLASS] = 'mdc-deprecated-list-item--disabled',
      _b["" + cssClasses$5.LIST_ITEM_SELECTED_CLASS] = 'mdc-deprecated-list-item--selected',
      _b["" + cssClasses$5.LIST_ITEM_TEXT_CLASS] = 'mdc-deprecated-list-item__text',
      _b["" + cssClasses$5.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-deprecated-list-item__primary-text',
      _b["" + cssClasses$5.ROOT] = 'mdc-deprecated-list',
      _b);
  var strings$4 = {
      ACTION_EVENT: 'MDCList:action',
      ARIA_CHECKED: 'aria-checked',
      ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
      ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
      ARIA_CURRENT: 'aria-current',
      ARIA_DISABLED: 'aria-disabled',
      ARIA_ORIENTATION: 'aria-orientation',
      ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
      ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
      ARIA_SELECTED: 'aria-selected',
      ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
      ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
      CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
      CHECKBOX_SELECTOR: 'input[type="checkbox"]',
      CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$5.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$5.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses$5.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$5.LIST_ITEM_CLASS] + " a\n  ",
      DEPRECATED_SELECTOR: '.mdc-deprecated-list',
      FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$5.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$5.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$5.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$5.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$5.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$5.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses$5.LIST_ITEM_CLASS] + " input[type=\"radio\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$5.LIST_ITEM_CLASS] + " input[type=\"checkbox\"]:not(:disabled)\n  ",
      RADIO_SELECTOR: 'input[type="radio"]',
      SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]',
  };
  var numbers$3 = {
      UNSET_INDEX: -1,
      TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
  };

  /**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   *
   * @param evt keyboard event to be prevented.
   */
  var preventDefaultEvent = function (evt) {
      var target = evt.target;
      if (!target) {
          return;
      }
      var tagName = ("" + target.tagName).toLowerCase();
      if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
          evt.preventDefault();
      }
  };

  /**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  /**
   * Initializes a state object for typeahead. Use the same reference for calls to
   * typeahead functions.
   *
   * @return The current state of the typeahead process. Each state reference
   *     represents a typeahead instance as the reference is typically mutated
   *     in-place.
   */
  function initState() {
      var state = {
          bufferClearTimeout: 0,
          currentFirstChar: '',
          sortedIndexCursor: 0,
          typeaheadBuffer: '',
      };
      return state;
  }
  /**
   * Initializes typeahead state by indexing the current list items by primary
   * text into the sortedIndexByFirstChar data structure.
   *
   * @param listItemCount numer of items in the list
   * @param getPrimaryTextByItemIndex function that returns the primary text at a
   *     given index
   *
   * @return Map that maps the first character of the primary text to the full
   *     list text and it's index
   */
  function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
      var sortedIndexByFirstChar = new Map();
      // Aggregate item text to index mapping
      for (var i = 0; i < listItemCount; i++) {
          var primaryText = getPrimaryTextByItemIndex(i).trim();
          if (!primaryText) {
              continue;
          }
          var firstChar = primaryText[0].toLowerCase();
          if (!sortedIndexByFirstChar.has(firstChar)) {
              sortedIndexByFirstChar.set(firstChar, []);
          }
          sortedIndexByFirstChar.get(firstChar).push({ text: primaryText.toLowerCase(), index: i });
      }
      // Sort the mapping
      // TODO(b/157162694): Investigate replacing forEach with Map.values()
      sortedIndexByFirstChar.forEach(function (values) {
          values.sort(function (first, second) {
              return first.index - second.index;
          });
      });
      return sortedIndexByFirstChar;
  }
  /**
   * Given the next desired character from the user, it attempts to find the next
   * list option matching the buffer. Wraps around if at the end of options.
   *
   * @param opts Options and accessors
   *   - nextChar - the next character to match against items
   *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
   *   - focusedItemIndex - the index of the currently focused item
   *   - focusItemAtIndex - function that focuses a list item at given index
   *   - skipFocus - whether or not to focus the matched item
   *   - isItemAtIndexDisabled - function that determines whether an item at a
   *        given index is disabled
   * @param state The typeahead state instance. See `initState`.
   *
   * @return The index of the matched item, or -1 if no match.
   */
  function matchItem(opts, state) {
      var nextChar = opts.nextChar, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, focusedItemIndex = opts.focusedItemIndex, skipFocus = opts.skipFocus, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
      clearTimeout(state.bufferClearTimeout);
      state.bufferClearTimeout = setTimeout(function () {
          clearBuffer(state);
      }, numbers$3.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
      state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
      var index;
      if (state.typeaheadBuffer.length === 1) {
          index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
      }
      else {
          index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
      }
      if (index !== -1 && !skipFocus) {
          focusItemAtIndex(index);
      }
      return index;
  }
  /**
   * Matches the user's single input character in the buffer to the
   * next option that begins with such character. Wraps around if at
   * end of options. Returns -1 if no match is found.
   */
  function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
      var firstChar = state.typeaheadBuffer[0];
      var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
      if (!itemsMatchingFirstChar) {
          return -1;
      }
      // Has the same firstChar been recently matched?
      // Also, did starting index remain the same between key presses?
      // If both hold true, simply increment index.
      if (firstChar === state.currentFirstChar &&
          itemsMatchingFirstChar[state.sortedIndexCursor].index ===
              focusedItemIndex) {
          state.sortedIndexCursor =
              (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
          var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
          if (!isItemAtIndexDisabled(newIndex)) {
              return newIndex;
          }
      }
      // If we're here, it means one of the following happened:
      // - either firstChar or startingIndex has changed, invalidating the
      // cursor.
      // - The next item of typeahead is disabled, so we have to look further.
      state.currentFirstChar = firstChar;
      var newCursorPosition = -1;
      var cursorPosition;
      // Find the first non-disabled item as a fallback.
      for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
          if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
              newCursorPosition = cursorPosition;
              break;
          }
      }
      // Advance cursor to first item matching the firstChar that is positioned
      // after starting item. Cursor is unchanged from fallback if there's no
      // such item.
      for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
          if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex &&
              !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
              newCursorPosition = cursorPosition;
              break;
          }
      }
      if (newCursorPosition !== -1) {
          state.sortedIndexCursor = newCursorPosition;
          return itemsMatchingFirstChar[state.sortedIndexCursor].index;
      }
      return -1;
  }
  /**
   * Attempts to find the next item that matches all of the typeahead buffer.
   * Wraps around if at end of options. Returns -1 if no match is found.
   */
  function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
      var firstChar = state.typeaheadBuffer[0];
      var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
      if (!itemsMatchingFirstChar) {
          return -1;
      }
      // Do nothing if text already matches
      var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
      if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 &&
          !isItemAtIndexDisabled(startingItem.index)) {
          return startingItem.index;
      }
      // Find next item that matches completely; if no match, we'll eventually
      // loop around to same position
      var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
      var nextCursorPosition = -1;
      while (cursorPosition !== state.sortedIndexCursor) {
          var currentItem = itemsMatchingFirstChar[cursorPosition];
          var matches = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
          var isEnabled = !isItemAtIndexDisabled(currentItem.index);
          if (matches && isEnabled) {
              nextCursorPosition = cursorPosition;
              break;
          }
          cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
      }
      if (nextCursorPosition !== -1) {
          state.sortedIndexCursor = nextCursorPosition;
          return itemsMatchingFirstChar[state.sortedIndexCursor].index;
      }
      return -1;
  }
  /**
   * Whether or not the given typeahead instaance state is currently typing.
   *
   * @param state The typeahead state instance. See `initState`.
   */
  function isTypingInProgress(state) {
      return state.typeaheadBuffer.length > 0;
  }
  /**
   * Clears the typeahaed buffer so that it resets item matching to the first
   * character.
   *
   * @param state The typeahead state instance. See `initState`.
   */
  function clearBuffer(state) {
      state.typeaheadBuffer = '';
  }
  /**
   * Given a keydown event, it calculates whether or not to automatically focus a
   * list item depending on what was typed mimicing the typeahead functionality of
   * a standard <select> element that is open.
   *
   * @param opts Options and accessors
   *   - event - the KeyboardEvent to handle and parse
   *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
   *   - focusedItemIndex - the index of the currently focused item
   *   - focusItemAtIndex - function that focuses a list item at given index
   *   - isItemAtFocusedIndexDisabled - whether or not the currently focused item
   *      is disabled
   *   - isTargetListItem - whether or not the event target is a list item
   * @param state The typeahead state instance. See `initState`.
   *
   * @returns index of the item matched by the keydown. -1 if not matched.
   */
  function handleKeydown(opts, state) {
      var event = opts.event, isTargetListItem = opts.isTargetListItem, focusedItemIndex = opts.focusedItemIndex, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
      var isArrowLeft = normalizeKey(event) === 'ArrowLeft';
      var isArrowUp = normalizeKey(event) === 'ArrowUp';
      var isArrowRight = normalizeKey(event) === 'ArrowRight';
      var isArrowDown = normalizeKey(event) === 'ArrowDown';
      var isHome = normalizeKey(event) === 'Home';
      var isEnd = normalizeKey(event) === 'End';
      var isEnter = normalizeKey(event) === 'Enter';
      var isSpace = normalizeKey(event) === 'Spacebar';
      if (event.ctrlKey || event.metaKey || isArrowLeft || isArrowUp ||
          isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
          return -1;
      }
      var isCharacterKey = !isSpace && event.key.length === 1;
      if (isCharacterKey) {
          preventDefaultEvent(event);
          var matchItemOpts = {
              focusItemAtIndex: focusItemAtIndex,
              focusedItemIndex: focusedItemIndex,
              nextChar: event.key.toLowerCase(),
              sortedIndexByFirstChar: sortedIndexByFirstChar,
              skipFocus: false,
              isItemAtIndexDisabled: isItemAtIndexDisabled,
          };
          return matchItem(matchItemOpts, state);
      }
      if (!isSpace) {
          return -1;
      }
      if (isTargetListItem) {
          preventDefaultEvent(event);
      }
      var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
      if (typeaheadOnListItem) {
          var matchItemOpts = {
              focusItemAtIndex: focusItemAtIndex,
              focusedItemIndex: focusedItemIndex,
              nextChar: ' ',
              sortedIndexByFirstChar: sortedIndexByFirstChar,
              skipFocus: false,
              isItemAtIndexDisabled: isItemAtIndexDisabled,
          };
          // space participates in typeahead matching if in rapid typing mode
          return matchItem(matchItemOpts, state);
      }
      return -1;
  }

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  function isNumberArray(selectedIndex) {
      return selectedIndex instanceof Array;
  }
  var MDCListFoundation = /** @class */ (function (_super) {
      __extends$6(MDCListFoundation, _super);
      function MDCListFoundation(adapter) {
          var _this = _super.call(this, __assign$6(__assign$6({}, MDCListFoundation.defaultAdapter), adapter)) || this;
          _this.wrapFocus_ = false;
          _this.isVertical_ = true;
          _this.isSingleSelectionList_ = false;
          _this.selectedIndex_ = numbers$3.UNSET_INDEX;
          _this.focusedItemIndex = numbers$3.UNSET_INDEX;
          _this.useActivatedClass_ = false;
          _this.useSelectedAttr_ = false;
          _this.ariaCurrentAttrValue_ = null;
          _this.isCheckboxList_ = false;
          _this.isRadioList_ = false;
          _this.hasTypeahead = false;
          // Transiently holds current typeahead prefix from user.
          _this.typeaheadState = initState();
          _this.sortedIndexByFirstChar = new Map();
          return _this;
      }
      Object.defineProperty(MDCListFoundation, "strings", {
          get: function () {
              return strings$4;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCListFoundation, "cssClasses", {
          get: function () {
              return cssClasses$5;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCListFoundation, "numbers", {
          get: function () {
              return numbers$3;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCListFoundation, "defaultAdapter", {
          get: function () {
              return {
                  addClassForElementIndex: function () { return undefined; },
                  focusItemAtIndex: function () { return undefined; },
                  getAttributeForElementIndex: function () { return null; },
                  getFocusedElementIndex: function () { return 0; },
                  getListItemCount: function () { return 0; },
                  hasCheckboxAtIndex: function () { return false; },
                  hasRadioAtIndex: function () { return false; },
                  isCheckboxCheckedAtIndex: function () { return false; },
                  isFocusInsideList: function () { return false; },
                  isRootFocused: function () { return false; },
                  listItemAtIndexHasClass: function () { return false; },
                  notifyAction: function () { return undefined; },
                  removeClassForElementIndex: function () { return undefined; },
                  setAttributeForElementIndex: function () { return undefined; },
                  setCheckedCheckboxOrRadioAtIndex: function () { return undefined; },
                  setTabIndexForListItemChildren: function () { return undefined; },
                  getPrimaryTextAtIndex: function () { return ''; },
              };
          },
          enumerable: false,
          configurable: true
      });
      MDCListFoundation.prototype.layout = function () {
          if (this.adapter.getListItemCount() === 0) {
              return;
          }
          // TODO(b/172274142): consider all items when determining the list's type.
          if (this.adapter.hasCheckboxAtIndex(0)) {
              this.isCheckboxList_ = true;
          }
          else if (this.adapter.hasRadioAtIndex(0)) {
              this.isRadioList_ = true;
          }
          else {
              this.maybeInitializeSingleSelection();
          }
          if (this.hasTypeahead) {
              this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
          }
      };
      /**
       * Sets the private wrapFocus_ variable.
       */
      MDCListFoundation.prototype.setWrapFocus = function (value) {
          this.wrapFocus_ = value;
      };
      /**
       * Sets the isVertical_ private variable.
       */
      MDCListFoundation.prototype.setVerticalOrientation = function (value) {
          this.isVertical_ = value;
      };
      /**
       * Sets the isSingleSelectionList_ private variable.
       */
      MDCListFoundation.prototype.setSingleSelection = function (value) {
          this.isSingleSelectionList_ = value;
          if (value) {
              this.maybeInitializeSingleSelection();
          }
      };
      /**
       * Automatically determines whether the list is single selection list. If so,
       * initializes the internal state to match the selected item.
       */
      MDCListFoundation.prototype.maybeInitializeSingleSelection = function () {
          var listItemsCount = this.adapter.getListItemCount();
          for (var i = 0; i < listItemsCount; i++) {
              var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses$5.LIST_ITEM_SELECTED_CLASS);
              var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses$5.LIST_ITEM_ACTIVATED_CLASS);
              if (!(hasSelectedClass || hasActivatedClass)) {
                  continue;
              }
              if (hasActivatedClass) {
                  this.setUseActivatedClass(true);
              }
              this.isSingleSelectionList_ = true;
              this.selectedIndex_ = i;
              return;
          }
      };
      /**
       * Sets whether typeahead is enabled on the list.
       * @param hasTypeahead Whether typeahead is enabled.
       */
      MDCListFoundation.prototype.setHasTypeahead = function (hasTypeahead) {
          this.hasTypeahead = hasTypeahead;
          if (hasTypeahead) {
              this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
          }
      };
      /**
       * @return Whether typeahead is currently matching a user-specified prefix.
       */
      MDCListFoundation.prototype.isTypeaheadInProgress = function () {
          return this.hasTypeahead &&
              isTypingInProgress(this.typeaheadState);
      };
      /**
       * Sets the useActivatedClass_ private variable.
       */
      MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
          this.useActivatedClass_ = useActivated;
      };
      /**
       * Sets the useSelectedAttr_ private variable.
       */
      MDCListFoundation.prototype.setUseSelectedAttribute = function (useSelected) {
          this.useSelectedAttr_ = useSelected;
      };
      MDCListFoundation.prototype.getSelectedIndex = function () {
          return this.selectedIndex_;
      };
      MDCListFoundation.prototype.setSelectedIndex = function (index) {
          if (!this.isIndexValid_(index)) {
              return;
          }
          if (this.isCheckboxList_) {
              this.setCheckboxAtIndex_(index);
          }
          else if (this.isRadioList_) {
              this.setRadioAtIndex_(index);
          }
          else {
              this.setSingleSelectionAtIndex_(index);
          }
      };
      /**
       * Focus in handler for the list items.
       */
      MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
          if (listItemIndex >= 0) {
              this.focusedItemIndex = listItemIndex;
              this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '0');
              this.adapter.setTabIndexForListItemChildren(listItemIndex, '0');
          }
      };
      /**
       * Focus out handler for the list items.
       */
      MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
          var _this = this;
          if (listItemIndex >= 0) {
              this.adapter.setAttributeForElementIndex(listItemIndex, 'tabindex', '-1');
              this.adapter.setTabIndexForListItemChildren(listItemIndex, '-1');
          }
          /**
           * Between Focusout & Focusin some browsers do not have focus on any
           * element. Setting a delay to wait till the focus is moved to next element.
           */
          setTimeout(function () {
              if (!_this.adapter.isFocusInsideList()) {
                  _this.setTabindexToFirstSelectedOrFocusedItem();
              }
          }, 0);
      };
      /**
       * Key handler for the list.
       */
      MDCListFoundation.prototype.handleKeydown = function (event, isRootListItem, listItemIndex) {
          var _this = this;
          var isArrowLeft = normalizeKey(event) === 'ArrowLeft';
          var isArrowUp = normalizeKey(event) === 'ArrowUp';
          var isArrowRight = normalizeKey(event) === 'ArrowRight';
          var isArrowDown = normalizeKey(event) === 'ArrowDown';
          var isHome = normalizeKey(event) === 'Home';
          var isEnd = normalizeKey(event) === 'End';
          var isEnter = normalizeKey(event) === 'Enter';
          var isSpace = normalizeKey(event) === 'Spacebar';
          // Have to check both upper and lower case, because having caps lock on affects the value.
          var isLetterA = event.key === 'A' || event.key === 'a';
          if (this.adapter.isRootFocused()) {
              if (isArrowUp || isEnd) {
                  event.preventDefault();
                  this.focusLastElement();
              }
              else if (isArrowDown || isHome) {
                  event.preventDefault();
                  this.focusFirstElement();
              }
              if (this.hasTypeahead) {
                  var handleKeydownOpts = {
                      event: event,
                      focusItemAtIndex: function (index) {
                          _this.focusItemAtIndex(index);
                      },
                      focusedItemIndex: -1,
                      isTargetListItem: isRootListItem,
                      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                      isItemAtIndexDisabled: function (index) {
                          return _this.adapter.listItemAtIndexHasClass(index, cssClasses$5.LIST_ITEM_DISABLED_CLASS);
                      },
                  };
                  handleKeydown(handleKeydownOpts, this.typeaheadState);
              }
              return;
          }
          var currentIndex = this.adapter.getFocusedElementIndex();
          if (currentIndex === -1) {
              currentIndex = listItemIndex;
              if (currentIndex < 0) {
                  // If this event doesn't have a mdc-list-item ancestor from the
                  // current list (not from a sublist), return early.
                  return;
              }
          }
          if ((this.isVertical_ && isArrowDown) ||
              (!this.isVertical_ && isArrowRight)) {
              preventDefaultEvent(event);
              this.focusNextElement(currentIndex);
          }
          else if ((this.isVertical_ && isArrowUp) || (!this.isVertical_ && isArrowLeft)) {
              preventDefaultEvent(event);
              this.focusPrevElement(currentIndex);
          }
          else if (isHome) {
              preventDefaultEvent(event);
              this.focusFirstElement();
          }
          else if (isEnd) {
              preventDefaultEvent(event);
              this.focusLastElement();
          }
          else if (isLetterA && event.ctrlKey && this.isCheckboxList_) {
              event.preventDefault();
              this.toggleAll(this.selectedIndex_ === numbers$3.UNSET_INDEX ? [] : this.selectedIndex_);
          }
          else if (isEnter || isSpace) {
              if (isRootListItem) {
                  // Return early if enter key is pressed on anchor element which triggers
                  // synthetic MouseEvent event.
                  var target = event.target;
                  if (target && target.tagName === 'A' && isEnter) {
                      return;
                  }
                  preventDefaultEvent(event);
                  if (this.adapter.listItemAtIndexHasClass(currentIndex, cssClasses$5.LIST_ITEM_DISABLED_CLASS)) {
                      return;
                  }
                  if (!this.isTypeaheadInProgress()) {
                      if (this.isSelectableList_()) {
                          this.setSelectedIndexOnAction_(currentIndex);
                      }
                      this.adapter.notifyAction(currentIndex);
                  }
              }
          }
          if (this.hasTypeahead) {
              var handleKeydownOpts = {
                  event: event,
                  focusItemAtIndex: function (index) {
                      _this.focusItemAtIndex(index);
                  },
                  focusedItemIndex: this.focusedItemIndex,
                  isTargetListItem: isRootListItem,
                  sortedIndexByFirstChar: this.sortedIndexByFirstChar,
                  isItemAtIndexDisabled: function (index) { return _this.adapter.listItemAtIndexHasClass(index, cssClasses$5.LIST_ITEM_DISABLED_CLASS); },
              };
              handleKeydown(handleKeydownOpts, this.typeaheadState);
          }
      };
      /**
       * Click handler for the list.
       */
      MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
          if (index === numbers$3.UNSET_INDEX) {
              return;
          }
          if (this.adapter.listItemAtIndexHasClass(index, cssClasses$5.LIST_ITEM_DISABLED_CLASS)) {
              return;
          }
          if (this.isSelectableList_()) {
              this.setSelectedIndexOnAction_(index, toggleCheckbox);
          }
          this.adapter.notifyAction(index);
      };
      /**
       * Focuses the next element on the list.
       */
      MDCListFoundation.prototype.focusNextElement = function (index) {
          var count = this.adapter.getListItemCount();
          var nextIndex = index + 1;
          if (nextIndex >= count) {
              if (this.wrapFocus_) {
                  nextIndex = 0;
              }
              else {
                  // Return early because last item is already focused.
                  return index;
              }
          }
          this.focusItemAtIndex(nextIndex);
          return nextIndex;
      };
      /**
       * Focuses the previous element on the list.
       */
      MDCListFoundation.prototype.focusPrevElement = function (index) {
          var prevIndex = index - 1;
          if (prevIndex < 0) {
              if (this.wrapFocus_) {
                  prevIndex = this.adapter.getListItemCount() - 1;
              }
              else {
                  // Return early because first item is already focused.
                  return index;
              }
          }
          this.focusItemAtIndex(prevIndex);
          return prevIndex;
      };
      MDCListFoundation.prototype.focusFirstElement = function () {
          this.focusItemAtIndex(0);
          return 0;
      };
      MDCListFoundation.prototype.focusLastElement = function () {
          var lastIndex = this.adapter.getListItemCount() - 1;
          this.focusItemAtIndex(lastIndex);
          return lastIndex;
      };
      MDCListFoundation.prototype.focusInitialElement = function () {
          var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
          this.focusItemAtIndex(initialIndex);
          return initialIndex;
      };
      /**
       * @param itemIndex Index of the list item
       * @param isEnabled Sets the list item to enabled or disabled.
       */
      MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
          if (!this.isIndexValid_(itemIndex)) {
              return;
          }
          if (isEnabled) {
              this.adapter.removeClassForElementIndex(itemIndex, cssClasses$5.LIST_ITEM_DISABLED_CLASS);
              this.adapter.setAttributeForElementIndex(itemIndex, strings$4.ARIA_DISABLED, 'false');
          }
          else {
              this.adapter.addClassForElementIndex(itemIndex, cssClasses$5.LIST_ITEM_DISABLED_CLASS);
              this.adapter.setAttributeForElementIndex(itemIndex, strings$4.ARIA_DISABLED, 'true');
          }
      };
      MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
          if (this.selectedIndex_ === index) {
              return;
          }
          var selectedClassName = cssClasses$5.LIST_ITEM_SELECTED_CLASS;
          if (this.useActivatedClass_) {
              selectedClassName = cssClasses$5.LIST_ITEM_ACTIVATED_CLASS;
          }
          if (this.selectedIndex_ !== numbers$3.UNSET_INDEX) {
              this.adapter.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
          }
          this.setAriaForSingleSelectionAtIndex_(index);
          this.setTabindexAtIndex(index);
          if (index !== numbers$3.UNSET_INDEX) {
              this.adapter.addClassForElementIndex(index, selectedClassName);
          }
          this.selectedIndex_ = index;
      };
      /**
       * Sets aria attribute for single selection at given index.
       */
      MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function (index) {
          // Detect the presence of aria-current and get the value only during list
          // initialization when it is in unset state.
          if (this.selectedIndex_ === numbers$3.UNSET_INDEX) {
              this.ariaCurrentAttrValue_ =
                  this.adapter.getAttributeForElementIndex(index, strings$4.ARIA_CURRENT);
          }
          var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
          var ariaAttribute = isAriaCurrent ? strings$4.ARIA_CURRENT : strings$4.ARIA_SELECTED;
          if (this.selectedIndex_ !== numbers$3.UNSET_INDEX) {
              this.adapter.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
          }
          if (index !== numbers$3.UNSET_INDEX) {
              var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
              this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
          }
      };
      /**
       * Returns the attribute to use for indicating selection status.
       */
      MDCListFoundation.prototype.getSelectionAttribute = function () {
          return this.useSelectedAttr_ ? strings$4.ARIA_SELECTED : strings$4.ARIA_CHECKED;
      };
      /**
       * Toggles radio at give index. Radio doesn't change the checked state if it
       * is already checked.
       */
      MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
          var selectionAttribute = this.getSelectionAttribute();
          this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
          if (this.selectedIndex_ !== numbers$3.UNSET_INDEX) {
              this.adapter.setAttributeForElementIndex(this.selectedIndex_, selectionAttribute, 'false');
          }
          this.adapter.setAttributeForElementIndex(index, selectionAttribute, 'true');
          this.selectedIndex_ = index;
      };
      MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
          var selectionAttribute = this.getSelectionAttribute();
          for (var i = 0; i < this.adapter.getListItemCount(); i++) {
              var isChecked = false;
              if (index.indexOf(i) >= 0) {
                  isChecked = true;
              }
              this.adapter.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
              this.adapter.setAttributeForElementIndex(i, selectionAttribute, isChecked ? 'true' : 'false');
          }
          this.selectedIndex_ = index;
      };
      MDCListFoundation.prototype.setTabindexAtIndex = function (index) {
          if (this.focusedItemIndex === numbers$3.UNSET_INDEX && index !== 0) {
              // If some list item was selected set first list item's tabindex to -1.
              // Generally, tabindex is set to 0 on first list item of list that has no
              // preselected items.
              this.adapter.setAttributeForElementIndex(0, 'tabindex', '-1');
          }
          else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) {
              this.adapter.setAttributeForElementIndex(this.focusedItemIndex, 'tabindex', '-1');
          }
          // Set the previous selection's tabindex to -1. We need this because
          // in selection menus that are not visible, programmatically setting an
          // option will not change focus but will change where tabindex should be 0.
          if (!(this.selectedIndex_ instanceof Array) &&
              this.selectedIndex_ !== index) {
              this.adapter.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', '-1');
          }
          if (index !== numbers$3.UNSET_INDEX) {
              this.adapter.setAttributeForElementIndex(index, 'tabindex', '0');
          }
      };
      /**
       * @return Return true if it is single selectin list, checkbox list or radio
       *     list.
       */
      MDCListFoundation.prototype.isSelectableList_ = function () {
          return this.isSingleSelectionList_ || this.isCheckboxList_ ||
              this.isRadioList_;
      };
      MDCListFoundation.prototype.setTabindexToFirstSelectedOrFocusedItem = function () {
          var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
          this.setTabindexAtIndex(targetIndex);
      };
      MDCListFoundation.prototype.getFirstSelectedOrFocusedItemIndex = function () {
          var targetIndex = this.focusedItemIndex >= 0 ? this.focusedItemIndex : 0;
          if (this.isSelectableList_()) {
              if (typeof this.selectedIndex_ === 'number' &&
                  this.selectedIndex_ !== numbers$3.UNSET_INDEX) {
                  targetIndex = this.selectedIndex_;
              }
              else if (isNumberArray(this.selectedIndex_) &&
                  this.selectedIndex_.length > 0) {
                  targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) { return Math.min(currentIndex, minIndex); });
              }
          }
          return targetIndex;
      };
      MDCListFoundation.prototype.isIndexValid_ = function (index) {
          var _this = this;
          if (index instanceof Array) {
              if (!this.isCheckboxList_) {
                  throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
              }
              if (index.length === 0) {
                  return true;
              }
              else {
                  return index.some(function (i) { return _this.isIndexInRange_(i); });
              }
          }
          else if (typeof index === 'number') {
              if (this.isCheckboxList_) {
                  throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
              }
              return this.isIndexInRange_(index) ||
                  this.isSingleSelectionList_ && index === numbers$3.UNSET_INDEX;
          }
          else {
              return false;
          }
      };
      MDCListFoundation.prototype.isIndexInRange_ = function (index) {
          var listSize = this.adapter.getListItemCount();
          return index >= 0 && index < listSize;
      };
      /**
       * Sets selected index on user action, toggles checkbox / radio based on
       * toggleCheckbox value. User interaction should not toggle list item(s) when
       * disabled.
       */
      MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
          if (toggleCheckbox === void 0) { toggleCheckbox = true; }
          if (this.isCheckboxList_) {
              this.toggleCheckboxAtIndex_(index, toggleCheckbox);
          }
          else {
              this.setSelectedIndex(index);
          }
      };
      MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
          var selectionAttribute = this.getSelectionAttribute();
          var isChecked = this.adapter.isCheckboxCheckedAtIndex(index);
          if (toggleCheckbox) {
              isChecked = !isChecked;
              this.adapter.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
          }
          this.adapter.setAttributeForElementIndex(index, selectionAttribute, isChecked ? 'true' : 'false');
          // If none of the checkbox items are selected and selectedIndex is not
          // initialized then provide a default value.
          var selectedIndexes = this.selectedIndex_ === numbers$3.UNSET_INDEX ?
              [] :
              this.selectedIndex_.slice();
          if (isChecked) {
              selectedIndexes.push(index);
          }
          else {
              selectedIndexes = selectedIndexes.filter(function (i) { return i !== index; });
          }
          this.selectedIndex_ = selectedIndexes;
      };
      MDCListFoundation.prototype.focusItemAtIndex = function (index) {
          this.adapter.focusItemAtIndex(index);
          this.focusedItemIndex = index;
      };
      MDCListFoundation.prototype.toggleAll = function (currentlySelectedIndexes) {
          var count = this.adapter.getListItemCount();
          // If all items are selected, deselect everything.
          if (currentlySelectedIndexes.length === count) {
              this.setCheckboxAtIndex_([]);
          }
          else {
              // Otherwise select all enabled options.
              var allIndexes = [];
              for (var i = 0; i < count; i++) {
                  if (!this.adapter.listItemAtIndexHasClass(i, cssClasses$5.LIST_ITEM_DISABLED_CLASS) ||
                      currentlySelectedIndexes.indexOf(i) > -1) {
                      allIndexes.push(i);
                  }
              }
              this.setCheckboxAtIndex_(allIndexes);
          }
      };
      /**
       * Given the next desired character from the user, adds it to the typeahead
       * buffer. Then, attempts to find the next option matching the buffer. Wraps
       * around if at the end of options.
       *
       * @param nextChar The next character to add to the prefix buffer.
       * @param startingIndex The index from which to start matching. Only relevant
       *     when starting a new match sequence. To start a new match sequence,
       *     clear the buffer using `clearTypeaheadBuffer`, or wait for the buffer
       *     to clear after a set interval defined in list foundation. Defaults to
       *     the currently focused index.
       * @return The index of the matched item, or -1 if no match.
       */
      MDCListFoundation.prototype.typeaheadMatchItem = function (nextChar, startingIndex, skipFocus) {
          var _this = this;
          if (skipFocus === void 0) { skipFocus = false; }
          var opts = {
              focusItemAtIndex: function (index) {
                  _this.focusItemAtIndex(index);
              },
              focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
              nextChar: nextChar,
              sortedIndexByFirstChar: this.sortedIndexByFirstChar,
              skipFocus: skipFocus,
              isItemAtIndexDisabled: function (index) { return _this.adapter.listItemAtIndexHasClass(index, cssClasses$5.LIST_ITEM_DISABLED_CLASS); }
          };
          return matchItem(opts, this.typeaheadState);
      };
      /**
       * Initializes the MDCListTextAndIndex data structure by indexing the current
       * list items by primary text.
       *
       * @return The primary texts of all the list items sorted by first character.
       */
      MDCListFoundation.prototype.typeaheadInitSortedIndex = function () {
          return initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
      };
      /**
       * Clears the typeahead buffer.
       */
      MDCListFoundation.prototype.clearTypeaheadBuffer = function () {
          clearBuffer(this.typeaheadState);
      };
      return MDCListFoundation;
  }(MDCFoundation));

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses$6 = {
      ANIMATE: 'mdc-drawer--animate',
      CLOSING: 'mdc-drawer--closing',
      DISMISSIBLE: 'mdc-drawer--dismissible',
      MODAL: 'mdc-drawer--modal',
      OPEN: 'mdc-drawer--open',
      OPENING: 'mdc-drawer--opening',
      ROOT: 'mdc-drawer',
  };
  var strings$5 = {
      APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
      CLOSE_EVENT: 'MDCDrawer:closed',
      OPEN_EVENT: 'MDCDrawer:opened',
      SCRIM_SELECTOR: '.mdc-drawer-scrim',
      LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
      LIST_ITEM_ACTIVATED_SELECTOR: '.mdc-list-item--activated,.mdc-deprecated-list-item--activated',
  };

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCDismissibleDrawerFoundation = /** @class */ (function (_super) {
      __extends$5(MDCDismissibleDrawerFoundation, _super);
      function MDCDismissibleDrawerFoundation(adapter) {
          var _this = _super.call(this, __assign$5(__assign$5({}, MDCDismissibleDrawerFoundation.defaultAdapter), adapter)) || this;
          _this.animationFrame_ = 0;
          _this.animationTimer_ = 0;
          return _this;
      }
      Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
          get: function () {
              return strings$5;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
          get: function () {
              return cssClasses$6;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
          get: function () {
              // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
              return {
                  addClass: function () { return undefined; },
                  removeClass: function () { return undefined; },
                  hasClass: function () { return false; },
                  elementHasClass: function () { return false; },
                  notifyClose: function () { return undefined; },
                  notifyOpen: function () { return undefined; },
                  saveFocus: function () { return undefined; },
                  restoreFocus: function () { return undefined; },
                  focusActiveNavigationItem: function () { return undefined; },
                  trapFocus: function () { return undefined; },
                  releaseFocus: function () { return undefined; },
              };
              // tslint:enable:object-literal-sort-keys
          },
          enumerable: false,
          configurable: true
      });
      MDCDismissibleDrawerFoundation.prototype.destroy = function () {
          if (this.animationFrame_) {
              cancelAnimationFrame(this.animationFrame_);
          }
          if (this.animationTimer_) {
              clearTimeout(this.animationTimer_);
          }
      };
      /**
       * Opens the drawer from the closed state.
       */
      MDCDismissibleDrawerFoundation.prototype.open = function () {
          var _this = this;
          if (this.isOpen() || this.isOpening() || this.isClosing()) {
              return;
          }
          this.adapter.addClass(cssClasses$6.OPEN);
          this.adapter.addClass(cssClasses$6.ANIMATE);
          // Wait a frame once display is no longer "none", to establish basis for animation
          this.runNextAnimationFrame_(function () {
              _this.adapter.addClass(cssClasses$6.OPENING);
          });
          this.adapter.saveFocus();
      };
      /**
       * Closes the drawer from the open state.
       */
      MDCDismissibleDrawerFoundation.prototype.close = function () {
          if (!this.isOpen() || this.isOpening() || this.isClosing()) {
              return;
          }
          this.adapter.addClass(cssClasses$6.CLOSING);
      };
      /**
       * Returns true if the drawer is in the open position.
       * @return true if drawer is in open state.
       */
      MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
          return this.adapter.hasClass(cssClasses$6.OPEN);
      };
      /**
       * Returns true if the drawer is animating open.
       * @return true if drawer is animating open.
       */
      MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
          return this.adapter.hasClass(cssClasses$6.OPENING) ||
              this.adapter.hasClass(cssClasses$6.ANIMATE);
      };
      /**
       * Returns true if the drawer is animating closed.
       * @return true if drawer is animating closed.
       */
      MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
          return this.adapter.hasClass(cssClasses$6.CLOSING);
      };
      /**
       * Keydown handler to close drawer when key is escape.
       */
      MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
          var keyCode = evt.keyCode, key = evt.key;
          var isEscape = key === 'Escape' || keyCode === 27;
          if (isEscape) {
              this.close();
          }
      };
      /**
       * Handles the `transitionend` event when the drawer finishes opening/closing.
       */
      MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
          var OPENING = cssClasses$6.OPENING, CLOSING = cssClasses$6.CLOSING, OPEN = cssClasses$6.OPEN, ANIMATE = cssClasses$6.ANIMATE, ROOT = cssClasses$6.ROOT;
          // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.
          var isRootElement = this.isElement_(evt.target) &&
              this.adapter.elementHasClass(evt.target, ROOT);
          if (!isRootElement) {
              return;
          }
          if (this.isClosing()) {
              this.adapter.removeClass(OPEN);
              this.closed_();
              this.adapter.restoreFocus();
              this.adapter.notifyClose();
          }
          else {
              this.adapter.focusActiveNavigationItem();
              this.opened_();
              this.adapter.notifyOpen();
          }
          this.adapter.removeClass(ANIMATE);
          this.adapter.removeClass(OPENING);
          this.adapter.removeClass(CLOSING);
      };
      /**
       * Extension point for when drawer finishes open animation.
       */
      MDCDismissibleDrawerFoundation.prototype.opened_ = function () { }; // tslint:disable-line:no-empty
      /**
       * Extension point for when drawer finishes close animation.
       */
      MDCDismissibleDrawerFoundation.prototype.closed_ = function () { }; // tslint:disable-line:no-empty
      /**
       * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
       */
      MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame_ = function (callback) {
          var _this = this;
          cancelAnimationFrame(this.animationFrame_);
          this.animationFrame_ = requestAnimationFrame(function () {
              _this.animationFrame_ = 0;
              clearTimeout(_this.animationTimer_);
              _this.animationTimer_ = setTimeout(callback, 0);
          });
      };
      MDCDismissibleDrawerFoundation.prototype.isElement_ = function (element) {
          // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
          return Boolean(element.classList);
      };
      return MDCDismissibleDrawerFoundation;
  }(MDCFoundation));

  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  /* istanbul ignore next: subclass is not a branch statement */
  var MDCModalDrawerFoundation = /** @class */ (function (_super) {
      __extends$5(MDCModalDrawerFoundation, _super);
      function MDCModalDrawerFoundation() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      /**
       * Handles click event on scrim.
       */
      MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
          this.close();
      };
      /**
       * Called when drawer finishes open animation.
       */
      MDCModalDrawerFoundation.prototype.opened_ = function () {
          this.adapter.trapFocus();
      };
      /**
       * Called when drawer finishes close animation.
       */
      MDCModalDrawerFoundation.prototype.closed_ = function () {
          this.adapter.releaseFocus();
      };
      return MDCModalDrawerFoundation;
  }(MDCDismissibleDrawerFoundation));

  /* node_modules/@smui/drawer/Drawer.svelte generated by Svelte v3.21.0 */

  const file$d = "node_modules/@smui/drawer/Drawer.svelte";

  function create_fragment$h(ctx) {
  	let aside;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[24].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[23], null);

  	let aside_levels = [
  		{
  			class: classMap({
  				[/*className*/ ctx[1]]: true,
  				"mdc-drawer": true,
  				"mdc-drawer--dismissible": /*variant*/ ctx[2] === "dismissible",
  				"mdc-drawer--modal": /*variant*/ ctx[2] === "modal",
  				"smui-drawer__absolute": /*variant*/ ctx[2] === "modal" && !/*fixed*/ ctx[3],
  				.../*internalClasses*/ ctx[6]
  			})
  		},
  		/*$$restProps*/ ctx[8]
  	];

  	let aside_data = {};

  	for (let i = 0; i < aside_levels.length; i += 1) {
  		aside_data = internal.assign(aside_data, aside_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			aside = internal.element("aside");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(aside, aside_data);
  			internal.add_location(aside, file$d, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, aside, anchor);

  			if (default_slot) {
  				default_slot.m(aside, null);
  			}

  			/*aside_binding*/ ctx[25](aside);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, aside, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[7].call(null, aside)),
  				internal.listen_dev(aside, "keydown", /*keydown_handler*/ ctx[26], false, false, false),
  				internal.listen_dev(aside, "transitionend", /*transitionend_handler*/ ctx[27], false, false, false)
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 8388608) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[23], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[23], dirty, null));
  				}
  			}

  			internal.set_attributes(aside, internal.get_spread_update(aside_levels, [
  				dirty & /*classMap, className, variant, fixed, internalClasses*/ 78 && {
  					class: classMap({
  						[/*className*/ ctx[1]]: true,
  						"mdc-drawer": true,
  						"mdc-drawer--dismissible": /*variant*/ ctx[2] === "dismissible",
  						"mdc-drawer--modal": /*variant*/ ctx[2] === "modal",
  						"smui-drawer__absolute": /*variant*/ ctx[2] === "modal" && !/*fixed*/ ctx[3],
  						.../*internalClasses*/ ctx[6]
  					})
  				},
  				dirty & /*$$restProps*/ 256 && /*$$restProps*/ ctx[8]
  			]));

  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(aside);
  			if (default_slot) default_slot.d(detaching);
  			/*aside_binding*/ ctx[25](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$h.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance_1$4($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","class","variant","open","fixed","setOpen","isOpen","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	const { FocusTrap } = domFocusTrap;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let { variant = null } = $$props;
  	let { open = false } = $$props;
  	let { fixed = true } = $$props;
  	let element;
  	let instance;
  	let internalClasses = {};
  	let previousFocus;
  	let focusTrap;
  	let scrim = false;
  	svelte.setContext("SMUI:list:nav", true);
  	svelte.setContext("SMUI:list:item:nav", true);
  	svelte.setContext("SMUI:list:wrapFocus", true);
  	let oldVariant = variant;

  	svelte.onMount(() => {
  		focusTrap = new FocusTrap(element,
  		{
  				// Component handles focusing on active nav item.
  				skipInitialFocus: true
  			});

  		$$invalidate(5, instance = getInstance());
  		instance && instance.init();
  	});

  	svelte.onDestroy(() => {
  		instance && instance.destroy();
  		scrim && scrim.removeEventListener("SMUI:drawer:scrim:click", handleScrimClick);
  	});

  	function getInstance() {
  		if (scrim) {
  			scrim.removeEventListener("SMUI:drawer:scrim:click", handleScrimClick);
  		}

  		if (variant === "modal") {
  			scrim = element.parentNode.querySelector(".mdc-drawer-scrim");

  			if (scrim) {
  				scrim.addEventListener("SMUI:drawer:scrim:click", handleScrimClick);
  			}
  		}

  		const Foundation = ({
  			dismissible: MDCDismissibleDrawerFoundation,
  			modal: MDCModalDrawerFoundation
  		})[variant];

  		return Foundation
  		? new Foundation({
  					addClass,
  					removeClass,
  					hasClass,
  					elementHasClass: (element, className) => element.classList.contains(className),
  					saveFocus: () => previousFocus = document.activeElement,
  					restoreFocus: () => {
  						if (previousFocus && previousFocus.focus && element.contains(document.activeElement)) {
  							previousFocus.focus();
  						}
  					},
  					focusActiveNavigationItem: () => {
  						const activeNavItemEl = element.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");

  						if (activeNavItemEl) {
  							activeNavItemEl.focus();
  						}
  					},
  					notifyClose: () => {
  						$$invalidate(9, open = false);
  						dispatch(element, "MDCDrawer:closed");
  					},
  					notifyOpen: () => {
  						$$invalidate(9, open = true);
  						dispatch(element, "MDCDrawer:opened");
  					},
  					trapFocus: () => focusTrap.trapFocus(),
  					releaseFocus: () => focusTrap.releaseFocus()
  				})
  		: undefined;
  	}

  	function hasClass(className) {
  		return className in internalClasses
  		? internalClasses[className]
  		: getElement().classList.contains(className);
  	}

  	function addClass(className) {
  		if (!internalClasses[className]) {
  			$$invalidate(6, internalClasses[className] = true, internalClasses);
  		}
  	}

  	function removeClass(className) {
  		if (!(className in internalClasses) || internalClasses[className]) {
  			$$invalidate(6, internalClasses[className] = false, internalClasses);
  		}
  	}

  	function handleScrimClick() {
  		instance && instance.handleScrimClick();
  	}

  	function setOpen(value) {
  		$$invalidate(9, open = value);
  	}

  	function isOpen() {
  		return open;
  	}

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Drawer", $$slots, ['default']);

  	function aside_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(4, element = $$value);
  		});
  	}

  	const keydown_handler = event => instance && instance.handleKeydown(event);
  	const transitionend_handler = event => instance && instance.handleTransitionEnd(event);

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(8, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
  		if ("variant" in $$new_props) $$invalidate(2, variant = $$new_props.variant);
  		if ("open" in $$new_props) $$invalidate(9, open = $$new_props.open);
  		if ("fixed" in $$new_props) $$invalidate(3, fixed = $$new_props.fixed);
  		if ("$$scope" in $$new_props) $$invalidate(23, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		MDCDismissibleDrawerFoundation,
  		MDCModalDrawerFoundation,
  		domFocusTrap,
  		onMount: svelte.onMount,
  		onDestroy: svelte.onDestroy,
  		setContext: svelte.setContext,
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		useActions,
  		dispatch,
  		FocusTrap,
  		forwardEvents,
  		use,
  		className,
  		variant,
  		open,
  		fixed,
  		element,
  		instance,
  		internalClasses,
  		previousFocus,
  		focusTrap,
  		scrim,
  		oldVariant,
  		getInstance,
  		hasClass,
  		addClass,
  		removeClass,
  		handleScrimClick,
  		setOpen,
  		isOpen,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  		if ("variant" in $$props) $$invalidate(2, variant = $$new_props.variant);
  		if ("open" in $$props) $$invalidate(9, open = $$new_props.open);
  		if ("fixed" in $$props) $$invalidate(3, fixed = $$new_props.fixed);
  		if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
  		if ("instance" in $$props) $$invalidate(5, instance = $$new_props.instance);
  		if ("internalClasses" in $$props) $$invalidate(6, internalClasses = $$new_props.internalClasses);
  		if ("previousFocus" in $$props) previousFocus = $$new_props.previousFocus;
  		if ("focusTrap" in $$props) focusTrap = $$new_props.focusTrap;
  		if ("scrim" in $$props) scrim = $$new_props.scrim;
  		if ("oldVariant" in $$props) $$invalidate(16, oldVariant = $$new_props.oldVariant);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$self.$$.update = () => {
  		if ($$self.$$.dirty & /*oldVariant, variant, instance*/ 65572) {
  			 if (oldVariant !== variant) {
  				$$invalidate(16, oldVariant = variant);
  				instance && instance.destroy();
  				$$invalidate(6, internalClasses = {});
  				$$invalidate(5, instance = getInstance());
  				instance && instance.init();
  			}
  		}

  		if ($$self.$$.dirty & /*instance, open*/ 544) {
  			 if (instance && instance.isOpen() !== open) {
  				if (open) {
  					instance.open();
  				} else {
  					instance.close();
  				}
  			}
  		}
  	};

  	return [
  		use,
  		className,
  		variant,
  		fixed,
  		element,
  		instance,
  		internalClasses,
  		forwardEvents,
  		$$restProps,
  		open,
  		setOpen,
  		isOpen,
  		getElement,
  		previousFocus,
  		focusTrap,
  		scrim,
  		oldVariant,
  		FocusTrap,
  		getInstance,
  		hasClass,
  		addClass,
  		removeClass,
  		handleScrimClick,
  		$$scope,
  		$$slots,
  		aside_binding,
  		keydown_handler,
  		transitionend_handler
  	];
  }

  class Drawer extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(this, options, instance_1$4, create_fragment$h, internal.safe_not_equal, {
  			use: 0,
  			class: 1,
  			variant: 2,
  			open: 9,
  			fixed: 3,
  			setOpen: 10,
  			isOpen: 11,
  			getElement: 12
  		});

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Drawer",
  			options,
  			id: create_fragment$h.name
  		});
  	}

  	get use() {
  		throw new Error("<Drawer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<Drawer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get variant() {
  		throw new Error("<Drawer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set variant(value) {
  		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get open() {
  		throw new Error("<Drawer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set open(value) {
  		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get fixed() {
  		throw new Error("<Drawer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set fixed(value) {
  		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get setOpen() {
  		return this.$$.ctx[10];
  	}

  	set setOpen(value) {
  		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get isOpen() {
  		return this.$$.ctx[11];
  	}

  	set isOpen(value) {
  		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[12];
  	}

  	set getElement(value) {
  		throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  var AppContent = classAdderBuilder({
    class: 'mdc-drawer-app-content',
    component: Div,
  });

  var Content$1 = classAdderBuilder({
    class: 'mdc-drawer__content',
    component: Div,
  });

  var Header = classAdderBuilder({
    class: 'mdc-drawer__header',
    component: Div,
  });

  /* node_modules/@smui/common/H1.svelte generated by Svelte v3.21.0 */
  const file$e = "node_modules/@smui/common/H1.svelte";

  function create_fragment$i(ctx) {
  	let h1;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[6].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
  	let h1_levels = [/*$$restProps*/ ctx[3]];
  	let h1_data = {};

  	for (let i = 0; i < h1_levels.length; i += 1) {
  		h1_data = internal.assign(h1_data, h1_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			h1 = internal.element("h1");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(h1, h1_data);
  			internal.add_location(h1, file$e, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, h1, anchor);

  			if (default_slot) {
  				default_slot.m(h1, null);
  			}

  			/*h1_binding*/ ctx[7](h1);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, h1, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, h1))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 32) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
  				}
  			}

  			internal.set_attributes(h1, internal.get_spread_update(h1_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(h1);
  			if (default_slot) default_slot.d(detaching);
  			/*h1_binding*/ ctx[7](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$i.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$d($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { use = [] } = $$props;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let element = null;

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("H1", $$slots, ['default']);

  	function h1_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(1, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(3, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		useActions,
  		use,
  		forwardEvents,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		h1_binding
  	];
  }

  class H1 extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$d, create_fragment$i, internal.safe_not_equal, { use: 0, getElement: 4 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "H1",
  			options,
  			id: create_fragment$i.name
  		});
  	}

  	get use() {
  		throw new Error("<H1>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<H1>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[4];
  	}

  	set getElement(value) {
  		throw new Error("<H1>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  var Title$2 = classAdderBuilder({
    class: 'mdc-drawer__title',
    component: H1,
  });

  var Subtitle = classAdderBuilder({
    class: 'mdc-drawer__subtitle',
    component: H2,
  });

  /* node_modules/@smui/drawer/Scrim.svelte generated by Svelte v3.21.0 */

  // (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-drawer-scrim': true,     'smui-drawer-scrim__absolute': !fixed,   })}   on:click={(event) => dispatch(element, 'SMUI:drawer:scrim:click', event)}   {...$$restProps} >
  function create_default_slot$6(ctx) {
  	let current;
  	const default_slot_template = /*$$slots*/ ctx[8].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

  	const block = {
  		c: function create() {
  			if (default_slot) default_slot.c();
  		},
  		m: function mount(target, anchor) {
  			if (default_slot) {
  				default_slot.m(target, anchor);
  			}

  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 2048) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[11], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[11], dirty, null));
  				}
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (default_slot) default_slot.d(detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot$6.name,
  		type: "slot",
  		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-drawer-scrim': true,     'smui-drawer-scrim__absolute': !fixed,   })}   on:click={(event) => dispatch(element, 'SMUI:drawer:scrim:click', event)}   {...$$restProps} >",
  		ctx
  	});

  	return block;
  }

  function create_fragment$j(ctx) {
  	let switch_instance_anchor;
  	let current;

  	const switch_instance_spread_levels = [
  		{
  			use: [/*forwardEvents*/ ctx[5], .../*use*/ ctx[0]]
  		},
  		{
  			class: classMap({
  				[/*className*/ ctx[1]]: true,
  				"mdc-drawer-scrim": true,
  				"smui-drawer-scrim__absolute": !/*fixed*/ ctx[2]
  			})
  		},
  		/*$$restProps*/ ctx[6]
  	];

  	var switch_value = /*component*/ ctx[3];

  	function switch_props(ctx) {
  		let switch_instance_props = {
  			$$slots: { default: [create_default_slot$6] },
  			$$scope: { ctx }
  		};

  		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
  			switch_instance_props = internal.assign(switch_instance_props, switch_instance_spread_levels[i]);
  		}

  		return {
  			props: switch_instance_props,
  			$$inline: true
  		};
  	}

  	if (switch_value) {
  		var switch_instance = new switch_value(switch_props(ctx));
  		/*switch_instance_binding*/ ctx[9](switch_instance);
  		switch_instance.$on("click", /*click_handler*/ ctx[10]);
  	}

  	const block = {
  		c: function create() {
  			if (switch_instance) internal.create_component(switch_instance.$$.fragment);
  			switch_instance_anchor = internal.empty();
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			if (switch_instance) {
  				internal.mount_component(switch_instance, target, anchor);
  			}

  			internal.insert_dev(target, switch_instance_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, fixed, $$restProps*/ 103)
  			? internal.get_spread_update(switch_instance_spread_levels, [
  					dirty & /*forwardEvents, use*/ 33 && {
  						use: [/*forwardEvents*/ ctx[5], .../*use*/ ctx[0]]
  					},
  					dirty & /*classMap, className, fixed*/ 6 && {
  						class: classMap({
  							[/*className*/ ctx[1]]: true,
  							"mdc-drawer-scrim": true,
  							"smui-drawer-scrim__absolute": !/*fixed*/ ctx[2]
  						})
  					},
  					dirty & /*$$restProps*/ 64 && internal.get_spread_object(/*$$restProps*/ ctx[6])
  				])
  			: {};

  			if (dirty & /*$$scope*/ 2048) {
  				switch_instance_changes.$$scope = { dirty, ctx };
  			}

  			if (switch_value !== (switch_value = /*component*/ ctx[3])) {
  				if (switch_instance) {
  					internal.group_outros();
  					const old_component = switch_instance;

  					internal.transition_out(old_component.$$.fragment, 1, 0, () => {
  						internal.destroy_component(old_component, 1);
  					});

  					internal.check_outros();
  				}

  				if (switch_value) {
  					switch_instance = new switch_value(switch_props(ctx));
  					/*switch_instance_binding*/ ctx[9](switch_instance);
  					switch_instance.$on("click", /*click_handler*/ ctx[10]);
  					internal.create_component(switch_instance.$$.fragment);
  					internal.transition_in(switch_instance.$$.fragment, 1);
  					internal.mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
  				} else {
  					switch_instance = null;
  				}
  			} else if (switch_value) {
  				switch_instance.$set(switch_instance_changes);
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			if (switch_instance) internal.transition_in(switch_instance.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			if (switch_instance) internal.transition_out(switch_instance.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			/*switch_instance_binding*/ ctx[9](null);
  			if (detaching) internal.detach_dev(switch_instance_anchor);
  			if (switch_instance) internal.destroy_component(switch_instance, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$j.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$e($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","class","fixed","component","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let { fixed = true } = $$props;
  	let element;
  	let { component = Div } = $$props;

  	function getElement() {
  		return element.getElement();
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Scrim", $$slots, ['default']);

  	function switch_instance_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(4, element = $$value);
  		});
  	}

  	const click_handler = event => dispatch(element, "SMUI:drawer:scrim:click", event);

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(6, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
  		if ("fixed" in $$new_props) $$invalidate(2, fixed = $$new_props.fixed);
  		if ("component" in $$new_props) $$invalidate(3, component = $$new_props.component);
  		if ("$$scope" in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		dispatch,
  		Div,
  		forwardEvents,
  		use,
  		className,
  		fixed,
  		element,
  		component,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  		if ("fixed" in $$props) $$invalidate(2, fixed = $$new_props.fixed);
  		if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
  		if ("component" in $$props) $$invalidate(3, component = $$new_props.component);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		className,
  		fixed,
  		component,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$slots,
  		switch_instance_binding,
  		click_handler,
  		$$scope
  	];
  }

  class Scrim extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(this, options, instance$e, create_fragment$j, internal.safe_not_equal, {
  			use: 0,
  			class: 1,
  			fixed: 2,
  			component: 3,
  			getElement: 7
  		});

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Scrim",
  			options,
  			id: create_fragment$j.name
  		});
  	}

  	get use() {
  		throw new Error("<Scrim>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Scrim>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<Scrim>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<Scrim>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get fixed() {
  		throw new Error("<Scrim>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set fixed(value) {
  		throw new Error("<Scrim>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get component() {
  		throw new Error("<Scrim>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set component(value) {
  		throw new Error("<Scrim>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[7];
  	}

  	set getElement(value) {
  		throw new Error("<Scrim>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules/@smui/common/Ul.svelte generated by Svelte v3.21.0 */
  const file$f = "node_modules/@smui/common/Ul.svelte";

  function create_fragment$k(ctx) {
  	let ul;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[6].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
  	let ul_levels = [/*$$restProps*/ ctx[3]];
  	let ul_data = {};

  	for (let i = 0; i < ul_levels.length; i += 1) {
  		ul_data = internal.assign(ul_data, ul_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			ul = internal.element("ul");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(ul, ul_data);
  			internal.add_location(ul, file$f, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, ul, anchor);

  			if (default_slot) {
  				default_slot.m(ul, null);
  			}

  			/*ul_binding*/ ctx[7](ul);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, ul, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, ul))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 32) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
  				}
  			}

  			internal.set_attributes(ul, internal.get_spread_update(ul_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(ul);
  			if (default_slot) default_slot.d(detaching);
  			/*ul_binding*/ ctx[7](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$k.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$f($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { use = [] } = $$props;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let element = null;

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Ul", $$slots, ['default']);

  	function ul_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(1, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(3, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		useActions,
  		use,
  		forwardEvents,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		ul_binding
  	];
  }

  class Ul extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$f, create_fragment$k, internal.safe_not_equal, { use: 0, getElement: 4 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Ul",
  			options,
  			id: create_fragment$k.name
  		});
  	}

  	get use() {
  		throw new Error("<Ul>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Ul>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[4];
  	}

  	set getElement(value) {
  		throw new Error("<Ul>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules/@smui/common/Nav.svelte generated by Svelte v3.21.0 */
  const file$g = "node_modules/@smui/common/Nav.svelte";

  function create_fragment$l(ctx) {
  	let nav;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[6].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
  	let nav_levels = [/*$$restProps*/ ctx[3]];
  	let nav_data = {};

  	for (let i = 0; i < nav_levels.length; i += 1) {
  		nav_data = internal.assign(nav_data, nav_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			nav = internal.element("nav");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(nav, nav_data);
  			internal.add_location(nav, file$g, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, nav, anchor);

  			if (default_slot) {
  				default_slot.m(nav, null);
  			}

  			/*nav_binding*/ ctx[7](nav);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, nav, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, nav))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 32) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
  				}
  			}

  			internal.set_attributes(nav, internal.get_spread_update(nav_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(nav);
  			if (default_slot) default_slot.d(detaching);
  			/*nav_binding*/ ctx[7](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$l.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$g($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { use = [] } = $$props;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let element = null;

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Nav", $$slots, ['default']);

  	function nav_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(1, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(3, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		useActions,
  		use,
  		forwardEvents,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		nav_binding
  	];
  }

  class Nav extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$g, create_fragment$l, internal.safe_not_equal, { use: 0, getElement: 4 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Nav",
  			options,
  			id: create_fragment$l.name
  		});
  	}

  	get use() {
  		throw new Error("<Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[4];
  	}

  	set getElement(value) {
  		throw new Error("<Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules/@smui/list/List.svelte generated by Svelte v3.21.0 */

  // (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-deprecated-list': true,     'mdc-deprecated-list--non-interactive': nonInteractive,     'mdc-deprecated-list--dense': dense,     'mdc-deprecated-list--textual-list': textualList,     'mdc-deprecated-list--avatar-list': avatarList || selectionDialog,     'mdc-deprecated-list--icon-list': iconList,     'mdc-deprecated-list--image-list': imageList,     'mdc-deprecated-list--thumbnail-list': thumbnailList,     'mdc-deprecated-list--video-list': videoList,     'mdc-deprecated-list--two-line': twoLine,     'smui-list--three-line': threeLine && !twoLine,   })}   {role}   on:keydown={(event) =>     instance &&     instance.handleKeydown(       event,       event.target.classList.contains('mdc-deprecated-list-item'),       getListItemIndex(event.target)     )}   on:focusin={(event) =>     instance && instance.handleFocusIn(event, getListItemIndex(event.target))}   on:focusout={(event) =>     instance && instance.handleFocusOut(event, getListItemIndex(event.target))}   on:click={(event) =>     instance &&     instance.handleClick(       getListItemIndex(event.target),       !matches(event.target, 'input[type="checkbox"], input[type="radio"]')     )}   on:SMUI:list:item:mount={handleItemMount}   on:SMUI:list:item:unmount={handleItemUnmount}   on:SMUI:action={handleAction}   {...$$restProps} >
  function create_default_slot$7(ctx) {
  	let current;
  	const default_slot_template = /*$$slots*/ ctx[52].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[58], null);

  	const block = {
  		c: function create() {
  			if (default_slot) default_slot.c();
  		},
  		m: function mount(target, anchor) {
  			if (default_slot) {
  				default_slot.m(target, anchor);
  			}

  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			if (default_slot) {
  				if (default_slot.p && dirty[1] & /*$$scope*/ 134217728) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[58], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[58], dirty, null));
  				}
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (default_slot) default_slot.d(detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot$7.name,
  		type: "slot",
  		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-deprecated-list': true,     'mdc-deprecated-list--non-interactive': nonInteractive,     'mdc-deprecated-list--dense': dense,     'mdc-deprecated-list--textual-list': textualList,     'mdc-deprecated-list--avatar-list': avatarList || selectionDialog,     'mdc-deprecated-list--icon-list': iconList,     'mdc-deprecated-list--image-list': imageList,     'mdc-deprecated-list--thumbnail-list': thumbnailList,     'mdc-deprecated-list--video-list': videoList,     'mdc-deprecated-list--two-line': twoLine,     'smui-list--three-line': threeLine && !twoLine,   })}   {role}   on:keydown={(event) =>     instance &&     instance.handleKeydown(       event,       event.target.classList.contains('mdc-deprecated-list-item'),       getListItemIndex(event.target)     )}   on:focusin={(event) =>     instance && instance.handleFocusIn(event, getListItemIndex(event.target))}   on:focusout={(event) =>     instance && instance.handleFocusOut(event, getListItemIndex(event.target))}   on:click={(event) =>     instance &&     instance.handleClick(       getListItemIndex(event.target),       !matches(event.target, 'input[type=\\\"checkbox\\\"], input[type=\\\"radio\\\"]')     )}   on:SMUI:list:item:mount={handleItemMount}   on:SMUI:list:item:unmount={handleItemUnmount}   on:SMUI:action={handleAction}   {...$$restProps} >",
  		ctx
  	});

  	return block;
  }

  function create_fragment$m(ctx) {
  	let switch_instance_anchor;
  	let current;

  	const switch_instance_spread_levels = [
  		{
  			use: [/*forwardEvents*/ ctx[17], .../*use*/ ctx[0]]
  		},
  		{
  			class: classMap({
  				[/*className*/ ctx[1]]: true,
  				"mdc-deprecated-list": true,
  				"mdc-deprecated-list--non-interactive": /*nonInteractive*/ ctx[2],
  				"mdc-deprecated-list--dense": /*dense*/ ctx[3],
  				"mdc-deprecated-list--textual-list": /*textualList*/ ctx[4],
  				"mdc-deprecated-list--avatar-list": /*avatarList*/ ctx[5] || /*selectionDialog*/ ctx[18],
  				"mdc-deprecated-list--icon-list": /*iconList*/ ctx[6],
  				"mdc-deprecated-list--image-list": /*imageList*/ ctx[7],
  				"mdc-deprecated-list--thumbnail-list": /*thumbnailList*/ ctx[8],
  				"mdc-deprecated-list--video-list": /*videoList*/ ctx[9],
  				"mdc-deprecated-list--two-line": /*twoLine*/ ctx[10],
  				"smui-list--three-line": /*threeLine*/ ctx[11] && !/*twoLine*/ ctx[10]
  			})
  		},
  		{ role: /*role*/ ctx[15] },
  		/*$$restProps*/ ctx[23]
  	];

  	var switch_value = /*component*/ ctx[12];

  	function switch_props(ctx) {
  		let switch_instance_props = {
  			$$slots: { default: [create_default_slot$7] },
  			$$scope: { ctx }
  		};

  		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
  			switch_instance_props = internal.assign(switch_instance_props, switch_instance_spread_levels[i]);
  		}

  		return {
  			props: switch_instance_props,
  			$$inline: true
  		};
  	}

  	if (switch_value) {
  		var switch_instance = new switch_value(switch_props(ctx));
  		/*switch_instance_binding*/ ctx[53](switch_instance);
  		switch_instance.$on("keydown", /*keydown_handler*/ ctx[54]);
  		switch_instance.$on("focusin", /*focusin_handler*/ ctx[55]);
  		switch_instance.$on("focusout", /*focusout_handler*/ ctx[56]);
  		switch_instance.$on("click", /*click_handler*/ ctx[57]);
  		switch_instance.$on("SMUI:list:item:mount", /*handleItemMount*/ ctx[19]);
  		switch_instance.$on("SMUI:list:item:unmount", /*handleItemUnmount*/ ctx[20]);
  		switch_instance.$on("SMUI:action", /*handleAction*/ ctx[21]);
  	}

  	const block = {
  		c: function create() {
  			if (switch_instance) internal.create_component(switch_instance.$$.fragment);
  			switch_instance_anchor = internal.empty();
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			if (switch_instance) {
  				internal.mount_component(switch_instance, target, anchor);
  			}

  			internal.insert_dev(target, switch_instance_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const switch_instance_changes = (dirty[0] & /*forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/ 8818687)
  			? internal.get_spread_update(switch_instance_spread_levels, [
  					dirty[0] & /*forwardEvents, use*/ 131073 && {
  						use: [/*forwardEvents*/ ctx[17], .../*use*/ ctx[0]]
  					},
  					dirty[0] & /*className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine*/ 266238 && {
  						class: classMap({
  							[/*className*/ ctx[1]]: true,
  							"mdc-deprecated-list": true,
  							"mdc-deprecated-list--non-interactive": /*nonInteractive*/ ctx[2],
  							"mdc-deprecated-list--dense": /*dense*/ ctx[3],
  							"mdc-deprecated-list--textual-list": /*textualList*/ ctx[4],
  							"mdc-deprecated-list--avatar-list": /*avatarList*/ ctx[5] || /*selectionDialog*/ ctx[18],
  							"mdc-deprecated-list--icon-list": /*iconList*/ ctx[6],
  							"mdc-deprecated-list--image-list": /*imageList*/ ctx[7],
  							"mdc-deprecated-list--thumbnail-list": /*thumbnailList*/ ctx[8],
  							"mdc-deprecated-list--video-list": /*videoList*/ ctx[9],
  							"mdc-deprecated-list--two-line": /*twoLine*/ ctx[10],
  							"smui-list--three-line": /*threeLine*/ ctx[11] && !/*twoLine*/ ctx[10]
  						})
  					},
  					dirty[0] & /*role*/ 32768 && { role: /*role*/ ctx[15] },
  					dirty[0] & /*$$restProps*/ 8388608 && internal.get_spread_object(/*$$restProps*/ ctx[23])
  				])
  			: {};

  			if (dirty[1] & /*$$scope*/ 134217728) {
  				switch_instance_changes.$$scope = { dirty, ctx };
  			}

  			if (switch_value !== (switch_value = /*component*/ ctx[12])) {
  				if (switch_instance) {
  					internal.group_outros();
  					const old_component = switch_instance;

  					internal.transition_out(old_component.$$.fragment, 1, 0, () => {
  						internal.destroy_component(old_component, 1);
  					});

  					internal.check_outros();
  				}

  				if (switch_value) {
  					switch_instance = new switch_value(switch_props(ctx));
  					/*switch_instance_binding*/ ctx[53](switch_instance);
  					switch_instance.$on("keydown", /*keydown_handler*/ ctx[54]);
  					switch_instance.$on("focusin", /*focusin_handler*/ ctx[55]);
  					switch_instance.$on("focusout", /*focusout_handler*/ ctx[56]);
  					switch_instance.$on("click", /*click_handler*/ ctx[57]);
  					switch_instance.$on("SMUI:list:item:mount", /*handleItemMount*/ ctx[19]);
  					switch_instance.$on("SMUI:list:item:unmount", /*handleItemUnmount*/ ctx[20]);
  					switch_instance.$on("SMUI:action", /*handleAction*/ ctx[21]);
  					internal.create_component(switch_instance.$$.fragment);
  					internal.transition_in(switch_instance.$$.fragment, 1);
  					internal.mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
  				} else {
  					switch_instance = null;
  				}
  			} else if (switch_value) {
  				switch_instance.$set(switch_instance_changes);
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			if (switch_instance) internal.transition_in(switch_instance.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			if (switch_instance) internal.transition_out(switch_instance.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			/*switch_instance_binding*/ ctx[53](null);
  			if (detaching) internal.detach_dev(switch_instance_anchor);
  			if (switch_instance) internal.destroy_component(switch_instance, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$m.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance_1$5($$self, $$props, $$invalidate) {
  	const omit_props_names = [
  		"use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","radiolist","checklist","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getElement"
  	];

  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	const { closest, matches } = ponyfill;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let { nonInteractive = false } = $$props;
  	let { dense = false } = $$props;
  	let { textualList = false } = $$props;
  	let { avatarList = false } = $$props;
  	let { iconList = false } = $$props;
  	let { imageList = false } = $$props;
  	let { thumbnailList = false } = $$props;
  	let { videoList = false } = $$props;
  	let { twoLine = false } = $$props;
  	let { threeLine = false } = $$props;
  	let { vertical = true } = $$props;
  	let { wrapFocus = svelte.getContext("SMUI:list:wrapFocus") || false } = $$props;
  	let { singleSelection = false } = $$props;
  	let { selectedIndex = -1 } = $$props;
  	let { radioList = false } = $$props;
  	let { checkList = false } = $$props;
  	let { hasTypeahead = false } = $$props;
  	let { radiolist = false } = $$props;

  	if (radiolist) {
  		radioList = true;
  	}

  	let { checklist = false } = $$props;

  	if (checklist) {
  		checkList = true;
  	}

  	let element;
  	let instance;
  	let items = [];
  	let role = svelte.getContext("SMUI:list:role");
  	let nav = svelte.getContext("SMUI:list:nav");
  	const itemAccessorMap = new WeakMap();
  	let selectionDialog = svelte.getContext("SMUI:dialog:selection");
  	let addLayoutListener = svelte.getContext("SMUI:addLayoutListener");
  	let removeLayoutListener;
  	let { component = nav ? Nav : Ul } = $$props;
  	svelte.setContext("SMUI:list:nonInteractive", nonInteractive);
  	svelte.setContext("SMUI:separator:context", "list");

  	if (!role) {
  		if (singleSelection) {
  			role = "listbox";
  			svelte.setContext("SMUI:list:item:role", "option");
  		} else if (radioList) {
  			role = "radiogroup";
  			svelte.setContext("SMUI:list:item:role", "radio");
  		} else if (checkList) {
  			role = "group";
  			svelte.setContext("SMUI:list:item:role", "checkbox");
  		} else {
  			role = "list";
  			svelte.setContext("SMUI:list:item:role", undefined);
  		}
  	}

  	if (addLayoutListener) {
  		removeLayoutListener = addLayoutListener(layout);
  	}

  	svelte.onMount(() => {
  		$$invalidate(14, instance = new MDCListFoundation({
  				addClassForElementIndex,
  				focusItemAtIndex,
  				getAttributeForElementIndex: (index, name) => getOrderedList()[index].getAttr(name),
  				getFocusedElementIndex: () => getOrderedList().map(accessor => accessor.element).indexOf(document.activeElement),
  				getListItemCount: () => items.length,
  				getPrimaryTextAtIndex,
  				hasCheckboxAtIndex: index => getOrderedList()[index].hasCheckbox,
  				hasRadioAtIndex: index => getOrderedList()[index].hasRadio,
  				isCheckboxCheckedAtIndex: index => {
  					const listItem = getOrderedList()[index];
  					return listItem.hasCheckbox && listItem.checked;
  				},
  				isFocusInsideList: () => getElement() !== document.activeElement && getElement().contains(document.activeElement),
  				isRootFocused: () => document.activeElement === getElement(),
  				listItemAtIndexHasClass,
  				notifyAction: index => {
  					$$invalidate(24, selectedIndex = index);
  					dispatch(element, "MDCList:action", { index });
  				},
  				removeClassForElementIndex,
  				setAttributeForElementIndex,
  				setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
  					getOrderedList()[index].checked = isChecked;
  				},
  				setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
  					const listItem = getOrderedList()[listItemIndex];
  					const selector = "button:not(:disabled), a";

  					Array.prototype.forEach.call(listItem.element.querySelectorAll(selector), el => {
  						el.setAttribute("tabindex", tabIndexValue);
  					});
  				}
  			}));

  		dispatch(element, "SMUI:list:mount", {
  			get element() {
  				return getElement();
  			},
  			get items() {
  				return items;
  			},
  			get typeaheadInProgress() {
  				return instance.isTypeaheadInProgress();
  			},
  			typeaheadMatchItem(nextChar, startingIndex) {
  				return instance.typeaheadMatchItem(nextChar, startingIndex, /** skipFocus */
  				true);
  			},
  			getOrderedList,
  			focusItemAtIndex,
  			addClassForElementIndex,
  			removeClassForElementIndex,
  			// getAttributeForElementIndex,
  			setAttributeForElementIndex,
  			removeAttributeForElementIndex,
  			getPrimaryTextAtIndex
  		});

  		instance.init();

  		return () => {
  			instance.destroy();
  		};
  	});

  	svelte.onDestroy(() => {
  		if (removeLayoutListener) {
  			removeLayoutListener();
  		}
  	});

  	function handleItemMount(event) {
  		items.push(event.detail);
  		itemAccessorMap.set(event.detail.element, event.detail);

  		if (singleSelection && event.detail.selected) {
  			$$invalidate(24, selectedIndex = getListItemIndex(event.detail.element));
  		}

  		event.stopPropagation();
  	}

  	function handleItemUnmount(event) {
  		const idx = items.indexOf(event.detail);

  		if (idx !== -1) {
  			items.splice(idx, 1);
  			items = items;
  		}

  		itemAccessorMap.delete(event.detail.element);
  		event.stopPropagation();
  	}

  	function handleAction(event) {
  		if (radioList || checkList) {
  			const index = getListItemIndex(event.target);

  			if (index !== -1) {
  				const item = getOrderedList()[index];

  				if (radioList && !item.checked || checkList) {
  					item.checked = !item.checked;
  					item.activateRipple();

  					window.requestAnimationFrame(() => {
  						item.deactivateRipple();
  					});
  				}
  			}
  		}
  	}

  	function getOrderedList() {
  		return [...getElement().children].map(element => itemAccessorMap.get(element)).filter(accessor => accessor && accessor._smui_list_item_accessor);
  	}

  	function focusItemAtIndex(index) {
  		const accessor = getOrderedList()[index];
  		accessor && accessor.element.focus();
  	}

  	function listItemAtIndexHasClass(index, className) {
  		const accessor = getOrderedList()[index];
  		return accessor && accessor.hasClass(className);
  	}

  	function addClassForElementIndex(index, className) {
  		const accessor = getOrderedList()[index];
  		accessor && accessor.addClass(className);
  	}

  	function removeClassForElementIndex(index, className) {
  		const accessor = getOrderedList()[index];
  		accessor && accessor.removeClass(className);
  	}

  	// function getAttributeForElementIndex(index, name) {
  	//   const accessor = getOrderedList()[index];
  	//   accessor && accessor.getAttr(name, value);
  	// }
  	function setAttributeForElementIndex(index, name, value) {
  		const accessor = getOrderedList()[index];
  		accessor && accessor.addAttr(name, value);
  	}

  	function removeAttributeForElementIndex(index, name) {
  		const accessor = getOrderedList()[index];
  		accessor && accessor.removeAttr(name);
  	}

  	function getPrimaryTextAtIndex(index) {
  		const accessor = getOrderedList()[index];
  		return accessor && accessor.getPrimaryText();
  	}

  	function getListItemIndex(element) {
  		const nearestParent = closest(element, ".mdc-deprecated-list-item, .mdc-deprecated-list");

  		// Get the index of the element if it is a list item.
  		if (nearestParent && matches(nearestParent, ".mdc-deprecated-list-item")) {
  			return getOrderedList().map(item => item.element).indexOf(nearestParent);
  		}

  		return -1;
  	}

  	function layout() {
  		return instance.layout();
  	}

  	function setEnabled(...args) {
  		return instance.setEnabled(...args);
  	}

  	function getTypeaheadInProgress() {
  		return instance.isTypeaheadInProgress();
  	}

  	function getSelectedIndex() {
  		return instance.getSelectedIndex();
  	}

  	function getElement() {
  		return element.getElement();
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("List", $$slots, ['default']);

  	function switch_instance_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(13, element = $$value);
  		});
  	}

  	const keydown_handler = event => instance && instance.handleKeydown(event, event.target.classList.contains("mdc-deprecated-list-item"), getListItemIndex(event.target));
  	const focusin_handler = event => instance && instance.handleFocusIn(event, getListItemIndex(event.target));
  	const focusout_handler = event => instance && instance.handleFocusOut(event, getListItemIndex(event.target));
  	const click_handler = event => instance && instance.handleClick(getListItemIndex(event.target), !matches(event.target, "input[type=\"checkbox\"], input[type=\"radio\"]"));

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(23, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
  		if ("nonInteractive" in $$new_props) $$invalidate(2, nonInteractive = $$new_props.nonInteractive);
  		if ("dense" in $$new_props) $$invalidate(3, dense = $$new_props.dense);
  		if ("textualList" in $$new_props) $$invalidate(4, textualList = $$new_props.textualList);
  		if ("avatarList" in $$new_props) $$invalidate(5, avatarList = $$new_props.avatarList);
  		if ("iconList" in $$new_props) $$invalidate(6, iconList = $$new_props.iconList);
  		if ("imageList" in $$new_props) $$invalidate(7, imageList = $$new_props.imageList);
  		if ("thumbnailList" in $$new_props) $$invalidate(8, thumbnailList = $$new_props.thumbnailList);
  		if ("videoList" in $$new_props) $$invalidate(9, videoList = $$new_props.videoList);
  		if ("twoLine" in $$new_props) $$invalidate(10, twoLine = $$new_props.twoLine);
  		if ("threeLine" in $$new_props) $$invalidate(11, threeLine = $$new_props.threeLine);
  		if ("vertical" in $$new_props) $$invalidate(27, vertical = $$new_props.vertical);
  		if ("wrapFocus" in $$new_props) $$invalidate(28, wrapFocus = $$new_props.wrapFocus);
  		if ("singleSelection" in $$new_props) $$invalidate(29, singleSelection = $$new_props.singleSelection);
  		if ("selectedIndex" in $$new_props) $$invalidate(24, selectedIndex = $$new_props.selectedIndex);
  		if ("radioList" in $$new_props) $$invalidate(25, radioList = $$new_props.radioList);
  		if ("checkList" in $$new_props) $$invalidate(26, checkList = $$new_props.checkList);
  		if ("hasTypeahead" in $$new_props) $$invalidate(30, hasTypeahead = $$new_props.hasTypeahead);
  		if ("radiolist" in $$new_props) $$invalidate(31, radiolist = $$new_props.radiolist);
  		if ("checklist" in $$new_props) $$invalidate(32, checklist = $$new_props.checklist);
  		if ("component" in $$new_props) $$invalidate(12, component = $$new_props.component);
  		if ("$$scope" in $$new_props) $$invalidate(58, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		MDCListFoundation,
  		ponyfill,
  		onMount: svelte.onMount,
  		onDestroy: svelte.onDestroy,
  		getContext: svelte.getContext,
  		setContext: svelte.setContext,
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		dispatch,
  		Ul,
  		Nav,
  		closest,
  		matches,
  		forwardEvents,
  		use,
  		className,
  		nonInteractive,
  		dense,
  		textualList,
  		avatarList,
  		iconList,
  		imageList,
  		thumbnailList,
  		videoList,
  		twoLine,
  		threeLine,
  		vertical,
  		wrapFocus,
  		singleSelection,
  		selectedIndex,
  		radioList,
  		checkList,
  		hasTypeahead,
  		radiolist,
  		checklist,
  		element,
  		instance,
  		items,
  		role,
  		nav,
  		itemAccessorMap,
  		selectionDialog,
  		addLayoutListener,
  		removeLayoutListener,
  		component,
  		handleItemMount,
  		handleItemUnmount,
  		handleAction,
  		getOrderedList,
  		focusItemAtIndex,
  		listItemAtIndexHasClass,
  		addClassForElementIndex,
  		removeClassForElementIndex,
  		setAttributeForElementIndex,
  		removeAttributeForElementIndex,
  		getPrimaryTextAtIndex,
  		getListItemIndex,
  		layout,
  		setEnabled,
  		getTypeaheadInProgress,
  		getSelectedIndex,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  		if ("nonInteractive" in $$props) $$invalidate(2, nonInteractive = $$new_props.nonInteractive);
  		if ("dense" in $$props) $$invalidate(3, dense = $$new_props.dense);
  		if ("textualList" in $$props) $$invalidate(4, textualList = $$new_props.textualList);
  		if ("avatarList" in $$props) $$invalidate(5, avatarList = $$new_props.avatarList);
  		if ("iconList" in $$props) $$invalidate(6, iconList = $$new_props.iconList);
  		if ("imageList" in $$props) $$invalidate(7, imageList = $$new_props.imageList);
  		if ("thumbnailList" in $$props) $$invalidate(8, thumbnailList = $$new_props.thumbnailList);
  		if ("videoList" in $$props) $$invalidate(9, videoList = $$new_props.videoList);
  		if ("twoLine" in $$props) $$invalidate(10, twoLine = $$new_props.twoLine);
  		if ("threeLine" in $$props) $$invalidate(11, threeLine = $$new_props.threeLine);
  		if ("vertical" in $$props) $$invalidate(27, vertical = $$new_props.vertical);
  		if ("wrapFocus" in $$props) $$invalidate(28, wrapFocus = $$new_props.wrapFocus);
  		if ("singleSelection" in $$props) $$invalidate(29, singleSelection = $$new_props.singleSelection);
  		if ("selectedIndex" in $$props) $$invalidate(24, selectedIndex = $$new_props.selectedIndex);
  		if ("radioList" in $$props) $$invalidate(25, radioList = $$new_props.radioList);
  		if ("checkList" in $$props) $$invalidate(26, checkList = $$new_props.checkList);
  		if ("hasTypeahead" in $$props) $$invalidate(30, hasTypeahead = $$new_props.hasTypeahead);
  		if ("radiolist" in $$props) $$invalidate(31, radiolist = $$new_props.radiolist);
  		if ("checklist" in $$props) $$invalidate(32, checklist = $$new_props.checklist);
  		if ("element" in $$props) $$invalidate(13, element = $$new_props.element);
  		if ("instance" in $$props) $$invalidate(14, instance = $$new_props.instance);
  		if ("items" in $$props) items = $$new_props.items;
  		if ("role" in $$props) $$invalidate(15, role = $$new_props.role);
  		if ("nav" in $$props) nav = $$new_props.nav;
  		if ("selectionDialog" in $$props) $$invalidate(18, selectionDialog = $$new_props.selectionDialog);
  		if ("addLayoutListener" in $$props) addLayoutListener = $$new_props.addLayoutListener;
  		if ("removeLayoutListener" in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
  		if ("component" in $$props) $$invalidate(12, component = $$new_props.component);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$self.$$.update = () => {
  		if ($$self.$$.dirty[0] & /*instance, vertical*/ 134234112) {
  			 if (instance) {
  				instance.setVerticalOrientation(vertical);
  			}
  		}

  		if ($$self.$$.dirty[0] & /*instance, wrapFocus*/ 268451840) {
  			 if (instance) {
  				instance.setWrapFocus(wrapFocus);
  			}
  		}

  		if ($$self.$$.dirty[0] & /*instance, hasTypeahead*/ 1073758208) {
  			 if (instance) {
  				instance.setHasTypeahead(hasTypeahead);
  			}
  		}

  		if ($$self.$$.dirty[0] & /*instance, singleSelection*/ 536887296) {
  			 if (instance) {
  				instance.setSingleSelection(singleSelection);
  			}
  		}

  		if ($$self.$$.dirty[0] & /*instance, singleSelection, selectedIndex*/ 553664512) {
  			 if (instance && singleSelection && getSelectedIndex() !== selectedIndex) {
  				instance.setSelectedIndex(selectedIndex);
  			}
  		}
  	};

  	return [
  		use,
  		className,
  		nonInteractive,
  		dense,
  		textualList,
  		avatarList,
  		iconList,
  		imageList,
  		thumbnailList,
  		videoList,
  		twoLine,
  		threeLine,
  		component,
  		element,
  		instance,
  		role,
  		matches,
  		forwardEvents,
  		selectionDialog,
  		handleItemMount,
  		handleItemUnmount,
  		handleAction,
  		getListItemIndex,
  		$$restProps,
  		selectedIndex,
  		radioList,
  		checkList,
  		vertical,
  		wrapFocus,
  		singleSelection,
  		hasTypeahead,
  		radiolist,
  		checklist,
  		layout,
  		setEnabled,
  		getTypeaheadInProgress,
  		getSelectedIndex,
  		getElement,
  		items,
  		removeLayoutListener,
  		closest,
  		nav,
  		itemAccessorMap,
  		addLayoutListener,
  		getOrderedList,
  		focusItemAtIndex,
  		listItemAtIndexHasClass,
  		addClassForElementIndex,
  		removeClassForElementIndex,
  		setAttributeForElementIndex,
  		removeAttributeForElementIndex,
  		getPrimaryTextAtIndex,
  		$$slots,
  		switch_instance_binding,
  		keydown_handler,
  		focusin_handler,
  		focusout_handler,
  		click_handler,
  		$$scope
  	];
  }

  class List extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(
  			this,
  			options,
  			instance_1$5,
  			create_fragment$m,
  			internal.safe_not_equal,
  			{
  				use: 0,
  				class: 1,
  				nonInteractive: 2,
  				dense: 3,
  				textualList: 4,
  				avatarList: 5,
  				iconList: 6,
  				imageList: 7,
  				thumbnailList: 8,
  				videoList: 9,
  				twoLine: 10,
  				threeLine: 11,
  				vertical: 27,
  				wrapFocus: 28,
  				singleSelection: 29,
  				selectedIndex: 24,
  				radioList: 25,
  				checkList: 26,
  				hasTypeahead: 30,
  				radiolist: 31,
  				checklist: 32,
  				component: 12,
  				layout: 33,
  				setEnabled: 34,
  				getTypeaheadInProgress: 35,
  				getSelectedIndex: 36,
  				getElement: 37
  			},
  			[-1, -1]
  		);

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "List",
  			options,
  			id: create_fragment$m.name
  		});
  	}

  	get use() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get nonInteractive() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set nonInteractive(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get dense() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set dense(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get textualList() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set textualList(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get avatarList() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set avatarList(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get iconList() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set iconList(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get imageList() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set imageList(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get thumbnailList() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set thumbnailList(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get videoList() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set videoList(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get twoLine() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set twoLine(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get threeLine() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set threeLine(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get vertical() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set vertical(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get wrapFocus() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set wrapFocus(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get singleSelection() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set singleSelection(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get selectedIndex() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set selectedIndex(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get radioList() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set radioList(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get checkList() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set checkList(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get hasTypeahead() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set hasTypeahead(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get radiolist() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set radiolist(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get checklist() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set checklist(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get component() {
  		throw new Error("<List>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set component(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get layout() {
  		return this.$$.ctx[33];
  	}

  	set layout(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get setEnabled() {
  		return this.$$.ctx[34];
  	}

  	set setEnabled(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getTypeaheadInProgress() {
  		return this.$$.ctx[35];
  	}

  	set getTypeaheadInProgress(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getSelectedIndex() {
  		return this.$$.ctx[36];
  	}

  	set getSelectedIndex(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[37];
  	}

  	set getElement(value) {
  		throw new Error("<List>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules/@smui/common/Li.svelte generated by Svelte v3.21.0 */
  const file$h = "node_modules/@smui/common/Li.svelte";

  function create_fragment$n(ctx) {
  	let li;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[6].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
  	let li_levels = [/*$$restProps*/ ctx[3]];
  	let li_data = {};

  	for (let i = 0; i < li_levels.length; i += 1) {
  		li_data = internal.assign(li_data, li_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			li = internal.element("li");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(li, li_data);
  			internal.add_location(li, file$h, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, li, anchor);

  			if (default_slot) {
  				default_slot.m(li, null);
  			}

  			/*li_binding*/ ctx[7](li);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, li, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, li))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 32) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
  				}
  			}

  			internal.set_attributes(li, internal.get_spread_update(li_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(li);
  			if (default_slot) default_slot.d(detaching);
  			/*li_binding*/ ctx[7](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$n.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$h($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { use = [] } = $$props;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let element = null;

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Li", $$slots, ['default']);

  	function li_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(1, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(3, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		useActions,
  		use,
  		forwardEvents,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		li_binding
  	];
  }

  class Li extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$h, create_fragment$n, internal.safe_not_equal, { use: 0, getElement: 4 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Li",
  			options,
  			id: create_fragment$n.name
  		});
  	}

  	get use() {
  		throw new Error("<Li>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Li>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[4];
  	}

  	set getElement(value) {
  		throw new Error("<Li>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules/@smui/list/Item.svelte generated by Svelte v3.21.0 */
  const file$i = "node_modules/@smui/list/Item.svelte";

  // (56:3) {#if ripple}
  function create_if_block$4(ctx) {
  	let span;

  	const block = {
  		c: function create() {
  			span = internal.element("span");
  			internal.attr_dev(span, "class", "mdc-deprecated-list-item__ripple");
  			internal.add_location(span, file$i, 55, 15, 1654);
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, span, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(span);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_if_block$4.name,
  		type: "if",
  		source: "(56:3) {#if ripple}",
  		ctx
  	});

  	return block;
  }

  // (1:0) <svelte:component   this={component}   bind:this={element}   use={[     ...(nonInteractive       ? []       : [           [             Ripple,             {               ripple: !input,               unbounded: false,               color:                 (activated || selected) && color == null ? 'primary' : color,               disabled,               addClass,               removeClass,               addStyle,             },           ],         ]),     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-deprecated-list-item': true,     'mdc-deprecated-list-item--activated': activated,     'mdc-deprecated-list-item--selected': selected,     'mdc-deprecated-list-item--disabled': disabled,     'mdc-menu-item--selected': !nav && role === 'menuitem' && selected,     'smui-menu-item--non-interactive': nonInteractive,     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {...nav && activated ? { 'aria-current': 'page' } : {}}   {...!nav ? { role } : {}}   {...!nav && role === 'option'     ? { 'aria-selected': selected ? 'true' : 'false' }     : {}}   {...!nav && (role === 'radio' || role === 'checkbox')     ? { 'aria-checked': input && input.checked ? 'true' : 'false' }     : {}}   {...!nav ? { 'aria-disabled': disabled ? 'true' : 'false' } : {}}   {tabindex}   on:click={action}   on:keydown={handleKeydown}   on:SMUI:generic:input:mount={(event) => (input = event.detail)}   on:SMUI:generic:input:unmount={() => (input = undefined)}   {href}   {...internalAttrs}   {...$$restProps}   >
  function create_default_slot$8(ctx) {
  	let if_block_anchor;
  	let current;
  	let if_block = /*ripple*/ ctx[6] && create_if_block$4(ctx);
  	const default_slot_template = /*$$slots*/ ctx[37].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[41], null);

  	const block = {
  		c: function create() {
  			if (if_block) if_block.c();
  			if_block_anchor = internal.empty();
  			if (default_slot) default_slot.c();
  		},
  		m: function mount(target, anchor) {
  			if (if_block) if_block.m(target, anchor);
  			internal.insert_dev(target, if_block_anchor, anchor);

  			if (default_slot) {
  				default_slot.m(target, anchor);
  			}

  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			if (/*ripple*/ ctx[6]) {
  				if (if_block) ; else {
  					if_block = create_if_block$4(ctx);
  					if_block.c();
  					if_block.m(if_block_anchor.parentNode, if_block_anchor);
  				}
  			} else if (if_block) {
  				if_block.d(1);
  				if_block = null;
  			}

  			if (default_slot) {
  				if (default_slot.p && dirty[1] & /*$$scope*/ 1024) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[41], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[41], dirty, null));
  				}
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (if_block) if_block.d(detaching);
  			if (detaching) internal.detach_dev(if_block_anchor);
  			if (default_slot) default_slot.d(detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot$8.name,
  		type: "slot",
  		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[     ...(nonInteractive       ? []       : [           [             Ripple,             {               ripple: !input,               unbounded: false,               color:                 (activated || selected) && color == null ? 'primary' : color,               disabled,               addClass,               removeClass,               addStyle,             },           ],         ]),     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-deprecated-list-item': true,     'mdc-deprecated-list-item--activated': activated,     'mdc-deprecated-list-item--selected': selected,     'mdc-deprecated-list-item--disabled': disabled,     'mdc-menu-item--selected': !nav && role === 'menuitem' && selected,     'smui-menu-item--non-interactive': nonInteractive,     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {...nav && activated ? { 'aria-current': 'page' } : {}}   {...!nav ? { role } : {}}   {...!nav && role === 'option'     ? { 'aria-selected': selected ? 'true' : 'false' }     : {}}   {...!nav && (role === 'radio' || role === 'checkbox')     ? { 'aria-checked': input && input.checked ? 'true' : 'false' }     : {}}   {...!nav ? { 'aria-disabled': disabled ? 'true' : 'false' } : {}}   {tabindex}   on:click={action}   on:keydown={handleKeydown}   on:SMUI:generic:input:mount={(event) => (input = event.detail)}   on:SMUI:generic:input:unmount={() => (input = undefined)}   {href}   {...internalAttrs}   {...$$restProps}   >",
  		ctx
  	});

  	return block;
  }

  function create_fragment$o(ctx) {
  	let switch_instance_anchor;
  	let current;

  	const switch_instance_spread_levels = [
  		{
  			use: [
  				.../*nonInteractive*/ ctx[5]
  				? []
  				: [
  						[
  							Ripple,
  							{
  								ripple: !/*input*/ ctx[16],
  								unbounded: false,
  								color: (/*activated*/ ctx[7] || /*selected*/ ctx[0]) && /*color*/ ctx[4] == null
  								? "primary"
  								: /*color*/ ctx[4],
  								disabled: /*disabled*/ ctx[9],
  								addClass: /*addClass*/ ctx[20],
  								removeClass: /*removeClass*/ ctx[21],
  								addStyle: /*addStyle*/ ctx[22]
  							}
  						]
  					],
  				/*forwardEvents*/ ctx[18],
  				.../*use*/ ctx[1]
  			]
  		},
  		{
  			class: classMap({
  				[/*className*/ ctx[2]]: true,
  				"mdc-deprecated-list-item": true,
  				"mdc-deprecated-list-item--activated": /*activated*/ ctx[7],
  				"mdc-deprecated-list-item--selected": /*selected*/ ctx[0],
  				"mdc-deprecated-list-item--disabled": /*disabled*/ ctx[9],
  				"mdc-menu-item--selected": !/*nav*/ ctx[19] && /*role*/ ctx[8] === "menuitem" && /*selected*/ ctx[0],
  				"smui-menu-item--non-interactive": /*nonInteractive*/ ctx[5],
  				.../*internalClasses*/ ctx[13]
  			})
  		},
  		{
  			style: Object.entries(/*internalStyles*/ ctx[14]).map(func$4).concat([/*style*/ ctx[3]]).join(" ")
  		},
  		/*nav*/ ctx[19] && /*activated*/ ctx[7]
  		? { "aria-current": "page" }
  		: {},
  		!/*nav*/ ctx[19] ? { role: /*role*/ ctx[8] } : {},
  		!/*nav*/ ctx[19] && /*role*/ ctx[8] === "option"
  		? {
  				"aria-selected": /*selected*/ ctx[0] ? "true" : "false"
  			}
  		: {},
  		!/*nav*/ ctx[19] && (/*role*/ ctx[8] === "radio" || /*role*/ ctx[8] === "checkbox")
  		? {
  				"aria-checked": /*input*/ ctx[16] && /*input*/ ctx[16].checked
  				? "true"
  				: "false"
  			}
  		: {},
  		!/*nav*/ ctx[19]
  		? {
  				"aria-disabled": /*disabled*/ ctx[9] ? "true" : "false"
  			}
  		: {},
  		{ tabindex: /*tabindex*/ ctx[17] },
  		{ href: /*href*/ ctx[10] },
  		/*internalAttrs*/ ctx[15],
  		/*$$restProps*/ ctx[25]
  	];

  	var switch_value = /*component*/ ctx[11];

  	function switch_props(ctx) {
  		let switch_instance_props = {
  			$$slots: { default: [create_default_slot$8] },
  			$$scope: { ctx }
  		};

  		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
  			switch_instance_props = internal.assign(switch_instance_props, switch_instance_spread_levels[i]);
  		}

  		return {
  			props: switch_instance_props,
  			$$inline: true
  		};
  	}

  	if (switch_value) {
  		var switch_instance = new switch_value(switch_props(ctx));
  		/*switch_instance_binding*/ ctx[38](switch_instance);
  		switch_instance.$on("click", /*action*/ ctx[23]);
  		switch_instance.$on("keydown", /*handleKeydown*/ ctx[24]);
  		switch_instance.$on("SMUI:generic:input:mount", /*SMUI_generic_input_mount_handler*/ ctx[39]);
  		switch_instance.$on("SMUI:generic:input:unmount", /*SMUI_generic_input_unmount_handler*/ ctx[40]);
  	}

  	const block = {
  		c: function create() {
  			if (switch_instance) internal.create_component(switch_instance.$$.fragment);
  			switch_instance_anchor = internal.empty();
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			if (switch_instance) {
  				internal.mount_component(switch_instance, target, anchor);
  			}

  			internal.insert_dev(target, switch_instance_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const switch_instance_changes = (dirty[0] & /*nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, nav, role, internalClasses, internalStyles, style, tabindex, href, internalAttrs, $$restProps*/ 41936831)
  			? internal.get_spread_update(switch_instance_spread_levels, [
  					dirty[0] & /*nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use*/ 7668403 && {
  						use: [
  							.../*nonInteractive*/ ctx[5]
  							? []
  							: [
  									[
  										Ripple,
  										{
  											ripple: !/*input*/ ctx[16],
  											unbounded: false,
  											color: (/*activated*/ ctx[7] || /*selected*/ ctx[0]) && /*color*/ ctx[4] == null
  											? "primary"
  											: /*color*/ ctx[4],
  											disabled: /*disabled*/ ctx[9],
  											addClass: /*addClass*/ ctx[20],
  											removeClass: /*removeClass*/ ctx[21],
  											addStyle: /*addStyle*/ ctx[22]
  										}
  									]
  								],
  							/*forwardEvents*/ ctx[18],
  							.../*use*/ ctx[1]
  						]
  					},
  					dirty[0] & /*className, activated, selected, disabled, nav, role, nonInteractive, internalClasses*/ 533413 && {
  						class: classMap({
  							[/*className*/ ctx[2]]: true,
  							"mdc-deprecated-list-item": true,
  							"mdc-deprecated-list-item--activated": /*activated*/ ctx[7],
  							"mdc-deprecated-list-item--selected": /*selected*/ ctx[0],
  							"mdc-deprecated-list-item--disabled": /*disabled*/ ctx[9],
  							"mdc-menu-item--selected": !/*nav*/ ctx[19] && /*role*/ ctx[8] === "menuitem" && /*selected*/ ctx[0],
  							"smui-menu-item--non-interactive": /*nonInteractive*/ ctx[5],
  							.../*internalClasses*/ ctx[13]
  						})
  					},
  					dirty[0] & /*internalStyles, style*/ 16392 && {
  						style: Object.entries(/*internalStyles*/ ctx[14]).map(func$4).concat([/*style*/ ctx[3]]).join(" ")
  					},
  					dirty[0] & /*nav, activated*/ 524416 && internal.get_spread_object(/*nav*/ ctx[19] && /*activated*/ ctx[7]
  					? { "aria-current": "page" }
  					: {}),
  					dirty[0] & /*nav, role*/ 524544 && internal.get_spread_object(!/*nav*/ ctx[19] ? { role: /*role*/ ctx[8] } : {}),
  					dirty[0] & /*nav, role, selected*/ 524545 && internal.get_spread_object(!/*nav*/ ctx[19] && /*role*/ ctx[8] === "option"
  					? {
  							"aria-selected": /*selected*/ ctx[0] ? "true" : "false"
  						}
  					: {}),
  					dirty[0] & /*nav, role, input*/ 590080 && internal.get_spread_object(!/*nav*/ ctx[19] && (/*role*/ ctx[8] === "radio" || /*role*/ ctx[8] === "checkbox")
  					? {
  							"aria-checked": /*input*/ ctx[16] && /*input*/ ctx[16].checked
  							? "true"
  							: "false"
  						}
  					: {}),
  					dirty[0] & /*nav, disabled*/ 524800 && internal.get_spread_object(!/*nav*/ ctx[19]
  					? {
  							"aria-disabled": /*disabled*/ ctx[9] ? "true" : "false"
  						}
  					: {}),
  					dirty[0] & /*tabindex*/ 131072 && { tabindex: /*tabindex*/ ctx[17] },
  					dirty[0] & /*href*/ 1024 && { href: /*href*/ ctx[10] },
  					dirty[0] & /*internalAttrs*/ 32768 && internal.get_spread_object(/*internalAttrs*/ ctx[15]),
  					dirty[0] & /*$$restProps*/ 33554432 && internal.get_spread_object(/*$$restProps*/ ctx[25])
  				])
  			: {};

  			if (dirty[0] & /*ripple*/ 64 | dirty[1] & /*$$scope*/ 1024) {
  				switch_instance_changes.$$scope = { dirty, ctx };
  			}

  			if (switch_value !== (switch_value = /*component*/ ctx[11])) {
  				if (switch_instance) {
  					internal.group_outros();
  					const old_component = switch_instance;

  					internal.transition_out(old_component.$$.fragment, 1, 0, () => {
  						internal.destroy_component(old_component, 1);
  					});

  					internal.check_outros();
  				}

  				if (switch_value) {
  					switch_instance = new switch_value(switch_props(ctx));
  					/*switch_instance_binding*/ ctx[38](switch_instance);
  					switch_instance.$on("click", /*action*/ ctx[23]);
  					switch_instance.$on("keydown", /*handleKeydown*/ ctx[24]);
  					switch_instance.$on("SMUI:generic:input:mount", /*SMUI_generic_input_mount_handler*/ ctx[39]);
  					switch_instance.$on("SMUI:generic:input:unmount", /*SMUI_generic_input_unmount_handler*/ ctx[40]);
  					internal.create_component(switch_instance.$$.fragment);
  					internal.transition_in(switch_instance.$$.fragment, 1);
  					internal.mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
  				} else {
  					switch_instance = null;
  				}
  			} else if (switch_value) {
  				switch_instance.$set(switch_instance_changes);
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			if (switch_instance) internal.transition_in(switch_instance.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			if (switch_instance) internal.transition_out(switch_instance.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			/*switch_instance_binding*/ ctx[38](null);
  			if (detaching) internal.detach_dev(switch_instance_anchor);
  			if (switch_instance) internal.destroy_component(switch_instance, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$o.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  let counter = 0;
  const func$4 = ([name, value]) => `${name}: ${value};`;

  function instance$i($$self, $$props, $$invalidate) {
  	const omit_props_names = [
  		"use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","tabindex","inputId","href","component","getPrimaryText","getElement"
  	];

  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());

  	let uninitializedValue = () => {
  		
  	};

  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let { style = "" } = $$props;
  	let { color = null } = $$props;
  	let { nonInteractive = svelte.getContext("SMUI:list:nonInteractive") } = $$props;
  	svelte.setContext("SMUI:list:nonInteractive", undefined);
  	let { ripple = !nonInteractive } = $$props;
  	let { activated = false } = $$props;
  	let { role = svelte.getContext("SMUI:list:item:role") } = $$props;
  	svelte.setContext("SMUI:list:item:role", undefined);
  	let { selected = false } = $$props;
  	let { disabled = false } = $$props;
  	let { tabindex: tabindexProp = uninitializedValue } = $$props;
  	let { inputId = "SMUI-form-field-list-" + counter++ } = $$props;
  	let { href = null } = $$props;
  	let element;
  	let internalClasses = {};
  	let internalStyles = {};
  	let internalAttrs = {};
  	let input;
  	let addTabindexIfNoItemsSelectedRaf;
  	let nav = svelte.getContext("SMUI:list:item:nav");
  	let { component = nav ? href ? A : Span : Li } = $$props;
  	svelte.setContext("SMUI:generic:input:props", { id: inputId });

  	// Reset separator context, because we aren't directly under a list anymore.
  	svelte.setContext("SMUI:separator:context", undefined);

  	svelte.onMount(() => {
  		// Tabindex needs to be '0' if this is the first non-disabled list item, and
  		// no other item is selected.
  		if (!selected && !nonInteractive) {
  			let first = true;
  			let el = element;

  			while (el.previousSibling) {
  				el = el.previousSibling;

  				if (el.nodeType === 1 && el.classList.contains("mdc-deprecated-list-item") && !el.classList.contains("mdc-deprecated-list-item--disabled")) {
  					first = false;
  					break;
  				}
  			}

  			if (first) {
  				// This is first, so now set up a check that no other items are
  				// selected.
  				addTabindexIfNoItemsSelectedRaf = window.requestAnimationFrame(addTabindexIfNoItemsSelected);
  			}
  		}

  		const accessor = {
  			_smui_list_item_accessor: true,
  			get element() {
  				return getElement();
  			},
  			get selected() {
  				return selected;
  			},
  			set selected(value) {
  				$$invalidate(0, selected = value);
  			},
  			hasClass,
  			addClass,
  			removeClass,
  			getAttr,
  			addAttr,
  			removeAttr,
  			getPrimaryText,
  			// For inputs within item.
  			get checked() {
  				return input && input.checked;
  			},
  			set checked(value) {
  				if (input) {
  					$$invalidate(16, input.checked = value, input);
  				}
  			},
  			get hasCheckbox() {
  				return !!(input && input._smui_checkbox_accessor);
  			},
  			get hasRadio() {
  				return !!(input && input._smui_radio_accessor);
  			},
  			activateRipple() {
  				if (input) {
  					input.activateRipple();
  				}
  			},
  			deactivateRipple() {
  				if (input) {
  					input.deactivateRipple();
  				}
  			},
  			// For select options.
  			getValue() {
  				return $$restProps.value;
  			}
  		};

  		dispatch(element, "SMUI:list:item:mount", accessor);

  		return () => {
  			dispatch(element, "SMUI:list:item:unmount", accessor);
  		};
  	});

  	svelte.onDestroy(() => {
  		if (addTabindexIfNoItemsSelectedRaf) {
  			window.cancelAnimationFrame(addTabindexIfNoItemsSelectedRaf);
  		}
  	});

  	function hasClass(className) {
  		return className in internalClasses
  		? internalClasses[className]
  		: getElement().classList.contains(className);
  	}

  	function addClass(className) {
  		if (!internalClasses[className]) {
  			$$invalidate(13, internalClasses[className] = true, internalClasses);
  		}
  	}

  	function removeClass(className) {
  		if (!(className in internalClasses) || internalClasses[className]) {
  			$$invalidate(13, internalClasses[className] = false, internalClasses);
  		}
  	}

  	function addStyle(name, value) {
  		if (internalStyles[name] != value) {
  			if (value === "" || value == null) {
  				delete internalStyles[name];
  				$$invalidate(14, internalStyles);
  			} else {
  				$$invalidate(14, internalStyles[name] = value, internalStyles);
  			}
  		}
  	}

  	function getAttr(name) {
  		return name in internalAttrs
  		? internalAttrs[name]
  		: getElement().getAttribute(name);
  	}

  	function addAttr(name, value) {
  		if (internalAttrs[name] !== value) {
  			$$invalidate(15, internalAttrs[name] = value, internalAttrs);
  		}
  	}

  	function removeAttr(name) {
  		if (!(name in internalAttrs) || internalAttrs[name] != null) {
  			$$invalidate(15, internalAttrs[name] = undefined, internalAttrs);
  		}
  	}

  	function addTabindexIfNoItemsSelected() {
  		// Look through next siblings to see if none of them are selected.
  		let noneSelected = true;

  		let el = element;

  		while (el.nextSibling) {
  			el = el.nextSibling;

  			if (el.nodeType === 1 && el.classList.contains("mdc-deprecated-list-item") && el.attributes["tabindex"] && el.attributes["tabindex"].value === "0") {
  				noneSelected = false;
  				break;
  			}
  		}

  		if (noneSelected) {
  			// This is the first element, and no other element is selected, so the
  			// tabindex should be '0'.
  			$$invalidate(17, tabindex = "0");
  		}
  	}

  	function action(e) {
  		if (!disabled) {
  			dispatch(element, "SMUI:action", e);
  		}
  	}

  	function handleKeydown(e) {
  		const isEnter = e.key === "Enter" || e.keyCode === 13;
  		const isSpace = e.key === "Space" || e.keyCode === 32;

  		if (isEnter || isSpace) {
  			action(e);
  		}
  	}

  	function getPrimaryText() {
  		const element = getElement();
  		const primaryText = element.querySelector(".mdc-deprecated-list-item__primary-text");

  		if (primaryText) {
  			return primaryText.textContent;
  		}

  		const text = element.querySelector(".mdc-deprecated-list-item__text");

  		if (text) {
  			return text.textContent;
  		}

  		return element.textContent;
  	}

  	function getElement() {
  		return element.getElement();
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Item", $$slots, ['default']);

  	function switch_instance_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(12, element = $$value);
  		});
  	}

  	const SMUI_generic_input_mount_handler = event => $$invalidate(16, input = event.detail);
  	const SMUI_generic_input_unmount_handler = () => $$invalidate(16, input = undefined);

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(25, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
  		if ("style" in $$new_props) $$invalidate(3, style = $$new_props.style);
  		if ("color" in $$new_props) $$invalidate(4, color = $$new_props.color);
  		if ("nonInteractive" in $$new_props) $$invalidate(5, nonInteractive = $$new_props.nonInteractive);
  		if ("ripple" in $$new_props) $$invalidate(6, ripple = $$new_props.ripple);
  		if ("activated" in $$new_props) $$invalidate(7, activated = $$new_props.activated);
  		if ("role" in $$new_props) $$invalidate(8, role = $$new_props.role);
  		if ("selected" in $$new_props) $$invalidate(0, selected = $$new_props.selected);
  		if ("disabled" in $$new_props) $$invalidate(9, disabled = $$new_props.disabled);
  		if ("tabindex" in $$new_props) $$invalidate(26, tabindexProp = $$new_props.tabindex);
  		if ("inputId" in $$new_props) $$invalidate(27, inputId = $$new_props.inputId);
  		if ("href" in $$new_props) $$invalidate(10, href = $$new_props.href);
  		if ("component" in $$new_props) $$invalidate(11, component = $$new_props.component);
  		if ("$$scope" in $$new_props) $$invalidate(41, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		counter,
  		onMount: svelte.onMount,
  		onDestroy: svelte.onDestroy,
  		getContext: svelte.getContext,
  		setContext: svelte.setContext,
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		dispatch,
  		Ripple,
  		A,
  		Span,
  		Li,
  		forwardEvents,
  		uninitializedValue,
  		use,
  		className,
  		style,
  		color,
  		nonInteractive,
  		ripple,
  		activated,
  		role,
  		selected,
  		disabled,
  		tabindexProp,
  		inputId,
  		href,
  		element,
  		internalClasses,
  		internalStyles,
  		internalAttrs,
  		input,
  		addTabindexIfNoItemsSelectedRaf,
  		nav,
  		component,
  		hasClass,
  		addClass,
  		removeClass,
  		addStyle,
  		getAttr,
  		addAttr,
  		removeAttr,
  		addTabindexIfNoItemsSelected,
  		action,
  		handleKeydown,
  		getPrimaryText,
  		getElement,
  		tabindex
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("uninitializedValue" in $$props) $$invalidate(31, uninitializedValue = $$new_props.uninitializedValue);
  		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
  		if ("style" in $$props) $$invalidate(3, style = $$new_props.style);
  		if ("color" in $$props) $$invalidate(4, color = $$new_props.color);
  		if ("nonInteractive" in $$props) $$invalidate(5, nonInteractive = $$new_props.nonInteractive);
  		if ("ripple" in $$props) $$invalidate(6, ripple = $$new_props.ripple);
  		if ("activated" in $$props) $$invalidate(7, activated = $$new_props.activated);
  		if ("role" in $$props) $$invalidate(8, role = $$new_props.role);
  		if ("selected" in $$props) $$invalidate(0, selected = $$new_props.selected);
  		if ("disabled" in $$props) $$invalidate(9, disabled = $$new_props.disabled);
  		if ("tabindexProp" in $$props) $$invalidate(26, tabindexProp = $$new_props.tabindexProp);
  		if ("inputId" in $$props) $$invalidate(27, inputId = $$new_props.inputId);
  		if ("href" in $$props) $$invalidate(10, href = $$new_props.href);
  		if ("element" in $$props) $$invalidate(12, element = $$new_props.element);
  		if ("internalClasses" in $$props) $$invalidate(13, internalClasses = $$new_props.internalClasses);
  		if ("internalStyles" in $$props) $$invalidate(14, internalStyles = $$new_props.internalStyles);
  		if ("internalAttrs" in $$props) $$invalidate(15, internalAttrs = $$new_props.internalAttrs);
  		if ("input" in $$props) $$invalidate(16, input = $$new_props.input);
  		if ("addTabindexIfNoItemsSelectedRaf" in $$props) addTabindexIfNoItemsSelectedRaf = $$new_props.addTabindexIfNoItemsSelectedRaf;
  		if ("nav" in $$props) $$invalidate(19, nav = $$new_props.nav);
  		if ("component" in $$props) $$invalidate(11, component = $$new_props.component);
  		if ("tabindex" in $$props) $$invalidate(17, tabindex = $$new_props.tabindex);
  	};

  	let tabindex;

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	$$self.$$.update = () => {
  		if ($$self.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/ 67174945) {
  			 $$invalidate(17, tabindex = tabindexProp == uninitializedValue
  			? !nonInteractive && !disabled && (selected || input && input.checked) && "0" || "-1"
  			: tabindexProp);
  		}
  	};

  	return [
  		selected,
  		use,
  		className,
  		style,
  		color,
  		nonInteractive,
  		ripple,
  		activated,
  		role,
  		disabled,
  		href,
  		component,
  		element,
  		internalClasses,
  		internalStyles,
  		internalAttrs,
  		input,
  		tabindex,
  		forwardEvents,
  		nav,
  		addClass,
  		removeClass,
  		addStyle,
  		action,
  		handleKeydown,
  		$$restProps,
  		tabindexProp,
  		inputId,
  		getPrimaryText,
  		getElement,
  		addTabindexIfNoItemsSelectedRaf,
  		uninitializedValue,
  		hasClass,
  		getAttr,
  		addAttr,
  		removeAttr,
  		addTabindexIfNoItemsSelected,
  		$$slots,
  		switch_instance_binding,
  		SMUI_generic_input_mount_handler,
  		SMUI_generic_input_unmount_handler,
  		$$scope
  	];
  }

  class Item extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(
  			this,
  			options,
  			instance$i,
  			create_fragment$o,
  			internal.safe_not_equal,
  			{
  				use: 1,
  				class: 2,
  				style: 3,
  				color: 4,
  				nonInteractive: 5,
  				ripple: 6,
  				activated: 7,
  				role: 8,
  				selected: 0,
  				disabled: 9,
  				tabindex: 26,
  				inputId: 27,
  				href: 10,
  				component: 11,
  				getPrimaryText: 28,
  				getElement: 29
  			},
  			[-1, -1]
  		);

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Item",
  			options,
  			id: create_fragment$o.name
  		});
  	}

  	get use() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get style() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set style(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get color() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set color(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get nonInteractive() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set nonInteractive(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get ripple() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set ripple(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get activated() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set activated(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get role() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set role(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get selected() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set selected(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get disabled() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set disabled(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get tabindex() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set tabindex(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get inputId() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set inputId(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get href() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set href(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get component() {
  		throw new Error("<Item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set component(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getPrimaryText() {
  		return this.$$.ctx[28];
  	}

  	set getPrimaryText(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[29];
  	}

  	set getElement(value) {
  		throw new Error("<Item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  var Text = classAdderBuilder({
    class: 'mdc-deprecated-list-item__text',
    component: Span,
  });

  classAdderBuilder({
    class: 'mdc-deprecated-list-item__primary-text',
    component: Span,
  });

  classAdderBuilder({
    class: 'mdc-deprecated-list-item__secondary-text',
    component: Span,
  });

  /* node_modules/@smui/list/Graphic.svelte generated by Svelte v3.21.0 */

  const file$j = "node_modules/@smui/list/Graphic.svelte";

  function create_fragment$p(ctx) {
  	let span;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[8].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

  	let span_levels = [
  		{
  			class: classMap({
  				[/*className*/ ctx[1]]: true,
  				"mdc-deprecated-list-item__graphic": true,
  				"mdc-menu__selection-group-icon": /*menuSelectionGroup*/ ctx[4]
  			})
  		},
  		/*$$restProps*/ ctx[5]
  	];

  	let span_data = {};

  	for (let i = 0; i < span_levels.length; i += 1) {
  		span_data = internal.assign(span_data, span_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			span = internal.element("span");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(span, span_data);
  			internal.add_location(span, file$j, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, span, anchor);

  			if (default_slot) {
  				default_slot.m(span, null);
  			}

  			/*span_binding*/ ctx[9](span);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, span, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[3].call(null, span))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 128) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[7], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[7], dirty, null));
  				}
  			}

  			internal.set_attributes(span, internal.get_spread_update(span_levels, [
  				dirty & /*classMap, className, menuSelectionGroup*/ 18 && {
  					class: classMap({
  						[/*className*/ ctx[1]]: true,
  						"mdc-deprecated-list-item__graphic": true,
  						"mdc-menu__selection-group-icon": /*menuSelectionGroup*/ ctx[4]
  					})
  				},
  				dirty & /*$$restProps*/ 32 && /*$$restProps*/ ctx[5]
  			]));

  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(span);
  			if (default_slot) default_slot.d(detaching);
  			/*span_binding*/ ctx[9](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$p.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$j($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","class","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let element;
  	let menuSelectionGroup = svelte.getContext("SMUI:list:graphic:menu-selection-group");

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Graphic", $$slots, ['default']);

  	function span_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(2, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(5, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
  		if ("$$scope" in $$new_props) $$invalidate(7, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		getContext: svelte.getContext,
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		useActions,
  		forwardEvents,
  		use,
  		className,
  		element,
  		menuSelectionGroup,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  		if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
  		if ("menuSelectionGroup" in $$props) $$invalidate(4, menuSelectionGroup = $$new_props.menuSelectionGroup);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		className,
  		element,
  		forwardEvents,
  		menuSelectionGroup,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		span_binding
  	];
  }

  class Graphic extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$j, create_fragment$p, internal.safe_not_equal, { use: 0, class: 1, getElement: 6 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Graphic",
  			options,
  			id: create_fragment$p.name
  		});
  	}

  	get use() {
  		throw new Error("<Graphic>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Graphic>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<Graphic>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<Graphic>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[6];
  	}

  	set getElement(value) {
  		throw new Error("<Graphic>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  classAdderBuilder({
    class: 'mdc-deprecated-list-item__meta',
    component: Span,
  });

  classAdderBuilder({
    class: 'mdc-deprecated-list-group',
    component: Div,
  });

  /* node_modules/@smui/common/H3.svelte generated by Svelte v3.21.0 */
  const file$k = "node_modules/@smui/common/H3.svelte";

  function create_fragment$q(ctx) {
  	let h3;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[6].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
  	let h3_levels = [/*$$restProps*/ ctx[3]];
  	let h3_data = {};

  	for (let i = 0; i < h3_levels.length; i += 1) {
  		h3_data = internal.assign(h3_data, h3_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			h3 = internal.element("h3");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(h3, h3_data);
  			internal.add_location(h3, file$k, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, h3, anchor);

  			if (default_slot) {
  				default_slot.m(h3, null);
  			}

  			/*h3_binding*/ ctx[7](h3);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, h3, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, h3))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 32) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
  				}
  			}

  			internal.set_attributes(h3, internal.get_spread_update(h3_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(h3);
  			if (default_slot) default_slot.d(detaching);
  			/*h3_binding*/ ctx[7](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$q.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$k($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { use = [] } = $$props;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let element = null;

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("H3", $$slots, ['default']);

  	function h3_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(1, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(3, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		useActions,
  		use,
  		forwardEvents,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		h3_binding
  	];
  }

  class H3 extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$k, create_fragment$q, internal.safe_not_equal, { use: 0, getElement: 4 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "H3",
  			options,
  			id: create_fragment$q.name
  		});
  	}

  	get use() {
  		throw new Error("<H3>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<H3>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[4];
  	}

  	set getElement(value) {
  		throw new Error("<H3>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  var Subheader = classAdderBuilder({
    class: 'mdc-deprecated-list-group__subheader',
    component: H3,
  });

  /* node_modules/@smui/common/Hr.svelte generated by Svelte v3.21.0 */
  const file$l = "node_modules/@smui/common/Hr.svelte";

  function create_fragment$r(ctx) {
  	let hr;
  	let useActions_action;
  	let forwardEvents_action;
  	let t;
  	let current;
  	let dispose;
  	let hr_levels = [/*$$restProps*/ ctx[3]];
  	let hr_data = {};

  	for (let i = 0; i < hr_levels.length; i += 1) {
  		hr_data = internal.assign(hr_data, hr_levels[i]);
  	}

  	const default_slot_template = /*$$slots*/ ctx[6].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

  	const block = {
  		c: function create() {
  			hr = internal.element("hr");
  			t = internal.space();
  			if (default_slot) default_slot.c();
  			internal.set_attributes(hr, hr_data);
  			internal.add_location(hr, file$l, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, hr, anchor);
  			/*hr_binding*/ ctx[7](hr);
  			internal.insert_dev(target, t, anchor);

  			if (default_slot) {
  				default_slot.m(target, anchor);
  			}

  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, hr, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, hr))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			internal.set_attributes(hr, internal.get_spread_update(hr_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);

  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 32) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
  				}
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(hr);
  			/*hr_binding*/ ctx[7](null);
  			if (detaching) internal.detach_dev(t);
  			if (default_slot) default_slot.d(detaching);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$r.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$l($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { use = [] } = $$props;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let element = null;

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Hr", $$slots, ['default']);

  	function hr_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(1, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(3, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		useActions,
  		use,
  		forwardEvents,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		hr_binding
  	];
  }

  class Hr extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$l, create_fragment$r, internal.safe_not_equal, { use: 0, getElement: 4 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Hr",
  			options,
  			id: create_fragment$r.name
  		});
  	}

  	get use() {
  		throw new Error("<Hr>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Hr>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[4];
  	}

  	set getElement(value) {
  		throw new Error("<Hr>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules/@smui/list/Separator.svelte generated by Svelte v3.21.0 */

  function create_fragment$s(ctx) {
  	let switch_instance_anchor;
  	let current;

  	const switch_instance_spread_levels = [
  		{
  			use: [/*forwardEvents*/ ctx[9], .../*use*/ ctx[0]]
  		},
  		{
  			class: classMap({
  				[/*className*/ ctx[1]]: true,
  				"mdc-deprecated-list-divider": true,
  				"mdc-deprecated-list-divider--padded": /*padded*/ ctx[2],
  				"mdc-deprecated-list-divider--inset": /*inset*/ ctx[3],
  				"mdc-deprecated-list-divider--inset-leading": /*insetLeading*/ ctx[4],
  				"mdc-deprecated-list-divider--inset-trailing": /*insetTrailing*/ ctx[5],
  				"mdc-deprecated-list-divider--inset-padding": /*insetPadding*/ ctx[6]
  			})
  		},
  		{ role: "separator" },
  		/*$$restProps*/ ctx[10]
  	];

  	var switch_value = /*component*/ ctx[7];

  	function switch_props(ctx) {
  		let switch_instance_props = {};

  		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
  			switch_instance_props = internal.assign(switch_instance_props, switch_instance_spread_levels[i]);
  		}

  		return {
  			props: switch_instance_props,
  			$$inline: true
  		};
  	}

  	if (switch_value) {
  		var switch_instance = new switch_value(switch_props());
  		/*switch_instance_binding*/ ctx[14](switch_instance);
  	}

  	const block = {
  		c: function create() {
  			if (switch_instance) internal.create_component(switch_instance.$$.fragment);
  			switch_instance_anchor = internal.empty();
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			if (switch_instance) {
  				internal.mount_component(switch_instance, target, anchor);
  			}

  			internal.insert_dev(target, switch_instance_anchor, anchor);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, padded, inset, insetLeading, insetTrailing, insetPadding, $$restProps*/ 1663)
  			? internal.get_spread_update(switch_instance_spread_levels, [
  					dirty & /*forwardEvents, use*/ 513 && {
  						use: [/*forwardEvents*/ ctx[9], .../*use*/ ctx[0]]
  					},
  					dirty & /*classMap, className, padded, inset, insetLeading, insetTrailing, insetPadding*/ 126 && {
  						class: classMap({
  							[/*className*/ ctx[1]]: true,
  							"mdc-deprecated-list-divider": true,
  							"mdc-deprecated-list-divider--padded": /*padded*/ ctx[2],
  							"mdc-deprecated-list-divider--inset": /*inset*/ ctx[3],
  							"mdc-deprecated-list-divider--inset-leading": /*insetLeading*/ ctx[4],
  							"mdc-deprecated-list-divider--inset-trailing": /*insetTrailing*/ ctx[5],
  							"mdc-deprecated-list-divider--inset-padding": /*insetPadding*/ ctx[6]
  						})
  					},
  					switch_instance_spread_levels[2],
  					dirty & /*$$restProps*/ 1024 && internal.get_spread_object(/*$$restProps*/ ctx[10])
  				])
  			: {};

  			if (switch_value !== (switch_value = /*component*/ ctx[7])) {
  				if (switch_instance) {
  					internal.group_outros();
  					const old_component = switch_instance;

  					internal.transition_out(old_component.$$.fragment, 1, 0, () => {
  						internal.destroy_component(old_component, 1);
  					});

  					internal.check_outros();
  				}

  				if (switch_value) {
  					switch_instance = new switch_value(switch_props());
  					/*switch_instance_binding*/ ctx[14](switch_instance);
  					internal.create_component(switch_instance.$$.fragment);
  					internal.transition_in(switch_instance.$$.fragment, 1);
  					internal.mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
  				} else {
  					switch_instance = null;
  				}
  			} else if (switch_value) {
  				switch_instance.$set(switch_instance_changes);
  			}
  		},
  		i: function intro(local) {
  			if (current) return;
  			if (switch_instance) internal.transition_in(switch_instance.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			if (switch_instance) internal.transition_out(switch_instance.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			/*switch_instance_binding*/ ctx[14](null);
  			if (detaching) internal.detach_dev(switch_instance_anchor);
  			if (switch_instance) internal.destroy_component(switch_instance, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$s.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$m($$self, $$props, $$invalidate) {
  	const omit_props_names = [
  		"use","class","padded","inset","insetLeading","insetTrailing","insetPadding","component","getElement"
  	];

  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let { use = [] } = $$props;
  	let { class: className = "" } = $$props;
  	let { padded = false } = $$props;
  	let { inset = false } = $$props;
  	let { insetLeading = false } = $$props;
  	let { insetTrailing = false } = $$props;
  	let { insetPadding = false } = $$props;
  	let element;
  	let nav = svelte.getContext("SMUI:list:item:nav");
  	let context = svelte.getContext("SMUI:separator:context");
  	let { component = nav || context !== "list" ? Hr : Li } = $$props;

  	function getElement() {
  		return element.getElement();
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Separator", $$slots, []);

  	function switch_instance_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(8, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(10, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
  		if ("padded" in $$new_props) $$invalidate(2, padded = $$new_props.padded);
  		if ("inset" in $$new_props) $$invalidate(3, inset = $$new_props.inset);
  		if ("insetLeading" in $$new_props) $$invalidate(4, insetLeading = $$new_props.insetLeading);
  		if ("insetTrailing" in $$new_props) $$invalidate(5, insetTrailing = $$new_props.insetTrailing);
  		if ("insetPadding" in $$new_props) $$invalidate(6, insetPadding = $$new_props.insetPadding);
  		if ("component" in $$new_props) $$invalidate(7, component = $$new_props.component);
  	};

  	$$self.$capture_state = () => ({
  		getContext: svelte.getContext,
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		classMap,
  		Li,
  		Hr,
  		forwardEvents,
  		use,
  		className,
  		padded,
  		inset,
  		insetLeading,
  		insetTrailing,
  		insetPadding,
  		element,
  		nav,
  		context,
  		component,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
  		if ("padded" in $$props) $$invalidate(2, padded = $$new_props.padded);
  		if ("inset" in $$props) $$invalidate(3, inset = $$new_props.inset);
  		if ("insetLeading" in $$props) $$invalidate(4, insetLeading = $$new_props.insetLeading);
  		if ("insetTrailing" in $$props) $$invalidate(5, insetTrailing = $$new_props.insetTrailing);
  		if ("insetPadding" in $$props) $$invalidate(6, insetPadding = $$new_props.insetPadding);
  		if ("element" in $$props) $$invalidate(8, element = $$new_props.element);
  		if ("nav" in $$props) nav = $$new_props.nav;
  		if ("context" in $$props) context = $$new_props.context;
  		if ("component" in $$props) $$invalidate(7, component = $$new_props.component);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		className,
  		padded,
  		inset,
  		insetLeading,
  		insetTrailing,
  		insetPadding,
  		component,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		nav,
  		context,
  		switch_instance_binding
  	];
  }

  class Separator extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);

  		internal.init(this, options, instance$m, create_fragment$s, internal.safe_not_equal, {
  			use: 0,
  			class: 1,
  			padded: 2,
  			inset: 3,
  			insetLeading: 4,
  			insetTrailing: 5,
  			insetPadding: 6,
  			component: 7,
  			getElement: 11
  		});

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Separator",
  			options,
  			id: create_fragment$s.name
  		});
  	}

  	get use() {
  		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get class() {
  		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set class(value) {
  		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get padded() {
  		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set padded(value) {
  		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get inset() {
  		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set inset(value) {
  		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get insetLeading() {
  		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set insetLeading(value) {
  		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get insetTrailing() {
  		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set insetTrailing(value) {
  		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get insetPadding() {
  		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set insetPadding(value) {
  		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get component() {
  		throw new Error("<Separator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set component(value) {
  		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[11];
  	}

  	set getElement(value) {
  		throw new Error("<Separator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* node_modules/@smui/common/H6.svelte generated by Svelte v3.21.0 */
  const file$m = "node_modules/@smui/common/H6.svelte";

  function create_fragment$t(ctx) {
  	let h6;
  	let useActions_action;
  	let forwardEvents_action;
  	let current;
  	let dispose;
  	const default_slot_template = /*$$slots*/ ctx[6].default;
  	const default_slot = internal.create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
  	let h6_levels = [/*$$restProps*/ ctx[3]];
  	let h6_data = {};

  	for (let i = 0; i < h6_levels.length; i += 1) {
  		h6_data = internal.assign(h6_data, h6_levels[i]);
  	}

  	const block = {
  		c: function create() {
  			h6 = internal.element("h6");
  			if (default_slot) default_slot.c();
  			internal.set_attributes(h6, h6_data);
  			internal.add_location(h6, file$m, 0, 0, 0);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor, remount) {
  			internal.insert_dev(target, h6, anchor);

  			if (default_slot) {
  				default_slot.m(h6, null);
  			}

  			/*h6_binding*/ ctx[7](h6);
  			current = true;
  			if (remount) internal.run_all(dispose);

  			dispose = [
  				internal.action_destroyer(useActions_action = useActions.call(null, h6, /*use*/ ctx[0])),
  				internal.action_destroyer(forwardEvents_action = /*forwardEvents*/ ctx[2].call(null, h6))
  			];
  		},
  		p: function update(ctx, [dirty]) {
  			if (default_slot) {
  				if (default_slot.p && dirty & /*$$scope*/ 32) {
  					default_slot.p(internal.get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[5], null), internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null));
  				}
  			}

  			internal.set_attributes(h6, internal.get_spread_update(h6_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
  			if (useActions_action && internal.is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(default_slot, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(default_slot, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(h6);
  			if (default_slot) default_slot.d(detaching);
  			/*h6_binding*/ ctx[7](null);
  			internal.run_all(dispose);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$t.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$n($$self, $$props, $$invalidate) {
  	const omit_props_names = ["use","getElement"];
  	let $$restProps = internal.compute_rest_props($$props, omit_props_names);
  	let { use = [] } = $$props;
  	const forwardEvents = forwardEventsBuilder(internal.get_current_component());
  	let element = null;

  	function getElement() {
  		return element;
  	}

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("H6", $$slots, ['default']);

  	function h6_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(1, element = $$value);
  		});
  	}

  	$$self.$set = $$new_props => {
  		$$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props));
  		$$invalidate(3, $$restProps = internal.compute_rest_props($$props, omit_props_names));
  		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
  		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
  	};

  	$$self.$capture_state = () => ({
  		get_current_component: internal.get_current_component,
  		forwardEventsBuilder,
  		useActions,
  		use,
  		forwardEvents,
  		element,
  		getElement
  	});

  	$$self.$inject_state = $$new_props => {
  		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
  		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		use,
  		element,
  		forwardEvents,
  		$$restProps,
  		getElement,
  		$$scope,
  		$$slots,
  		h6_binding
  	];
  }

  class H6 extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$n, create_fragment$t, internal.safe_not_equal, { use: 0, getElement: 4 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "H6",
  			options,
  			id: create_fragment$t.name
  		});
  	}

  	get use() {
  		throw new Error("<H6>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set use(value) {
  		throw new Error("<H6>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	get getElement() {
  		return this.$$.ctx[4];
  	}

  	set getElement(value) {
  		throw new Error("<H6>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* src/Panels/DrawerLeft.svelte generated by Svelte v3.21.0 */

  const { console: console_1$1 } = internal.globals;
  const file$n = "src/Panels/DrawerLeft.svelte";

  // (41:10) <Title>
  function create_default_slot_18(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("Title");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_18.name,
  		type: "slot",
  		source: "(41:10) <Title>",
  		ctx
  	});

  	return block;
  }

  // (42:10) <Subtitle>
  function create_default_slot_17(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("Subtitle");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_17.name,
  		type: "slot",
  		source: "(42:10) <Subtitle>",
  		ctx
  	});

  	return block;
  }

  // (40:8) <Header>
  function create_default_slot_16(ctx) {
  	let t;
  	let current;

  	const title = new Title$2({
  			props: {
  				$$slots: { default: [create_default_slot_18] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const subtitle = new Subtitle({
  			props: {
  				$$slots: { default: [create_default_slot_17] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			internal.create_component(title.$$.fragment);
  			t = internal.space();
  			internal.create_component(subtitle.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(title, target, anchor);
  			internal.insert_dev(target, t, anchor);
  			internal.mount_component(subtitle, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const title_changes = {};

  			if (dirty & /*$$scope*/ 131072) {
  				title_changes.$$scope = { dirty, ctx };
  			}

  			title.$set(title_changes);
  			const subtitle_changes = {};

  			if (dirty & /*$$scope*/ 131072) {
  				subtitle_changes.$$scope = { dirty, ctx };
  			}

  			subtitle.$set(subtitle_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(title.$$.fragment, local);
  			internal.transition_in(subtitle.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(title.$$.fragment, local);
  			internal.transition_out(subtitle.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(title, detaching);
  			if (detaching) internal.detach_dev(t);
  			internal.destroy_component(subtitle, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_16.name,
  		type: "slot",
  		source: "(40:8) <Header>",
  		ctx
  	});

  	return block;
  }

  // (47:14) <Graphic class="material-icons" aria-hidden="true">
  function create_default_slot_15(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("inbox");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_15.name,
  		type: "slot",
  		source: "(47:14) <Graphic class=\\\"material-icons\\\" aria-hidden=\\\"true\\\">",
  		ctx
  	});

  	return block;
  }

  // (48:14) <Text>
  function create_default_slot_14(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("Map");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_14.name,
  		type: "slot",
  		source: "(48:14) <Text>",
  		ctx
  	});

  	return block;
  }

  // (46:12) <Item href="javascript:void(0)" on:click={() => setActive2('Inbox')} activated={active2 === 'Inbox'}>
  function create_default_slot_13(ctx) {
  	let t;
  	let current;

  	const graphic = new Graphic({
  			props: {
  				class: "material-icons",
  				"aria-hidden": "true",
  				$$slots: { default: [create_default_slot_15] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const text_1 = new Text({
  			props: {
  				$$slots: { default: [create_default_slot_14] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			internal.create_component(graphic.$$.fragment);
  			t = internal.space();
  			internal.create_component(text_1.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(graphic, target, anchor);
  			internal.insert_dev(target, t, anchor);
  			internal.mount_component(text_1, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const graphic_changes = {};

  			if (dirty & /*$$scope*/ 131072) {
  				graphic_changes.$$scope = { dirty, ctx };
  			}

  			graphic.$set(graphic_changes);
  			const text_1_changes = {};

  			if (dirty & /*$$scope*/ 131072) {
  				text_1_changes.$$scope = { dirty, ctx };
  			}

  			text_1.$set(text_1_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(graphic.$$.fragment, local);
  			internal.transition_in(text_1.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(graphic.$$.fragment, local);
  			internal.transition_out(text_1.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(graphic, detaching);
  			if (detaching) internal.detach_dev(t);
  			internal.destroy_component(text_1, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_13.name,
  		type: "slot",
  		source: "(46:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive2('Inbox')} activated={active2 === 'Inbox'}>",
  		ctx
  	});

  	return block;
  }

  // (52:12) <Subheader component={H6}>
  function create_default_slot_12(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("Layers");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_12.name,
  		type: "slot",
  		source: "(52:12) <Subheader component={H6}>",
  		ctx
  	});

  	return block;
  }

  // (54:14) <Graphic class="material-icons" aria-hidden="true">
  function create_default_slot_11(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("done_outline");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_11.name,
  		type: "slot",
  		source: "(54:14) <Graphic class=\\\"material-icons\\\" aria-hidden=\\\"true\\\">",
  		ctx
  	});

  	return block;
  }

  // (55:14) <Text>
  function create_default_slot_10(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("Buildings");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_10.name,
  		type: "slot",
  		source: "(55:14) <Text>",
  		ctx
  	});

  	return block;
  }

  // (53:12) <Item href="javascript:void(0)" on:click={() => setActive2('Family')} activated={active2 === 'Family'}>
  function create_default_slot_9(ctx) {
  	let t;
  	let current;

  	const graphic = new Graphic({
  			props: {
  				class: "material-icons",
  				"aria-hidden": "true",
  				$$slots: { default: [create_default_slot_11] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const text_1 = new Text({
  			props: {
  				$$slots: { default: [create_default_slot_10] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			internal.create_component(graphic.$$.fragment);
  			t = internal.space();
  			internal.create_component(text_1.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(graphic, target, anchor);
  			internal.insert_dev(target, t, anchor);
  			internal.mount_component(text_1, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const graphic_changes = {};

  			if (dirty & /*$$scope*/ 131072) {
  				graphic_changes.$$scope = { dirty, ctx };
  			}

  			graphic.$set(graphic_changes);
  			const text_1_changes = {};

  			if (dirty & /*$$scope*/ 131072) {
  				text_1_changes.$$scope = { dirty, ctx };
  			}

  			text_1.$set(text_1_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(graphic.$$.fragment, local);
  			internal.transition_in(text_1.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(graphic.$$.fragment, local);
  			internal.transition_out(text_1.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(graphic, detaching);
  			if (detaching) internal.detach_dev(t);
  			internal.destroy_component(text_1, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_9.name,
  		type: "slot",
  		source: "(53:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive2('Family')} activated={active2 === 'Family'}>",
  		ctx
  	});

  	return block;
  }

  // (58:14) <Graphic class="material-icons" aria-hidden="true">
  function create_default_slot_8(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("done_outline");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_8.name,
  		type: "slot",
  		source: "(58:14) <Graphic class=\\\"material-icons\\\" aria-hidden=\\\"true\\\">",
  		ctx
  	});

  	return block;
  }

  // (59:14) <Text>
  function create_default_slot_7$1(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("Networks");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_7$1.name,
  		type: "slot",
  		source: "(59:14) <Text>",
  		ctx
  	});

  	return block;
  }

  // (57:12) <Item href="javascript:void(0)" on:click={() => setActive2('Friends')} activated={active2 === 'Friends'}>
  function create_default_slot_6$1(ctx) {
  	let t;
  	let current;

  	const graphic = new Graphic({
  			props: {
  				class: "material-icons",
  				"aria-hidden": "true",
  				$$slots: { default: [create_default_slot_8] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const text_1 = new Text({
  			props: {
  				$$slots: { default: [create_default_slot_7$1] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			internal.create_component(graphic.$$.fragment);
  			t = internal.space();
  			internal.create_component(text_1.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(graphic, target, anchor);
  			internal.insert_dev(target, t, anchor);
  			internal.mount_component(text_1, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const graphic_changes = {};

  			if (dirty & /*$$scope*/ 131072) {
  				graphic_changes.$$scope = { dirty, ctx };
  			}

  			graphic.$set(graphic_changes);
  			const text_1_changes = {};

  			if (dirty & /*$$scope*/ 131072) {
  				text_1_changes.$$scope = { dirty, ctx };
  			}

  			text_1.$set(text_1_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(graphic.$$.fragment, local);
  			internal.transition_in(text_1.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(graphic.$$.fragment, local);
  			internal.transition_out(text_1.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(graphic, detaching);
  			if (detaching) internal.detach_dev(t);
  			internal.destroy_component(text_1, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_6$1.name,
  		type: "slot",
  		source: "(57:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive2('Friends')} activated={active2 === 'Friends'}>",
  		ctx
  	});

  	return block;
  }

  // (62:14) <Graphic class="material-icons" aria-hidden="true">
  function create_default_slot_5$1(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("done_outline");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_5$1.name,
  		type: "slot",
  		source: "(62:14) <Graphic class=\\\"material-icons\\\" aria-hidden=\\\"true\\\">",
  		ctx
  	});

  	return block;
  }

  // (63:14) <Text>
  function create_default_slot_4$1(ctx) {
  	let t;

  	const block = {
  		c: function create() {
  			t = internal.text("Rivers");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, t, anchor);
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(t);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_4$1.name,
  		type: "slot",
  		source: "(63:14) <Text>",
  		ctx
  	});

  	return block;
  }

  // (61:12) <Item href="javascript:void(0)" on:click={() => setActive2('Work')} activated={active2 === 'Work'}>
  function create_default_slot_3$1(ctx) {
  	let t;
  	let current;

  	const graphic = new Graphic({
  			props: {
  				class: "material-icons",
  				"aria-hidden": "true",
  				$$slots: { default: [create_default_slot_5$1] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const text_1 = new Text({
  			props: {
  				$$slots: { default: [create_default_slot_4$1] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			internal.create_component(graphic.$$.fragment);
  			t = internal.space();
  			internal.create_component(text_1.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(graphic, target, anchor);
  			internal.insert_dev(target, t, anchor);
  			internal.mount_component(text_1, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const graphic_changes = {};

  			if (dirty & /*$$scope*/ 131072) {
  				graphic_changes.$$scope = { dirty, ctx };
  			}

  			graphic.$set(graphic_changes);
  			const text_1_changes = {};

  			if (dirty & /*$$scope*/ 131072) {
  				text_1_changes.$$scope = { dirty, ctx };
  			}

  			text_1.$set(text_1_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(graphic.$$.fragment, local);
  			internal.transition_in(text_1.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(graphic.$$.fragment, local);
  			internal.transition_out(text_1.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(graphic, detaching);
  			if (detaching) internal.detach_dev(t);
  			internal.destroy_component(text_1, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_3$1.name,
  		type: "slot",
  		source: "(61:12) <Item href=\\\"javascript:void(0)\\\" on:click={() => setActive2('Work')} activated={active2 === 'Work'}>",
  		ctx
  	});

  	return block;
  }

  // (45:10) <List>
  function create_default_slot_2$1(ctx) {
  	let t0;
  	let t1;
  	let t2;
  	let t3;
  	let t4;
  	let current;

  	const item0 = new Item({
  			props: {
  				href: "javascript:void(0)",
  				activated: /*active2*/ ctx[2] === "Inbox",
  				$$slots: { default: [create_default_slot_13] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	item0.$on("click", /*click_handler*/ ctx[11]);
  	const separator = new Separator({ props: { nav: true }, $$inline: true });

  	const subheader = new Subheader({
  			props: {
  				component: H6,
  				$$slots: { default: [create_default_slot_12] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const item1 = new Item({
  			props: {
  				href: "javascript:void(0)",
  				activated: /*active2*/ ctx[2] === "Family",
  				$$slots: { default: [create_default_slot_9] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	item1.$on("click", /*click_handler_1*/ ctx[12]);

  	const item2 = new Item({
  			props: {
  				href: "javascript:void(0)",
  				activated: /*active2*/ ctx[2] === "Friends",
  				$$slots: { default: [create_default_slot_6$1] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	item2.$on("click", /*click_handler_2*/ ctx[13]);

  	const item3 = new Item({
  			props: {
  				href: "javascript:void(0)",
  				activated: /*active2*/ ctx[2] === "Work",
  				$$slots: { default: [create_default_slot_3$1] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	item3.$on("click", /*click_handler_3*/ ctx[14]);

  	const block = {
  		c: function create() {
  			internal.create_component(item0.$$.fragment);
  			t0 = internal.space();
  			internal.create_component(separator.$$.fragment);
  			t1 = internal.space();
  			internal.create_component(subheader.$$.fragment);
  			t2 = internal.space();
  			internal.create_component(item1.$$.fragment);
  			t3 = internal.space();
  			internal.create_component(item2.$$.fragment);
  			t4 = internal.space();
  			internal.create_component(item3.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(item0, target, anchor);
  			internal.insert_dev(target, t0, anchor);
  			internal.mount_component(separator, target, anchor);
  			internal.insert_dev(target, t1, anchor);
  			internal.mount_component(subheader, target, anchor);
  			internal.insert_dev(target, t2, anchor);
  			internal.mount_component(item1, target, anchor);
  			internal.insert_dev(target, t3, anchor);
  			internal.mount_component(item2, target, anchor);
  			internal.insert_dev(target, t4, anchor);
  			internal.mount_component(item3, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const item0_changes = {};
  			if (dirty & /*active2*/ 4) item0_changes.activated = /*active2*/ ctx[2] === "Inbox";

  			if (dirty & /*$$scope*/ 131072) {
  				item0_changes.$$scope = { dirty, ctx };
  			}

  			item0.$set(item0_changes);
  			const subheader_changes = {};

  			if (dirty & /*$$scope*/ 131072) {
  				subheader_changes.$$scope = { dirty, ctx };
  			}

  			subheader.$set(subheader_changes);
  			const item1_changes = {};
  			if (dirty & /*active2*/ 4) item1_changes.activated = /*active2*/ ctx[2] === "Family";

  			if (dirty & /*$$scope*/ 131072) {
  				item1_changes.$$scope = { dirty, ctx };
  			}

  			item1.$set(item1_changes);
  			const item2_changes = {};
  			if (dirty & /*active2*/ 4) item2_changes.activated = /*active2*/ ctx[2] === "Friends";

  			if (dirty & /*$$scope*/ 131072) {
  				item2_changes.$$scope = { dirty, ctx };
  			}

  			item2.$set(item2_changes);
  			const item3_changes = {};
  			if (dirty & /*active2*/ 4) item3_changes.activated = /*active2*/ ctx[2] === "Work";

  			if (dirty & /*$$scope*/ 131072) {
  				item3_changes.$$scope = { dirty, ctx };
  			}

  			item3.$set(item3_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(item0.$$.fragment, local);
  			internal.transition_in(separator.$$.fragment, local);
  			internal.transition_in(subheader.$$.fragment, local);
  			internal.transition_in(item1.$$.fragment, local);
  			internal.transition_in(item2.$$.fragment, local);
  			internal.transition_in(item3.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(item0.$$.fragment, local);
  			internal.transition_out(separator.$$.fragment, local);
  			internal.transition_out(subheader.$$.fragment, local);
  			internal.transition_out(item1.$$.fragment, local);
  			internal.transition_out(item2.$$.fragment, local);
  			internal.transition_out(item3.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(item0, detaching);
  			if (detaching) internal.detach_dev(t0);
  			internal.destroy_component(separator, detaching);
  			if (detaching) internal.detach_dev(t1);
  			internal.destroy_component(subheader, detaching);
  			if (detaching) internal.detach_dev(t2);
  			internal.destroy_component(item1, detaching);
  			if (detaching) internal.detach_dev(t3);
  			internal.destroy_component(item2, detaching);
  			if (detaching) internal.detach_dev(t4);
  			internal.destroy_component(item3, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_2$1.name,
  		type: "slot",
  		source: "(45:10) <List>",
  		ctx
  	});

  	return block;
  }

  // (44:8) <Content>
  function create_default_slot_1$2(ctx) {
  	let current;

  	const list = new List({
  			props: {
  				$$slots: { default: [create_default_slot_2$1] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			internal.create_component(list.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(list, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const list_changes = {};

  			if (dirty & /*$$scope, active2*/ 131076) {
  				list_changes.$$scope = { dirty, ctx };
  			}

  			list.$set(list_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(list.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(list.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(list, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot_1$2.name,
  		type: "slot",
  		source: "(44:8) <Content>",
  		ctx
  	});

  	return block;
  }

  // (39:6) <Drawer variant="modal" bind:this={myDrawer2} bind:open={myDrawer2Open}>
  function create_default_slot$9(ctx) {
  	let t;
  	let current;

  	const header = new Header({
  			props: {
  				$$slots: { default: [create_default_slot_16] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const content = new Content$1({
  			props: {
  				$$slots: { default: [create_default_slot_1$2] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			internal.create_component(header.$$.fragment);
  			t = internal.space();
  			internal.create_component(content.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(header, target, anchor);
  			internal.insert_dev(target, t, anchor);
  			internal.mount_component(content, target, anchor);
  			current = true;
  		},
  		p: function update(ctx, dirty) {
  			const header_changes = {};

  			if (dirty & /*$$scope*/ 131072) {
  				header_changes.$$scope = { dirty, ctx };
  			}

  			header.$set(header_changes);
  			const content_changes = {};

  			if (dirty & /*$$scope, active2*/ 131076) {
  				content_changes.$$scope = { dirty, ctx };
  			}

  			content.$set(content_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(header.$$.fragment, local);
  			internal.transition_in(content.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(header.$$.fragment, local);
  			internal.transition_out(content.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(header, detaching);
  			if (detaching) internal.detach_dev(t);
  			internal.destroy_component(content, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot$9.name,
  		type: "slot",
  		source: "(39:6) <Drawer variant=\\\"modal\\\" bind:this={myDrawer2} bind:open={myDrawer2Open}>",
  		ctx
  	});

  	return block;
  }

  function create_fragment$u(ctx) {
  	let div;
  	let updating_open;
  	let t;
  	let current;

  	function drawer_open_binding(value) {
  		/*drawer_open_binding*/ ctx[16].call(null, value);
  	}

  	let drawer_props = {
  		variant: "modal",
  		$$slots: { default: [create_default_slot$9] },
  		$$scope: { ctx }
  	};

  	if (/*myDrawer2Open*/ ctx[0] !== void 0) {
  		drawer_props.open = /*myDrawer2Open*/ ctx[0];
  	}

  	const drawer = new Drawer({ props: drawer_props, $$inline: true });
  	/*drawer_binding*/ ctx[15](drawer);
  	internal.binding_callbacks.push(() => internal.bind(drawer, "open", drawer_open_binding));
  	const scrim = new Scrim({ $$inline: true });

  	const block = {
  		c: function create() {
  			div = internal.element("div");
  			internal.create_component(drawer.$$.fragment);
  			t = internal.space();
  			internal.create_component(scrim.$$.fragment);
  			internal.attr_dev(div, "class", "drawer-container");
  			internal.add_location(div, file$n, 37, 1, 915);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, div, anchor);
  			internal.mount_component(drawer, div, null);
  			internal.append_dev(div, t);
  			internal.mount_component(scrim, div, null);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			const drawer_changes = {};

  			if (dirty & /*$$scope, active2*/ 131076) {
  				drawer_changes.$$scope = { dirty, ctx };
  			}

  			if (!updating_open && dirty & /*myDrawer2Open*/ 1) {
  				updating_open = true;
  				drawer_changes.open = /*myDrawer2Open*/ ctx[0];
  				internal.add_flush_callback(() => updating_open = false);
  			}

  			drawer.$set(drawer_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(drawer.$$.fragment, local);
  			internal.transition_in(scrim.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(drawer.$$.fragment, local);
  			internal.transition_out(scrim.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(div);
  			/*drawer_binding*/ ctx[15](null);
  			internal.destroy_component(drawer);
  			internal.destroy_component(scrim);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$u.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$o($$self, $$props, $$invalidate) {
  	const dispatch = svelte.createEventDispatcher();
  	let clicked = "nothing yet";
  	let myDrawer;
  	let myDrawerOpen = false;
  	let active = "Gray Kittens";
  	let myDrawer2;
  	let { myDrawer2Open = false } = $$props;
  	let active2 = "Inbox";

  	function setActive(value) {
  		active = value;
  		myDrawerOpen = false;
  	}

  	function setActive2(value) {
  		$$invalidate(2, active2 = value);
  		$$invalidate(0, myDrawer2Open = false);
  		console.info(myDrawer2Open);
  	}

  	const unsubscribe = stateDrawer.subscribe(value => {
  		$$invalidate(0, myDrawer2Open = value);
  	});

  	const writable_props = ["myDrawer2Open"];

  	Object.keys($$props).forEach(key => {
  		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<DrawerLeft> was created with unknown prop '${key}'`);
  	});

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("DrawerLeft", $$slots, []);
  	const click_handler = () => setActive2("Inbox");
  	const click_handler_1 = () => setActive2("Family");
  	const click_handler_2 = () => setActive2("Friends");
  	const click_handler_3 = () => setActive2("Work");

  	function drawer_binding($$value) {
  		internal.binding_callbacks[$$value ? "unshift" : "push"](() => {
  			$$invalidate(1, myDrawer2 = $$value);
  		});
  	}

  	function drawer_open_binding(value) {
  		myDrawer2Open = value;
  		$$invalidate(0, myDrawer2Open);
  	}

  	$$self.$set = $$props => {
  		if ("myDrawer2Open" in $$props) $$invalidate(0, myDrawer2Open = $$props.myDrawer2Open);
  	};

  	$$self.$capture_state = () => ({
  		Drawer,
  		AppContent,
  		Content: Content$1,
  		Header,
  		Title: Title$2,
  		Subtitle,
  		Scrim,
  		Button: Button_1,
  		Label: CommonLabel,
  		List,
  		Item,
  		Text,
  		Graphic,
  		Separator,
  		Subheader,
  		H6,
  		createEventDispatcher: svelte.createEventDispatcher,
  		stateDrawer,
  		dispatch,
  		clicked,
  		myDrawer,
  		myDrawerOpen,
  		active,
  		myDrawer2,
  		myDrawer2Open,
  		active2,
  		setActive,
  		setActive2,
  		unsubscribe
  	});

  	$$self.$inject_state = $$props => {
  		if ("clicked" in $$props) clicked = $$props.clicked;
  		if ("myDrawer" in $$props) myDrawer = $$props.myDrawer;
  		if ("myDrawerOpen" in $$props) myDrawerOpen = $$props.myDrawerOpen;
  		if ("active" in $$props) active = $$props.active;
  		if ("myDrawer2" in $$props) $$invalidate(1, myDrawer2 = $$props.myDrawer2);
  		if ("myDrawer2Open" in $$props) $$invalidate(0, myDrawer2Open = $$props.myDrawer2Open);
  		if ("active2" in $$props) $$invalidate(2, active2 = $$props.active2);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [
  		myDrawer2Open,
  		myDrawer2,
  		active2,
  		setActive2,
  		myDrawerOpen,
  		active,
  		dispatch,
  		clicked,
  		myDrawer,
  		setActive,
  		unsubscribe,
  		click_handler,
  		click_handler_1,
  		click_handler_2,
  		click_handler_3,
  		drawer_binding,
  		drawer_open_binding
  	];
  }

  class DrawerLeft extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$o, create_fragment$u, internal.safe_not_equal, { myDrawer2Open: 0 });

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "DrawerLeft",
  			options,
  			id: create_fragment$u.name
  		});
  	}

  	get myDrawer2Open() {
  		throw new Error("<DrawerLeft>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}

  	set myDrawer2Open(value) {
  		throw new Error("<DrawerLeft>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  	}
  }

  /* src/Panels/Logo.svelte generated by Svelte v3.21.0 */

  const file$o = "src/Panels/Logo.svelte";

  function create_fragment$v(ctx) {
  	let div;
  	let a;
  	let img;
  	let img_src_value;

  	const block = {
  		c: function create() {
  			div = internal.element("div");
  			a = internal.element("a");
  			img = internal.element("img");
  			internal.attr_dev(img, "width", "125");
  			internal.attr_dev(img, "alt", "Logi ICGCG");
  			if (img.src !== (img_src_value = "assets/ICGC_white.svg")) internal.attr_dev(img, "src", img_src_value);
  			internal.attr_dev(img, "class", "ui image logo");
  			internal.add_location(img, file$o, 20, 4, 295);
  			internal.attr_dev(a, "title", "Institut Catogràfic i Geològic de Catalunya");
  			internal.attr_dev(a, "href", "https://www.icgc.cat");
  			internal.attr_dev(a, "target", "_blank");
  			internal.add_location(a, file$o, 16, 2, 179);
  			internal.attr_dev(div, "class", "headerLogo svelte-1j708f3");
  			internal.add_location(div, file$o, 15, 0, 152);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, div, anchor);
  			internal.append_dev(div, a);
  			internal.append_dev(a, img);
  		},
  		p: internal.noop,
  		i: internal.noop,
  		o: internal.noop,
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(div);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$v.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function instance$p($$self, $$props) {
  	const writable_props = [];

  	Object.keys($$props).forEach(key => {
  		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Logo> was created with unknown prop '${key}'`);
  	});

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("Logo", $$slots, []);
  	return [];
  }

  class Logo extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$p, create_fragment$v, internal.safe_not_equal, {});

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "Logo",
  			options,
  			id: create_fragment$v.name
  		});
  	}
  }

  /* src/App.svelte generated by Svelte v3.21.0 */
  const file$p = "src/App.svelte";

  // (34:2) <Map lat={41.732}  lon={1.732}  zoom={8} style={"https://tilemaps.icgc.cat/tileserver/styles/water.json"}>
  function create_default_slot$a(ctx) {
  	let current;
  	const mapattribution = new MapAttribution({ $$inline: true });

  	const block = {
  		c: function create() {
  			internal.create_component(mapattribution.$$.fragment);
  		},
  		m: function mount(target, anchor) {
  			internal.mount_component(mapattribution, target, anchor);
  			current = true;
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(mapattribution.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(mapattribution.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			internal.destroy_component(mapattribution, detaching);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_default_slot$a.name,
  		type: "slot",
  		source: "(34:2) <Map lat={41.732}  lon={1.732}  zoom={8} style={\\\"https://tilemaps.icgc.cat/tileserver/styles/water.json\\\"}>",
  		ctx
  	});

  	return block;
  }

  function create_fragment$w(ctx) {
  	let div;
  	let updating_openModalInfo;
  	let t0;
  	let t1;
  	let t2;
  	let current;

  	function topbar_openModalInfo_binding(value) {
  		/*topbar_openModalInfo_binding*/ ctx[3].call(null, value);
  	}

  	let topbar_props = {};

  	if (/*openModalInfo*/ ctx[0] !== void 0) {
  		topbar_props.openModalInfo = /*openModalInfo*/ ctx[0];
  	}

  	const topbar = new TopBar({ props: topbar_props, $$inline: true });
  	internal.binding_callbacks.push(() => internal.bind(topbar, "openModalInfo", topbar_openModalInfo_binding));
  	const drawerleft = new DrawerLeft({ $$inline: true });
  	const logo = new Logo({ $$inline: true });

  	const map = new Map$1({
  			props: {
  				lat: 41.732,
  				lon: 1.732,
  				zoom: 8,
  				style: "https://tilemaps.icgc.cat/tileserver/styles/water.json",
  				$$slots: { default: [create_default_slot$a] },
  				$$scope: { ctx }
  			},
  			$$inline: true
  		});

  	const block = {
  		c: function create() {
  			div = internal.element("div");
  			internal.create_component(topbar.$$.fragment);
  			t0 = internal.space();
  			internal.create_component(drawerleft.$$.fragment);
  			t1 = internal.space();
  			internal.create_component(logo.$$.fragment);
  			t2 = internal.space();
  			internal.create_component(map.$$.fragment);
  			internal.attr_dev(div, "class", "container");
  			internal.add_location(div, file$p, 28, 0, 676);
  		},
  		l: function claim(nodes) {
  			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
  		},
  		m: function mount(target, anchor) {
  			internal.insert_dev(target, div, anchor);
  			internal.mount_component(topbar, div, null);
  			internal.append_dev(div, t0);
  			internal.mount_component(drawerleft, div, null);
  			internal.append_dev(div, t1);
  			internal.mount_component(logo, div, null);
  			internal.append_dev(div, t2);
  			internal.mount_component(map, div, null);
  			current = true;
  		},
  		p: function update(ctx, [dirty]) {
  			const topbar_changes = {};

  			if (!updating_openModalInfo && dirty & /*openModalInfo*/ 1) {
  				updating_openModalInfo = true;
  				topbar_changes.openModalInfo = /*openModalInfo*/ ctx[0];
  				internal.add_flush_callback(() => updating_openModalInfo = false);
  			}

  			topbar.$set(topbar_changes);
  			const map_changes = {};

  			if (dirty & /*$$scope*/ 16) {
  				map_changes.$$scope = { dirty, ctx };
  			}

  			map.$set(map_changes);
  		},
  		i: function intro(local) {
  			if (current) return;
  			internal.transition_in(topbar.$$.fragment, local);
  			internal.transition_in(drawerleft.$$.fragment, local);
  			internal.transition_in(logo.$$.fragment, local);
  			internal.transition_in(map.$$.fragment, local);
  			current = true;
  		},
  		o: function outro(local) {
  			internal.transition_out(topbar.$$.fragment, local);
  			internal.transition_out(drawerleft.$$.fragment, local);
  			internal.transition_out(logo.$$.fragment, local);
  			internal.transition_out(map.$$.fragment, local);
  			current = false;
  		},
  		d: function destroy(detaching) {
  			if (detaching) internal.detach_dev(div);
  			internal.destroy_component(topbar);
  			internal.destroy_component(drawerleft);
  			internal.destroy_component(logo);
  			internal.destroy_component(map);
  		}
  	};

  	internal.dispatch_dev("SvelteRegisterBlock", {
  		block,
  		id: create_fragment$w.name,
  		type: "component",
  		source: "",
  		ctx
  	});

  	return block;
  }

  function activate() {
  	alert("hola");
  }

  function instance$q($$self, $$props, $$invalidate) {
  	let toggle = false;
  	let openModalInfo;

  	const unsubscribe = stateDrawer.subscribe(value => {
  		//console.info($stateDrawer);
  		//console.info(value);
  		toggle = value;
  	});

  	const writable_props = [];

  	Object.keys($$props).forEach(key => {
  		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
  	});

  	let { $$slots = {}, $$scope } = $$props;
  	internal.validate_slots("App", $$slots, []);

  	function topbar_openModalInfo_binding(value) {
  		openModalInfo = value;
  		$$invalidate(0, openModalInfo);
  	}

  	$$self.$capture_state = () => ({
  		onDestroy: svelte.onDestroy,
  		stateDrawer,
  		TopBar,
  		Map: Map$1,
  		MapAttribution,
  		DrawerLeft,
  		Logo,
  		toggle,
  		openModalInfo,
  		unsubscribe,
  		activate
  	});

  	$$self.$inject_state = $$props => {
  		if ("toggle" in $$props) toggle = $$props.toggle;
  		if ("openModalInfo" in $$props) $$invalidate(0, openModalInfo = $$props.openModalInfo);
  	};

  	if ($$props && "$$inject" in $$props) {
  		$$self.$inject_state($$props.$$inject);
  	}

  	return [openModalInfo, toggle, unsubscribe, topbar_openModalInfo_binding];
  }

  class App extends internal.SvelteComponentDev {
  	constructor(options) {
  		super(options);
  		internal.init(this, options, instance$q, create_fragment$w, internal.safe_not_equal, {});

  		internal.dispatch_dev("SvelteRegisterComponent", {
  			component: this,
  			tagName: "App",
  			options,
  			id: create_fragment$w.name
  		});
  	}
  }

  const app = new App({
  	target: document.body,
  	props: {
  		name: 'world'
  	}
  });

  return app;

}(internal, svelte, store, transition, mapbox));
//# sourceMappingURL=bundle.js.map
