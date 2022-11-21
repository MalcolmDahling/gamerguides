import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import Header from '../components/Header/Header';
import HamburgerMenu from '../components/HamburgerMenu/HamburgerMenu';
import WrapperFullPage from '../components/WrapperFullPage/WrapperFullPage';
import Footer from '../components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
    
    //https://www.gamerguides.com/

    return(
        <RecoilRoot>
            <WrapperFullPage>
                <Header></Header>

                <HamburgerMenu></HamburgerMenu>

                <main>
                    <Component {...pageProps} />
                </main>
                
                <Footer></Footer>
            </WrapperFullPage>
        </RecoilRoot>

    );
}
