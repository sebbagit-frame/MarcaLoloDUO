import type { Service } from '../../domain/types';

interface ServiceCardProps {
  service: Service;
}

/**
 * Tarjeta de servicio aislada en React (.tsx).
 * Hoy es presentacional; queda lista para sumar interacción
 * (hover states complejos, expansión, etc.) o migrar a Next.js sin cambios.
 */
export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col bg-cream p-8 transition-colors duration-300 hover:bg-sage-soft/40 md:p-10">
      <span className="font-display text-sm text-sage-deep">
        {service.index}
      </span>
      <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-ink md:text-2xl">
        {service.title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
        {service.description}
      </p>
    </article>
  );
}
