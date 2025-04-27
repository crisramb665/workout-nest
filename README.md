# workout-backend-nest

Common structure:
src/
├── app.module.ts
├── main.ts
│
├── workouts/
│   ├── workouts.module.ts
│   ├── workouts.controller.ts
│   ├── workouts.service.ts
│   ├── dto/
│   │   └── create-workout.dto.ts
│   └── entities/
│       └── workout.entity.ts
│
├── health/
│   └── health.controller.ts
│
├── common/              <-- Código compartido
│   ├── middlewares/
│   ├── filters/
│   ├── interceptors/
│   ├── guards/
│   └── pipes/
│
├── utils/               <-- Funciones auxiliares
│   └── date.util.ts
│
├── config/              <-- Configuraciones (como .env, base de datos, etc)
│   └── app.config.ts
