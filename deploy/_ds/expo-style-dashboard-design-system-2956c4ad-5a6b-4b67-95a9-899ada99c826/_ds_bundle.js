/* @ds-bundle: {"format":4,"namespace":"ExpoStyleDashboardDesignSystem_2956c4","components":[{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/data/Avatar.jsx":"c580d7f2606a","components/data/Card.jsx":"bd55cf5b13b7","components/data/Table.jsx":"80d5d4e55f24","components/feedback/Badge.jsx":"1b433e6a688e","components/feedback/ProgressBar.jsx":"1dbd10eaaf41","components/feedback/Toast.jsx":"3a03b7fe0c8c","components/feedback/Tooltip.jsx":"0cdf53cecdca","components/forms/Button.jsx":"928bf227b537","components/forms/Checkbox.jsx":"0c5cc2a9d3cc","components/forms/IconButton.jsx":"14305d5f321b","components/forms/Input.jsx":"0b338cb9cc6c","components/forms/Select.jsx":"56f865207020","components/forms/Switch.jsx":"a51ec62fbc1c","components/icons/Icon.jsx":"0daac36496ff","components/navigation/Sidebar.jsx":"e2ffeeb7b315","components/navigation/Tabs.jsx":"0189f4bcfa3d","components/overlay/Dialog.jsx":"273d7b0088c6","ui_kits/dashboard/AppShell.jsx":"5c33a80d3f8f","ui_kits/dashboard/DashboardHome.jsx":"0d76e75d8d0a","ui_kits/dashboard/KanbanBoard.jsx":"af164f46d9fc","ui_kits/dashboard/LoginScreen.jsx":"ebe9a9d475ce","ui_kits/dashboard/SettingsScreen.jsx":"509ce49676c5","ui_kits/dashboard/TaskDetail.jsx":"16b48d3603e0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ExpoStyleDashboardDesignSystem_2956c4 = window.ExpoStyleDashboardDesignSystem_2956c4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Avatar.jsx
try { (() => {
const PALETTE = ['#171717', '#0d74ce', '#8145b5', '#16a34a', '#ab6400'];
function hashColor(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = h * 31 + str.charCodeAt(i) >>> 0;
  return PALETTE[h % PALETTE.length];
}
function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(n => n[0].toUpperCase()).join('');
}
function Avatar({
  name = '',
  src,
  size = 36,
  style
}) {
  if (src) {
    return React.createElement('img', {
      src,
      alt: name,
      style: {
        width: size,
        height: size,
        borderRadius: 'var(--radius-full)',
        objectFit: 'cover',
        flexShrink: 0,
        ...style
      }
    });
  }
  return React.createElement('span', {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      background: hashColor(name || 'x'),
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: size * 0.38,
      flexShrink: 0,
      ...style
    }
  }, initials(name || '?'));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
const {
  useState
} = React;
function Card({
  variant = 'light',
  padding = 'var(--space-lg)',
  hoverable = false,
  children,
  style
}) {
  const [hover, setHover] = useState(false);
  const isDark = variant === 'dark';
  return React.createElement('div', {
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      background: isDark ? 'var(--bg-surface-dark)' : 'var(--bg-surface)',
      color: isDark ? 'var(--text-on-dark)' : 'var(--text-primary)',
      borderRadius: 'var(--radius-lg)',
      padding,
      border: isDark ? 'none' : '1px solid var(--border-strong)',
      boxShadow: hoverable && hover ? 'var(--shadow-soft)' : 'none',
      boxSizing: 'border-box',
      transition: 'box-shadow .15s ease',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = [],
  style
}) {
  return React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, React.createElement('thead', null, React.createElement('tr', null, columns.map(c => React.createElement('th', {
    key: c.key,
    className: 'type-caption-upper',
    style: {
      textAlign: 'left',
      padding: '10px 12px',
      borderBottom: '1px solid var(--border-strong)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, c.label)))), React.createElement('tbody', null, rows.map((row, i) => React.createElement('tr', {
    key: row.id || i,
    style: {
      borderBottom: '1px solid var(--border-default)'
    }
  }, columns.map(c => React.createElement('td', {
    key: c.key,
    className: 'type-body-sm',
    style: {
      padding: '12px',
      color: 'var(--text-primary)'
    }
  }, c.render ? c.render(row) : row[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  variant = 'neutral',
  children,
  style
}) {
  const variants = {
    neutral: {
      background: 'var(--bg-surface-strong)',
      color: 'var(--text-primary)'
    },
    success: {
      background: '#e7f6ec',
      color: '#0f7a34'
    },
    warning: {
      background: '#fbf1e0',
      color: 'var(--semantic-warning)'
    },
    error: {
      background: '#fdeceb',
      color: '#c23c3f'
    },
    preview: {
      background: '#f1e9f8',
      color: 'var(--semantic-preview)'
    }
  };
  return React.createElement('span', {
    className: 'type-caption-upper',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px',
      textTransform: 'uppercase',
      lineHeight: 'var(--text-caption-upper-lh)',
      letterSpacing: 'var(--text-caption-upper-ls)',
      fontSize: 'var(--text-caption-upper-size)',
      fontWeight: 'var(--text-caption-upper-weight)',
      ...variants[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  variant = 'default',
  style
}) {
  const colors = {
    default: 'var(--action-primary)',
    success: 'var(--semantic-success)',
    warning: 'var(--semantic-warning)',
    error: 'var(--semantic-error)'
  };
  const pct = Math.max(0, Math.min(100, value));
  return React.createElement('div', {
    style: {
      width: '100%',
      height: '6px',
      background: 'var(--bg-surface-strong)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      ...style
    }
  }, React.createElement('div', {
    style: {
      width: pct + '%',
      height: '100%',
      background: colors[variant],
      borderRadius: 'var(--radius-pill)',
      transition: 'width .2s ease'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  variant = 'default',
  title,
  description,
  onClose,
  style
}) {
  const accents = {
    default: 'var(--action-primary)',
    success: 'var(--semantic-success)',
    error: 'var(--semantic-error)'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      background: 'var(--bg-surface-dark)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 18px',
      boxShadow: 'var(--shadow-dialog)',
      width: '320px',
      boxSizing: 'border-box',
      borderLeft: '3px solid ' + accents[variant],
      ...style
    }
  }, React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement('div', {
    className: 'type-title-sm',
    style: {
      color: 'var(--text-on-dark)',
      marginBottom: description ? '4px' : 0
    }
  }, title), description && React.createElement('div', {
    className: 'type-body-sm',
    style: {
      color: 'var(--text-on-dark-soft)'
    }
  }, description)), onClose && React.createElement('button', {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--text-on-dark-soft)',
      cursor: 'pointer',
      fontSize: '16px',
      lineHeight: 1,
      padding: 0
    }
  }, '\u00D7'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  content,
  side = 'top',
  children
}) {
  const [open, setOpen] = useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '6px'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '6px'
    }
  };
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, children, open && React.createElement('span', {
    className: 'type-caption',
    style: {
      position: 'absolute',
      ...pos[side],
      background: 'var(--bg-surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      zIndex: 10,
      pointerEvents: 'none'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const {
  useState
} = React;
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  disabled = false,
  fullWidth = false,
  children,
  style,
  ...props
}) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: {
      height: '32px',
      padding: '7px 14px'
    },
    md: {
      height: '40px',
      padding: '10px 18px'
    }
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--action-primary-active)' : 'var(--action-primary)',
      color: 'var(--text-on-primary)',
      border: '1px solid transparent'
    },
    secondary: {
      background: hover && !disabled ? 'var(--bg-surface-strong)' : 'var(--bg-surface)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    tertiary: {
      background: 'transparent',
      color: 'var(--text-link)',
      border: '1px solid transparent',
      height: 'auto',
      padding: 0
    }
  };
  return React.createElement('button', {
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-button-size)',
      fontWeight: 'var(--text-button-weight)',
      lineHeight: 'var(--text-button-lh)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.45 : 1,
      transition: 'background-color .15s ease, border-color .15s ease',
      whiteSpace: 'nowrap',
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    ...props
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: '18px',
      height: '18px',
      borderRadius: 'var(--radius-xs)',
      border: checked ? '1px solid var(--action-primary)' : '1px solid var(--border-strong)',
      background: checked ? 'var(--action-primary)' : 'var(--bg-surface)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && React.createElement('svg', {
    width: 11,
    height: 11,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--text-on-primary)',
    strokeWidth: 3,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('polyline', {
    points: '20 6 9 17 4 12'
  }))), label && React.createElement('span', {
    className: 'type-body-md',
    style: {
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
const {
  useState
} = React;
function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  'aria-label': ariaLabel,
  style,
  ...props
}) {
  const [hover, setHover] = useState(false);
  const dim = size === 'sm' ? '32px' : '40px';
  const variants = {
    primary: {
      background: hover ? 'var(--action-primary-active)' : 'var(--action-primary)',
      color: 'var(--text-on-primary)',
      border: '1px solid transparent'
    },
    secondary: {
      background: hover ? 'var(--bg-surface-strong)' : 'var(--bg-surface)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: hover ? 'var(--bg-surface-strong)' : 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    }
  };
  return React.createElement('button', {
    disabled,
    'aria-label': ariaLabel,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background-color .15s ease',
      ...variants[variant],
      ...style
    },
    ...props
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  error = false,
  disabled = false,
  leadingIcon,
  style,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  return React.createElement('div', {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: style && style.width ? style.width : '100%'
    }
  }, leadingIcon && React.createElement('span', {
    style: {
      position: 'absolute',
      left: '12px',
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, leadingIcon), React.createElement('input', {
    disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-md-size)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--bg-canvas-soft)' : 'var(--bg-surface)',
      height: '44px',
      width: '100%',
      padding: leadingIcon ? '12px 16px 12px 38px' : '12px 16px',
      borderRadius: 'var(--radius-md)',
      border: error ? '1px solid var(--semantic-error)' : focused ? '2px solid var(--focus-ring)' : '1px solid var(--border-strong)',
      outline: 'none',
      boxSizing: 'border-box',
      cursor: disabled ? 'not-allowed' : 'text',
      ...style
    },
    ...props
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState
} = React;
function Select({
  options = [],
  value,
  onChange,
  disabled = false,
  style,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  return React.createElement('select', {
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-md-size)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--bg-canvas-soft)' : 'var(--bg-surface)',
      height: '44px',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      border: focused ? '2px solid var(--focus-ring)' : '1px solid var(--border-strong)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    },
    ...props
  }, options.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: '36px',
      height: '20px',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--action-primary)' : 'var(--border-strong)',
      position: 'relative',
      flexShrink: 0,
      transition: 'background-color .15s ease'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: '2px',
      left: checked ? '18px' : '2px',
      width: '16px',
      height: '16px',
      borderRadius: 'var(--radius-full)',
      background: '#fff',
      transition: 'left .15s ease',
      boxShadow: 'var(--shadow-soft)'
    }
  })), label && React.createElement('span', {
    className: 'type-body-md',
    style: {
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
const {
  useEffect,
  useRef
} = React;
function Icon({
  name,
  size = 18,
  color,
  style,
  ...props
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const span = document.createElement('i');
      span.setAttribute('data-lucide', name);
      ref.current.appendChild(span);
      window.lucide.createIcons({
        nameAttr: 'data-lucide',
        icons: window.lucide.icons
      });
    }
  }, [name]);
  return React.createElement('span', {
    ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color: color || 'currentColor',
      flexShrink: 0,
      ...style
    },
    ...props
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function Sidebar({
  items = [],
  activeKey,
  onSelect,
  header,
  footer,
  style
}) {
  return React.createElement('div', {
    style: {
      width: '240px',
      height: '100%',
      background: 'var(--bg-canvas)',
      borderRight: '1px solid var(--border-default)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      ...style
    }
  }, header && React.createElement('div', {
    style: {
      padding: '20px 16px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, header), React.createElement('nav', {
    style: {
      flex: 1,
      padding: '12px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      overflowY: 'auto'
    }
  }, items.map(item => React.createElement(NavItem, {
    key: item.key,
    item,
    active: item.key === activeKey,
    onSelect
  }))), footer && React.createElement('div', {
    style: {
      padding: '16px',
      borderTop: '1px solid var(--border-default)'
    }
  }, footer));
}
function NavItem({
  item,
  active,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('button', {
    onClick: () => onSelect && onSelect(item.key),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: 'type-nav-link',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      padding: '9px 12px',
      borderRadius: 'var(--radius-md)',
      background: active ? 'var(--bg-surface-strong)' : hover ? 'var(--bg-canvas-soft)' : 'transparent',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-nav-size)',
      fontWeight: active ? 600 : 'var(--text-nav-weight)'
    }
  }, item.icon, React.createElement('span', null, item.label));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, tabs.map(t => {
    const active = t.value === value;
    return React.createElement('button', {
      key: t.value,
      onClick: () => onChange && onChange(t.value),
      className: 'type-title-sm',
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '10px 4px',
        marginRight: '20px',
        color: active ? 'var(--text-primary)' : 'var(--text-muted)',
        fontWeight: active ? 600 : 500,
        borderBottom: active ? '2px solid var(--action-primary)' : '2px solid transparent',
        marginBottom: '-1px'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = '480px'
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(23,23,23,0.32)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '90vw',
      maxHeight: '85vh',
      overflowY: 'auto',
      background: 'var(--bg-surface)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-dialog)',
      boxSizing: 'border-box'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, React.createElement('div', {
    className: 'type-title-md'
  }, title), React.createElement('button', {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '18px',
      color: 'var(--text-muted)',
      padding: 0,
      lineHeight: 1
    }
  }, '\u00D7')), React.createElement('div', {
    style: {
      padding: '24px'
    }
  }, children), footer && React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
      padding: '16px 24px',
      borderTop: '1px solid var(--border-default)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AppShell.jsx
try { (() => {
function AppShell({
  route,
  onNavigate,
  children
}) {
  const {
    Sidebar,
    Icon,
    Input,
    IconButton,
    Avatar
  } = window.ExpoStyleDashboardDesignSystem_2956c4;
  const items = [{
    key: 'home',
    label: 'Overview',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "layout-dashboard",
      size: 16
    })
  }, {
    key: 'board',
    label: 'Board',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "kanban",
      size: 16
    })
  }, {
    key: 'team',
    label: 'Team',
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 16
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--bg-canvas)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    header: /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: '-0.3px',
        color: 'var(--text-primary)'
      }
    }, "Expo"),
    items: items,
    activeKey: route,
    onSelect: onNavigate,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Priya Shah",
      size: 28
    }), /*#__PURE__*/React.createElement("span", {
      className: "type-body-sm"
    }, "Priya Shah")),
    style: {
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      borderBottom: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search projects",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    style: {
      width: 280,
      height: '36px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 16
    }),
    "aria-label": "Notifications"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "settings",
      size: 16
    }),
    "aria-label": "Settings",
    onClick: () => onNavigate('team')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 32
    }
  }, children)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashboardHome.jsx
try { (() => {
function DashboardHome({
  onOpenTask
}) {
  const {
    Card,
    Table,
    Badge,
    ProgressBar,
    Avatar,
    Button,
    Icon
  } = window.ExpoStyleDashboardDesignSystem_2956c4;
  const stats = [{
    label: 'Active projects',
    value: '6'
  }, {
    label: 'Tasks due this week',
    value: '18'
  }, {
    label: 'Overdue',
    value: '3'
  }];
  const projects = [{
    id: 1,
    name: 'Mobile app redesign',
    owner: 'Priya Shah',
    status: 'On track',
    progress: 72
  }, {
    id: 2,
    name: 'API migration',
    owner: 'Dan Kim',
    status: 'At risk',
    progress: 34
  }, {
    id: 3,
    name: 'Design system v2',
    owner: 'Alex Wu',
    status: 'On track',
    progress: 88
  }, {
    id: 4,
    name: 'Billing revamp',
    owner: 'Priya Shah',
    status: 'Blocked',
    progress: 12
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "type-display-sm"
  }, "Overview"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    }),
    onClick: () => onOpenTask({
      title: 'New task'
    })
  }, "New task")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginBottom: 32
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label,
    hoverable: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "type-display-md"
  }, s.value), /*#__PURE__*/React.createElement("div", {
    className: "type-body-sm",
    style: {
      marginTop: 4
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    className: "type-title-sm",
    style: {
      marginBottom: 12
    }
  }, "Projects"), /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'name',
      label: 'Project',
      render: r => /*#__PURE__*/React.createElement("span", {
        className: "type-body-sm",
        style: {
          color: 'var(--text-primary)',
          fontWeight: 500
        },
        onClick: () => onOpenTask({
          title: r.name
        })
      }, r.name)
    }, {
      key: 'owner',
      label: 'Owner',
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.owner,
        size: 22
      }), /*#__PURE__*/React.createElement("span", null, r.owner))
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        variant: r.status === 'On track' ? 'success' : r.status === 'At risk' ? 'warning' : 'error'
      }, r.status)
    }, {
      key: 'progress',
      label: 'Progress',
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          width: 120
        }
      }, /*#__PURE__*/React.createElement(ProgressBar, {
        value: r.progress,
        variant: r.status === 'Blocked' ? 'error' : 'default'
      }))
    }],
    rows: projects
  }));
}
window.DashboardHome = DashboardHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashboardHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/KanbanBoard.jsx
try { (() => {
function KanbanBoard({
  onOpenTask
}) {
  const {
    Card,
    Badge,
    Avatar,
    Icon,
    IconButton
  } = window.ExpoStyleDashboardDesignSystem_2956c4;
  const columns = [{
    key: 'todo',
    label: 'To do',
    tasks: [{
      id: 1,
      title: 'Audit onboarding flow',
      priority: 'preview',
      assignee: 'Alex Wu'
    }, {
      id: 2,
      title: 'Write EAS build docs',
      priority: 'neutral',
      assignee: 'Dan Kim'
    }]
  }, {
    key: 'progress',
    label: 'In progress',
    tasks: [{
      id: 3,
      title: 'Refactor task table',
      priority: 'warning',
      assignee: 'Priya Shah'
    }, {
      id: 4,
      title: 'Design empty states',
      priority: 'neutral',
      assignee: 'Alex Wu'
    }, {
      id: 5,
      title: 'Fix billing webhook bug',
      priority: 'error',
      assignee: 'Dan Kim'
    }]
  }, {
    key: 'review',
    label: 'Review',
    tasks: [{
      id: 6,
      title: 'PR: dark mode tokens',
      priority: 'neutral',
      assignee: 'Priya Shah'
    }]
  }, {
    key: 'done',
    label: 'Done',
    tasks: [{
      id: 7,
      title: 'Ship v2.3.0',
      priority: 'success',
      assignee: 'Alex Wu'
    }, {
      id: 8,
      title: 'Migrate to Expo Router',
      priority: 'success',
      assignee: 'Dan Kim'
    }]
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "type-display-sm",
    style: {
      marginBottom: 24
    }
  }, "Board"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 16,
      alignItems: 'start'
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.key
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "type-caption-upper"
  }, col.label, " \xB7 ", col.tasks.length), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }),
    variant: "ghost",
    size: "sm",
    "aria-label": 'Add to ' + col.label
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.tasks.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.id,
    hoverable: true,
    padding: "14px",
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpenTask(t)
  }, /*#__PURE__*/React.createElement("div", {
    className: "type-body-sm",
    style: {
      color: 'var(--text-primary)',
      fontWeight: 500,
      marginBottom: 10
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: t.priority
  }, t.priority === 'neutral' ? 'Normal' : t.priority), /*#__PURE__*/React.createElement(Avatar, {
    name: t.assignee,
    size: 22
  }))))))))));
}
window.KanbanBoard = KanbanBoard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/KanbanBoard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/LoginScreen.jsx
try { (() => {
function LoginScreen({
  onLogin
}) {
  const {
    Button,
    Input
  } = window.ExpoStyleDashboardDesignSystem_2956c4;
  const [email, setEmail] = React.useState('you@company.com');
  const [password, setPassword] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360,
      padding: '40px 36px',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: '-0.5px',
      color: 'var(--text-primary)',
      marginBottom: 28
    }
  }, "Expo"), /*#__PURE__*/React.createElement("div", {
    className: "type-title-md",
    style: {
      marginBottom: 6
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    className: "type-body-sm",
    style: {
      marginBottom: 24
    }
  }, "Access your projects and dashboards."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Password",
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onLogin
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary"
  }, "Forgot password?"))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/SettingsScreen.jsx
try { (() => {
function SettingsScreen() {
  const {
    Tabs,
    Avatar,
    Select,
    Switch,
    Card
  } = window.ExpoStyleDashboardDesignSystem_2956c4;
  const [tab, setTab] = React.useState('team');
  const members = [{
    name: 'Priya Shah',
    role: 'Admin'
  }, {
    name: 'Dan Kim',
    role: 'Editor'
  }, {
    name: 'Alex Wu',
    role: 'Editor'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "type-display-sm",
    style: {
      marginBottom: 20
    }
  }, "Team settings"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      label: 'Members',
      value: 'team'
    }, {
      label: 'Notifications',
      value: 'notif'
    }],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: 24
    }
  }), tab === 'team' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, members.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 0',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: m.name,
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    className: "type-body-md",
    style: {
      color: 'var(--text-primary)'
    }
  }, m.name)), /*#__PURE__*/React.createElement(Select, {
    options: [{
      label: 'Admin',
      value: 'admin'
    }, {
      label: 'Editor',
      value: 'editor'
    }, {
      label: 'Viewer',
      value: 'viewer'
    }],
    value: m.role.toLowerCase()
  })))) : /*#__PURE__*/React.createElement(Card, {
    style: {
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: true,
    onChange: () => {},
    label: "Email notifications"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: false,
    onChange: () => {},
    label: "Weekly digest"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: true,
    onChange: () => {},
    label: "Task mentions"
  }))));
}
window.SettingsScreen = SettingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/TaskDetail.jsx
try { (() => {
function TaskDetail({
  task,
  onClose
}) {
  const {
    Dialog,
    Input,
    Select,
    Button,
    Avatar
  } = window.ExpoStyleDashboardDesignSystem_2956c4;
  const [title, setTitle] = React.useState(task ? task.title : '');
  return /*#__PURE__*/React.createElement(Dialog, {
    open: !!task,
    onClose: onClose,
    title: "Task details",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onClose
    }, "Save"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "type-caption-upper",
    style: {
      marginBottom: 6
    }
  }, "Title"), /*#__PURE__*/React.createElement(Input, {
    value: title,
    onChange: e => setTitle(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "type-caption-upper",
    style: {
      marginBottom: 6
    }
  }, "Status"), /*#__PURE__*/React.createElement(Select, {
    options: [{
      label: 'To do',
      value: 'todo'
    }, {
      label: 'In progress',
      value: 'progress'
    }, {
      label: 'Done',
      value: 'done'
    }],
    value: "progress",
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "type-caption-upper",
    style: {
      marginBottom: 6
    }
  }, "Assignee"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 44
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: task && task.assignee || 'Priya Shah',
    size: 28
  }), /*#__PURE__*/React.createElement("span", {
    className: "type-body-sm"
  }, task && task.assignee || 'Priya Shah')))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "type-caption-upper",
    style: {
      marginBottom: 6
    }
  }, "Description"), /*#__PURE__*/React.createElement("div", {
    className: "type-body-sm"
  }, "No description yet."))));
}
window.TaskDetail = TaskDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/TaskDetail.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
