import {
  trigger,
  transition,
  style,
  animate,
  group,
  query,
  state,
} from '@angular/animations';

export const fadeOutAnimation = trigger('routeAnimations', [
  transition('LockScreenComponent => LandingComponent', [
    group([
      query(
        ':leave',
        [
          style({ position: 'fixed', width: '100%' }),
          animate('0.5s ease-out', style({ opacity: 0 })),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({ position: 'fixed', width: '100%', opacity: 0 }),
          animate('0.5s ease-in', style({ opacity: 1 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
  transition('LandingComponent => LockScreenComponent', [
    group([
      query(
        ':leave',
        [
          style({ position: 'fixed', width: '100%' }),
          animate('0.5s ease-out', style({ opacity: 0 })),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({ position: 'fixed', width: '100%', opacity: 0 }),
          animate('0.5s ease-in', style({ opacity: 1 })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);

export const lockScreenAnimation = trigger('messageChange', [
  state(
    'locked',
    style({
      opacity: 1,
      transform: 'translateY(0)',
    })
  ),
  state(
    'unlocked',
    style({
      opacity: 1,
      transform: 'translateY(0)',
    })
  ),
  transition('locked => unlocked', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate('300ms ease-out'),
  ]),
]);
