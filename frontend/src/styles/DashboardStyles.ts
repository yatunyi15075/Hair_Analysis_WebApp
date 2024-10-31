const DashboardStyles = {
  container: "min-h-screen flex flex-col md:flex-row bg-white",
  mobileToggle: "flex md:hidden justify-between items-center bg-gray-800 text-white px-4 py-3",
  mobileTitle: "text-2xl font-bold",
  toggleButton: "focus:outline-none",
  toggleIcon: "text-2xl",
  sidebar: "bg-white text-gray-700 w-64 py-7 px-4 shadow-md flex flex-col justify-between transition-transform duration-300", // Set flex-col and justify-between
  logoContainer: "flex items-center justify-center py-4 mb-6",
  logoImage: "w-10 h-10",
  logoText: "text-2xl font-bold text-gray-800 ml-3",
  nav: "space-y-4 flex-1", // Makes the nav section flexible
  navLink: "flex items-center py-2.5 px-4 rounded transition-colors duration-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  navIcon: "mr-3 text-gray-600",
  navText: "text-base font-medium",
  activeLink: "bg-green-100 text-gray-900",
  sidebarFooter: "self-end flex flex-col items-center py-4 border-t border-gray-300", // Adjusted to self-end
  credits: "text-sm font-medium text-gray-600 mb-2",
  avatarContainer: "cursor-pointer",
  avatarImage: "w-12 h-12 rounded-full border-2 border-gray-300 mb-2",
  userInfo: "text-center",
  userName: "text-sm font-semibold text-gray-800",
  userEmail: "text-xs text-gray-500",
  userCard: "absolute right-16 top-20 bg-white border border-gray-300 rounded-md shadow-lg p-4 z-50",
  cardHeader: "flex items-center mb-2",
  cardAvatar: "w-12 h-12 rounded-full border-2 border-gray-300 mr-2",
  cardUserName: "font-semibold",
  cardUserEmail: "text-sm text-gray-500",
  mainContent: "flex-1 p-10 text-gray-800",
};

export default DashboardStyles;
