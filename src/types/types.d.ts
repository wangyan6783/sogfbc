type navbarData = Array<sidebarData>;

type sidebarData = {
  mainMenu: string;
  subMenu: Array<navbarSubMenu>;
};

type navbarSubMenu = {
  title: string;
  link: string;
};

type navbarState = {
  showAboutUs: boolean;
  showEvents: boolean;
  showMinistry: boolean;
  showCommunity: boolean;
};
