import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routeLink: '/dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard',
  },
  {
    routeLink: 'product',
    icon: 'fal fa-box-open',
    label: 'Produits',
    items: [
      {
        routeLink: '/product/addproduct',
        label: 'Add Product',
      },
      {
        routeLink: '/product/productlist',
        label: 'Product List',
      },
      {
        routeLink: '/product/productcategory',
        label: 'Category',
      },
      {
        routeLink: '/product/addbrand',
        label: 'Brand',
      },
      {
        routeLink: '/product/unit',
        label: 'Unit/Value',
      },
      {
        routeLink: '/product/generatebarcode',
        label: 'Generate Barcode',
      },
      {
        routeLink: '/product/addadjustment',
        label: 'Add Adjustment',
      },
      {
        routeLink: '/product/adjustment',
        label: 'Adjustment',
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
            routeLink: '/trading/sales/newsale',
            label: 'New Sales',
          },
          {
            routeLink: '/trading/sales/possale',
            label: 'POS Sales',
          },
          {
            routeLink: '/trading/sales/managesale',
            label: 'Sales List',
          },
          {
            routeLink: '/trading/sales/salereturns',
            label: 'Sales Returns',
          }
        ],
      },
      {
        routeLink: 'trading/purchase',
        label: 'Achats',
        items: [
          {
            routeLink: '/trading/purchase/addpurchase',
            label: 'Add Purchase',
          },
          {
            routeLink: '/trading/purchase/managepurchase',
            label: 'Manage Purchase',
          },
          {
            routeLink: '/trading/purchase/purchasereturns',
            label: 'Purchase Returns',
          }
        ],
      },
      {
        routeLink: 'trading/invoice',
        label: 'Facture/Facturation',
        items: [
          {
            routeLink: '/trading/invoice/saleinvoice',
            label: 'Sale Invoice',
          },
          {
            routeLink: '/trading/invoice/salesinvoice',
            label: 'Sale List Invoice',
          },
          {
            routeLink: '/trading/invoice/purchaseinvoice',
            label: 'Purchase Invoice',
          },
          {
            routeLink: '/trading/invoice/purchaselistinvoice',
            label: 'Purchase List Invoice',
          },
          {
            routeLink: '/trading/invoice/expenseinvoice',
            label: 'Expense Invoice',
          },
          {
            routeLink: '/trading/invoice/expenselistinvoice',
            label: 'Expense List Invoice',
          }
        ],
      },
    ],
  },
  {
    routeLink: 'people',
    icon: 'fal fa-users',
    label: 'Acteurs',
    items: [
      {
        routeLink: '/people/addcustomer',
        label: 'Add Customer',
      },
      {
        routeLink: '/people/customerlist',
        label: 'Customer List',
      },
      {
        routeLink: '/people/addsupplier',
        label: 'Add Supplier',
      },
      {
        routeLink: '/people/supplierlist',
        label: 'Supplier List',
      },
      {
        routeLink: '/people/addbiller',
        label: 'Add Biller',
      },
      {
        routeLink: '/people/billerlist',
        label: 'Biller List',
      }
    ],
  },
  {
    routeLink: 'users',
    icon: 'fal fa-user',
    label: 'Utilisateurs',
    items: [
      {
        routeLink: '/client/adduser',
        label: 'Add User',
      },
      {
        routeLink: '/client/userlist',
        label: 'User List',
      },
      {
        routeLink: '/client/createrole',
        label: 'Create Role',
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
    routeLink: 'transfer',
    icon: 'fal fa-tags',
    label: 'Nutrition',
    items: [
      {
        routeLink: '/transfer/addtransfer',
        label: 'Add Transfer',
      },
      {
        routeLink: '/transfer/transferlist',
        label: 'Transfer List',
      },
    ],
  },
  {
    routeLink: '/warehouselist',
    icon: 'fal fa-building',
    label: 'Décès',
  },
  {
    routeLink: '/rolepermission',
    icon: 'fal fa-cog',
    label: 'Outils Administratifs',
  },
];
