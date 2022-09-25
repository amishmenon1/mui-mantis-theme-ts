import { ReactElement, ReactNode } from 'react';

// scroll bar
import 'simplebar/src/simplebar.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// apex-chart
import 'styles/apex-chart.css';
import 'styles/react-table.css';

// next
import { NextPage } from 'next';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

// third-party
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// project import
import Locales from 'components/Locales';
import ScrollTop from 'components/ScrollTop';
import RTLLayout from 'components/RTLLayout';
import Snackbar from 'components/@extended/Snackbar';
import { ConfigProvider } from 'contexts/ConfigContext';
import { store, persister } from 'store';
import ThemeCustomization from 'themes';

// types
type LayoutProps = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface Props {
  Component: LayoutProps;
}

export default function App({ Component, pageProps }: AppProps & Props) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <ConfigProvider>
          <ThemeCustomization>
            <RTLLayout>
              <Locales>
                <ScrollTop>
                  <SessionProvider session={pageProps.session} refetchInterval={0}>
                    <>
                      <Snackbar />
                      {getLayout(<Component {...pageProps} />)}
                    </>
                  </SessionProvider>
                </ScrollTop>
              </Locales>
            </RTLLayout>
          </ThemeCustomization>
        </ConfigProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
