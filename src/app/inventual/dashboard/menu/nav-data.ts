import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routeLink: '/dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard',
  },
  {
    routeLink: 'products',
    icon: 'fal fa-box-open',
    label: 'Produits',
    items: [
      {
        routeLink: '/products/add',
        label: 'Ajouter un géniteur',
      },
      {
        routeLink: '/products/add_aliment',
        label: 'Ajouter un aliment',
      },
      {
        routeLink: '/products/list',
        label: 'Liste de Products',
      }
    ],
  },
  {
    routeLink: 'cycles',
    icon: 'fal fa-fish',
    label: 'Cycles',
    items: [
      {
        routeLink: '/cycles/add',
        label: 'Ajouter un Cycle',
      },
      {
        routeLink: '/cycles/list',
        label: 'Liste de Cycles',
      }
    ],
  },
  {
    routeLink: 'calibrages',
    icon: 'fal fa-tag',
    label: 'Calibrage',
    items: [
      {
        routeLink: '/calibrages/add',
        label: 'Ajouter un calibrage',
      },
      {
        routeLink: '/calibrages/list',
        label: 'Liste de Calibrage',
      }
    ],
  },
  {
    routeLink: 'nutritions',
    icon: 'fal fa-cookie',
    label: 'Nutrition',
    items: [
      {
        routeLink: '/nutritions/add',
        label: 'Ajouter une nutrition',
      },
      {
        routeLink: '/nutritions/list',
        label: 'Liste des nutritions',
      },
    ],
  },
  {
    routeLink: '/deces',
    icon: 'fal fa-building',
    label: 'Décès',
    items: [
      {
        routeLink: '/deces/add',
        label: 'Ajuter un décès',
      },
      {
        routeLink: '/deces/list',
        label: 'Liste des décès',
      },
    ],
  },
  {
    routeLink: 'trading',
    icon: 'fal fa-sack-dollar',
    label: 'Commerce',
    items: [
      {
        routeLink: 'trading/sales',
        label: 'Ventes',
        items: [
          {
            routeLink: '/trading/sales/add',
            label: 'Ajouter une vente',
          },
          {
            routeLink: '/trading/sales/list',
            label: 'Liste des ventes',
          }
        ],
      },
      {
        routeLink: 'trading/purchase',
        label: 'Achats',
        items: [
          {
            routeLink: '/trading/purchases/add',
            label: 'Ajouter un achat',
          },
          {
            routeLink: '/trading/purchases/list',
            label: 'Liste des achats',
          }
        ],
      }
    ],
  },
  {
    routeLink: 'authors',
    icon: 'fal fa-users',
    label: 'Acteurs',
    items: [
      {
        routeLink: '/authors/suppliers',
        label: 'Fournisseurs',
        items: [
          {
            routeLink: '/authors/suppliers/add',
            label: 'Ajouter un fournisseur',
          },
          {
            routeLink: '/authors/suppliers/list',
            label: 'Liste des fournisseurs',
          }
        ],
      },
      {
        routeLink: '/authors/customers',
        label: 'Clients',
        items: [
          {
            routeLink: '/authors/customers/add',
            label: 'Ajouter un client',
          },
          {
            routeLink: '/authors/customers/list',
            label: 'Liste des clients',
          }
        ],
      }
    ],
  },
  {
    routeLink: 'users',
    icon: 'fal fa-user',
    label: 'Utilisateurs',
    items: [
      {
        routeLink: '/users/add',
        label: 'Ajouter un utilisateur',
      },
      {
        routeLink: '/users/list',
        label: 'Liste des utilisateurs',
      },
    ],
  },
 
  
  {
    routeLink: 'report',
    icon: 'fal fa-inventory',
    label: 'Reports',
    items: [
      {
        routeLink: '/report/salereport',
        label: 'Sales Report',
      },
      {
        routeLink: '/report/purchasereport',
        label: 'Purchase Report',
      },
      {
        routeLink: '/report/paymentreport',
        label: 'Payment Report',
      },
      {
        routeLink: '/report/productreport',
        label: 'Product Report',
      },
      {
        routeLink: '/report/stockreport',
        label: 'Stock Report',
      },
      {
        routeLink: '/report/expensereport',
        label: 'Expense Report',
      },
      {
        routeLink: '/report/userreport',
        label: 'User Report',
      },
      {
        routeLink: '/report/customerreport',
        label: 'Customer Report',
      },
      {
        routeLink: '/report/warehousereport',
        label: 'Warehouse Report',
      },
      {
        routeLink: '/report/supplierreport',
        label: 'Supplier Report',
      },
      {
        routeLink: '/report/discountreport',
        label: 'Discount Report',
      },
      {
        routeLink: '/report/taxreport',
        label: 'Tax Report',
      },
      {
        routeLink: '/report/shippingchargereport',
        label: 'Shipping Charge',
      }
    ],
  },
  {
    routeLink: '/rolepermission',
    icon: 'fal fa-cog',
    label: 'Outils Administratifs',
  },
];
