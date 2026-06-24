/* @ds-bundle: {"format":3,"namespace":"DesignSystem_09015c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"ServiceCard","sourcePath":"components/core/ServiceCard.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"ec98949b48ce","components/core/Button.jsx":"983e45910227","components/core/Card.jsx":"9f3b56c0f718","components/core/Input.jsx":"977b45d641c3","components/core/SectionHeader.jsx":"92491da27718","components/core/ServiceCard.jsx":"c90c394df7ba","components/core/Stat.jsx":"301dcad80794","landing/data.js":"e91bc90257de"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_09015c = window.DesignSystem_09015c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status / category pill.
 * tones: brand, accent, neutral, success.
 */
function Badge({
  children,
  tone = "brand",
  style = {},
  ...rest
}) {
  const tones = {
    brand: {
      background: "var(--tan-100)",
      color: "var(--brown-700)"
    },
    accent: {
      background: "rgba(221,75,51,0.12)",
      color: "var(--coral-700)"
    },
    neutral: {
      background: "var(--ink-100)",
      color: "var(--ink-700)"
    },
    success: {
      background: "rgba(46,139,87,0.14)",
      color: "var(--success)"
    }
  };
  const t = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary call-to-action element for «Мой бизнес».
 * Variants: primary (brown), accent (coral), secondary (tan-outline), ghost.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "var(--fs-sm)",
      radius: "var(--radius-sm)"
    },
    md: {
      padding: "12px 24px",
      fontSize: "var(--fs-body)",
      radius: "var(--radius-md)"
    },
    lg: {
      padding: "16px 32px",
      fontSize: "var(--fs-body-lg)",
      radius: "var(--radius-md)"
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--text-on-dark)",
      border: "1px solid transparent"
    },
    accent: {
      background: "var(--color-accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-accent)"
    },
    secondary: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "1.5px solid var(--tan-500)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "1px solid transparent"
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      lineHeight: 1,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      width: fullWidth ? "100%" : "auto",
      padding: s.padding,
      fontSize: s.fontSize,
      borderRadius: s.radius,
      transition: "transform var(--dur-fast) var(--ease-standard), background var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.98)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — warm white surface container with soft shadow and rounded corners.
 * Set `interactive` for hover-lift behavior.
 */
function Card({
  children,
  interactive = false,
  padded = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      padding: padded ? "var(--space-6)" : 0,
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labeled text field with warm rounded styling.
 */
function Input({
  label,
  hint,
  error,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      background: "var(--paper)",
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      border: "1.5px solid " + (error ? "var(--coral-600)" : "var(--border-strong)"),
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)"
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--focus-ring)";
      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(224,80,64,0.15)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? "var(--coral-600)" : "var(--border-strong)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--coral-700)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
/**
 * SectionHeader — eyebrow + title + optional lead, the standard section intro.
 */
function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      maxWidth: align === "center" ? "720px" : "none",
      marginInline: align === "center" ? "auto" : 0,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "mb-eyebrow",
    style: {
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--color-accent)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h2)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)",
      letterSpacing: "var(--ls-heading)"
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-body)"
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
/**
 * ServiceCard — catalog tile for a «Мой бизнес» service: icon, title, description, CTA.
 */
function ServiceCard({
  icon,
  title,
  description,
  action = "Подробнее",
  onAction,
  style = {}
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padded: true,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: "var(--tan-100)",
      color: "var(--brown-700)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-sm)",
      color: "var(--text-body)"
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      alignSelf: "flex-start",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-sm)",
      color: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px"
    }
  }, action, " \u2192"));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
/**
 * Stat — big number + label, used in impact/metrics strips.
 */
function Stat({
  value,
  label,
  accent = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display)",
      fontWeight: "var(--fw-extrabold)",
      lineHeight: 1,
      letterSpacing: "var(--ls-display)",
      color: accent ? "var(--color-accent)" : "var(--color-primary)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      maxWidth: "22ch"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// landing/data.js
try { (() => {
// Контент лендинга «Мой бизнес» Калининград — из mbkaliningrad.ru
window.MBDATA = {
  phone1: "+7 (4012) 994-588",
  phone2: "+7 (4012) 994-904",
  email: "info@mbkaliningrad.ru",
  address: "г. Калининград, ул. Уральская, 18, 4-й этаж, каб. 408–422",
  hours: "Пн–Чт 09:00–18:00 · Пт 09:00–17:00 · обед 13:00–14:00",
  rotating: ["для роста", "для масштабирования", "для экспорта", "для инноваций", "для смелых идей", "для развития", "для будущего"],
  audiences: [{
    icon: "sprout",
    title: "Я только начинаю",
    desc: "Первые шаги: регистрация, выбор режима, азбука предпринимателя."
  }, {
    icon: "factory",
    title: "Производителям и фермерам",
    desc: "Поддержка промышленности, инноваций и сельского хозяйства."
  }, {
    icon: "briefcase",
    title: "ИП, юрлицам, соцбизнесу",
    desc: "Финансы, консультации, социальное предпринимательство."
  }, {
    icon: "ship",
    title: "Экспортёрам",
    desc: "Выход на зарубежные рынки и сопровождение сделок."
  }],
  services: [{
    icon: "wallet",
    title: "Микрокредитование",
    desc: "Льготные займы для малого и среднего бизнеса.",
    href: "https://mb-mikro.ru/"
  }, {
    icon: "graduation-cap",
    title: "Консультации и обучение",
    desc: "Бесплатные консультации, семинары и образовательные программы.",
    href: "https://mbkaliningrad.ru/consult/"
  }, {
    icon: "network",
    title: "Кластерное развитие",
    desc: "Объединение предприятий региона в кластеры.",
    href: "https://mbkaliningrad.ru/cluster/"
  }, {
    icon: "ship",
    title: "Поддержка экспорта",
    desc: "Сопровождение выхода на зарубежные рынки.",
    href: "https://exportkld.ru/"
  }, {
    icon: "lightbulb",
    title: "Поддержка инноваций",
    desc: "Инжиниринг, ЦМИТ и инновационное развитие.",
    href: "https://mbkaliningrad.ru/innovation/"
  }, {
    icon: "shield-check",
    title: "Предоставление поручительства",
    desc: "Поручительство при нехватке залога по кредиту.",
    href: "https://mbkaliningrad.ru/guarantee/"
  }, {
    icon: "heart-handshake",
    title: "Социальное предпринимательство",
    desc: "Поддержка социально ориентированного бизнеса.",
    href: "https://mbkaliningrad.ru/ciss/"
  }, {
    icon: "building-2",
    title: "Имущественная поддержка",
    desc: "Аренда помещений и площадок на льготных условиях.",
    href: "https://mbkaliningrad.ru/property-support/"
  }],
  stats: [{
    value: "161 167",
    label: "услуг оказано предпринимателям и самозанятым"
  }, {
    value: "0 ₽",
    label: "стоимость услуг центра «Мой бизнес»",
    accent: true
  }, {
    value: "27",
    label: "проектов отобрано по программе «Инвест 80-85»"
  }],
  events: [{
    d: "24",
    m: "ИЮН",
    t: "10:00–12:00",
    mode: "Офлайн",
    cat: "Семинар",
    title: "Особенности экспорта услуг из Калининградской области"
  }, {
    d: "24",
    m: "ИЮН",
    t: "16:00–18:00",
    mode: "Офлайн",
    cat: "Встреча",
    title: "Встреча для СМИ и блогеров"
  }, {
    d: "25",
    m: "ИЮН",
    t: "11:00–13:00",
    mode: "Офлайн",
    cat: "Семинар",
    title: "Искусство самопрезентации и налаживания знакомств"
  }, {
    d: "26",
    m: "ИЮН",
    t: "12:00–13:00",
    mode: "Онлайн",
    cat: "Вебинар",
    title: "Упаковка в системе маркировки «Честный знак»"
  }],
  stories: [{
    name: "Производство из Знаменска",
    who: "шпунты ПВХ из вторичного пластика",
    title: "Как предприниматель из Знаменска запустил переработку пластика"
  }, {
    name: "«Балтийские узоры»",
    who: "янтарные изделия",
    title: "От стереотипов к трендам: новый взгляд на янтарь и новые рынки"
  }, {
    name: "Калининградская разработка",
    who: "мониторинг транспорта",
    title: "В Калининграде создали устройство мониторинга транспорта"
  }],
  news: [{
    date: "2026",
    tag: "Анонсы",
    title: "Открыта регистрация на VIII Международный Балтийский бизнес-форум в Светлогорске",
    excerpt: "Форум соберёт предпринимателей и экспертов со всей страны."
  }, {
    date: "2026",
    tag: "Финансы",
    title: "Наблюдательный совет отобрал 27 проектов по программе «Инвест 80-85»",
    excerpt: "Проекты получат льготное финансирование на развитие."
  }, {
    date: "2026",
    tag: "Обучение",
    title: "Образовательные программы АТР: как закрыть нехватку кадров в обратном инжиниринге",
    excerpt: "Предприятиям региона предложили новые форматы подготовки."
  }, {
    date: "2026",
    tag: "Меры поддержки",
    title: "Минэкономразвития запустило программу «Креативный код. Россия»",
    excerpt: "Поддержка малого и среднего креативного бизнеса."
  }],
  partners: ["Работа России", "Туристический портал", "Мой экспорт", "МФЦ", "Калининградская ТПП", "Экспортёр года", "Почта России", "Школа экспорта РЭЦ", "ЦБ России", "Музей янтаря"],
  social: [{
    icon: "—",
    label: "ВКонтакте",
    href: "https://vk.com/mbkaliningrad39"
  }, {
    icon: "—",
    label: "Telegram",
    href: "https://t.me/mbkld"
  }, {
    icon: "—",
    label: "Одноклассники",
    href: "https://ok.ru/mbkaliningrad39/"
  }, {
    icon: "—",
    label: "Rutube",
    href: "https://rutube.ru/channel/27060252/"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "landing/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Stat = __ds_scope.Stat;

})();
