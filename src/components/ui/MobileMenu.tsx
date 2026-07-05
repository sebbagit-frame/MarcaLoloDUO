import { useEffect, useState } from 'react';
import type { NavLink, UiLabels } from '../../domain/types';

interface MobileMenuProps {
  links: readonly NavLink[];
  labels: UiLabels;
}

/**
 * Isla interactiva del menú móvil (hidratada solo en pantallas chicas
 * vía `client:media` desde Header.astro).
 * El botón hamburguesa se transforma en "X" con CSS puro; el panel
 * despliega con fade + slide-down y se cierra al navegar, hacer scroll
 * o presionar Escape.
 */
export default function MobileMenu({ links, labels }: MobileMenuProps) {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;

    const cerrar = (): void => setAbierto(false);
    const alPresionarTecla = (evento: KeyboardEvent): void => {
      if (evento.key === 'Escape') cerrar();
    };

    window.addEventListener('scroll', cerrar, { passive: true });
    window.addEventListener('keydown', alPresionarTecla);

    return () => {
      window.removeEventListener('scroll', cerrar);
      window.removeEventListener('keydown', alPresionarTecla);
    };
  }, [abierto]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={abierto}
        aria-controls="menu-movil"
        aria-label={abierto ? labels.closeMenu : labels.openMenu}
        onClick={() => setAbierto((previo) => !previo)}
        className="relative -mr-2 flex h-10 w-10 items-center justify-center"
      >
        <span
          aria-hidden="true"
          className={`absolute h-[1.5px] w-5 bg-ink transition-transform duration-300 ease-out ${
            abierto ? 'rotate-45' : '-translate-y-[4px]'
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute h-[1.5px] w-5 bg-ink transition-transform duration-300 ease-out ${
            abierto ? '-rotate-45' : 'translate-y-[4px]'
          }`}
        />
      </button>

      <nav
        id="menu-movil"
        aria-label={labels.mobileNav}
        className={`absolute inset-x-0 top-full border-b border-line bg-cream transition-all duration-300 ease-out ${
          abierto
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <ul className="px-6 py-3">
          {links.map((link) => (
            <li key={link.href} className="border-b border-line/60 last:border-b-0">
              <a
                href={link.href}
                onClick={() => setAbierto(false)}
                className="block py-4 font-display text-lg text-ink transition-colors hover:text-sage-deep"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
