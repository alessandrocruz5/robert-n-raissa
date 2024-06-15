// import {
//   trigger,
//   transition,
//   style,
//   animate,
//   group,
//   query,
// } from '@angular/animations';

// export const fadeOutAnimation = trigger('routeAnimations', [
//   transition('LockScreenPage => MainContentPage', [
//     query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
//       optional: true,
//     }),
//     group([
//       query(
//         ':leave',
//         [
//           style({ opacity: 1 }),
//           animate(
//             '0.8s ease-in-out',
//             style({ opacity: 0, transform: 'translateX(-100%)' })
//           ),
//         ],
//         { optional: true }
//       ),
//       query(
//         ':enter',
//         [
//           style({ opacity: 0, transform: 'translateX(100%)' }),
//           animate(
//             '0.8s ease-in-out',
//             style({ opacity: 1, transform: 'translateX(0%)' })
//           ),
//         ],
//         { optional: true }
//       ),
//     ]),
//   ]),
//   transition('MainContentPage => LockScreenPage', [
//     query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
//       optional: true,
//     }),
//     group([
//       query(
//         ':leave',
//         [
//           style({ opacity: 1 }),
//           animate(
//             '0.8s ease-in-out',
//             style({ opacity: 0, transform: 'translateX(100%)' })
//           ),
//         ],
//         { optional: true }
//       ),
//       query(
//         ':enter',
//         [
//           style({ opacity: 0, transform: 'translateX(-100%)' }),
//           animate(
//             '0.8s ease-in-out',
//             style({ opacity: 1, transform: 'translateX(0%)' })
//           ),
//         ],
//         { optional: true }
//       ),
//     ]),
//   ]),
// ]);

import {
  trigger,
  transition,
  style,
  animate,
  group,
  query,
} from '@angular/animations';

// export const fadeOutAnimation = trigger('routeAnimations', [
//   transition('LockScreenComponent => LandingComponent', [
//     query(':leave', style({ position: 'fixed', width: '100%' }), {
//       optional: true,
//     }),
//     group([
//       query(
//         ':leave',
//         [
//           style({ opacity: 1 }),
//           animate('0.5s ease-in-out', style({ opacity: 0 })),
//         ],
//         { optional: true }
//       ),
//     ]),
//   ]),
//   transition('LandingComponent => LockScreenComponent', [
//     query(':leave', style({ position: 'fixed', width: '100%' }), {
//       optional: true,
//     }),
//     group([
//       query(
//         ':leave',
//         [
//           style({ opacity: 1 }),
//           animate('0.5s ease-in-out', style({ opacity: 0 })),
//         ],
//         { optional: true }
//       ),
//     ]),
//   ]),
// ]);

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
