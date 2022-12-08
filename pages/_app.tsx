import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import Header from '../components/Layout/Header/Header';
import HamburgerMenu from '../components/Layout/HamburgerMenu/HamburgerMenu';
import WrapperFullPage from '../components/Layout/WrapperFullPage/WrapperFullPage';
import Footer from '../components/Layout/Footer/Footer';
import Main from '../components/Layout/Main/Main';
import AdLarge from '../components/Ads/AdLarge';

export default function App({ Component, pageProps }: AppProps) {
    
    //https://www.gamerguides.com/

    return(
        <RecoilRoot>
            <WrapperFullPage>
                <Header></Header>

                <HamburgerMenu></HamburgerMenu>

                <Main>
                    <Component {...pageProps} />
                </Main>
                
                <AdLarge></AdLarge>

                <Footer></Footer>
            </WrapperFullPage>
        </RecoilRoot>
    );
}
