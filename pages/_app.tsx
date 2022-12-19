import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import Header from '../components/Layout/Header/Header';
import HamburgerMenu from '../components/Layout/HamburgerMenu/HamburgerMenu';
import WrapperFullPage from '../components/Layout/WrapperFullPage/WrapperFullPage';
import Footer from '../components/Layout/Footer/Footer';
import Main from '../components/Layout/Main/Main';
import AdBottom from '../components/Ads/AdBottom';
import useBreakpoint from 'use-breakpoint';
import { useRouter } from 'next/router';

const BREAKPOINTS = {low: 1, high: 1000};

export default function App({ Component, pageProps }: AppProps) {
    
    //https://www.gamerguides.com/

    const {breakpoint} = useBreakpoint(BREAKPOINTS, 'high');
    const router = useRouter();


    return(
        <RecoilRoot>
            <WrapperFullPage>
                <Header></Header>

                <HamburgerMenu></HamburgerMenu>

                <Main index={router.pathname === '/' ? true : false}>
                    <Component {...pageProps} />
                </Main>
                
                {router.pathname === '/' && <AdBottom></AdBottom>}
                
                <Footer></Footer>
            </WrapperFullPage>
        </RecoilRoot>
    );
}
