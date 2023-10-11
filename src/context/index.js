import AuthProvider from "./AuthProvider";
import NotificationProvider from "./NotificationProvider";
import SearchProvider from "./SearchProvider";
import ThemeProvider from "./ThemeProvider";

function ContextProviders({ children }) {
  return (
    <NotificationProvider>
      <SearchProvider>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </SearchProvider>
    </NotificationProvider>
  );
}

export default ContextProviders;
