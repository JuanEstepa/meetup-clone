# Meetup Clone

Clon de la plataforma [Meetup](https://www.meetup.com/) desarrollado como prueba técnica. Construido con Angular 21, PrimeNG y Tailwind CSS, con enfoque **mobile first**, buenas prácticas de UX y flujo de autenticación con JWT.

---

## Diseño

[Ver mockup en Figma](https://www.figma.com/design/OQOuVY1MvFKNWPf4qiZNqa/Meetup-clon?node-id=0-1&t=OmsZ3bvBZLCKOOGw-1)

---

## Funcionalidades

- **Home / Landing** — Exploración de eventos destacados y categorías
- **Vista detalle de evento** — Información completa del evento: descripción, fecha, ubicación y asistentes
- **Login / Auth** — Autenticación simulada con JWT almacenado en `localStorage`
- **Dashboard de usuario** — Vista protegida accesible solo para usuarios autenticados, con guard de JWT

---

## Autenticación

La autenticación se gestiona mediante un JWT simulado (sin backend), almacenado en `localStorage`. Las rutas protegidas utilizan un **Auth Guard** de Angular que verifica la existencia y validez del token antes de permitir el acceso.

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Angular | 21.2 | Framework principal |
| PrimeNG | 21.1 | Componentes UI |
| @primeng/themes | 21.0 | Sistema de temas |
| Tailwind CSS | 3.4 | Estilos utilitarios |
| TypeScript | 5.9 | Tipado estático |
| Vitest | 4.0 | Testing unitario |
| Prettier | 3.8 | Formato de código |

---

## Estructura del proyecto

```
src/
├── app/
│   ├── core/           # Guards, interceptors, servicios singleton
│   ├── features/       # Módulos por vista (home, detail, auth, dashboard)
│   ├── shared/         # Componentes y pipes reutilizables
│   └── app.routes.ts   # Configuración de rutas
```

---

## Commits

Los commits siguen la convención **Conventional Commits**:

```
feat: add JWT auth guard for protected routes
feat: implement event detail view
fix: correct mobile layout on home hero section
chore: add prettier configuration
```

---

## 📱 Mobile First

El diseño prioriza la experiencia móvil. Todos los componentes se construyeron partiendo de breakpoints pequeños y escalando hacia desktop, usando las utilidades responsive de Tailwind (`sm:`, `md:`, `lg:`).

---

## ⚙️ Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/JuanEstepa/meetup-clone.git
cd meetup-clone

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

Abre [http://localhost:4200](http://localhost:4200) en tu navegador.

### Credenciales de prueba

Para acceder al dashboard de usuario puedes usar cualquier usuario y contraseña:

---

## Build de producción

```bash
npm run build
```

Los artefactos se generan en la carpeta `dist/`.

---

## 👤 Autor

**Juan Estepa**
[GitHub](https://github.com/JuanEstepa)