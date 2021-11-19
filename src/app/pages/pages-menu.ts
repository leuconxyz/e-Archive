import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Arquivador',
    icon: 'attach-2-outline',
    link: '/pages/upload',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'GenwinIT',
    icon: 'globe-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
];
