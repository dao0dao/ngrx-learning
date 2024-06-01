import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideImports } from './import.providers.from';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todosReducer } from './store/todos/reducer';
import { provideEffects } from '@ngrx/effects';
import { TodosEffectsService } from './store/todos/todos-effects.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideImports,
    provideStore({
      todos: todosReducer,
    }),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true, // If set to true, the connection is established within the Angular zone
    }),
    provideEffects([TodosEffectsService]),
  ],
};
