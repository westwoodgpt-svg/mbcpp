/* Мой бизнес · Калининград — общий скрипт страниц «Новости» и «Мероприятия».
   Меню, модальное окно заявки, иконки Lucide, форматирование дат, утилиты. */
(function () {
  "use strict";

  var MONTHS_GEN = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  var MONTHS_NOM = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  var MONTHS_SHORT = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
  var WEEKDAYS_SHORT = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  var WEEKDAYS = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
  var DEPTS = {
    "ЦПП": "Центр поддержки предпринимательства",
    "ЦПЭ": "Центр поддержки экспорта",
    "ИИЦ": "Инновационный инжиниринговый центр",
    "ЦМИТ": "Центр молодёжного инновационного творчества"
  };

  function parseISO(s) {
    var p = String(s).split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function toISO(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function today() { var d = new Date(); d.setHours(0, 0, 0, 0); return d; }

  var MB = {
    MONTHS_GEN: MONTHS_GEN, MONTHS_NOM: MONTHS_NOM, MONTHS_SHORT: MONTHS_SHORT, WEEKDAYS_SHORT: WEEKDAYS_SHORT, WEEKDAYS: WEEKDAYS,
    DEPTS: DEPTS,
    parseISO: parseISO, toISO: toISO, today: today,

    /* «24 сентября 2026» */
    dateFull: function (iso) { var d = parseISO(iso); return d.getDate() + " " + MONTHS_GEN[d.getMonth()] + " " + d.getFullYear(); },
    /* «24 сентября» */
    dateDM: function (iso) { var d = parseISO(iso); return d.getDate() + " " + MONTHS_GEN[d.getMonth()]; },
    /* «24–25 сентября» или «30 сентября – 2 октября» */
    dateRange: function (iso, isoEnd) {
      if (!isoEnd || isoEnd === iso) return MB.dateDM(iso);
      var a = parseISO(iso), b = parseISO(isoEnd);
      if (a.getMonth() === b.getMonth()) return a.getDate() + "–" + b.getDate() + " " + MONTHS_GEN[a.getMonth()];
      return MB.dateDM(iso) + " – " + MB.dateDM(isoEnd);
    },
    weekday: function (iso) { return WEEKDAYS[parseISO(iso).getDay()]; },
    deptName: function (code) { return DEPTS[code] || code; },
    isPast: function (ev) { return parseISO(ev.dateEnd || ev.date) < today(); },
    isToday: function (iso) { return iso === toISO(today()); },

    plural: function (n, one, few, many) {
      var m10 = n % 10, m100 = n % 100;
      if (m10 === 1 && m100 !== 11) return one;
      if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
      return many;
    },
    param: function (name) {
      var m = new RegExp("[?&]" + name + "=([^&#]*)").exec(location.search);
      return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : null;
    },
    esc: function (s) {
      return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    },
    icons: function () {
      if (window.lucide && window.lucide.createIcons) {
        try { window.lucide.createIcons(); } catch (e) { /* noop */ }
      }
    },

    /* Обложка: фото, если есть, иначе фирменный градиент с иконкой (icon === null — без иконки) */
    cover: function (item, icon) {
      var theme = item.theme || 1;
      if (item.cover) {
        return '<div class="mb-cover theme-' + theme + '"><img src="' + MB.esc(item.cover) + '" alt="" loading="lazy"></div>';
      }
      if (icon === null) return '<div class="mb-cover theme-' + theme + '"></div>';
      return '<div class="mb-cover theme-' + theme + '"><i data-lucide="' + (icon || "calendar") + '" class="cover-icon"></i></div>';
    },

    /* Карточка мероприятия */
    eventCard: function (ev, opts) {
      opts = opts || {};
      var d = parseISO(ev.date);
      var past = MB.isPast(ev);
      var meta = [
        '<span><i data-lucide="clock"></i>' + MB.esc(MB.dateRange(ev.date, ev.dateEnd)) + (ev.time ? ", " + MB.esc(ev.time) : "") + "</span>",
        '<span><i data-lucide="' + (ev.format === "Онлайн" ? "monitor" : "map-pin") + '"></i>' + MB.esc(ev.format) + (ev.place ? " · " + MB.esc(ev.place) : "") + "</span>"
      ].join("");
      return '<a class="ev-card mb-card' + (opts.className ? " " + opts.className : "") + '" href="meropriyatie.html?id=' + encodeURIComponent(ev.id) + '">' +
        '<div class="ev-card-media">' + MB.cover(ev, "calendar") +
        '<span class="ev-card-rubric' + (past ? " is-past" : "") + '">' + MB.esc(past ? "Прошло" : ev.tag) + "</span>" +
        '<span class="ev-card-date"><b>' + d.getDate() + "</b><span>" + MONTHS_SHORT[d.getMonth()] + "</span></span>" +
        "</div>" +
        '<div class="ev-card-body"><h3>' + MB.esc(ev.title) + "</h3>" +
        '<div class="ev-card-meta">' + meta + "</div>" +
        '<span class="ev-card-link"><span>' + (past ? "Подробнее" : "Подробнее и регистрация") + '</span><i data-lucide="arrow-right"></i></span>' +
        "</div></a>";
    },

    /* Карточка новости */
    newsCard: function (n, opts) {
      opts = opts || {};
      return '<a class="nw-card mb-card' + (opts.className ? " " + opts.className : "") + '" href="novost.html?id=' + encodeURIComponent(n.id) + '">' +
        '<div class="nw-card-media">' + MB.cover(n, "newspaper") + "</div>" +
        '<div class="nw-card-body"><span class="nw-cat">' + MB.esc(n.cat) + "</span><h3>" + MB.esc(n.title) + "</h3>" +
        (opts.excerpt ? "<p>" + MB.esc(n.lead) + "</p>" : "") +
        '<div class="nw-meta"><span class="dept">' + MB.esc(n.dept) + "</span><span>·</span><time datetime=\"" + MB.esc(n.date) + '">' + MB.esc(MB.dateFull(n.date)) + "</time></div>" +
        "</div></a>";
    },

    toast: function (text) {
      var el = document.getElementById("mb-toast");
      if (!el) { el = document.createElement("div"); el.id = "mb-toast"; el.className = "mb-toast"; document.body.appendChild(el); }
      el.textContent = text;
      el.classList.add("is-visible");
      clearTimeout(el._t);
      el._t = setTimeout(function () { el.classList.remove("is-visible"); }, 2400);
    },

    share: function (title) {
      var url = location.href;
      if (navigator.share) {
        navigator.share({ title: title || document.title, url: url }).catch(function () { /* cancelled */ });
        return;
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () { MB.toast("Ссылка скопирована"); }, function () { window.prompt("Скопируйте ссылку", url); });
      } else {
        window.prompt("Скопируйте ссылку", url);
      }
    },

    /* Модальное окно заявки (общая форма сайта; отправка демонстрационная) */
    openModal: function (opts) {
      opts = opts || {};
      var m = document.getElementById("mb-modal");
      if (!m) return;
      m.querySelector("[data-modal-title]").textContent = opts.title || "Заявка на консультацию";
      m.querySelector("[data-modal-subtitle]").textContent = opts.subtitle || "Оставьте свой вопрос, и мы обязательно свяжемся с вами.";
      m.querySelector("[data-modal-submit]").textContent = opts.submit || "Отправить заявку";
      var msg = m.querySelector("[data-modal-message]");
      if (msg) { msg.placeholder = opts.placeholder || "Кратко опишите вопрос (необязательно)"; msg.value = ""; }
      m.querySelector("[data-modal-form]").hidden = false;
      m.querySelector("[data-modal-success]").hidden = true;
      m.classList.add("is-open");
      document.body.style.overflow = "hidden";
      var first = m.querySelector("input");
      if (first) setTimeout(function () { first.focus(); }, 30);
      MB.icons();
    },
    closeModal: function () {
      var m = document.getElementById("mb-modal");
      if (!m) return;
      m.classList.remove("is-open");
      document.body.style.overflow = "";
    },

    initShell: function () {
      /* мобильное меню */
      var btn = document.querySelector(".mb-menu-btn"), menu = document.querySelector(".mb-mobile-menu");
      if (btn && menu) {
        btn.addEventListener("click", function () { menu.classList.toggle("is-open"); });
        menu.addEventListener("click", function (e) { if (e.target.tagName === "A") menu.classList.remove("is-open"); });
      }
      /* кнопки заявки */
      document.addEventListener("click", function (e) {
        var t = e.target.closest("[data-open-modal]");
        if (t) {
          e.preventDefault();
          MB.openModal({
            title: t.getAttribute("data-modal-title") || undefined,
            subtitle: t.getAttribute("data-modal-subtitle") || undefined,
            submit: t.getAttribute("data-modal-submit") || undefined,
            placeholder: t.getAttribute("data-modal-placeholder") || undefined
          });
          return;
        }
        var s = e.target.closest("[data-share]");
        if (s) { e.preventDefault(); MB.share(s.getAttribute("data-share") || undefined); }
      });
      var m = document.getElementById("mb-modal");
      if (m) {
        m.addEventListener("click", function (e) { if (e.target === m) MB.closeModal(); });
        m.querySelectorAll("[data-modal-close]").forEach(function (b) { b.addEventListener("click", MB.closeModal); });
        var form = m.querySelector("form");
        if (form) form.addEventListener("submit", function (e) {
          e.preventDefault();
          form.hidden = true;
          m.querySelector("[data-modal-success]").hidden = false;
          form.reset();
          MB.icons();
        });
        document.addEventListener("keydown", function (e) { if (e.key === "Escape") MB.closeModal(); });
      }
      MB.icons();
    }
  };

  window.MB = MB;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", MB.initShell);
  else MB.initShell();
})();
