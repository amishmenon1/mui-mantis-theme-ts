// project import
import other from './other';
import pages from './pages';
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [pages, other]
};

export default menuItems;
