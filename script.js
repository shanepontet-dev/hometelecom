(function () {
  "use strict";

  /* ---------- Sticky header state ---------- */
  var header = document.getElementById("site-header");
  var onScroll = function () {
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Hero headline word rotator ---------- */
  var rotateContainer = document.getElementById("hero-rotate");
  var rotateWords = Array.prototype.slice.call(document.querySelectorAll(".hero-rotate-word"));
  if (rotateContainer && rotateWords.length > 1) {
    var rwIndex = 0;
    var setRotateWidth = function (word) {
      rotateContainer.style.width = word.scrollWidth + "px";
    };
    setRotateWidth(rotateWords[rwIndex]);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { setRotateWidth(rotateWords[rwIndex]); });
    }
    window.setInterval(function () {
      rotateWords[rwIndex].classList.remove("is-active");
      rwIndex = (rwIndex + 1) % rotateWords.length;
      rotateWords[rwIndex].classList.add("is-active");
      setRotateWidth(rotateWords[rwIndex]);
    }, 2800);
  }

  /* ---------- Mobile nav ---------- */
  var toggle = document.getElementById("nav-toggle");
  var panel = document.getElementById("mobile-nav");
  var setNav = function (open) {
    document.documentElement.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle.addEventListener("click", function () {
    setNav(!document.documentElement.classList.contains("nav-open"));
  });
  panel.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setNav(false); });
  });
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setNav(false);
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ---------- Stat count-up ---------- */
  var statEls = document.querySelectorAll("[data-count-to]");
  var animateCount = function (el) {
    var target = parseFloat(el.getAttribute("data-count-to"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1400;
    var start = null;

    var easeOutExpo = function (t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    var step = function (ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = easeOutExpo(progress);
      var value = Math.round(target * eased);
      el.textContent = value.toLocaleString("en-GB") + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString("en-GB") + suffix;
      }
    };
    window.requestAnimationFrame(step);
  };

  if ("IntersectionObserver" in window && statEls.length) {
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    statEls.forEach(function (el) { statObserver.observe(el); });
  } else {
    statEls.forEach(function (el) {
      el.textContent = el.getAttribute("data-count-to") + (el.getAttribute("data-suffix") || "");
    });
  }

  /* ---------- Hero "let's get you started" picker ---------- */
  var pickTabs = Array.prototype.slice.call(document.querySelectorAll(".hero-picker-tab"));
  var pickPanels = Array.prototype.slice.call(document.querySelectorAll(".hero-picker-panel"));
  var postcodeInput = document.getElementById("postcode");

  var activatePick = function (btn, focusIt) {
    pickTabs.forEach(function (b) {
      var isActive = b === btn;
      b.classList.toggle("is-active", isActive);
      b.setAttribute("aria-selected", isActive ? "true" : "false");
      b.tabIndex = isActive ? 0 : -1;
    });
    pickPanels.forEach(function (p) {
      var isActive = p.id === btn.getAttribute("aria-controls");
      p.classList.toggle("is-active", isActive);
      if (isActive) {
        p.removeAttribute("hidden");
      } else {
        p.setAttribute("hidden", "");
      }
    });
    if (postcodeInput && btn.dataset.placeholder) {
      postcodeInput.placeholder = btn.dataset.placeholder;
      phIndex = placeholders.indexOf(btn.dataset.placeholder);
      restartPlaceholderRotation();
    }
    if (focusIt) btn.focus();
  };

  pickTabs.forEach(function (btn, i) {
    btn.addEventListener("click", function () { activatePick(btn, false); });
    btn.addEventListener("keydown", function (e) {
      var dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      var next = pickTabs[(i + dir + pickTabs.length) % pickTabs.length];
      activatePick(next, true);
    });
  });

  /* Postcode placeholder keeps cycling through what it's for, so the
     checker reads as live even before anyone touches the tabs. */
  var placeholders = pickTabs
    .map(function (b) { return b.dataset.placeholder; })
    .filter(function (p, i, arr) { return p && arr.indexOf(p) === i; });
  var phIndex = 0;
  var placeholderTimer = null;
  var rotatePlaceholder = function () {
    if (!postcodeInput || document.activeElement === postcodeInput) return;
    phIndex = (phIndex + 1) % placeholders.length;
    postcodeInput.placeholder = placeholders[phIndex];
  };
  var restartPlaceholderRotation = function () {
    if (placeholderTimer) window.clearInterval(placeholderTimer);
    placeholderTimer = window.setInterval(rotatePlaceholder, 2600);
  };
  if (postcodeInput && placeholders.length > 1) {
    restartPlaceholderRotation();
  }

  /* ---------- Smooth-scroll offset for fixed header ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href").slice(1);
      if (!id) return;
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var headerHeight = header.offsetHeight + 16;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* ---------- Live chat ---------- */
  var chatWidget = document.getElementById("chat-widget");
  if (chatWidget) {
    var chatToggle = document.getElementById("chat-toggle");
    var chatClose = document.getElementById("chat-close");
    var chatPanel = document.getElementById("chat-panel");
    var chatBody = document.getElementById("chat-body");
    var chatSuggestions = document.getElementById("chat-suggestions");
    var chatForm = document.getElementById("chat-form");
    var chatInput = document.getElementById("chat-input");
    var heroChatLink = document.getElementById("hero-chat-link");

    var setChat = function (open) {
      chatWidget.classList.toggle("is-open", open);
      chatToggle.setAttribute("aria-expanded", open ? "true" : "false");
      chatToggle.setAttribute("aria-label", open ? "Close chat" : "Open chat");
      chatPanel.setAttribute("aria-hidden", open ? "false" : "true");
      if (!open) {
        try { sessionStorage.setItem("chatDismissed", "1"); } catch (err) {}
      }
    };

    chatToggle.addEventListener("click", function () {
      setChat(!chatWidget.classList.contains("is-open"));
    });
    chatClose.addEventListener("click", function () { setChat(false); });
    if (heroChatLink) {
      heroChatLink.addEventListener("click", function (e) {
        e.preventDefault();
        setChat(true);
        chatInput.focus();
      });
    }
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && chatWidget.classList.contains("is-open")) setChat(false);
    });

    var addMessage = function (text, who) {
      var msg = document.createElement("div");
      msg.className = "chat-msg chat-msg--" + who;
      var p = document.createElement("p");
      p.textContent = text;
      msg.appendChild(p);
      chatBody.appendChild(msg);
      chatBody.scrollTop = chatBody.scrollHeight;
      return msg;
    };

    var typingEl = null;
    var showTyping = function () {
      typingEl = document.createElement("div");
      typingEl.className = "chat-msg chat-msg--bot chat-typing";
      var p = document.createElement("p");
      p.setAttribute("aria-label", "Typing");
      p.appendChild(document.createElement("span"));
      p.appendChild(document.createElement("span"));
      p.appendChild(document.createElement("span"));
      typingEl.appendChild(p);
      chatBody.appendChild(typingEl);
      chatBody.scrollTop = chatBody.scrollHeight;
    };
    var hideTyping = function () {
      if (typingEl) { typingEl.remove(); typingEl = null; }
    };

    var chipReplies = {
      broadband: "Great, pop your postcode into the checker above and I'll show you the best broadband deals for your address.",
      energy: "We can get your energy, water and council tax switched over in one call. Want me to arrange a callback?",
      order: "You can track your order any time from My account, or I can connect you with support now.",
      person: "Of course, call us on 01403 216131, or I can arrange a callback at a time that suits you."
    };
    var chipLabels = {};
    if (chatSuggestions) {
      Array.prototype.slice.call(chatSuggestions.querySelectorAll(".chat-chip")).forEach(function (chip) {
        chipLabels[chip.dataset.reply] = chip.textContent;
        chip.addEventListener("click", function () {
          addMessage(chipLabels[chip.dataset.reply], "user");
          chatSuggestions.remove();
          showTyping();
          window.setTimeout(function () {
            hideTyping();
            addMessage(chipReplies[chip.dataset.reply], "bot");
          }, 1100);
        });
      });
    }

    if (chatForm) {
      chatForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var text = chatInput.value.trim();
        if (!text) return;
        addMessage(text, "user");
        chatInput.value = "";
        showTyping();
        window.setTimeout(function () {
          hideTyping();
          addMessage("Thanks, that's really helpful. One of the team will pick this up shortly, or call 01403 216131 if it's urgent.", "bot");
        }, 1200);
      });
    }

    /* Auto-open with a greeting on the homepage only, once per session. */
    var isHomepage = !!document.getElementById("postcode");
    var alreadyDismissed = false;
    try { alreadyDismissed = sessionStorage.getItem("chatDismissed") === "1"; } catch (err) {}
    if (isHomepage && !alreadyDismissed) {
      window.setTimeout(function () { setChat(true); }, 1200);
    }
  }
})();
